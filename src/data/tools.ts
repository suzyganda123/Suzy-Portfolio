export type Tool = {
  name: string;
  icon?: string; // real brand SVG in /assets/icons, when the brand allows distribution
};

export const tools: Tool[] = [
  { name: "Mailchimp", icon: "/assets/icons/mailchimp.svg" },
  { name: "HubSpot", icon: "/assets/icons/hubspot.svg" },
  { name: "GoHighLevel" },
  { name: "Google Analytics", icon: "/assets/icons/googleanalytics.svg" },
  { name: "Google Tag Manager", icon: "/assets/icons/googletagmanager.svg" },
  { name: "Canva" },
  { name: "Meta", icon: "/assets/icons/meta.svg" },
  { name: "WordPress", icon: "/assets/icons/wordpress.svg" },
  { name: "Figma", icon: "/assets/icons/figma.svg" },
];
