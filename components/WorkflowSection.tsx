"use client";

import { RevealSection, RevealChild } from "./RevealSection";
import { FileText, Phone, LayoutGrid, Handshake } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Submit the form",
    body: "Share your name, contact details, and which service fits you—condo rentals, commercial space for your business, development, or investor groups buying bulk condo blocks in promoted projects.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Speak with a representative",
    body: "Our team reaches out and walks you through every step—questions, timing, and how we work in this market.",
    icon: Phone,
  },
  {
    step: 3,
    title: "Review your investment structure",
    body: "Based on what you choose, we show you the right structure—returns, risk framing, and how the mandate fits your goals.",
    icon: LayoutGrid,
  },
  {
    step: 4,
    title: "Partner with us",
    body: "When you’re ready, we align on terms and move forward together—capital, documentation, and execution in one coordinated path.",
    icon: Handshake,
  },
];

export function WorkflowSection() {
  return (
    <RevealSection id="workflow" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <RevealChild className="text-center mb-14 md:mb-16">
          <h2 className="heading-featured text-3xl md:text-4xl lg:text-5xl text-ink">
            How it works
          </h2>
          <p className="text-slate-muted mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            A straightforward path from first touch to partnership—no mystery, no idle waiting.
          </p>
        </RevealChild>

        <ol className="relative space-y-0">
          {steps.map((item, i) => (
            <RevealChild key={item.step} delay={i * 0.07}>
              <li className="relative flex gap-5 md:gap-8 pb-12 md:pb-14 last:pb-0">
                {i < steps.length - 1 && (
                  <span
                    className="absolute left-[22px] md:left-6 top-14 bottom-0 w-px bg-slate-200 md:top-16"
                    aria-hidden
                  />
                )}
                <div className="relative z-[1] shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-accent-soft border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="font-extrabold text-ink text-sm md:text-base">{item.step}</span>
                </div>
                <div className="flex-1 min-w-0 pt-0.5 md:pt-1">
                  <div className="flex items-start gap-3">
                    <div className="hidden sm:flex w-10 h-10 rounded-xl bg-slate-100 items-center justify-center text-ink shrink-0">
                      <item.icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-ink leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-muted mt-2 text-base leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              </li>
            </RevealChild>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
