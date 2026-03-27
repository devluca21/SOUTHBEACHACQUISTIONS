"use client";

import { RevealSection, RevealChild } from "./RevealSection";
import { IntakeForm } from "./IntakeForm";

export function SubmitDealForm() {
  return (
    <RevealSection id="submit-deal" className="py-20 md:py-28 bg-white">
      <div className="max-w-[560px] mx-auto px-6 md:px-10">
        <RevealChild className="text-center mb-10">
          <h2 className="heading-featured text-3xl md:text-4xl text-ink">
            Submit a Deal
          </h2>
          <p className="text-slate-muted mt-3 leading-relaxed">
            Tell us who you are and which service you’re interested in—we’ll follow up quickly.
          </p>
        </RevealChild>

        <RevealChild delay={0.08}>
          <div className="rounded-3xl p-6 md:p-8 border border-slate-200 shadow-card bg-slate-50/50">
            <IntakeForm idPrefix="footer" />
          </div>
        </RevealChild>
      </div>
    </RevealSection>
  );
}
