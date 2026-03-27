"use client";

import { RevealSection, RevealChild } from "./RevealSection";
import { Home, Building2, KeyRound, HardHat, Users } from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Condo rentals",
    body: "List your condo with us. We market it through our network of active tourists and repeat guests—not just a listing, real demand.",
  },
  {
    icon: Building2,
    title: "Commercial rentals",
    body: "Retail, office, and mixed-use in high-traffic nodes—leased income built for yield where tourism and growth converge.",
  },
  {
    icon: KeyRound,
    title: "Property sales",
    body: "Selling? We handle the legwork and route your deal to our pool of agencies with active agents—maximum reach, less noise for you.",
  },
  {
    icon: HardHat,
    title: "Development",
    body: "Core investor from ground-up, or discounted pre-sales to resell or rent at delivery. You pick the role; we match the economics.",
  },
  {
    icon: Users,
    title: "Investor groups & bulk",
    body: "Groups join the core team on new projects or buy bulk in ongoing ones we promote—structured with our developer and agency relationships.",
  },
];

export function Verticals() {
  return (
    <RevealSection id="verticals" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <RevealChild className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="heading-featured text-3xl md:text-4xl lg:text-5xl text-ink">
            The Verticals
          </h2>
          <p className="text-slate-muted mt-4 text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Rentals, sales, development, and investor access—coordinated through our developer and
            agency network.
          </p>
        </RevealChild>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-5">
          {items.map((item, i) => (
            <RevealChild key={item.title} delay={i * 0.06} className="h-full">
              <article className="group relative h-full flex flex-col rounded-3xl bg-white p-7 md:p-8 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,31,92,0.06)] transition-all duration-300 hover:border-ink/20 hover:shadow-[0_12px_40px_rgba(0,31,92,0.1)] hover:-translate-y-1">
                <div
                  className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-ink/0 via-ink/25 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-ink shadow-inner ring-1 ring-ink/5 transition-transform duration-300 group-hover:scale-105">
                  <item.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-extrabold text-ink leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-muted md:text-[0.9375rem] flex-1">
                  {item.body}
                </p>
              </article>
            </RevealChild>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
