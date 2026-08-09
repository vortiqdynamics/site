# Planned Features

## Planned

- Feature: Replace placeholder contact details with final phone, email, location, and social links.
  - Reason: Public launch needs accurate business contact information.
  - Priority: High once details are provided.
  - Notes: Current placeholders are tracked in [KnownIssues.md](./KnownIssues.md).

- Feature: Replace placeholder project and R&D Lab images with real Vortiq Dynamics work imagery.
  - Reason: Real media will improve trust and credibility.
  - Priority: High once assets are available.
  - Notes: Follow [TONY_IMAGE_GENERATION_GUIDE.md](../media/TONY_IMAGE_GENERATION_GUIDE.md) if generating consistent interim R&D images.

- Feature: Connect quote, contact, and career forms to a real submission path.
  - Reason: Forms currently show static success messages only.
  - Priority: Medium.
  - Notes: Possible options include Formspree, Netlify Forms, Basin, custom API, or email service integration.

- Feature: Build an admin panel or CMS-backed content workflow.
  - Reason: Future editors should manage navigation, hero, services, media, case studies, FAQ, careers, contact details, and footer links without editing source files.
  - Priority: Medium to long-term.
  - Notes: Preserve the existing content shape in [project/assets/js/data.js](../../project/assets/js/data.js) as the likely target schema.

- Feature: Add dynamic image/media processing for ambient backgrounds.
  - Reason: Current ambient treatment duplicates images visually; later tooling could extract dominant colors and generate richer section backgrounds.
  - Priority: Low.
  - Notes: Best paired with admin/media pipeline work.

## Ideas Accepted For Later

- Idea: Move GitHub Pages deployment to a dedicated clean publish workflow.
  - Why later: The source/output structure is now clean, but Pages deployment may still need settings or workflow confirmation.
  - Notes: Consider a Pages workflow that publishes only [publish](../../publish) or a generated artifact.

- Idea: Replace static deploy zip manually when release packaging is needed.
  - Why later: Only needed for drag-and-drop hosting or handoff.
  - Notes: Recreate [vortiq-dynamics-static-site.zip](../../vortiq-dynamics-static-site.zip) after source and [publish](../../publish) are synced.

- Idea: Add production SEO and social preview polish.
  - Why later: Core pages exist; final metadata should align with real company details and imagery.
  - Notes: Include Open Graph images, canonical URLs, and final descriptions when launch assets are known.
