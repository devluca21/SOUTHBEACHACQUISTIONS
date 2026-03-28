import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { IntakeForm } from "@/components/IntakeForm";
import { VerticalProcess } from "@/components/VerticalProcess";
import { getVerticalBySlug, verticalSlugs, type VerticalSlug } from "@/lib/verticals-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams(): { slug: VerticalSlug }[] {
  return verticalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const v = getVerticalBySlug(slug);
  if (!v) return { title: "Vertical | South Beach Acquisitions" };
  return {
    title: `${v.title} | South Beach Acquisitions`,
    description: `${v.oneLiner} ${v.detailParagraphs[0]}`.slice(0, 155),
  };
}

export default async function VerticalDetailPage({ params }: Props) {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) notFound();

  return (
    <main className="bg-white text-ink pt-[var(--page-top-clear)]">
      <div className="max-w-[820px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-2">
        <Link
          href="/#verticals"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink/70 hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} aria-hidden />
          Back to verticals
        </Link>

        <h1 className="heading-featured text-4xl sm:text-5xl md:text-[2.75rem] lg:text-6xl font-extrabold text-ink text-balance leading-[1.08] tracking-tight">
          {vertical.title}
        </h1>

        <p className="mt-5 text-base md:text-lg font-semibold text-ink/85 leading-snug max-w-3xl">
          {vertical.oneLiner}
        </p>

        <div className="mt-6 space-y-4 text-slate-muted leading-relaxed text-base md:text-[1.05rem]">
          {vertical.detailParagraphs.map((p, i) => (
            <p key={`${vertical.slug}-${i}`}>{p}</p>
          ))}
        </div>

        <VerticalProcess steps={vertical.processSteps} />

        <section
          id="inquire"
          className="mt-12 md:mt-14 rounded-3xl border border-slate-200/90 bg-slate-50/80 p-7 md:p-9 shadow-card"
          aria-labelledby="vertical-intake-heading"
        >
          <p
            id="vertical-intake-heading"
            className="heading-featured text-3xl md:text-4xl lg:text-[2.35rem] font-extrabold text-ink text-balance leading-tight m-0"
          >
            {vertical.title}
          </p>
          <p className="mt-4 text-sm md:text-base text-slate-muted leading-relaxed max-w-xl">
            Submit your details and we&apos;ll follow up to align structure and next steps.
          </p>
          <div className="mt-6">
            <IntakeForm
              idPrefix={`vertical-${vertical.slug}`}
              fixedService={vertical.intakeServiceValue}
              goalPlaceholder={vertical.intakeGoalPlaceholder}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
