# Vortiq Dynamics Website

Vortiq Dynamics is a static business website for a technology solutions company building IoT, cloud, web, mobile, embedded systems, and edge AI solutions.

The website is designed to feel engineering-first, modern, trustworthy, and interactive, with a green/teal technology palette, abstract PCB/cloud animation direction, scroll reveals, placeholder work imagery, and future admin-panel readiness.

## Live / Deployment

- GitHub repository: `robindev2026-a11y/vortex_dynamics`
- GitHub Pages URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`
- Clean deploy folder: [publish](./publish)
- Deploy zip: [vortiq-dynamics-static-site.zip](./vortiq-dynamics-static-site.zip)
- GitHub Pages workflow: [.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml)

The source website files are organized under [project](./project). The deployable website output is [publish](./publish).

## Pages

- Home: [project/index.html](./project/index.html)
- Services: [project/services.html](./project/services.html)
- Solutions: [project/solutions.html](./project/solutions.html)
- Case Studies: [project/case-studies.html](./project/case-studies.html)
- About: [project/about.html](./project/about.html)
- Careers: [project/careers.html](./project/careers.html)
- Contact: [project/contact.html](./project/contact.html)
- Request Quote: [project/request-quote.html](./project/request-quote.html)

## Tech Stack

- Plain HTML
- CSS
- Vanilla JavaScript
- Local SVG placeholder assets
- No build system
- No package manager required
- No backend yet

## Project Structure

```text
.
├── project/
│   ├── index.html
│   ├── services.html
│   ├── solutions.html
│   ├── case-studies.html
│   ├── about.html
│   ├── careers.html
│   ├── contact.html
│   ├── request-quote.html
│   └── assets/
├── docs/
│   ├── knowledge/
│   ├── planning/
│   ├── media/
│   ├── alignment/
│   └── verification/
├── scripts/
│   └── sync-site.sh
├── publish/
├── AI.md
├── CHANGELOG.md
└── README.md
```

`project/` is the canonical editable website source. `publish/` is the generated deployable output. Use [scripts/sync-site.sh](./scripts/sync-site.sh) after editing `project/` to refresh [publish](./publish).

## Important Files

- [AI.md](./AI.md): Required starting point for AI agents.
- [AIContext.md](./docs/knowledge/AIContext.md): High-density current context for AI agents.
- [Architecture.md](./docs/knowledge/Architecture.md): Static site architecture, data flow, and module boundaries.
- [DevelopmentStandards.md](./docs/knowledge/DevelopmentStandards.md): Coding, verification, deployment, and AI workflow rules.
- [KnownIssues.md](./docs/knowledge/KnownIssues.md): Active placeholders, limitations, risks, and workarounds.
- [PlannedFeatures.md](./docs/knowledge/PlannedFeatures.md): Accepted future features and later ideas.
- [DeferredWork.md](./docs/knowledge/DeferredWork.md): Postponed work, cleanup, and technical debt.
- [Decisions.md](./docs/knowledge/Decisions.md): Important decisions and rationale.
- [CURRENT_STATE.md](./docs/knowledge/CURRENT_STATE.md): Current operational state, progress, open issues, and next plan.
- [CHANGELOG.md](./CHANGELOG.md): Recent project changes.
- [AI_ALIGNMENT_REPORT.md](./docs/alignment/AI_ALIGNMENT_REPORT.md): AI Root System alignment report.
- [project/assets/js/data.js](./project/assets/js/data.js): Canonical editable data file.
- [project/assets/js/site.js](./project/assets/js/site.js): Canonical editable behavior file.
- [project/assets/css/styles.css](./project/assets/css/styles.css): Canonical editable stylesheet.

## Local Preview

Open [project/index.html](./project/index.html) directly in a browser, or run a local static server:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/project/
```

To preview deployable output:

```text
http://127.0.0.1:4173/publish/
```

## Maintenance

Edit website files under [project](./project). Then sync the deploy outputs:

```bash
./scripts/sync-site.sh
```

This updates [publish](./publish) from the same source.

## Publishing

For drag-and-drop hosting, use the [publish](./publish) folder or [vortiq-dynamics-static-site.zip](./vortiq-dynamics-static-site.zip).

For GitHub Pages, [.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml) deploys the contents of [publish](./publish).

## AI Agent Instructions

Before making changes, read [AI.md](./AI.md). This project inherits the AI Root System at `/Users/robingeorge/Documents/Projects/AI-Root-System` and uses root-system knowledge files:

1. Read current state.
2. Check recent changelog.
3. Make the smallest correct change.
4. Update docs if the project state changes.
5. Edit `project/` first, then run `./scripts/sync-site.sh`.

## Current Known Placeholders

- Phone number
- Email address
- Location details
- Social links
- Real project/work images
- Real form submission backend
- Admin panel

These are intentional placeholders and should be replaced only when the user provides final details.
