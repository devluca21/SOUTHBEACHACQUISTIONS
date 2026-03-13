"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=85";

export function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[600px] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Dark financial district"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0.68) 100%)",
          }}
        />
      </div>

      <div className="relative z-20 max-w-[1600px] mx-auto w-full px-6 md:px-10 pb-24 md:pb-32">
        <motion.h1
          className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Where Inventory Meets Investor Capital
        </motion.h1>
        <motion.p
          className="font-sans text-white/90 text-base md:text-lg mt-6 tracking-[0.1em] uppercase"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          South coast, Dominican Republic
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-sans text-xs text-white/80 tracking-[0.3em] uppercase">
          Scroll to Explore
        </span>
        <ChevronDown className="w-5 h-5 text-white/80 animate-bounce" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
