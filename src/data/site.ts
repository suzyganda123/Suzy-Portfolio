export const site = {
  name: "Suzette Sun",
  fullName: "Suzette Elyza S. Sun",
  role: "Digital Marketing | Campaigns | Content | Marketing Operations",
  email: "suzetteelyza2002@gmail.com",
  phone: "09167014456",
  /** E.164 for schema.org and international crawlers */
  phoneE164: "+639167014456",
  location: "Imus, Cavite, Philippines",
  linkedin: "https://www.linkedin.com/in/suzettesun",
  /** ISO-8601 datetime for schema.org dateModified (Google rejects date-only) */
  lastUpdated: "2026-09-07T20:00:00+08:00",
  positioning:
    "Multidisciplinary digital marketing professional who takes campaigns from planning through launch — social, email, CRM, automation, landing pages, SEO, and analytics — with international teams.",
  tagline: "Always learning. Always growing.",
  cvUrl: "/assets/Suzette-Sun-CV.pdf",
  url: "https://suzettesun.com",
  logos: {
    /** Dark mark for cream / light surfaces (`logolight.png`) */
    light: "/assets/brand/logo-light.webp",
    /** White mark for dark surfaces (`logodark.png`) */
    dark: "/assets/brand/logo-dark.webp",
    /** Gradient mark for accents (`mainlogo.png`) */
    color: "/assets/brand/logo-color.webp",
  },
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
] as const;

export const capabilities = [
  { name: "Campaign Strategy", color: "coral" },
  { name: "Email Marketing", color: "orange" },
  { name: "Content Creation", color: "pink" },
  { name: "Marketing Operations", color: "blue" },
  { name: "CRM & Automation", color: "violet" },
  { name: "Web & Landing Pages", color: "cyan" },
] as const;

export const servicesStrip = [
  "Email Marketing",
  "Social Media",
  "Content Creation",
  "CRM & Automation",
  "Web & Landing Pages",
  "SEO",
  "Analytics",
  "Campaign Operations",
  "Virtual Assistance",
] as const;

/** Core expertise columns from the CV. */
export const expertiseClusters = [
  {
    name: "Campaigns & Content",
    items: [
      "Campaign planning",
      "Content strategy",
      "Social media",
      "Copy support",
      "Audience engagement",
      "Cross-channel execution",
    ],
  },
  {
    name: "Email & CRM",
    items: [
      "Mailchimp",
      "HubSpot",
      "GoHighLevel",
      "Newsletters",
      "Segmentation",
      "Automation",
    ],
  },
  {
    name: "Web & Conversion",
    items: [
      "Landing pages",
      "Website content",
      "WordPress",
      "Lead magnets",
      "Resource hubs",
      "Campaign QA",
    ],
  },
  {
    name: "SEO, Analytics & AI",
    items: [
      "SEO",
      "YouTube optimization",
      "Google Analytics",
      "UTM tracking",
      "A/B testing",
      "AI-assisted research",
    ],
  },
] as const;
