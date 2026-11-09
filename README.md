# Mark Price — portfolio

Portfolio site for Mark Price, full-stack WordPress developer. Built with [Astro](https://astro.build) as a static site.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

- `src/data/` — all content: profile, services, process, reviews, experience (`profile.ts`), projects and case-study copy (`projects.ts`), toolbox logos (`toolbox.ts`).
- `src/components/` — one component per section, plus the nav, footer and page transition.
- `src/pages/work/[slug].astro` — the case-study page for each project.
- `public/work/<slug>/` — project covers captured from each live site.
- `docs/DESIGN.md` — design decisions and the reference each section follows.

## Deploy

Hosted on Vercel and linked to this repository: every push to `main` deploys.
