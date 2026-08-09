# AI Context

## Current Project State

Vortiq Dynamics is a completed first-version static website for a technology solutions company. It is built with plain HTML, CSS, and vanilla JavaScript, with data-driven content structures that can later map to an admin panel.

Current status:

- Static website: built
- Futuristic animation layer: implemented on 2026-06-14
- Runtime images: optimized to WebP on 2026-06-14
- Technical SEO baseline: added on 2026-06-30
- Canonical website source: [project](../../project)
- Deployable website output: [publish](../../publish)
- Planning docs: present
- AI Root System documentation: present
- Clean deploy folder: [publish](../../publish)
- Deploy zip: [vortiq-dynamics-static-site.zip](../../vortiq-dynamics-static-site.zip)
- GitHub repository: `robindev2026-a11y/vortex_dynamics`
- GitHub Pages URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`
- GitHub Pages deployment source needs confirmation after the root cleanup.
- Latest known live verification: HTTP `200`; page contains `Vortiq Dynamics`; R&D Lab content and `drone-sensor-fusion-module.png` reference were published
- Latest local animation verification: all eight pages returned `200`; homepage loader plays once per session; internal transition state activates before navigation; all 46 homepage reveal elements reached `is-revealed`; mobile used `pulse` reveal mode with no horizontal overflow; reduced-motion content became visible immediately.
- Latest local image verification: runtime photo assets load from WebP references; large PNG runtime assets were replaced on 2026-06-29; [project/assets/images](../../project/assets/images) is now about `1.1 MB` total.
- Latest local SEO verification: all eight pages have canonical URLs and social metadata; homepage, services, and contact pages include valid JSON-LD; [project/robots.txt](../../project/robots.txt) and [project/sitemap.xml](../../project/sitemap.xml) are present and synced to [publish](../../publish).

## Active Priorities

1. Preserve the completed static site and its deployment-ready package.
2. Replace placeholders as real company contact details, social links, and work images become available.
3. Keep content structured so a future admin panel can supply the same data shape.
4. Maintain AI Root System knowledge files so future agents do not depend on chat history.

## Important Context

- Brand name is `Vortiq Dynamics`.
- Repository name is `vortex_dynamics`; do not use it as the public brand.
- The site presents the company as an engineering-first technology partner for IoT, cloud, web, mobile, embedded systems, websites, and edge AI.
- The visual direction is modern, technical, premium, trustworthy, and practical.
- The hero direction is abstract PCB/cloud animation with a typewriter effect.
- Homepage now includes a first-session boot loader, themed reveal variants (`spark`, `flow`, `circuit`, mobile `pulse`), same-origin page transition bar, and subtle ambient motion on dark sections.
- Do not switch runtime image references back from WebP to JPG/PNG unless a specific fallback strategy is added.
- Use `https://vortiqdynamics.com/` as the canonical public URL for SEO metadata and sitemap entries.
- Homepage includes an `Inside the Vortiq R&D Lab` showcase after Capability Flow and before Services.
- All seven services must stay equally visible: IoT Solutions, Cloud Solutions, Web Applications, Mobile Applications, Websites, Embedded Systems, Edge AI.
- The admin panel is planned for later; current work should preserve admin-ready data structures without building admin features prematurely.

## Current Constraints

- No framework, build step, package manager, backend, or dependency manager unless the user approves it.
- Forms are static and show success messages; they do not submit to a backend.
- Resume upload is visual only until a backend or form service exists.
- Placeholder contact details, social links, and work images remain until the user provides final assets/details.
- Website source changes must be mirrored into [publish](../../publish) before release-ready claims.
- Website code should be edited under [project](../../project), then synced with [scripts/sync-site.sh](../../scripts/sync-site.sh).
- The deploy zip should be recreated when the user needs an updated drag-and-drop package.

## Frequently Touched Areas

- [project/index.html](../../project/index.html) and other [project](../../project) HTML files: editable page shells
- [project/assets/css/styles.css](../../project/assets/css/styles.css): visual system, responsive layout, animation styles
- [project/assets/js/data.js](../../project/assets/js/data.js): data-driven content and future admin-ready data shape
- [project/assets/js/site.js](../../project/assets/js/site.js): rendering, navigation, animations, forms, UI behavior
- [project/assets/images](../../project/assets/images): placeholder and real media assets
- [publish](../../publish): clean deploy package
- [docs/verification](../verification): browser verification screenshots

## AI Operating Notes

- Prefer small, scoped documentation or website changes that preserve the current architecture.
- Read [DevelopmentStandards.md](./DevelopmentStandards.md) before changing source files.
- Use [Architecture.md](./Architecture.md) to understand data flow and module boundaries.
- Record changed assumptions or important tradeoffs in [Decisions.md](./Decisions.md).
- Keep known placeholders and limitations visible in [KnownIssues.md](./KnownIssues.md).
- Use [PlannedFeatures.md](./PlannedFeatures.md) and [DeferredWork.md](./DeferredWork.md) instead of burying future work in final chat messages.
