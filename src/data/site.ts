export const site = {
  name: "Suzette Sun",
  fullName: "Suzette Elyza S. Sun",
  role: "Digital Marketing | Campaigns | Marketing Operations",
  email: "suzetteelyza2002@gmail.com",
  phone: "09167014456",
  location: "Imus, Cavite, Philippines",
  linkedin: "https://www.linkedin.com/in/suzettesun",
  positioning:
    "Multidisciplinary marketing professional who plans, builds, and runs email campaigns, CRM systems, content, and SEO, from brief to report.",
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

/** Core expertise columns from the CV, used in Services. */
export const expertiseClusters = [
  {
    name: "Campaigns & Growth",
    items: [
      "Campaign strategy",
      "Email marketing",
      "Audience segmentation",
      "A/B testing",
      "Lead generation",
      "Customer engagement",
    ],
  },
  {
    name: "Marketing Operations",
    items: [
      "CRM management",
      "Marketing automation",
      "Database management",
      "Campaign workflows",
      "UTM tracking",
      "Reporting & analysis",
    ],
  },
  {
    name: "Content & Creative",
    items: [
      "Content strategy",
      "Social media",
      "Graphic design",
      "Email design",
      "Lead magnets",
      "Landing pages",
      "Website content",
    ],
  },
  {
    name: "Digital & SEO",
    items: [
      "SEO",
      "YouTube optimization",
      "Website management",
      "Analytics",
      "Conversion-focused content",
    ],
  },
] as const;
