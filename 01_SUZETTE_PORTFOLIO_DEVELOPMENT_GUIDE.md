# Suzette Sun Portfolio — Principal Developer Handoff

> **Purpose:** This document is the primary engineering and implementation guide for Suzette Sun's professional portfolio website.
>
> The portfolio must communicate that Suzette is a **strategic, technically capable, visually strong marketing professional** with depth across digital marketing, campaign execution, marketing operations, CRM/automation, content, web assets, analytics, and virtual assistance.
>
> The website must **not** look like an AI-generated template, a generic SaaS landing page, or a pink personal-brand cliché.

---

## 0. Read This First

### Project standard

Build this as if it were being reviewed by:

- a principal product designer
- a principal front-end engineer
- a senior marketing director
- a recruiter scanning in under 20 seconds

The portfolio should feel:

- intentional
- editorial
- modern
- dynamic
- technically polished
- visually distinctive
- recruiter-friendly
- performance-conscious
- credible

The portfolio should **not** feel:

- overdecorated
- overly feminine
- pastel-heavy
- "AI aesthetic"
- generic startup template
- like a Canva website
- like a Dribbble shot with poor usability
- like a dark cyberpunk portfolio
- like a résumé pasted into a webpage

---

# 1. Brand Positioning

## Primary professional positioning

**Digital Marketing | Campaigns | Marketing Operations**

Suzette should be presented as a multidisciplinary marketer who connects:

**Strategy + Creative + Systems + Execution**

Secondary capabilities:

- Email Marketing
- Social Media
- Content Creation
- CRM & Automation
- Web & Landing Pages
- SEO
- Analytics
- Campaign Operations
- Virtual Assistance

Virtual Assistance is an additional capability, not the dominant brand identity.

---

# 2. Brand Personality

The site should communicate:

- capable
- organized
- strategic
- creative
- resourceful
- modern
- detail-oriented
- adaptable
- digitally fluent
- human

The creative identity should come from **composition, motion, typography, layout, and visual storytelling**, not from excessive gradients.

---

# 3. Approved Visual Direction

## Core look

Use a **light, warm, premium editorial base**.

Recommended base palette:

```css
--bg: #F7F4EE;
--surface: #FFFDFC;
--text: #171717;
--muted: #6D6964;
--line: rgba(23, 23, 23, 0.10);
```

Accent colors may include:

```css
--coral: #FF6B5F;
--orange: #FF9F43;
--pink: #F04486;
--violet: #7A5CFA;
--blue: #4C7DFF;
--cyan: #19C6C8;
--lime: #91D13B;
```

## Critical rule

Do not assign one accent color to the entire site.

The brand system should support **project-specific color variation** while maintaining consistency through:

- typography
- spacing
- border radius
- layout grid
- card treatment
- motion
- icon style
- imagery treatment

Pink should be **one accent among several**, not the brand itself.

---

# 4. Typography

Use typography as a major part of the visual identity.

Recommended approach:

### Sans-serif
Use a clean modern grotesk for UI and body copy.

Suitable examples:

- Inter
- Geist
- Manrope
- Plus Jakarta Sans
- Satoshi
- General Sans
- DM Sans

### Editorial / display serif
Use selectively for emphasis words, campaign titles, or large display phrases.

Suitable examples:

- Instrument Serif
- Cormorant Garamond
- Playfair Display
- Newsreader

### Avoid

- using 4+ font families
- excessive script fonts
- handwritten fonts for primary interface text
- large amounts of all caps
- generic "creative agency" typography

### Suggested hierarchy

```css
Display XL: clamp(4rem, 8vw, 8.5rem)
H1: clamp(3rem, 6vw, 6rem)
H2: clamp(2rem, 4vw, 4rem)
H3: clamp(1.5rem, 2vw, 2rem)
Body Large: 1.125rem–1.25rem
Body: 1rem–1.0625rem
Small UI: 0.75rem–0.875rem
```

Use tight display tracking and comfortable body leading.

---

# 5. Google Drive Is the Asset Source of Truth

The developer/AI will receive a Google Drive folder.

Expected top-level folders:

```text
Certifications
CVs
Email Designs
Guides, Checklists, and other...
Profile Photos
Social Posts
Work links
```

---

# 6. Drive Folder Mapping

## `/Certifications`

Use for:

- credentials
- professional development
- licenses
- selected certification cards

Do not dump every certificate onto the homepage.

Create a curated credentials section and optional expandable archive.

---

## `/CVs`

Use the latest CV as the factual source for:

- job titles
- dates
- experience
- education
- credentials
- skills

Do not visually copy the CV into the site.

The website is the richer storytelling layer.

---

## `/Email Designs`

Use for:

- email campaign case studies
- newsletter design
- lifecycle campaign examples
- CRM campaign visuals

Recommended presentation:

- responsive email mockups
- scrollable message previews
- desktop/mobile previews
- campaign context
- strategy notes
- outcome where verified

---

## `/Guides, Checklists, and other...`

Use for:

- lead magnets
- guides
- educational resources
- checklists
- branded documents
- content assets

Recommended presentation:

- document mockups
- stacked pages
- tablet previews
- downloadable resource cards

---

## `/Profile Photos`

Use only approved photos.

Possible categories:

- professional headshot
- casual portrait
- half-body professional portrait

Do not create substitute faces.

Do not overuse portraits.

The work should remain the hero.

---

## `/Social Posts`

Use for:

- campaign galleries
- social content case studies
- brand consistency examples
- content strategy

Group posts by campaign where possible.

Avoid a giant uncategorized social media wall.

---

## `/Work links`

**This is the canonical list of Suzette's web design / landing page / web-based marketing work.**

The developer/AI must:

1. open each link
2. classify the project
3. capture the page structure
4. identify the likely contribution
5. create screenshot references when needed
6. use the strongest examples in featured case studies
7. keep weaker examples in a broader archive

Do not assume Suzette fully coded a page unless evidence supports it.

Use accurate language such as:

- designed
- structured
- created
- managed
- optimized
- collaborated on
- built content for
- supported implementation

---

# 7. Employment Facts to Preserve

## Atlantic Training

**Marketing Associate | Email & Campaigns**  
**Jan 2024 – Jul 2026**

Core areas:

- Mailchimp
- HubSpot
- email marketing
- campaign execution
- segmentation
- audience lists
- CRM/database management
- A/B testing
- UTM tracking
- Google Analytics
- newsletters
- landing pages
- lead magnets
- resource hubs
- website content
- YouTube optimization
- cross-functional collaboration

---

## Core Biz Hub — Singapore

This is one company with a promotion.

### Marketing Lead
**Dec 2024 – Jan 2026**

### Marketing Associate
**Sep 2023 – Dec 2024**

Do not create a separate employer entry for Core Invest Institute if the latest CV/approved data says Core Biz Hub is the employer.

The experience should show clear progression within the same organization.

Core responsibilities may include:

- digital marketing planning
- campaign execution
- social media
- content strategy
- website marketing
- CRM
- GoHighLevel
- automations
- event funnels
- customer communications
- database management
- marketing processes
- training/supporting another marketing staff member

---

# 8. Earlier Experience

Keep these in secondary sections / experience timeline, not necessarily in the homepage hero area.

### CyberWrath
**Marketing Expert**  
**Apr 2020 – Dec 2022**

Important verified metric:
- increased website traffic by 30%

### Upwork
**Virtual Assistant / Digital Marketing Assistant**  
**Sep 2021 – Dec 2022**

Use to support versatility and remote-work capability.

---

# 9. Information Architecture

Recommended routes:

```text
/
├── work
│   ├── featured
│   ├── email-marketing
│   ├── web-and-landing-pages
│   ├── social-media
│   ├── content-and-resources
│   └── marketing-operations
├── about
├── experience
├── credentials
├── services
└── contact
```

Optional:

```text
/case-study/[slug]
/insights
```

---

# 10. Homepage Architecture

Recommended order:

```text
1. Header / Navigation
2. Hero
3. Capability Strip
4. Featured Work
5. Selected Case Study
6. Marketing Operations / Systems
7. Experience / Career Progression
8. Selected Testimonial
9. Credentials / Proof
10. Final CTA
11. Footer
```

Do not put every possible section above the fold.

The homepage should create curiosity and then reveal depth.

---

# 11. Case Study Data Model

Use structured project data.

Example:

```ts
type Project = {
  slug: string
  title: string
  client?: string
  company?: string
  year?: string
  category: string[]
  role: string[]
  tools: string[]
  summary: string
  challenge?: string
  strategy?: string
  execution?: string
  deliverables?: string[]
  results?: string[]
  images: ProjectImage[]
  externalUrl?: string
  featured: boolean
  sourceFolder?: string
}
```

Never hard-code project information directly into layout components.

---

# 12. Recommended Project Tags

```text
email-marketing
campaign-strategy
crm
automation
marketing-operations
social-media
content-marketing
web-design
landing-page
seo
lead-magnet
analytics
virtual-assistance
```

---

# 13. Design System

## Grid

Desktop:

```text
max-width: 1440px
content width: 1200–1320px
12-column grid
24–32px gutters
```

Mobile:

```text
4-column grid
16–20px outer padding
```

---

## Spacing

Use a disciplined scale:

```text
4
8
12
16
24
32
48
64
96
128
160
```

Do not use random one-off spacing values unless required.

---

## Radius

Use a small family of radii:

```text
8px
14px
20px
28px
999px
```

Do not make every element pill-shaped.

---

## Shadows

Use subtle physical depth.

Avoid giant fuzzy shadows.

Recommended:

```css
box-shadow:
  0 1px 2px rgba(0,0,0,.04),
  0 8px 30px rgba(0,0,0,.06);
```

---

## Glass surfaces

Use only where they make sense:

- floating UI cards
- metric panels
- overlay cards
- project metadata

Never put important body text on highly transparent glass.

---

# 14. Motion System

The site should feel alive, not animated for animation's sake.

Use:

- subtle scroll reveal
- gentle parallax
- hover tilt on selected mockups
- cursor-aware light movement
- project image scale on hover
- masked text reveal
- sticky project panels
- restrained gradient motion

Avoid:

- scroll hijacking
- excessive GSAP timelines
- text flying from every direction
- particle backgrounds
- floating blobs everywhere
- looping decorative animations
- full-page WebGL unless justified

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 15. Anti-"AI Slop" Design Rules

These are mandatory.

## Do not use

- generic glowing gradient blobs behind every section
- random 3D spheres
- floating glass cards with no informational purpose
- meaningless dashboard charts
- fake metrics
- "Transforming ideas into impact" style filler copy
- unnecessary star/sparkle icons everywhere
- huge pill buttons everywhere
- stock "creative agency" illustrations
- arbitrary neon colors
- fake testimonials
- AI-generated logos for companies
- overused Bento grids without hierarchy
- repetitive cards that all look identical
- lorem ipsum
- buzzword-heavy copy
- "innovative, cutting-edge, dynamic, passionate" filler

## Every visual element must answer one of these:

- Does it explain the work?
- Does it improve navigation?
- Does it reinforce the brand?
- Does it clarify hierarchy?
- Does it demonstrate design skill?
- Does it make the interaction better?

If not, remove it.

---

# 16. Content Writing Standard

Copy should be:

- short
- concrete
- specific
- evidence-based
- professional
- readable

Prefer:

> Built and managed automated registration workflows in GoHighLevel.

Over:

> Leveraged cutting-edge automation strategies to create seamless customer journeys.

Prefer:

> Optimized YouTube metadata, chapters, and content structure for SEO.

Over:

> Transformed video content into high-performing digital experiences.

---

# 17. Component Architecture

Recommended component tree:

```text
components/
├── layout/
│   ├── SiteHeader
│   ├── SiteFooter
│   ├── Container
│   └── Section
├── hero/
│   ├── HeroCopy
│   ├── HeroWorkspace
│   ├── LaptopMockup
│   ├── FloatingProjectCard
│   └── CapabilityChips
├── projects/
│   ├── ProjectCard
│   ├── ProjectGrid
│   ├── ProjectCarousel
│   ├── ProjectMeta
│   └── CaseStudyHero
├── experience/
│   ├── ExperienceTimeline
│   └── RoleProgression
├── credentials/
│   ├── CredentialCard
│   └── CertificationGrid
├── ui/
│   ├── Button
│   ├── Badge
│   ├── Chip
│   ├── Icon
│   └── GlassPanel
└── motion/
    ├── Reveal
    ├── Parallax
    └── HoverMotion
```

---

# 18. Recommended Technical Stack

Preferred modern stack:

```text
Next.js
TypeScript
Tailwind CSS or CSS Modules
Framer Motion
MDX or structured JSON/TS content
Vercel
```

Alternative stacks are acceptable if they preserve:

- performance
- SEO
- accessibility
- reusable components
- maintainability
- easy content updates

Avoid adding libraries just to create visual novelty.

---

# 19. Asset Pipeline

When importing Drive assets:

1. preserve originals
2. create production copies
3. normalize file names
4. compress images
5. generate WebP/AVIF
6. generate responsive sizes
7. create thumbnails
8. create metadata manifest
9. avoid loading massive PDFs or PNGs in the viewport

Example naming:

```text
trend-cafe-email-campaign-01.webp
atlantic-training-resource-hub-hero.webp
core-biz-event-funnel-preview.webp
suzette-sun-headshot-professional.webp
```

---

# 20. Asset Manifest

Create a machine-readable manifest.

Example:

```json
{
  "id": "atlantic-email-001",
  "title": "Newsletter Campaign",
  "category": ["email-marketing", "campaign-strategy"],
  "source": "Email Designs",
  "company": "Atlantic Training",
  "files": [
    "/assets/projects/email/atlantic-newsletter-01.webp"
  ],
  "verifiedMetrics": [],
  "notes": "Do not invent performance data."
}
```

---

# 21. Accessibility

Target WCAG 2.1 AA minimum.

Required:

- semantic HTML
- visible focus states
- keyboard navigation
- meaningful alt text
- adequate contrast
- accessible forms
- reduced motion
- logical heading order
- descriptive buttons
- accessible carousels

---

# 22. Performance

Target Lighthouse:

```text
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

Prioritize:

- server rendering
- responsive images
- font optimization
- lazy loading
- reduced JS
- route code splitting
- no oversized animation bundles

---

# 23. SEO

Each page needs:

- title
- description
- canonical
- OG image
- structured headings
- image alt text

Use schema where helpful:

```text
Person
WebSite
CreativeWork
ProfessionalService
```

---

# 24. Responsive Behavior

The design must be intentionally redesigned for mobile.

Do not simply stack desktop sections.

On mobile:

- hero copy appears first
- MacBook mockup becomes a contained visual
- floating cards reduce in number
- capabilities become horizontal scroll or two-column chips
- case studies use full-width cards
- decorative motion is reduced
- CTA remains visible
- body copy remains readable

---

# 25. QA Checklist

Before launch:

- [ ] All work links checked
- [ ] All external links valid
- [ ] No invented metrics
- [ ] Latest CV data used
- [ ] Core Biz Hub promotion represented correctly
- [ ] All image assets optimized
- [ ] All pages keyboard accessible
- [ ] Reduced motion tested
- [ ] Mobile layout tested
- [ ] Tablet layout tested
- [ ] Safari tested
- [ ] Chrome tested
- [ ] Edge tested
- [ ] Forms tested
- [ ] Download CV works
- [ ] Case study links work
- [ ] Lighthouse targets reviewed
- [ ] Metadata reviewed
- [ ] No placeholder copy remains

---

# 26. First Developer Deliverables

Before full implementation, deliver:

1. asset inventory
2. work-link inventory
3. proposed sitemap
4. selected project shortlist
5. content gaps
6. proposed tech stack
7. design token sheet
8. homepage wireframe
9. hero prototype
10. component plan
11. milestone schedule

Do not build the entire site before the content and project hierarchy are approved.

---

# 27. Definition of Success

The finished portfolio should make a hiring manager understand within seconds that Suzette can:

- think strategically
- design well
- execute campaigns
- manage marketing systems
- work across teams
- understand analytics
- manage CRM/automation
- communicate professionally
- produce polished digital work

The site should feel like the portfolio of a **high-performing multidisciplinary marketer with design fluency**, not a generic marketing template.
