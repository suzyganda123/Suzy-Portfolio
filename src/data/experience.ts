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

/** Experience aligned to Suzette_Sun_CV.pdf (Sep 2026). */
export const experience: ExperienceEntry[] = [
  {
    company: "Invest Intelligent Pte Ltd",
    location: "Singapore · Remote",
    roles: [
      {
        title: "Marketing Team Lead",
        period: "Sep 2023 – Present",
        points: [
          "Lead digital marketing initiatives, campaign execution, content planning, social media, website marketing, CRM, automation, and customer communications across recurring and promotional campaigns.",
          "Manage marketing workflows in GoHighLevel, including event funnels, registration processes, automated messaging, campaign databases, and customer follow-up.",
          "Coordinate campaign priorities, content requirements, timelines, and execution across multiple digital channels.",
          "Support and train marketing staff on planning, automation tools, social media, customer relations, and database management.",
          "Maintain organized marketing processes and documentation to improve consistency and day-to-day execution.",
        ],
      },
    ],
    tools: ["GoHighLevel", "Meta", "Canva", "n8n", "CRM"],
  },
  {
    company: "Atlantic Training",
    location: "United States · Contract",
    roles: [
      {
        title: "Contract Marketing Associate",
        period: "Nov 2024 – Aug 2026",
        points: [
          "Managed recurring social media content across Facebook, LinkedIn, and X for a U.S. professional and compliance-focused audience.",
          "Built and supported email marketing campaigns in Mailchimp, including Coffee & Compliance, promotional emails, segmentation, scheduling, QA, and deployment.",
          "Designed and coordinated landing pages, campaign pages, lead magnets, resource hubs, and other marketing assets from brief through launch.",
          "Managed HubSpot marketing lists and customer data for segmentation, targeting, exports, and database organization.",
          "Maintained Google Analytics and UTM campaign tracking, including troubleshooting tracking inconsistencies.",
          "Collaborated with copywriters, developers, production, operations, and leadership on cross-channel campaign launches.",
        ],
      },
    ],
    tools: ["Mailchimp", "HubSpot", "Google Analytics", "WordPress", "Canva", "YouTube Studio"],
  },
  {
    company: "CyberWrath",
    location: "Remote",
    roles: [
      {
        title: "Marketing Expert",
        period: "Apr 2020 – Dec 2022",
        points: [
          "Led monthly social media planning, website updates, marketing research, and analytics.",
          "Created website articles and social content; researched digital marketing trends and emerging technologies.",
          "Increased website traffic by 30% through content optimization and strategic marketing initiatives.",
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
          "Supported international clients with legal virtual assistance, digital marketing, research, scheduling, and client communications.",
          "Supported SEO activities, social media management, and general remote business operations.",
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
  "Digital Marketing & E-commerce",
  "Digital Marketing Trends",
  "YouTube Strategy & SEO",
  "WordPress & SEO Masterclass",
  "Social Media Marketing Mastery",
  "Canva Mastery | AI & GPT",
] as const;
