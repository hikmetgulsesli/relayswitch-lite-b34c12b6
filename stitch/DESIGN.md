---
name: Cyber-Electric Arcade
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e3fdff'
  on-primary: '#00373a'
  primary-container: '#00f3ff'
  on-primary-container: '#006b71'
  inverse-primary: '#00696f'
  secondary: '#ffabf3'
  on-secondary: '#5b005b'
  secondary-container: '#fe00fe'
  on-secondary-container: '#500050'
  tertiary: '#f1ffc2'
  on-tertiary: '#283500'
  tertiary-container: '#bded00'
  on-tertiary-container: '#526800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#ffd7f5'
  secondary-fixed-dim: '#ffabf3'
  on-secondary-fixed: '#380038'
  on-secondary-fixed-variant: '#810081'
  tertiary-fixed: '#c3f400'
  tertiary-fixed-dim: '#abd600'
  on-tertiary-fixed: '#161e00'
  on-tertiary-fixed-variant: '#3c4d00'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  hud-display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  hud-display-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  data-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  hazard-alert:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  grid-unit: 40px
  relay-size: 32px
  path-width: 4px
  gutter: 8px
  margin-edge: 24px
---

## Brand & Style
The design system is engineered for high-velocity engagement and arcade-style precision. The brand personality is aggressive, energetic, and technically sophisticated, evoking the feeling of a high-stakes power grid under pressure. 

The visual style is **Cyber-Electric**, a fusion of modern minimalism and high-contrast neon aesthetics. It prioritizes clarity in high-speed scenarios while maintaining an immersive, glowing atmosphere. The UI is intentionally sharp to convey accuracy, using vibrant light against deep, void-like backgrounds to guide the player's focus toward critical "relays" and "junctions."

## Colors
This design system utilizes a "Lights-Out" palette where the background is a deep, non-reflective navy-charcoal to maximize the luminosity of the neon accents.

- **Primary (Energy Cyan):** Used for active energy paths and healthy relay states.
- **Secondary (Overload Magenta):** Dedicated to critical warnings, high-voltage states, and destructive elements.
- **Tertiary (Boost Lime):** Indicates power-ups, speed increases, and successful junctions.
- **Hazard (Emergency Red):** Reserved strictly for lethal cells and immediate failure states.

All interactive elements must feature a "Bloom" effect (a soft glow) using the element's own hex color at 30-50% opacity to simulate light emission on a screen.

## Typography
Typography in this design system is split between **Sora** for high-impact HUD elements and **Geist** for functional UI. **JetBrains Mono** is introduced for technical data readouts to reinforce the "engineered" aesthetic.

- **HUD Display:** Large, bold, and slightly condensed tracking to feel urgent.
- **Data Labels:** Monospaced fonts ensure that rapidly changing scores and timers do not cause layout jitter.
- **Hierarchy:** Use all-caps for labels and warnings to maximize the industrial, arcade feel.

## Layout & Spacing
The layout is governed by a **strict fixed-grid system** representing the relay field. The playfield is composed of a matrix of "cells" where movement and energy flow are snapped to 40px increments.

- **Playfield:** Centered horizontally. On desktop, the HUD (Score, Energy, Overload) flanks the grid. On mobile, the HUD is pinned to the top and bottom edges.
- **Energy Paths:** These are 4px stroke lines that travel along the center axes of the grid units.
- **Safe Margins:** A 24px inner safe area is maintained at all times to prevent critical HUD elements from touching the screen edge.

## Elevation & Depth
Depth is not conveyed through shadows, but through **Luminance and Bloom**. 

1. **Background (Base):** The #0A0C10 floor.
2. **The Grid (Floor):** Low-opacity (10%) Cyan lines etched into the background.
3. **Inactive Relays:** Flat, 1px Cyan outlines with no fill.
4. **Active Relays/Paths:** Solid color fills with a 12px outer glow (Bloom) of the same color.
5. **HUD Overlays:** 80% opacity background blurs (Glassmorphism) used only for pause menus or level-up screens to keep the game world visible underneath.

## Shapes
This design system utilizes **Sharp (0px)** corners for all primary gameplay elements to emphasize technical precision.

- **Relays:** Perfect squares or octagons.
- **Energy Lines:** 90-degree angles only; no curves.
- **Interactive Buttons:** Sharp rectangles with a double-stroke border.
- **Exceptions:** Very small pips or indicators may use a 1px radius for legibility, but the overarching aesthetic must remain geometric and "hard-edged."

## Components
Consistent styling for the relay ecosystem:

- **Relays:** Square units with a 1px border. When "Powered," the border thickens to 2px and gains a bloom effect.
- **Junctions:** Diamond-shaped nodes where paths intersect. They pulse with Light Cyan when energy is successfully routed.
- **Hazard Cells:** Marked with diagonal "Caution" stripes in Overload Magenta and Emergency Red. They flicker intermittently to indicate danger.
- **Energy Paths:** Vector lines that animate ("flow") from source to destination. The flow speed is dictated by the current game "voltage."
- **HUD Buttons:** High-contrast blocks. On hover/tap, the background and text colors invert instantly (no transition) for a "tactile" arcade response.
- **Combo Chips:** Small, Tertiary (Lime) labels that pop up at the point of action, floating upward before fading.