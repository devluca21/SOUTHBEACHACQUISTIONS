import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Coming Soon | South Beach Acquisitions",
  description: "South Beach Acquisitions — full site launching soon.",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-ink px-6 py-16 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(197, 217, 240, 0.18) 0%, transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
          <Image
            src="/sba-logo.png"
            alt="South Beach Acquisitions"
            width={640}
            height={171}
            className="h-auto w-[min(100%,280px)] opacity-[0.98] brightness-0 invert"
            priority
          />
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.28em] text-white/55">
            Coming soon
          </p>
          <h1 className="mt-4 font-extrabold tracking-tight text-3xl sm:text-4xl text-balance [text-wrap:balance]">
            Something new is on the way.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/75 max-w-md">
            We&apos;re putting the finishing touches on our public experience. Check back shortly—or
            reach out through your existing contacts if you need us in the meantime.
          </p>
          <p className="mt-10 text-xs text-white/40">
            © {new Date().getFullYear()} South Beach Acquisitions
          </p>
      </div>
    </main>
  );
}
