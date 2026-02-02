# Portfolio — Rohan Routh

Personal portfolio site for an AI/ML Engineer. Built with Next.js, TypeScript, and Tailwind CSS.

**Live:** [Coming soon]

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build (static export to `out/`) |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion + custom IntersectionObserver hook
- **Icons:** Lucide React + inline SVG tech logos
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/            # Pages and layout
├── components/     # One component per section
├── data/           # All content as typed TS objects
├── hooks/          # Custom React hooks
└── types/          # TypeScript interfaces
public/
└── images/         # Headshot, company logos
```

## Updating Content

All content lives in `src/data/` — edit these files to update the site without touching components:

| File | Content |
|------|---------|
| `personal.ts` | Name, bio, socials, highlights |
| `experience.ts` | Work experience entries |
| `projects.ts` | Project details |
| `skills.ts` | Skill categories |
| `extras.ts` | Writing, open source, certifications |

Types are defined in `src/types/index.ts`.

## Images

Drop these into `public/images/`:

- `headshot.jpg` — Profile photo (circular crop, falls back to initials)
- `citiustech.png`, `ravenrisk.png` — Company logos (fall back to icon)

## Deployment

Static export is configured. Deploy to Vercel:

```bash
npm run build   # outputs to out/
```

Or connect the GitHub repo to [Vercel](https://vercel.com) for automatic deployments on push.
