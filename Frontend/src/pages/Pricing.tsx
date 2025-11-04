import React, { useMemo, useState } from "react";

/**
 * Google Workspace–style pricing page (replica) using React + Tailwind CSS.
 *
 * Notes:
 * - Uses generic icons and wording; not affiliated with Google.
 * - Focuses on the visual structure: header banner, product icon row, annual toggle,
 *   four-column pricing with a highlighted middle plan, feature lists, and footer notes.
 */

const PLANS = [
  {
    id: "starter",
    name: "Aurora Basic",
    price: 0,
    oldPrice: null,
    unit: "/ month",
    cta: "Start for free",
    features: [
      { label: "Access to Aurora LLM — Lite model" },
      { label: "100 prompts / month" },
      { label: "Basic chat memory (session only)" },
      { label: "Community support" }
    ],
  },
  {
    id: "standard",
    name: "Aurora Pro",
    price: 899,
    oldPrice: 1200,
    unit: "/ month",
    cta: "Upgrade to Pro",
    emphasized: true,
    features: [
      { label: "Aurora LLM — Pro model (fast responses)" },
      { label: "Unlimited prompts" },
      { label: "Persistent memory across chats" },
      { label: "Export chat + project workspace" },
      { label: "Priority inference routing" }
    ],
  },
  {
    id: "plus",
    name: "Aurora Vision (Multimodal)",
    price: 1800,
    unit: "/ month",
    cta: "Try multimodal",
    features: [
      { label: "Everything in Aurora Pro +" },
      { label: "Image + document understanding" },
      { label: "Real-time model monitoring" },
      { label: "Up to 10 custom agents" },
      { label: "High-resolution image generation" }
    ],
  },
  {
    id: "enterprise",
    name: "Aurora Enterprise",
    price: null,
    unit: "",
    cta: "Contact sales",
    features: [
      { label: "All Aurora models + fine-tuning" },
      { label: "On-prem or VPC deployment" },
      { label: "Role-based user management" },
      { label: "Advanced data governance" },
      { label: "Dedicated support + SLA" }
    ],
  },
];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function WorkspaceStylePricing() {
  const [annual, setAnnual] = useState(true);
  const inr = useMemo(() => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }), []);

  return (
    <main className="min-h-dvh bg-white text-slate-900">
      {/* Top notice */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-center">
          <h1 className="text-lg sm:text-xl font-medium tracking-tight">Manage Subscriptions</h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Card wrapper */}
        <div className="rounded-[28px] border border-slate-200 bg-slate-50/60 shadow-sm">
          {/* Icon row + annual toggle */}
          <div className="flex ml-215 flex-col gap-4 md:flex-row md:items-center md:justify-between px-5 sm:px-8 pt-6">

            {/* Annual toggle pill */}
            <div className="flex items-center gap-3 rounded-full bg-white border border-slate-200 px-3 py-1.5 self-end md:self-auto">
              <span className="text-sm text-slate-700">Annual</span>
              <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">Save 16% with 1 year commitment</span>
              <button
                onClick={() => setAnnual((v) => !v)}
                className={classNames(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition",
                  annual ? "bg-blue-600" : "bg-slate-300"
                )}
                aria-label="Toggle annual billing"
              >
                <span
                  className={classNames(
                    "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-1 ring-black/5 transition",
                    annual ? "translate-x-5" : "translate-x-1"
                  )}
                />
              </button>
            </div>
          </div>

          {/* Columns */}
          <div className="px-3 sm:px-6 md:px-8 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-6">
              {PLANS.map((plan) => (
                <article
                  key={plan.id}
                  className={classNames(
                    "relative rounded-[24px] bg-white border p-5 sm:p-6 flex flex-col",
                    plan.emphasized
                      ? "border-blue-600 shadow-[0_0_0_1px_rgba(37,99,235,0.4),0_10px_20px_-10px_rgba(2,6,23,0.25)]"
                      : "border-slate-200 shadow-sm"
                  )}
                >
                  {/* Emphasis ring */}
                  {plan.emphasized && (
                    <div className="absolute inset-0 rounded-[24px] pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(37,99,235,0.5)" }} />
                  )}

                  <header className="mb-4">
                    <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      {plan.price !== null ? (
                        <>
                          <span className="text-2xl sm:text-3xl font-semibold tracking-tight">{inr.format(plan.price)}</span>
                          {plan.oldPrice && (
                            <span className="text-slate-500 text-sm line-through align-middle">{inr.format(plan.oldPrice)}**</span>
                          )}
                          <span className="text-slate-500 text-sm">{plan.unit}</span>
                        </>
                      ) : (
                        <span className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s talk</span>
                      )}
                    </div>
                  </header>

                  {/* CTA */}
                  <button
                    className={classNames(
                      "w-full rounded-xl border px-4 py-2 text-sm font-medium mb-5",
                      plan.id === "enterprise"
                        ? "border-slate-300 hover:bg-slate-50"
                        : plan.emphasized
                          ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                          : "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
                    )}
                  >
                    {plan.cta}
                  </button>

                  {/* Feature list */}
                  <ul className="space-y-3 text-sm text-slate-700">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {/* check icon */}
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none fill-emerald-500">
                          <path d="M7.629 13.657 3.97 9.999l-1.06 1.06 4.72 4.72 9.192-9.193-1.06-1.06-8.133 8.13z" />
                        </svg>
                        <span>{f.label}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Spacer */}
                  <div className="mt-4 grow" />

                  {/* Subtle card bevel to match screenshot vibe */}
                  <div className="mt-6 h-3 rounded-b-[20px] bg-gradient-to-t from-slate-50" />
                </article>
              ))}
            </div>

            {/* Bottom notes */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-slate-500 mt-6 px-1 pb-4">
              <span>All plans billed monthly</span>
              <span>All prices ₹INR</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
