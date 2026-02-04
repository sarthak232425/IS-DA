# Assignment 4 — Complete Business Website (Week 4)

I built a complete, responsive business website as part of Week 4. This README explains the project goals, the files I created, how to run and test the site locally, and the decisions I made during development.

Project overview
- I created a multi-page website that demonstrates a modern, accessible, and responsive layout suitable for a small business. The site includes a home page, an about page, a services page, and a contact page with client-side validation.

Files and structure
- `index.html` — homepage with hero, features, and internal navigation.
- `about.html` — company/about page with team and mission sections.
- `services.html` — list of services, pricing or feature blocks.
- `contact.html` — contact form with validation and submission UI.
- `css/` — contains `style.css` and any additional stylesheet partials.
- `js/` — contains `script.js` for interactivity, form validation, and small enhancements.
- `images/` — optimized site images and icons.
- `screenshots/` — expected location for desktop and mobile screenshots for submission.


Design & technical decisions
- Mobile-first responsive design: I used flexible layouts so pages scale well on phones, tablets, and desktop using media queries.
- Layout techniques: I chose CSS Grid for multi-column sections and Flexbox for header and navigation to keep layout predictable.
- Performance: images placed in `images/` are optimized (compressed and resized for web). I used modern image sizes and lazy-loading where appropriate.
- Accessibility: meaningful `alt` attributes for images, proper `label` elements for form controls, and semantic tags (`header`, `nav`, `main`, `section`, `footer`). I tested keyboard navigation and ensured interactive elements have visible focus states.
- JavaScript: `js/script.js` contains reusable functions for form validation, a small navigation enhancement, and any interactive widgets. Form validation provides inline errors and updates a status message for the user.

Features implemented (required)
- At least 3 HTML pages with internal navigation between them.
- Fully responsive CSS with breakpoints for mobile and tablet.
- Contact form with client-side validation and helpful inline messages.
- Image optimization and clear instructions to replace or add images in `images/`.
- Navigation links between pages and consistent header/footer.


What I would include in the final submission
- The full project directory with all pages and subfolders: `index.html`, `about.html`, `services.html`, `contact.html`, `css/`, `js/`, `images/`, and `screenshots/`.
- At least two screenshots in `screenshots/` showing desktop and mobile layouts.
- A short deployment log (one or two lines) in this README describing where I deployed the site (e.g., GitHub Pages link).

