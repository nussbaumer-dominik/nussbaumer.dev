---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface: Homepage (src/pages/index.astro)

## Scope & mode

The portfolio homepage. Mode: Persuade — a recruiter or hiring manager decides to inspect work and start a conversation.

## Audience, job, action

Recruiters and engineering hiring managers. Job: judge full-stack depth plus design judgment within a minute. Primary action: View selected work (#work anchor). Secondary: Download resume (/resume.pdf) and LinkedIn.

## Proof & content

Selected work entries (Spritkenig, Raab & Raab, bachelor thesis, federated learning on OpenWhisk) each carry problem, role, decisions, outcome, links. Compact projects list (dst23, waecm, this site) plus GitHub link. Screenshot slots auto-swap when `public/work/<slug>.webp|png|jpg` exists at build time (WorkFigure.astro); until then they show an honest "Screenshot pending" state. Facts are user-confirmed only; Amazon/DSE entries omitted for lack of publishable facts.

## Constraints

WCAG 2.2 AA. No invented claims about client work. Anti-references: generic SaaS styling, agency effects, resume walls, excessive animation.

## Chosen direction & memorable moment

Extension of the committed Proof Desk world. Memorable moment: evidence begins inside the first viewport — positioning line, two actions, first proof panel with no splash hero.

## Unresolved

Real screenshots for all four slots; resume.pdf asset; Raab & Raab outcome/link facts; optional client/employer logos.
