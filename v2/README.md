# Unicorners — v2 homepage

Second design direction for unicorners.com, built alongside v1 (repo root) so both can be
shown side by side. Lives at `/v2/` when published on GitHub Pages.

- `index.html` — single-page homepage, exactly the copy supplied 2026-08-19
- `styles.css` — standalone stylesheet, all tokens in `:root`
- assets are shared with v1 and referenced as `../assets/…` (nothing duplicated)

## Reference

Structure and visual language adapted from **heyhihello.com** (main page):

| Taken from the reference | How it appears here |
|---|---|
| Page as a stack of inset rounded panels on a tinted paper background | `--gutter` page margin, `--r:34px` panel radius, `--paper:#F4F5F2` |
| Oversized Inter 800 headline, tight tracking (−3.5%), sentence case | `h1` / `h2` |
| One solid weight/typeface across the whole headline | `h1` is Inter 800 throughout |
| Hand-drawn marker underline on key words | `.u` + inline `.squiggle` SVG under "AI" and "deep tech" |
| Client quote with avatar pill and prev/next arrows | `.quote` in the hero's right column, 3 rotating quotes |
| Hero carries no descriptive paragraph, one CTA only | headline + single **Book a chat** button + quote |
| Small pill buttons (13–14px, 600) | `.btn` |
| Numbered editorial rows (01–04) with hover arrow | Domains section |
| Case grid with tag chips | Selected cases |
| Nav that condenses into a floating pill on scroll | `.topbar.stuck` |

Recoloured to the Unicorners brand gradient — **green `#00C2C2` → yellow `#FFD220`** (via
`#63CBA0`). Gradient is used on the hero panel, the three "what we do" icon tiles and the case
covers; everything else is ink `#0E1210`, white and paper grey. Minimalist by intent: no
decorative illustration, one accent, lots of air.

## Sections (in page order)

Header · Hero + member logo strip · What we do (3 cards) · Domains (4 numbered rows) ·
Selected cases (4 tiles) · Contact (intro + form) · Footer

## Placeholders — replace before this goes public

- **Case tiles** — 4 tiles use the "case cover format" from the copy: cover visual, domain /
  capability chips, title, one sentence, "View case". Titles, sentences and covers are dummy.
- **Case covers** — soft brand-tinted blocks labelled "Case visual". Real imagery to come.
- **Member logo strip** — real logos (QArea, TestFort, Amazinum, Unidata Lab, Neoteric) plus one
  dashed "Member logo" slot for the next member.
- **Icons** — three simple line icons drawn inline for AI solutions / deep-tech / AI QA.
- **Contact form** — no delivery endpoint. Submitting shows an inline placeholder confirmation.
  Needs a form service (Formspree / Basin / own handler) or swap to `mailto:`.
- **Client quotes** — 3 quotes adapted from the reference wording; all attributions read
  "Client name, Company" and the avatar is an initial circle. Swap for real client names, quotes
  and photos (or drop the block) before this is shown as testimony.
- **Hero CTA label** — "Book a chat", taken from the reference. The supplied copy calls this
  "Discuss a project" (still used in the header, footer and contact form) — swap if preferred.
- **Footer legal line** — "Placeholder: legal entity, address, policy links".
- **Links** — "Explore all cases" and each "View case" point at anchors on this page; there are no
  inner pages in v2 yet.

## Preview

Open `v2/index.html` in a browser, or after publishing: `…/unicorners.com/v2/`.
