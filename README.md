## Duck U Website

Personal landing page for the **Duck U** brand, built with **Next.js 14**, **React 18**, and **Tailwind CSS**. This `README` is mainly for my future self so I can quickly remember how to run and work on the project.

### Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI**: React + Tailwind CSS

### Getting started

#### 1. Install dependencies

```bash
npm install
```

#### 2. Run the dev server

```bash
npm run dev
```

Then open `http://localhost:3000` in the browser.

#### 3. Build for production

```bash
npm run build
npm start
```

### Project structure (high level)

- `src/app/page.tsx` – main Duck U landing page
- `src/components/*` – hero, navigation, FAQ, scoring, merch/forum, etc.
- `public/images/*` – Duck U branding and marketing images

### Notes to self

- **Do not commit** `node_modules` or `.next` (already in `.gitignore`).
- Keep all new UI pieces as small, reusable components under `src/components`.
- Run `npm run lint` before committing if I’m making bigger changes.

