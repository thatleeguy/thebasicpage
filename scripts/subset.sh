#!/usr/bin/env bash
# Pin the optical-size axis and subset to the glyphs an English marketing page
# actually uses, then re-compress to woff2.
set -euo pipefail

SRC="${1:?src dir}"
OUT="${2:?out dir}"
WORK="$(mktemp -d)"
mkdir -p "$OUT"

# Basic Latin + Latin-1 (accents in names) + the punctuation good typography needs.
UNI='U+0020-007E,U+00A0-00FF,U+2010-2015,U+2018-201F,U+2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122,U+2190-2193,U+2212,U+2713'

sub() { # sub <in.woff2> <out-name> [axis-pins...]
  local in="$1" name="$2"; shift 2
  fonttools ttLib.woff2 decompress -o "$WORK/$name.ttf" "$in" >/dev/null
  local cur="$WORK/$name.ttf"
  if [ "$#" -gt 0 ]; then
    fonttools varLib.instancer -o "$WORK/$name.inst.ttf" "$cur" "$@" >/dev/null
    cur="$WORK/$name.inst.ttf"
  fi
  pyftsubset "$cur" \
    --output-file="$OUT/$name.woff2" \
    --flavor=woff2 \
    --unicodes="$UNI" \
    --layout-features='kern,liga,clig,calt,rlig,ccmp,locl,mark,mkmk' \
    --no-hinting \
    --desubroutinize \
    --drop-tables+=DSIG,STAT
  printf '%-38s %8.1f KB  (was %.1f KB)\n' "$name.woff2" \
    "$(echo "scale=1; $(stat -f%z "$OUT/$name.woff2") / 1024" | bc)" \
    "$(echo "scale=1; $(stat -f%z "$in") / 1024" | bc)"
}

# Display face: only ever used large, so pin optical size up and keep the weight range.
sub "$SRC/bricolage-grotesque-400-800.woff2" bricolage opsz=40
# Body face: pin optical size to text size, keep the weight range for 400->700.
sub "$SRC/dm-sans-400-700.woff2"            dmsans    opsz=14
sub "$SRC/dm-mono-400.woff2"                dmmono-400
sub "$SRC/dm-mono-500.woff2"                dmmono-500

echo "---"
printf 'TOTAL: %.1f KB\n' "$(echo "scale=1; $(cat "$OUT"/*.woff2 | wc -c) / 1024" | bc)"
rm -rf "$WORK"
