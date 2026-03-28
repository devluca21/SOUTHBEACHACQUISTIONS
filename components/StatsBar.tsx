"use client";

import { SOUTH_DR_COVERAGE_REGION } from "@/lib/coverage-areas";
import { RevealSection } from "./RevealSection";

const stats = [
  { value: "Target 15%+", label: "Fund-level IRR objective" },
  {
    value: "Coastal DR",
    label: `Geography: ${SOUTH_DR_COVERAGE_REGION}`,
  },
  { value: "Institutional", label: "Development & commercial deals" },
  {
    value: "Side by side",
    label: "We invest our own capital next to yours—when the deal performs, we succeed together.",
  },
];

export function StatsBar() {
  return (
    <RevealSection className="py-14 md:py-16 bg-ink text-white border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-10">
          Why investors look to us
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-accent-ondark">
                {s.value}
              </p>
              <p className="text-white/70 text-sm md:text-base mt-2 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
