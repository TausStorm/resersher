from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random

FONT_PATH = "party/fonts/Inter.ttf"
NEW_NAME = "Carl Michel Rayes"
NEW_PID = "19740617-4099"

def font(size):
    return ImageFont.truetype(FONT_PATH, size)

def smooth_fill(img, region, sample_offset=-15):
    """Fill a region by sampling colors from a clean area nearby, with gaussian blur to blend"""
    x1, y1, x2, y2 = region
    ref_y = max(0, y1 + sample_offset)
    random.seed(42)
    
    # Sample multiple reference rows for better texture
    ref_rows = []
    for dy in range(-20, -5):
        ry = max(0, y1 + dy)
        row = []
        for x in range(x1, x2):
            try: row.append(img.getpixel((x, ry)))
            except: row.append((200, 200, 200))
        ref_rows.append(row)
    
    for y in range(y1, y2):
        ref_row = ref_rows[random.randint(0, len(ref_rows)-1)]
        for x in range(x1, x2):
            idx = x - x1
            if idx < len(ref_row):
                base = ref_row[idx]
            else:
                base = (200, 200, 200)
            noise = random.randint(-3, 3)
            r = max(0, min(255, base[0] + noise))
            g = max(0, min(255, base[1] + noise))
            b = max(0, min(255, base[2] + noise))
            img.putpixel((x, y), (r, g, b))

def simple_fill(img, region):
    """Fill with averaged bg color — clean and simple for uniform backgrounds"""
    x1, y1, x2, y2 = region
    # Sample pixels from multiple rows above region
    pixels = []
    for dy in range(-25, -5):
        ry = max(0, y1 + dy)
        for x in range(x1, x2, 3):
            try: pixels.append(img.getpixel((x, ry)))
            except: pass
    # Also sample from right side at same height
    for y in range(y1, y2, 3):
        for dx in range(5, 25):
            rx = min(img.width - 1, x2 + dx)
            try: pixels.append(img.getpixel((rx, y)))
            except: pass
    
    r = sum(p[0] for p in pixels) // len(pixels)
    g = sum(p[1] for p in pixels) // len(pixels)
    b = sum(p[2] for p in pixels) // len(pixels)
    
    draw = ImageDraw.Draw(img)
    draw.rectangle(region, fill=(r, g, b))

# ============================================================
# NFB CARD (1125 x 732)
# ============================================================
def edit_nfb():
    img = Image.open("party/IMG_0629.jpg")

    # Cover old name + personnummer with texture-matched fill
    smooth_fill(img, (130, 170, 920, 255))
    smooth_fill(img, (230, 253, 760, 325))

    draw = ImageDraw.Draw(img)
    text_color = (28, 28, 48)

    # New name centered
    nf = font(48)
    bb = draw.textbbox((0, 0), NEW_NAME, font=nf)
    tw = bb[2] - bb[0]
    draw.text(((130 + 920) // 2 - tw // 2, 178), NEW_NAME, fill=text_color, font=nf)

    # New personnummer centered
    pf = font(40)
    bb = draw.textbbox((0, 0), NEW_PID, font=pf)
    tw = bb[2] - bb[0]
    draw.text(((230 + 760) // 2 - tw // 2, 260), NEW_PID, fill=text_color, font=pf)

    img.save("party/carl-nfb-license.jpg", quality=95)
    print("NFB done")

# ============================================================
# TRANSPORTSTYRELSEN CARD (2483 x 1708)
# Positions from image:
#   "Namn" label: ~y 400-480 (keep this!)
#   "Taus Sune  Gerner-Rasmussen": ~y 490-640
#   "Personnummer" label: ~y 660-745 (keep this!)
#   "19820708-0634": ~y 750-870
# ============================================================
def edit_ts():
    img = Image.open("party/IMG_0631.jpeg")

    # Cover only the name value (not the "Namn" label above)
    simple_fill(img, (75, 490, 1520, 650))
    # Cover only the personnummer value (not the "Personnummer" label)
    simple_fill(img, (75, 755, 960, 875))

    draw = ImageDraw.Draw(img)
    text_color = (28, 28, 48)

    # New name
    nf = font(90)
    draw.text((90, 510), NEW_NAME, fill=text_color, font=nf)

    # New personnummer  
    pf = font(82)
    draw.text((90, 762), NEW_PID, fill=text_color, font=pf)

    img.save("party/carl-ts-license.jpeg", quality=95)
    print("TS done")

edit_nfb()
edit_ts()
print("All done!")
