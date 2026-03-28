"use client";

import Image from "next/image";
import Link from "next/link";
import { SOUTH_DR_COVERAGE_AREAS } from "@/lib/coverage-areas";
import { RevealSection, RevealChild } from "./RevealSection";
import { ArrowRight } from "lucide-react";

const tiles = [
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    caption: "Tourism hospitality",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    caption: "Commercial rental",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    caption: "Development",
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    caption: "Coastal residential",
  },
];

export function PortfolioSection() {
  return (
    <RevealSection id="portfolio" className="py-20 md:py-28 bg-slate-50/80">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <RevealChild className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="heading-featured text-3xl md:text-4xl lg:text-5xl text-ink">
              Portfolio snapshot
            </h2>
            <p className="text-slate-muted mt-3 text-lg max-w-xl leading-relaxed">
              Representative themes across our mandate in the south of the Dominican Republic—
              {SOUTH_DR_COVERAGE_AREAS}: tourism-linked assets, commercial income, and development
              optionality.
            </p>
          </div>
          <Link
            href="#submit-deal"
            className="btn-pill self-start shadow-pill whitespace-nowrap"
          >
            Discuss a Mandate
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </RevealChild>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {tiles.map((tile, i) => (
            <RevealChild key={tile.caption} delay={i * 0.06}>
              <div className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-card bg-white">
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                <span className="absolute bottom-4 left-4 text-lg text-white font-extrabold">
                  {tile.caption}
                </span>
              </div>
            </RevealChild>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
