import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const links = [
  { href: "#acquisitions", label: "Acquisitions" },
  { href: "#portfolio", label: "Portfolios" },
  { href: "#verticals", label: "Verticals" },
  { href: "#submit-deal", label: "Submit a Deal" },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-[220px] md:scroll-mt-[268px] bg-ink text-white border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Link href="/" className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80 rounded-sm">
              <BrandLogo
                sizes="(max-width: 768px) min(936px, calc(100vw - 3rem)), 1152px"
                className="h-[180px] min-h-[180px] w-auto md:h-[216px] md:min-h-[216px] max-w-[min(1152px,calc(100vw-3rem))] brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/65 text-sm mt-4 max-w-sm leading-relaxed">
              High-ROI fund and mandate focused on southeast Dominican Republic tourism, development,
              and commercial rental income.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
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

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/45">Connect</span>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" strokeWidth={2} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-white/45 text-center md:text-left font-medium">
          © {new Date().getFullYear()} South Beach Acquisitions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
