# Architecture

## Overview

Vortiq Dynamics is a no-build static website made from HTML pages, shared CSS, shared vanilla JavaScript, and local assets.

The canonical editable source lives in [project](../../project). The deployable output lives in [publish](../../publish).

The architecture intentionally avoids frameworks and runtime dependencies. Repeated content is centralized in JavaScript data objects where practical so a future admin panel, CMS, API, or generated JSON file can provide the same structure later.

## Components

- [project](../../project): canonical editable website source.
- [project/assets/css/styles.css](../../project/assets/css/styles.css): owns the visual system, layout, responsive behavior, component styling, animation states, and reduced-motion behavior.
- [project/assets/js/data.js](../../project/assets/js/data.js): owns shared content data for navigation, services, process, tech stack, case studies, FAQ, R&D Lab, contact/footer items, and other repeated sections.
- [project/assets/js/site.js](../../project/assets/js/site.js): owns shared rendering logic, navigation behavior, mobile menu behavior, scroll reveals, typewriter effect, forms, and interactive UI behavior.
- [project/assets/images](../../project/assets/images): stores local SVG and PNG media used by website sections.
- [publish](../../publish): stores the clean deploy package for drag-and-drop hosting.
- [.github/workflows/deploy-pages.yml](../../.github/workflows/deploy-pages.yml): deploys [publish](../../publish) to GitHub Pages.
- [docs/verification](../verification): stores screenshots and evidence from visual verification.
- [scripts/sync-site.sh](../../scripts/sync-site.sh): syncs [project](../../project) to [publish](../../publish).

## Pages

The site has eight public pages:

- [project/index.html](../../project/index.html)
- [project/services.html](../../project/services.html)
- [project/solutions.html](../../project/solutions.html)
- [project/case-studies.html](../../project/case-studies.html)
- [project/about.html](../../project/about.html)
- [project/careers.html](../../project/careers.html)
- [project/contact.html](../../project/contact.html)
- [project/request-quote.html](../../project/request-quote.html)

## Data Flow

1. A browser loads a page under [project](../../project) during development or [publish](../../publish) during deployment.
2. The page loads colocated `assets/css/styles.css`, `assets/js/data.js`, and `assets/js/site.js`.
3. `data.js` exposes structured content.
4. `site.js` reads that content and renders shared/repeated sections into matching HTML mount points.
5. `site.js` attaches behavior for mobile navigation, animation, typewriter text, accordions/forms where applicable, and static success messages.
6. Forms remain client-side only unless a future backend or form service is added.

## Module Boundaries

- `project/` owns editable website source.
- `publish/` mirrors deployment-ready website files only; planning docs and verification artifacts should not be required there.
- HTML owns page identity, high-level section order, metadata, and accessible structure.
- CSS owns presentation, layout, animation appearance, and responsive behavior.
- `data.js` owns content values and future admin-ready data shape.
- `site.js` owns DOM rendering and browser interactions.
- `docs/` owns project knowledge and should not be mixed into runtime behavior.

## External Dependencies

Current runtime dependencies:

- Browser platform only
- No package manager
- No framework
- No backend
- No database
- No form provider

External platforms:

- GitHub repository: `robindev2026-a11y/vortex_dynamics`
- GitHub Pages URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`
- GitHub Pages deploys [publish](../../publish) through [.github/workflows/deploy-pages.yml](../../.github/workflows/deploy-pages.yml).

## Architectural Decisions

Major decisions are recorded in [Decisions.md](./Decisions.md). Current architecture decisions include:

- Keep the first version static and dependency-free.
- Treat [project](../../project) as canonical source and sync [publish](../../publish) with [scripts/sync-site.sh](../../scripts/sync-site.sh).
- Keep repeated content data-driven where practical.
- Preserve a future admin-ready data model without building admin features yet.
- Use lightweight CSS/JavaScript animations with reduced-motion support.
- Maintain a clean [publish](../../publish) package separate from planning and verification files.

## Constraints

- Do not add a framework, build step, package manager, backend, or dependency without user approval.
- Edit [project](../../project) first, then sync [publish](../../publish).
- Keep all eight pages functional after shared JS/CSS changes.
- Keep all seven services equally visible.
- Preserve accessible forms, focus states, readable contrast, and responsive behavior.
- Respect `prefers-reduced-motion`.
- Avoid hardcoding final phone, email, address, or social links before the user provides final values.
