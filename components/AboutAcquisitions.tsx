"use client";

import Image from "next/image";
import { RevealSection, RevealChild } from "./RevealSection";

const aboutImage =
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80";

export function AboutAcquisitions() {
  return (
    <RevealSection id="acquisitions" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <RevealChild>
            <h2 className="heading-featured text-3xl md:text-4xl lg:text-5xl text-ink text-balance">
              Built for tourism tailwinds
            </h2>
            <p className="text-slate-muted mt-6 text-base md:text-lg leading-relaxed">
              The southeast coast of the Dominican Republic is scaling—new airlift, hospitality flags,
              and infrastructure that pull international visitors year-round. South Beach
              Acquisitions concentrates on{" "}
              <strong className="text-ink font-semibold">
                development sites and commercial rental inventory
              </strong>{" "}
              positioned to capture that demand with underwriting built for real downside protection.
            </p>
            <p className="text-slate-muted mt-4 text-base md:text-lg leading-relaxed">
              Our fund marries local execution with institutional reporting so you get clarity on ROI,
              deployment pacing, and exit strategy—not just a story about the beach.
            </p>
          </RevealChild>

          <RevealChild
            delay={0.12}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-slate-200"
          >
            <Image
              src={aboutImage}
              alt="Southeast Dominican Republic coastal development"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </RevealChild>
        </div>
      </div>
    </RevealSection>
  );
}
