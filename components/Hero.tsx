"use client";

import { motion } from "framer-motion";
import { SOUTH_DR_COVERAGE_REGION } from "@/lib/coverage-areas";
import { IntakeForm } from "./IntakeForm";

const heroVideoSrc = "/hero-banner.mp4";
const heroPosterSrc = "/hero-poster.jpg";

const heroMarketsLine =
  "La Romana | Bayahibe | Dominicus | Juan Dolio | Playa Nueva Romana | Santo Domingo";

export function Hero() {
  return (
    <section
      className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0 bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover min-w-full min-h-full"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPosterSrc}
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,31,92,0.55) 0%, rgba(0,31,92,0.35) 35%, rgba(0,19,71,0.82) 85%, rgba(0,19,71,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 py-[calc(5.5rem+134px)] md:py-[calc(6rem+150px)]">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="flex max-w-xl flex-col pt-12 sm:pt-14 lg:h-full lg:max-w-none lg:min-h-0 lg:justify-between lg:pt-24 xl:pt-28">
            <div className="flex shrink-0 flex-col gap-6 md:gap-8 lg:max-w-xl lg:gap-[1.6rem]">
              <motion.h1
                className="heading-featured shrink-0 text-4xl sm:text-5xl md:text-6xl lg:text-[2.75rem] xl:text-7xl leading-[1.08] text-balance text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.45),_0_8px_32px_rgba(0,0,0,0.35)]"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                South Beach Acquisitions
              </motion.h1>
              <motion.p
                className="shrink-0 text-base leading-relaxed text-white/95 [text-shadow:_0_1px_3px_rgba(0,0,0,0.55)] md:text-lg lg:text-xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
              >
                Coastal tourism along {SOUTH_DR_COVERAGE_REGION} is scaling faster
                than most portfolios can keep up, and the best condo blocks, commercial pads, and
                development plays are spoken for long before they hit a listing site.{" "}
                <strong className="text-white font-semibold">
                  Tell us what you want exposure to
                </strong>
                ; we&apos;ll show you mandates that still have room for your capital.
              </motion.p>
            </div>
            <motion.p
              className="mt-8 shrink-0 text-xs font-semibold uppercase leading-snug tracking-[0.14em] text-white/70 [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)] md:mt-10 md:text-[0.8125rem] md:tracking-[0.16em] lg:mt-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              {heroMarketsLine}
            </motion.p>
          </div>

          <motion.div
            className="flex w-full max-w-md flex-col lg:max-w-none lg:justify-self-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <div className="rounded-3xl border border-white/30 bg-white/95 p-6 shadow-2xl shadow-black/25 backdrop-blur-md md:p-8">
              <p className="text-sm font-bold text-ink uppercase tracking-widest mb-4">
                Partner with us
              </p>
              <IntakeForm idPrefix="hero" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
