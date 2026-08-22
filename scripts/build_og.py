"""Generate the Open Graph image (1200x630) from real brand assets."""

import os

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "assets", "og.jpg")
PHOTO = os.path.join(ROOT, "public", "assets", "photos", "suzette-headshot.webp")

W, H = 1200, 630
BG = (247, 244, 238)
INK = (23, 23, 23)
MUTED = (109, 105, 100)

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# subtle warm radial, top-left
for r in range(420, 0, -4):
    alpha = int(40 * (1 - r / 420))
    draw.ellipse([80 - r, 140 - r, 80 + r, 140 + r], outline=None, fill=None)
glow = Image.new("RGB", (W, H), (255, 255, 255))
mask = Image.new("L", (W, H), 0)
md = ImageDraw.Draw(mask)
md.ellipse([-160, -180, 420, 400], fill=60)
img = Image.composite(glow, img, mask)
draw = ImageDraw.Draw(img)

# accent bar
draw.rounded_rectangle([80, 150, 164, 158], radius=4, fill=(240, 68, 134))
draw.rounded_rectangle([164, 150, 208, 158], radius=4, fill=(255, 107, 95))
draw.rounded_rectangle([208, 150, 240, 158], radius=4, fill=(255, 170, 61))

font_dir = "C:/Windows/Fonts"
name_font = ImageFont.truetype(os.path.join(font_dir, "georgiab.ttf"), 96)
role_font = ImageFont.truetype(os.path.join(font_dir, "arial.ttf"), 33)
tag_font = ImageFont.truetype(os.path.join(font_dir, "arial.ttf"), 26)

draw.text((80, 210), "Suzette Sun", font=name_font, fill=INK)
draw.text((80, 340), "Digital Marketing  |  Campaigns  |  Marketing Operations", font=role_font, fill=MUTED)
draw.text((80, 420), "Email  ·  CRM & Automation  ·  Content  ·  Web  ·  Analytics", font=tag_font, fill=MUTED)

# portrait, rounded square, right side
photo = Image.open(PHOTO).convert("RGB")
side = 380
pw, ph = photo.size
crop = photo.crop(((pw - min(pw, ph)) // 2, 0, (pw + min(pw, ph)) // 2, min(pw, ph))).resize((side, side), Image.LANCZOS)
mask = Image.new("L", (side, side), 0)
md = ImageDraw.Draw(mask)
md.rounded_rectangle([0, 0, side, side], radius=28, fill=255)
x, y = W - side - 90, (H - side) // 2
draw.rounded_rectangle([x - 10, y - 10, x + side + 10, y + side + 10], radius=34, outline=(23, 23, 23, 30), width=2)
img.paste(crop, (x, y), mask)

os.makedirs(os.path.dirname(OUT), exist_ok=True)
img.save(OUT, "JPEG", quality=86)
print("og image:", OUT)
