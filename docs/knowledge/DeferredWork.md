# Deferred Work

## Deferred Items

- Item: Real backend or form provider for quote, contact, and career forms.
  - Reason deferred: First version is static and no backend/form service has been selected.
  - Risk: Users may think forms submit real inquiries if this is not clearly handled in deployment context.
  - Suggested timing: Before relying on the website for live lead capture or hiring intake.

- Item: Final social media links.
  - Reason deferred: The user has not provided final URL addresses.
  - Risk: Placeholder links route users back to home page or empty targets.
  - Suggested timing: Before public business launch.

- Item: Real work images and R&D Lab media.
  - Reason deferred: Real project images are not available yet.
  - Risk: Placeholder media makes the company feel less proven.
  - Suggested timing: As soon as real or approved generated media exists.

- Item: Admin panel implementation.
  - Reason deferred: The first milestone was the static website, with admin-readiness only.
  - Risk: Content updates require code edits until the admin workflow exists.
  - Suggested timing: After the static site content and business details stabilize.

## Refactoring Opportunities

- Area: Deployment package synchronization.
  - Problem: Source files and [publish](../../publish) can drift if updates are copied manually.
  - Suggested improvement: Add a simple documented release command or script only if the user approves adding project tooling.

- Area: Future content source.
  - Problem: `project/assets/js/data.js` is admin-ready but still code-owned.
  - Suggested improvement: Move content to JSON or an API-backed source when admin/CMS work begins.

- Area: Image pipeline.
  - Problem: Placeholders and generated media need consistency across site, Instagram, and LinkedIn.
  - Suggested improvement: Build a repeatable media generation and optimization workflow based on [TONY_IMAGE_GENERATION_GUIDE.md](../media/TONY_IMAGE_GENERATION_GUIDE.md).

## Completed Items

- Item: Confirm and configure GitHub Pages workflow deployment.
  - Completion: Updated repository Pages build type settings to `workflow` via the API and successfully ran/monitored the deployment workflow, confirming the live URL now serves the static site correctly.

- Item: Update final contact phone and email details.
  - Completion: Updated phone number to `+91 70126 55068` and email to `robin.dev.2026@gmail.com` across the codebase.

- Item: Implement WhatsApp inquiry notification flow.
  - Completion: Configured form submissions to automatically package requirements and launch a pre-filled WhatsApp message redirect to the owner's phone number.

- Item: Integrate custom conversational chatbot assistant.
  - Completion: Implemented a floating conversational chatbot (Option 2) that guides users through structured inquiries step-by-step (Name, Email, Service, Brief) and generates a pre-filled WhatsApp Click-to-Chat submission button at the end.

