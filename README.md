# Chirag Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS. The site features a developer-themed UI with terminal-style accents, animated transitions, and a project showcase designed to highlight work, skills, and contact information.

## Features

- Responsive portfolio landing page
- Project showcase with cards and mock browser previews
- Animated sections using Framer Motion
- Scrolling skills marquee
- Editable content via structured data files
- Built with React Router for page routing

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react

## Getting Started

### Prerequisites

- Node.js 18 or newer

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

The production output is generated in the `dist/` folder.

## Project Structure

```text
src/
├── main.jsx           # React entry point and router setup
├── App.jsx            # App layout and route container
├── index.css          # Tailwind and global styles
├── components/        # UI components used across the site
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProjectCard.jsx
│   └── ...
├── data/              # Editable portfolio content
│   ├── profile.js
│   ├── projects.js
│   └── skills.js
└── pages/             # Route pages
    ├── Home.jsx
    └── ProjectsIndex.jsx
```

## Customize Content

Update portfolio content in the `src/data/` files:

- `src/data/profile.js` — personal details, tagline, bio, education, focus areas, contact links
- `src/data/projects.js` — project title, description, tech, features, and image references
- `src/data/skills.js` — skills list shown in the marquee

Project images are stored in `public/images/projects/`.

## Notes

- The app uses Vite for fast development and build performance.
- Tailwind CSS is configured with utility classes in `tailwind.config.js`.
- Use `react-router-dom` for page navigation.

## License

This project is a personal portfolio site. Feel free to adapt or reuse the structure for your own portfolio.
