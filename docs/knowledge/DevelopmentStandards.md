# Development Standards

## Coding Style

- Use plain HTML, CSS, and vanilla JavaScript unless the user approves a different stack.
- Treat [project](../../project) as the canonical editable website source.
- Keep JavaScript readable and dependency-free.
- Keep repeated content data-driven where practical.
- Use semantic HTML, descriptive labels, accessible buttons, and clear heading order.
- Respect `prefers-reduced-motion` for animation-heavy sections.
- Avoid adding heavy animation libraries or build tooling without approval.

## Naming

- Public brand name: `Vortiq Dynamics`.
- Repository name: `vortex_dynamics`; do not use as brand copy.
- Use clear section IDs and stable content IDs that can later map to admin-managed records.
- Keep asset names descriptive and lowercase with hyphens where practical.

## Folder Structure

- [project](../../project): canonical editable website source.
- [project/assets/css](../../project/assets/css): shared styling only.
- [project/assets/js](../../project/assets/js): shared data and behavior.
- [project/assets/images](../../project/assets/images): website media assets.
- [publish](../../publish): clean deploy package.
- [docs/verification](../verification): screenshots and verification artifacts.
- [docs/knowledge](./): AI Root System knowledge files.
- [docs/planning](../planning): planning source documents.
- [docs/media](../media): media generation and visual asset guidance.
- [docs/alignment](../alignment): root-system alignment reports.
- [scripts](../../scripts): maintenance commands.

## Testing

For non-trivial website changes, run or perform the strongest practical subset:

- `node --check project/assets/js/site.js`
- `node --check project/assets/js/data.js`
- Static server page load checks
- Browser checks for desktop and mobile layouts
- No console/page errors
- No horizontal scroll on mobile
- Form success behavior for changed forms
- Verify all eight pages load:
  - `index.html`
  - `services.html`
  - `solutions.html`
  - `case-studies.html`
  - `about.html`
  - `careers.html`
  - `contact.html`
  - `request-quote.html`

## Deployment

- GitHub repository: `robindev2026-a11y/vortex_dynamics`
- GitHub Pages URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`
- GitHub Pages workflow: [.github/workflows/deploy-pages.yml](../../.github/workflows/deploy-pages.yml)
- Clean upload package: [publish](../../publish)
- Website source lives in [project](../../project).
- When website source files change, run `./scripts/sync-site.sh` to sync [publish](../../publish).
- Recreate [vortiq-dynamics-static-site.zip](../../vortiq-dynamics-static-site.zip) when the user needs an updated drag-and-drop package.

## Commits

- Keep commits focused by task.
- Do not mix unrelated source changes with documentation alignment work.
- Mention verification performed in commit messages or changelog entries when relevant.

## AI Workflow Rules

- Start with [AI.md](../../AI.md), then follow the linked knowledge files.
- Edit website code under [project](../../project), then regenerate [publish](../../publish).
- Do not rely on chat history for project facts that should live in documentation.
- Preserve useful content from older docs before deleting or replacing anything.
- Keep project-specific knowledge in this project.
- Recommend reusable lessons for Obsidian or the AI Root System, but do not update global systems unless the user asks.
- Record new decisions, known issues, planned features, deferred work, and meaningful changes in the appropriate files.
