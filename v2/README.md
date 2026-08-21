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
| Page as a stack of inset rounded panels on a tinted paper background | insets measured off the reference: 48px sides / 24px top at a 1280 viewport (`--gutter` / `--gutter-top`), `--r:26px` radius (ref 24px), 32px padding inside the card, `--paper:#EDEEEC` |
| Oversized Inter 800 headline, tight tracking (−3.5%), sentence case | `h1` / `h2` |
| One solid weight/typeface across the whole headline | `h1` is Inter 800 throughout |
| Hand-drawn loop around the key phrase (as on `/sectors/startups-ventures`) | `.u-ring` — an open ellipse with an overshoot, `preserveAspectRatio:none`, round caps, stretched over "AI and deep tech" in semi-white `--marker:rgba(255,255,255,.62)`; section headings keep the cyan `.u-line` |
| Client quote with avatar pill and prev/next arrows, auto-advancing | `.quote` in the hero's right column — 3 quotes, 5s rotation with a 220ms crossfade, paused on hover/focus and while the tab is hidden; arrows reset the timer |
| Hero carries no descriptive paragraph, one CTA only | headline + single **Book a chat** button + quote |
| Bottom band of `/services/brand-creative` and `/sectors/startups-ventures`: stat, vertical rule, dotted name row | `.heroband` — "5 companies / 4 domains" + partner names, inside the hero card |
| Nav sits ~30px below the card's top edge (measured on the sector page) | `--nav-gap` |
| Small pill buttons (13–14px, 600) | `.btn` |
| "What we do" sits on the page background, no card | `.wwd` — sticky intro column + stacking cards |
| Service cards that stack as you scroll, edges peeking | `.scard` sticky at 104/120/136px (`--i` per card) |
| Marker underline on part of a section heading | `.u-line` — cyan stroke under "we do" |
| Numbered editorial rows (01–04) with hover arrow | Domains section |
| Work grid: no panel, staggered columns, each card a colour ground + text + image | `.work` / `.wcard` — six cards, two columns, right column offset, `.tall`/`.wide` vary the image ratio |
| Nav that condenses into a floating pill on scroll | `.topbar.stuck` |

The hero gradient is **animated**: the base gradient drifts across a 230% background box (14s),
three blurred brand-colour fields drift and scale on 15/19/24s cycles, and a light sweep crosses
every 11s. All of it stops under `prefers-reduced-motion`.

"AI and deep tech" also carries a **colour wave**, built the way manual.studio builds theirs:
each character is its own span with a long `color` ease-out, and JS lights them one at a time
from a five-colour palette so a rainbow band travels through the phrase. It plays on load, on
hover, and every 12s; the palette lives in the `data-colors` attribute on `#cwave` in the HTML,
so it can be retuned without touching the CSS. Skipped entirely under `prefers-reduced-motion`.

The member names in the hero band run as an infinite **marquee** (two identical halves, 42s
linear, `translateX(-50%)`), masked at both edges and paused on hover.

Recoloured to the Unicorners brand gradient — **green `#00C2C2` → yellow `#FFD220`** (via
`#63CBA0`). Gradient is used on the hero panel, the three "what we do" icon tiles and the case
covers; everything else is ink `#0E1210`, white and paper grey. Minimalist by intent: no
decorative illustration, one accent, lots of air.

## Case pages — `case-<slug>.html`

Six case pages built to the block sequence of **wearecollins.com/programs/expansion**, all six
blocks and their animations:

| Reference block | How it appears here |
|---|---|
| Hero: eyebrow at the left margin, centred title, one-line excerpt | `.case-hero` |
| Story slideshow: rounded full-width image, progress bars bottom-left, client pill bottom-right | `.story` — crossfades every 4.6s, bars fill in step, "Delivered by <member>" pill |
| Credits column beside a paragraph that fills with ink as it scrolls | `.credits` + `.tsf` — scroll-linked `linear-gradient` on `background-clip:text`, exactly the reference's mechanism |
| Dark panel of numbered features | `.featureblock` / `.fgrid` — the six numbered workstreams from v1 |
| Impact: heading, arrows, carousel of stat cards | `.impact` / `.rail` — snap scrolling, arrows disable at the ends |
| Narrative rows | `.narrative` — v1's long-form sections, padded with placeholders |
| More programs → More cases | `.more` |

Content is v1's real case content (titles, credits, stats, workstreams, long-form sections),
re-cut into these blocks. Shared `case.css` + `case.js`; the homepage cards and spines link here.

## Sections (in page order)

Header · Hero (headline, CTA, client quote, partners band) · What we do (stacking cards) ·
View the demo (spine shelf) · Selected cases (6 colour cards) · Domains (4 numbered rows) · Contact (intro + form) · Footer

The header nav still lists **Domains before Cases**, as in the supplied copy, while the page now
shows Cases first — anchors work either way; reorder the nav if you want them to match.

## Placeholders — replace before this goes public

- **Spines ("View and click the demo")** — COLLINS' case-studies *Spines* view: ten horizontal colour bands
  stacked down the page on a full-bleed black ground (no card, no panel), ragged widths and
  indents, varying heights (64–158px), an even 12px gap, small title left and a member logo right.
  Each band unrolls from the left as it scrolls into view (staggered 70ms) and scales 1.02 on hover
  with its logo scaling 1.06. Six carry real cases and link to their pages; four are placeholders.
  The first band is the live **Fitness App demo** — it opens
  `demo1.fitness-apps.qarea.org/member/index.html` in a new tab and carries the white dumbbell mark
  (`icon-dumbbell-white.svg`, from the SVG Repo file supplied — viewBox cropped to the artwork so it
  can render large) on the right, in place of a member logo. Band colours are
  placeholders. White logo variants were generated from the member SVGs
  (`logo-*-white.svg`); the reference's own artwork is canvas-drawn client branding and was not copied.

- **Case imagery** — only three real photographs exist in the shared asset set (gym, training,
  studio microphone). The other cards fall back to v1's abstract 3D renders; the red/blue/navy
  ones are unused because they fight the brand palette. Reference-site photography was NOT copied
  (it is their clients' brand imagery). Supply real project photos, or say the word and I'll pull
  licence-free stock as v1 did for the fitness case.
- **Partner names in the hero band** — set as type with dots, following the reference, so the actual
  member logo files are no longer displayed anywhere on the page. Say if you want image logos back.
- **Marquee placeholders** — three "Member name" chips (hollow dot) pad the loop; replace them
  with real partners or delete them.
- **Band figures** — "5 companies / 4 domains" counts what the page currently lists; update as
  members join.
- **Icons** — three simple line icons drawn inline for AI solutions / deep-tech / AI QA.
- **Contact form** — no delivery endpoint. Submitting shows an inline placeholder confirmation.
  Needs a form service (Formspree / Basin / own handler) or swap to `mailto:`.
- **Client quotes** — 3 quotes adapted from the reference wording (two two-line, one short); all attributions read
  "Client name, Company" and the avatar is an initial circle. Swap for real client names, quotes
  and photos (or drop the block) before this is shown as testimony.
- **Card links** — "Explore AI solutions / deep-tech projects / AI quality assurance" and the
  intro's "Explore domains" pill all point at on-page anchors; there are no service pages yet.
- **Hero CTA label** — "Book a chat", taken from the reference. The supplied copy calls this
  "Discuss a project" (still used in the header, footer and contact form) — swap if preferred.
- **Footer legal line** — "Placeholder: legal entity, address, policy links".
- **Case-page gaps** — each page's narrative block is padded with "Section title placeholder"
  rows where v1 had fewer long-form sections, and the hero slideshow reuses the same two or three
  images per case. "Explore all cases" still points at v1's `../cases.html` — there is no v2 cases
  index yet.

## Preview

Open `v2/index.html` in a browser, or after publishing: `…/unicorners.com/v2/`.
