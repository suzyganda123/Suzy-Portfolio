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
    location: "Remote",
    roles: [
      {
        title: "Marketing Associate | Email & Campaigns",
        period: "Jan 2024 - Jul 2026",
        points: [
          "Owned end-to-end email campaigns in Mailchimp and HubSpot: newsletters, promos, and automated follow-ups.",
          "Managed segmentation, audience lists, and CRM data to keep sends targeted and compliant.",
          "Ran A/B tests on subject lines and layouts; tracked performance with UTM parameters and Google Analytics.",
          "Built website content, landing pages, lead magnets, and resource hubs that fed the email pipeline.",
          "Optimized YouTube metadata, chapters, and content structure for search.",
        ],
      },
    ],
    tools: ["Mailchimp", "HubSpot", "Google Analytics", "WordPress", "Canva"],
  },
  {
    company: "Core Biz Hub",
    location: "Singapore, Remote",
    roles: [
      {
        title: "Marketing Lead",
        period: "Dec 2024 - Jan 2026",
        points: [
          "Led digital marketing planning and campaign execution across social, content, and web.",
          "Built and managed automated registration workflows and event funnels in GoHighLevel.",
          "Trained and supported a new marketing associate on tools, processes, and campaign delivery.",
        ],
      },
      {
        title: "Marketing Associate",
        period: "Sep 2023 - Dec 2024",
        points: [
          "Ran social media, content strategy, and customer communications.",
          "Managed CRM data and marketing processes across campaigns.",
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
        period: "Apr 2020 - Dec 2022",
        points: [
          "Covered digital marketing, SEO, website content, social media, and branding.",
          "Produced graphic design and video editing for campaign assets.",
        ],
      },
    ],
    metric: { value: "+30%", label: "website traffic increase" },
    tools: ["SEO", "Content", "Design", "Video"],
  },
  {
    company: "Upwork",
    location: "Remote",
    roles: [
      {
        title: "Virtual Assistant / Digital Marketing Assistant",
        period: "Sep 2021 - Dec 2022",
        points: [
          "Supported clients with admin, social media, content, and email management.",
          "Handled lead generation, research, calendar management, and CRM updates.",
        ],
      },
    ],
    tools: ["Canva", "CRM", "Research"],
  },
];

export const education = {
  school: "Polytechnic University of the Philippines",
  degree: "BSBA, Marketing Management",
  period: "2019 - 2023",
};
