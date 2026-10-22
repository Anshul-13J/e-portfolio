# Anshul Nigam Portfolio

A responsive portfolio built with Astro and deployed as a static site. The main portfolio is the default experience; a separate terminal-style developer mode is available from the floating button.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`.

## Build and preview

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Netlify

1. Push the repository to GitHub.
2. In Netlify, choose **Add new site** and import the GitHub repository.
3. Netlify reads `netlify.toml`: the build command is `npm run build` and the publish directory is `dist`.
4. Deploy. New pushes to the connected branch trigger fresh builds.

## Update portfolio content

- **Projects:** Add an item to `src/data/projects.config.ts`. Each item provides a slug, category, type, name, summary, impact points, technology tags and link. Use one of the supported categories: `genai`, `data`, `personal` or `iot`.
- **Achievements:** Add or edit items in `src/data/achievements.config.ts`. The layout supports up to three cards in a row and wraps additional items onto new rows.
- **Resumes:** Put each PDF in `public/`, then add an entry to `src/data/resumes.config.ts` with a unique ID, display label, file path and updated date. The current resume is the first item in the list. Keep public contact details in mind before publishing a PDF.
- **Profile and experience:** Edit the content in `src/pages/index.astro`.

The terminal mode accepts `help`, `projects`, `project <name>`, `resume`, `contact`, `github`, `linkedin`, `about`, `clear` and `exit`. Its command handling is local to the browser; it does not run shell commands.
