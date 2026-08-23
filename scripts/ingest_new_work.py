"""One-shot: convert new guide/promo PNGs into public/assets/work WebPs."""
import json
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "assets", "work")
MANIFEST = os.path.join(ROOT, "src", "data", "assets-manifest.json")
WEBP_Q = 82

JOBS = [
    # (src_rel, dest_name, max_w)
    (
        r"Guides, Checklists, and other Lead Magnets\BEAT THE HEAT Field Safety Checklist\1.png",
        "guide-beat-the-heat-field-safety-checklist.webp",
        1400,
    ),
    (
        r"Guides, Checklists, and other Lead Magnets\Heat Stress Compliance Checklist (1)\1.png",
        "guide-heat-stress-compliance-checklist.webp",
        1400,
    ),
    (
        r"Guides, Checklists, and other Lead Magnets\WORKPLACE VIOLENCE WARNING SIGNS & RESPONSE PROTOCOL CARD (3)\1.png",
        "guide-workplace-violence-warning-signs-card.webp",
        1400,
    ),
    (
        r"Guides, Checklists, and other Lead Magnets\Complete Emergency Action Plan Template\1.png",
        "guide-complete-emergency-action-plan-template.webp",
        1400,
    ),
    (
        r"Guides, Checklists, and other Lead Magnets\EAP Pre-Season Audit Checklist\1.png",
        "guide-eap-pre-season-audit-checklist-2.webp",
        1400,
    ),
    (
        r"Guides, Checklists, and other Lead Magnets\The New Hire Safety Onboarding Checklist\1.png",
        "guide-the-new-hire-safety-onboarding-checklist.webp",
        1400,
    ),
    (
        r"Guides, Checklists, and other Lead Magnets\The Safety Program Scorecard\1.png",
        "guide-the-safety-program-scorecard-2.webp",
        1400,
    ),
    (r".analysis\Back to School promo\1.png", "email-back-to-school.webp", 1200),
    (r".analysis\Back to School promo\2.png", "email-back-to-school-p2.webp", 1200),
    (r".analysis\Sept Oct Promo\1.png", "email-fall-promo.webp", 1200),
    (r".analysis\Sept Oct Promo\2.png", "email-fall-promo-p2.webp", 1200),
]


def save_webp(src, dest_name, max_w):
    img = Image.open(src)
    if img.width > max_w:
        h = round(img.height * max_w / img.width)
        img = img.resize((max_w, h), Image.LANCZOS)
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")
    elif img.mode == "RGBA":
        bg = Image.new("RGB", img.size, (247, 244, 238))
        bg.paste(img, mask=img.split()[-1])
        img = bg
    dest = os.path.join(OUT, dest_name)
    os.makedirs(OUT, exist_ok=True)
    img.save(dest, "WEBP", quality=WEBP_Q, method=6)
    print("ok", dest_name, img.width, "x", img.height)
    return {
        "id": dest_name,
        "kind": "work",
        "src": f"/assets/work/{dest_name}",
        "width": img.width,
        "height": img.height,
    }


def main():
    entries = []
    for rel, dest, max_w in JOBS:
        src = os.path.join(ROOT, rel)
        if not os.path.isfile(src):
            print("MISSING", rel)
            continue
        entries.append(save_webp(src, dest, max_w))

    if os.path.isfile(MANIFEST):
        with open(MANIFEST, encoding="utf-8") as f:
            existing = json.load(f)
    else:
        existing = []
    by_id = {e["id"]: e for e in existing if "id" in e}
    for e in entries:
        by_id[e["id"]] = e
    with open(MANIFEST, "w", encoding="utf-8") as f:
        json.dump(list(by_id.values()), f, indent=2)
    print("done", len(entries), "assets")


if __name__ == "__main__":
    main()
