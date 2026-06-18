"use client";

import { useState } from "react";
import {
  ShieldCheck, Smartphone, Layers, Users,
  ArrowRight, CheckCircle2, User, Building2, Briefcase, Globe, Zap,
  BarChart3, Lock, Package, Bell, Calculator, ClipboardList,
  Wallet, Receipt, Box, LineChart, CheckSquare
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Premium smooth easing
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const roleContent = {
  freelancer: {
    badge: "Solo Architect",
    title: "Refined for the individual.",
    desc: "A smart suite of tools designed to organize your projects, automate administrative tasks, and keep your finances clear.",
    spotlight: [
      {
        title: "Smart Dashboard & Project Hub",
        desc: "Your entire freelance business at a glance. Manage clients, track specific project details, and monitor your operational health in real-time.",
        icon: <BarChart3 className="w-5 h-5" />,
        details: ["Live Dashboard Insights", "Project & Work Information Tracking", "Client Directory Management"],
      },
      {
        title: "Comprehensive Payment Tracking",
        desc: "Keep meticulous records of your cash flow. Easily check complete payment histories, add new payment details manually, and track outstanding project dues.",
        icon: <Wallet className="w-5 h-5" />,
        details: ["Payment History Logs", "Manual Payment Entry", "Outstanding Balance Tracking"],
      },
      {
        title: "Daily Task Engine & Notes",
        desc: "A dedicated workspace for your day-to-day. Write detailed project notes, manage a separate daily task list, and stay focused on execution.",
        icon: <CheckSquare className="w-5 h-5" />,
        details: ["Separate Daily Task Page", "Rich Text Project Notes", "Task Prioritization"],
      },
      {
        title: "Automated Reminders",
        desc: "Never miss a follow-up or deadline. Get intelligent push notifications and reminders for pending tasks, project milestones, and overdue payments.",
        icon: <Bell className="w-5 h-5" />,
        details: ["Customizable Reminders", "Push Notifications", "Deadline Tracking"],
      },
      {
        title: "Billing & Quotations",
        desc: "Win more work and get paid faster. Generate professional quotations instantly and convert them into final bills with a single click.",
        icon: <Receipt className="w-5 h-5" />,
        details: ["Instant Quotation Generation", "One-Click Invoicing", "PDF Export Capabilities"],
      }
    ]
  },
  business: {
    badge: "Enterprise Infrastructure",
    title: "Orchestrate your growth.",
    desc: "Advanced architecture designed for managing complex inventory, robust GST billing, dual-sided ledgers, and your entire workforce.",
    spotlight: [
      {
        title: "Dual-Sided CRM",
        desc: "Manage your complete business network. Add, update, and segment both B2B clients (vendors/suppliers) and B2C customers in one unified database.",
        icon: <Users className="w-5 h-5" />,
        details: ["B2B & B2C Segmentation", "Unified Contact Directory", "Interaction History"],
      },
      {
        title: "Comprehensive Inventory",
        desc: "Total visibility over your stock. Add new products, update existing SKUs, track real-time stock summaries, and receive automated low-stock alerts.",
        icon: <Package className="w-5 h-5" />,
        details: ["Live Stock Summaries", "Automated Low Stock Alerts", "Product Update Logs"],
      },
      {
        title: "Order Processing",
        desc: "Streamline your trade operations. Create detailed purchase orders for suppliers and sales orders for customers within the same intuitive interface.",
        icon: <Box className="w-5 h-5" />,
        details: ["Purchase Order Creation", "Sales Order Management", "Order Status Tracking"],
      },
      {
        title: "Full-Spectrum Ledgers",
        desc: "Track money in and money out. Record dual-sided payment entries for both client receivables and supplier payables to maintain perfect cash flow clarity.",
        icon: <Wallet className="w-5 h-5" />,
        details: ["Supplier Payable Entries", "Customer Receivable Entries", "Cash Flow Balancing"],
      },
      {
        title: "GST Billing & Reports",
        desc: "Tax season made simple. Generate robust, GST-compliant invoices and automatically compile detailed financial, operational, and sales reports.",
        icon: <Calculator className="w-5 h-5" />,
        details: ["GST Compliant Invoicing", "Detailed Sales Reports", "Automated Tax Calculation"],
      },
      {
        title: "Workforce Management",
        desc: "Scale your team effortlessly. Track daily staff attendance and automate monthly payroll processing directly from your administrative dashboard.",
        icon: <ClipboardList className="w-5 h-5" />,
        details: ["Daily Attendance Tracking", "Automated Payroll Processing", "Staff Management"],
      }
    ]
  }
};

const commonFeatures = [
  { title: "Bank-Grade Encryption", icon: <Lock size={20} />, desc: "AES-256 standard security with secure key management." },
  { title: "Cross-Platform Sync", icon: <Smartphone size={20} />, desc: "Native experiences across iOS, Android, and Web." },
  { title: "Global Settlement", icon: <Globe size={20} />, desc: "Multi-currency reconciliation and localized tax engines." },
  { title: "Universal API", icon: <Layers size={20} />, desc: "Connect effortlessly with 2000+ existing ecosystems." },
  { title: "Real-Time Webhooks", icon: <Zap size={20} />, desc: "Zero-latency data propagation across your stack." },
  { title: "Enterprise SLA", icon: <Briefcase size={20} />, desc: "Dedicated 24/7 priority engineering support." },
];

export default function FeaturesPage() {
  const [role, setRole] = useState<"freelancer" | "business">("freelancer");
  const activeContent = roleContent[role];

  return (
    <main className={`min-h-screen pt-36 pb-32 bg-[#FAFAFA] text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden relative ${jakarta.className}`}>

      {/* Premium Minimal Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 flex justify-center">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #18181b 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* --- Header Section --- */}
        <div className="max-w-5xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: premiumEasing }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium border border-zinc-200/60 mb-8"
          >
            Core Capabilities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEasing, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold tracking-tight mb-6 leading-[1.05] text-zinc-950"
          >
            Built for <br />
            <span className="text-zinc-400">modern operations.</span>
          </motion.h1>

          {/* Elegant Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: premiumEasing, delay: 0.2 }}
            className="inline-flex p-1.5 bg-zinc-200/50 backdrop-blur-md rounded-full border border-zinc-200/80"
          >
            {(["freelancer", "business"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setRole(tab)}
                className={`relative flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-colors z-10 ${role === tab ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-800"
                  }`}
              >
                {role === tab && (
                  <motion.div
                    layoutId="featuresTab"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-zinc-200/60"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab === "freelancer" ? <User size={14} /> : <Building2 size={14} />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* --- Spotlight Content --- */}
        <div className="min-h-[1200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(2px)" }}
              transition={{ duration: 0.5, ease: premiumEasing }}
              className="space-y-32 mb-32"
            >
              {/* Introduction Text */}
              <div className="mb-16 border-b border-zinc-200 pb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-zinc-950 mb-4">{activeContent.title}</h2>
                <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">{activeContent.desc}</p>
              </div>

              {/* Dynamic Feature Sections */}
              {activeContent.spotlight.map((feature, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Text Content */}
                  <div className="flex-1 space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-700">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-zinc-950">{feature.title}</h3>
                      <p className="text-base text-zinc-500 leading-relaxed">{feature.desc}</p>
                    </div>

                    <div className="space-y-4 pt-4">
                      {feature.details.map((detail, idx) => (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 * idx, ease: premiumEasing }} viewport={{ once: true }}
                          key={detail}
                          className="flex items-center gap-3 text-sm font-medium text-zinc-600"
                        >
                          <CheckCircle2 size={16} className="text-zinc-400" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Abstract Clean UI Mockup */}
                  <div className="flex-1 w-full relative">
                    <div className="relative aspect-[4/3] rounded-[2rem] border border-zinc-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-center overflow-hidden p-6 group">

                      {/* Dashboard Skeleton */}
                      <div className="w-full h-full bg-[#FAFAFA] rounded-xl border border-zinc-100 flex flex-col p-4 gap-4 relative">
                        {/* Top bar */}
                        <div className="w-full flex justify-between items-center border-b border-zinc-100 pb-3">
                          <div className="w-24 h-2.5 bg-zinc-200 rounded-full" />
                          <div className="flex gap-2">
                            <div className="w-6 h-6 bg-zinc-200 rounded-full" />
                            <div className="w-6 h-6 bg-zinc-200 rounded-full" />
                          </div>
                        </div>

                        {/* Layout */}
                        <div className="flex flex-1 gap-4">
                          {/* Sidebar */}
                          <div className="w-1/4 h-full bg-zinc-100 rounded-lg hidden sm:flex flex-col gap-3 p-3">
                            <div className="w-full h-2 bg-zinc-200 rounded-full mb-2" />
                            <div className="w-3/4 h-1.5 bg-zinc-200 rounded-full" />
                            <div className="w-full h-1.5 bg-zinc-200 rounded-full" />
                            <div className="w-2/3 h-1.5 bg-zinc-200 rounded-full" />
                          </div>

                          {/* Main Content */}
                          <div className="flex-1 h-full flex flex-col gap-4">
                            <div className="w-full h-32 rounded-lg border border-zinc-200/60 bg-white shadow-sm p-4 flex flex-col justify-end relative overflow-hidden group-hover:border-zinc-300 transition-colors duration-700">
                              <LineChart className="absolute top-4 right-4 opacity-10 w-24 h-24 text-zinc-900" />
                              <div className="w-1/3 h-2 bg-zinc-200 rounded-full mb-2" />
                              <div className="w-1/2 h-4 bg-zinc-300 rounded-full" />
                            </div>

                            <div className="flex-1 flex gap-4">
                              <div className="flex-1 bg-white rounded-lg border border-zinc-200/60 shadow-sm p-4 flex flex-col justify-center gap-3">
                                <div className="w-full h-1.5 bg-zinc-200 rounded-full" />
                                <div className="w-4/5 h-1.5 bg-zinc-200 rounded-full" />
                                <div className="w-2/3 h-1.5 bg-zinc-200 rounded-full" />
                              </div>
                              <div className="flex-1 bg-white rounded-lg border border-zinc-200/60 shadow-sm p-4 flex flex-col justify-center gap-3">
                                <div className="w-full h-1.5 bg-zinc-200 rounded-full" />
                                <div className="w-3/4 h-1.5 bg-zinc-200 rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Floating Decorative Icon */}
                        <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:-translate-x-2">
                          <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
                            {feature.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Standard Infrastructure Grid --- */}
        <section className="pt-24 border-t border-zinc-200">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-950">Universal Baseline</h2>
            <p className="text-lg text-zinc-500">Foundational protocols built into every workspace, ensuring absolute security, speed, and connectivity regardless of your plan.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 rounded-[2rem] overflow-hidden"
          >
            {commonFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="group p-10 bg-[#FAFAFA] hover:bg-white transition-colors duration-500 flex flex-col"
              >
                <div className="mb-8 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-white border border-zinc-100 text-zinc-600 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 tracking-tight text-zinc-950">{f.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm flex-1">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- THE EXECUTIVE CTA SECTION (Dark Mode Anchor) --- */}
        <section className="mt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEasing }}
            className="relative px-8 py-20 lg:p-24 rounded-[3rem] overflow-hidden bg-zinc-950 text-center shadow-2xl"
          >
            {/* Subtle Dark Glow Layer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-white leading-tight">
                Ready to <span className="text-zinc-400 italic font-medium">scale?</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Join thousands of {role === "freelancer" ? "independent professionals" : "growing enterprises"} managing their operations on Aptro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  Download App
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-zinc-900 hover:scale-[0.98] flex items-center justify-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}