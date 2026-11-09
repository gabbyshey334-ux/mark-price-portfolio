# Mark Price portfolio: plan

## Brief (from the Upwork profile, pulled 2026-11-09)

- **Who:** Mark Price, full-stack WordPress developer. US Central time, 30+ hrs/week, native English, ID verified. BSc Computer Science, University of Michigan-Flint (2022–2024).
- **Subject:** image-led websites for hotels, interior designers, architects, fashion and jewellery brands that stay fast on a phone and are easy for the team to update.
- **Audience:** owners and marketing leads at boutique hospitality, design studios and luxury retail, plus agencies who subcontract. Most arrive from an Upwork proposal or profile link, often on a phone.
- **Primary job of the site:** prove taste and speed in under 10 seconds, then get the visitor to send their site URL and what has to change.
- **Secondary jobs:** show the range (custom code, WordPress, WooCommerce, multilingual, speed, fixes), show the process (backup, baseline, staging, handover), show proof (reviews, certificates).

## Content inventory

| Source | Items |
|---|---|
| Portfolio projects | 7 (Frolov Jewels, Huka Lodge, South Harlow Interiors, Kestie Lane Studio, Lodge Milano & Co, NICOLEHOLLIS, Rozana Montiel) |
| Services | Custom code, WordPress builds, WooCommerce, multilingual, speed and Core Web Vitals, fixes, security and care |
| Process | Backup, baseline, staging, phone + desktop testing, plain-English handover, fixed-price milestones |
| Reviews | 2 five-star Upwork reviews (site migration, mobile responsiveness fix) |
| Certificates | 10 (Meta Front-End, Technical SEO, Google Analytics, Certified in Cybersecurity, WebOps, Responsive Web Design, JS Algorithms, Yoast SEO, SEO, TroubleshootWoo) |
| Contact | markpricel07@gmail.com (confirmed), Upwork profile link |

## Still needed from Mark

1. ~~Screenshots~~ Done 2026-11-09: covers captured from each live site into `public/work/<slug>/cover.webp`. Live URLs: hukalodge.com, southharlow.com, lodgemilanoandco.com, nicolehollis.com (Alexander Valley project page), frolovjewels.com, rozanamontiel.com (Casa del Lago photo), kestielanestudio.com.
2. **Real numbers** for speed claims: PageSpeed mobile score / LCP before and after per project. The site shows none until they are real.
3. ~~Live URLs~~ Done 2026-11-09: clients OK'd linking; each case page links to its live site.
4. **Headshot** (optional, but helps trust on Upwork-referred visits).

## Sitemap

```
/                     Home: hero, selected work, services, process, proof, contact
/work/<slug>/         Case study per project (7): brief, what was built, stack, result, screenshots
/404                  Plain not-found page that links home
```

## Stack

- **Astro 7, static output.** Zero JS by default: the portfolio's own speed is the first proof of the pitch.
- Plain CSS with design tokens (`src/styles/tokens.css`), no framework.
- Content in typed data files (`src/data/`). Move to content collections once case-study text grows.
- Fonts self-hosted later via `@fontsource-variable` (Google Fonts link for now).
- Deploy target: Netlify or Vercel static (free tier), custom domain.

## Milestones

1. **Scaffold** (this step): structure, tokens, home sections with real copy, case-study template, placeholders for images.
2. **Visual pass:** add screenshots, tune hero reveal, review against `docs/DESIGN.md` with screenshots at 390 / 768 / 1440.
3. **Case studies:** write each one (problem, build, result) with Mark.
4. **Quality:** Lighthouse mobile ≥ 95 on all four metrics, axe clean, keyboard pass, reduced-motion pass.
5. **Launch:** domain, OG images, sitemap, analytics (privacy-friendly), link from Upwork profile.
