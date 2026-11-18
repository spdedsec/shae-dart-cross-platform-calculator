# ========================================================================
# SHAE Dart Cross-Platform Calculator — Makefile
# Copyright (c) 2026 spdedsec <legendsatya7272@gmail.com>
# License: MIT
# ========================================================================

.PHONY: all test install build clean web

all: test

test:
	@echo "==> No unit tests (project is browser-only)"
	@echo "==> Visual verification required in browser"

install:
	@echo "==> Installing shae-dart-calculator..."
	@bash scripts/install.sh

build:
	@echo "==> No build step (static HTML/CSS/JS)"
	@echo "==> Assets ready in src/"

clean:
	@echo "==> Cleaning..."
	@rm -rf dist
	@rm -f *.pyc

web:
	@echo "==> Starting local dev server on http://localhost:8080..."
	@python3 -m http.server 8080 -d src

serve: web