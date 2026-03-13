"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RevealSection, RevealChild } from "./RevealSection";

const services = [
  {
    id: "sales",
    label: "Sales",
    description: "Full-service representation for buyers and sellers.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  },
  {
    id: "new-development",
    label: "New Development",
    description: "Exclusive access to landmark new developments.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  {
    id: "advisory",
    label: "Advisory",
    description: "Strategic real estate advisory for discerning clients.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  },
];

export function ServiceReveal() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = services.find((s) => s.id === activeId);

  return (
    <RevealSection id="services" className="py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <RevealChild delay={0.1} className="mb-16 md:mb-20">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Our Services
          </h2>
          <p className="font-sans text-foreground/70 mt-4 text-lg tracking-wide max-w-xl">
            From sales to new development and advisory.
          </p>
        </RevealChild>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          <div className="space-y-1">
            {services.map((service, i) => (
              <RevealChild key={service.id} delay={0.1 + i * 0.08}>
                <button
                  type="button"
                  className="w-full text-left py-6 md:py-8 font-sans text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors hover:text-foreground/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
                  onMouseEnter={() => setActiveId(service.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(service.id)}
                  onBlur={() => setActiveId(null)}
                >
                  {service.label}
                </button>
              </RevealChild>
            ))}
          </div>

          <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-[500px] mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 overflow-hidden"
                >
                  <Image
                    src={active.image}
                    alt={active.label}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <p className="font-sans text-xl md:text-2xl font-semibold">
                      {active.label}
                    </p>
                    <p className="font-sans text-sm mt-1 opacity-90 max-w-md">
                      {active.description}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-foreground/5"
                >
                  <span className="font-sans text-sm tracking-widest uppercase text-foreground/40">
                    Hover a service to preview
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
