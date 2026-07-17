"use client";

import { useState } from "react";
import {
  ShieldCheck, Smartphone, Layers, Users,
  ArrowRight, CheckCircle2, User, Building2, Briefcase, Globe, Zap,
  BarChart3, Lock, Package, Bell, Calculator, ClipboardList,
  Wallet, Receipt, Box, LineChart, CheckSquare, Sparkles
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Apple-style smooth continuous easing
const appleEase = [0.16, 1, 0.3, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: appleEase } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const roleContent = {
  freelancer: {
    badge: "Solo Workspace",
    title: "Refined for the individual.",
    desc: "A singular environment designed to minimize administrative cognitive load, automate tracking, and keep execution frictionless.",
    spotlight: [
      {
        title: "Smart Dashboard & Project Hub",
        desc: "Your entire freelance business at a single glance. Manage clients, track specific project milestones, and monitor operational health in real-time.",
        icon: <BarChart3 className="w-5 h-5" />,
        details: ["Live Dashboard Insights", "Project Information Tracking", "Client Directory Management"],
        gridSize: "md:col-span-2"
      },
      {
        title: "Payment Tracking",
        desc: "Meticulous records of your cash flow with manual entry and balance logs.",
        icon: <Wallet className="w-5 h-5" />,
        details: ["Payment History Logs", "Manual Entry Hub"],
        gridSize: "md:col-span-1"
      },
      {
        title: "Task Engine & Notes",
        desc: "Write comprehensive project specs, manage your daily agenda, and prioritize output without jumping between fragmented applications.",
        icon: <CheckSquare className="w-5 h-5" />,
        details: ["Dedicated Tasks View", "Rich Project Documentation"],
        gridSize: "md:col-span-1"
      },
      {
        title: "Billing & Quotations",
        desc: "Win more opportunities and get paid instantly. Construct professional estimates and convert them into clean invoices with a single gesture.",
        icon: <Receipt className="w-5 h-5" />,
        details: ["Instant Quote Builder", "One-Click PDF Billing"],
        gridSize: "md:col-span-2"
      }
    ]
  },
  business: {
    badge: "Enterprise Infrastructure",
    title: "Orchestrate your growth.",
    desc: "Advanced ledger systems designed for automated inventory synchronization, robust tax compliance, and unified workforce administration.",
    spotlight: [
      {
        title: "Dual-Sided CRM Architecture",
        desc: "Segment suppliers, track client behaviors, and register customer directories in one database ecosystem.",
        icon: <Users className="w-5 h-5" />,
        details: ["B2B & B2C Isolation", "Global Log History"],
        gridSize: "md:col-span-1"
      },
      {
        title: "Real-time Stock Ledger",
        desc: "Total inventory control. Create instant product summaries, adjust stock levels on the fly, and receive automatic notification thresholds when item counts drop low.",
        icon: <Package className="w-5 h-5" />,
        details: ["Live SKU Counters", "Smart Lower Threshold Alerts", "Product Registry Audits"],
        gridSize: "md:col-span-2"
      },
      {
        title: "GST Compliance Core",
        desc: "Automate accounting with native tax computation frameworks and instant reporting matrix parameters.",
        icon: <Calculator className="w-5 h-5" />,
        details: ["Compliant Local Invoicing", "Automated Sales Reports"],
        gridSize: "md:col-span-2"
      },
      {
        title: "Workforce & Payroll",
        desc: "Track internal attendance metrics and manage automated balance payroll schedules natively.",
        icon: <ClipboardList className="w-5 h-5" />,
        details: ["Daily Shift Tracking", "Instant Compensation Auditing"],
        gridSize: "md:col-span-1"
      }
    ]
  }
};

const commonFeatures = [
  { title: "Bank-Grade Encryption", icon: <Lock size={18} />, desc: "AES-256 protocol standard architecture with hardware-isolated security key management modules." },
  { title: "Cross-Platform Sync", icon: <Smartphone size={18} />, desc: "Unified synchronization states across fully native iOS, Android, and desktop ecosystems." },
  { title: "Global Settlement", icon: <Globe size={18} />, desc: "Multi-currency reconciliation algorithms supported by localized tax balancing parameters." },
  { title: "Universal API Layer", icon: <Layers size={18} />, desc: "Connect external processing clusters natively with over 2,000 existing business platforms." },
  { title: "Real-Time Webhooks", icon: <Zap size={18} />, desc: "Zero-latency payload distribution maps keeping internal and external tables completely synchronous." },
  { title: "Enterprise SLA Support", icon: <Briefcase size={18} />, desc: "Direct engineering communication access and constant proactive operational up-time protection frameworks." },
];

export default function FeaturesPage() {
  const [role, setRole] = useState<"freelancer" | "business">("freelancer");
  const activeContent = roleContent[role];

  return (
    <main className={`min-h-screen pt-36 pb-32 text-zinc-950 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative tracking-tight ${jakarta.className}`}>

      {/* --- Server-side Background Image Layer Removed --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#FAFAFA]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#FAFAFA]/80 to-[#FAFAFA]" />
        {/* Abstract glowing orb - Updated to Blue */}
        <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-blue-400/5 blur-[140px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Header Section --- */}
        <section className="max-w-4xl mx-auto mb-28 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: appleEase }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-blue-600 text-xs font-semibold tracking-wider uppercase border border-zinc-200/80 mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          >
            <Sparkles size={12} className="text-blue-500" />
            Capabilities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.05 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter mb-8 leading-[1.02] text-zinc-900"
          >
            Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-blue-950 to-blue-600">
              modern workflows.
            </span>
          </motion.h1>

          {/* Elegant Segmented Switcher Control */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: appleEase, delay: 0.12 }}
            className="inline-flex p-1 bg-zinc-200/60 backdrop-blur-xl rounded-full border border-zinc-200/40 shadow-inner"
          >
            {(["freelancer", "business"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setRole(tab)}
                className={`relative flex items-center gap-2 px-7 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors z-10 ${
                  role === tab ? "text-blue-600" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {role === tab && (
                  <motion.div
                    layoutId="featuresTab"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_3px_12px_rgba(0,0,0,0.06)] border border-zinc-200/50"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab === "freelancer" ? <User size={13} /> : <Building2 size={13} />}
                  {tab}
                </span>
              </button>
            ))}
          </motion.div>
        </section>

        {/* --- Spotlight Bento Content --- */}
        <section className="mb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: appleEase }}
            >
              {/* Profile Intro Context */}
              <div className="mb-14 border-b border-zinc-200/60 pb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500 block mb-2">{activeContent.badge}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">{activeContent.title}</h2>
                <p className="text-base md:text-lg text-zinc-500 max-w-2xl leading-relaxed font-medium">{activeContent.desc}</p>
              </div>

              {/* Bento System Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeContent.spotlight.map((feature, i) => (
                  <div
                    key={i}
                    className={`group relative p-8 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-zinc-300 transition-all duration-500 flex flex-col justify-between overflow-hidden ${feature.gridSize}`}
                  >
                    <div className="space-y-5">
                      <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center text-zinc-900 group-hover:text-blue-600 transition-colors">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight mb-2 text-zinc-900">{feature.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed font-medium max-w-xl">{feature.desc}</p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2.5 z-10">
                      {feature.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-100 rounded-full shadow-sm text-xs text-zinc-700 font-medium"
                        >
                          <CheckCircle2 size={13} className="text-blue-500" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Minimal Ambient Highlight Line */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                ))}

                {/* Hero Abstract Live UI Mockup Card inside Bento */}
                <div className="md:col-span-3 rounded-[2.5rem] border border-zinc-200/80 bg-white/40 backdrop-blur-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 shadow-[0_10px_50px_rgba(0,0,0,0.02)] overflow-hidden relative group mt-4">
                  <div className="absolute -left-12 -top-12 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                  
                  <div className="flex-1 space-y-6 relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-white px-2.5 py-1 rounded-full border border-zinc-200/60 shadow-sm">Interactive Model</span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">The Architecture in Practice.</h3>
                    <p className="text-sm lg:text-base text-zinc-500 leading-relaxed font-medium">
                      Every panel, telemetry line, and data map operates inside a single unified window space. No loading steps, no secondary authentication loops—just real-time rendering.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-zinc-700">
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Global View States</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Continuous Local Cache</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Background Delta Syncing</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Instant Compilation Engine</li>
                    </ul>
                  </div>

                  <div className="flex-1 w-full relative max-w-xl">
                    <div className="relative w-full aspect-[16/10] bg-white rounded-2xl border border-zinc-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col p-4 gap-4 overflow-hidden group-hover:border-zinc-300 transition-colors duration-500">
                      
                      <div className="w-full flex justify-between items-center border-b border-zinc-100 pb-3">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 bg-zinc-200 rounded-full" />
                          <div className="w-2.5 h-2.5 bg-zinc-200 rounded-full" />
                          <div className="w-2.5 h-2.5 bg-zinc-200 rounded-full" />
                        </div>
                        <div className="w-24 h-2 bg-zinc-100 rounded-full" />
                      </div>

                      <div className="flex flex-1 gap-4">
                        <div className="w-1/4 h-full hidden sm:flex flex-col gap-3 border-r border-zinc-100 pr-3">
                          <div className="w-full h-2 bg-blue-50 rounded-full" />
                          <div className="w-4/5 h-1.5 bg-zinc-100 rounded-full" />
                          <div className="w-2/3 h-1.5 bg-zinc-100 rounded-full" />
                          <div className="w-3/4 h-1.5 bg-zinc-100 rounded-full" />
                        </div>

                        <div className="flex-1 h-full flex flex-col gap-3">
                          <div className="w-full h-24 rounded-xl border border-zinc-100 bg-[#FAFAFA] p-3 flex flex-col justify-between relative overflow-hidden">
                            <LineChart className="absolute -bottom-2 -right-2 opacity-5 w-20 h-20 text-blue-900" />
                            <div className="w-12 h-1.5 bg-zinc-200 rounded-full" />
                            <div className="w-20 h-3 bg-blue-600 rounded-full shadow-sm shadow-blue-600/10" />
                          </div>
                          <div className="grid grid-cols-2 gap-3 flex-1">
                            <div className="rounded-xl border border-zinc-100 p-3 flex flex-col gap-2 bg-white">
                              <div className="w-8 h-1.5 bg-zinc-200 rounded-full" />
                              <div className="w-12 h-1.5 bg-zinc-100 rounded-full" />
                            </div>
                            <div className="rounded-xl border border-zinc-100 p-3 flex flex-col gap-2 bg-white">
                              <div className="w-10 h-1.5 bg-zinc-200 rounded-full" />
                              <div className="w-6 h-1.5 bg-blue-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* --- Standard Infrastructure Grid (Bento Style) --- */}
        <section className="pt-24 border-t border-zinc-200/80">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900">Universal Baseline</h2>
            <p className="text-base text-zinc-500 font-medium leading-relaxed">Foundational layers compiled natively into every node cluster, protecting privacy, sync fidelity, and integration reach across standard runtimes.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {commonFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="group relative p-8 bg-white/70 backdrop-blur-xl border border-zinc-200/60 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:bg-white flex flex-col justify-between h-64"
              >
                <div>
                  <div className="mb-5 inline-flex w-9 h-9 items-center justify-center rounded-lg bg-white border border-zinc-200 text-zinc-500 shadow-sm transition-all duration-500 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight text-zinc-900">{f.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-xs font-medium">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- THE EXECUTIVE CTA SECTION --- */}
        <section className="mt-32 w-full pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="relative px-8 py-24 rounded-[3rem] overflow-hidden bg-zinc-950 text-center shadow-2xl shadow-zinc-950/20"
          >
            {/* Elegant Radial Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-transparent to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-5 tracking-tight text-white leading-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-400 italic pr-1">scale?</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mb-10 leading-relaxed font-medium">
                Join thousands of independent operators and growing networks establishing operations directly on Aptro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white text-zinc-950 rounded-full font-semibold text-sm transition-transform duration-300 hover:scale-[0.98] flex items-center justify-center gap-1.5 group shadow-md"
                >
                  Download App
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300 text-zinc-900" />
                </Link>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-7 py-3.5 bg-zinc-900/50 border border-zinc-800 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-zinc-800/60 hover:scale-[0.98] flex items-center justify-center backdrop-blur-md"
                >
                  View Plans
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}