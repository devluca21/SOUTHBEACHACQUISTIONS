"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
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
        <div className="flex items-center justify-between gap-4 md:gap-6 py-2 md:py-2.5">
          <Link
            href="/"
            className="shrink-0 flex items-center text-ink min-w-0"
            aria-label="South Beach Acquisitions home"
          >
            <BrandLogo
              priority
              sizes="(max-width: 1023px) min(1498px, calc(100vw - 5.5rem)), min(1843px, calc(100vw - 22rem))"
              className="h-[288px] min-h-[288px] w-auto md:h-[346px] md:min-h-[346px] max-w-[min(1498px,calc(100vw-5.5rem))] md:max-w-[min(1843px,calc(100vw-22rem))]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
            {centerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-ink leading-none py-1 hover:opacity-75 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link href="#submit-deal" className="hidden sm:inline-flex btn-pill text-sm md:text-base px-5 py-2 shadow-pill">
              Submit a Deal
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>

            <button
              type="button"
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-ink rounded-lg hover:bg-slate-100"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
            <nav className="flex flex-col px-6 py-2 gap-0">
              {centerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-ink text-sm py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#submit-deal"
                className="mt-1 btn-pill justify-center py-3 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Submit a Deal
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
