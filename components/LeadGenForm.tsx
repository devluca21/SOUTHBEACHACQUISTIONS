"use client";

import { useState } from "react";
import { RevealSection, RevealChild } from "./RevealSection";

export function LeadGenForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("done");
  }

  const inputBase =
    "w-full font-sans text-foreground bg-transparent py-4 border-0 border-b border-foreground/20 focus:border-foreground focus:outline-none placeholder:text-foreground/40 transition-colors";

  return (
    <RevealSection id="contact" className="py-24 md:py-32">
      <div className="max-w-[640px] mx-auto px-6 md:px-10">
        <RevealChild delay={0.1} className="mb-12 md:mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Get in Touch
          </h2>
          <p className="font-sans text-foreground/70 mt-4 text-lg tracking-wide max-w-xl">
            Have unsold inventory? Want access to off-market condos? Tell us how we can help—discreetly and quickly.
          </p>
        </RevealChild>

        <RevealChild delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                className={inputBase}
                disabled={status === "sending" || status === "done"}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className={inputBase}
                disabled={status === "sending" || status === "done"}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <input
                id="message"
                name="message"
                type="text"
                placeholder="Message"
                className={inputBase}
                disabled={status === "sending" || status === "done"}
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="font-sans text-sm tracking-[0.25em] uppercase text-foreground hover:opacity-70 transition-opacity disabled:opacity-50"
              >
                {status === "idle" && "Send"}
                {status === "sending" && "Sending…"}
                {status === "done" && "Thank you."}
                {status === "error" && "Try again"}
              </button>
            </div>
          </form>
        </RevealChild>
      </div>
    </RevealSection>
  );
}
