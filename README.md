# vule.us — Personal Academic Website

Source for [vule.us](https://vule.us) — Vu Le, CS PhD student at UMass Amherst & Lawrence Berkeley National Laboratory.

## Stack

- **Site**: Static HTML/CSS, no build step
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com) — auto-deploys on push to `main`
- **Photos**: [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/) via `storage.vule.us`
- **Template**: Based on [Jon Barron's website](https://jonbarron.info)

## Local development

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Adding photos

1. Drop new photos into `gallery/`
2. From a machine with R2 access, run:
   ```bash
   pip install -r scripts/requirements.txt
   python scripts/upload_to_r2.py
   ```
   Compresses images (1920px full, 600px thumbnail), uploads both to R2, appends new entries to `gallery/photos.json`.
3. Edit new entries in `gallery/photos.json` — fill in `caption`, `category`, `alt`:
   ```json
   {
     "file": "https://storage.vule.us/personal-website-photo-gallery/PHOTO.jpg",
     "thumbnail": "https://storage.vule.us/personal-website-photo-gallery/thumbnails/PHOTO.jpg",
     "caption": "Your caption",
     "category": "southwest",
     "alt": "Alt text"
   }
   ```
   Categories: `southwest` · `newengland` · `city` · `wildlife`
4. Commit and push — Cloudflare Pages deploys automatically.

## Re-uploading all photos

```bash
python scripts/upload_to_r2.py --force
```

## Environment

Copy `.env.example` (if present) or create `.env` at repo root:

```
ACCOUNT_ID=<cloudflare account id>
S3_API=https://<account_id>.r2.cloudflarestorage.com
ACCESS_KEY_ID=<r2 access key>
SECRET_ACCESS_KEY=<r2 secret key>
R2_PUBLIC_BASE=https://storage.vule.us
```

`.env` is gitignored — never commit it.
