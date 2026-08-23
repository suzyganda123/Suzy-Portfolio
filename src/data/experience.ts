export type Role = {
  title: string;
  period: string;
  points: string[];
};

export type ExperienceEntry = {
  company: string;
  location?: string;
  roles: Role[];
  metric?: { value: string; label: string };
  tools: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Atlantic Training",
    location: "Remote · United States",
    roles: [
      {
        title: "Marketing Associate | Email & Campaigns",
        period: "Jan 2024 – Jul 2026",
        points: [
          "Owned end-to-end email campaigns in Mailchimp: newsletters, seasonal promos, webinar sequences, and automated follow-ups.",
          "Managed HubSpot marketing lists, segmentation, and lead hygiene so sends stayed targeted and compliant.",
          "Built tracking with Google Analytics and UTM parameters; supported A/B tests on subject lines and layouts.",
          "Developed newsletters, landing pages, resource hubs, and lead magnets that fed the campaign pipeline.",
          "Optimized YouTube metadata, chapters, and content structure for search and watch time.",
        ],
      },
    ],
    tools: ["Mailchimp", "HubSpot", "Google Analytics", "WordPress", "Canva", "YouTube Studio"],
  },
  {
    company: "Core Biz Hub",
    location: "Singapore · Remote",
    roles: [
      {
        title: "Marketing Lead",
        period: "Dec 2024 – Jan 2026",
        points: [
          "Led digital marketing initiatives and content strategy across social, website, and promotional channels.",
          "Managed CRM and marketing automation in GoHighLevel, including registration workflows and event funnels.",
          "Oversaw digital content and Meta campaigns; trained a new marketing associate on tools and delivery.",
        ],
      },
      {
        title: "Marketing Associate",
        period: "Sep 2023 – Dec 2024",
        points: [
          "Created digital content across social and website platforms for CoreInvest Institute.",
          "Managed CRM automation and supported Meta campaigns and customer communications.",
        ],
      },
    ],
    tools: ["GoHighLevel", "Meta", "Canva", "CRM"],
  },
  {
    company: "CyberWrath",
    location: "Remote",
    roles: [
      {
        title: "Marketing Expert",
        period: "Apr 2020 – Dec 2022",
        points: [
          "Led social media planning, website updates, and analytics for a growing digital brand.",
          "Researched emerging technologies to improve digital effectiveness and campaign reach.",
          "Created articles and content that lifted engagement; increased website traffic by 30% through content optimization.",
        ],
      },
    ],
    metric: { value: "+30%", label: "website traffic increase" },
    tools: ["SEO", "Content", "Social", "Analytics"],
  },
  {
    company: "Upwork",
    location: "Remote · International",
    roles: [
      {
        title: "Virtual Assistant / Digital Marketing Assistant",
        period: "Sep 2021 – Dec 2022",
        points: [
          "Supported international clients as a legal VA and digital marketing assistant.",
          "Managed schedules, communications, and client calls alongside SEO tasks and social accounts.",
        ],
      },
    ],
    tools: ["Canva", "CRM", "SEO", "Research"],
  },
];

export const education = {
  school: "Pamantasan ng Lungsod ng Maynila",
  schoolAlt: "University of the City of Manila",
  degree: "Bachelor of Science in Psychology",
  honor: "Magna Cum Laude",
  period: "2019 – 2023",
  honors: ["DOST-SEI RA 7837 Scholar", "Consistent Dean’s Lister"],
};

export const professionalLicenses = [
  {
    title: "Registered Psychometrician (RPm)",
    issuer: "Professional Regulation Commission (PRC)",
    date: "August 2024",
  },
  {
    title: "Certified Human Resource Associate (CHRA)",
    issuer: "Human Resource Association of the Philippines (HREAP)",
    date: "February 2024",
  },
] as const;

export const developmentCerts = [
  "HubSpot Academy — YouTube Marketing Strategy & Optimization",
  "Coursera — Digital Marketing & E-commerce Fundamentals",
  "Udemy — WordPress & SEO Masterclass",
  "Udemy — Social Media Marketing Mastery",
  "Udemy — Canva & AI Mastery",
] as const;
