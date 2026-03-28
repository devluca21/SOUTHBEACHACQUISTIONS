"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { INTAKE_SERVICES, type IntakeServiceValue } from "@/lib/intake-services";

const field =
  "w-full font-sans text-ink bg-white rounded-2xl px-4 py-3 border border-slate-200 focus:border-ink focus:ring-2 focus:ring-ink/15 focus:outline-none placeholder:text-slate-muted/60 transition-shadow text-sm md:text-base";

const labelClass = "text-xs md:text-sm font-bold text-ink block mb-1.5";

const defaultGoalPlaceholder =
  "What are you trying to achieve? Name the service you care about (condo, commercial space, sale, development, bulk condos with an investor group), timeline, and what a good outcome looks like.";

type IntakeFormProps = {
  idPrefix: string;
  /** Extra wrapper classes for the form element */
  formClassName?: string;
  /** When set, the service field is hidden (page context is that service). Value still posts as `service`. */
  fixedService?: IntakeServiceValue;
  /** Overrides the “Your goal” placeholder (e.g. vertical-specific page). */
  goalPlaceholder?: string;
};

export function IntakeForm({
  idPrefix,
  formClassName = "",
  fixedService,
  goalPlaceholder = defaultGoalPlaceholder,
}: IntakeFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  const pid = (name: string) => `${idPrefix}-${name}`;

  const serviceLabel =
    fixedService != null
      ? INTAKE_SERVICES.find((s) => s.value === fixedService)?.label ?? fixedService
      : null;

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${formClassName}`}>
      {fixedService != null && (
        <input type="hidden" name="service" value={fixedService} aria-label={`Service: ${serviceLabel}`} />
      )}
      <div>
        <label htmlFor={pid("name")} className={labelClass}>
          Name
        </label>
        <input
          id={pid("name")}
          name="name"
          type="text"
          required
          autoComplete="name"
          className={field}
          placeholder="Full name"
          disabled={status === "done"}
        />
      </div>
      <div>
        <label htmlFor={pid("email")} className={labelClass}>
          Email
        </label>
        <input
          id={pid("email")}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="you@company.com"
          disabled={status === "done"}
        />
      </div>
      <div>
        <label htmlFor={pid("phone")} className={labelClass}>
          Phone number
        </label>
        <input
          id={pid("phone")}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={field}
          placeholder="+1 (555) 000-0000"
          disabled={status === "done"}
        />
      </div>
      <div>
        <label htmlFor={pid("goal")} className={labelClass}>
          Your goal
        </label>
        <textarea
          id={pid("goal")}
          name="goal"
          rows={4}
          className={`${field} min-h-[108px] resize-y`}
          placeholder={goalPlaceholder}
          disabled={status === "done"}
        />
      </div>
      {fixedService == null && (
        <div>
          <label htmlFor={pid("service")} className={labelClass}>
            Service
          </label>
          <select
            id={pid("service")}
            name="service"
            required
            className={field}
            disabled={status === "done"}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {INTAKE_SERVICES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full btn-pill justify-center py-3.5 text-sm md:text-base disabled:opacity-60 disabled:scale-100 disabled:hover:scale-100"
        >
          {status === "idle" && (
            <>
              Submit
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </>
          )}
          {status === "sending" && "Sending…"}
          {status === "done" && "Received. We’ll be in touch."}
        </button>
      </div>
    </form>
  );
}
