import Image from "next/image";

const shown = [
  { name: "Canva", icon: "/assets/icons/canva.svg" },
  { name: "Meta", icon: "/assets/icons/meta.svg" },
  { name: "Google Ads", icon: "/assets/icons/googleads.svg" },
  { name: "Google Analytics", icon: "/assets/icons/googleanalytics.svg" },
  { name: "Mailchimp", icon: "/assets/icons/mailchimp.svg" },
  { name: "HubSpot", icon: "/assets/icons/hubspot.svg" },
] as const;

export function ToolsPanel() {
  return (
    <div className="glass-panel rounded-2xl px-4 pb-3.5 pt-3">
      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
        Tools &amp; Platforms
      </p>
      <ul
        className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-white/70 bg-white/75 px-3.5 py-3 sm:gap-4"
        aria-label="Tools and platforms"
      >
        {shown.map((tool) => (
          <li key={tool.name} className="flex items-center" title={tool.name}>
            <Image
              src={tool.icon}
              width={26}
              height={26}
              alt={tool.name}
              className="size-[20px] sm:size-[24px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
