#!/usr/bin/env bash
# ========================================================================
# SHAE Dart Cross-Platform Calculator — Install Script
# Copyright (c) 2026 spdedsec <legendsatya7272@gmail.com>
# License: MIT
# ========================================================================
#
# Usage:
#   chmod +x scripts/install.sh
#   ./scripts/install.sh
#
# Opens the calculator in the default web browser.
# For desktop use, copy src/ to a web server or use `make web`.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT=8080

echo "===================================================================="
echo "  SHAE Dart Calculator — Installer"
echo "===================================================================="

# Start a local server in the background
python3 -m http.server ${PORT} -d "${SCRIPT_DIR}/src" &
SERVER_PID=$!

echo "==> Serving on http://localhost:${PORT}"
echo "==> PID: ${SERVER_PID}"

# Open in default browser
if command -v xdg-open &>/dev/null; then
    xdg-open "http://localhost:${PORT}" 2>/dev/null &
elif command -v open &>/dev/null; then
    open "http://localhost:${PORT}" 2>/dev/null &
else
    echo "==> Open http://localhost:${PORT} in your browser"
fi

echo "==> Press Ctrl+C to stop the server"
wait ${SERVER_PID}