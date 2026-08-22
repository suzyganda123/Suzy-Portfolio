export const site = {
  name: "Suzette Sun",
  fullName: "Suzette Elyza S. Sun",
  role: "Digital Marketing | Campaigns | Marketing Operations",
  email: "suzetteelyza@gmail.com",
  phone: "+63 956 379 9236",
  location: "Dasmariñas, Cavite, Philippines",
  positioning:
    "I help brands stand out, connect with the right audience, and grow through strategy, creativity, and data-driven marketing.",
  cvUrl: "/assets/Suzette-Sun-CV.pdf",
  url: "https://suzettesun.com",
  logos: {
    light: "/assets/brand/logo-light.webp",
    dark: "/assets/brand/logo-dark.webp",
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
