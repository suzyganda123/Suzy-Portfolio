import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/hero/Hero";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { WorkSection } from "@/components/sections/WorkSection";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2.5 focus:text-surface"
      >
        Skip to work
      </a>
      <SiteHeader />
      <main className="w-full overflow-x-clip">
        <Hero />
        <CapabilityStrip />
        <WorkSection />
        <CaseStudy />
        <Services />
        <About />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
