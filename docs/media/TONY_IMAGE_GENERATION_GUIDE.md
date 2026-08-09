# Tony Image Generation Guide

## Objective

Create a consistent visual media set for Vortiq Dynamics that can be used on the website, Instagram, and LinkedIn.

The images should look like real scenes captured from a small R&D setup. They should not look like futuristic AI renders, stock photos, luxury offices, or huge corporate labs.

The main strategy is:

1. First create one consistent R&D room.
2. Generate all sides/views of that room.
3. Use the same room setup to create service-specific images.
4. Keep the same objects, lighting, layout, and mood across all images.

This is important because a consistent room helps reduce hallucination when generating multiple images. If the room, furniture, tools, drone, devices, and lighting remain the same, future images will feel like they belong to the same company and same R&D center.

## Visual Direction

The R&D room should feel like:

- A small independent R&D room
- A modest home-lab/startup-style workspace
- Practical and serious
- Not too old
- Not highly modern
- Not a luxury office
- Not a futuristic lab
- Real and believable
- Suitable for electronics, drones, embedded systems, IoT, software development, cloud, and DevOps work

The photo style should be:

- Realistic documentary photography
- Natural indoor lighting
- Slightly candid
- Professional but grounded
- Practical workspace clutter
- High detail
- True-to-life colors
- No over-polished marketing render feel

## Items Needed In The R&D Room

Keep these elements consistent across images wherever possible.

### Room Structure

- Rectangular small room
- One main electronics workbench
- One software/cloud/DevOps desk
- One center testing table
- One storage/tool shelf area
- One entrance/back-wall side
- One whiteboard or planning board with no readable writing
- Practical wall color, such as off-white, light gray, muted cream, or pale neutral
- Natural light from one side, plus soft indoor lighting
- Visible power outlets and cable management, but not messy

### Electronics Workbench

- Rugged gray electronics enclosure/module
- Soldering station placed safely to one side
- Small oscilloscope or compact test instrument
- Bench power supply
- Sensor boards
- Microcontroller boards
- Jumper wires
- Data cables
- Small hand tools
- Screwdrivers
- Tweezers
- Wire cutters
- Notebook
- Small containers for screws/components
- Prototype casings

### Drone Testing Table

- Compact-to-medium drone prototype
- Carbon or dark composite frame
- Propellers
- Motors
- Flight controller/electronics area
- Exposed wiring where appropriate
- Rugged gray sensor-fusion/control module
- Battery packs stored safely
- Power/data cables
- Camera module
- IMU/GNSS-like module
- Small LiDAR-like sensor
- Calibration/test cables
- Notebook or checklist

### Software / Cloud / DevOps Desk

- Laptop
- One or two monitors
- Keyboard
- Mouse
- Empty chair
- Notebook
- Router/network device
- Mini PC or small server box
- Cables
- Coffee cup or water bottle if natural
- Abstract dashboard or code-like screen visuals with no readable text
- Cloud monitoring style panels
- Telemetry graphs
- Deployment/status blocks

### Storage Area

- Component boxes
- Cable rolls
- Spare propellers
- Drone arms
- Small motors
- Prototype enclosures
- Toolboxes
- Small hardware cases
- Battery-safe container or tray
- Shelves with practical clutter
- Labels are allowed only if they are not readable

## Global Negative Prompt

Use this negative direction for all generations:

```text
Avoid futuristic lab, luxury office, huge corporate R&D center, military or combat scene, weapons, explosions, people posing, readable brand names, readable logos, readable screen text, fake holograms, excessive neon lighting, unsafe battery handling, messy junk-room look, cartoon style, illustration style, glossy marketing render, over-clean stock photo style.
```

## Base Room Prompt

Use this prompt to establish the room style:

```text
Create a realistic documentary-style photo of a small independent technology R&D room / home-lab style workspace.

The room should feel modest, practical, serious, and believable. It should not look like a luxury office, corporate lab, futuristic sci-fi lab, or old workshop. It should look like a small startup R&D space used for electronics, drones, embedded systems, IoT, software development, cloud, and DevOps work.

Keep the room consistent across views: same wall color, same table materials, same lighting, same storage shelves, same tools, same monitor/laptop style, same general layout.

Style: realistic photography, natural indoor lighting, practical workspace clutter, slightly candid, high detail, true-to-life colors.

Avoid: people, readable logos, readable text, excessive neon, fake holograms, luxury interiors, military scene, unsafe battery handling, cartoon or illustration style.
```

## Top-Down Room Layout Prompt

Generate this first. This becomes the layout reference for all other images.

```text
Create a realistic top-down layout reference of a small R&D room.

Room layout:
- Rectangular room
- Main electronics workbench placed along the back wall
- Software/DevOps desk placed along the right wall
- Storage shelves placed on the left wall
- Drone testing table placed near the center
- Whiteboard or planning board on one wall
- Power outlets and cable management visible but neat
- Walkable space between tables

Elements:
- Electronics workbench: soldering station, compact test equipment, power supply, sensor boards, wires, tools, notebooks
- Drone table: compact drone frame, propellers, battery packs stored safely, rugged gray electronics module, test cables
- Software desk: laptop, monitor, keyboard, mouse, empty chair, network device/router, small server box
- Shelves: component boxes, storage bins without readable text, tools, spare cables, small prototype enclosures

Make it look realistic and practical, not like a perfect studio setup.

No readable text, no logos, no people.
```

## Front Workbench View Prompt

```text
Create a realistic documentary-style photo facing the main electronics workbench wall of the same small R&D room.

View: camera standing near the room entrance, looking toward the main electronics workbench.

Placement:
- Main workbench centered against the wall
- Laptop or monitor slightly right on the workbench
- Rugged gray electronics module on the table
- Small drone prototype or drone frame placed near the center-left of the table
- Soldering station safely placed on the far left side
- Power supply and small test equipment behind the device
- Sensor boards, wires, tools, and notebooks placed naturally across the table
- Whiteboard or planning board mounted above or near the workbench, but no readable writing
- Wall shelves above or beside the workbench with component boxes and small enclosures

Lighting:
- Natural window light from one side
- Soft indoor light
- Real shadows

Mood:
- Looks like a real R&D room during active work
- Practical, slightly cluttered, serious, authentic

Avoid futuristic lab, luxury office, readable text, logos, people, fake holograms, excessive neon, unsafe battery handling.
```

## Left Storage View Prompt

```text
Create a realistic documentary-style photo of the left side of the same small R&D room.

View: camera facing the storage/tool side of the room.

Placement:
- Storage shelves along the left wall
- Small plastic component boxes
- Cable rolls
- Tools
- Spare sensor boards
- Prototype casings
- Small hardware parts on shelves
- A side table or small cart with tools and measurement equipment
- Drone spare parts placed neatly: propellers, arms, landing gear, small motors
- Battery packs stored safely in a separate container or tray
- Cables organized but not perfect
- Part of the main workbench visible on the right edge of the frame to connect this view with the rest of the room

Style:
- Realistic, practical, small startup R&D space
- Not messy junk room
- Not showroom-clean

No readable labels, no brand logos, no people.
```

## Right Software / DevOps View Prompt

```text
Create a realistic documentary-style photo of the right side of the same small R&D room.

View: camera facing the software/DevOps workstation side.

Placement:
- Desk along the right wall
- Laptop and one or two desktop monitors on the desk
- Empty office chair
- Keyboard and mouse
- Notebook
- Coffee cup or water bottle if natural
- Network device/router
- Small server or mini PC
- Monitor screens should show abstract cloud dashboard, code-like blocks, telemetry graphs, deployment panels, or server monitoring visuals
- No readable text on screens
- A few electronics items in the background to show this software area belongs to the same R&D room
- Cable management visible but believable

Mood:
- Small engineering team workspace
- Practical, focused, real
- Not luxury office
- Not corporate stock photo

No people, no logos, no readable text, no fake holograms.
```

## Entrance / Back Wall View Prompt

```text
Create a realistic documentary-style photo from inside the same R&D room looking back toward the entrance side.

Placement:
- Door or simple entrance visible
- Small wall hooks or shelf with tools/cables
- Compact storage cabinet
- Secondary table or testing cart
- Safety storage area for batteries
- Packed equipment cases or prototype boxes
- Part of the drone table visible in the foreground
- Part of the software desk visible on one side

Mood:
- Real small R&D workspace
- Practical, lived-in, organized enough for professional work

Lighting:
- Natural indoor light
- Slight background blur
- Realistic shadows

Avoid messy bedroom look, luxury office, futuristic lab, readable text, logos, people.
```

## Center Drone Testing View Prompt

```text
Create a realistic documentary-style photo focused on the center testing table inside the same small R&D room.

Placement:
- Compact-to-medium drone prototype on the table
- Rugged gray electronics module next to it
- Visible cables connecting the module to drone electronics
- Sensor boards
- IMU/GNSS-like module
- Camera module
- Small LiDAR-like sensor
- Battery pack safely placed
- Laptop nearby showing abstract drone telemetry or calibration screen with no readable text
- Main electronics workbench blurred in the background
- Software desk slightly visible in the background

Mood:
- Captured mid-research
- Serious, hands-on, real, practical
- Not staged like a product ad

Style:
- Realistic photography
- Natural lighting
- Slight handheld camera feel
- Background softly blurred

Avoid military drone look, weapon attachments, fake holograms, neon, readable text, logos, people posing.
```

## Drone Sensor-Fusion Service Image Prompt

Use this for the final service/case-study image related to drone, electronics, embedded systems, IoT, and sensor fusion.

```text
Create a realistic documentary-style photo for a technology R&D project.

Scene: A small independent R&D room or home-lab style workspace, modest and practical, not old-fashioned and not highly modern. A simple work table holds a compact-to-medium experimental drone prototype, a rugged gray electronics module, visible data/power cables, battery packs, hand tools, a soldering station placed safely to one side, small sensor boards, notebooks, and a laptop or monitor showing software development or telemetry.

Main subject: The rugged gray device is an external sensor-fusion/control module connected to the drone electronics. It sits on the table near the drone, with believable cables running to the drone frame, sensors, and power system. The device should look industrial and practical, similar to a sealed gray rectangular enclosure with screws, a flange base, and a circular metal connector.

Drone context: The drone is a research prototype, not a finished commercial product. It has a carbon or dark composite frame, propellers, exposed wiring where appropriate, visible sensors, and test-bench components.

Computer screen: The laptop or monitor should suggest drone programming, telemetry, calibration, or sensor readings using abstract UI blocks, graphs, code-like lines, and log panels. No readable text, no brand names, and no real logos.

Mood: A candid scene captured during real research work, as if photographed mid-development. Natural indoor lighting, practical workspace clutter, believable cables, notebooks, components, and test equipment. Serious, small-scale, hands-on, and authentic.

Style: Realistic photography, not futuristic sci-fi, not glossy marketing render. Slight handheld camera feel, natural shadows, realistic materials, true-to-life colors, high detail, professional but grounded.

Composition: Landscape image, 16:10 or 16:9. The device and drone should be clearly visible. Leave some clean negative space on one side so the image can be used in a website section. Focus on the table scene, with the background slightly blurred.

Avoid: futuristic lab, luxury office, huge corporate R&D center, military combat scene, weapons, explosions, people posing, readable brand logos, readable screen text, fake holograms, excessive neon, overly clean stock-photo look, cartoon style, illustration style, unsafe battery handling.
```

## Cloud / DevOps Service Image Prompt

```text
Create a realistic documentary-style photo inside the software/DevOps side of the same small R&D room.

Scene: A modest software and DevOps working area connected to a small R&D center. The room has a few desks, empty chairs, desktop monitors, laptops, notebooks, network devices, cables, and a small whiteboard or wall board. The space should feel practical and real, not corporate or luxury.

Main subject: A workstation showing cloud infrastructure, DevOps dashboards, deployment pipelines, server monitoring, or system architecture on screens. The screen content should be abstract and not readable, using charts, terminal-like blocks, status panels, and code-like lines.

Environment: Empty chairs and workstations should suggest that a small team works here. It should feel like real work is happening, but without showing posed people. Include subtle signs of active development: coffee cup, notebook, sticky notes with no readable text, router/network equipment, small server box, cables, keyboard, and mouse.

Mood: Serious, focused, small-team engineering environment. Realistic, natural indoor lighting, practical workspace clutter, not too messy, not too clean.

Style: Realistic photography, documentary style, professional but grounded. Not futuristic, not glossy marketing render, not a corporate office stock photo.

Composition: Landscape 16:10 or 16:9. Leave clean negative space on one side for website text. Make the monitor/workstation clearly visible, with background slightly blurred.

Avoid: readable text, real logos, brand names, fake holograms, huge office, luxury interior, futuristic sci-fi room, excessive neon, cartoon style, illustration style, people posing.
```

## Software / Web / Mobile Service Image Prompt

```text
Create a realistic documentary-style photo of a small software development workspace inside the same independent technology R&D setup.

Scene: A practical desk setup with a laptop, external monitor, mobile phone, tablet, notebook, keyboard, and small electronics items in the background. The space should feel connected to an R&D company that builds both hardware and software.

Main subject: The screen should suggest web or mobile application development, with abstract UI layouts, dashboard panels, code-like blocks, and app preview screens. No readable text, no real logos, no brand names.

Mood: Focused, practical, real development work. Natural lighting, slight desk clutter, believable workspace.

Style: Realistic photography, not a mockup render. Professional but grounded. The image should feel like it was captured during actual product development.

Composition: Landscape 16:10 or 16:9, with enough negative space for use in website service sections.

Avoid fake app names, readable code, brand logos, overly polished stock photo style, futuristic UI holograms, luxury workspace, cartoon or illustration style.
```

## General R&D / About Image Prompt

```text
Create a realistic documentary-style photo of the same small independent technology R&D workspace.

Scene: A modest R&D room with a workbench, laptop, electronics components, tools, sensor boards, cables, notebooks, and prototype devices. The setup should look serious and hands-on, suitable for a small engineering company.

Main subject: The table should show active research and prototyping, but not focus on one specific product. Include embedded boards, test equipment, wires, a monitor with abstract technical visuals, and organized practical clutter.

Mood: Trustworthy, engineering-led, authentic, small-scale, focused.

Style: Realistic photography, natural indoor lighting, slight handheld documentary feel, professional but not staged.

Composition: Landscape image, 16:10 or 16:9. Suitable for About section or website gallery.

Avoid futuristic lab, luxury office, readable text, logos, people posing, excessive neon, sci-fi visuals, cartoon style.
```

## Image Sizes And Crops

Create or crop final images for:

- Website landscape: 16:10 or 16:9
- LinkedIn: 16:9 or 1.91:1
- Instagram square: 1:1
- Instagram story/reel if needed: 9:16

For website use, always keep some clean negative space on one side so text can be placed beside or over the image if needed.

## Suggested File Names

Use clear names:

```text
rd-room-top-layout.png
rd-room-front-workbench.png
rd-room-left-storage.png
rd-room-right-devops.png
rd-room-entrance-view.png
rd-room-center-drone-table.png
rd-drone-sensor-fusion-workbench.png
rd-embedded-systems-table.png
rd-cloud-devops-workstation.png
rd-software-development-desk.png
rd-general-engineering-lab.png
```

## Website Placement Guide

- Drone sensor-fusion image: Electronics, Embedded Systems, IoT, Case Studies, Gallery
- Embedded workbench image: Embedded Systems, IoT Solutions, Services
- Cloud/DevOps workstation image: Cloud Solutions, DevOps, Software Services
- Software desk image: Web Applications, Mobile Applications, Software Development
- General R&D room image: About section, Homepage support image, Gallery
- Room side views: Social media, company culture, behind-the-scenes, process posts

## Quality Checklist

Before finalizing any image, check:

- Does it look like a real photo?
- Does it match a small R&D setup?
- Is the same room style consistent across images?
- Are there any fake readable words?
- Are there any logos or brand names?
- Are cables and devices believable?
- Does the drone look like a research prototype, not military equipment?
- Are batteries shown safely?
- Does the workspace feel practical, not luxury or sci-fi?
- Can this image be used on the website without looking fake?
- Is there enough clean space for website layout?
- Are the generated objects physically plausible?

