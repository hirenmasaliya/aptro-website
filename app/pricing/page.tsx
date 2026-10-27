"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  CloudUpload,
  FileText,
  Globe2,
  MapPin,
  RefreshCw,
  Smartphone,
  User,
  Wallet,
} from "lucide-react";

/* ───────────── Types ───────────── */

type Region = "IN" | "US";
type Role = "business" | "freelancers";

interface PriceDetails {
  monthly?: number;
  yearly?: number;
  textMonthly?: string;
  textYearly?: string;
}

interface Plan {
  id: string;
  name: string;
  type: Role;
  isPopular: boolean;
  isActive?: boolean;
  features: string[];
  prices?: Partial<Record<Region, PriceDetails>>;
  specialOffer?: string;
}

/* ───────────── Feature parsing (fixed) ─────────────
   Old bug: `!isNaN(Number(value))` is true for false / null / "" so
   disabled features showed up as "0 Key". Now only real values render. */

const LABEL_FIXES: Record<string, string> = {
  "Report Genarate": "Report generation",
};

const humanize = (key: string) =>
  LABEL_FIXES[key] ??
  key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());

function limitLabel(key: string, value: number | string): string {
  const n = String(value);
  switch (key) {
    case "customers": return `Up to ${n} customers`;
    case "ordersPerDay": return `Up to ${n} orders per day`;
    case "products": return `Up to ${n} products`;
    case "vendors": return `Up to ${n} vendors`;
    case "users": return `${n} user${Number(value) === 1 ? "" : "s"}`;
    default: return `${humanize(key)}: ${n}`;
  }
}

function parseFeatures(plan: any): string[] {
  const f = plan.features;
  let out: string[] = [];

  if (Array.isArray(f)) out = f.map(String);
  else if (typeof f === "string") {
    try { out = JSON.parse(f); } catch { out = []; }
  } else if (f && typeof f === "object") {
    for (const [key, value] of Object.entries(f)) {
      if (value === true) out.push(humanize(key));
      else if (typeof value === "number") out.push(limitLabel(key, value));
      else if (typeof value === "string" && value.trim() !== "") {
        out.push(limitLabel(key, value.trim()));
      }
      // false / null / "" → feature not included, skip
    }
  }

  // Legacy structure fallback
  const u = plan.usageLimits;
  if (u?.users && !f?.users) out.push(limitLabel("users", u.users));
  if (u?.orders && !f?.ordersPerDay) out.push(`Up to ${u.orders} orders`);

  return out;
}

/* ───────────── Pricing helpers ───────────── */

const money = (n: number, region: Region) =>
  new Intl.NumberFormat(region === "IN" ? "en-IN" : "en-US", {
    style: "currency",
    currency: region === "IN" ? "INR" : "USD",
    maximumFractionDigits: 0,
  }).format(n);

type Pricing =
  | { kind: "custom" }
  | { kind: "free" }
  | { kind: "paid"; main: string; unit: string; note?: string; saving?: string };

function getPricing(p: PriceDetails | undefined, yearly: boolean, region: Region): Pricing {
  if (!p) return { kind: "custom" };
  const isFree =
    p.monthly === 0 || p.textMonthly === "₹0" || p.textMonthly === "$0";
  if (isFree) return { kind: "free" };

  if (yearly) {
    if (typeof p.yearly === "number") {
      const saved = typeof p.monthly === "number" ? p.monthly * 12 - p.yearly : 0;
      return {
        kind: "paid",
        main: money(Math.round(p.yearly / 12), region),
        unit: "/month",
        note: `Billed ${money(p.yearly, region)} per year`,
        saving: saved > 0 ? `You save ${money(saved, region)} a year` : undefined,
      };
    }
    return { kind: "paid", main: p.textYearly ?? "Custom", unit: "/year" };
  }
  if (typeof p.monthly === "number") {
    return { kind: "paid", main: money(p.monthly, region), unit: "/month", note: "Billed monthly" };
  }
  return { kind: "paid", main: p.textMonthly ?? "Custom", unit: "/month" };
}

const sortKey = (p: Plan, r: Region) => p.prices?.[r]?.monthly ?? Number.MAX_SAFE_INTEGER;

/* ───────────── Small UI pieces ───────────── */

function Segmented<T extends string>({
  label, value, onChange, options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: React.ReactNode }[];
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex rounded-full bg-[#F1F3F4] p-1"
    >
      {options.map((o) => {
        const on = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.value)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] ${
              on ? "bg-white text-[#1F1F1F] shadow-sm" : "text-[#5F6368] hover:text-[#1F1F1F]"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({ plan, yearly, region }: { plan: Plan; yearly: boolean; region: Region }) {
  const [expanded, setExpanded] = useState(false);
  const pricing = getPricing(plan.prices?.[region], yearly, region);
  const LIMIT = 6;
  const shown = expanded ? plan.features : plan.features.slice(0, LIMIT);
  const hidden = plan.features.length - LIMIT;

  const href =
    pricing.kind === "custom"
      ? "/contact?topic=pricing"
      : `/signup?plan=${encodeURIComponent(plan.id)}&billing=${yearly ? "yearly" : "monthly"}&region=${region}`;

  const cta =
    pricing.kind === "custom" ? "Talk to sales" : pricing.kind === "free" ? "Start 15-day free trial" : `Choose ${plan.name}`;

  return (
    <article
      className={`relative flex flex-col rounded-[28px] bg-white p-8 transition-shadow duration-200 hover:shadow-lg ${
        plan.isPopular ? "border-2 border-[#1A73E8] shadow-md" : "border border-[#DADCE0]"
      }`}
    >
      {plan.isPopular && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-[#1A73E8] px-3.5 py-1 text-[13px] font-semibold text-white">
          Most popular
        </span>
      )}

      <h3 className="text-[22px] font-semibold text-[#1F1F1F]">{plan.name}</h3>
      {plan.specialOffer && (
        <p className="mt-2 w-fit rounded-full bg-[#FCE8E6] px-3 py-1 text-[13px] font-medium text-[#C5221F]">
          {plan.specialOffer}
        </p>
      )}

      {/* Price block has a fixed min-height so cards line up in every state */}
      <div className="mt-6 min-h-[112px]" aria-live="polite">
        {pricing.kind === "custom" && (
          <p className="text-4xl font-medium tracking-tight text-[#1F1F1F]">Custom</p>
        )}
        {pricing.kind === "free" && (
          <>
            <p className="text-4xl font-medium tracking-tight text-[#1F1F1F]">Free</p>
            <p className="mt-1 text-[14px] text-[#5F6368]">15-day trial, then pick a paid plan</p>
          </>
        )}
        {pricing.kind === "paid" && (
          <>
            <p className="flex items-baseline">
              <span className="text-4xl font-medium tracking-tight text-[#1F1F1F] lg:text-5xl">{pricing.main}</span>
              <span className="ml-1.5 text-[15px] text-[#5F6368]">{pricing.unit}</span>
            </p>
            {pricing.note && <p className="mt-1 text-[14px] text-[#5F6368]">{pricing.note}</p>}
            {pricing.saving && <p className="mt-1 text-[14px] font-medium text-[#0D652D]">{pricing.saving}</p>}
          </>
        )}
      </div>

      <Link
        href={href}
        className={`mt-2 flex items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2 ${
          plan.isPopular
            ? "bg-[#1A73E8] text-white hover:bg-[#1557B0]"
            : "border border-[#DADCE0] text-[#1F1F1F] hover:border-[#1F1F1F]"
        }`}
        aria-label={`${cta}, ${plan.name} plan`}
      >
        {cta}
        <ArrowRight size={18} aria-hidden="true" />
      </Link>

      <hr className="my-8 border-[#E8EAED]" />

      <ul className="flex-1 space-y-4">
        {shown.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px] leading-snug text-[#444746]">
            <Check size={18} strokeWidth={2.5} className="mt-px shrink-0 text-[#1A73E8]" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-6 flex items-center gap-1 self-start text-[14px] font-medium text-[#1A73E8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
        >
          {expanded ? "Show fewer features" : `Show ${hidden} more features`}
          <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      )}
    </article>
  );
}

function CardSkeleton() {
  return (
    <div className="h-[560px] animate-pulse rounded-[28px] border border-[#F1F3F4] bg-white p-8" aria-hidden="true">
      <div className="h-6 w-32 rounded-full bg-[#F1F3F4]" />
      <div className="mt-8 h-12 w-44 rounded-lg bg-[#F1F3F4]" />
      <div className="mt-10 h-12 w-full rounded-full bg-[#F1F3F4]" />
      <div className="mt-10 space-y-5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="h-4 w-full rounded-full bg-[#F1F3F4]" />
        ))}
      </div>
    </div>
  );
}

/* ───────────── Static content (edit to match your policies) ───────────── */

const HIGHLIGHTS = [
  { icon: FileText, title: "GST-ready invoices", text: "Bill customers in minutes." },
  { icon: Smartphone, title: "Every device", text: "Android, iOS and web on one plan." },
  { icon: CloudUpload, title: "Cloud backup included", text: "Your data is saved automatically." },
  { icon: Wallet, title: "No setup fees", text: "You only pay the plan price." },
];

const STEPS = [
  { title: "Pick a plan", text: "Choose your category, region and billing cycle above." },
  { title: "Start your trial", text: "Create your account and add your business details." },
  { title: "Run your business", text: "Bill, track stock, manage staff and sync your khata." },
];

// EDIT: confirm every answer matches your real policy before launch.
const FAQ = [
  {
    q: "Which plan is right for my business?",
    a: "Shop / MSME plans suit retailers and wholesalers who need billing, inventory, staff attendance and digital khata in one place. Solo Worker plans suit freelancers who mainly need invoices and simple records.",
  },
  {
    q: "Are there any hidden setup fees?",
    a: "No. There are no setup or installation charges, and cloud backup is included in the plan price.",
  },
  {
    q: "Can I use Aptro on more than one device?",
    a: "Yes. Your subscription covers the Android app, iOS app and the web version at the same time.",
  },
  {
    q: "How much do I save with yearly billing?",
    a: "Yearly billing costs 20% less than paying monthly. The savings are shown on each plan card.",
  },
  {
    q: "Why is pricing different for India and Global?",
    a: "Prices are set per region and shown in local currency (INR or USD). Switch the region above to see the right price for you.",
  },
  {
    q: "What if I need something not listed?",
    a: "Talk to our sales team and we will help you find the right setup.",
  },
];

/* ───────────── Page ───────────── */

export default function PricingPage() {
  const [role, setRole] = useState<Role>("business");
  const [yearly, setYearly] = useState(true);
  const [region, setRegion] = useState<Region>("IN");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  // Detect region once, remember the user's choice
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aptro-region") as Region | null;
      if (saved === "IN" || saved === "US") return setRegion(saved);
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setRegion(tz === "Asia/Kolkata" || tz === "Asia/Calcutta" ? "IN" : "US");
    } catch {}
  }, []);

  const changeRegion = (r: Region) => {
    setRegion(r);
    try { localStorage.setItem("aptro-region", r); } catch {}
  };

  const load = useCallback(async (signal?: AbortSignal) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/plans", { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.success === false) throw new Error("API reported failure");
      const raw: any[] = Array.isArray(json.data) ? json.data : Object.values(json.data || {});
      setPlans(
        raw
          .filter((p) => p.isActive !== false)
          .map((p) => ({ ...p, features: parseFeatures(p) }))
      );
      setStatus("ready");
    } catch (e: any) {
      if (e?.name !== "AbortError") setStatus("error");
    }
  }, []);

  useEffect(() => {
    const ctrl = new AbortController();
    load(ctrl.signal);
    return () => ctrl.abort();
  }, [load]);

  const visible = useMemo(
    () => plans.filter((p) => p.type === role).sort((a, b) => sortKey(a, region) - sortKey(b, region)),
    [plans, role, region]
  );

  // JSON-LD built from real data instead of hardcoded numbers
  const jsonLd = useMemo(() => {
    const prices = plans
      .map((p) => p.prices?.[region]?.monthly)
      .filter((n): n is number => typeof n === "number");
    return [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Aptro",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android, iOS",
        description:
          "Billing, inventory and payroll software for MSMEs and freelancers, with GST-ready invoices.",
        ...(prices.length && {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: region === "IN" ? "INR" : "USD",
            lowPrice: Math.min(...prices),
            highPrice: Math.max(...prices),
            offerCount: prices.length,
          },
        }),
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ];
  }, [plans, region]);

  return (
    <main className="min-h-screen bg-white pb-28 pt-24 text-[#202124] selection:bg-[#D3E3FD]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="text-4xl font-medium leading-[1.15] tracking-tight text-[#1F1F1F] sm:text-5xl md:text-6xl">
            Pricing that grows with your business
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[#5F6368] md:text-[19px]">
            GST billing, inventory and payroll for shops and freelancers. Pick a plan, try it free, and
            upgrade when you are ready. No setup fees.
          </p>
        </header>

        {/* Controls */}
        <nav aria-label="Pricing options" className="mb-14 flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          <Segmented
            label="Who is this for"
            value={role}
            onChange={setRole}
            options={[
              { value: "business", label: <><Building2 size={18} aria-hidden="true" />Shop / MSME</> },
              { value: "freelancers", label: <><User size={18} aria-hidden="true" />Solo worker</> },
            ]}
          />
          <Segmented
            label="Region"
            value={region}
            onChange={changeRegion}
            options={[
              { value: "IN", label: <><MapPin size={18} aria-hidden="true" />India (₹)</> },
              { value: "US", label: <><Globe2 size={18} aria-hidden="true" />Global ($)</> },
            ]}
          />
          <Segmented
            label="Billing cycle"
            value={yearly ? "yearly" : "monthly"}
            onChange={(v) => setYearly(v === "yearly")}
            options={[
              { value: "monthly", label: "Monthly" },
              {
                value: "yearly",
                label: (
                  <>
                    Yearly
                    <span className="rounded-full bg-[#E6F4EA] px-2 py-0.5 text-[12px] font-semibold text-[#0D652D]">
                      Save 20%
                    </span>
                  </>
                ),
              },
            ]}
          />
        </nav>

        {/* Plans */}
        <section aria-labelledby="plans-heading" className="mb-24">
          <h2 id="plans-heading" className="sr-only">Plans</h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-stretch gap-6">
            {status === "loading" && [0, 1, 2].map((i) => <CardSkeleton key={i} />)}

            {status === "ready" && visible.map((p) => (
              <PlanCard key={p.id} plan={p} yearly={yearly} region={region} />
            ))}
          </div>

          {status === "error" && (
            <div role="alert" className="mx-auto max-w-lg rounded-[24px] border border-[#DADCE0] p-10 text-center">
              <h3 className="text-xl font-medium text-[#1F1F1F]">We could not load the plans</h3>
              <p className="mt-2 text-[15px] text-[#5F6368]">Check your connection and try again.</p>
              <button
                type="button"
                onClick={() => load()}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1A73E8] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#1557B0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
              >
                <RefreshCw size={16} aria-hidden="true" />
                Try again
              </button>
            </div>
          )}

          {status === "ready" && visible.length === 0 && (
            <div className="mx-auto max-w-lg rounded-[24px] border border-[#DADCE0] p-10 text-center">
              <h3 className="text-xl font-medium text-[#1F1F1F]">No plans for this category yet</h3>
              <p className="mt-2 text-[15px] text-[#5F6368]">Try the other category, or talk to us about your needs.</p>
              <Link href="/contact?topic=pricing" className="mt-6 inline-block text-[15px] font-semibold text-[#1A73E8] hover:underline">
                Contact sales
              </Link>
            </div>
          )}

          <p className="mt-8 text-center text-[14px] text-[#5F6368]">
            Prices are in {region === "IN" ? "Indian rupees" : "US dollars"}. Applicable taxes may be added at checkout.
          </p>
        </section>

        {/* What every plan includes */}
        <section aria-labelledby="included-heading" className="mb-24">
          <h2 id="included-heading" className="mb-10 text-center text-3xl font-medium text-[#1F1F1F]">
            Included with every plan
          </h2>
          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon size={26} className="mb-3 text-[#1A73E8]" aria-hidden="true" />
                <h3 className="text-[17px] font-medium text-[#1F1F1F]">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-[#5F6368]">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* How it works: a real sequence, so numbering is meaningful */}
        <section aria-labelledby="steps-heading" className="mb-24 rounded-[32px] bg-[#F8F9FA] px-6 py-14 sm:px-12">
          <h2 id="steps-heading" className="mb-10 text-center text-3xl font-medium text-[#1F1F1F]">
            Get started in three steps
          </h2>
          <ol className="grid gap-10 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F0FE] text-[15px] font-semibold text-[#1967D2]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[17px] font-medium text-[#1F1F1F]">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#5F6368]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ: native <details>, zero JS, keyboard accessible */}
        <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl">
          <h2 id="faq-heading" className="mb-8 text-center text-3xl font-medium text-[#1F1F1F]">
            Questions about pricing
          </h2>
          <div className="divide-y divide-[#DADCE0] border-y border-[#DADCE0]">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium text-[#1F1F1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown size={20} className="shrink-0 text-[#5F6368] transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 max-w-[65ch] text-[15px] leading-relaxed text-[#5F6368]">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-10 text-center text-[15px] text-[#5F6368]">
            Still unsure which plan fits?{" "}
            <Link href="/contact?topic=pricing" className="font-semibold text-[#1A73E8] hover:underline">
              Talk to our team
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}