# Cross-Platform Calculator

A clean, responsive four-function calculator engineered strictly following the Apple Human Interface Guidelines (HIG).

## Features

- **Apple HIG Design System** — Cupertino-inspired rounded pill keys, macOS titlebar with traffic light controls, authentic Apple calculator color palette
- **Light & Dark Mode** — Native dynamic switching with `color-scheme: light dark` and system preference detection
- **Four Functions & Beyond** — Addition, subtraction, multiplication, division, sign toggle (&plusmn;), backspace, chained operations
- **Precision Floating Point** — Dynamic precision formatting up to 12 significant digits with error boundary protection
- **Keyboard Navigation** — Full hardware keyboard support (numbers, numpad, operators, Enter, Backspace, Escape)
- **Accessibility** — WCAG AA contrast compliance, minimum 58pt touch targets, high-contrast focus rings, `prefers-reduced-motion`

## Quick Start

```bash
# Serve locally
python3 -m http.server 8080 -d src
```

Then navigate to `http://localhost:8080`.

## Design System

Engineered strictly following the [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/):
- **Typography:** San Francisco (`-apple-system`, `BlinkMacSystemFont`, `SF Pro Display`, `SF Pro Text`)
- **System Colors:** Apple System Orange (`#FF9500` / `#FF9F0A`), Apple System Blue (`#007AFF`), Apple System Red (`#FF3B30`), Apple System Gray palette
- **Light/Dark Mode:** Full support via `color-scheme: light dark`
- **8pt Grid:** Precision alignment and geometry
- **Touch Targets:** Large, comfortable 58px circular and pill buttons
- **Elevation:** Apple shadow elevation (`.shadow-calc`)
- **Motion:** Spring animations (`cubic-bezier(0.4, 0, 0.2, 1)`)

## License

MIT © 2026 spdedsec
