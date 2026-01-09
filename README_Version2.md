# site-jo-o-felipe

Personal website and portfolio for João Felipe (Kingliipe19) — a simple, responsive site to showcase projects, skills, and contact information.

[![Repo Size](https://img.shields.io/github/repo-size/Kingliipe19/site-jo-o-felipe)](https://github.com/Kingliipe19/site-jo-o-felipe)
[![Languages](https://img.shields.io/github/languages/count/Kingliipe19/site-jo-o-felipe)](https://github.com/Kingliipe19/site-jo-o-felipe)
[![Open in GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)](https://kingliipe19.github.io/site-jo-o-felipe/)

Short tagline: Olá — I'm João Felipe. I build clean, accessible front-end websites and small web projects.

---

## Demo

Live (example): https://kingliipe19.github.io/site-jo-o-felipe/  
If you have a custom domain or a deployed link, replace the URL above.

Screenshots and assets are stored in `assets/images/` — add or update screenshots there and reference them in this README.

---

## Features

- Responsive, mobile-first layout
- Lightweight HTML, CSS, and vanilla JavaScript
- Sections for About, Projects, Skills, and Contact
- Easy to customize and deploy (GitHub Pages or any static host)

---

## Tech stack

- HTML5
- CSS3 (plain CSS, SCSS, or utility frameworks like Tailwind if added)
- JavaScript (vanilla; add frameworks if needed)
- Git / GitHub for version control and hosting (GitHub Pages)

---

## Quick start (run locally)

1. Clone the repository
   git clone https://github.com/Kingliipe19/site-jo-o-felipe.git

2. Open the project folder
   cd site-jo-o-felipe

3. If this is a static site, open `index.html` in your browser. You can also use a lightweight dev server:
   npx http-server -c-1 .

If the project later adds a build step (e.g., with npm, bundlers or frameworks):
- Install dependencies:
  npm install
- Run the dev server:
  npm start

---

## Development notes & customization

- Change the hero headline in `index.html`:
  ```html
  <h1>Olá, eu sou João Felipe</h1>
  <p>Frontend developer — building clean & accessible experiences</p>
  ```

- Update colors and typography in `assets/css/` (or wherever your CSS lives). Consider adding a variables file (CSS custom properties or SCSS) to centralize theme settings.

- Add new projects under `projects/` or in a `data` file you render with JavaScript.

- Contact form: if you add a form, connect it to a service (Formspree, Netlify Forms) or handle submissions on your backend.

---

## Deployment (GitHub Pages)

To publish on GitHub Pages (repository pages):

1. Push your changes to the `main` branch.
2. In the repository Settings → Pages, set the source to `main` branch and `/ (root)`.
3. After a brief build step, your site should be available at:
   https://kingliipe19.github.io/site-jo-o-felipe/

If you prefer a branch-based workflow for Pages (e.g., `gh-pages`), add a GitHub Action or a simple deploy script to push the built files to `gh-pages`.

---

## Project structure (example)

- index.html
- about.html
- projects/
  - project-1.html
- assets/
  - css/
    - main.css
  - js/
    - main.js
  - images/
- README.md
- LICENSE

Adjust the structure above to match what’s actually in your repo.

---

## Contributing

Thanks for your interest in contributing! A minimal workflow:

1. Fork the repository
2. Create a branch for your change:
   git checkout -b feat/your-change
3. Commit your changes:
   git commit -m "Describe your change"
4. Push and open a Pull Request

If you'd like more formal rules (code style, testing, PR template), I can add a CONTRIBUTING.md for you.

---

## License

Add a LICENSE file to specify project terms. Common option:
- MIT License — simple and permissive.

If you want, I can add an MIT LICENSE file to this repo now.

---

## Contact

João Felipe — GitHub: [Kingliipe19](https://github.com/Kingliipe19)  
Email: your-email@example.com (replace with your preferred contact)

---

Notes & next steps
- Replace placeholders (demo URL, email, screenshots) with your real content.
- If you want, I can push this README directly to the repository and/or create a LICENSE and CONTRIBUTING.md. Tell me which files to add or any text changes and I'll update them.