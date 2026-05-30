#!/usr/bin/env python3
"""
Compress and upload gallery photos to Cloudflare R2.
Uploads two versions per photo:
  - full:      FOLDER/filename.jpg        (1920px, ~300KB) — lightbox
  - thumbnail: FOLDER/thumbnails/filename.jpg (600px,  ~60KB) — grid

Updates gallery/photos.json with both URLs after upload.

Usage:
    pip install boto3 pillow python-dotenv
    python scripts/upload_to_r2.py           # skip already-uploaded
    python scripts/upload_to_r2.py --force   # re-upload everything
"""

import os
import io
import json
import sys
from pathlib import Path

import boto3
from botocore.config import Config
from botocore.exceptions import ClientError
from PIL import Image, ImageOps
from dotenv import load_dotenv

# ── config ────────────────────────────────────────────────────────────────────

ROOT        = Path(__file__).parent.parent
GALLERY_DIR = ROOT / "gallery"
PHOTOS_JSON = GALLERY_DIR / "photos.json"
BUCKET      = "public"
FOLDER      = "personal-website-photo-gallery"

FULL_PX      = 1920
FULL_QUALITY = 82
THUMB_PX     = 600
THUMB_QUALITY = 75

SKIP_EXT = {".json", ".html", ".css", ".js", ".heic", ".HEIC"}

# ── load env ──────────────────────────────────────────────────────────────────

load_dotenv(ROOT / ".env")

S3_ENDPOINT = os.environ["S3_API"]
ACCESS_KEY  = os.environ["ACCESS_KEY_ID"]
SECRET_KEY  = os.environ["SECRET_ACCESS_KEY"]
PUBLIC_BASE = os.getenv("R2_PUBLIC_BASE", "").rstrip("/")

if not PUBLIC_BASE:
    print("ERROR: R2_PUBLIC_BASE not set in .env")
    sys.exit(1)

# ── s3 client ─────────────────────────────────────────────────────────────────

s3 = boto3.client(
    "s3",
    endpoint_url=S3_ENDPOINT,
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    region_name="auto",
    config=Config(
        s3={"addressing_style": "path"},
        signature_version="s3v4",
    ),
)

# ── helpers ───────────────────────────────────────────────────────────────────

def ensure_bucket():
    try:
        s3.head_bucket(Bucket=BUCKET)
    except ClientError as e:
        if e.response["Error"]["Code"] in ("404", "NoSuchBucket"):
            s3.create_bucket(Bucket=BUCKET)
            print(f"created bucket '{BUCKET}'")
        else:
            raise


def already_uploaded(key):
    try:
        s3.head_object(Bucket=BUCKET, Key=key)
        return True
    except ClientError:
        return False


def compress(path: Path, max_px: int, quality: int) -> bytes:
    img = ImageOps.exif_transpose(Image.open(path))
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    img.thumbnail((max_px, max_px), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, format="JPEG", quality=quality, optimize=True)
    return buf.getvalue()


def put(key: str, data: bytes):
    s3.put_object(
        Bucket=BUCKET,
        Key=key,
        Body=data,
        ContentType="image/jpeg",
        CacheControl="public, max-age=31536000, immutable",
    )


def upload_photo(path: Path, force: bool = False) -> tuple[str, str]:
    """Upload full + thumbnail. Returns (full_url, thumbnail_url)."""
    filename  = path.stem + ".jpg"
    full_key  = f"{FOLDER}/{filename}"
    thumb_key = f"{FOLDER}/thumbnails/{filename}"

    original_kb = path.stat().st_size // 1024

    # full size
    if force or not already_uploaded(full_key):
        data = compress(path, FULL_PX, FULL_QUALITY)
        put(full_key, data)
        print(f"  full  {filename:40s} {original_kb:6d}KB → {len(data)//1024:4d}KB")
    else:
        print(f"  skip  {filename} (full exists)")

    # thumbnail
    if force or not already_uploaded(thumb_key):
        data = compress(path, THUMB_PX, THUMB_QUALITY)
        put(thumb_key, data)
        print(f"  thumb {filename:40s} {original_kb:6d}KB → {len(data)//1024:4d}KB")
    else:
        print(f"  skip  {filename} (thumb exists)")

    return (
        f"{PUBLIC_BASE}/{full_key}",
        f"{PUBLIC_BASE}/{thumb_key}",
    )


def update_photos_json(full_map: dict, thumb_map: dict):
    with open(PHOTOS_JSON) as f:
        photos = json.load(f)

    for photo in photos:
        filename = Path(photo["file"]).stem + ".jpg"
        if filename in full_map:
            photo["file"]      = full_map[filename]
            photo["thumbnail"] = thumb_map[filename]

    with open(PHOTOS_JSON, "w") as f:
        json.dump(photos, f, indent=2)
    print(f"\nupdated photos.json — {len(photos)} entries")


# ── main ──────────────────────────────────────────────────────────────────────

def main():
    force = "--force" in sys.argv

    print(f"bucket : {BUCKET}/{FOLDER}")
    print(f"public : {PUBLIC_BASE}\n")

    ensure_bucket()

    image_exts = {".jpg", ".jpeg", ".JPG", ".JPEG", ".png", ".PNG"}
    photos = sorted(
        p for p in GALLERY_DIR.iterdir()
        if p.suffix in image_exts
    )

    if not photos:
        print("no images found in gallery/")
        return

    full_map  = {}
    thumb_map = {}

    for path in photos:
        full_url, thumb_url = upload_photo(path, force=force)
        filename = path.stem + ".jpg"
        full_map[filename]  = full_url
        thumb_map[filename] = thumb_url

    update_photos_json(full_map, thumb_map)
    print("done.")


if __name__ == "__main__":
    main()
