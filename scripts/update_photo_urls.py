#!/usr/bin/env python3
"""
Rewrite photos.json to use R2 public URLs.
Run once after uploading photos to R2.

Usage:
    python scripts/update_photo_urls.py <public_base_url>

Example:
    python scripts/update_photo_urls.py https://pub-XXXX.r2.dev
    python scripts/update_photo_urls.py https://photos.vule.us
"""

import json
import sys
from pathlib import Path

PHOTOS_JSON = Path(__file__).parent.parent / "gallery" / "photos.json"
FOLDER = "personal-website-photo-gallery"

if len(sys.argv) < 2:
    print("Usage: python scripts/update_photo_urls.py <public_base_url>")
    sys.exit(1)

base = sys.argv[1].rstrip("/")

with open(PHOTOS_JSON) as f:
    photos = json.load(f)

for photo in photos:
    filename = Path(photo["file"]).name  # strip any existing path/URL
    photo["file"] = f"{base}/{FOLDER}/{filename}"

with open(PHOTOS_JSON, "w") as f:
    json.dump(photos, f, indent=2)

print(f"updated {len(photos)} entries → {base}/{FOLDER}/<filename>")
