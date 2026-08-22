# Suzette Sun Portfolio — Hero Section Design Specification

> **Purpose:** This document defines the homepage hero as a principal-level portfolio design system.
>
> The hero must immediately establish Suzette as a **strategic marketer with strong visual design skill and technical fluency**.
>
> It should feel custom-built, editorial, interactive, and premium — not like an AI-generated landing page.

---

# 1. Hero Objective

Within the first 5–8 seconds, the hero should communicate:

1. Who Suzette is
2. What she does
3. Why she is different
4. That she has real work to show
5. That she understands both creative execution and marketing systems

The hero should not try to explain her entire résumé.

---

# 2. Core Message

Recommended primary line:

> **I create impactful experiences.**

Recommended supporting positioning:

> I help brands stand out, connect with the right audience, and grow through strategy, creativity, and data-driven marketing.

Alternative headline:

> **Creative marketing that drives results.**

Do not use generic language such as:

- "Turning ideas into impact"
- "Where creativity meets strategy"
- "Helping brands thrive in the digital age"
- "Crafting digital experiences that inspire"
- "Building meaningful connections through innovation"

Those phrases are overused and make the site feel AI-generated.

---

# 3. Hero Composition

## Desktop composition

Use a **split asymmetrical composition**.

### Left zone — 38–44%
Contains:

- eyebrow / role
- large headline
- short description
- primary CTA
- secondary CTA
- capability chips

### Right zone — 56–62%
Contains:

- large angled MacBook / laptop mockup
- portfolio website preview inside the screen
- one featured project card
- one tools/platform card
- optional subtle data/metric card if verified
- controlled floating UI elements

The right side should feel like a **digital workstation / living portfolio environment**.

---

# 4. Approved Hero Mood

The visual reference is:

- light warm background
- neutral cream / beige environment
- physical depth
- large MacBook as the dominant object
- colorful digital content inside the laptop
- glass UI overlays
- restrained pink
- coral / orange / violet / blue accents
- soft natural shadows
- premium editorial typography
- subtle plant / studio context if photographic
- realistic desk / stone plinth / material texture
- polished but not over-rendered

The hero should feel closer to:

**creative director portfolio × marketing strategist × polished digital product presentation**

Not:

**beauty influencer × neon gamer × SaaS dashboard × AI agency template**

---

# 5. Background

Use a warm neutral background.

Recommended:

```css
background:
  radial-gradient(circle at 15% 30%, rgba(255,255,255,.95), transparent 42%),
  linear-gradient(120deg, #F7F2EA 0%, #EFE7DB 100%);
```

Optional:

- very subtle daylight shadow
- soft leaf shadow
- restrained grain/noise
- a small iridescent light leak

Do not use:

- giant pink blob
- giant purple blob
- animated mesh gradient across the whole screen
- dark full-screen background
- multiple glow effects

---

# 6. Headline Design

The headline should be large but not oversized to the point of reducing utility.

Suggested treatment:

```text
I create
impactful
experiences
```

Use a sans-serif for the majority.

Use the serif/display face only on **one word**, for example:

`impactful`

That one contrast creates personality without making the typography feel decorative.

Example:

```text
I create
impactful
experiences
```

Where:

- "I create" = bold sans
- "impactful" = expressive serif
- "experiences" = bold sans

Do not use a script font for the headline.

---

# 7. Headline Color

Main text:

```css
#171717
```

Accent word can use a subtle multi-color text treatment:

```css
background: linear-gradient(
  90deg,
  #F04486,
  #FF735D,
  #FFAA3D
);
```

Use one gradient word only.

Do not gradient every heading on the site.

---

# 8. Eyebrow

Suggested:

```text
MARKETING PROFESSIONAL · CAMPAIGNS · OPERATIONS
```

or

```text
DIGITAL MARKETING · CREATIVE · MARKETING OPERATIONS
```

Style:

- 11–13px
- uppercase
- letter spacing 0.18–0.24em
- muted charcoal
- optional tiny abstract icon

Do not add meaningless decorative stars around it.

---

# 9. Supporting Copy

Keep to 2–3 lines.

Recommended:

> I help brands stand out, connect with the right audience, and grow through strategy, creativity, and data-driven marketing.

This should be easy to scan.

Avoid a 6-line biography in the hero.

---

# 10. Hero CTA System

Primary:

```text
View My Work
```

Secondary:

```text
Download CV
```

Optional tertiary:

```text
Let's Connect
```

Primary CTA style:

- dark background
- white text
- 14–16px
- medium radius
- arrow icon
- clear hover state

Secondary CTA:

- text or quiet outline button
- visually lower priority

Avoid giant pill buttons.

---

# 11. Capability Chips

Suggested visible chips:

```text
Campaign Strategy
Email Marketing
Content Creation
Marketing Operations
CRM & Automation
Web & Landing Pages
```

Do not show every skill.

Keep chips small and informative.

They can subtly use category color dots.

---

# 12. MacBook / Laptop Visual

The MacBook is the hero's primary visual object.

## Purpose

It should communicate:

- digital fluency
- website design ability
- campaign design
- modern marketing work
- technical competence

## Treatment

- realistic perspective
- slight rotation
- sits on physical surface
- screen angled toward viewer
- large enough to dominate the right half
- not cropped awkwardly
- subtle contact shadow
- premium material finish

## Screen content

The website inside the laptop should show:

```text
Creative Marketing
That Drives
Results.
```

With:

- bold typography
- colorful abstract visual
- navigation
- one CTA
- clean composition

The screen can use a darker interface than the main website to create contrast.

That contrast is acceptable because the **site itself remains light**.

---

# 13. Screen Art Direction

Inside the laptop:

Use a highly polished abstract visual that feels:

- fluid
- dimensional
- colorful
- premium
- contemporary

Suitable visual language:

- iridescent ribbon
- fluid 3D sheet
- sculptural wave
- refractive glass
- abstract material study

Avoid:

- random AI orb
- meaningless liquid blob
- stock gradient wave
- too many bright colors at once

The abstract visual should look like a deliberate hero artwork, not filler.

---

# 14. Floating Featured Project Card

Use **one** primary project card.

Example:

```text
FEATURED PROJECT

The Trend Cafe
Marketing Campaign

Branding · Content · Social Media
Strategy · Campaign Execution

View Case Study →
```

The project card should include:

- real project image
- small category label
- title
- compact role/capability tags
- CTA

Use real work from the Drive.

Do not use placeholder coffee photos if the project is not actually The Trend Cafe.

---

# 15. Tools / Platforms Card

Use one horizontal glass panel near the laptop.

Example tools:

- Canva
- Meta
- Google Ads / Google Analytics
- Mailchimp
- HubSpot
- GoHighLevel

Only show tools Suzette actually uses.

Do not use random logos for visual effect.

---

# 16. Metrics

Only show metrics that are verified.

Approved examples may include:

- 30% website traffic increase at CyberWrath

Do not invent:

- number of clients
- number of projects
- conversion rate
- years of experience
- commitment percentage
- campaign uplift

If a metric is not verified, use non-numeric proof instead.

Example:

```text
Email Campaigns
CRM & Automation
SEO & Content
Web Assets
```

---

# 17. Testimonial Card

Optional.

Only show if a real testimonial exists.

Do not use AI-generated testimonial text.

If no verified testimonial exists, remove the card entirely.

---

# 18. Hero Photo

A large portrait is **not required**.

The hero should primarily sell the work.

If a portrait is used:

- use only an approved image from `/Profile Photos`
- keep it small
- use it in a personal CTA or testimonial-style card
- do not compete with the MacBook

Do not create a fake portrait.

---

# 19. Decorative Elements

Allowed:

- one hand-drawn arrow
- one small editorial mark
- subtle grid/dot detail
- subtle prism light leak
- restrained glass card
- controlled gradient accent

Not allowed:

- sparkles in every corner
- random star icons
- multiple 3D shapes
- decorative UI with fake data
- random badges
- floating circles with no purpose

---

# 20. Hero Motion

Motion should reinforce depth.

Recommended:

### On load

1. headline fades/slides in 12–20px
2. laptop enters with slight translate and scale
3. featured card settles into position
4. tool panel appears with small delay

Total reveal duration:
**600–1000ms**

Do not stagger 15 items individually.

### On pointer movement

Optional:

- laptop 1–2° perspective shift
- featured card 3–6px parallax
- subtle highlight movement

Keep it barely noticeable.

### On scroll

- laptop may move up slightly
- foreground cards can separate subtly
- hero transitions into work section

Avoid dramatic 3D rotations.

---

# 21. Navigation

Desktop:

```text
SUZETTE SUN

WORK
SERVICES
ABOUT
EXPERIENCE
CREDENTIALS
CONTACT

LET'S CONNECT →
```

Header style:

- transparent / integrated with hero
- 72–88px height
- strong spacing
- optional subtle bottom border after scroll

Sticky header can become slightly opaque after the user scrolls.

---

# 22. Hero Grid

Recommended desktop:

```text
hero min-height: 760–900px

12-column grid

left:
columns 1–5

right:
columns 6–12
```

MacBook can intentionally break the grid slightly.

That visual tension creates a more editorial feel.

---

# 23. Desktop Layout Sketch

```text
┌────────────────────────────────────────────────────────────┐
│ SUZETTE SUN      WORK SERVICES ABOUT ...      LET'S CONNECT│
│                                                            │
│  ROLE LABEL                           ┌───────────────┐     │
│                                      │ featured      │     │
│  I create                            │ project       │     │
│  impactful           ┌───────────────┴───────────┐   │     │
│  experiences         │                           │   │     │
│                      │         MACBOOK           │   │     │
│  Supporting copy     │                           │   │     │
│                      │                           │   │     │
│  [View My Work]      └───────────────────────────┘   │     │
│  Download CV                ┌─────────────────────┐  │     │
│                             │ tools / platforms   │  │     │
│  capability chips           └─────────────────────┘  │     │
└────────────────────────────────────────────────────────────┘
```

---

# 24. Mobile Hero

Mobile should be redesigned, not scaled down.

Order:

```text
1. Header
2. Eyebrow
3. Headline
4. Supporting copy
5. CTA row
6. Capability chips
7. MacBook visual
8. Featured project card
```

The MacBook should become:

- more frontal
- less angled
- wider than the viewport content column
- optionally horizontally cropped for drama

Floating cards should be reduced to one or two.

---

# 25. Tablet

At tablet width:

- copy becomes 45%
- laptop becomes 55%
- remove secondary decorative elements
- keep featured project card
- move tools card below laptop if needed

---

# 26. Hero Accessibility

Required:

- headline is actual text
- MacBook screen text should not be the only place critical content appears
- buttons have accessible labels
- motion respects reduced motion
- decorative assets use empty alt text
- featured project image has descriptive alt
- sufficient text contrast

---

# 27. Hero Performance

The hero is visually rich but must load fast.

Rules:

- preload only the hero font subset
- use optimized WebP/AVIF
- avoid autoplay video unless compressed and justified
- lazy-load below-the-fold assets
- keep hero JS lightweight
- avoid full WebGL render
- avoid canvas if CSS/HTML can achieve the effect

---

# 28. Component Breakdown

Recommended:

```text
Hero
├── HeroHeader
├── HeroCopy
│   ├── Eyebrow
│   ├── Headline
│   ├── SupportingCopy
│   ├── CTAGroup
│   └── CapabilityChips
├── HeroWorkspace
│   ├── LaptopMockup
│   ├── FeaturedProjectCard
│   ├── ToolsPanel
│   └── OptionalProofCard
└── AmbientBackground
```

---

# 29. Hero Content Source Rules

Do not invent:

- project names
- project metrics
- client quotes
- client logos
- tool usage
- role claims

The hero should reference real content from:

```text
/Work links
/Email Designs
/Social Posts
/Guides, Checklists, and other...
/CVs
```

---

# 30. Hero Anti-AI Checklist

Before approval, verify:

- [ ] no generic gradient blobs
- [ ] no fake metric card
- [ ] no fake testimonial
- [ ] no random 3D orb
- [ ] no excessive glassmorphism
- [ ] no giant rounded rectangles everywhere
- [ ] no vague marketing buzzwords
- [ ] no fake client logo
- [ ] no meaningless sparkle decoration
- [ ] no overuse of pink
- [ ] no excessive motion
- [ ] no stock agency copy
- [ ] no generic "creative portfolio" template structure
- [ ] MacBook visual uses real portfolio content
- [ ] left-side hierarchy is readable in 5 seconds
- [ ] mobile experience is intentionally designed

---

# 31. Approval Standard

The hero is ready only if it looks like Suzette's portfolio **could not simply be swapped with another marketer's name**.

It must feel specific to her actual work:

- email
- campaigns
- marketing systems
- web assets
- creative execution
- CRM/automation
- measurable work
- professional progression

That specificity is what prevents the design from becoming generic.
