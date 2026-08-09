# Known Issues

## Active Issues

- Issue: Forms do not submit to a database.
  - Impact: Quote, contact, and career form submissions are not captured in a server database.
  - Workaround: Forms use client-side WhatsApp Click-to-Chat automation to package and redirect requirements directly to the owner.
  - Status: Partially resolved (automated redirect notification is live).

- Issue: Resume upload is visual only.
  - Impact: Career applicants cannot upload a resume file directly to a server.
  - Workaround: Treat it as a visual attachment placeholder until a database backend exists.
  - Status: Open.

- Issue: Work/project/R&D Lab imagery is partly placeholder-based.
  - Impact: Placeholder media reduces credibility compared with real company work photos.
  - Workaround: Use approved placeholders now and replace with real or generated consistent R&D imagery later.
  - Status: Open.

## Risks

- Risk: Source and [publish](../../publish) can drift.
  - Likelihood: Medium when website files change.
  - Impact: Published handoff package may not match source.
  - Mitigation: Any website source change must be mirrored into [publish](../../publish) before release-ready claims.

- Risk: Future admin implementation may diverge from current data shape.
  - Likelihood: Medium.
  - Impact: Extra migration work could be needed.
  - Mitigation: Preserve stable IDs and structured content in [project/assets/js/data.js](../../project/assets/js/data.js); update [Architecture.md](./Architecture.md) when admin work begins.

- Risk: Motion or layout regressions can affect mobile usability.
  - Likelihood: Medium after visual changes.
  - Impact: Horizontal scroll, overlap, or inaccessible animation.
  - Mitigation: Verify desktop/mobile, no horizontal scroll, console/page errors, and `prefers-reduced-motion` behavior after visual changes.

## Resolved Issues

- Issue: GitHub Pages settings may need to allow GitHub Actions as the Pages source.
  - Resolution: Configured repository Pages settings via GitHub CLI API (`PUT /repos/{owner}/{repo}/pages` with `build_type: workflow`). Confirmed successful run of `Deploy Pages` workflow deploying the `publish` directory and confirmed correct static site is serving live.

- Issue: Contact details are placeholders.
  - Resolution: Updated data.js with final email address (`robin.dev.2026@gmail.com`) and phone number (`+91 70126 55068`).

