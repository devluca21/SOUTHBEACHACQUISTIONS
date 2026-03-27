import { Hero } from "@/components/Hero";
import { Verticals } from "@/components/Verticals";
import { StatsBar } from "@/components/StatsBar";
import { AboutAcquisitions } from "@/components/AboutAcquisitions";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { SubmitDealForm } from "@/components/SubmitDealForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Verticals />
      <StatsBar />
      <AboutAcquisitions />
      <PortfolioSection />
      <WorkflowSection />
      <SubmitDealForm />
    </main>
  );
}
