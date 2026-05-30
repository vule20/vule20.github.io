#!/usr/bin/env python3
"""
Compress and upload gallery photos to Cloudflare R2.
Updates gallery/photos.json with public R2 URLs after upload.

Usage:
    pip install boto3 pillow python-dotenv
    python scripts/upload_to_r2.py

Env vars required (.env):
    ACCOUNT_ID          Cloudflare account ID
    S3_API              R2 S3-compatible endpoint
    ACCESS_KEY_ID       R2 access key
    SECRET_ACCESS_KEY   R2 secret key
    R2_PUBLIC_BASE      Public base URL for the bucket
                        e.g. https://photos.vule.us  (custom domain)
                          or https://pub-XXXX.r2.dev  (r2.dev subdomain)
"""

import os
import io
import json
import sys
from pathlib import Path

import boto3
from botocore.exceptions import ClientError
from PIL import Image, ImageOps
from dotenv import load_dotenv

# ── config ────────────────────────────────────────────────────────────────────

ROOT        = Path(__file__).parent.parent
GALLERY_DIR = ROOT / "gallery"
PHOTOS_JSON = GALLERY_DIR / "photos.json"
BUCKET      = "personal-website-photo-gallery"

MAX_PX   = 1920   # longest edge
QUALITY  = 82
SKIP_EXT = {".json", ".html", ".css", ".js", ".heic", ".HEIC"}

# ── load env ──────────────────────────────────────────────────────────────────

load_dotenv(ROOT / ".env")

ACCOUNT_ID     = os.environ["ACCOUNT_ID"]
S3_ENDPOINT    = os.environ["S3_API"]
ACCESS_KEY     = os.environ["ACCESS_KEY_ID"]
SECRET_KEY     = os.environ["SECRET_ACCESS_KEY"]
PUBLIC_BASE    = os.getenv("R2_PUBLIC_BASE", "").rstrip("/")

if not PUBLIC_BASE:
    print("ERROR: R2_PUBLIC_BASE not set in .env")
    print("  Set it to your bucket public URL, e.g.:")
    print("    R2_PUBLIC_BASE=https://photos.vule.us")
    print("    R2_PUBLIC_BASE=https://pub-XXXX.r2.dev")
    sys.exit(1)

# ── s3 client ─────────────────────────────────────────────────────────────────

s3 = boto3.client(
    "s3",
    endpoint_url=S3_ENDPOINT,
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    region_name="auto",
)

# ── helpers ───────────────────────────────────────────────────────────────────

def ensure_bucket():
    try:
        s3.head_bucket(Bucket=BUCKET)
        print(f"  bucket '{BUCKET}' exists")
    except ClientError as e:
        if e.response["Error"]["Code"] in ("404", "NoSuchBucket"):
            s3.create_bucket(Bucket=BUCKET)
            print(f"  created bucket '{BUCKET}'")
        else:
            raise


def already_uploaded(key):
    try:
        s3.head_object(Bucket=BUCKET, Key=key)
        return True
    except ClientError:
        return False


def compress(path: Path) -> tuple[bytes, str]:
    """Return compressed image bytes and content-type."""
    img = ImageOps.exif_transpose(Image.open(path))  # fix rotation
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    img.thumbnail((MAX_PX, MAX_PX), Image.LANCZOS)

    buf = io.BytesIO()
    img.save(buf, format="JPEG", quality=QUALITY, optimize=True)
    return buf.getvalue(), "image/jpeg"


def upload(path: Path, force: bool = False) -> str:
    """Compress + upload one file. Returns public URL."""
    key = path.name
    # normalise extension to .jpg for everything we compress
    key = Path(key).stem + ".jpg"

    if not force and already_uploaded(key):
        print(f"  skip  {key} (already uploaded)")
        return f"{PUBLIC_BASE}/{key}"

    original_kb = path.stat().st_size // 1024
    data, ct = compress(path)
    compressed_kb = len(data) // 1024

    s3.put_object(
        Bucket=BUCKET,
        Key=key,
        Body=data,
        ContentType=ct,
        CacheControl="public, max-age=31536000, immutable",
    )
    print(f"  upload {key}  {original_kb}KB → {compressed_kb}KB")
    return f"{PUBLIC_BASE}/{key}"


def update_photos_json(url_map: dict[str, str]):
    """Rewrite photos.json replacing local filenames with R2 URLs."""
    with open(PHOTOS_JSON) as f:
        photos = json.load(f)

    changed = 0
    for photo in photos:
        stem = Path(photo["file"]).stem + ".jpg"
        if stem in url_map:
            photo["file"] = url_map[stem]
            changed += 1

    with open(PHOTOS_JSON, "w") as f:
        json.dump(photos, f, indent=2)
    print(f"\nupdated photos.json — {changed} URLs replaced")


# ── main ──────────────────────────────────────────────────────────────────────

def main():
    force = "--force" in sys.argv

    print(f"bucket : {BUCKET}")
    print(f"public : {PUBLIC_BASE}\n")

    ensure_bucket()

    image_exts = {".jpg", ".jpeg", ".JPG", ".JPEG", ".png", ".PNG"}
    photos = sorted(
        p for p in GALLERY_DIR.iterdir()
        if p.suffix in image_exts and p.suffix not in SKIP_EXT
    )

    if not photos:
        print("no images found in gallery/")
        return

    url_map = {}
    for path in photos:
        url = upload(path, force=force)
        key = Path(url).name
        url_map[key] = url

    update_photos_json(url_map)
    print("\ndone.")


if __name__ == "__main__":
    main()
