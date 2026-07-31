# Boostme Design System

This document records approved global design decisions. It is the source of
truth for future implementation and must not be changed without approval.

## Brand direction

Boostme should feel minimal, premium, confident, calm, timeless, spacious, and
high-end. Quality should come from typography, whitespace, hierarchy,
proportion, subtle motion, and considered composition.

Avoid generic agency conventions, stock-photo aesthetics, excessive gradients,
visual noise, unnecessary glassmorphism, and flashy animation.

## Typography

- Headings: Spectral
- H1: Spectral 700
- H2: Spectral 600
- H3–H6, body, navigation, controls, labels, cards, and UI: Inter
- Plus Jakarta Sans is not permitted.

Font files must be hosted locally in `assets/fonts/`. Declare `@font-face` rules
only after the approved production font files are available.

## Color palette

| Token | Value | Use |
| --- | --- | --- |
| Primary green | `#00D285` | Primary actions, active states, key highlights |
| Dark navy | `#203749` | Approved dark brand color |
| Night blue | `#0F172A` | Approved darkest brand color |
| Mint | `#E6FBF3` | Approved light brand color |
| Light background | `#F8FAFC` | Approved page background |
| White | `#FFFFFF` | Approved neutral |

Green is reserved for primary actions, active states, and important highlights.

## Layout widths

- Global: 1440px
- Content: 1280px
- Headline: 900px
- Text: 720px
- Hero text: 620px
- Cards: 580–640px

## Spacing

Use only the approved 8-point scale from 8px through 144px. Exceptions are
limited to technical necessities such as 1px borders and 2px outlines.

Recommended section spacing:

- Desktop: 144px
- Tablet: 96px
- Mobile: 72px

The canonical implementation tokens live in `css/variables.css`.

## Accessibility and motion

Every implementation must use semantic HTML, a logical heading hierarchy,
keyboard-accessible interactions, visible focus states, sufficient contrast,
and reduced-motion support.

## Responsive direction

Work desktop-first, then create considered tablet and mobile compositions.
Reassess spacing, hierarchy, typography, alignment, and proportion at each
breakpoint rather than merely stacking desktop elements.
