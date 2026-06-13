"""
Edit real license images: replace Taus's details with Carl Michel Rayes.
Uses threshold-based text detection + OpenCV inpainting.
Only masks actual dark text pixels, preserving background texture/watermarks.
"""

import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

FONT_PATH = "party/fonts/Inter.ttf"
NEW_NAME = "Carl Michel Rayes"
NEW_PID = "19740617-4099"

def pil_font(size):
    return ImageFont.truetype(FONT_PATH, size)


def text_mask_threshold(img, region, threshold=140):
    """
    Create mask by finding dark (text) pixels within a region.
    Only masks pixels darker than threshold — preserves light background/watermarks.
    """
    x1, y1, x2, y2 = region
    h, w = img.shape[:2]
    mask = np.zeros((h, w), dtype=np.uint8)
    
    # Convert region to grayscale
    roi = img[y1:y2, x1:x2]
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    
    # Threshold: text pixels are dark (below threshold)
    _, text_binary = cv2.threshold(gray, threshold, 255, cv2.THRESH_BINARY_INV)
    
    # Place into full mask
    mask[y1:y2, x1:x2] = text_binary
    
    return mask


def smart_inpaint(img_path, text_regions, thresholds, radius=8):
    """
    1. Detect dark text pixels via threshold in each region
    2. Dilate slightly to catch edges  
    3. Inpaint only those pixels
    """
    img = cv2.imread(img_path)
    h, w = img.shape[:2]
    
    # Build combined mask from all regions
    combined_mask = np.zeros((h, w), dtype=np.uint8)
    for region, thresh in zip(text_regions, thresholds):
        region_mask = text_mask_threshold(img, region, thresh)
        combined_mask = cv2.bitwise_or(combined_mask, region_mask)
    
    # Dilate to catch anti-aliased edges around text
    kernel = np.ones((3, 3), np.uint8)
    combined_mask = cv2.dilate(combined_mask, kernel, iterations=3)
    
    # Inpaint — small radius since we're only filling narrow text strokes
    result = cv2.inpaint(img, combined_mask, radius, cv2.INPAINT_NS)
    # Second pass for cleanup
    result = cv2.inpaint(result, combined_mask, radius // 2, cv2.INPAINT_TELEA)
    
    return result, combined_mask


def draw_text(img_cv, texts):
    """Draw text using PIL for nice font rendering."""
    img_rgb = cv2.cvtColor(img_cv, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(img_rgb)
    draw = ImageDraw.Draw(pil_img)
    
    for spec in texts:
        text = spec["text"]
        f = pil_font(spec["size"])
        color = spec.get("color", (28, 28, 48))
        
        if spec.get("center"):
            x1, x2 = spec["center"]
            bbox = draw.textbbox((0, 0), text, font=f)
            tw = bbox[2] - bbox[0]
            x = (x1 + x2) // 2 - tw // 2
        else:
            x = spec["x"]
        
        draw.text((x, spec["y"]), text, fill=color, font=f)
    
    return cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)


# ============================================================
# NFB CARD
# ============================================================
def edit_nfb():
    print("=== NFB ===")
    
    # Regions containing text to remove
    # Using generous regions but threshold will only pick up dark text pixels
    regions = [
        (120, 165, 930, 260),   # name area
        (200, 258, 800, 335),   # personnummer area
    ]
    # Threshold: NFB card bg is ~160-180 gray, text is ~30-80
    thresholds = [145, 145]
    
    clean, mask = smart_inpaint("party/IMG_0629.jpg", regions, thresholds, radius=8)
    
    # Save debug images
    cv2.imwrite("party/debug-nfb-mask.jpg", mask)
    cv2.imwrite("party/carl-nfb-clean.jpg", clean, [cv2.IMWRITE_JPEG_QUALITY, 95])
    print("Inpainted (threshold-based)")
    
    # Draw Carl's details
    result = draw_text(clean, [
        {"text": NEW_NAME, "y": 182, "size": 48, "center": (120, 930)},
        {"text": NEW_PID,  "y": 268, "size": 40, "center": (200, 800)},
    ])
    
    cv2.imwrite("party/carl-nfb-license.jpg", result, [cv2.IMWRITE_JPEG_QUALITY, 95])
    print("Done: party/carl-nfb-license.jpg")


# ============================================================  
# TRANSPORTSTYRELSEN CARD
# ============================================================
def edit_ts():
    print("\n=== Transportstyrelsen ===")
    
    # Regions — generous but threshold isolates text only
    regions = [
        (60, 490, 1550, 660),   # name value
        (60, 750, 960, 885),    # personnummer value
    ]
    # TS card bg is ~200-220 gray, text is ~30-80, catch anti-aliased edges too
    thresholds = [185, 185]
    
    clean, mask = smart_inpaint("party/IMG_0631.jpeg", regions, thresholds, radius=12)
    
    cv2.imwrite("party/debug-ts-mask.jpg", mask)
    cv2.imwrite("party/carl-ts-clean.jpeg", clean, [cv2.IMWRITE_JPEG_QUALITY, 95])
    print("Inpainted (threshold-based)")
    
    # Draw Carl's details
    result = draw_text(clean, [
        {"text": NEW_NAME, "x": 90, "y": 525, "size": 90},
        {"text": NEW_PID,  "x": 90, "y": 768, "size": 82},
    ])
    
    cv2.imwrite("party/carl-ts-license.jpeg", result, [cv2.IMWRITE_JPEG_QUALITY, 95])
    print("Done: party/carl-ts-license.jpeg")


if __name__ == "__main__":
    edit_nfb()
    edit_ts()
    print("\n✓ Complete")
