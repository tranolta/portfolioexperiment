// ============================================================
//  CONTENT MODEL — all customizable fields for the portfolio
// ============================================================

/**
 * How a project card is composed visually.
 *
 *  'hero-full'      — Full-width editorial card. Massive title, dark or
 *                     accent-color background. The "cover story."
 *  'split-image'    — Two-panel: image/gradient left, editorial text right.
 *  'type-statement' — No image. Typography IS the visual. Bold color treatment.
 *  'minimal-row'    — Horizontal text row that expands on hover.
 */
export type ProjectLayout =
  | 'hero-full'
  | 'split-image'
  | 'type-statement'
  | 'minimal-row'

/**
 * The color/mood treatment applied to the card background.
 *
 *  'default'  — warm parchment bg, dark ink
 *  'dark'     — deep dark bg, light text
 *  'signal'   — accent red-orange bg
 *  'tone'     — muted/neutral, minimal presence
 */
export type ProjectTheme = 'default' | 'dark' | 'signal' | 'tone'

/**
 * A single portfolio project. All fields except the required ones are optional,
 * which means you can progressively enrich a project entry over time.
 *
 * To add a project: add an entry to src/data/projects.ts.
 * To restyle it: change `layout` and/or `theme` — no component edits needed.
 */
export interface Project {
  id: string

  // Content
  title: string              // All-caps editorial title, e.g. "OPUS"
  tagline: string            // One punchy line shown below the title
  summary: string            // 2–3 sentences for card display
  description: string        // Full description (for future detail/modal view)
  tags: string[]             // Skill/category tags
  year: string               // e.g. "2024"
  role: string               // e.g. "Lead Designer"

  // Presentation — change these to restyle without touching components
  layout: ProjectLayout
  theme: ProjectTheme
  featured: boolean

  // Optional overrides
  image?: string             // URL; if absent the card generates a visual pattern
  link?: string              // External project URL
  accentColor?: string       // CSS color — overrides the theme's accent, e.g. '#2B5BE8'
}

// ============================================================
//  EXPERIENCE
// ============================================================
export interface WorkExperience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
}

// ============================================================
//  SKILLS
// ============================================================
export interface SkillGroup {
  category: string
  skills: string[]
}

// ============================================================
//  PERSONAL PROFILE
// ============================================================
export interface Profile {
  name: string
  nameFirst: string
  nameLast: string
  title: string
  positioning: string      // One strong sentence — the positioning statement
  bio: string              // Full paragraph
  email: string
  location: string
  availability: string
  social: { label: string; url: string }[]
}
