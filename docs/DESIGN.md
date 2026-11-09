# Design system

Sources studied: Anthropic's official `frontend-design` SKILL.md (anthropics/skills), and the most-used community skills (ui-ux-pro-max, web interface guidelines review, szilu/ux-designer-skill). The rules that apply to this site are condensed in `.claude/skills/portfolio-design/SKILL.md`.

## Concept

**"The work is the hero, the speed is the proof."** Mark's clients sell rooms, interiors and objects through photography. The site looks like their world (stone, river, linen, brass, big quiet images) and behaves like his pitch: it loads instantly on a phone.

Alignment: **left-aligned, asymmetric.** Text sits on a narrow left column; images take the wide right side or go full-bleed. Nothing centred except the 404.

## Hero and navbar (client direction, 2026-11-09)

Mark asked for the hero and nav to follow the Kern Framer template (kern-template.framer.website). This overrides the general rules below for these two parts only. It's rebuilt in our own code with Mark's content; no template code, images or copy are used.

- **Nav** (`Header.astro`): fixed pill, centred, 24px from the top, 300×60, 5px radius, `rgba(10,10,10,.35)` with a 10px backdrop blur (`.82` opacity on pages without the photo hero). The grid icon expands the pill to ~290px: four 28px uppercase links with a staggered rise, then a card with a thumbnail, "Based in Michigan" and live US Central time. Closes on Escape, link click or outside click.
- **Hero** (`Hero.astro`): 93svh full-bleed portrait on `#0A0A0A`, shown in black and white. A pointer-driven brush trail reveals the colour image (canvas mask that fades out). The photo scrolls at 0.9× page speed. Role (`#FFFF00`) and location sit centred in two 15px uppercase lines above the name. The name is Geist 900, letter-spacing −0.05em, line-height 0.8, `#FFFF00`, sized by script to fill the full width.
- **Cursor reveal:** paint-blob metaballs (soft circles in a low-res mask, then an alpha threshold), so the edges are crisp and organic. Blobs grow in over 180ms, hold for 450ms, then shrink over 1.5–2.2s; the blob under a resting cursor swells up to 1.45×; about 14% of dabs fling off a droplet. Over the backdrop the stroke paints `#DEDEDE`.
- **Nav over light sections:** past the hero the pill switches to its darker glass.
- **Load sequence:** the photo settles from 1.06 scale; the lines and name rise out of their masks, staggered 250–420ms. Reduced motion turns off all of it except the brush, which only runs when the user moves the pointer.
- **Font:** Geist (Google Fonts) for the nav and hero; Instrument Sans for the rest of the site, until the rest is redesigned.
- **Photo:** source is `public/hero/portrait.jpg` (a transparent cut-out PNG). The hero uses `portrait-cut.webp` (transparency kept, 127 KB) on a `#B1B1B1` grey, and the menu card uses `portrait-thumb.jpg`. Regenerate them with sharp if the source changes.
- **Sizing:** the hero is exactly one screen (`100svh`) on every device. On landscape screens the whole portrait shows (`contain`, standing on the bottom edge). On portrait screens it fills the screen (`cover`), cropping the sides only.

## Palette

Drawn from Huka Lodge's river setting and interior-design materials. Avoids the cream + terracotta and near-black + acid-accent defaults.

| Token | Hex | Role |
|---|---|---|
| `--stone` | `#E9ECE8` | Page background (cool, not cream) |
| `--spruce` | `#1E2D29` | Text, dark surfaces |
| `--river` | `#2F5D57` | Primary accent: links, buttons, focus ring base |
| `--lichen` | `#8E9E92` | Secondary text, rules |
| `--brass` | `#A8823A` | One-off highlight (active state, selection); never body text |
| `--white` | `#FFFFFF` | Image mats, raised surfaces |

Dark mode swaps `--stone` ↔ a deep spruce (`#15201D`) and lifts `--river` to `#7FB3A9` for contrast. All text pairs meet WCAG AA (body ≥ 4.5:1).

## Type

One family: **Instrument Sans** (variable weight + width). Personality comes from width and scale, not a second family.

| Role | Size (clamp) | Weight / width | Leading |
|---|---|---|---|
| Display (hero) | 2.75rem → 6rem | 600 / 85% (condensed) | 0.95 |
| H2 | 2rem → 3.25rem | 600 / 90% | 1.05 |
| H3 | 1.25rem → 1.5rem | 600 / 100% | 1.2 |
| Body | 1.0625rem | 400 / 100% | 1.6 |
| Small | 0.875rem | 450 / 100% | 1.5 |

Scale follows a 1.333 ratio. Body measure capped at 65ch. Sentence case everywhere. No all-caps labels, no single accented word in headlines.

## Layout

```
HOME (desktop, 12-col, 24px gutters, max 1440)
┌──────────────────────────────────────────────┐
│ Mark Price                   Work Services Contact │
├──────────────┬───────────────────────────────┤
│ Headline     │                               │
│ (cols 1-5)   │   project image, full height  │
│ one-line sub │   (cols 6-12, bleeds right)   │
│ [Send your   │   caption: client, what built │
│  site]       │                               │
├──────────────┴───────────────────────────────┤
│ Selected work: alternating rows, image 7 cols │
│ text 4 cols, flip sides each row (no cards)   │
├──────────────────────────────────────────────┤
│ Services: two-column definition list          │
├──────────────────────────────────────────────┤
│ Process: numbered 1–5 (a real sequence)       │
├──────────────────────────────────────────────┤
│ Proof: 2 review quotes large, certs as a list │
├──────────────────────────────────────────────┤
│ Contact: big email link + Upwork link         │
└──────────────────────────────────────────────┘

PHONE (390): single column, hero image first under the header,
headline overlaps image bottom on a stone panel, work rows stack.
```

Radius: `0` on images (photography stays square-edged, like prints), `999px` on the one primary button, `6px` on inputs. Shadows: none; depth comes from image vs. stone contrast.

## Motion

One orchestrated moment: on load, the hero image reveals with a clip-path wipe from left (700ms, ease-out) while the headline settles. Nothing else animates on scroll. User-triggered motion only (menu open, focus). All disabled under `prefers-reduced-motion`.

## Quality floor

- Visible focus ring (2px `--river` + 2px offset) on every interactive element.
- Lighthouse mobile ≥ 95, LCP < 1.8s, CLS < 0.05: images have width/height, AVIF/WebP via `astro:assets`.
- Real `alt` text describing the room/product, not "screenshot".
- Tap targets ≥ 44px.

## Avoid list (from the skill research)

Tracked-out caps eyebrows, "A · B · C" meta strings, "→" on links, monospace data labels, identical rounded cards with grey shadows, gradient washes, fade-up on every section, big-number stat hero, invented metrics.

## Footer (client direction, 2026-11-09)

Follows the Affinitty Framer template's footer (affinitty.framer.website), rebuilt in our own code (`Footer.astro`) with our own ribbon curves and Geist in place of their paid font. It replaces the old contact section and carries the `#contact` anchor.

- Black background; two 20-unit gradient ribbons (`rgba(255,255,255,.1)` → black → `rgba(6,6,6,.6)`) draw in over 3s (`cubic-bezier(.65,0,.35,1)`, the second 0.32s later) when the footer is 25% on screen.
- "Ready for the work ?" centred at 32px; "Let's talk" in Geist 500, fitted to the full width, rising in.
- Panel on `rgba(255,255,255,.1)` with 10px `#444` corner squares and a hairline divider. Left: "Currently open for collaboration" plus an email chip that copies the address ("Email copied!" for 2s, falls back to mailto) and shows 6px selection handles on hover. Right: "Connect on socials" with Upwork and Gmail only.

## About section (client direction, 2026-11-09)

Follows the About section of the Leo Marlowe Framer template (leomarlowe.framer.website), rebuilt in our own code (`About.astro`) with Mark's content. It sits right after the hero, and the nav links to `#about`.

- Palette from the reference, now the site base: paper `#F4F2EE`, ink `#1A1917`, muted `#6B6862`, tray `#E9E6E0`, accent `#C0603E`.
- "(02) — About" in Geist Mono 11px caps; the statement in Fraunces 400 (28–44px, centred, last clause muted). The words reveal one by one (fade, unblur and rise, 35ms stagger) when the section scrolls in.
- Three steps (Build, Speed up, Look after) as 20px-radius cards inside a 26px-radius tray with a 6px inset; 40px round icons, with the last one in the accent colour.
- Daily toolbox: 10 official logos (Simple Icons, CC0) in 48px tiles at 28% radius. They magnify like the macOS dock: up to +32% with a smoothstep falloff over 130px, eased, scaling from the bottom edge, and the hovered tile shows its name above. Focusing a tile with the keyboard does the same.

## Selected work (client direction, 2026-11-09)

Follows the Selected Work section of the Leo Marlowe template, rebuilt in `Work.astro`. It shows six cards so the two-column grid stays even; all seven projects keep their case pages.

- Header: "(03) — Selected work" (mono), "Selected *work*" in Fraunces with "work" muted, and "Live client sites" in mono.
- Cards: 374:380 cover at 24px radius with a 1px inset ring, filled with the project's `tone` until a screenshot is set (`image` in `projects.ts`).
- Glass badge: a 61px circle (`tone` at 62%, blur 16 and saturate 1.4) showing the client's initial. On hover it grows into "View case ↗" and follows the cursor (eased 0.16 per frame), while the image zooms to 1.1× and drifts slightly away from the cursor.
- Title: Fraunces 24px, letters roll up to an identical copy (18ms stagger). Meta line: Geist Mono 11px, `sector • first stack item`; on hover the dot stretches to 24px and the text darkens.
- Phone: one column.

## Case-study page (client direction, 2026-11-09)

Follows Leo Marlowe's case page (leomarlowe.framer.website/work/fieldwork), rebuilt in `src/pages/work/[slug].astro`.

- An "All work" pill (32px, inset ring, letter-roll hover), then a 64px app-icon tile in the project's `tone` (radius 19, drop shadow) and a mono `SECTOR / STACK` line.
- A Fraunces 64px client name beside a 20px summary (620:420 columns from 900px), with "Visit the live site ↗".
- Cover: 1040:640 at 20px radius using `wide.webp` (1200x840). The image overscans ±7% and drifts at 6% of scroll speed.
- Details column (340): "(Project details)", then Client, Location or Sector, and Built with, in hairline rows. Story column (660): 44px heading, intro, 26px subheading, body, "built" chips, Mark's usual-process line, and an email link. Measured results appear only when `results` is set.
- "Next project": a hairline, mono label, 64px name with letter roll (wrapping between words), a 300x190 thumbnail and a 48px arrow that fills ink on hover.
- Case copy lives in `story` in `projects.ts`, written from the Upwork descriptions.

## Sections 05–08 (client direction, 2026-11-09)

Follow the Lequon Framer template (lequon.framer.website): a brutalist, full-width grid of hairline cells (`rgba(17,17,17,.16)`), ink `#111`, orange `#FF4A1F`, Bricolage Grotesque (700 for headlines at 64px with tight tracking, 500 for titles at 24px), Instrument Serif italic for the orange numerals, and JetBrains Mono caps for meta text. Every section label uses the site format "(NN) — Name", via `SectionHead.astro`, with one orange word in the headline.

- (05) — Process (`Process.astro`): a 2x2 grid with an italic numeral, title, body and a hairline above a two-line meta (when / what). The process is four steps so the grid stays even.
- (06) — Services (`Services.astro`): intro, an availability pill with a pulsing dot, and an "Every project includes" two-column list with orange + bullets. Then an accordion: `-01` index, 24px title, and a 36px square +/− toggle that fills ink when open; the open row tints `#E9E5DA`. One row is open at a time.
- (07) — Testimonials (`Testimonials.astro`): bordered cells with an orange italic quote mark, an orange highlighted phrase, an ink initials tile, and orange ★★★★★ 05/05 (both reviews are real five-star Upwork reviews).
- (08) — Certificates (`Certificates.astro`): Lequon's collaborators grid (4 columns, 2 on phones) with 10 certificates, the degree and Upwork ID verification. Cells invert to ink on hover.

## Page switch (client direction, 2026-11-09)

Copied from the Affinitty template's page transition (`PageTransition.astro`, included by `Base.astro`).

- Three full-screen panels in the site's colours: hero yellow `#FFFF00`, section orange `#FF4A1F` and ink `#1A1917` (stacked in that order, ink on top). Affinitty's own blue, purple and yellow were swapped out at Mark's request.
- Leaving: on any same-site link to another page, the panels sweep in from the left (650ms, `cubic-bezier(.76,0,.24,1)`, staggered 0/90/180ms). Once ink covers the screen, the browser navigates.
- Arriving: an inline script in `<head>` sees the session flag and starts the page covered before first paint. The panels then sweep out to the right in the same order and are parked back on the left instantly.
- Skipped for in-page anchors on the same page, new tabs, modifier-clicks, downloads, external links and reduced-motion users. The back/forward cache never restores it mid-cover.

## Experience (client direction, 2026-11-09)

(04) — Experience follows Leo Marlowe's Experience section (`Experience.astro`) and sits between Selected work and Process, so visitors see the work and then who it was for.

- Centred Fraunces 44px heading with a muted second half, and a 720px tray (`#E9E6E0`, 26px radius, 6px inset) of 20px-radius rows.
- Each row: a 46px ink initials tile (Fraunces), a 22px company name, the role in muted 15px Geist, and a mono pill on the right. The current role shows a terracotta "Now" badge with a blinking dot.
- Data: `experience` in `profile.ts`, from the six Upwork employment records plus the current freelance role. Upwork lists no dates, so the pill says "Contract" rather than inventing years. Client rows link to their case pages and lift on hover.
- A "Full profile on Upwork ↗" pill button with the letter roll, opening in a new tab.
