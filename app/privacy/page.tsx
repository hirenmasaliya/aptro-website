"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, Check, ChevronDown, Info, Link2, Mail, Printer, ShieldCheck } from "lucide-react";

/* ───────────── Edit these when the policy changes ───────────── */

const VERSION = "1.8.5";
const EFFECTIVE_DATE = "27 October 2026";
const EFFECTIVE_ISO = "2026-10-27";

// NOTE: "aptrosuppor" looks like a typo of "aptrosupport". Confirm the real address.
const SUPPORT_EMAIL = "aptrosuppor@gmail.com";

const VERSION_HISTORY = [
  { version: "1.8.5", date: "27 October 2026" },
  { version: "1.7.2", date: "21 June 2026" },
];

/* ───────────── Small building blocks ───────────── */

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 flex gap-3 rounded-xl bg-[#E8F0FE] p-5 text-[15px] leading-relaxed text-[#174EA6]">
      <Info size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1">{children}</p>
      </div>
    </div>
  );
}

function Table({ caption, head, rows }: { caption: string; head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-[#DADCE0]">
      <table className="w-full min-w-[520px] text-left text-[15px]">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-[#F8F9FA] text-[14px] text-[#5F6368]">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-5 py-3 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8EAED]">
          {rows.map((r, i) => (
            <tr key={i} className="align-top">
              <th scope="row" className="w-[28%] px-5 py-4 font-semibold text-[#1F1F1F]">{r[0]}</th>
              {r.slice(1).map((c, j) => (
                <td key={j} className="px-5 py-4 leading-relaxed text-[#444746]">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <Check size={18} className="mt-1 shrink-0 text-[#1A73E8]" aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ───────────── Policy content ───────────── */
/* EDIT: have a lawyer review this text, especially sections 7 to 9. */

const SECTIONS: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <>
        <p>
          Welcome to Aptro. Your business data is sensitive, and we treat it that way. This Privacy Policy explains how Aptro
          collects, uses, stores and protects your information when you use our mobile app, website and related business
          management services.
        </p>
        <p className="mt-4">By using the Aptro platform, you agree to the collection and use of information described in this policy.</p>
      </>
    ),
  },
  {
    id: "information",
    title: "Information we collect",
    body: (
      <>
        <p>We collect information you give us when you register, and information created as you use the app.</p>
        <Table
          caption="Types of information Aptro collects"
          head={["Type", "What it includes", "Why we need it"]}
          rows={[
            ["Personal details", "Full name, email address and phone number.", "To create and secure your account."],
            ["Business information", "Business name, address, GSTIN or tax ID, and business logo.", "To generate correct invoices."],
            ["App data", "Inventory lists, customer and vendor records, invoices, attendance and payroll records.", "To run the features you use and back up your data."],
          ]}
        />
      </>
    ),
  },
  {
    id: "permissions",
    title: "Device permissions",
    body: (
      <>
        <p>
          To provide core features, Aptro may ask for certain device permissions. You can change or withdraw them at any time in your
          device settings.
        </p>
        <Table
          caption="Device permissions Aptro may request"
          head={["Permission", "What we use it for"]}
          rows={[
            ["Camera", "Only to scan product barcodes or take photos of receipts and logos."],
            ["Storage", "To save downloaded PDF invoices and export reports to your device."],
            ["Contacts (optional)", "To import customers or vendors from your phonebook. Aptro works without it."],
          ]}
        />
      </>
    ),
  },
  {
    id: "usage",
    title: "How we use and share your data",
    body: (
      <>
        <p>
          We use your data only to create orders, manage inventory, back up your business data to the cloud, and provide customer support.
        </p>
        <Callout title="We do not sell your data">
          We do not sell, rent or trade your business data to any third party. We share information only with trusted cloud service
          providers that host it for us, or when a valid legal process requires us to.
        </Callout>
      </>
    ),
  },
  {
    id: "security",
    title: "Data security and retention",
    body: (
      <>
        <p>
          Aptro uses industry-standard security measures. Data sent between your device and our servers is encrypted with HTTPS/TLS,
          and passwords and sensitive tokens are encrypted at rest.
        </p>
        <p className="mt-4">
          We keep your profile and business data while your account is active. If you delete your account, your data is permanently
          removed from our active databases within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your privacy rights",
    body: (
      <>
        <p>You stay in control of your data. You can:</p>
        <Bullets
          items={[
            "Access and view all the data stored in your account.",
            "Export your invoices, customer lists and inventory as CSV or PDF files.",
            "Update or correct inaccurate business details at any time.",
            "Delete your account from Account Settings in the app.",
            "Withdraw permissions you gave earlier, using your device settings.",
          ]}
        />
        <p className="mt-5">If you cannot do something from the app, email us and we will help.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children’s privacy",
    // EDIT: confirm this matches your product and local law.
    body: (
      <p>
        Aptro is built for business use and is not meant for children under 18. We do not knowingly collect personal data from
        children. If you believe a child has given us personal data, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <>
        <p>
          We may update this policy to reflect app improvements or legal requirements. The version and effective date at the top of
          this page always show the latest update. If a change is significant, we will tell you in the app or by email.
        </p>
        <Table
          caption="Privacy policy version history"
          head={["Version", "Effective date"]}
          rows={VERSION_HISTORY.map((v) => [v.version, v.date])}
        />
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us and grievances",
    body: (
      <>
        <p>
          For questions, privacy requests or complaints, contact our privacy team. We will acknowledge your message and reply as soon
          as we can.
        </p>
        <a
          href={`mailto:${SUPPORT_EMAIL}?subject=Aptro%20privacy%20request`}
          className="mt-6 inline-flex items-center gap-4 rounded-full border border-[#DADCE0] py-3 pl-3 pr-6 transition-colors hover:bg-[#F8F9FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1F3F4] text-[#444746]">
            <Mail size={18} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[12px] font-medium text-[#5F6368]">Privacy support</span>
            <span className="block text-[14px] font-medium text-[#1A73E8]">{SUPPORT_EMAIL}</span>
          </span>
        </a>
      </>
    ),
  },
];

/* ───────────── Page ───────────── */

export default function PrivacyPolicyPage() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const barRef = useRef<HTMLDivElement>(null);
  const mobileNav = useRef<HTMLDetailsElement>(null);

  // Highlight the section being read
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-100px 0px -65% 0px" }
    );
    document.querySelectorAll("section[data-policy]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Reading progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(h.scrollTop / max, 1) : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = SECTIONS.findIndex((s) => s.id === active);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aptro Privacy Policy",
    description: "How Aptro collects, uses, stores and protects your business data.",
    dateModified: EFFECTIVE_ISO,
    version: VERSION,
    publisher: { "@type": "Organization", name: "Aptro" },
  };

  return (
    <main className="min-h-screen scroll-smooth bg-white pb-28 pt-20 font-sans text-[#202124] selection:bg-[#D3E3FD]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Reading progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-[3px] print:hidden" aria-hidden="true">
        <div ref={barRef} className="h-full origin-left scale-x-0 bg-[#1A73E8]" />
      </div>

      <div className="mx-auto max-w-[1100px] px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium text-[#444746] transition-colors hover:bg-[#F1F3F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] print:hidden"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Home
        </Link>

        {/* Header */}
        <header className="mb-10 max-w-3xl border-b border-[#DADCE0] pb-10">
          <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F0FE] text-[#1A73E8]">
            <ShieldCheck size={24} aria-hidden="true" />
          </span>
          <h1 className="text-4xl font-medium tracking-tight text-[#1F1F1F] md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-[17px] leading-relaxed text-[#5F6368]">
            What Aptro collects, why we collect it, and the control you have over it.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] text-[#5F6368]">
            <span>
              Effective <time dateTime={EFFECTIVE_ISO} className="font-medium text-[#3C4043]">{EFFECTIVE_DATE}</time>
            </span>
            <span>
              Version <span className="font-medium text-[#3C4043]">{VERSION}</span>
            </span>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#DADCE0] px-3.5 py-1.5 font-medium text-[#3C4043] hover:bg-[#F8F9FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] print:hidden"
            >
              <Printer size={15} aria-hidden="true" />
              Print or save as PDF
            </button>
          </div>
        </header>

        {/* Mobile section picker */}
        <details
          ref={mobileNav}
          className="group sticky top-20 z-30 mb-8 rounded-xl border border-[#DADCE0] bg-white/95 backdrop-blur lg:hidden print:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-[14px] font-medium text-[#1F1F1F] [&::-webkit-details-marker]:hidden">
            <span className="truncate">
              <span className="text-[#5F6368]">On this page: </span>
              {activeIndex + 1}. {SECTIONS[activeIndex].title}
            </span>
            <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <nav aria-label="Sections" className="border-t border-[#E8EAED] p-2">
            {SECTIONS.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => mobileNav.current?.removeAttribute("open")}
                className={`block rounded-lg px-3 py-2.5 text-[14px] ${s.id === active ? "bg-[#E8F0FE] font-medium text-[#174EA6]" : "text-[#444746]"}`}
              >
                {i + 1}. {s.title}
              </a>
            ))}
          </nav>
        </details>

        <div className="flex gap-12">
          {/* Desktop table of contents */}
          <aside className="hidden w-64 shrink-0 lg:block print:hidden">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="mb-3 px-4 text-[14px] font-medium text-[#5F6368]">On this page</p>
              <ul className="space-y-0.5">
                {SECTIONS.map((s, i) => {
                  const on = s.id === active;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        aria-current={on ? "true" : undefined}
                        className={`block rounded-full px-4 py-2.5 text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] ${
                          on ? "bg-[#D3E3FD] font-medium text-[#041E49]" : "text-[#444746] hover:bg-[#F1F3F4]"
                        }`}
                      >
                        {i + 1}. {s.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Document */}
          <article className="min-w-0 max-w-[72ch] flex-1">
            {/* Plain-language summary */}
            <section aria-labelledby="summary-heading" className="mb-14 rounded-2xl bg-[#F8F9FA] p-6 sm:p-8">
              <h2 id="summary-heading" className="text-[19px] font-semibold text-[#1F1F1F]">The short version</h2>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#3C4043]">
                {[
                  "We never sell, rent or trade your business data.",
                  "Data moves between your device and our servers over encrypted HTTPS/TLS.",
                  "You can export your data, correct it, or delete your account from the app.",
                  "Deleted accounts are removed from our active databases within 30 days.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-[#1E8E3E]" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[13px] text-[#5F6368]">This summary is for convenience. The full policy below applies.</p>
            </section>

            <div className="space-y-14">
              {SECTIONS.map((s, i) => (
                <section key={s.id} id={s.id} data-policy className="group/section scroll-mt-32">
                  <h2 className="flex items-center gap-2 text-[24px] font-medium text-[#1F1F1F]">
                    {i + 1}. {s.title}
                    <a
                      href={`#${s.id}`}
                      aria-label={`Link to section ${i + 1}`}
                      className="rounded p-1 text-[#80868B] opacity-0 transition-opacity hover:text-[#1A73E8] focus-visible:opacity-100 group-hover/section:opacity-100 print:hidden"
                    >
                      <Link2 size={18} aria-hidden="true" />
                    </a>
                  </h2>
                  <div className="mt-4 text-[16px] leading-[1.75] text-[#444746]">{s.body}</div>
                </section>
              ))}
            </div>

            <footer className="mt-16 flex flex-col justify-between gap-4 border-t border-[#DADCE0] pt-8 text-[14px] text-[#5F6368] sm:flex-row sm:items-center">
              <p>© {new Date().getFullYear()} Aptro App. All rights reserved.</p>
              <div className="flex flex-wrap items-center gap-6 print:hidden">
                <Link href="/terms" className="hover:text-[#1A73E8]">Terms of service</Link>
                <Link href="/contact" className="hover:text-[#1A73E8]">Contact support</Link>
                <a href="#introduction" className="inline-flex items-center gap-1 hover:text-[#1A73E8]">
                  <ArrowUp size={14} aria-hidden="true" /> Back to top
                </a>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </main>
  );
}