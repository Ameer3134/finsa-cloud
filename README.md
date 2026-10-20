# FINSA Cloud

The official web portal of the **Finance Students' Association (FINSA), University of Ilorin**. It brings study materials, the department's people, the handbook, a CGPA calculator and a feedback channel into one fast, mobile-friendly website.

This is a ground-up rebuild of the original FINSA Cloud site, with a cleaner structure, a professional design and lively animations.

---

## Table of contents

1. [Features](#features)
2. [Tech stack](#tech-stack)
3. [Getting started](#getting-started)
4. [Environment variables](#environment-variables)
5. [Project structure](#project-structure)
6. [How to update the content](#how-to-update-the-content)
7. [Design system](#design-system)
8. [Student Voice email setup](#student-voice-email-setup)
9. [Adding people photos](#adding-people-photos)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)
12. [Roadmap and known gaps](#roadmap-and-known-gaps)

---

## Features

| Page | Route | What it does |
|---|---|---|
| Home | `/` | Hero section, quick links, highlights and a call to action |
| Materials | `/materials` | Level tabs (100 to 400) that link to the Google Drive folders, plus optional per-course cards |
| Administration | `/people` | Tabs for Executives, SRC, Tutors, Editorial Board and Lecturers, with photo cards |
| Handbook | `/handbook` | Searchable, expandable handbook sections and a link to the full PDF |
| CGPA Calculator | `/cgpa` | Semester GPA, new CGPA from a previous record, and degree classification (5-point scale) |
| Student Voice | `/voice` | Feedback form that emails the FINSA mailbox, with an anonymous option |

Other highlights:

- Fully responsive, with a mobile menu
- Small CSS animations (fade-ups, floating shapes, hover lifts, scroll reveals) that switch off for users who prefer reduced motion
- Reusable UI components (buttons, cards, sections, accordion and more)
- All content (people, materials, handbook) lives in simple data files, so updating the site never means editing page layouts
- Study materials stay on Google Drive; the site only links to them

---

## Tech stack

- **Next.js 16** (App Router)
- **React** and **TypeScript**
- **Tailwind CSS v4** (configured in `globals.css`, with PostCSS)
- **Nodemailer** for sending Student Voice messages through Gmail
- **sharp** (dev tool) for cropping and compressing people photos
- Hosting target: **Vercel**

---

## Getting started

### Requirements

- Node.js 20 or newer
- npm
- Git

### Install and run

```bash
git clone <your-repo-url>
cd finsa-cloud
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful commands

```bash
npm run dev      # start the development server
npm run build    # create a production build
npm run start    # run the production build
npm run lint     # check the code for problems
```

---

## Environment variables

Create a file named `.env.local` in the project root (next to `package.json`). It is ignored by git and must never be shared or committed.

```
MAIL_USER=sender-account@gmail.com
MAIL_APP_PASSWORD=sixteencharacterapppassword
MAIL_TO=finsa-mailbox@gmail.com
```

| Variable | Meaning |
|---|---|
| `MAIL_USER` | The Gmail account the site logs in to, in order to send mail |
| `MAIL_APP_PASSWORD` | A Google **app password** for that account (not its normal password) |
| `MAIL_TO` | The FINSA inbox that receives Student Voice messages (address only, no password needed) |

Restart the dev server after changing this file.

---

## Project structure

```
finsa-cloud/
├── public/
│   ├── people/                # optimised people photos (400x400 JPG)
│   └── ...                    # logos and other static images
├── scripts/
│   └── optimize-photos.mjs    # crops and compresses photos
├── photos-original/           # raw photos (git-ignored)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # fonts, navbar, footer
│   │   ├── globals.css        # Tailwind, brand colors, animations
│   │   ├── page.tsx           # Home
│   │   ├── materials/page.tsx
│   │   ├── people/page.tsx    # shown as "Administration" in the navbar
│   │   ├── handbook/page.tsx
│   │   ├── cgpa/page.tsx
│   │   ├── voice/page.tsx
│   │   └── api/voice/route.ts # server route that sends the email
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ui/                # reusable building blocks
│   │   ├── home/              # Hero, QuickLinks, Features, CallToAction
│   │   ├── materials/         # LevelTabs
│   │   ├── people/            # PeopleTabs, PersonCard
│   │   ├── handbook/          # HandbookView
│   │   ├── cgpa/              # Calculator
│   │   └── voice/             # VoiceForm
│   ├── data/
│   │   ├── materials.ts       # Drive links per level and course
│   │   ├── people.ts          # executives, SRC, tutors, editors, lecturers
│   │   └── handbook.ts        # handbook sections and PDF link
│   └── lib/
│       ├── cn.ts              # class name helper
│       └── gpa.ts             # GPA and CGPA calculations
├── postcss.config.mjs         # required for Tailwind v4
└── .env.local                 # secrets (never commit)
```

---

## How to update the content

Most updates only need a text edit in `src/data/`.

### Study materials (`src/data/materials.ts`)

Each level has a Drive folder link. A level can also list courses, and each course gets its own card.

```ts
{
  level: 200,
  description: "Organised by course.",
  driveUrl: "https://drive.google.com/drive/folders/XXXX",
  courses: [
    { code: "FIN 202", title: "Course title", driveUrl: "https://drive.google.com/..." },
  ],
}
```

To add materials, add files to the Drive folder. The site needs no change, because it only links to the folder. Make sure the folders are shared as "Anyone with the link can view".

### People (`src/data/people.ts`)

Edit the names and roles in each group. `image` and `detail` are optional.

```ts
{ name: "Full Name", role: "President", image: "full-name.jpg" },
```

People without a photo automatically show a coloured circle with their initials. Update this file each academic session.

### Handbook (`src/data/handbook.ts`)

Each section is a title plus a list of points. Set `handbookPdfUrl` to the full PDF on Drive.

> The current handbook sections are placeholder text and must be replaced with the real handbook content.

### Navigation (`src/components/Navbar.tsx`)

Edit the `links` array to rename, add or remove pages. Footer and Home quick links are in `Footer.tsx` and `home/QuickLinks.tsx`. The People page is labelled "Administration" in the navbar but still lives at `/people`. If you ever rename the route, update every link and the folder name together.

### CGPA grading (`src/lib/gpa.ts`)

The calculator uses the 5-point scale (A = 5, B = 4, C = 3, D = 2, E = 1, F = 0) and these class boundaries:

| CGPA | Class |
|---|---|
| 4.50 to 5.00 | First Class |
| 3.50 to 4.49 | Second Class Upper |
| 2.40 to 3.49 | Second Class Lower |
| 1.50 to 2.39 | Third Class |
| 1.00 to 1.49 | Pass |

Check these against the official department rules and edit `GRADES` and `classify()` if they differ.

---

## Design system

### Brand colours

Colours are defined once in `src/app/globals.css` under `@theme` and used everywhere through names like `bg-brand-500` or `text-brand-900`.

| Token | Hex | Used for |
|---|---|---|
| `brand-50` | `#eceeee` | Soft backgrounds |
| `brand-100` | `#c8dde2` | Borders, light fills |
| `brand-400` | `#5189bc` | Highlights, hover borders |
| `brand-500` | `#221a7d` | Main colour (buttons, links, headers) |
| `brand-600` | `#181259` | Button hover |
| `brand-900` | `#0f0b3d` | Dark text, footer |
| `accent-500` | `#5ce1e6` | Accents (use with dark text) |

Change a hex value here and the whole site updates.

### Fonts

Inter for body text and Poppins for headings, loaded with `next/font` in `layout.tsx`.

### Animations

Defined in `globals.css`: `animate-fade-up`, `animate-float` and `animate-pop`. The `Reveal` component fades content in as the user scrolls. All motion is disabled for users with "reduce motion" turned on.

### Reusable components (`src/components/ui/`)

```tsx
import { Button, Card, Section, SectionHeading, PageHeader, Badge, Reveal, Accordion, Container } from "@/components/ui";
```

| Component | Purpose |
|---|---|
| `Button` | Variants: `primary`, `secondary`, `outline`, `ghost`, `light`. Renders a link, an external link (`external`) or a real button |
| `Card` | Rounded card with an optional hover lift |
| `Section` and `Container` | Consistent page spacing and width |
| `SectionHeading` | Title with an accent underline and optional subtitle |
| `PageHeader` | Gradient banner used at the top of inner pages |
| `Badge` | Small label pill |
| `Reveal` | Scroll-triggered fade-in |
| `Accordion` | Expand and collapse panel |

To add a new page, create `src/app/<name>/page.tsx`, start with `<PageHeader />` and wrap the content in `<Section>`.

---

## Student Voice email setup

The form posts to `src/app/api/voice/route.ts`, which validates the message and sends it with Nodemailer through Gmail. The sender credentials stay on the server.

1. Create a dedicated Gmail account to send from (this avoids needing the FINSA mailbox password).
2. Turn on **2-Step Verification** for that account.
3. Create an **app password** at `myaccount.google.com/apppasswords` and copy the 16 characters without spaces.
4. Fill in the three variables in `.env.local` (see above). `MAIL_TO` is just the receiving address.
5. Restart `npm run dev` and send a test message at `/voice`.

Details:

- Messages arrive with the subject `[Student Voice] <category>`
- If the student is not anonymous, **Reply** goes straight to their email
- A hidden honeypot field and server-side validation reduce spam
- Gmail allows roughly 500 outgoing emails per day, which is more than enough here

---

## Adding people photos

Photos are cropped to 400x400 and compressed so pages load fast, even on slow networks.

```bash
mkdir -p photos-original scripts
npm install -D sharp
# copy your raw photos into photos-original/, named after each person (e.g. ade-bayo.jpg)
node scripts/optimize-photos.mjs
ls public/people
```

Then put each file name in `src/data/people.ts` (for example `image: "ade-bayo.jpg"`). Notes:

- HEIC photos from iPhones must be converted to JPG first
- The script crops towards the most prominent area but cannot detect faces, so check every photo and re-crop bad ones by hand, then run the script again
- Add `photos-original/` to `.gitignore` so large originals are not uploaded

---

## Deployment

The site is designed for **Vercel**.

1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub and choose **Add New, then Project**.
3. Import the repo and click **Deploy**.
4. In **Settings, then Environment Variables**, add `MAIL_USER`, `MAIL_APP_PASSWORD` and `MAIL_TO`, then redeploy. Without them the Student Voice form shows "Mail is not configured".

Every push to `main` updates the live site. Other branches and pull requests get their own preview links, which are useful for showing changes to the executives before they go live.

Use a different project name from the old site (for example `finsa-cloud-new`) until the department approves the new version.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Everything looks plain and unstyled | Make sure `postcss.config.mjs` exists with the `@tailwindcss/postcss` plugin, `globals.css` starts with `@import "tailwindcss";` and `layout.tsx` imports `./globals.css`. Then delete `.next` and restart |
| Red "Unknown at rule @theme" in VS Code | Harmless. Install the Tailwind CSS IntelliSense extension or set `"css.lint.unknownAtRules": "ignore"` |
| Styling changed after editing a file | Check the file is saved (no white dot on the tab), then hard refresh with `Ctrl + Shift + R` |
| Navbar link shows 404 | The link address must match the folder name in `src/app/` exactly |
| Student Voice says "Mail is not configured" | `.env.local` is missing, misnamed, in the wrong folder, or the server was not restarted |
| `Invalid login` or `535` in the terminal | The app password is wrong. Create a new one and paste it without spaces |
| Duplicate key warning in the CGPA page | Result keys must be unique (`gpa-...` and `cgpa-...`) |
| Photo does not show | The file name in `people.ts` must match the file in `public/people/` exactly |

---

## Roadmap and known gaps

Done:

- Home, Materials, Administration, Handbook, CGPA and Student Voice pages
- Reusable UI component library and animations
- Brand colours and fonts
- Email delivery for Student Voice

Still to do:

- [ ] Add and optimise the real people photos
- [ ] Replace placeholder text in `handbook.ts`, `people.ts` and `materials.ts` with real data and real Drive links
- [ ] Add the department logo and favicon
- [ ] Polish pass: custom 404 page, SEO and social preview image, mobile checks on real phones
- [ ] Sign-up and sign-in so only registered students can use the portal (planned approach: Google sign-in with Auth.js, Gmail accounts only, whole site protected)
- [ ] Deploy to Vercel and connect the final domain

Known limitations:

- Study materials are links to Google Drive. Anyone who has a Drive link can open it directly, even once sign-in is added to the site
- The CGPA calculator is an estimate, so students should always confirm with their official results

---

## Credits

Built for the Finance Students' Association, University of Ilorin. [Rufai Awwal Olamilekan]