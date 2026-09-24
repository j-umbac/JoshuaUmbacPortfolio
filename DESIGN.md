---
name: Joshua Umbac Portfolio
description: Cool, dark observatory for shipped work — ice-blue signal on a near-black field.
colors:
  cinema-black: "#0a0a0a"
  void-surface: "#141414"
  surface-dim: "#131313"
  surface-bright: "#3a3939"
  on-surface: "#e5e2e1"
  muted: "#878787"
  stroke: "#1f1f1f"
  outline: "#8c9198"
  powder-cyan: "#a8caed"
  powder-ink: "#0c334f"
  horizon-steel-start: "#89AACC"
  horizon-steel-end: "#4E85BF"
  museum-brass: "#edbe84"
  signal-green: "#4ADE80"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(4rem, 14vw, 9rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.05em"
    fontStyle: italic
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.1
    fontStyle: italic
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1
rounded:
  sm: "0.25rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  bento: "24px"
  pill: "999px"
spacing:
  grid-gutter: "24px"
  bento-gap: "24px"
  list-gap: "16px"
  section-v: "64px"
  page-x: "32px"
  max-width-wide: "1400px"
components:
  button-primary:
    backgroundColor: "{colors.void-surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.void-surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    padding: "4px 8px"
  chip:
    backgroundColor: "{colors.surface-bright}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    typography: "{typography.label}"
  chip-status:
    backgroundColor: "{colors.horizon-steel-start}"
    textColor: "{colors.powder-ink}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  card-bento:
    backgroundColor: "{colors.void-surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.bento}"
    padding: "24px"
  nav-pill:
    backgroundColor: "{colors.void-surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "8px"
  nav-pill-active:
    backgroundColor: "{colors.horizon-steel-start}"
    textColor: "{colors.cinema-black}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
---

# Design System: Joshua Umbac Portfolio

## Overview

**Creative North Star: "The Quiet Observatory"**

The visitor is in a dark room looking at evidence, not a marketplace looking at chrome. Near-black ground, cool instrument light, and a small amount of ice-blue signal. The work (screens, titles, proof) is the object; the interface recedes until it is needed.

The mood is cool-engineer: precise, stacked like Material surfaces, Powder Cyan as instrument light rather than decoration. Motion is tactile and confident — hover scale and glow are how controls announce they can be pressed — but the field stays quiet. Anti-reference: warm earthy crafts, maximalist 3D portfolios, candy gradients, and sticker UI.

**Key Characteristics:**
- Cinema Black field with a stepped surface ramp instead of rest-state drop shadows
- Powder Cyan / Horizon Steel as scarce instrument light
- Italic Instrument Serif for titled artifacts; Inter for structure and chrome
- Pill capsules for actions and tags; 24px bento vessels for records
- Halftone grain as hover atmosphere, not a texture dumped on every screen

## Colors

A near-black observatory with one cool signal family, one warm proof accent, and a green liveness mark.

### Primary
- **Powder Cyan**: Default instrument light — links, focus ring, selection, skill headings. Scarce on purpose.
- **Powder Ink**: Text sitting on Powder Cyan or Horizon Steel fills (status chips, selection).
- **Horizon Steel (start → end)**: The only precious mark — pill outlines, loader bar, gradient text, active nav. A 90° linear wash, not a background wash.

### Secondary
Omitted as a painted role. A colder `#9ecaff` / deep-blue container pair exists in the token file and is unused on surfaces; do not promote it until it appears in the UI.

### Tertiary
- **Museum Brass**: Honors and other proof-adjacent highlights only. Warm exception on a cool page; never a second brand fill.

### Neutral
- **Cinema Black**: Page ground (`body`).
- **Void Surface**: Cards, primary button fill, nav glass base.
- **Surface Dim / Surface Bright**: Recessed media wells vs raised chip fills.
- **On-Surface**: Primary readable text on dark vessels.
- **Muted**: Supporting copy and idle chrome.
- **Stroke**: Hairline card and modal edges.
- **Outline**: Softer chip borders at low alpha.

### Named Rules
**The One Signal Rule.** Powder Cyan and Horizon Steel occupy a small fraction of any screen. They mark action and proof, not fill. If a layout needs more color, add surface steps — not more cyan.

## Typography

**Display Font:** Instrument Serif (Georgia, serif), italic in this system
**Body Font:** Inter (sans-serif)
**Label/Mono Font:** Inter (no separate mono)

**Character:** Title-card serif against engineer sans. The italic is the artifact; Inter is the console.

### Hierarchy
- **Display** (regular italic, `clamp(4rem, 14vw, 9rem)`, line-height 1, tracking tight): Loading counter and other full-bleed numerals/words. Mix-blend difference is allowed on this role only.
- **Headline** (Inter, `clamp(2rem, 5vw, 3.2rem)`, line-height 1.05): Section labels (Selected Works, Experience). Structure, not poetry.
- **Title** (Instrument Serif italic, ~2.25–2.5rem): Project names, roles, degrees — named artifacts.
- **Body** (Inter, 1.125rem / 1.6, muted on long copy, max ~2xl width): Descriptions and responsibilities.
- **Label** (Inter medium, 0.7–0.9rem): Chips, nav items, periods, status text.

### Named Rules
**The Console/Artifact Split.** Inter carries section architecture and UI. Instrument Serif carries named work and people-scale titles. Do not set body copy or nav in serif.

## Layout

A single wide column (`max-width-wide` 1400px) with 16px page gutter on small screens and 32px from `md` up. Vertical rhythm is 64px section padding. Records sit in a 24px-gutter bento: one column on small screens, two columns for featured work and three for skill groups from `md`/`lg`. Hero is a tall first viewport (~80vh) with the observatory field behind; content stays left, max ~4xl. Lists of experience and education are full-width stacked cards, not a timeline rail.

## Elevation & Depth

Depth is **layered Material**: the surface ramp and hairline stroke do the stacking. Glow is optional accent, not the main depth language. At rest, cards have no drop shadow — only Void Surface on Cinema Black plus Stroke. Hover may scale to 1.02 and fade in an 8px halftone grain. Cosmic glow (`0 0 15px rgba(137, 170, 204, 0.35)`) is reserved for primary-control hover and the loader bar, not for every card.

### Shadow Vocabulary
- **Cosmic glow** (`box-shadow: 0 0 15px rgba(137, 170, 204, 0.35)`): Primary pill hover and loader accent only.
- **Modal dim**: Gallery uses near-opaque black (~95%) + light blur; demo uses ~80% black + blur. These are scrims, not elevation.

### Named Rules
**The Ramp-Not-Drop Rule.** If something needs to sit above the page, step the surface token or the stroke. Do not invent rest-state drop shadows.

## Shapes

Capsules and archives. Actions, tags, nav, and status are full pills (`999px`). Work records are 24px bento rectangles with overflow clipped (media wells may use 12px / `xl` inside). Modals for embedded demos are 12px (`rounded-xl`). Close and gallery chevrons are circles. Hairlines are 1px Stroke or Outline at ~20% on chips. No sharp 0-radius chrome.

## Components

Tactile and confident: idle chrome is quiet; pressability lives in scale, glow, and gradient rings.

### Buttons
- **Shape:** Full pill.
- **Primary:** Void Surface fill with a 2px Horizon Steel gradient ring (pseudo-element inset). Padding 12×24px, medium Inter. Hover: scale 1.02 and cosmic glow. Focus-visible: 2px Powder Cyan ring with Cinema Black offset.
- **Secondary:** Ghost text in Muted, compact padding; hover to On-Surface/text; a ↗ kicks up-right. No fill, no ring.

### Chips
- **Style:** Surface Bright fill, On-Surface text, pill, 4×12px, extra-small/medium Inter. Skill chips add Outline at ~20%.
- **Status:** Horizon Steel fill, Powder Ink text — the rare filled signal.
- **State:** Informational only; no selected/unselected filter pattern in the incumbent.

### Cards / Containers
- **Corner Style:** 24px bento.
- **Background:** Void Surface.
- **Shadow Strategy:** None at rest (see Elevation).
- **Border:** 1px Stroke.
- **Internal Padding:** 24px.
- **Hover:** 1.02 scale, 600ms ease, halftone overlay to full opacity. Cursor indicates the whole card is a target.

### Inputs / Fields
None in the incumbent UI. Do not invent a field style until a form ships. Contact is mailto.

### Navigation
Fixed bottom-center pill: frosted Void Surface (~70% + 12px blur), Stroke border, 8px padding. Idle items Muted; active item Horizon Steel fill with Cinema Black text. Same capsule language as buttons.

### Status Indicator
8px Signal Green dot with ping ring; Muted label. Liveness only — not a second brand color.

### Loading Counter
Full-viewport Cinema Black; Display italic numerals; 4px Horizon Steel bar at the top with cosmic glow. Fades after 100. This is the observatory powering on.

### Gallery / Demo Modals
Heavy scrim, centered stage. Demo: 12px vessel, Stroke, 16:9. Gallery: full-bleed contain, circular chrome that appears on hover. Not a design-system “dialog”; keep them as dark theaters.

## Do's and Don'ts

### Do:
- **Do** keep Powder Cyan / Horizon Steel scarce (One Signal Rule).
- **Do** stack with the surface ramp and Stroke, not rest-state shadows (Ramp-Not-Drop).
- **Do** put named work in italic Instrument Serif and section architecture in Inter (Console/Artifact Split).
- **Do** use pills for actions/tags/nav and 24px bento for records.
- **Do** let hover scale and glow speak for pressability.

### Don't:
- **Don't** paint large regions with Powder Cyan or Horizon Steel.
- **Don't** set UI chrome or body in Instrument Serif.
- **Don't** treat Unsplash placeholders on `/creative` as brand photography or texture.
- **Don't** introduce warm earth palettes, candy gradients, or sticker/badge clutter.
- **Don't** add drop shadows to idle cards.
