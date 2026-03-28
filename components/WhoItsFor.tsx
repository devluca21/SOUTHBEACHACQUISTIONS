"use client";

import { SOUTH_DR_COVERAGE_AREAS } from "@/lib/coverage-areas";
import { RevealSection, RevealChild } from "./RevealSection";

export function WhoItsFor() {
  return (
    <RevealSection id="who-its-for" className="py-24 md:py-32 bg-foreground">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <RevealChild delay={0.1} className="mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            Who It&apos;s For
          </h2>
          <p className="font-sans text-white/80 mt-4 text-lg tracking-wide max-w-xl">
            Two sides of the same bridge. We connect them.
          </p>
        </RevealChild>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <RevealChild delay={0.15}>
            <div>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-3">
                Developers & Sellers
              </h3>
              <p className="font-sans text-white/85 text-lg leading-relaxed">
                You have condos or other inventory that isn&apos;t moving. We don&apos;t leave it on the market hoping for a buyer. We take it to our investor network, underwrite it, and get it in front of capital that&apos;s ready to deploy. You get liquidity; we handle the match.
              </p>
            </div>
          </RevealChild>
          <RevealChild delay={0.2}>
            <div>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-white mb-3">
                Investors
              </h3>
              <p className="font-sans text-white/85 text-lg leading-relaxed">
                You want access to off-market and unsold inventory across the south of the Dominican Republic—{SOUTH_DR_COVERAGE_AREAS}—vetted, underwritten, and ready to move. We source it, we structure it, and we bring you opportunities that don&apos;t show up on the open market.
              </p>
            </div>
          </RevealChild>
        </div>
      </div>
    </RevealSection>
  );
}
