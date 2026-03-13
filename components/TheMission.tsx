"use client";

import { RevealSection } from "./RevealSection";

export function TheMission() {
  return (
    <RevealSection className="bg-foreground py-24 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 text-center">
        <blockquote className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          We don&apos;t wait for the market to move. We move inventory to the right capital.
        </blockquote>
        <p className="font-sans text-white/80 mt-6 text-lg">
          South Beach Acquisitions — the bridge between unsold condos and investors ready to deploy.
        </p>
      </div>
    </RevealSection>
  );
}
