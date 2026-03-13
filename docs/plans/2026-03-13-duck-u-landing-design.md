# Duck U Landing Page – Design

**Date:** 2026-03-13  
**Owner:** AI assistant (lead dev)  
**Product:** Duck U – Jeep ducking game companion site  

---

## Goal

Create a single long-scrolling marketing site for Duck U that:

- Explains the Jeep ducking culture in 1–2 scrolls.
- Shows how the Duck U app works (scan → quack → points → trash-talk).
- Highlights the scoring system, bonuses, and ridiculous titles.
- Reassures Jeep owners about privacy and opt-in nature.
- Teases upcoming merch and forum/community features.
- Drives visitors to download the mobile app (primary CTA).

The visual direction is **gritty Jeep trail + playful ducks**: dark, rugged backgrounds (mud, tire tracks) with bright yellow duck accents and fun copy.

---

## Audience

- Primary: Jeep enthusiasts (Phoenix and beyond) who have seen or heard of Jeep ducking and like the idea of turning it into a lighthearted competition.
- Secondary: Casual Jeep owners who may have seen rubber ducks on dashboards but don’t know the full culture.

Tone: confident, playful, slightly chaotic but always positive and inclusive.

---

## Single-Page Structure

Top-to-bottom layout:

1. Sticky navigation + hero
2. “How it works” (3-step explainer)
3. Culture & screenshots (Jeep ducking tradition + app UI)
4. Points, bonuses, and titles
5. Privacy & safety
6. Merch & forum “coming soon”
7. FAQ & footer

Each section will have an `id` for smooth in-page navigation from the header.

---

## Section Designs

### 1. Sticky Nav + Hero

**Purpose:** Immediately communicate what Duck U is, who it’s for, and drive downloads.

- **Nav (sticky):**
  - Left: Duck U logotype (text-based for now) or small duck icon.
  - Right: anchor links – `How it works`, `Points & titles`, `Merch`, `Forum`, `FAQ` – plus a primary `Download app` button.
- **Background:**
  - `bg-stone-900` base with a subtle tire track / asphalt texture overlay at low opacity.
  - Angled yellow strip/elements suggesting light bars or trail stripes.
- **Hero copy:**
  - Headline: **“Don’t be wack, do quack.”**
  - Subhead: one or two lines explaining the value:
    - “Turn Jeep ducking into a points‑powered, trash‑talk‑friendly game. Scan QR duck stickers, earn bonuses, and climb weekly leaderboards.”
- **CTAs:**
  - Primary: bold yellow button – **“Download Duck U (iOS & Android)”**.
  - Secondary: ghost/button link – **“See how it works”** smooth‑scrolls down.
- **Hero visual:**
  - Phone mockup card showing either:
    - The scanner UI (“You just ducked JEEPQUACK42 +7 pts”), or
    - A leaderboard view with titles like “Supreme Duckinator”.
  - Small, floating duck illustrations (some with mustache, sunglasses) positioned around the phone, animating slightly on hover.

### 2. “How It Works” (3 Steps)

**Purpose:** Quickly show the loop from QR sticker to leaderboard flexing.

Layout: horizontally on desktop, stacked on mobile.

Steps:

1. **“Slap your duck on your Jeep”**
   - Icon: sticker sheet or duck QR on glass.
   - Copy: “Generate your personal Duck U QR, print your duck sticker, and slap it on your Jeep.”
2. **“Let people duck you (and each other)”**
   - Icon: phone scanning a QR on a Jeep.
   - Copy: “Other Jeepers scan your QR when they spot your rig. Each scan triggers points, streaks, and chaotic bonuses.”
3. **“Climb the leaderboard and flex”**
   - Icon: trophy/leaderboard with names.
   - Copy: “Earn titles like ‘Quack Assassin’ and ‘Supreme Duckinator’ while you trash-talk your Jeep club.”

Visual details:

- Card-style step blocks on a dark background, with yellow borders or badges showing step numbers.
- Optional small line below: “Built for Phoenix meets, trail runs, and parking‑lot ambushes.”

### 3. Culture & Screens

**Purpose:** Root Duck U in real Jeep ducking culture and preview the in‑app experience.

Two-column layout:

- **Left – Culture copy:**
  - Short explanation of Jeep ducking: rubber ducks on admired Jeeps, “You’ve been ducked!” notes, positive surprise.
  - Emphasis that Duck U keeps this spirit but adds competitive game mechanics.
  - Sample copy: “Duck U keeps the surprise and smiles, adds leaderboards, bonuses, and inside jokes for your Jeep crew.”
- **Right – Screenshots / mockups:**
  - Grid of 2–3 screenshots or image mockups:
    - Profile screen with username, Jeep nickname, stats.
    - Scanner / “You just ducked…” confirmation screen.
    - Leaderboard snippet showing fun titles and usernames.

Background remains dark; cards/images will have soft, yellow glows or borders to stand out.

### 4. Points, Bonuses, and Titles

**Purpose:** Make the scoring system and titles feel fun and understandable at a glance.

Layout: responsive grid of cards.

- **Scoring cards:**
  - First time ducking someone: **5 pts**
  - Regular duck: **3 pts**
  - Night Owl (10pm–6am UTC): **+2 pts**
  - Revenge Duck (they ducked you first): **×2**
  - Duck Chain (3+ ducks given in a row): **+10 pts and ×2**
  - Self-duck: **−5 pts**
- **Titles ladder:**
  - Vertical or horizontal progression:
    - “Sitting Duck” – starter.
    - “Quack Assassin” – mid tier.
    - “Supreme Duckinator” – high tier.
    - “Lord of the Pond” – weekly top players.
- Visual style:
  - Dark cards with bright yellow and teal highlights.
  - Minimal fun icons for each bonus (moon for Night Owl, crossed arrows for Revenge, chain for Duck Chain).

### 5. Privacy & Safety

**Purpose:** Quickly reassure new visitors about data and safety.

Compact section with icon + bullets:

- “**Opt‑in only.** Your QR is yours. No license plates stored.”
- “**Minimal info.** Username and Jeep nickname/color; no forced personal data.”
- “**Data deletion.** You can delete your account and data from the app.”

Link to future full privacy page when available; for now, just short copy on the landing.

### 6. Merch & Forum (Coming Soon)

**Purpose:** Set expectations that Duck U is a growing ecosystem with future touchpoints.

Two highlight cards:

- **Merch card:**
  - Title: “Duck U Merch (coming soon)”
  - Copy: “Duck QR sticker packs, trail‑ready hoodies, and ‘Lord of the Pond’ flex gear.”
  - Visual: duck sticker sheet or bumper with multiple duck stickers.
  - Badge: “Coming soon” pill; button may be disabled or link to a simple email capture.
- **Forum / Community card:**
  - Title: “Jeep Flock Forum (coming soon)”
  - Copy: “Plan Phoenix meets, share trail runs, and swap duck‑drop ideas.”
  - Visual: chat bubbles with duck avatars.
  - Optional: “Get notified when we launch” link or very simple form.

### 7. FAQ & Footer

**Purpose:** Handle common concerns and provide basic site plumbing.

- **FAQ items (examples):**
  - “Do I have to show my license plate or real name?” → No; explain briefly.
  - “Is Duck U only for Jeeps?” → Officially Jeep-focused, but others can play if they want.
  - “Is this only for Phoenix?” → Built with Phoenix in mind but works anywhere.
  - “Is it free?” → Explain pricing model (initially free, if that’s the case).
  - “What stops spam?” → Mention rate limiting / abuse protections conceptually.
- **Footer:**
  - Small Duck U logo / wordmark.
  - Links: Download app, Contact email, Privacy (stub or coming soon), Social links.

---

## Visual & Interaction Guidelines

- Color palette: dark grays/black for backgrounds, Jeep‑appropriate yellow as primary accent, optional teal as secondary accent.
- Typography: bold, condensed display font for headlines; clean sans-serif for body copy.
- Motion:
  - Light hover effects on cards and ducks.
  - Smooth scrolling for in‑page navigation.
  - Optional micro‑animation on hero phone mockup (e.g., glow pulse).

---

## Tech & Content Assumptions

- Site will be implemented with **Next.js App Router** + **Tailwind CSS**.
- Images for ducks, QR stickers, and Jeep scenes will live under `public/images/`.
- Download button will initially link to `https://ducku.app` or a shared landing URL, with eventual deep links to iOS and Android store pages.
- Privacy and terms will initially be short sections on the landing page, with room to grow into full documents under `/privacy` and `/terms` later.

