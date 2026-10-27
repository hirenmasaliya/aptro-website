"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, Check, ChevronDown, Info, Link2, Printer, TriangleAlert, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ───────────── Reusable content blocks ───────────── */

export function Callout({
  title, tone = "info", children,
}: { title: string; tone?: "info" | "warn"; children: React.ReactNode }) {
  const Icon = tone === "warn" ? TriangleAlert : Info;
  const cls = tone === "warn" ? "bg-[#FEF7E0] text-[#7A4A00]" : "bg-[#E8F0FE] text-[#174EA6]";
  return (
    <div className={`mt-6 flex gap-3 rounded-xl p-5 text-[15px] leading-relaxed ${cls}`}>
      <Icon size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1">{children}</p>
      </div>
    </div>
  );
}

export function DataTable({ caption, head, rows }: { caption: string; head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-[#DADCE0]">
      <table className="w-full min-w-[560px] text-left text-[15px]">
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
              <th scope="row" className="w-[24%] px-5 py-4 font-semibold text-[#1F1F1F]">{r[0]}</th>
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

export function Bullets({
  items, tone = "do",
}: { items: (string | { label: string; text: string })[]; tone?: "do" | "dont" }) {
  const Icon = tone === "dont" ? X : Check;
  const color = tone === "dont" ? "text-[#D93025]" : "text-[#1A73E8]";
  return (
    <ul className="mt-5 space-y-3">
      {items.map((it) => {
        const key = typeof it === "string" ? it : it.label;
        return (
          <li key={key} className="flex gap-3">
            <Icon size={18} className={`mt-1 shrink-0 ${color}`} aria-hidden="true" />
            <span>
              {typeof it === "string" ? it : (<><strong className="font-semibold text-[#1F1F1F]">{it.label}:</strong> {it.text}</>)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/* ───────────── Layout ───────────── */

export interface LegalSection { id: string; title: string; body: React.ReactNode }

interface Props {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  version: string;
  effectiveDate: string;
  effectiveIso: string; 
  summary?: { heading?: string; points: string[] };
  sections: LegalSection[];
  footerLinks: { href: string; label: string }[];
}

export default function LegalLayout({
  title, subtitle, icon: HeaderIcon, version, effectiveDate, effectiveIso, summary, sections = [], footerLinks = [],
}: Props) {
  const [active, setActive] = useState(sections[0]?.id || "");
  const barRef = useRef<HTMLDivElement>(null);
  const mobileNav = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-100px 0px -65% 0px" }
    );
    document.querySelectorAll("section[data-legal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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

  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === active));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Aptro ${title}`,
    description: subtitle,
    dateModified: effectiveIso,
    version,
    publisher: { "@type": "Organization", name: "Aptro" },
  };

  return (
    <main className="min-h-screen scroll-smooth bg-white pb-28 pt-20 font-sans text-[#202124] selection:bg-[#D3E3FD]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="fixed inset-x-0 top-0 z-50 h-[3px] print:hidden" aria-hidden="true">
        <div ref={barRef} className="h-full origin-left scale-x-0 bg-[#1A73E8]" />
      </div>

      <div className="mx-auto max-w-[1100px] px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium text-[#444746] transition-colors hover:bg-[#F1F3F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] print:hidden"
        >
          <ArrowLeft size={18} aria-hidden="true" /> Home
        </Link>

        <header className="mb-10 max-w-3xl border-b border-[#DADCE0] pb-10">
          {HeaderIcon && (
            <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F0FE] text-[#1A73E8]">
              <HeaderIcon size={24} aria-hidden="true" />
            </span>
          )}
          <h1 className="text-4xl font-medium tracking-tight text-[#1F1F1F] md:text-5xl">{title}</h1>
          <p className="mt-4 text-[17px] leading-relaxed text-[#5F6368]">{subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] text-[#5F6368]">
            <span>Effective <time dateTime={effectiveIso} className="font-medium text-[#3C4043]">{effectiveDate}</time></span>
            <span>Version <span className="font-medium text-[#3C4043]">{version}</span></span>
            <button
              type="button" onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#DADCE0] px-3.5 py-1.5 font-medium text-[#3C4043] hover:bg-[#F8F9FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] print:hidden"
            >
              <Printer size={15} aria-hidden="true" /> Print or save as PDF
            </button>
          </div>
        </header>

        {sections.length > 0 && (
          <details ref={mobileNav} className="group sticky top-20 z-30 mb-8 rounded-xl border border-[#DADCE0] bg-white/95 backdrop-blur lg:hidden print:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-[14px] font-medium text-[#1F1F1F] [&::-webkit-details-marker]:hidden">
              <span className="truncate">
                <span className="text-[#5F6368]">On this page: </span>{activeIndex + 1}. {sections[activeIndex]?.title}
              </span>
              <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <nav aria-label="Sections" className="border-t border-[#E8EAED] p-2">
              {sections.map((s, i) => (
                <a
                  key={s.id} href={`#${s.id}`}
                  onClick={() => mobileNav.current?.removeAttribute("open")}
                  className={`block rounded-lg px-3 py-2.5 text-[14px] ${s.id === active ? "bg-[#E8F0FE] font-medium text-[#174EA6]" : "text-[#444746]"}`}
                >
                  {i + 1}. {s.title}
                </a>
              ))}
            </nav>
          </details>
        )}

        <div className="flex gap-12">
          <aside className="hidden w-64 shrink-0 lg:block print:hidden">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="mb-3 px-4 text-[14px] font-medium text-[#5F6368]">On this page</p>
              <ul className="space-y-0.5">
                {sections.map((s, i) => {
                  const on = s.id === active;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`} aria-current={on ? "true" : undefined}
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

          <article className="min-w-0 max-w-[72ch] flex-1">
            {summary && (
              <section aria-labelledby="summary-heading" className="mb-14 rounded-2xl bg-[#F8F9FA] p-6 sm:p-8">
                <h2 id="summary-heading" className="text-[19px] font-semibold text-[#1F1F1F]">{summary.heading ?? "The short version"}</h2>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#3C4043]">
                  {summary.points.map((t) => (
                    <li key={t} className="flex gap-3">
                      <Check size={18} className="mt-0.5 shrink-0 text-[#1E8E3E]" aria-hidden="true" />{t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[13px] text-[#5F6368]">This summary is for convenience. The full text below applies.</p>
              </section>
            )}

            <div className="space-y-14">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} data-legal className="group/section scroll-mt-32">
                  <h2 className="flex items-center gap-2 text-[24px] font-medium text-[#1F1F1F]">
                    {i + 1}. {s.title}
                    <a
                      href={`#${s.id}`} aria-label={`Link to section ${i + 1}`}
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
                {footerLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="hover:text-[#1A73E8]">{l.label}</Link>
                ))}
                {sections.length > 0 && (
                  <a href={`#${sections[0]?.id}`} className="inline-flex items-center gap-1 hover:text-[#1A73E8]">
                    <ArrowUp size={14} aria-hidden="true" /> Back to top
                  </a>
                )}
              </div>
            </footer>
          </article>
        </div>
      </div>
    </main>
  );
}