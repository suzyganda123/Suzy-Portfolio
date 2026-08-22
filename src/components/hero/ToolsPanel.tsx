import Image from "next/image";
import { tools } from "@/data/tools";

export function ToolsPanel() {
  const withIcons = tools.filter((t) => t.icon);
  return (
    <div className="glass-panel relative z-[1] w-full min-w-[280px] rounded-xl px-5 py-3.5 sm:min-w-[320px]">
      <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
        Tools &amp; Platforms
      </p>
      <ul className="mt-3 flex items-center justify-center gap-4 sm:gap-5" aria-label="Tools and platforms">
        {withIcons.map((tool) => (
          <li key={tool.name} className="group relative flex items-center" title={tool.name}>
            <Image
              src={tool.icon!}
              width={22}
              height={22}
              alt={tool.name}
              className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
