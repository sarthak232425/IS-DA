# Assignment 2 — Week 2: CSS Styling

Project overview
- This assignment adds CSS styling to the portfolio site for Week 2. The styled version demonstrates typography, color schemes, layout using Flexbox and Grid, hover effects, and responsive behavior for mobile screens.

Files
- `index.html` — main page (styled)
- `style.css` — external stylesheet implementing Week 2 requirements
- `images/` — project and profile images (not included here)
- `screenshots/` — placeholder for screenshots of the site

CSS concepts used
- CSS reset & box-sizing: `* { box-sizing: border-box }` to normalize layouts.
- Variables: color and spacing variables declared in `:root` for maintainability.
- Selectors: element selectors (`header`), class selectors (`.site-nav a`), id + pseudo-class selectors (`#contactForm input:focus`).
- Layout: header uses Flexbox; the gallery uses CSS Grid for a responsive grid layout.
- Hover & transitions: navigation links and buttons have hover effects and transitions for interactivity.
- Responsive design: media queries at `800px` and `480px` adjust the layout for tablets and phones.
- Accessibility notes: meaningful alt text on images, labels on form fields.

Design decisions
- Font: uses the `Inter` font from Google Fonts for a modern, readable UI.
- Color scheme: a primary blue (`--primary`) with a cyan accent (`--accent`) to keep a clean tech-oriented palette.
- Components: Gallery cards and form inputs use subtle shadows and rounded corners for visual separation.

