import { projects } from "@/data/projects";
import { site } from "@/data/site";

const description =
  "Suzette Sun is a digital marketing professional specializing in campaigns, email marketing, CRM and automation, content, and marketing operations. View real campaign work and case studies.";

export const seoDescription = description;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.fullName,
  alternateName: site.name,
  jobTitle: "Digital Marketing Professional",
  description,
  email: `mailto:${site.email}`,
  telephone: site.phoneE164,
  image: `${site.url}/assets/photos/suzette-headshot.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Imus",
    addressRegion: "Cavite",
    addressCountry: "PH",
  },
  knowsAbout: [
    "Digital Marketing",
    "Email Marketing",
    "Campaign Strategy",
    "Marketing Operations",
    "CRM & Automation",
    "Content Marketing",
    "SEO",
    "Social Media Marketing",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Pamantasan ng Lungsod ng Maynila",
  },
  sameAs: [site.linkedin],
  url: site.url,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description,
  inLanguage: "en-PH",
  publisher: { "@id": `${site.url}/#person` },
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}/#webpage`,
  url: site.url,
  name: `${site.name} | Digital Marketing Portfolio`,
  description,
  inLanguage: "en-PH",
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#person` },
  mainEntity: { "@id": `${site.url}/#person` },
  dateModified: site.lastUpdated,
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#service`,
  name: `${site.name} — Digital Marketing & Campaign Operations`,
  description: site.positioning,
  url: site.url,
  image: `${site.url}/assets/og.jpg`,
  email: site.email,
  telephone: site.phoneE164,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Imus",
    addressRegion: "Cavite",
    addressCountry: "PH",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Email Marketing",
    "Campaign Strategy",
    "Marketing Operations",
    "CRM Automation",
    "Content Marketing",
    "SEO",
  ],
  provider: { "@id": `${site.url}/#person` },
};

export const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${site.url}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: site.url,
    },
  ],
};

export const workItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${site.url}/#work-list`,
  name: "Selected marketing work",
  itemListElement: projects
    .filter((project) => project.featured)
    .map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        creator: { "@id": `${site.url}/#person` },
        ...(project.externalUrl ? { url: project.externalUrl } : {}),
      },
    })),
};

export const jsonLdBlocks = [
  personJsonLd,
  websiteJsonLd,
  profilePageJsonLd,
  professionalServiceJsonLd,
  breadcrumbJsonLd,
  workItemListJsonLd,
];
