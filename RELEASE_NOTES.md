## SHAE Dart Cross-Platform Calculator v0.1.0

First release of the zero-dependency, Apple-inspired four-function web calculator built with the SHAE Field Manual design system.

### Highlights

- **Four-function arithmetic:** + − × ÷
- **Clear & Delete:** `C` clears everything, `⌫` deletes the last digit
- **Keyboard support:** digits, operators, Enter/=, Backspace, Escape
- **Responsive:** 4×4 keypad with touch-sized targets (44–52px)
- **Accessibility:** WCAG AA contrast (ink/paper 15.6:1, oxide/paper 5.3:1), visible oxide focus rings, full keyboard paths, no horizontal overflow
- **Zero dependencies** — static HTML/CSS/JS, no build step

### Design

- Warm paper `#F2EEE5`, ink `#191712`, oxide `#B3341B`
- Strict 0px radius, 1px borders, border-defined cards
- Archivo / Instrument Sans / JetBrains Mono
- Motion: 160ms state transitions; reduced-motion fallbacks
- No gradients, shadows, glass, pills, or animation libraries

### Usage

```bash
# Local dev server
make web
# → http://localhost:8080

# Or open directly
open src/index.html
```

### Deployment

Live demo is deployed via GitHub Pages from the `main` branch via `.github/workflows/release.yml`.
