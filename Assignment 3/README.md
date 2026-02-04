# Assignment 3 — Week 3: JavaScript Interactivity

Overview
- Interactive enhancements for the portfolio site. Implemented JavaScript features include client-side form validation, a to‑do list with localStorage persistence, an image slider, a show/hide toggle, and dark/light mode.

Files
- `index.html` — main page with interactive sections
- `style.css` — styles including dark-mode styles
- `script.js` — all interactive behavior and event listeners
- `images/` — place images referenced by the page

JavaScript features implemented
- Dark mode toggle: `#themeToggle` toggles a `dark` class on the body and saves the preference in `localStorage`.
- Contact form validation: `script.js` validates `name`, `email`, and `message`, shows inline error messages and updates a `#formStatus` element.
- To‑Do list: add items via Enter key, remove items, and persist todos to `localStorage` under the key `assignment3_todos`.
- Image slider: next/previous controls, automatic rotation every 5s.
- Show/hide content: `.toggle-btn` toggles visibility of target elements using `data-target` attributes.


Notes on code structure
- `script.js` exposes small reusable helpers (`qs`, `qsa`) and initializes features on `DOMContentLoaded`.
- Validation uses small helper functions `showError` / `clearError` to keep messages next to fields.
