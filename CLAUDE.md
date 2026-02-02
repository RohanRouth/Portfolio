# Portfolio — Rohan Routh

Personal portfolio site for an AI/ML Engineer. Static site showcasing experience, projects, skills, and contact info with a dark theme and scroll animations.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with static export (`output: "export"`)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3 with custom theme extensions (`tailwind.config.ts:9-24`)
- **Animations**: Framer Motion (scroll-triggered via custom `useInView` hook)
- **Icons**: Lucide React
- **Deployment**: Vercel (static export to `out/`)

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and layout
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx          # Single-page composition of all sections
│   └── globals.css       # Tailwind directives, scrollbar, selection styles
├── components/           # React components (one per section)
│   ├── SectionWrapper.tsx  # Shared section layout with scroll animation
│   ├── Header.tsx        # Fixed nav with mobile menu
│   ├── Hero.tsx          # Landing section with headshot + particle background
│   ├── ParticleBackground.tsx # Canvas-based animated dot grid
│   ├── TechIcon.tsx      # Inline SVG icons for key technologies
│   ├── About.tsx         # Bio section
│   ├── Experience.tsx    # Work history
│   ├── Projects.tsx      # Project cards grid
│   ├── Skills.tsx        # Categorized skill tags
│   ├── Writing.tsx       # Blog/article links (conditional render)
│   ├── OpenSource.tsx    # OSS contributions (conditional render)
│   ├── Certifications.tsx # Certs (conditional render)
│   ├── Contact.tsx       # Contact links
│   └── Footer.tsx        # Minimal footer
├── data/                 # Content as typed TS objects
│   ├── personal.ts       # Name, bio, socials, highlights
│   ├── experience.ts     # Work experience entries
│   ├── projects.ts       # Project details
│   ├── skills.ts         # Skill categories
│   └── extras.ts         # Writing, open source, certifications
├── hooks/
│   └── useInView.ts      # IntersectionObserver hook for animations
└── types/
    └── index.ts          # All TypeScript interfaces
```

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build (static export to `out/`) |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Content Updates

All content lives in `src/data/` as TypeScript objects. To update:

- **Bio/socials**: `src/data/personal.ts`
- **Work experience**: `src/data/experience.ts` — add/edit `Experience[]` entries
- **Projects**: `src/data/projects.ts` — add/edit `Project[]` entries
- **Skills**: `src/data/skills.ts` — add/edit `SkillCategory[]` entries
- **Writing/OSS/Certs**: `src/data/extras.ts` — uncomment and fill placeholder entries

Types for all data are defined in `src/types/index.ts`.

Optional sections (Writing, OpenSource, Certifications) auto-hide when their data arrays are empty (`src/components/Writing.tsx:8`, `src/components/OpenSource.tsx:8`, `src/components/Certifications.tsx:8`).

## Key Design Decisions

- **Single-page layout**: All sections render on one page (`src/app/page.tsx`), navigation uses anchor links with smooth scrolling
- **Static export**: No server-side rendering; the entire site is pre-rendered at build time via `next.config.ts:4`
- **Data-driven content**: Content is separated from presentation — edit `src/data/` files without touching components
- **Conditional sections**: Optional sections return `null` when empty, keeping the page clean
- **Graceful image fallbacks**: Headshot falls back to initials, company logos fall back to a building icon — via `onError` handlers

## Theme

Dark theme using Tailwind's zinc palette. Key colors:
- Background: `zinc-950` (#09090b)
- Surface/cards: `zinc-900` with borders at `zinc-800`
- Text: `zinc-100` (primary), `zinc-400` (secondary), `zinc-500`/`zinc-600` (muted)
- Accent: `blue-400` (#60a5fa) — defined as `accent` in `tailwind.config.ts:17`

## Images

All images go in `public/images/`:
- `headshot.jpg` — your photo, displayed in the Hero section (circular crop, falls back to "RR" initials)
- `citiustech.png`, `ravenrisk.png` — company logos for Experience section (falls back to building icon)
- Referenced via the `logo` field in `src/data/experience.ts`

## Additional Documentation

Check these files for specialized context when relevant:

| File | When to consult |
|------|-----------------|
| `.claude/docs/architectural_patterns.md` | Adding components, modifying data flow, changing animations, or understanding conventions |
