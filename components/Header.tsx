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
        <div className="flex items-center justify-between gap-6 h-[72px] md:h-[80px]">
          <Link
            href="/"
            className="shrink-0 flex items-center text-ink"
            aria-label="South Beach Acquisitions home"
          >
            <BrandLogo
              priority
              className="h-9 max-h-9 md:h-11 md:max-h-11 max-w-[min(100%,220px)] md:max-w-[260px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {centerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-ink hover:opacity-75 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link href="#submit-deal" className="hidden sm:inline-flex btn-pill text-sm md:text-base px-6 py-3 shadow-pill">
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
            <nav className="flex flex-col px-6 py-4 gap-1">
              {centerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-ink py-3"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#submit-deal"
                className="mt-2 btn-pill justify-center py-4"
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
