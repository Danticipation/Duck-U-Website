# Duck U Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page Duck U marketing site using Next.js (App Router) and Tailwind CSS that matches the approved design and drives app downloads.

**Architecture:** A single `app`-router Next.js project with a long-scrolling home route, shared layout, and modular React components for each section (Hero, HowItWorks, Culture, Scoring, Privacy, Merch/Forum, FAQ, Footer). Static content only for now, with future-friendly structure for adding real merch, forum, and legal pages.

**Tech Stack:** Next.js (App Router, TypeScript), React, Tailwind CSS, CSS animations via Tailwind utilities, and static assets under `public/`.

---

## Task 1: Scaffold Next.js + Tailwind project

**Files:**
- Create/modify: project root (Next.js boilerplate files)
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `app/` and `public/` structure

**Step 1: Initialize Next.js app in current directory**

Run:
```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
```
Expected: Next.js scaffolds the project using the App Router with TypeScript and Tailwind configured.

**Step 2: Verify dev server runs**

Run:
```bash
npm install
npm run dev
```
Expected: Dev server starts on `http://localhost:3000` and shows the default Next.js starter page.

---

## Task 2: Set up global theme (colors, fonts, layout)

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Step 1: Configure Tailwind theme**

- Add custom colors for Duck U:
  - `duck-yellow` (primary accent).
  - `duck-teal` (secondary accent).
  - Ensure `stone` / `zinc` scales are enabled (default Tailwind).

**Step 2: Define global styles**

- In `globals.css`:
  - Import Tailwind base/components/utilities.
  - Set `body` background to dark (`bg-stone-950` / `text-zinc-100`).
  - Add a `duck-headline` utility class for bold, condensed headlines.
  - Add optional texture background class (e.g., using a background image).

