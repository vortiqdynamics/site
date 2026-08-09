#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROJECT_DIR="$ROOT_DIR/project"
PUBLISH_DIR="$ROOT_DIR/publish"

PAGES=(
  index.html
  services.html
  solutions.html
  case-studies.html
  about.html
  careers.html
  contact.html
  request-quote.html
  upskill-initiative.html
)

ROOT_FILES=(
  CNAME
  robots.txt
  sitemap.xml
)

for page in "${PAGES[@]}"; do
  cp "$PROJECT_DIR/$page" "$PUBLISH_DIR/$page"
done

for file in "${ROOT_FILES[@]}"; do
  if [[ -f "$PROJECT_DIR/$file" ]]; then
    cp "$PROJECT_DIR/$file" "$PUBLISH_DIR/$file"
  fi
done

rm -rf "$PUBLISH_DIR/assets"
cp -R "$PROJECT_DIR/assets" "$PUBLISH_DIR/assets"

echo "Synced project/ to publish/"
