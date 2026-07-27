# Unicorners — Community site draft (Testlio-inspired)

Multi-page draft. Narrative + block structure adapted from **testlio.com/community** and
**testlio.com/case-studies**, for a **community of niche AI & deep-tech companies from Ukraine**.
Case-study detail page follows the Testlio "Solidgate" long-form format. Uses the **official Unicorners
brand** (gold→cyan gradient, real SVG logos). Buttons: **Connect** (primary) / **Become a partner** (secondary).

## Files
| File | Page |
|---|---|
| `index.html` | Home — hero, **member-logo strip**, **case-studies preview (main block, Testlio format)**, navy value section, stat cards, split media, 6 features, CTA band, footer |
| `cases.html` | All case studies — industry filter chips + grid (Testlio card format: tag → title → description → member logo → Read more) |
| `case-detail.html` | **Real case study** — QArea's AI fitness platform w/ Gemini, in Testlio long-form format (dark hero + member logo, overlapping stat row, overview, challenge, solutions, results, quote, tech chips) |
| `community.html` | About — why a community, how it works, principles, **IT Ukraine Association / Ambassador in France**, For partners |
| `styles.css` | Shared stylesheet — all colours/spacing/fonts as `:root` variables |
| `assets/` | Official logos: `logo-unicorners-long.svg` (+ `-white`), `-short.svg`, member `logo-qarea.svg`, `logo-testfort.svg` |

## Brand system
- **Gradient:** official Unicorners **gold `#FFD220` → cyan `#00C2C2`** (`--brand`). Solid accent `--accent:#0E9C9C`.
- **Type:** Playfair Display (serif display accents) + Inter (grotesk body ≈ Aktiv Grotesk), via Google Fonts.
- **Structure (from Testlio):** white bg, deep-navy value sections, 4pt spacing, colored stat cards, serif-italic phrase accents, gradient closing band.

## Confirmed facts baked in
- Legal entity: **Unicorners Inc.** · Contact: **connect@unicorners.com**
- **IT Ukraine Association** — largest national tech association; Ambassador in France = official bridge to the French market. Stats: 270+ members, 100,000+ specialists, 5 committees, 1M+ impressions/yr. **Max Zorian** — Ambassador in France, Founder of QArea. Link: itukraine.org.ua
- Members shown: **QArea, TestFort** (real logos) + placeholders.
- Featured real case: **QArea — AI fitness platform w/ Gemini** (9 metrics, 1,500+ exercises, 52 legal docs, 12 specialists; 45% faster, 30% lower infra cost, 4.8/5).

## Preview
```bash
open "/Users/dimarabuha/Desktop/Max activities/Unicorners.com/community-site/index.html"
```

## Partner-ready deliverables (2026-07-26)
- **Full site:** open `index.html` (4 linked pages, all placeholders filled, mock visuals).
- **Self-contained one-pager:** `unicorners-onepager.html` — everything inlined (CSS + logos as data URIs), opens/shares as a single file.
- **Zip:** `../unicorners-community-site.zip` — the whole site to send.
- **Shareable hosted link (private):** https://claude.ai/code/artifact/5223e3b3-95e0-4b28-a13c-6eea074edb64 — share it from the page's share menu.

## ⚠️ Illustrative content to replace before presenting as fact
Real (from your material): **QArea** case (Gemini fitness), **TestFort**, IT Ukraine Association stats, Max Zorian, Unicorners Inc., connect@unicorners.com.
**Invented placeholders** (look real, not real): member companies **Vidrio / Kordis AI / Skein AI / Orbital**; client **"Vitalio"** + its quote; all non-QArea case metrics (68% / 99.2% / −38% / 55% / 70%); home stats (20+/500+/15+/10yrs); "ISO/IEC 27001-aligned". Swap these for real figures before quoting them to partners as fact.

## Still to source
- Other member companies + logos (only QArea/TestFort real so far).
- Home stat numbers (20+/500+/15+/10yrs) — real community figures.
- Additional real case studies (5 of 6 cards are placeholders; clone `case-detail.html` per real story).
- QArea case: client name + confirmed pull-quote.
- Real imagery for hero/coverage/product visual placeholders.

## Finalising in Claude design
Pages share `styles.css`. For a single-file artifact, inline `styles.css` into `<head>` and either keep the
Google-Fonts `@import` or accept the system fallback. Logos are external SVGs in `assets/` — inline or base64 them for a self-contained artifact.
