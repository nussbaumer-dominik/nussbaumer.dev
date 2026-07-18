---
name: "nussbaumer.dev"
description: "Full-stack engineering depth, sharpened by design judgment."
colors:
  canvas: "#ffffff"
  ink: "#1f2937"
  ink-strong: "#111827"
  muted: "#6b7280"
  quiet: "#6b7280"
  hairline: "#e5e7eb"
  available: "#166534"
  available-surface: "#dcfce7"
  available-border: "#4ade80"
  available-hover: "#86efac"
  reference: "#2563eb"
  selection: "#e74343"
  construction: "#facc15"
typography:
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "32px"
    letterSpacing: "normal"
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "28px"
    letterSpacing: "normal"
  body-large:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "20px"
    letterSpacing: "normal"
rounded:
  panel: "8px"
  full: "9999px"
spacing:
  compact: "8px"
  standard: "16px"
  roomy: "24px"
  generous: "32px"
  section: "40px"
components:
  availability-status:
    backgroundColor: "{colors.available-surface}"
    textColor: "{colors.available}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "{spacing.compact}"
  section-label:
    textColor: "{colors.quiet}"
    typography: "{typography.label}"
  project-placeholder:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    rounded: "{rounded.panel}"
    padding: "{spacing.roomy}"
  inline-reference:
    textColor: "{colors.reference}"
    typography: "{typography.body}"
---

# Design System: nussbaumer.dev

## 1. Overview

**Creative North Star: "The Proof Desk"**

The portfolio should feel like a well-prepared work surface: quiet enough to focus, exact enough to trust, and tactile enough to reveal a person behind the evidence. The narrow reading column, native typography, flat surfaces, and direct language keep attention on finished work rather than presentation tricks.

Every visual decision should help a recruiter move from first impression to proof. Engineering credibility leads; design judgment appears in the quality of hierarchy, interaction, imagery, and finish. The system explicitly rejects generic SaaS styling, flashy agency effects, dense resume-like walls of text, and excessive animation.

**Key Characteristics:**

- Compact, evidence-forward composition.
- Quiet, exact, and assured visual voice.
- Native typography with a deliberately small scale.
- Flat structure defined by spacing, hairlines, and alignment.
- Tactile feedback reserved for real interactive states.

**The Evidence Rule.** Every prominent visual element must either establish identity, expose proof, or help the visitor act.

## 2. Colors

The palette is a clear white work surface with graphite text and sparse functional color. Color communicates state or action; it is never ambient decoration.

### Primary

- **Available Green** (`colors.available`): Signals current availability. Its surface, border, and hover companions are confined to the availability control and comparable positive states.

### Secondary

- **Reference Blue** (`colors.reference`): Identifies inline links to source material, tools, and external references.

### Tertiary

- **Selection Red** (`colors.selection`): Marks selected text and other rare, editorial moments. It is not a general-purpose CTA color.
- **Construction Yellow** (`colors.construction`): Reserved for unfinished-work status and never used as a brand wash.

### Neutral

- **Clear White** (`colors.canvas`): The uninterrupted page canvas and component surface.
- **Graphite Ink** (`colors.ink`, `colors.ink-strong`): Default copy and high-emphasis titles.
- **Working Gray** (`colors.muted`): Supporting copy that remains readable.
- **Quiet Gray** (`colors.quiet`): Low-emphasis labels, dates, and icon links.
- **Hairline Gray** (`colors.hairline`): Dividers, timelines, and flat container boundaries.

**The Scarcity Rule.** Saturated color must name a state, a reference, or an exception. If color has no job, remove it.

## 3. Typography

**Display Font:** System UI sans-serif
**Body Font:** System UI sans-serif

**Character:** Native, immediate, and unperformed. The single-family system earns distinction through weight, scale, placement, and concise writing rather than a decorative font pairing.

### Hierarchy

- **Headline** (`typography.headline`): Page-level titles such as Colophon and Imprint.
- **Title** (`typography.title`): Dominik's name and prominent timeline titles.
- **Body Large** (`typography.body-large`): The opening statement, where one concise paragraph carries the positioning.
- **Body** (`typography.body`): Supporting descriptions and factual content. Keep prose within the existing narrow column and below 70 characters per line where practical.
- **Label** (`typography.label`): Section labels and compact controls. Section labels may use uppercase because they sit in the left margin at large widths; never add tracked eyebrow copy above every heading.

**The Native Clarity Rule.** Typography must load instantly and read like interface copy, not a styled editorial artifact.

## 4. Elevation

The system is flat and structural. It uses no shadows. Depth comes from whitespace, one-pixel hairlines, alignment, and the contrast between the white canvas and functional color surfaces.

**The Flat-by-Default Rule.** Never add a drop shadow to make a component feel finished. Use spacing, border contrast, or an intentional state change.

## 5. Components

Components are tactile and confident in use, but visually restrained at rest. Their shape follows function: panels use a modest radius; compact statuses and circular indicators may use full rounding.

### Availability Status

- **Shape:** Compact full pill (`rounded.full`) with an animated status dot.
- **Color:** Available Green text on its pale state surface with a defined green border.
- **Hover / Focus:** The background strengthens on hover. Focus must remain clearly visible, and the ping animation must resolve to a static dot under reduced-motion preferences.

### Section Labels

- **Style:** Quiet Gray, semibold label type with no added letter spacing.
- **Placement:** In the left margin at large widths and above content at smaller widths. The offset labels organize the narrow reading column without becoming repeated decorative eyebrows.

### Cards / Containers

- **Corner Style:** Gently rounded panel corners (`rounded.panel`).
- **Background:** Clear White.
- **Shadow Strategy:** None; use Hairline Gray for real boundaries.
- **Internal Padding:** Roomy spacing (`spacing.roomy`) only where the content is genuinely bounded.

### Timeline

- **Style:** A single Hairline Gray rule with small circular markers; dates stay quiet while titles use strong ink.
- **Rhythm:** Entries use section spacing to remain scannable without becoming separate cards.

### Links and Navigation

- **Inline references:** Reference Blue with an underline on hover.
- **Social links:** Quiet Gray at rest and Working Gray on hover, with screen-reader labels on icon-only controls.
- **Footer navigation:** Plain text separated by spacing, with no container or shadow.

**The Tactile Restraint Rule.** Interaction feedback must be obvious at the pointer or keyboard focus, then disappear without leaving decorative residue.

## 6. Do's and Don'ts

### Do:

- **Do** place selected work and its evidence before biography detail.
- **Do** use real product imagery, GitHub activity, client or employer marks, and measurable outcomes as proof.
- **Do** preserve the narrow reading measure and the established spacing rhythm.
- **Do** use Available Green, Reference Blue, Selection Red, and Construction Yellow only for their named jobs.
- **Do** provide visible focus states, semantic markup, strong contrast, keyboard access, and reduced-motion alternatives for WCAG 2.2 AA.

### Don't:

- **Don't** use generic SaaS styling.
- **Don't** use flashy agency effects.
- **Don't** turn pages into dense resume-like walls of text.
- **Don't** use excessive animation; entrance motion must support an already-visible default and respect reduced motion.
- **Don't** add gradient text, decorative glass surfaces, wide soft shadows, or oversized card radii.
- **Don't** repeat tiny tracked eyebrow copy above every section heading.
