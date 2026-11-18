# SHAE Dart Cross-Platform Calculator

<div align="center">

```
  ____  _   _    _    _____     __  __    _  _____ _     ____
 / ___|| | | |  / \  | ____|   |  \/  |  / \|_   _| |   | __ )
 \___ \| |_| | / _ \ |  _|     | |\/| | / _ \ | | | |   |  _ \
  ___) |  _  |/ ___ \| |___    | |  | |/ ___ \| | | |___| |_) |
 |____/|_| |_/_/   \_\_____|   |_|  |_/_/   \_\_| |_____|____/
```

> **A dependency-free, Apple-inspired four-function web calculator built with the SHAE Field Manual design system — warm paper, ink, oxide, 0px radius, 1px borders, full keyboard support.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-cyan.svg)](https://spdedsec.github.io/shae-dart-cross-platform-calculator/)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)](LICENSE)

</div>

---

## Overview

**SHAE Dart Cross-Platform Calculator** is a four-function calculator (addition, subtraction, multiplication, division) with clear, delete, keyboard support, and responsive layout. It runs entirely in the browser with zero dependencies — no build step, no frameworks, no external scripts beyond Google Fonts.

### Features

- **Four-function arithmetic:** + − × ÷
- **Clear & Delete:** `C` clears everything, `⌫` deletes the last digit
- **Keyboard support:** full keyboard mapping (digits, operators, Enter/=, Backspace, Escape)
- **Responsive:** 4×4 keypad, optimized from 1280px down to 320px
- **Accessibility:** WCAG AA contrast, visible oxide focus rings, 44px touch targets, native `<button>` elements
- **Zero radius, 1px borders:** strict SHAE Field Manual aesthetic
- **No build step:** static HTML/CSS/JS, deploy anywhere

---

## Installation

### Prerequisites

- Any modern browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local dev server, optional)

### Option 1: Open directly in browser

Clone the repo and open `src/index.html` in your browser:

```bash
git clone https://github.com/spdedsec/shae-dart-cross-platform-calculator.git
cd shae-dart-cross-platform-calculator
open src/index.html          # macOS
xdg-open src/index.html      # Linux
```

### Option 2: Local dev server (recommended)

```bash
cd shae-dart-cross-platform-calculator
make web
# → http://localhost:8080
```

Or use any static file server:

```bash
python3 -m http.server 8080 -d src
# or
npx serve src
```

### Option 3: Deploy to GitHub Pages

The repository includes `.github/workflows/release.yml` that deploys `src/` to GitHub Pages on every push to `main`.

### Option 4: Desktop-like experience

1. Open `src/index.html` in your browser.
2. Use your browser's "Install" / "Add to Home Screen" feature (PWA-like).
3. Or copy the `src/` folder to any web server directory.

---

## Usage

### Mouse / Touch

Click or tap any key. Operators (÷ × − +) are oxide-accented; Equals (`=`) is filled oxide.

### Keyboard

| Key | Action |
|-----|--------|
| `0`–`9` | Input digit |
| `.` | Decimal point |
| `+` | Add |
| `-` | Subtract |
| `*` | Multiply |
| `/` | Divide |
| `Enter` / `=` | Equals |
| `Backspace` | Delete last digit |
| `Escape` | Clear all |

### Division by zero

The display shows `Error: Div by Zero` in oxide. Press `C` to clear.

---

## Repository Layout

```
shae-dart-cross-platform-calculator/
├── src/
│   ├── index.html       # Semantic HTML structure
│   ├── styles.css       # SHAE design system styles
│   ├── app.js           # Calculator state machine
│   └── favicon.svg      # 1-bit oxide square icon
├── scripts/
│   └── install.sh       # Local server + browser launcher
├── Makefile             # test, install, build, clean, web
├── DESIGN.md            # Design system rationale
├── README.md            # This file
├── LICENSE              # MIT
└── .github/workflows/release.yml  # GitHub Pages deploy
```

---

## Testing

This project is browser-only. Manual verification checklist:

```bash
make web
# Open http://localhost:8080 in a browser
# Verify:
#   [ ] Digits 0-9 appear in display
#   [ ] Operators + - * / compute correctly
#   [ ] Division by zero shows error
#   [ ] C clears everything
#   [ ] Backspace deletes last digit
#   [ ] Keyboard input works
#   [ ] Responsive at 320px width
#   [ ] Focus rings visible on Tab navigation
#   [ ] Reduced-motion respected
```

---

## License

MIT © 2026 [spdedsec](https://github.com/spdedsec) `<legendsatya7272@gmail.com>`

Developed under the **SHAE** language & systems architecture project.