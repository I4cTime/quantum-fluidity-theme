#!/usr/bin/env bash
# Composites the marketplace icon:
#   badge (vector) ⊕ original neon Q (raster, screen-blended) ⊕ accents (vector), rounded-corner mask.
# Requires: rsvg-convert, imagemagick. Run from the repo root: npm run build:icon
set -euo pipefail
cd "$(dirname "$0")/.."

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

rsvg-convert -w 512 -h 512 src/icon-badge.svg -o "$tmp/badge.png"
rsvg-convert -w 512 -h 512 src/icon-accents.svg -o "$tmp/accents.png"
magick src/icon-q.png -filter Lanczos -resize 512x512 "$tmp/q.png"
magick -size 512x512 xc:black -fill white -draw "roundrectangle 8,8,504,504 112,112" "$tmp/mask.png"

magick "$tmp/badge.png" "$tmp/q.png" -compose screen -composite \
  "$tmp/accents.png" -compose over -composite \
  "$tmp/mask.png" -compose CopyOpacity -composite \
  icon.png

echo "✓ icon.png"
