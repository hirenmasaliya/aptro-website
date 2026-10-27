"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Clock,
  Copy,
  GraduationCap,
  MessageCircle,
  Wallet,
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

/* ───────────── Content ───────────── */

const PLANS = [
  { id: "standard", name: "Standard Affiliate", price: 99, activation: 50, recurring: 10 },
  { id: "pro", name: "Pro Partner", price: 199, activation: 100, recurring: 20, popular: true },
  { id: "max", name: "Max Agency", price: 249, activation: 150, recurring: 50 },
] as const;

const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

const BENEFITS = [
  { icon: Wallet, title: "No joining fee", text: "You never pay to join. You earn when a shop you referred buys an Aptro plan." },
  { icon: Clock, title: "Work around your classes", text: "No targets and no fixed hours. Refer shops on weekends, holidays or between exams." },
  { icon: Briefcase, title: "Real sales experience", text: "Practise pitching, following up and closing with real local businesses." },
  { icon: GraduationCap, title: "Training and pitch material", text: "Learn how Aptro handles GST billing, inventory, staff attendance and digital khata before you pitch." },
];

const STEPS = [
  { title: "Apply in about 3 minutes", text: "Fill in your details and get a temporary ID straight away." },
  { title: "Get approved and trained", text: "We review your application and email your final Partner ID." },
  { title: "Introduce Aptro to shops", text: "Show local retailers and wholesalers how Aptro simplifies billing." },
  { title: "Get paid", text: "Commission is paid to your bank account or UPI once the shop's payment is verified." },
];

// EDIT: confirm every answer matches your real policy.
const FAQS = [
  { q: "Is there any registration fee for the student partner program?", a: "No. Joining the Aptro student partner program is free, with no hidden charges." },
  { q: "What will I be selling?", a: "The Aptro Business App: GST billing, inventory, staff attendance and digital khata for retailers, wholesalers and small shops. Training and pitch material are provided." },
  { q: "Do I need prior sales experience?", a: "No. We explain the product and how to pitch it, so you can start as a beginner." },
  { q: "Is there a monthly target?", a: "No compulsory targets. You work on your own schedule and earn based on the shops that actually buy a plan." },
  { q: "How much can I earn?", a: "It depends on how many shops you bring and which plan they choose. Use the earnings estimator at the top of this page, and note that results are not guaranteed." },
  { q: "How and when do I get paid?", a: "Commission is credited after the merchant's payment is verified, and sent to your bank account or UPI ID." },
  { q: "Who can apply?", a: "Students with a valid student ID. You will need your college details and a bank account for payouts." },
  { q: "What happens after I submit the form?", a: "You get a temporary ID immediately. After we review your application, you will receive an email with your final Partner ID." },
];

/* ───────────── Form config ───────────── */

type Name =
  | "fullName" | "mobile" | "email" | "dob" | "gender" | "address"
  | "college" | "course" | "studentId"
  | "accHolder" | "bankName" | "accNum" | "ifsc" | "upi";
type Form = Record<Name, string>;

interface FieldDef {
  name: Name;
  label: string;
  type?: "text" | "tel" | "email" | "date" | "select" | "textarea";
  autoComplete?: string;
  inputMode?: "numeric" | "text" | "tel";
  hint?: string;
  optional?: boolean;
  half?: boolean;
  validate?: (v: string) => string;
}

const digits = (v: string) => v.replace(/\D/g, "");
const required = (label: string) => (v: string) => (v.trim() ? "" : `Enter your ${label.toLowerCase()}`);

const STEP_DEFS: { title: string; fields: FieldDef[] }[] = [
  {
    title: "Personal details",
    fields: [
      { name: "fullName", label: "Full name", autoComplete: "name", validate: required("full name") },
      {
        name: "mobile", label: "Mobile number", type: "tel", autoComplete: "tel-national", inputMode: "numeric",
        hint: "10-digit number, we may call or WhatsApp you", half: true,
        validate: (v) => (/^[6-9]\d{9}$/.test(digits(v).slice(-10)) ? "" : "Enter a valid 10-digit mobile number"),
      },
      {
        name: "email", label: "Email address", type: "email", autoComplete: "email", half: true,
        hint: "Your final Partner ID will be sent here",
        validate: (v) => (/^\S+@\S+\.\S+$/.test(v.trim()) ? "" : "Enter a valid email address"),
      },
      {
        name: "dob", label: "Date of birth", type: "date", autoComplete: "bday", half: true,
        validate: (v) => {
          if (!v) return "Select your date of birth";
          return new Date(v) > new Date() ? "Date of birth cannot be in the future" : "";
        },
      },
      {
        name: "gender", label: "Gender", type: "select", half: true,
        validate: (v) => (v ? "" : "Select an option"),
      },
      { name: "address", label: "Full address", type: "textarea", autoComplete: "street-address", validate: required("address") },
    ],
  },
  {
    title: "College details",
    fields: [
      { name: "college", label: "College or university name", validate: required("college name") },
      { name: "course", label: "Course and department", half: true, hint: "For example: B.Com, Commerce", validate: required("course") },
      { name: "studentId", label: "Student ID number", half: true, validate: required("student ID") },
    ],
  },
  {
    title: "Payout details",
    fields: [
      { name: "accHolder", label: "Account holder name", validate: required("account holder name") },
      { name: "bankName", label: "Bank name", half: true, validate: required("bank name") },
      {
        name: "accNum", label: "Account number", inputMode: "numeric", half: true,
        validate: (v) => (/^\d{9,18}$/.test(v.trim()) ? "" : "Account number should be 9 to 18 digits"),
      },
      {
        name: "ifsc", label: "IFSC code", half: true, hint: "11 characters, for example SBIN0001234",
        validate: (v) => (/^[A-Z]{4}0[A-Z0-9]{6}$/.test(v.trim().toUpperCase()) ? "" : "Enter a valid 11-character IFSC code"),
      },
      {
        name: "upi", label: "UPI ID", half: true, optional: true, hint: "Optional, for example name@bank",
        validate: (v) => (!v.trim() || /^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(v.trim()) ? "" : "Enter a valid UPI ID"),
      },
    ],
  },
];

const EMPTY: Form = {
  fullName: "", mobile: "", email: "", dob: "", gender: "", address: "",
  college: "", course: "", studentId: "",
  accHolder: "", bankName: "", accNum: "", ifsc: "", upi: "",
};

// Bank details are never written to localStorage
const SENSITIVE: Name[] = ["accHolder", "bankName", "accNum", "ifsc", "upi"];
const DRAFT_KEY = "aptro-partner-draft";

const inputCls = (err: boolean) =>
  `w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-[#202124] transition-colors focus:outline-none focus:ring-2 disabled:bg-[#F1F3F4] ${
    err ? "border-[#D93025] focus:ring-[#D93025]/30" : "border-[#DADCE0] focus:border-[#1A73E8] focus:ring-[#1A73E8]/30"
  }`;

function Field({
  def, value, error, disabled, onChange,
}: {
  def: FieldDef; value: string; error?: string; disabled: boolean;
  onChange: (name: Name, v: string) => void;
}) {
  const id = def.name;
  const describedBy = error ? `${id}-err` : def.hint ? `${id}-hint` : undefined;
  const common = {
    id, name: id, value, disabled,
    "aria-invalid": !!error,
    "aria-describedby": describedBy,
    autoComplete: def.autoComplete,
    className: inputCls(!!error),
  };

  return (
    <div className={def.half ? "" : "md:col-span-2"}>
      <label htmlFor={id} className="mb-1.5 block text-[14px] font-medium text-[#3C4043]">
        {def.label}
        {def.optional && <span className="ml-1 font-normal text-[#5F6368]">(optional)</span>}
      </label>

      {def.type === "select" ? (
        <select {...common} onChange={(e) => onChange(def.name, e.target.value)}>
          <option value="" disabled>Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other / prefer not to say</option>
        </select>
      ) : def.type === "textarea" ? (
        <textarea {...common} rows={3} onChange={(e) => onChange(def.name, e.target.value)} className={`${inputCls(!!error)} resize-none`} />
      ) : (
        <input
          {...common}
          type={def.type ?? "text"}
          inputMode={def.inputMode}
          autoCapitalize={def.name === "ifsc" ? "characters" : undefined}
          max={def.type === "date" ? new Date().toISOString().split("T")[0] : undefined}
          onChange={(e) => onChange(def.name, def.name === "ifsc" ? e.target.value.toUpperCase() : e.target.value)}
        />
      )}

      {error ? (
        <p id={`${id}-err`} className="mt-1.5 text-[13px] text-[#C5221F]">{error}</p>
      ) : def.hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-[13px] text-[#5F6368]">{def.hint}</p>
      ) : null}
    </div>
  );
}

/* ───────────── Earnings estimator ───────────── */

function Estimator() {
  const [planId, setPlanId] = useState<(typeof PLANS)[number]["id"]>("pro");
  const [shops, setShops] = useState(5);
  const plan = PLANS.find((p) => p.id === planId)!;

  return (
    <div className="rounded-[24px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-[20px] font-semibold text-[#1F1F1F]">Estimate your earnings</h2>

      <div role="group" aria-label="Plan the shop buys" className="mt-5 flex flex-wrap gap-2">
        {PLANS.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-pressed={p.id === planId}
            onClick={() => setPlanId(p.id)}
            className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] ${
              p.id === planId ? "border-[#1A73E8] bg-[#E8F0FE] text-[#1967D2]" : "border-[#DADCE0] text-[#5F6368] hover:border-[#5F6368]"
            }`}
          >
            {inr(p.price)} plan
          </button>
        ))}
      </div>

      <label htmlFor="shops" className="mt-6 flex items-baseline justify-between text-[14px] font-medium text-[#3C4043]">
        Shops you bring in
        <output htmlFor="shops" className="text-[18px] font-semibold text-[#1F1F1F]">{shops}</output>
      </label>
      <input
        id="shops" type="range" min={1} max={30} value={shops}
        onChange={(e) => setShops(Number(e.target.value))}
        className="mt-2 w-full accent-[#1A73E8]"
      />

      <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-[#E8EAED] pt-6" aria-live="polite">
        <div>
          <dt className="text-[13px] text-[#5F6368]">One-time activation</dt>
          <dd className="mt-1 text-3xl font-medium tracking-tight text-[#1F1F1F]">{inr(plan.activation * shops)}</dd>
        </div>
        <div>
          <dt className="text-[13px] text-[#5F6368]">Each renewal cycle</dt>
          <dd className="mt-1 text-3xl font-medium tracking-tight text-[#1A73E8]">{inr(plan.recurring * shops)}</dd>
        </div>
      </dl>
      <p className="mt-5 text-[12.5px] leading-relaxed text-[#5F6368]">
        Illustration only, based on the commission table below. Actual earnings depend on how many shops buy and renew.
      </p>
    </div>
  );
}

/* ───────────── Page ───────────── */

export default function JoinPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Name, string>>>({});
  const [agreed, setAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [tempId, setTempId] = useState("");
  const [copied, setCopied] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const applyRef = useRef<HTMLElement>(null);
  const attribution = useRef<Record<string, string>>({});

  // Restore draft (never includes bank details) and capture referral / UTM source
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) setForm((f) => ({ ...f, ...JSON.parse(raw) }));
    } catch {}
    const q = new URLSearchParams(window.location.search);
    ["ref", "utm_source", "utm_medium", "utm_campaign"].forEach((k) => {
      const v = q.get(k);
      if (v) attribution.current[k] = v.slice(0, 100);
    });
  }, []);

  useEffect(() => {
    try {
      const safe = Object.fromEntries(Object.entries(form).filter(([k]) => !SENSITIVE.includes(k as Name)));
      localStorage.setItem(DRAFT_KEY, JSON.stringify(safe));
    } catch {}
  }, [form]);

  // Hide the mobile sticky CTA while the form is on screen
  useEffect(() => {
    const el = applyRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (step > 0) headingRef.current?.focus();
  }, [step]);

  const onChange = (name: Name, value: string) => {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const validateStep = (i: number) => {
    const next: Partial<Record<Name, string>> = {};
    STEP_DEFS[i].fields.forEach((f) => {
      const msg = f.validate?.(form[f.name]) ?? "";
      if (msg) next[f.name] = msg;
    });
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return false;
    }
    return true;
  };

  const submit = async () => {
    setStatus("loading");
    setErrorMessage("");
    const payload = {
      ...form,
      fullName: form.fullName.trim(),
      mobile: digits(form.mobile).slice(-10),
      email: form.email.trim().toLowerCase(),
      ifsc: form.ifsc.trim().toUpperCase(),
      upi: form.upi.trim(),
      ...attribution.current,
    };
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setTempId(data.tempId);
      setStatus("success");
      try { localStorage.removeItem(DRAFT_KEY); } catch {}
    } catch (e: any) {
      setStatus("error");
      setErrorMessage(e?.message?.includes("fetch") ? "We could not reach the server. Check your connection and try again." : e?.message || "Something went wrong.");
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!validateStep(step)) return;
    if (step < STEP_DEFS.length - 1) return setStep(step + 1);
    if (!agreed) { setAgreeError(true); return; }
    submit();
  };

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(tempId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const shareHref = useMemo(() => {
    const url = typeof window !== "undefined" ? `${window.location.origin}/join` : "/join";
    return `https://wa.me/?text=${encodeURIComponent(`Students can earn by introducing Aptro billing software to local shops. No joining fee: ${url}`)}`;
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
    []
  );

  const def = STEP_DEFS[step];
  const isLast = step === STEP_DEFS.length - 1;
  const loading = status === "loading";

  return (
    <main className={`min-h-screen scroll-smooth bg-white pt-20 text-[#202124] selection:bg-[#D3E3FD] ${jakarta.className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <header className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
        <div>
          <h1 className="text-4xl font-medium leading-[1.15] tracking-tight text-[#1F1F1F] sm:text-5xl lg:text-[56px]">
            Earn from your phone while you study
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#5F6368]">
            Introduce local shops to the Aptro Business App for GST billing, inventory and digital khata. Earn a commission when a shop
            you referred buys a plan, and again on every renewal. Joining is free.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-full bg-[#1A73E8] px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1557B0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
            >
              Apply to become a partner
            </a>
            <Link
              href="/how-it-works"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#DADCE0] px-8 py-3.5 text-[15px] font-semibold text-[#1A73E8] transition-colors hover:bg-[#F8F9FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
            >
              See how Aptro works
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <Estimator />
      </header>

      {/* Commission table (a real table: easier to compare, better for search) */}
      <section aria-labelledby="commission-heading" className="mx-auto max-w-[1000px] px-6 py-16">
        <h2 id="commission-heading" className="text-3xl font-medium text-[#1F1F1F]">Commission per shop</h2>
        <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-[#5F6368]">
          You earn a one-time activation commission when the shop starts, and a recurring commission each time it renews.
        </p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-[#DADCE0]">
          <table className="w-full min-w-[560px] text-left text-[15px]">
            <caption className="sr-only">Aptro partner commission by merchant plan</caption>
            <thead className="bg-[#F8F9FA] text-[14px] text-[#5F6368]">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Partner tier</th>
                <th scope="col" className="px-6 py-4 font-medium">Shop pays</th>
                <th scope="col" className="px-6 py-4 font-medium">You earn at activation</th>
                <th scope="col" className="px-6 py-4 font-medium">You earn per renewal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8EAED]">
              {PLANS.map((p) => (
                <tr key={p.id} className={"popular" in p && p.popular ? "bg-[#F5F9FF]" : ""}>
                  <th scope="row" className="px-6 py-5 font-semibold text-[#1F1F1F]">
                    {p.name}
                    {"popular" in p && p.popular && (
                      <span className="ml-2 rounded-full bg-[#1A73E8] px-2.5 py-0.5 text-[12px] font-medium text-white">Most chosen</span>
                    )}
                  </th>
                  <td className="px-6 py-5 text-[#3C4043]">{inr(p.price)}</td>
                  <td className="px-6 py-5 font-medium text-[#1F1F1F]">{inr(p.activation)}</td>
                  <td className="px-6 py-5 font-medium text-[#1A73E8]">{inr(p.recurring)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits */}
      <section aria-labelledby="benefits-heading" className="mx-auto max-w-[1000px] px-6 py-16">
        <h2 id="benefits-heading" className="text-3xl font-medium text-[#1F1F1F]">Why students join</h2>
        <ul className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F0FE] text-[#1A73E8]">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[17px] font-semibold text-[#1F1F1F]">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-[#5F6368]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Steps: a real sequence */}
      <section aria-labelledby="steps-heading" className="bg-[#F8F9FA] py-16">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 id="steps-heading" className="text-3xl font-medium text-[#1F1F1F]">How it works</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[15px] font-semibold text-[#1967D2] ring-1 ring-[#D2E3FC]">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-[17px] font-semibold text-[#1F1F1F]">{s.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-[#5F6368]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Application */}
      <section id="apply" ref={applyRef} aria-labelledby="form-heading" className="mx-auto max-w-[760px] scroll-mt-24 px-6 py-16">
        <h2 id="form-heading" className="text-3xl font-medium text-[#1F1F1F]">Apply to become a partner</h2>
        <p className="mt-3 text-[16px] text-[#5F6368]">Three short steps. Your progress is saved on this device (bank details are not).</p>

        <div className="mt-8 rounded-[24px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-10">
          {status === "success" ? (
            <div className="text-center" role="status">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F4EA] text-[#1E8E3E]">
                <CheckCircle size={32} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-medium text-[#1F1F1F]">Application received</h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[#5F6368]">
                We are reviewing your application. You will get an email with your final Partner ID once it is approved.
              </p>

              <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] py-3 pl-5 pr-3">
                <div className="text-left">
                  <p className="text-[13px] text-[#5F6368]">Your temporary ID</p>
                  <p className="font-mono text-xl text-[#1F1F1F]">{tempId}</p>
                </div>
                <button
                  type="button" onClick={copyId}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#DADCE0] bg-white px-3.5 py-2 text-[13px] font-medium text-[#1F1F1F] hover:border-[#5F6368] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
                >
                  <Copy size={14} aria-hidden="true" />
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="mt-4 text-[14px] text-[#5F6368]">Keep this ID safe. You will need it if you contact support.</p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button" onClick={() => router.push("/partner/dashboard")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#1557B0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
                >
                  Go to dashboard <ArrowRight size={18} aria-hidden="true" />
                </button>
                <a
                  href={shareHref} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DADCE0] px-6 py-3 text-[15px] font-semibold text-[#1F1F1F] hover:border-[#5F6368] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
                >
                  <MessageCircle size={18} aria-hidden="true" /> Share with a friend
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-[14px]">
                  <h3 ref={headingRef} tabIndex={-1} className="text-[18px] font-semibold text-[#1F1F1F] outline-none">
                    {def.title}
                  </h3>
                  <span className="text-[#5F6368]">Step {step + 1} of {STEP_DEFS.length}</span>
                </div>
                <div
                  role="progressbar" aria-valuemin={1} aria-valuemax={STEP_DEFS.length} aria-valuenow={step + 1}
                  aria-label="Application progress" className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E8EAED]"
                >
                  <div className="h-full rounded-full bg-[#1A73E8] transition-all duration-300" style={{ width: `${((step + 1) / STEP_DEFS.length) * 100}%` }} />
                </div>
              </div>

              {status === "error" && (
                <div role="alert" className="mb-6 flex items-start gap-3 rounded-lg border border-[#FAD2CF] bg-[#FCE8E6] p-4 text-[14px] font-medium text-[#C5221F]">
                  <AlertCircle size={20} className="mt-px shrink-0" aria-hidden="true" />
                  {errorMessage}
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                {def.fields.map((f) => (
                  <Field key={f.name} def={f} value={form[f.name]} error={errors[f.name]} disabled={loading} onChange={onChange} />
                ))}
              </div>

              {isLast && (
                <div className="mt-8">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox" checked={agreed} disabled={loading}
                      onChange={(e) => { setAgreed(e.target.checked); setAgreeError(false); }}
                      aria-invalid={agreeError}
                      className="mt-1 h-4 w-4 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-[#1A73E8]"
                    />
                    <span className="text-[14px] leading-relaxed text-[#5F6368]">
                      I confirm the information is accurate. I understand this is a performance-based affiliate partnership and agree to
                      follow Aptro&apos;s marketing guidelines and the{" "}
                      <Link href="/terms" className="font-medium text-[#1A73E8] hover:underline">terms</Link>.
                    </span>
                  </label>
                  {agreeError && <p className="mt-2 text-[13px] text-[#C5221F]">Tick the box to submit your application</p>}
                </div>
              )}

              <div className="mt-10 flex items-center justify-between gap-4">
                {step > 0 ? (
                  <button
                    type="button" onClick={() => setStep(step - 1)} disabled={loading}
                    className="rounded-full px-5 py-3 text-[15px] font-semibold text-[#1A73E8] hover:bg-[#F1F3F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
                  >
                    Back
                  </button>
                ) : <span />}
                <button
                  type="submit" disabled={loading}
                  className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-8 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1557B0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting
                    </>
                  ) : isLast ? "Submit application" : "Continue"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ: native details, no JS needed */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-[720px] px-6 pb-28 pt-8">
        <h2 id="faq-heading" className="text-3xl font-medium text-[#1F1F1F]">Student partner FAQs</h2>
        <div className="mt-8 divide-y divide-[#DADCE0] border-y border-[#DADCE0]">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium text-[#1F1F1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown size={20} className="shrink-0 text-[#5F6368] transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-[#5F6368]">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-[#5F6368]">
          Earnings are performance-based and depend on the shops you bring. No income is guaranteed.
        </p>
      </section>

      {/* Mobile sticky CTA, hidden while the form is visible */}
      <div
        className={`fixed inset-x-0 bottom-0 z-20 border-t border-[#DADCE0] bg-white/95 px-4 pt-3 backdrop-blur transition-transform duration-200 md:hidden ${
          formVisible || status === "success" ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
      >
        <a href="#apply" className="flex items-center justify-center rounded-full bg-[#1A73E8] py-3 text-[15px] font-semibold text-white">
          Apply to become a partner
        </a>
      </div>
    </main>
  );
}