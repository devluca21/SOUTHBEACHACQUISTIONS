"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#who-its-for", label: "Who It's For" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans text-lg md:text-xl font-black uppercase tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          South Beach Acquisitions
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-[0.2em] uppercase text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+18771234567"
            className="flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            Call
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm tracking-[0.2em] uppercase text-foreground/80"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+18771234567"
                className="flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-foreground/80 pt-2"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
