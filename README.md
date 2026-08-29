<div align="center">

# A personal profile

[![Deploy to GitHub Pages](https://github.com/haiderCho/haidercho.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/haiderCho/haidercho.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[**View Live →**](https://haidercho.github.io/)

</div>

---

## ✦ Features

| Section | Description |
|---------|-------------|
| **About** | Introduction, bio, and professional summary |
| **Resume** | Education, experience, and qualifications |
| **Tech Stack** | Skills and technologies with proficiency indicators |
| **Portfolio** | Project showcase with details and links |
| **Blog** | Markdown-powered blog posts |
| **Contact** | Contact form with interactive Leaflet map |
| **Gallery** | Image gallery with lightbox viewer |

## ✦ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Bundler | Vite 6 |
| Routing | React Router DOM v7 |
| Styling | Vanilla CSS (modular) |
| Icons | React Icons |
| Maps | Leaflet + React Leaflet |
| Markdown | React Markdown |
| Deployment | GitHub Pages (gh-pages) |
| CI/CD | GitHub Actions |

## ✦ Project Structure

```
portfolio/
├── .github/workflows/     # CI/CD pipeline
│   └── deploy.yml
├── public/                 # Static assets
│   ├── gallery/            # Gallery images
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Sidebar.jsx
│   │   ├── BottomNav.jsx
│   │   └── SectionHeading.jsx
│   ├── data/               # Content & configuration
│   │   ├── blog-posts/
│   │   ├── contactInfo.js
│   │   ├── portfolioData.js
│   │   ├── resumeData.js
│   │   └── techStack.js
│   ├── pages/              # Page views
│   │   ├── About.jsx
│   │   ├── Resume.jsx
│   │   ├── TechStack.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   └── Gallery.jsx
│   ├── styles/             # Modular CSS
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── navigation.css
│   │   ├── sidebar.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── gallery.css
│   │   ├── image-viewer.css
│   │   └── tech-stack.css
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML shell
├── vite.config.js          # Vite configuration
└── package.json
```

## ✦ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 20
- pnpm

### Installation

```bash
git clone https://github.com/haiderCho/haidercho.github.io.git
cd haidercho.github.io
pnpm install
```

### Development

```bash
pnpm dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
pnpm build
pnpm preview
```

## ✦ Deployment

The site auto-deploys to GitHub Pages on every push to `main` via the [deploy workflow](.github/workflows/deploy.yml):

1. Installs dependencies (`pnpm install --frozen-lockfile`)
2. Builds the project (`pnpm build`)
3. Deploys `dist/` to the `gh-pages` branch

Manual deploy:

```bash
pnpm run deploy
```

## ✦ License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built by <strong>Nafiz Haider Chowdhury</strong> — 2026</sub>
</div>
