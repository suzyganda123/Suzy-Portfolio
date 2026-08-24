"""Build favicon set from Logo/mainlogo.png (color emblem only).

Outputs to public/:
  favicon.ico, favicon-48.png, favicon-96.png,
  apple-icon.png (180), icon-192.png, icon-512.png
And src/app/icon.png + apple-icon.png for Next.js App Router.
"""

from __future__ import annotations

import os
from collections import deque

from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "Logo", "mainlogo.png")
PUBLIC = os.path.join(ROOT, "public")
APP = os.path.join(ROOT, "src", "app")
CREAM = (247, 244, 238, 255)


def flood_key_black(img: Image.Image, thresh: int = 22) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()

    def is_bg(x: int, y: int) -> bool:
        r, g, b, a = px[x, y]
        return a > 0 and r <= thresh and g <= thresh and b <= thresh

    seen = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()
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


def extract_mark(img: Image.Image) -> Image.Image:
    """Crop circular emblem only (exclude SUZETTE SUN wordmark)."""
    bbox = img.getbbox()
    if not bbox:
        raise SystemExit("logo mark empty after keying")
    left, top, right, bottom = bbox
    w, h = img.size
    px = img.load()

    cols = [
        sum(1 for y in range(h) if px[x, y][3] > 20)
        for x in range(w)
    ]
    peak = 0
    peak_x = left
    for x in range(left, min(left + 900, w)):
        if cols[x] > peak:
            peak = cols[x]
            peak_x = x

    gap_start = None
    mark_right = left + (bottom - top)
    for x in range(peak_x, min(peak_x + 500, w)):
        if cols[x] < peak * 0.12:
            if gap_start is None:
                gap_start = x
            elif x - gap_start > 6:
                mark_right = gap_start
                break
        else:
            gap_start = None

    crop = img.crop((left, top, min(right, mark_right), bottom))
    bb = crop.getbbox()
    crop = crop.crop(bb) if bb else crop

    # Square pad so star points aren't clipped asymmetrically in icons
    side = max(crop.width, crop.height)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(crop, ((side - crop.width) // 2, (side - crop.height) // 2), crop)
    return square


def squircle(size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    r = int(size * 0.22)
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=r, fill=CREAM)
    return canvas


def compose_icon(mark: Image.Image, size: int, *, padded: bool = True) -> Image.Image:
    canvas = squircle(size)
    inset = int(size * 0.12) if padded else 0
    box = size - inset * 2
    mw, mh = mark.size
    scale = min(box / mw, box / mh)
    nw, nh = max(1, int(mw * scale)), max(1, int(mh * scale))
    resized = mark.resize((nw, nh), Image.LANCZOS)
    x = (size - nw) // 2
    y = (size - nh) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas


def save_png(img: Image.Image, path: str) -> None:
    img.convert("RGBA").save(path, "PNG", optimize=True)
    print("wrote", path, img.size, os.path.getsize(path), "bytes")


def main() -> None:
    if not os.path.isfile(SRC):
        raise SystemExit(f"missing {SRC}")

    keyed = flood_key_black(Image.open(SRC), thresh=22)
    mark = extract_mark(keyed)
    preview = os.path.join(ROOT, ".analysis", "favicon-mark-source.png")
    os.makedirs(os.path.dirname(preview), exist_ok=True)
    mark.save(preview, "PNG")
    print("mark", mark.size, "->", preview)

    sizes = {
        os.path.join(PUBLIC, "favicon-48.png"): 48,
        os.path.join(PUBLIC, "favicon-96.png"): 96,
        os.path.join(PUBLIC, "apple-icon.png"): 180,
        os.path.join(PUBLIC, "icon-192.png"): 192,
        os.path.join(PUBLIC, "icon-512.png"): 512,
        os.path.join(APP, "apple-icon.png"): 180,
        os.path.join(APP, "icon.png"): 512,
    }
    for path, size in sizes.items():
        os.makedirs(os.path.dirname(path), exist_ok=True)
        save_png(compose_icon(mark, size), path)

    ico_path = os.path.join(PUBLIC, "favicon.ico")
    # Pillow embeds the saved image; use 48px master for crisp multi-size ICO
    master = compose_icon(mark, 48).convert("RGBA")
    master.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print("wrote", ico_path, os.path.getsize(ico_path), "bytes")

    # Next.js App Router prefers src/app/favicon.ico over public/
    app_ico = os.path.join(APP, "favicon.ico")
    master.save(app_ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print("wrote", app_ico, os.path.getsize(app_ico), "bytes")

    old_svg = os.path.join(APP, "icon.svg")
    if os.path.isfile(old_svg):
        os.remove(old_svg)
        print("removed", old_svg)


if __name__ == "__main__":
    main()
