import { Hero } from "@/components/Hero";
import { TheMission } from "@/components/TheMission";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhoItsFor } from "@/components/WhoItsFor";
import { LeadGenForm } from "@/components/LeadGenForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <TheMission />
      <WhatWeDo />
      <WhoItsFor />
      <LeadGenForm />
    </main>
  );
}
