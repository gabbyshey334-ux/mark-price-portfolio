---
name: portfolio-design
description: Design rules for Mark Price's portfolio site. Load before adding or changing any page, component, style or copy in this project.
---

# Portfolio design rules

The full system lives in `docs/DESIGN.md`; tokens in `src/styles/tokens.css`. Read both before building.

## Before building anything

1. State what the section is for (which visitor question it answers) in one sentence.
2. Sketch it in ASCII against the 12-col left-aligned grid.
3. Check the sketch against the avoid list below. If any part reads as a generic default, change it and note why.

## Client direction wins

Where Mark gives a visual reference, follow it exactly, even when it breaks a rule below. The hero and nav follow the Kern template (see "Hero and navbar" in `docs/DESIGN.md`): `#FFFF00` on near-black, uppercase, Geist. Keep those as specified.

## Rules

- **Content first.** Use real content from `src/data/`. Never invent metrics, clients or quotes. If a number isn't real yet, leave it out.
- **Tokens only.** Colors, spacing, type sizes come from `tokens.css` variables. No new hex values in components.
- **One bold thing per view.** The hero image is the bold element on the home page; everything else stays quiet.
- **Structure must carry meaning.** Numbering only for real sequences (the process). Borders/rules only where they separate different kinds of content.
- **Type:** Instrument Sans only. Sentence case. Max 65ch body. No accented single word in a headline.
- **Motion:** only the hero reveal and user-triggered changes. Wrap everything in `prefers-reduced-motion: no-preference`.
- **Copy:** plain verbs, describe what something does, written for a hotel owner or studio manager, not a developer. Buttons say what happens ("Email Mark", "Send your site").
- **Speed is part of the design.** No client JS unless a feature needs it. Images through `astro:assets` with explicit sizes.

## Avoid

Caps eyebrow labels, "A · B · C" meta strings, "WORD — fragment" labels, arrows appended to links, monospace small labels, identical rounded card grids with soft grey shadow, gradient washes, fade-up on every section, big-number stat heroes, cream + terracotta, near-black + acid accent.

## Done means

Screenshots checked at 390, 768 and 1440 wide in light and dark; keyboard tab-through shows focus everywhere; `npm run build` passes.
