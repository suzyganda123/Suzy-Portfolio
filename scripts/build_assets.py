"""Asset pipeline for Suzette Sun portfolio.

Reads source assets from 'Suzy Assets/', writes production WebP/SVG/PDF
files to 'public/assets/' and a machine-readable manifest to
'src/data/assets-manifest.json'.

Idempotent: re-running overwrites outputs. Originals are never touched.
"""

import json
import os
import shutil
import urllib.request

import pypdfium2 as pdfium
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "Suzy Assets")
OUT = os.path.join(ROOT, "public", "assets")
MANIFEST = os.path.join(ROOT, "src", "data", "assets-manifest.json")

WEBP_Q = 82

manifest = []


def out_path(*parts):
    p = os.path.join(OUT, *parts)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    return p


def save_webp(img, dest, max_w):
    if img.width > max_w:
        h = round(img.height * max_w / img.width)
        img = img.resize((max_w, h), Image.LANCZOS)
    if img.mode != "RGB":
        img = img.convert("RGB")
    img.save(dest, "WEBP", quality=WEBP_Q, method=6)
    rel = "/" + os.path.relpath(dest, os.path.join(ROOT, "public")).replace("\\", "/")
    return {"src": rel, "width": img.width, "height": img.height}


def photo(src_name, dest_name, max_w, folder="Profile Photos"):
    src = os.path.join(SRC, folder, src_name)
    img = Image.open(src)
    meta = save_webp(img, out_path("photos", dest_name), max_w)
    manifest.append({"id": dest_name, "kind": "photo", **meta})
    print("photo", dest_name, meta["width"], "x", meta["height"])


def pdf_pages(src_path, dest_name, scale=2.0, pages=(0,), folder=""):
    full = os.path.join(SRC, folder, src_path) if folder else src_path
    doc = pdfium.PdfDocument(full)
    results = []
    for i in pages:
        if i >= len(doc):
            break
        img = doc[i].render(scale=scale).to_pil()
        suffix = f"-p{i + 1}" if len(pages) > 1 else ""
        dest = out_path("work", f"{dest_name}{suffix}.webp")
        meta = save_webp(img, dest, 1400)
        results.append(meta)
        print("pdf", dest_name, i + 1, meta["width"], "x", meta["height"])
    doc.close()
    return results


def social(src_name, dest_name, max_w=1080):
    src = os.path.join(SRC, "Social Posts", src_name)
    img = Image.open(src)
    meta = save_webp(img, out_path("work", "social", dest_name), max_w)
    manifest.append({"id": dest_name, "kind": "social", **meta})
    print("social", dest_name, meta["width"], "x", meta["height"])


    ICONS = {
    "mailchimp": "Mailchimp",
    "hubspot": "HubSpot",
    "n8n": "n8n",
    "googleanalytics": "Google Analytics",
    "googletagmanager": "Google Tag Manager",
    "canva": "Canva",
    "meta": "Meta",
    "wordpress": "WordPress",
    "figma": "Figma",
    "googleads": "Google Ads",
}


def process_hero_asset():
    """Full hero scene — prefer .analysis/heronew.png (final), then newhero2/newhero/heroasset."""
    candidates = [
        os.path.join(ROOT, ".analysis", "heronew.png"),
        os.path.join(ROOT, ".analysis", "newhero2.png"),
        os.path.join(ROOT, "newhero.png"),
        os.path.join(ROOT, "heroasset.png"),
    ]
    src = next((p for p in candidates if os.path.isfile(p)), None)
    if not src:
        print("hero asset missing heronew.png / newhero2.png / newhero.png / heroasset.png")
        return
    img = Image.open(src).convert("RGBA")
    name = os.path.basename(src).lower()
    # Key near-black canvas so the scene sits on the cream page
    if name in ("heronew.png", "newhero2.png", "heroasset.png") or "newhero" in name:
        from collections import deque

        px = img.load()
        w, h = img.size
        # heronew: slightly softer key — keep soft shadows on plinth/laptop
        thresh = 26 if name == "heronew.png" else (28 if "newhero2" in name else 34)

        def is_bg(x, y):
            r, g, b, a = px[x, y]
            return a > 0 and r <= thresh and g <= thresh and b <= thresh

        seen = [[False] * w for _ in range(h)]
        q = deque()
        seeds = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
        step_x = max(1, w // 50)
        step_y = max(1, h // 50)
        for x in range(0, w, step_x):
            seeds.extend([(x, 0), (x, h - 1)])
        for y in range(0, h, step_y):
            seeds.extend([(0, y), (w - 1, y)])
        for x, y in seeds:
            if 0 <= x < w and 0 <= y < h and not seen[y][x] and is_bg(x, y):
                q.append((x, y))
                seen[y][x] = True
        while q:
            x, y = q.popleft()
            r, g, b, a = px[x, y]
            px[x, y] = (r, g, b, 0)
            for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
                if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx] and is_bg(nx, ny):
                    seen[ny][nx] = True
                    q.append((nx, ny))
        img.putalpha(img.getchannel("A").filter(ImageFilter.GaussianBlur(0.6)))
    bbox = img.getbbox()
    if bbox:
        pad = 4
        left = max(0, bbox[0] - pad)
        top = max(0, bbox[1] - pad)
        right = min(img.width, bbox[2] + pad)
        bottom = min(img.height, bbox[3] + pad)
        img = img.crop((left, top, right, bottom))
    dest = out_path("hero", "hero-scene.webp")
    img.save(dest, "WEBP", lossless=True, quality=100, method=6)
    rel = "/" + os.path.relpath(dest, os.path.join(ROOT, "public")).replace("\\", "/")
    manifest.append(
        {
            "id": "hero-scene.webp",
            "kind": "hero",
            "src": rel,
            "width": img.width,
            "height": img.height,
        }
    )
    print("hero", os.path.basename(src), "->", "hero-scene.webp", img.width, "x", img.height)


def process_logos():
    """Brand marks from Logo/.

    Naming:
      logolight.png -> logo-light.webp  (dark mark for cream / light UI)
      logodark.png  -> logo-dark.webp   (white mark for dark UI)
      mainlogo.png  -> logo-color.webp  (gradient mark for accents)

    Black canvas is removed via edge flood-fill so charcoal ink survives.
    """
    from collections import deque

    logo_dir = os.path.join(ROOT, "Logo")
    mapping = {
        "logolight.png": ("logo-light.webp", 400, 40),
        "logodark.png": ("logo-dark.webp", 400, 22),
        "mainlogo.png": ("logo-color.webp", 480, 22),
    }

    def flood_key_black(img, thresh):
        img = img.convert("RGBA")
        w, h = img.size
        px = img.load()

        def is_bg(x, y):
            r, g, b, a = px[x, y]
            return a > 0 and r <= thresh and g <= thresh and b <= thresh

        seen = [[False] * w for _ in range(h)]
        q = deque()
        seeds = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
        step_x = max(1, w // 40)
        step_y = max(1, h // 40)
        for x in range(0, w, step_x):
            seeds.extend([(x, 0), (x, h - 1)])
        for y in range(0, h, step_y):
            seeds.extend([(0, y), (w - 1, y)])
        for x, y in seeds:
            if 0 <= x < w and 0 <= y < h and not seen[y][x] and is_bg(x, y):
                q.append((x, y))
                seen[y][x] = True
        while q:
            x, y = q.popleft()
            r, g, b, a = px[x, y]
            px[x, y] = (r, g, b, 0)
            for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
                if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx] and is_bg(nx, ny):
                    seen[ny][nx] = True
                    q.append((nx, ny))
        return img

    for src_name, (dest_name, max_w, thresh) in mapping.items():
        src = os.path.join(logo_dir, src_name)
        if not os.path.isfile(src):
            print("logo missing", src_name)
            continue
        img = flood_key_black(Image.open(src), thresh)
        bbox = img.getbbox()
        if bbox:
            pad = 6
            left = max(0, bbox[0] - pad)
            top = max(0, bbox[1] - pad)
            right = min(img.width, bbox[2] + pad)
            bottom = min(img.height, bbox[3] + pad)
            img = img.crop((left, top, right, bottom))
        if img.width > max_w:
            nh = round(img.height * max_w / img.width)
            img = img.resize((max_w, nh), Image.LANCZOS)
        dest = out_path("brand", dest_name)
        img.save(dest, "WEBP", quality=95, method=6)
        print("logo", dest_name, img.width, "x", img.height)


def fetch_icons():
    for slug in ICONS:
        dest = out_path("icons", f"{slug}.svg")
        url = f"https://cdn.simpleicons.org/{slug}"
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=20) as r:
                data = r.read()
            if b"<svg" not in data:
                raise ValueError("not an svg")
            with open(dest, "wb") as f:
                f.write(data)
            print("icon", slug, len(data), "bytes")
        except Exception as e:
            print("icon FAIL", slug, e)


def process_png_guides_and_promos():
    """PNG covers from repo root Guides/ and .analysis/ promo folders."""
    jobs = [
        (
            os.path.join(ROOT, "Guides, Checklists, and other Lead Magnets", "BEAT THE HEAT Field Safety Checklist", "1.png"),
            "guide-beat-the-heat-field-safety-checklist.webp",
            1400,
        ),
        (
            os.path.join(ROOT, "Guides, Checklists, and other Lead Magnets", "Heat Stress Compliance Checklist (1)", "1.png"),
            "guide-heat-stress-compliance-checklist.webp",
            1400,
        ),
        (
            os.path.join(ROOT, "Guides, Checklists, and other Lead Magnets", "WORKPLACE VIOLENCE WARNING SIGNS & RESPONSE PROTOCOL CARD (3)", "1.png"),
            "guide-workplace-violence-warning-signs-card.webp",
            1400,
        ),
        (os.path.join(ROOT, ".analysis", "Back to School promo", "1.png"), "email-back-to-school.webp", 1200),
        (os.path.join(ROOT, ".analysis", "Sept Oct Promo", "1.png"), "email-fall-promo.webp", 1200),
    ]
    for src, dest_name, max_w in jobs:
        if not os.path.isfile(src):
            print("png missing", dest_name)
            continue
        img = Image.open(src)
        meta = save_webp(img, out_path("work", dest_name), max_w)
        manifest.append({"id": dest_name, "kind": "work", **meta})
        print("png", dest_name, meta["width"], "x", meta["height"])


def main():
    # Portraits (approved photos only)
    photo("ChatGPT Image Aug 22, 2026, 04_00_45 PM.png", "suzette-headshot.webp", 900)
    photo("ChatGPT Image Aug 22, 2026, 04_00_56 PM.png", "suzette-casual.webp", 1200)
    photo("ChatGPT Image Aug 22, 2026, 04_01_08 PM.png", "suzette-editorial.webp", 1200)

    # Email campaigns (Atlantic Training)
    pdf_pages("C&C Final Draft August 20, 2026 (1).pdf", "email-coffee-compliance", 2.0,
              folder="Email Designs")
    pdf_pages("Give your team the access they need to stay safe, compliant, and prepared, at no additional cost for 90 days. (2).pdf",
              "email-course-access", 2.0, pages=(0,), folder="Email Designs")
    pdf_pages("Sept Oct Promo (2).pdf", "email-fall-promo", 2.0, pages=(0,),
              folder="Email Designs")

    # Lead magnet covers (Atlantic Training)
    guide_dir = os.path.join(SRC, "Guides, Checklists, and other Lead Magnets")
    for f in sorted(os.listdir(guide_dir)):
        if not f.lower().endswith(".pdf"):
            continue
        slug = (
            f.lower().replace(".pdf", "")
            .replace(" ", "-").replace("_", "-").replace(",", "")
        )
        slug = "".join(c for c in slug if c.isalnum() or c == "-")[:40].strip("-")
        pdf_pages(os.path.join(guide_dir, f), f"guide-{slug}", 1.6, pages=(0,))

    process_png_guides_and_promos()

    # Social posts (curated)
    social_map = {
        "8.png": "social-whats-new.webp",
        "32.png": "social-struggling.webp",
        "102.png": "social-safety-shift.webp",
        "150.png": "social-compliance-struggle.webp",
        "185.png": "social-hidden-costs.webp",
        "194.png": "social-new-course.webp",
        "126.png": "social-safety-shift-dark.webp",
        "144.png": "social-team-compliance.webp",
        "160.png": "social-hidden-costs-alt.webp",
        "vesak day.png": "social-cii-vesak.webp",
    }
    for src_name, dest_name in social_map.items():
        social(src_name, dest_name)

    # Certifications
    cert_dir = os.path.join(SRC, "Certifications")
    for f in sorted(os.listdir(cert_dir)):
        low = f.lower()
        slug = (
            os.path.splitext(low)[0].replace(" ", "-").replace("_", "-")
        )
        slug = "".join(c for c in slug if c.isalnum() or c == "-")[:44].strip("-")
        if low.endswith(".pdf"):
            full = os.path.join(cert_dir, f)
            doc = pdfium.PdfDocument(full)
            img = doc[0].render(scale=1.6).to_pil()
            meta = save_webp(img, out_path("certs", f"cert-{slug}.webp"), 1000)
            doc.close()
            print("cert", slug, meta["width"], "x", meta["height"])
        elif low.endswith((".jpg", ".jpeg", ".png")):
            img = Image.open(os.path.join(cert_dir, f))
            meta = save_webp(img, out_path("certs", f"cert-{slug}.webp"), 1000)
            print("cert", slug, meta["width"], "x", meta["height"])

    # CV for download
    cv_dest = out_path("", "Suzette-Sun-CV.pdf")
    shutil.copyfile(os.path.join(SRC, "CVs", "Suzette Elyza Sun CV.pdf"), cv_dest)
    print("cv copied")

    process_hero_asset()
    process_logos()
    fetch_icons()
    try:
        import runpy

        runpy.run_path(os.path.join(ROOT, "scripts", "build_favicons.py"), run_name="__main__")
    except Exception as e:
        print("favicons skip:", e)

    os.makedirs(os.path.dirname(MANIFEST), exist_ok=True)
    with open(MANIFEST, "w") as f:
        json.dump(manifest, f, indent=2)
    print("manifest:", len(manifest), "entries")


if __name__ == "__main__":
    main()
