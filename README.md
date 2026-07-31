# Boostme Frontend

Production-oriented frontend source for the Boostme website, prepared for a
future WordPress Bricks Builder workflow.

The project is currently initialized only. No page sections, navigation, hero,
or visual design have been implemented.

## Structure

- `assets/` — local images, icons, logos, and font files
- `components/` — reusable component source grouped by type
- `css/` — tokens, global rules, components, motion, and responsive rules
- `js/` — minimal progressive enhancement
- `pages/` — page-specific implementation source
- `docs/` — design system, component inventory, and Bricks import guidance
- `index.html` — semantic development entry point

## Development principles

- Treat `docs/` as the project source of truth.
- Implement only the requested page or component.
- Reuse approved components and never overwrite approved decisions.
- Use semantic HTML, shallow markup, CSS variables, and reusable classes.
- Keep assets local and optimize for accessibility and Core Web Vitals.
- Never invent testimonials, customer figures, case studies, or awards.

## Getting started

Open `index.html` directly for the current empty scaffold. Once implementation
requires a local server, run a simple static server from the project root.

Before adding UI, review all files in `docs/` and confirm the requested scope.
