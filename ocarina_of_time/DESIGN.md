---
name: Desert Manuscript
colors:
  surface: '#fff8f0'
  surface-dim: '#e9d9b1'
  surface-bright: '#fff8f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff3d7'
  surface-container: '#fdedc4'
  surface-container-high: '#f7e7bf'
  surface-container-highest: '#f1e1b9'
  on-surface: '#221b03'
  on-surface-variant: '#4d4635'
  inverse-surface: '#383014'
  inverse-on-surface: '#fff0ca'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#3f6653'
  on-secondary: '#ffffff'
  secondary-container: '#beead1'
  on-secondary-container: '#436b58'
  tertiary: '#625e50'
  on-tertiary: '#ffffff'
  tertiary-container: '#b8b3a2'
  on-tertiary-container: '#494538'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#c1ecd4'
  secondary-fixed-dim: '#a5d0b9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#274e3d'
  tertiary-fixed: '#e9e2d0'
  tertiary-fixed-dim: '#ccc6b4'
  on-tertiary-fixed: '#1e1c10'
  on-tertiary-fixed-variant: '#4a4739'
  background: '#fff8f0'
  on-background: '#221b03'
  surface-variant: '#f1e1b9'
typography:
  headline-xl:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Libre Caslon Text
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system draws inspiration from the intersection of ancient scholarly artifacts and the vast, sun-drenched landscapes of the Gerudo Desert. The personality is one of "Timeless Wisdom"—combining the archival dignity of a preserved scroll with the radiant energy of a desert civilization. 

The aesthetic is **Tactile Minimalism**. It leverages the warmth of physical materials—aged parchment, hammered gold, and sun-bleached stone—while maintaining a clean, modern digital structure. The emotional response should be one of discovery and reverence, as if the user is unearthing a living history. Visual interest is driven by high-contrast typography and subtle "magical luminescence" that mimics the shimmer of heat or the glow of ancient enchantments on a light surface.

## Colors

The palette is anchored in the warm, organic tones of the desert. 

*   **Primary (Triforce Gold):** Used for critical interactions, progress indicators, and "magical" states.
*   **Secondary (Forest Green):** Provides a grounding contrast, used for primary text and significant UI landmarks.
*   **Neutral (Sand Beige / Parchment):** The foundation of the UI. The main background uses `#f4e4bc`, providing a soft, low-strain reading surface that feels like aged paper.
*   **Surface (Cream):** Lighter sand shades are used for containers and cards to create subtle separation from the background without harsh lines.

Text contrast is strictly maintained using the deep Forest Green or a dark Charcoal variant for maximum legibility against the warm neutrals.

## Typography

The typography leads with **Libre Caslon Text**, a typeface that conveys editorial authority and a "hand-pressed" historical feel. Headlines are set with tight letter-spacing and substantial weight to anchor the page.

To ensure the design system remains functional for modern interfaces, **Plus Jakarta Sans** is introduced as a secondary label font. This provides a clean, geometric counterpoint for navigation items, small metadata, and buttons, ensuring clarity where the serif font might become too dense. All text elements should prioritize the Secondary Forest Green color over pure black to maintain the organic, "ink-on-parchment" aesthetic.

## Layout & Spacing

The layout follows a **Fluid Grid** philosophy with generous internal margins to mimic the layout of a formal manuscript. 

*   **Desktop:** A 12-column grid with 24px gutters. Content is centered within a 1200px container.
*   **Mobile:** A 4-column grid with 16px gutters and margins.
*   **Rhythm:** Spacing follows an 8px base unit. Vertical rhythm is prioritized to ensure the long-form text remains readable, with large gaps (48px+) between major sections to emphasize the "scroll-like" flow. 

Avoid cluttered layouts; whitespace in this system represents the emptiness of the desert and the preciousness of the information displayed.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Golden Luminescence** rather than traditional grey shadows.

1.  **Surfaces:** Elements "lift" off the parchment background by shifting to a lighter cream tone (#fdf6e3). 
2.  **Shadows:** Instead of neutral shadows, use "Ambient Glows"—very soft, low-opacity shadows tinted with the Primary Gold color. This suggests the element is illuminated by an inner light or sun-glint.
3.  **Borders:** Use extremely thin (0.5px) strokes in a slightly darker sand tone to define edges where tonal separation is insufficient.
4.  **Glassmorphism:** For overlays or navigation bars, use a high-blur "Frosted Parchment" effect (semi-transparent cream with a backdrop-filter) to maintain the sense of layered material.

## Shapes

The shape language is **Soft (1)**. Corners are slightly rounded (0.25rem) to suggest the wear of time on stone or the natural deckle-edge of hand-made paper. 

Avoid perfectly sharp corners, which feel too industrial, and avoid pill-shapes, which feel too contemporary. Large containers (cards) should use `rounded-lg` (0.5rem) to feel substantial and structural.

## Components

*   **Buttons:** Primary buttons use a solid Forest Green background with Gold text. Secondary buttons use a Gold border with a subtle golden inner glow on hover.
*   **Cards:** Backgrounds use the lightest cream tone. They feature a soft golden bottom-shadow to suggest they are resting just above the parchment.
*   **Input Fields:** Minimalist design with only a bottom-border in Forest Green. When focused, the border transitions to Gold with a faint golden outer glow.
*   **Chips/Labels:** Use the Plus Jakarta Sans font in all-caps. Backgrounds should be a semi-transparent version of the Sand Beige with a Forest Green border.
*   **Dividers:** Use custom SVG dividers that mimic "etched" lines or traditional desert motifs (geometric zig-zags) in a faint Gold stroke.
*   **Lists:** Bullet points are replaced with small, solid Gold diamonds to reinforce the Gerudo aesthetic.