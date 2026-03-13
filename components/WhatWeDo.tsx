"use client";

import { RevealSection, RevealChild } from "./RevealSection";

export function WhatWeDo() {
  return (
    <RevealSection id="what-we-do" className="py-24 md:py-32">
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <RevealChild delay={0.1} className="mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            What We Do
          </h2>
          <p className="font-sans text-foreground/70 mt-4 text-lg tracking-wide max-w-xl">
            We take condos that aren&apos;t selling and place them with our investor network—so you get liquidity and investors get vetted deals.
          </p>
        </RevealChild>

        <div className="space-y-10 md:space-y-12 font-sans text-foreground/90 text-lg leading-relaxed">
          <RevealChild delay={0.15}>
            <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-3">
              Condos That Don&apos;t Sell
            </h3>
            <p>
              We handle inventory that isn&apos;t moving on the open market by offering it to our investor network. Developers and sellers get liquidity; our investors get vetted opportunities. It&apos;s a direct bridge from unsold condos to capital that wants to deploy—along the southern coast of the Dominican Republic.
            </p>
          </RevealChild>

          <RevealChild delay={0.18}>
            <p>
              At <strong className="text-foreground font-semibold">South Beach Acquisitions</strong>, we don&apos;t just browse the market—we create it. We specialize in sourcing, underwriting, and rapid acquisition of premier residential and commercial assets. Our approach is data-driven, discreet, and built to close complex deals.
            </p>
          </RevealChild>

          <RevealChild delay={0.2}>
            <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-3">
              Proprietary Sourcing
            </h3>
            <p>
              We bypass the public market. Through local networks and data analytics, we identify off-market opportunities and distressed assets—including condos that need a different buyer—to secure high-potential properties along the south coast.
            </p>
          </RevealChild>

          <RevealChild delay={0.25}>
            <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-3">
              Rigorous Underwriting
            </h3>
            <p>
              Every acquisition is backed by financial modeling, deep-dive market analysis, 10-year cash flow projections, and feasibility studies. We ensure assets meet our risk-to-reward standards and achieve highest and best use.
            </p>
          </RevealChild>

          <RevealChild delay={0.3}>
            <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-3">
              Rapid Execution
            </h3>
            <p>
              Speed is the ultimate currency in a fast-moving market. Our streamlined acquisition process, all-cash capabilities, and removal of traditional financing contingencies ensure we close quickly and decisively.
            </p>
          </RevealChild>

          <RevealChild delay={0.35}>
            <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-4">
              Our Current Buy-Box
            </h3>
            <ul className="space-y-3 list-none">
              <li>
                <strong className="text-foreground">Target Geography:</strong> The south of the Dominican Republic and surrounding high-growth coastal and Caribbean markets.
              </li>
              <li>
                <strong className="text-foreground">Asset Classes:</strong> Condos (including unsold inventory), Multi-family (5+ units), Luxury Residential, and Mixed-Use Commercial.
              </li>
              <li>
                <strong className="text-foreground">Investment Profile:</strong> Core-plus, Value-add, and Opportunistic developments.
              </li>
              <li>
                <strong className="text-foreground">Transaction Size:</strong> Target acquisitions ranging from <strong className="text-foreground">$2M</strong> to <strong className="text-foreground">$25M+</strong>.
              </li>
            </ul>
          </RevealChild>

          <RevealChild delay={0.4}>
            <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-3">
              The South Beach Advantage
            </h3>
            <p>
              Traditional real estate is reactive. We are proactive. We take condos that don&apos;t sell and place them with our investor network—no endless listing cycles. We are the bridge between untapped property potential and institutional-grade execution across the south of the Dominican Republic. If you have unsold inventory, quiet listings, or need a discreet exit, we bring the capital and the network to get it done.
            </p>
          </RevealChild>
        </div>
      </div>
    </RevealSection>
  );
}
