# Architectural Patterns

Recurring patterns and conventions used across the codebase.

## 1. Content-Presentation Separation

All displayable content is defined in typed TypeScript objects under `src/data/`, never hardcoded in components. Components import and render data without transformation.

**Appears in:**
- `src/data/personal.ts` → consumed by `src/components/Hero.tsx:4`, `src/components/About.tsx:4`, `src/components/Contact.tsx:4`
- `src/data/experience.ts` → consumed by `src/components/Experience.tsx:4`
- `src/data/projects.ts` → consumed by `src/components/Projects.tsx:4`
- `src/data/skills.ts` → consumed by `src/components/Skills.tsx:4`
- `src/data/extras.ts` → consumed by `src/components/Writing.tsx:4`, `src/components/OpenSource.tsx:4`, `src/components/Certifications.tsx:4`

**Convention:** To add new content, edit the data file and conform to the interface in `src/types/index.ts`. No component changes needed.

## 2. Section Component Pattern

Every major page section follows the same structure: a `"use client"` component that wraps content in `SectionWrapper` and imports its data.

**Template:**
```
"use client" directive → import SectionWrapper → import data → render inside SectionWrapper
```

**Appears in:** `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Skills.tsx`, `Writing.tsx`, `OpenSource.tsx`, `Certifications.tsx`, `Contact.tsx`

**SectionWrapper provides** (`src/components/SectionWrapper.tsx`):
- Consistent section `id` for anchor navigation
- Shared heading style with accent dot
- Scroll-triggered fade-in animation via `useInView`
- Responsive max-width container (`max-w-5xl`) and vertical padding

## 3. Conditional Section Rendering

Optional sections (Writing, OpenSource, Certifications) guard against empty data by returning `null` early. This lets sections auto-hide without any page-level logic.

**Pattern:**
```typescript
if (dataArray.length === 0) return null;
```

**Appears in:**
- `src/components/Writing.tsx:8`
- `src/components/OpenSource.tsx:8`
- `src/components/Certifications.tsx:8`

**Convention:** Any new optional section should follow this pattern. The page composition in `src/app/page.tsx` always includes all sections — visibility is controlled at the component level.

## 4. Scroll Animation via IntersectionObserver

Animations are triggered once when a section enters the viewport, using a shared `useInView` hook that wraps `IntersectionObserver`.

**Hook:** `src/hooks/useInView.ts`
- Returns `{ ref, isInView }` — attach `ref` to a DOM element, use `isInView` to trigger Framer Motion
- Observes once then disconnects (no re-triggering on scroll back up)
- Default threshold: `0.1` (10% visibility triggers animation)

**Usage in SectionWrapper** (`src/components/SectionWrapper.tsx:14-15`):
```
initial={{ opacity: 0, y: 24 }} → animate to {{ opacity: 1, y: 0 }}
```

**Hero uses direct Framer Motion** (`src/components/Hero.tsx:18-22`) with staggered delays (0s, 0.2s, 0.4s) since it's always visible on load.

## 5. Technology Tag Pattern

Technologies and skills are rendered as small bordered pills/tags across multiple components with consistent styling.

Tags include inline SVG tech icons via `TechIcon` when a match exists, gracefully rendering nothing for unrecognized names.

**Shared class pattern:**
```
inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-500
```

**Appears in:**
- `src/components/Experience.tsx:62-70` — technologies per role (with TechIcon)
- `src/components/Projects.tsx:53-62` — technologies per project (with TechIcon)
- `src/components/Skills.tsx:34-41` — skills per category (with TechIcon, slightly larger: `rounded-md`, `text-sm`, `text-zinc-300`)

## 6. Link Card Pattern

External links (writing, OSS, certifications) use a consistent card layout: bordered container with hover effect, content on left, external link icon on right.

**Shared traits:**
- Container: `rounded-lg border border-zinc-800 bg-zinc-900/30 px-5 py-4 transition-colors hover:border-zinc-700`
- External icon: `ExternalLink` from Lucide, positioned top-right, fades in on hover
- Uses `group` / `group-hover` for coordinated hover effects

**Appears in:**
- `src/components/Writing.tsx:16-33`
- `src/components/OpenSource.tsx:16-34`
- `src/components/Certifications.tsx:17-35`

## 7. Client Component Boundary

All interactive components use `"use client"` at the top. The root page (`src/app/page.tsx`) and layout (`src/app/layout.tsx`) are server components that compose client components.

**Server components:** `src/app/page.tsx`, `src/app/layout.tsx`, `src/components/Footer.tsx`
**Client components:** All others (Header, Hero, About, Experience, Projects, Skills, Writing, OpenSource, Certifications, Contact, SectionWrapper)

**Convention:** Components that use hooks, Framer Motion, or browser APIs must be client components. Pure presentational components without interactivity can remain server components.

## 8. Navigation Pattern

The Header uses anchor links (`#section-id`) with CSS `scroll-behavior: smooth` and `scroll-padding-top: 5rem` (defined in `src/app/globals.css:4-5`).

The nav is responsive:
- Desktop: horizontal link list (`src/components/Header.tsx:44-54`)
- Mobile: animated slide-down menu using Framer Motion `AnimatePresence` (`src/components/Header.tsx:66-85`)
- Scroll-aware: adds backdrop blur and border after 20px scroll (`src/components/Header.tsx:23-28`)

## 9. Type-First Data Modeling

All data structures are defined as TypeScript interfaces in a single file (`src/types/index.ts`), then imported by both data files and components.

**Interfaces defined:**
- `PersonalInfo` — bio, socials, highlights (`src/types/index.ts:1-14`)
- `Experience` — work entries with optional client field (`src/types/index.ts:16-23`)
- `Project` — problem/architecture/impact structure (`src/types/index.ts:25-33`)
- `SkillCategory` — name + skills array (`src/types/index.ts:35-38`)
- `WritingPost`, `OpenSourceContribution`, `Certification` — extras (`src/types/index.ts:40-56`)

**Convention:** Add new interfaces here first, then create the data file, then the component.

## 10. Graceful Image Fallback Pattern

Images (headshot, company logos) use `onError` handlers to swap to a fallback when the file is missing. This avoids broken images during development or before assets are added.

**Pattern:** The `<img>` hides itself on error and reveals a sibling fallback element.

**Appears in:**
- `src/components/Hero.tsx:111-116` — headshot falls back to "RR" initials monogram
- `src/components/Experience.tsx:23-26` — company logo falls back to `Building2` Lucide icon

**Convention:** Always provide a meaningful fallback. Use `onError` to hide the broken image and unhide the fallback via `classList.remove("hidden")`.

## 11. Inline SVG Icon Registry

`src/components/TechIcon.tsx` maps technology names to inline SVG paths (from Simple Icons, MIT/CC0 licensed). Uses normalized name lookup with aliases to handle variants like "GCP (Vertex AI)" → `gcp`.

**Adding a new icon:**
1. Find the SVG path on [simpleicons.org](https://simpleicons.org)
2. Add an entry to the `icons` record in `TechIcon.tsx` with `{ path, color }`
3. Add name aliases to the `aliases` record if needed

**Used by:** Experience (`src/components/Experience.tsx:67`), Projects (`src/components/Projects.tsx:58`), Skills (`src/components/Skills.tsx:39`)

## 12. Canvas Background Animation

`src/components/ParticleBackground.tsx` renders a full-viewport canvas with slowly drifting dots and connecting lines. It's layered behind Hero content via absolute positioning and `z-0`.

**Key behaviors:**
- Responds to window resize (recalculates canvas DPR and dot count)
- Dot density scales with viewport area (`DOT_COUNT_FACTOR`)
- Connections drawn only between dots within `CONNECTION_DIST` (120px), with opacity fading by distance
- Cleans up `requestAnimationFrame` and resize listener on unmount
- `pointer-events-none` and `aria-hidden` ensure no interaction or accessibility impact
