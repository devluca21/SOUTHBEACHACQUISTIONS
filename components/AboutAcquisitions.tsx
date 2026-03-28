"use client";

import Image from "next/image";
import { SOUTH_DR_COVERAGE_AREAS } from "@/lib/coverage-areas";
import { RevealSection, RevealChild } from "./RevealSection";

const aboutImage = "/hero-poster.jpg";

export function AboutAcquisitions() {
  return (
    <RevealSection
      id="acquisitions"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(0,31,92,0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="relative max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          <RevealChild className="lg:col-span-5 xl:col-span-5">
            <h2 className="heading-featured text-3xl md:text-4xl lg:text-5xl text-ink text-balance">
              Built for tourism tailwinds
            </h2>
            <p className="text-slate-muted mt-6 text-base md:text-lg leading-relaxed">
              The Dominican south—{SOUTH_DR_COVERAGE_AREAS}—is scaling with new airlift,
              hospitality flags, and infrastructure that pull international visitors
              year-round. South Beach
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

          <RevealChild delay={0.12} className="lg:col-span-7 xl:col-span-7">
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              <div
                className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-ink/12 via-accent-soft/40 to-ink/5 opacity-90 blur-xl md:blur-2xl scale-105"
                aria-hidden
              />
              <figure className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[2rem] border border-white/80 bg-white shadow-[0_28px_90px_-20px_rgba(0,31,92,0.45),0_12px_40px_-12px_rgba(0,31,92,0.2)] ring-1 ring-ink/10">
                <div
                  className="relative w-full h-[min(88vw,420px)] sm:h-[min(78vw,480px)] md:h-[min(70vw,520px)] lg:h-[min(58vh,680px)] lg:min-h-[440px]"
                >
                  <Image
                    src={aboutImage}
                    alt="Sunset at a coastal lighthouse bar on the Dominican shore—palms, turquoise water, and warm sky"
                    fill
                    priority
                    className="object-cover object-center transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-[1.03]"
                    sizes="(min-width: 1280px) 780px, (min-width: 1024px) 58vw, (min-width: 640px) 90vw, 100vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-70"
                    aria-hidden
                  />
                </div>
              </figure>
            </div>
          </RevealChild>
        </div>
      </div>
    </RevealSection>
  );
}
