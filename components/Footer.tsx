import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const links = [
  { href: "#acquisitions", label: "Acquisitions" },
  { href: "#portfolio", label: "Portfolios" },
  { href: "#verticals", label: "Verticals" },
  { href: "#submit-deal", label: "Submit a Deal" },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-[170px] md:scroll-mt-[202px] bg-ink text-white border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8 md:py-9">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-6 lg:gap-8">
          <Link
            href="/"
            className="block shrink-0 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80 rounded-sm"
          >
            <BrandLogo
              sizes="(max-width: 640px) min(360px, 88vw), (max-width: 1024px) 400px, 480px"
              className="block h-36 w-auto max-w-[min(1843px,calc(100vw-2rem))] align-middle brightness-0 invert opacity-100 transition-opacity sm:h-40 md:h-44 lg:h-48"
            />
          </Link>

          <nav
            className="flex flex-wrap items-center gap-x-8 gap-y-2 md:justify-end"
            aria-label="Footer"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-white/80 hover:text-accent-ondark transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-5 pt-5 border-t border-white/10 text-sm text-white/45 font-medium">
          © {new Date().getFullYear()} South Beach Acquisitions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
