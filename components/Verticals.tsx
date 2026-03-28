"use client";

import Link from "next/link";
import { RevealSection, RevealChild } from "./RevealSection";
import { Home, Building2, KeyRound, HardHat, Users, ArrowRight } from "lucide-react";
import { SOUTH_DR_COVERAGE_REGION } from "@/lib/coverage-areas";
import { VERTICALS, type VerticalSlug } from "@/lib/verticals-data";
import type { LucideIcon } from "lucide-react";

const iconBySlug: Record<VerticalSlug, LucideIcon> = {
  "condo-rentals": Home,
  "commercial-rentals": Building2,
  "property-sales": KeyRound,
  development: HardHat,
  "investor-groups-bulk": Users,
};

export function Verticals() {
  return (
    <RevealSection id="verticals" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-6 md:px-10">
        <RevealChild className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="heading-featured text-3xl md:text-4xl lg:text-5xl text-ink">
            The Verticals
          </h2>
          <p className="text-slate-muted mt-4 text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Rentals, sales, development, and investor access along {SOUTH_DR_COVERAGE_REGION},
            coordinated through our developer and agency network.
          </p>
        </RevealChild>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 items-stretch">
          {VERTICALS.map((item, i) => {
            const Icon = iconBySlug[item.slug];
            return (
              <RevealChild key={item.slug} delay={i * 0.06} className="h-full w-full">
                <article className="group/vertical-card relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 md:p-8 shadow-[0_4px_24px_rgba(0,31,92,0.06)] transition-all duration-300 hover:border-ink/25 hover:shadow-[0_12px_40px_rgba(0,31,92,0.12)] hover:-translate-y-0.5">
                  <div
                    className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl"
                    aria-hidden
                  >
                    <div
                      className="absolute inset-y-0 -left-[55%] w-[55%] translate-x-0 bg-gradient-to-r from-transparent via-ink/20 to-transparent opacity-0 transition-opacity duration-200 group-hover/vertical-card:opacity-100 group-hover/vertical-card:animate-vertical-card-sweep"
                    />
                  </div>
                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-ink shadow-inner ring-1 ring-ink/5 transition-transform duration-300 group-hover/vertical-card:scale-105 md:h-14 md:w-14">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg font-extrabold leading-snug tracking-tight text-ink md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-muted">
                      {item.oneLiner}
                    </p>
                    <Link
                      href={`/verticals/${item.slug}`}
                      className="mt-auto pt-5 inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-ink transition-opacity hover:opacity-80 md:text-[0.9375rem]"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                    </Link>
                  </div>
                </article>
              </RevealChild>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
