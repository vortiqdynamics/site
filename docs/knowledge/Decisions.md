# Decisions

Important project decisions and their rationale.

## 2026-06-30 - Use Custom Domain As Canonical SEO URL

**Decision:** Use `https://vortiqdynamics.com/` as the canonical URL in page metadata, sitemap entries, Open Graph URLs, and structured data.

**Context:** The repository is hosted through GitHub Pages, but the project includes a `CNAME` for `vortiqdynamics.com`.

**Rationale:** Search engines should see one preferred public URL for the brand instead of splitting signals between the GitHub Pages URL and the custom domain.

**Alternatives considered:** Use the GitHub Pages URL as canonical. This was rejected because the public brand should rank around the custom domain.

**Tradeoffs:** If the custom domain changes later, all canonical metadata and sitemap URLs must be updated together.

## 2026-06-23 - Crop Company Logo and Set Spacing to 0px

**Decision:** Crop the company logo image (`logo.png`) to remove excessive transparent padding on the outer margins, and change the CSS logo spacing `gap` to `0` in the `.brand` style rule.

**Context:** The visual spacing between the logo symbol (the letter 'V' graphic) and the company name ("Vortiq Dynamics") in the header, footer, and chatbot was too wide due to empty space around the logo symbol inside the source image.

**Rationale:** Trimming the transparent boundary from `(1024, 1024)` to `(628, 721)` (including a small 5% buffer to prevent visual clipping) and setting `gap: 0` in CSS resolves the spacing issue completely, alignment is balanced and clean.

**Alternatives considered:** Using negative margin CSS. This was rejected because the logo is rendered in multiple contexts (header, footer, chatbot window), and adjusting CSS everywhere would add unnecessary code complexity.

**Tradeoffs:** The logo is now rectangular instead of square, but the HTML/CSS `object-fit: contain` handles the aspect ratio correctly without distortion.

## 2026-06-14 - Implement Futuristic Motion With Native CSS And Vanilla JS

**Decision:** Add the homepage loader, reveal variants, page transition bar, ambient dark-section energy motion, and hover micro-interactions using only existing HTML, CSS, and vanilla JavaScript.

**Context:** The site needed a more futuristic, system-boot-like animation layer while preserving the no-build static architecture and existing `.reveal`/Lenis behavior.

**Rationale:** CSS keyframes and `IntersectionObserver` provide enough visual richness for the requested effects without adding an animation dependency, framework, or build step.

**Alternatives considered:** Add a motion library or a canvas/WebGL background. These were rejected because the requested effects are lightweight and the project explicitly avoids new dependencies.

**Tradeoffs:** More animation CSS must be maintained manually, but the site remains easy to deploy, inspect, and sync into [publish](../../publish).

## 2026-06-13 - Adopt AI Root System Documentation Structure

**Decision:** Align the project documentation with the AI Root System by adding dedicated knowledge files for AI context, architecture, planned features, deferred work, decisions, known issues, and development standards.

**Context:** The project already had useful knowledge in [AI.md](../../AI.md), [CURRENT_STATE.md](./CURRENT_STATE.md), [CHANGELOG.md](../../CHANGELOG.md), and planning documents, but several required categories were combined into broad files.

**Rationale:** Future AI agents should be able to understand the project without chat history and without searching through scattered docs for current state, risks, decisions, and standards.

**Alternatives considered:** Keep using [CURRENT_STATE.md](./CURRENT_STATE.md) as the single dense context file. This was rejected because it made root-system validation weaker and overloaded one document with multiple responsibilities.

**Tradeoffs:** More documentation files must be maintained, but each file now has a clearer responsibility.

## 2026-06-12 - Use A No-Build Static Website Architecture

**Decision:** Build the first version as plain HTML, CSS, and vanilla JavaScript with no framework, build step, dependency manager, or backend.

**Context:** The project needed a polished, deployable business website quickly, with drag-and-drop publishing and GitHub Pages compatibility.

**Rationale:** A no-build static architecture is easy to host, inspect, copy into [publish](../../publish), and maintain without dependency overhead.

**Alternatives considered:** Astro, Next.js static export, or another static-first framework. These remain possible later but were not necessary for the first version.

**Tradeoffs:** The site has less built-in routing/component tooling, but avoids build complexity and dependency maintenance.

## 2026-06-12 - Keep Content Admin-Ready Without Building Admin Yet

**Decision:** Keep repeated website content data-driven in [project/assets/js/data.js](../../project/assets/js/data.js), but defer admin panel development.

**Context:** The user wanted the static site prepared for a future admin panel while keeping the first version focused.

**Rationale:** Structured content makes future migration to an API, CMS, generated JSON, or admin panel easier without delaying the static launch.

**Alternatives considered:** Hardcode all content into HTML, or build the admin panel immediately. Hardcoding would make future content management harder; building admin immediately would expand scope.

**Tradeoffs:** Some content rendering logic exists in JavaScript even though the site is static, but it preserves a useful future migration path.

## 2026-06-12 - Use Abstract PCB/Cloud Hero And Lightweight Motion

**Decision:** Use an abstract PCB/cloud hero, typewriter text, scroll-triggered reveals, capability-flow animation, and reduced-motion support.

**Context:** The brand needed to feel technical, engineering-led, and more ambitious than a generic agency website.

**Rationale:** Lightweight CSS/JavaScript motion creates a stronger technology identity without requiring heavy animation libraries.

**Alternatives considered:** Static hero imagery only, generic stock visuals, or heavier animation libraries. These were rejected for either lower impact or unnecessary complexity.

**Tradeoffs:** Motion requires verification across desktop/mobile and reduced-motion contexts.

## 2026-06-12 - Keep All Seven Services Equally Visible

**Decision:** The service catalog must keep IoT Solutions, Cloud Solutions, Web Applications, Mobile Applications, Websites, Embedded Systems, and Edge AI equally visible.

**Context:** Vortiq Dynamics needs to communicate a broad engineering offering that includes both software and hardware work.

**Rationale:** Hiding services behind tabs, carousels, or collapsed desktop UI would weaken the company positioning.

**Alternatives considered:** Feature only three primary services and group the rest. This was rejected because it underrepresented the service catalog.

**Tradeoffs:** The page needs careful responsive layout to keep the catalog readable without overcrowding.

## 2026-06-13 - Shift to Dark-First Luxury Aesthetic & Smooth Interactivity

**Decision:** Transform the website into a dark-first B2B luxury tech product showcase (Apple-level polish) with Outfit/Inter typography, Lenis inertial scroll, scroll-triggered reveals, page transitions, and theme-toggling.

**Context:** The previous version used a warm cream background which felt classic but lacked the high-end, futuristic tech feel requested by the user.

**Rationale:** High-contrast dark obsidian layout combined with wide, clean typography (Outfit) and fluid inertia scrolling (Lenis) immediately creates a luxury, premium digital experience. Toggling themes dynamically satisfies both preferences while maintaining visual contrast.

**Alternatives considered:** Keep the light cream background default and add simple transitions. This was rejected because the visual impact did not feel sufficiently premium or high-tech.

**Tradeoffs:** Added dependencies on Lenis smooth scroll and Google Fonts, requiring careful styling overrides for light/dark modes and scroll events, but greatly increases aesthetic appeal and user engagement.

## 2026-06-13 - Revert to Single Default Premium Light Theme

**Decision:** Remove the dark theme overrides and theme toggle switch, returning the default site layout to a clean Cream Light Mode theme.

**Context:** The user requested the removal of dark mode to focus purely on the clean light layout.

**Rationale:** Simplifying the style to a single default light theme maintains visual focus, reduces script load, and ensures clean alignment with the initial branding goals while retaining all premium elements (Outfit/Inter fonts, Lenis scroll, scroll reveals, map animations, autohiding header, and transitions).

**Alternatives considered:** Hide the theme toggle button but keep the dark theme variables. This was rejected to keep the codebase clean and avoid dead CSS/JS.

**Tradeoffs:** The site no longer has a dark mode option, but remains lighter, cleaner, and strictly aligned with user preferences.
