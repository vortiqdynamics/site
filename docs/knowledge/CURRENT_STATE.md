# CURRENT STATE - Vortiq Dynamics

## Project Overview

Vortiq Dynamics is a static website for a technology solutions company offering IoT, cloud, web, mobile, embedded systems, websites, and edge AI solutions.

The current site is a polished first version with placeholder contact details and placeholder project imagery. It is built to be easy to update and ready for a future admin panel.

## Active Status

- Static website: built
- Canonical website source: organized under [project](../../project)
- Deployable website output: [publish](../../publish)
- Planning docs: created
- AI handoff docs: created
- AI Root System knowledge files: created and aligned
- Clean deploy folder: created at [publish](../../publish)
- Deploy zip: created at [vortiq-dynamics-static-site.zip](../../vortiq-dynamics-static-site.zip)
- GitHub repo: `robindev2026-a11y/vortex_dynamics`
- GitHub Pages: configured to deploy via GitHub Actions (workflow build type)
- GitHub Pages build: API confirms `build_type: workflow` and successful workflow run
- Public URL: `https://robindev2026-a11y.github.io/vortex_dynamics/`
- Canonical SEO URL: `https://vortiqdynamics.com/`
- Live URL verification: confirmed HTTP `200`, serving the correct interactive site homepage (not the repository README)
- Latest deployment: successful run of `Deploy Pages` workflow deploying the `publish` directory


## Current Architecture

This is a no-build static site:

- [project](../../project) is the canonical editable website source.
- [project/assets/css/styles.css](../../project/assets/css/styles.css) defines the full visual system.
- [project/assets/js/data.js](../../project/assets/js/data.js) stores data-driven content.
- [project/assets/js/site.js](../../project/assets/js/site.js) renders shared sections and handles behavior.
- [project/assets/images](../../project/assets/images) stores SVG and PNG visuals.
- [publish](../../publish) stores the clean publish package.
- [scripts/sync-site.sh](../../scripts/sync-site.sh) syncs [project](../../project) to [publish](../../publish).

For the durable architecture record, use [Architecture.md](./Architecture.md). For high-density AI context, use [AIContext.md](./AIContext.md).

## Pages

- [project/index.html](../../project/index.html)
- [project/services.html](../../project/services.html)
- [project/solutions.html](../../project/solutions.html)
- [project/case-studies.html](../../project/case-studies.html)
- [project/about.html](../../project/about.html)
- [project/careers.html](../../project/careers.html)
- [project/contact.html](../../project/contact.html)
- [project/request-quote.html](../../project/request-quote.html)

## Design Contract

- Brand: Vortiq Dynamics
- Style: B2B Luxury Tech Pro Showcase (Apple-level polish)
- Fonts: Outfit (headings), Inter (body)
- Theme: default Cream Light Mode (#fbf5dd)
- Scroll: Lenis Inertial Scroll with custom slide-up reveals
- Loader: homepage-only first-session boot sequence with SVG circuit trace, status lines, wordmark, and bottom progress bar
- Scroll reveals: `spark`, `flow`, `circuit`, and mobile `pulse` variants using the existing `.reveal` + `IntersectionObserver` contract
- Transitions: fade/scale page transitions on same-origin internal HTML links with a top green progress line
- Ambient motion: subtle CSS-only energy movement on dark sections, paused outside the viewport
- Header: scroll blurs with autohide on scroll down
- Hero: interactive SVG circuit board (hover scaling nodes & hot pulses)
- Hero text: typewriter effect
- Homepage showcase: `Inside the Vortiq R&D Lab` featured grid after Capability Flow and before Services
- Services: all seven service cards equally visible
- Media: placeholder SVGs now, real work images later
- Image treatment: ambient blurred background clone behind clear foreground image
- Image performance: runtime photo references use optimized WebP assets; JS-rendered media uses lazy loading and async decoding
- Motion: scroll reveals, hover transitions, and page transitions with reduced-motion overrides

## Palette Rules

Validated palette:

- Deep Teal: `#005461`
- Dark Teal: `#1E3D40`
- Mint Green: `#A8E6CF`
- Bright Green: `#3ED16F`
- Soft Yellow: `#FFF57E`
- Soft Pink: `#FF7EB6`
- Warm Cream: `#FBF5DD`
- Slate Gray: `#7A8C8E`
- Deep Charcoal: `#0B1F23`

Non-negotiable contrast rules:

- Use deep charcoal text `#0B1F23` on bright green CTA buttons `#3ED16F`.
- Do not use white text on bright green CTA buttons.
- Use yellow and pink sparingly as small accents.

## Future Admin-Ready Direction

The admin panel is not built yet.

The site should remain ready to consume future admin-managed content through the data shape in [project/assets/js/data.js](../../project/assets/js/data.js).

Expected future admin-editable groups:

- Navigation
- Hero content and media
- Services
- R&D Lab / work-studio images
- Capability flow
- Tech stack
- Case studies
- Gallery/work images
- FAQ
- Careers content
- Contact details
- Footer links

## Known Placeholders

- Social links use `#`
- Work/project images are SVG placeholders
- R&D Lab cards are placeholders for future IoT, DevOps/cloud, mobile/web, edge AI, and integration-room photos
- Forms and a custom floating conversational chatbot assistant use client-side WhatsApp Click-to-Chat automation (redirecting submissions/conversations to the owner's WhatsApp number with all formatted parameters pre-filled)
- Resume upload is visual only until a backend/form database exists

## Verification Already Completed

Local verification completed after the static build:

- `node --check project/assets/js/site.js`
- `node --check project/assets/js/data.js`
- Local static server on port `4173`
- All eight pages returned `200`
- Browser verification found:
  - 7 nav links
  - 7 service cards
  - 7 capability flow nodes
  - 5 R&D Lab cards with 1 featured card
  - 3 case cards
  - 5 FAQ items
  - Quote form success behavior working
  - Mobile menu working
  - No console/page errors
- R&D Lab verification confirmed no horizontal scroll on desktop or mobile.
- Live GitHub Pages verification confirmed the R&D Lab section text and data-file image reference are published.
- Futuristic animation verification completed on 2026-06-14:
  - `node --check project/assets/js/site.js`
  - `node --check project/assets/js/data.js`
  - Local static server on port `4173`
  - All eight pages returned `200`
  - Homepage loader plays on fresh session and skips on same-session reload
  - Internal page transition bar and page-leaving class activate before navigation
  - All 46 homepage reveal elements reached `is-revealed` during scroll verification
  - Mobile viewport had no horizontal overflow and used `pulse` reveal mode
  - Reduced-motion mode showed content immediately and hid the loader after the short fallback
- Image optimization verification completed on 2026-06-14:
  - Runtime photo assets converted to WebP, totaling about `924 KB`
  - Original JPG/PNG photo set totaled about `5.3 MB`
  - Local browser check found no local resource failures or broken images
  - Mobile viewport still had no horizontal overflow
- Image weight reduction completed on 2026-06-29:
  - Replaced large runtime PNG assets with optimized WebP files
  - Total [project/assets/images](../../project/assets/images) payload is about `1.1 MB`
  - Removed unused large PNG files from [project](../../project) and [publish](../../publish)
- Technical SEO baseline completed on 2026-06-30:
  - Page-specific titles, meta descriptions, canonical URLs, Open Graph tags, and Twitter card tags are present on all eight pages
  - Structured JSON-LD was added for organization, website, professional service, services list, and contact page
  - [robots.txt](../../project/robots.txt) and [sitemap.xml](../../project/sitemap.xml) were added and synced to [publish](../../publish)
- Desktop screenshot: [docs/verification/home-desktop-revealed.png](../verification/home-desktop-revealed.png)
- Mobile screenshot: [docs/verification/home-mobile-revealed.png](../verification/home-mobile-revealed.png)
- R&D Lab desktop screenshot: [docs/verification/home-rd-lab-desktop.png](../verification/home-rd-lab-desktop.png)
- R&D Lab mobile screenshot: [docs/verification/home-rd-lab-mobile.png](../verification/home-rd-lab-mobile.png)
- Futuristic animation desktop screenshot: [docs/verification/futuristic-home-desktop.png](../verification/futuristic-home-desktop.png)
- Logo spacing verification completed on 2026-06-23:
  - Cropped the logo image `logo.png` from (1024, 1024) to (628, 721) to remove excess transparent padding.
  - Set the CSS `gap` property in `.brand` class to `0` in `project/assets/css/styles.css`.
  - Verified layout using local HTTP server and browser subagent. Spacing looks balanced and cleanly aligned with company name "Vortiq Dynamics" with a 0px gap.
  - Synced assets from `project/` to `publish/`.

## Open Issues / Next Plan

1. Replace placeholder phone, email, location, and social links when the user provides final details.
2. Replace placeholder SVGs with real work images, especially for the R&D Lab showcase.
3. Connect quote/contact/career forms to a real backend or form service when requested.
4. Build the admin panel later, using the existing data-driven content structure as the target shape.


Durable issue, feature, and deferred-work tracking now lives in [KnownIssues.md](./KnownIssues.md), [PlannedFeatures.md](./PlannedFeatures.md), and [DeferredWork.md](./DeferredWork.md).

## Important Workflow Note

When editing website source files, edit [project](../../project), run [scripts/sync-site.sh](../../scripts/sync-site.sh), then recreate [vortiq-dynamics-static-site.zip](../../vortiq-dynamics-static-site.zip) if the user needs drag-and-drop deployment.
