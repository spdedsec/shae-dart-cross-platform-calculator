# SHAE Dart Cross-Platform Calculator — DESIGN.md

> A four-function web calculator with an Apple-like aesthetic, strictly adhering to the SHAE Field Manual design system.

---

## Design Philosophy

**Precise over decorative.** Hairline 1px borders, zero border-radius, aligned data, mono labels. No ornamental noise.

**Confident restraint.** Warm paper (#F2EEE5) ground, ink (#191712) display, oxide (#B3341B) accent buttons. One signal color. No gradients, shadows, glass, or pills.

**Flat and physical.** Border-defined cards, generous negative space. 0px radius everywhere.

**Type does the work.** Archivo for display numerals, Instrument Sans for body/UI, JetBrains Mono for button labels and telemetry. Tabular numerals on display. Uppercase only for short labels.

**Motion is typesetting, state, and orientation — never spectacle.** 160ms state transitions on buttons. Native CSS transitions only. Reduced-motion and reduced-transparency fallbacks.

**Accessibility is part of the aesthetic.** WCAG AA contrast verified (ink/paper 15.6:1, oxide/paper 5.3:1). Visible oxide focus rings (2px outline). 44px minimum touch targets. Complete keyboard paths. No horizontal overflow.

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--paper` | `#F2EEE5` | Page background, button backgrounds |
| `--ink` | `#191712` | Primary text, borders, display background |
| `--oxide` | `#B3341B` | Operator buttons, equals, focus ring, signal |
| `--oxide-dark` | `#8f2a15` | Pressed state for oxide buttons |
| `--border-hairline` | `rgba(25,23,18,0.35)` | Hairline rules, window chrome |
| `--border-strong` | `#191712` | Button borders |

**Contrast Ratios (WCAG AA):**
- Ink on Paper: 15.6:1 (AAA)
- Paper on Oxide: 5.3:1 (AA)
- Paper on Ink: 15.6:1 (AAA)

---

## Typography

| Role | Font | Weight | Size | Notes |
|------|------|--------|------|-------|
| Display (primary) | Archivo | 600 | 44px (desktop) / 36px (mobile) | Tabular numerals |
| Secondary display | Instrument Sans | 400 | 13px | Muted ink |
| Button labels | JetBrains Mono | 600 | 17px | Uppercase for short labels |
| Telemetry | JetBrains Mono | 400 | 10-11px | Uppercase, letter-spacing |
| Body | Instrument Sans | 400 | 14px | Prose |

---

## Layout & Spacing

- Max container: 1280px
- Spacing base: 4px (applied as multiples)
- Calculator window max-width: 420px
- Keypad grid: 4×4, 8px gap (6px mobile)
- Button min-height: 44px (52px mobile) — meets 44px touch target
- Padding: 14px keypad container, 16px display unit

---

## Components

### Calculator Window
Border-defined card (1px ink hairline). No shadow, no radius.

### Display Unit
- Background: ink (#191712)
- Text: paper (#F2EEE5)
- Primary display: Archivo 600, 44px, tabular numerals
- Secondary display: Instrument Sans, 13px, muted paper
- Annunciator bar: JetBrains Mono, 10px, uppercase

### Keypad Grid
4-column CSS Grid. Keys are 1px bordered rectangles.

| Key Type | Background | Border | Text | Hover | Active |
|----------|------------|--------|------|-------|--------|
| Digit | Transparent | Ink hairline | Ink | Ink 8% | Ink 20% |
| Action (C, Bk) | Transparent | Ink hairline | Ink | Ink 10% | Ink 20% |
| Operator (÷ × − +) | Transparent | Oxide | Oxide | Oxide fill, Paper text | Oxide-dark |
| Equals (=) | Oxide | Oxide | Paper | Oxide-dark | Oxide-dark |

### Window Titlebar
Background: 6% ink on paper. Title: JetBrains Mono 10px, uppercase, muted.

### Footer
Hairline top border, telemetry text, links in JetBrains Mono.

---

## Motion

| Transition | Duration | Properties | Reduced Motion |
|------------|----------|------------|----------------|
| Button hover/active | 160ms | background, border-color, color | Disabled |
| Window controls | 160ms | background, border-color, color | Disabled |
| Focus ring | Immediate | outline | N/A |

`@media (prefers-reduced-motion: reduce)` → all transitions disabled.
`@media (prefers-reduced-transparency: reduce)` → hairline opacity increased.

---

## Keyboard Support

| Key | Action |
|-----|--------|
| `0-9` | Input digit |
| `.` | Decimal point |
| `+`, `-` | Add / Subtract |
| `*` | Multiply |
| `/` | Divide |
| `Enter`, `=` | Equals |
| `Backspace` | Delete last digit |
| `Escape` | Clear all (C) |

Focus management: buttons are native `<button>` elements, fully keyboard-navigable with Tab.

---

## Responsiveness

- Desktop (≤1280px): Centered calculator window, 420px max width
- Tablet (≤768px): Full-width window, same keypad density
- Mobile (≤480px): Full-width, 52px button height, 36px display font
- Small mobile (≤320px): Reduced padding, 28px display font
- No horizontal overflow at any viewport

---

## File Map

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
├── DESIGN.md            # This file
├── README.md            # User-facing docs
├── LICENSE              # MIT
└── .github/workflows/release.yml  # GitHub Pages deploy
```

---

## Anti-Patterns Avoided

- No rounded corners (pill buttons)
- No box shadows or elevation
- No gradient fills
- No glassmorphism / backdrop-filter
- No decorative accent confetti
- No animation libraries
- No centered mobile hero — left-aligned at all widths
- No centered content at mobile breakpoints