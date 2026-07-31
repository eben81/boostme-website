# HTML to Bricks Import Guide

The codebase is structured to support later transfer into WordPress Bricks
Builder with HTML to Bricks.

## Authoring rules

- Use semantic HTML and keep the DOM shallow.
- Prefer reusable classes over element IDs or page-specific selectors.
- Keep selectors shallow and avoid inline styles and `!important`.
- Use CSS custom properties for approved global primitives.
- Prefer CSS to JavaScript; JavaScript must be progressive enhancement.
- Keep component and page responsibilities separate.
- Preserve accessible names, native controls, focus behavior, and heading order.

## Import sequence

When an approved page or component is ready:

1. Import the semantic markup into Bricks.
2. Map reusable classes without renaming shared conventions.
3. Load global tokens and styles before component styles.
4. Add JavaScript only for functionality that survives the Bricks environment.
5. Verify desktop, tablet, and mobile layouts in Bricks.
6. Re-test keyboard access, visible focus, reduced motion, and layout stability.

## Stylesheet order

The reference HTML loads styles in this order:

1. `css/global.css` (which imports `variables.css`)
2. `css/components.css`
3. `css/animations.css`
4. `css/responsive.css`

Keep this order consistent in the WordPress/Bricks configuration.
