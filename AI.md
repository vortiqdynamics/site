# Vortiq Dynamics AI Entry Point

This project inherits the AI Root System at:

`/Users/robingeorge/Documents/Projects/AI-Root-System`

Use this file as the bootloader for AI work. It is intentionally short; durable project memory lives in the linked knowledge files.

## Project Purpose

Vortiq Dynamics is a static business website for a technology solutions company offering IoT, cloud, web, mobile, embedded systems, websites, and edge AI solutions.

The site should feel engineering-first, modern, trustworthy, practical, and ready for future admin-managed content.

## Mandatory Pre-Task Protocol

Before significant work, read these files in order:

1. [AI.md](./AI.md)
2. [AIContext.md](./docs/knowledge/AIContext.md)
3. [Architecture.md](./docs/knowledge/Architecture.md)
4. [DevelopmentStandards.md](./docs/knowledge/DevelopmentStandards.md)
5. [KnownIssues.md](./docs/knowledge/KnownIssues.md)
6. [PlannedFeatures.md](./docs/knowledge/PlannedFeatures.md)
7. [DeferredWork.md](./docs/knowledge/DeferredWork.md)
8. [Decisions.md](./docs/knowledge/Decisions.md)
9. [CHANGELOG.md](./CHANGELOG.md)

Then read task-specific source documents as needed:

- [README.md](./README.md): overview, run instructions, deployment notes
- [CURRENT_STATE.md](./docs/knowledge/CURRENT_STATE.md): latest operational snapshot and verification status
- [WEBSITE_PLAN.md](./docs/planning/WEBSITE_PLAN.md): page strategy, audience, conversion goals
- [DESIGN_DIRECTION.md](./docs/planning/DESIGN_DIRECTION.md): visual system, palette, motion, imagery
- [FUNCTIONAL_REQUIREMENTS.md](./docs/planning/FUNCTIONAL_REQUIREMENTS.md): page, form, accessibility, performance requirements
- [CONTENT_OUTLINE.md](./docs/planning/CONTENT_OUTLINE.md): page copy and section-level content
- [ANIMATION_AND_ADMIN_PLAN.md](./docs/planning/ANIMATION_AND_ADMIN_PLAN.md): motion and future admin-readiness plan
- [TONY_IMAGE_GENERATION_GUIDE.md](./docs/media/TONY_IMAGE_GENERATION_GUIDE.md): realistic R&D room media direction
- [PROMPT.md](./docs/planning/PROMPT.md): original static website generation prompt

## Project Boundaries

This project owns:

- Canonical website source files under [project](./project)
- Clean publish package under [publish](./publish)
- Project-specific planning, architecture, standards, issues, decisions, and alignment docs under [docs](./docs)
- Maintenance scripts under [scripts](./scripts)

This project does not currently own:

- A production backend
- A real admin panel
- Form submission infrastructure
- Final company contact details, social links, or real work imagery
- Reusable global framework rules, unless explicitly promoted to the AI Root System

## Mandatory Rules

- Do not rename the brand from `Vortiq Dynamics`.
- Do not treat `vortex_dynamics` as the brand; it is only the GitHub repository name.
- Do not introduce a framework, build step, package manager, backend, or dependency without user approval.
- Treat [project](./project) as the editable website source.
- After website source changes, run `./scripts/sync-site.sh` to sync [project](./project) into [publish](./publish).
- Keep project-specific knowledge inside this project.
- Promote reusable lessons only as recommendations unless the user asks to update Obsidian or the root framework.

## Post-Task Protocol

After significant work:

1. Update the relevant project knowledge files.
2. Record decisions in [Decisions.md](./docs/knowledge/Decisions.md).
3. Add future feature work to [PlannedFeatures.md](./docs/knowledge/PlannedFeatures.md).
4. Add postponed cleanup or debt to [DeferredWork.md](./docs/knowledge/DeferredWork.md).
5. Add active bugs, limitations, risks, or workarounds to [KnownIssues.md](./docs/knowledge/KnownIssues.md).
6. Append meaningful outcomes to [CHANGELOG.md](./CHANGELOG.md).
7. Update [CURRENT_STATE.md](./docs/knowledge/CURRENT_STATE.md) when project status, deployment, or verification state changes.
8. Consider whether any learning should be recommended for Obsidian or the AI Root System.

## Verification Expectations

For non-trivial website changes, verify at minimum:

- `node --check project/assets/js/site.js`
- `node --check project/assets/js/data.js`
- Local static server test when practical
- Desktop and mobile visual checks when layout, animation, or responsive behavior changes
- Form success behavior when quote, contact, or career forms change
- No horizontal scroll on mobile
- All eight pages still load

Status: ACTIVE | System: AI Root System aligned project documentation
