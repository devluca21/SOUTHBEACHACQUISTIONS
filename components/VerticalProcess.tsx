import type { VerticalProcessStep } from "@/lib/verticals-data";

type VerticalProcessProps = {
  steps: readonly VerticalProcessStep[];
  heading?: string;
  subheading?: string;
};

export function VerticalProcess({
  steps,
  heading = "How it works",
  subheading = "A clear sequence from first contact to execution—so you always know what comes next.",
}: VerticalProcessProps) {
  return (
    <section className="mt-12 md:mt-16" aria-labelledby="vertical-process-heading">
      <div className="mb-8 md:mb-10">
        <h2 id="vertical-process-heading" className="heading-featured text-2xl md:text-3xl text-ink">
          {heading}
        </h2>
        <p className="mt-3 text-slate-muted text-base md:text-lg leading-relaxed max-w-2xl">
          {subheading}
        </p>
      </div>

      <ol className="relative space-y-0">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-5 md:gap-8 pb-10 md:pb-12 last:pb-0">
            {i < steps.length - 1 && (
              <span
                className="absolute left-[22px] md:left-6 top-12 bottom-0 w-px bg-slate-200 md:top-14"
                aria-hidden
              />
            )}
            <div className="relative z-[1] shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-accent-soft border-2 border-white shadow-sm flex items-center justify-center">
              <span className="font-extrabold text-ink text-sm md:text-base">{i + 1}</span>
            </div>
            <div className="flex-1 min-w-0 pt-0.5 md:pt-1">
              <h3 className="text-lg md:text-xl font-extrabold text-ink leading-tight">{step.title}</h3>
              <p className="text-slate-muted mt-2 text-sm md:text-base leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
