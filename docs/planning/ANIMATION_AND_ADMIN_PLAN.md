# Animation and Admin-Ready Plan

## Confirmed Direction

User-confirmed choices:
- Hero visual direction: abstract PCB/cloud animation
- Navigation: use the full Vortiq Dynamics nav from the plan
- Hero writing: include typewriter-style text animation
- Services: keep all seven services equally visible
- Palette: use the supplied green/teal technology palette with contrast-safe text rules
- Admin: build admin panel later, but prepare the website to accept admin-managed data
- Images: use placeholders now; real work images will be added later

## Palette Validation

The supplied palette is suitable for Vortiq Dynamics. It feels modern, technical, sustainable, and premium when used with enough restraint.

Approved colors:
- Deep Teal: #005461
- Dark Teal: #1E3D40
- Mint Green: #A8E6CF
- Bright Green: #3ED16F
- Soft Yellow: #FFF57E
- Soft Pink: #FF7EB6
- Warm Cream: #FBF5DD
- Slate Gray: #7A8C8E
- Deep Charcoal: #0B1F23

Contrast notes:
- White text works well on #005461, #1E3D40, and #0B1F23.
- Deep charcoal text works well on #FBF5DD, #A8E6CF, #3ED16F, #FFF57E, and #FF7EB6.
- White text should not be used on #3ED16F because it fails normal text contrast.
- CTA buttons using #3ED16F should use #0B1F23 text.
- Yellow and pink should be used as small highlights, badges, or diagram accents, not dominant page colors.

## Wireframe Interpretation

The rough wireframe suggests:
- Header with logo/name, navigation, and quote button
- Large hero image/video area with writing/text
- About section with text and image
- Products/services transition heading
- Services card grid
- Footer region

The updated site should keep this simple structure but elevate it with stronger hierarchy, motion, and future content flexibility.

## Recommended Page Flow

1. Sticky header
2. Animated hero with abstract PCB/cloud visual and typewriter text
3. About split section with text and ambient image
4. "From Circuit Boards to Cloud Platforms" capability flow
5. "What We Build" services grid with all seven services
6. Process / how we work
7. Tech stack with animated categories
8. Case studies
9. Work images / project gallery with placeholder media
10. FAQ
11. Request quote CTA
12. Footer

## Hero Animation Concept

Visual:
- Deep teal or charcoal technology background
- Thin PCB traces animate softly across the background
- Cloud nodes drift subtly and connect with animated lines
- Dashboard/device preview can sit in the foreground
- Typewriter text gives the hero a technical system-boot feeling

Motion:
- Slow ambient movement
- No distracting fast loops
- Text and visual move at slightly different speeds on scroll
- Static fallback for reduced-motion users

## Scroll Animation Concepts

Use lightweight scroll-based movement:
- Sections fade and rise into place
- Service cards reveal in a staggered sequence
- PCB traces light up as the capability-flow section enters viewport
- Docker/Kubernetes-style blocks stack in the cloud layer
- Cloud nodes connect with animated lines
- Mobile UI cards slide in from the side
- Edge AI/processor layer appears last

Implementation preference:
- CSS transitions and keyframes
- Intersection Observer
- Inline SVG for trace/line animation
- Minimal JavaScript
- Avoid heavy animation libraries unless the final design truly needs them

## Ambient Image Background Concept

Purpose:
Let uploaded work images influence the section mood without using a hard rectangular frame.

Method for first version:
- Render the same image twice.
- Main image remains sharp and readable.
- Duplicate image is positioned behind, enlarged, blurred, softened, and slightly tinted.
- Container uses subtle overflow and contrast controls.

Possible component fields:
- `src`
- `alt`
- `caption`
- `section`
- `ambient`
- `active`
- `order`

Advanced later:
- Extract dominant image colors in the admin/media pipeline.
- Generate dynamic gradient backgrounds from uploaded image colors.

## Placeholder Image Plan

Use placeholder visuals for:
- Hero abstract PCB/cloud system
- About/team or engineering work
- IoT/embedded service
- Cloud/dashboard service
- Web/app UI service
- Mobile app service
- Edge AI/vision service
- Case studies
- Work gallery

Placeholders should be realistic and technology-specific, not generic decorative images.

## Admin-Ready Content Model

The admin panel is not part of the first build, but the website should be ready for it.

First version:
- Store content in local structured data files or constants.
- Render repeated sections from arrays.
- Keep image references in media objects.
- Use stable IDs for sections and content items.

Later admin panel:
- Admin edits content and uploads media.
- Website consumes the same structure from an API, CMS, or generated JSON.

Recommended content groups:
- Site settings
- Navigation
- Hero
- Services
- Capability flow
- Process steps
- Tech stack
- Case studies
- Gallery/work images
- FAQ
- Careers
- Contact
- Footer

## Example Data Shape

```json
{
  "hero": {
    "headline": "Tech Solutions for Connected, Intelligent Businesses",
    "subtext": "IoT, cloud, web, mobile, embedded systems, and edge AI solutions built for startups, businesses, and industries.",
    "primaryCta": {
      "label": "Request Quote",
      "href": "/request-quote/"
    },
    "secondaryCta": {
      "label": "Explore Services",
      "href": "/services/"
    },
    "media": {
      "id": "hero-abstract-system",
      "section": "hero",
      "src": "/images/placeholders/hero-pcb-cloud.jpg",
      "alt": "Abstract PCB traces connected to cloud nodes",
      "ambient": true
    }
  },
  "services": [
    {
      "id": "iot-solutions",
      "title": "IoT Solutions",
      "description": "Sensors, device connectivity, monitoring, automation",
      "icon": "network",
      "active": true,
      "order": 1
    }
  ]
}
```

