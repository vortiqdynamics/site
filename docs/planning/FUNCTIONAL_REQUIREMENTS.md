# Vortiq Dynamics Functional Requirements

## Site Type

Static website.

The site may be built using:
- Plain HTML, CSS, and JavaScript
- Astro
- Next.js static export
- Another static-first approach if approved before development

No backend is required for the first static version unless form submission handling is added later. However, the static website should be structured so content can later be supplied by an admin panel, CMS, API, or generated JSON.

## Required Pages

- Home
- Services
- Solutions
- Case Studies
- About
- Careers
- Contact
- Request Quote

## Header Requirements

Logo:
Vortiq Dynamics

Navigation:
- Home
- Services
- Solutions
- Case Studies
- About
- Careers
- Contact

CTA:
- Request Quote button highlighted in the header

Mobile:
- Navigation collapses into a mobile menu
- Request Quote remains easy to access

## Hero Requirements

Headline:
Tech Solutions for Connected, Intelligent Businesses

Subtext:
IoT, cloud, web, mobile, embedded systems, and edge AI solutions built for startups, businesses, and industries.

Buttons:
- Request Quote
- Explore Services

Visual:
- Abstract PCB/cloud animation
- Animated circuit traces
- Moving cloud nodes
- Optional dashboard preview
- Optional IoT/device imagery
- Typewriter-style text effect

Motion:
- Lightweight scroll animations
- Subtle hero parallax
- Typewriter effect in hero
- Scroll-triggered reveals for sections and cards
- Capability flow animation covering electronics, PCB/hardware, Docker/Kubernetes/cloud integration, mobile UI, and edge AI
- Reduced-motion fallback for users who prefer less motion

## Services Requirements

The services catalog must include:
- IoT Solutions
- Cloud Solutions
- Web Applications
- Mobile Applications
- Websites
- Embedded Systems
- Edge AI

Each service should include:
- Icon
- Service title
- Short description
- Optional CTA or link to details

All seven services must remain equally visible. The design should not hide lower-priority services behind tabs, carousels, or "show more" controls on desktop.

## Capability Flow Requirements

The website should include an animated technology-flow section showing how Vortiq Dynamics connects hardware and software layers.

Flow:
- Hardware
- Firmware
- IoT
- Cloud
- Dashboard
- Mobile App
- Edge AI

Animation motifs:
- PCB traces lighting up
- Docker/Kubernetes-style containers stacking or connecting
- Cloud nodes linking together
- Mobile UI panels sliding in
- Edge AI/processor layer appearing at the end

## Process Requirements

The "How We Work" section must include:
1. Understand Requirement
2. Design Architecture
3. Build Prototype
4. Develop and Integrate
5. Test, Deploy, Support

## Tech Stack Requirements

The tech stack section must include:

Frontend:
- React
- Next.js
- HTML
- CSS

Backend:
- Node.js
- Python
- APIs

Cloud:
- AWS
- Azure
- Google Cloud
- Cloudflare

IoT/Embedded:
- RTOS
- IoT
- Hardware and PCB designing
- Firmware

Mobile:
- Flutter
- React Native
- Android

AI/Edge AI:
- Edge AI products and services
- Autonomous Navigation
- ADAS

## Case Study Requirements

The website must include these case study cards:
- Industrial IoT Monitoring System
- Cloud Dashboard for Business Operations
- Mobile App for Field Teams

Each card must include:
- Problem
- Solution
- Result

## Media Requirements

Initial site:
- Use placeholders for hero, about, services, case studies, and gallery/work images.
- Placeholder imagery should represent real technology categories, not generic decoration.

Future media:
- The site should support replacing placeholders with real Vortiq Dynamics work images.
- Major sections should accept section-specific media from future structured data.

Ambient image behavior:
- Image components should support a blurred background clone of the same image.
- The main image remains sharp and readable.
- The blurred background should create soft color contrast based on the image.
- Do not rely on hard frame borders as the main treatment.

## Admin-Ready Data Requirements

The admin panel will be built later. The first website should still be prepared to consume admin-managed content.

Implementation direction:
- Keep page content in structured data objects or JSON where practical.
- Components should render from arrays and objects instead of only hardcoded markup.
- Media references should be data-driven with fields for image source, alt text, caption, section, active state, and order.

Future admin-editable entities:
- Navigation links
- Hero content and media
- About content and media
- Services
- Capability flow items
- Tech stack categories
- Case studies
- Project/gallery images
- FAQ items
- Career page content
- Contact details
- Footer links

Suggested media item schema:

```json
{
  "id": "hero-main",
  "section": "hero",
  "title": "Hero technology visual",
  "alt": "Abstract PCB and cloud technology visual",
  "src": "/images/placeholders/hero-technology.jpg",
  "caption": "",
  "active": true,
  "order": 1
}
```

## About Requirements

The About section/page must include this company story:

Vortiq Dynamics helps businesses transform ideas into reliable technology systems, from connected devices to cloud platforms and intelligent applications.

It must include these key points:
- End-to-end development
- Engineering-first approach
- Scalable architecture
- Support from concept to deployment

## Contact / Request Quote Form Requirements

Required fields:
- Name
- Company
- Email
- Phone
- Service Interested In
- Project Brief
- Budget Range
- Submit Button

Recommended service options:
- IoT Solutions
- Cloud Solutions
- Web Applications
- Mobile Applications
- Websites
- Embedded Systems
- Edge AI
- Other

Recommended budget range options:
- Not sure yet
- Under $2,500
- $2,500 - $5,000
- $5,000 - $10,000
- $10,000 - $25,000
- $25,000+

Static version behavior:
- Form can show a success message after submit
- Data does not need to be sent unless a backend or form provider is configured

Future integration options:
- Formspree
- Netlify Forms
- Basin
- Custom API endpoint
- Email service integration

## Career Form Requirements

Required fields:
- Name
- Email
- Phone
- Role Interested In
- Experience
- Resume Upload
- Message
- Submit Button

Static version behavior:
- Resume upload can be visually present but will not actually upload unless backend/form provider support is added
- If no backend is used, clearly handle the form as a static demo or connect it to a form service

## FAQ Requirements

Questions:
- What type of projects do you handle?
- Do you work with startups?
- Can you build both hardware and software?
- Do you provide maintenance after delivery?
- Can you develop custom IoT and embedded systems?

FAQ behavior:
- Can be static expanded content
- Can also use accessible accordion controls

## Footer Requirements

Footer must include:
- Logo
- Short tagline
- Quick Links
- Services
- Contact details
- Social links
- Copyright

## Responsive Requirements

The site must work well at:
- Mobile: 360px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Wide desktop: 1440px and up

Required behavior:
- No horizontal scroll
- Header remains usable
- Buttons and forms fit within containers
- Cards stack cleanly
- Text does not overlap visuals

## Accessibility Requirements

Required:
- Semantic HTML
- Proper heading order
- Form labels connected to inputs
- Keyboard accessible navigation
- Visible focus states
- Sufficient color contrast
- Alt text for meaningful images
- Descriptive link and button text

## Performance Requirements

Required:
- Static pages load quickly
- Images optimized before production
- Avoid heavy animation libraries unless necessary
- Keep JavaScript minimal
- Use lazy loading for non-critical images
- Keep animation lightweight and avoid heavy dependencies
- Pause, simplify, or reduce animations when offscreen

## SEO Requirements

Each page should include:
- Unique page title
- Meta description
- Clean URL
- Structured headings
- Descriptive content

Suggested pages:
- `/`
- `/services/`
- `/solutions/`
- `/case-studies/`
- `/about/`
- `/careers/`
- `/contact/`
- `/request-quote/`

## Open Items Before Development

Need confirmation for:
- Phone number
- Email address
- Physical address or service location
- Social links
- Logo file, if available
- Real project images or preferred placeholder direction
- Preferred technology stack for the static build
- Whether forms should be demo-only or connected to a real form provider
