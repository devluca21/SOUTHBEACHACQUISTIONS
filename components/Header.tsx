"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const centerLinks = [
  { href: "#acquisitions", label: "Acquisitions" },
  { href: "#portfolio", label: "Portfolios" },
  { href: "#verticals", label: "Verticals" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-ink/5"
      role="banner"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex w-full items-center gap-6 lg:gap-8 pt-2.5 pb-3 md:pt-3 md:pb-3.5">
          <Link
            href="/"
            className="relative shrink-0 block h-[144px] w-[min(280px,calc(100vw-5rem))] overflow-hidden text-ink sm:w-[min(300px,calc(100vw-5rem))] md:h-[173px] md:w-[min(340px,calc(100vw-8rem))] lg:w-[min(380px,38vw)]"
            aria-label="South Beach Acquisitions home"
          >
            <span className="absolute left-0 top-0 flex h-full items-center origin-left scale-[1.65] will-change-transform">
              <BrandLogo
                priority
                objectPosition="left"
                sizes="(max-width: 1023px) 200px, 240px"
                className="h-[144px] min-h-[144px] w-auto max-w-none md:h-[173px] md:min-h-[173px]"
              />
            </span>
          </Link>

          <nav
            className="hidden lg:flex flex-1 items-center justify-end gap-x-9 xl:gap-x-10 pr-0.5"
            aria-label="Primary"
          >
            {centerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] font-bold text-ink tracking-tight whitespace-nowrap py-1 hover:text-ink/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden ml-auto -mr-1 p-2.5 text-ink rounded-xl hover:bg-slate-100/90 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="w-6 h-6" strokeWidth={2} /> : <Menu className="w-6 h-6" strokeWidth={2} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden border-t border-ink/5 bg-white"
          >
            <nav className="flex flex-col px-6 py-3 gap-0.5" aria-label="Primary mobile">
              {centerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-bold text-ink text-[1.0625rem] py-2.5 leading-snug rounded-lg hover:bg-slate-50 px-1 -mx-1 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
