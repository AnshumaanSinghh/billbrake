"""Draws site/og.png, the preview image LinkedIn and others show when the site is shared.
Usage: python3 scripts/og-image.py  (needs Pillow; run on macOS or edit the font paths)"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG, TEXT, MUTED = "#0f1115", "#e8eaed", "#9aa3ae"
FONT_DIR = Path("/System/Library/Fonts/Supplemental")
bold = lambda s: ImageFont.truetype(str(FONT_DIR / "Arial Bold.ttf"), s)
regular = lambda s: ImageFont.truetype(str(FONT_DIR / "Arial.ttf"), s)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)
d.rectangle([0, 0, W, 10], fill="#4fd1a5")

d.text((72, 70), "BillBrake", font=bold(84), fill=TEXT)
d.text((72, 172), "Hit the brakes before the bill hits you.", font=bold(38), fill="#4fd1a5")
d.text((72, 226), "How to put a hard spending cap on 30+ developer services.", font=regular(30), fill=MUTED)

rows = [
    ("#3fb950", "Stops at the limit"),
    ("#58a6ff", "Hard cap available: turn it on"),
    ("#f0883e", "Partial cap"),
    ("#ff7b72", "No cap: nothing stops the bill"),
]
y = 330
for color, label in rows:
    d.ellipse([74, y + 6, 102, y + 34], fill=color)
    d.text((124, y), label, font=bold(34), fill=TEXT)
    y += 58

d.text((72, 566), "AWS · Google Cloud · Vercel · OpenAI · Firebase · Supabase · and more", font=regular(26), fill=MUTED)

out = Path(__file__).resolve().parent.parent / "site" / "og.png"
img.save(out, optimize=True)
print(f"wrote {out}")
