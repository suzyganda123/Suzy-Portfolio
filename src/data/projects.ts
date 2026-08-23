export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Accent = "coral" | "orange" | "pink" | "violet" | "blue" | "cyan" | "lime";

export type WorkLink = {
  label: string;
  url: string;
  kind: "landing" | "about" | "course" | "blog";
};

export type Project = {
  slug: string;
  title: string;
  client?: string;
  company?: string;
  year?: string;
  category: string[];
  role: string[];
  tools: string[];
  summary: string;
  challenge?: string;
  strategy?: string;
  execution?: string;
  deliverables?: string[];
  results?: string[];
  images: ProjectImage[];
  externalUrl?: string;
  workLinks?: WorkLink[];
  featured: boolean;
  accent: Accent;
  sourceFolder?: string;
};

export const projects: Project[] = [
  {
    slug: "coffee-and-compliance",
    title: "Coffee & Compliance Webinar Campaign",
    company: "Atlantic Training",
    year: "2026",
    category: ["email-marketing", "campaign-strategy", "landing-page"],
    role: ["Email design", "Campaign execution", "Registration page", "Automation"],
    tools: ["Mailchimp", "HubSpot", "Canva", "Google Analytics"],
    summary:
      "Multi-touch email campaign and registration page for a live webinar on OSHA's final rule for PPE fit in construction.",
    challenge:
      "Drive qualified registrations for a compliance webinar on a dense regulatory topic, OSHA's updated PPE fit requirements, without losing the audience to dry subject matter.",
    strategy:
      "A sequenced email campaign with segmented sends, a dedicated registration landing page, and automated reminder flows, supported by social promotion and UTM tracking end to end.",
    execution:
      "Designed and built the email series in Mailchimp and HubSpot, structured the registration page, set up automated follow-ups, and tracked performance through UTM parameters and Google Analytics.",
    deliverables: [
      "Event email series",
      "Registration landing page",
      "Automated reminder flow",
      "Social promotion assets",
      "UTM tracking plan",
    ],
    images: [
      {
        src: "/assets/work/email-coffee-compliance.webp",
        width: 1155,
        height: 2505,
        alt: "Coffee & Compliance webinar email design with speaker lineup and registration call to action",
      },
    ],
    externalUrl: "https://www.atlantictraining.com/coffee-and-compliance-registration-page",
    featured: true,
    accent: "coral",
    sourceFolder: "Email Designs",
  },
  {
    slug: "atlantic-resource-hub",
    title: "Resource Hub & Web Content System",
    company: "Atlantic Training",
    year: "2024-2026",
    category: ["web-design", "landing-page", "seo", "lead-magnet"],
    role: ["Content structure", "Page content", "Lead magnet library", "SEO"],
    tools: ["WordPress", "Canva", "Google Analytics"],
    summary:
      "Web content and page structure for Atlantic Training's resource hub, checklist landings, course pages, blog, and company story, all tied to lead magnets and SEO.",
    challenge:
      "Turn a growing library of safety guides and checklists into an organized, searchable hub that supports lead generation across landing pages, courses, and blog posts.",
    strategy:
      "Structured the hub around filterable resource categories, paired each guide with a focused landing page, and supported discovery with SEO-driven blog content and internal links.",
    execution:
      "Built and maintained page content for the resource hub, EAP checklist landing, Safety Toolbox, Our Story, course pages, and blog articles, with consistent metadata and cross-linking.",
    deliverables: [
      "Resource hub",
      "Checklist landing pages",
      "Safety Toolbox page",
      "Our Story page",
      "Course page content",
      "Blog articles",
    ],
    workLinks: [
      { label: "Resource Hub", url: "https://www.atlantictraining.com/resource-hub", kind: "landing" },
      {
        label: "EAP Pre-Season Audit",
        url: "https://www.atlantictraining.com/checklist/eap-pre-season-audit",
        kind: "landing",
      },
      {
        label: "Coffee & Compliance Page",
        url: "https://www.atlantictraining.com/coffee-and-compliance-registration-page",
        kind: "landing",
      },
      { label: "Safety Toolbox", url: "https://www.atlantictraining.com/safety-toolbox", kind: "landing" },
      { label: "Our Story", url: "https://www.atlantictraining.com/our-story", kind: "about" },
      {
        label: "Fall Prevention Course",
        url: "https://www.atlantictraining.com/course/fall-prevention-canada-training-course",
        kind: "course",
      },
      { label: "Blog", url: "https://www.atlantictraining.com/blog/", kind: "blog" },
      {
        label: "EAP Template Post",
        url: "https://www.atlantictraining.com/blog/emergency-action-plan-template/",
        kind: "blog",
      },
      {
        label: "Safety Culture Post",
        url: "https://www.atlantictraining.com/blog/build-safety-culture-small-teams/",
        kind: "blog",
      },
    ],
    images: [
      {
        src: "/assets/work/guide-complete-emergency-action-plan-template.webp",
        width: 1347,
        height: 1683,
        alt: "Cover of The Complete Emergency Action Plan Template guide for Atlantic Training",
      },
    ],
    externalUrl: "https://www.atlantictraining.com/resource-hub",
    featured: true,
    accent: "blue",
    sourceFolder: "Work links",
  },
  {
    slug: "lifecycle-email-campaigns",
    title: "Lifecycle & Promo Email Campaigns",
    company: "Atlantic Training",
    year: "2024-2026",
    category: ["email-marketing", "crm", "campaign-strategy"],
    role: ["Email design", "Segmentation", "A/B testing", "Scheduling"],
    tools: ["Mailchimp", "HubSpot", "Canva"],
    summary:
      "Seasonal promo systems for existing customers: Back to School seat boosts, Sept–Oct course bundles, and 90-day access campaigns, each built on segmented lists and tracked sends.",
    challenge:
      "Keep a large training catalog visible to different audience segments without fatiguing the list.",
    strategy:
      "Timed seasonal promotions around buying cycles, clear offer tiers for existing customers, and A/B-tested subject lines and layouts.",
    execution:
      "Designed multi-page promo creatives and email templates, managed audience lists, and scheduled sends through Mailchimp and HubSpot with UTM tracking.",
    deliverables: [
      "Back to School seat-boost promo",
      "Sept–Oct custom course bundle promo",
      "Course access campaign",
      "Segmented lists",
      "A/B test plan",
    ],
    images: [
      {
        src: "/assets/work/email-back-to-school.webp",
        width: 951,
        height: 1654,
        alt: "Back to School workforce seat-boost promo for Atlantic Training existing customers",
      },
      {
        src: "/assets/work/email-fall-promo.webp",
        width: 977,
        height: 1400,
        alt: "September and October custom course bundle promo for Atlantic Training",
      },
      {
        src: "/assets/work/email-course-access.webp",
        width: 1400,
        height: 2434,
        alt: "Course access campaign email showing six training course tiles with discount offer",
      },
    ],
    featured: true,
    accent: "orange",
    sourceFolder: "Email Designs",
  },
  {
    slug: "safety-social-system",
    title: "Safety Content Social System",
    company: "Atlantic Training",
    year: "2025-2026",
    category: ["social-media", "content-marketing"],
    role: ["Content strategy", "Design", "Scheduling", "Copywriting"],
    tools: ["Canva", "Meta"],
    summary:
      "An always-on social content system for safety education: problem-aware posts, course launches, company updates, and editorial series in a consistent brand voice.",
    challenge:
      "Make regulatory safety content stop-worthy in a social feed without diluting a 20-year training brand.",
    strategy:
      "A repeatable editorial system: bold question-led hooks, a navy and gold brand frame, and series templates that scale across topics.",
    execution:
      "Wrote, designed, and scheduled posts across campaigns, from new course announcements to compliance education series.",
    deliverables: ["Editorial post series", "Course launch posts", "Company updates", "Campaign templates"],
    images: [
      {
        src: "/assets/work/social/social-hidden-costs.webp",
        width: 1080,
        height: 1080,
        alt: "Social post about the hidden costs of poor safety training",
      },
      {
        src: "/assets/work/social/social-safety-shift.webp",
        width: 1080,
        height: 1080,
        alt: "Editorial social post titled The Safety Shift",
      },
      {
        src: "/assets/work/social/social-new-course.webp",
        width: 1080,
        height: 1080,
        alt: "New course announcement post for sexual harassment prevention training",
      },
      {
        src: "/assets/work/social/social-whats-new.webp",
        width: 1080,
        height: 1080,
        alt: "Monthly company update post highlighting new courses",
      },
    ],
    featured: true,
    accent: "violet",
    sourceFolder: "Social Posts",
  },
  {
    slug: "lead-magnet-library",
    title: "Lead Magnet Library",
    company: "Atlantic Training",
    year: "2025-2026",
    category: ["lead-magnet", "content-marketing"],
    role: ["Content creation", "Layout design", "Landing page support"],
    tools: ["Canva", "WordPress"],
    summary:
      "A growing library of branded guides, field checklists, protocol cards, and scorecards, each designed to earn downloads and feed the resource hub.",
    deliverables: [
      "Beat the Heat field safety checklist",
      "Heat Stress Compliance checklist",
      "Workplace Violence warning signs card",
      "Emergency Action Plan template",
      "EAP Pre-Season Audit checklist",
      "New Hire Safety Onboarding checklist",
      "Safety Program Scorecard",
      "Executive Safety Leadership guide",
      "Work Vehicle Safety Audit",
      "Manager's Check-In Guide",
    ],
    images: [
      {
        src: "/assets/work/guide-beat-the-heat-field-safety-checklist.webp",
        width: 1400,
        height: 1751,
        alt: "Cover of the Beat the Heat field safety checklist lead magnet",
      },
      {
        src: "/assets/work/guide-heat-stress-compliance-checklist.webp",
        width: 1400,
        height: 1751,
        alt: "Cover of the Heat Stress Compliance checklist",
      },
      {
        src: "/assets/work/guide-workplace-violence-warning-signs-card.webp",
        width: 1400,
        height: 1083,
        alt: "Cover of the Workplace Violence warning signs and response protocol card",
      },
      {
        src: "/assets/work/guide-eap-pre-season-audit-checklist-2.webp",
        width: 1122,
        height: 1402,
        alt: "Cover of the EAP Pre-Season Audit checklist lead magnet",
      },
    ],
    externalUrl: "https://www.atlantictraining.com/resource-hub",
    featured: false,
    accent: "cyan",
    sourceFolder: "Guides, Checklists, and other Lead Magnets",
  },
  {
    slug: "coreinvest-brand-social",
    title: "Brand Social & Event Funnels",
    company: "Core Biz Hub (CoreInvest Institute)",
    year: "2023-2026",
    category: ["social-media", "crm", "automation"],
    role: ["Content strategy", "Design", "CRM automation", "Event funnels"],
    tools: ["GoHighLevel", "Canva", "Meta"],
    summary:
      "Brand social content and automated event funnels for a Singapore investment education brand, including registration workflows built in GoHighLevel.",
    deliverables: ["Brand social posts", "Event registration funnels", "Automated follow-ups", "Customer communications"],
    images: [
      {
        src: "/assets/work/social/social-cii-vesak.webp",
        width: 1080,
        height: 1080,
        alt: "Vesak Day greeting card designed for CoreInvest Institute",
      },
    ],
    featured: false,
    accent: "pink",
    sourceFolder: "Social Posts",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);
export const caseStudy = projects.find((p) => p.slug === "coffee-and-compliance")!;
