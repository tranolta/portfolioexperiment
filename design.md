<!-- Hallmark · design.md · studied: yes · DNA-source: url (https://www.vinnova.se/) -->

# Design — Vinnova

Locked design system, extracted from vinnova.se. Future Hallmark runs read this
file first; pages defer to it. Amend intentionally — the file is the rule.

## System
- Genre · modern-minimal (institutional / public-sector, motion-cut)
- Macrostructure · Portal / Directory Hero (Marquee Hero family — statement band + icon entry-row + card content + event list)
- Theme · studied-DNA (source: https://www.vinnova.se/)
- Axes · light-paper / grotesk-sans / green

## Provenance
- Source · URL mode — `https://www.vinnova.se/`, read live via browser (computed styles), 2026-07-06
- Attestation · user's own site
- Confidence · Tokens exact (computed sRGB → OKLCH). Fonts exact (Trade Gothic, read from computed `font-family`). Rhythm from a full-page screenshot — medium-generous, left-biased hero, centred content.

## Tokens (canonical · `tokens.css` is the source of truth)
```css
:root {
  --color-paper:      oklch(100% 0 0);          /* #FFFFFF content paper       */
  --color-paper-2:    oklch(98.6% 0.002 250);   /* #F9FAFC off-white band       */
  --color-hero:       oklch(31% 0.055 156);     /* #173D29 deep forest hero band*/
  --color-ink:        oklch(28% 0.008 232);     /* #21272A body text            */
  --color-ink-2:      oklch(45% 0.008 240);     /* #4D5358 slate / footer        */
  --color-rule:       oklch(90% 0.004 250);     /* hairline dividers            */
  --color-accent:     oklch(56% 0.165 138);     /* #24870F leaf green — primary */
  --color-accent-ink: oklch(100% 0 0);          /* white on green               */
  --color-link:       oklch(56% 0.185 330);     /* #B546AF magenta — text links */
  --color-focus:      oklch(56% 0.165 138);     /* green focus ring             */

  --font-display: "TradeGothic", "Archivo", Arial, sans-serif;
  --font-body:    "TradeGothic", "Archivo", Arial, sans-serif;
  --font-mono:    ui-monospace, "SFMono-Regular", monospace;

  /* Single-family system, weight-differentiated. H1 ~64px/700 white on green. */
  /* Body 18px. Labels: uppercase, tracked. 4-pt spacing scale; sections 0 64px. */
  /* Type scale, 1.25 (major-third): --text-xs … --text-display.                */

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 180ms;  --dur-base: 240ms;  --dur-slow: 320ms;

  --radius-card: 0px;  --radius-pill: 0px;  --radius-input: 0px;  /* sharp — no rounding, institutional */
}
```

## CTA voice
- Primary · fill `--color-accent` (leaf green) · radius 0 · padding `0 32px`, white label
- Secondary · text link in `--color-link` (magenta), underlined · radius 0
- Labels/eyebrows · uppercase Trade Gothic, tracked (e.g. "FINANSIERING", "HORISONT EUROPA")

## Motion stance
- motion-cut · no animation libraries · WCAG-first (public sector)
- Reduced-motion fallback · ≤150 ms opacity crossfade.

## Notes — anti-patterns to NOT carry over
- The 5-uniform-circular-icon entry row reads templated if adopted verbatim — vary spans/weight.
- Magenta links (`#B546AF`) on white sit near the AA contrast floor — verify contrast before reuse; darken toward `oklch(50% 0.185 330)` if needed.
- Trade Gothic is a licensed face — free near-substitute for rebuilds: **Archivo** or **Libre Franklin** (grotesques). Keep the single-family, weight-differentiated logic.

## Exports
`tokens.css` (in this project) is the source of truth. For Tailwind v4
`@theme`, DTCG `tokens.json`, or shadcn/ui CSS variables, ask *"extend
design.md with Tailwind exports"* — Hallmark will append them.
