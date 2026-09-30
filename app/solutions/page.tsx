"use client";

import { 
  AlertCircle,
  CheckCircle2,
  Zap,
  ArrowRight,
  Database,
  RefreshCw,
  TrendingUp,
  Boxes,
  Receipt,
  Users
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function DetailedSolutionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-32 text-zinc-950 font-sans bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* --- 1. HERO SECTION --- */}
        <motion.section 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-24 md:mb-32 mt-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <Zap size={16} className="fill-blue-700" /> Transform Your Workflow
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Stop Managing Software. <br />
            <span className="text-blue-600">Start Managing Your Business.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-zinc-600 leading-relaxed">
            Aptro eliminates "app fatigue" by combining inventory, invoicing, and client management into one intelligent, step-by-step system.
          </motion.p>
        </motion.section>

        {/* --- 2. THE PROBLEM SECTION --- */}
        <section className="mb-24 md:mb-32">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="p-10 md:p-14 rounded-[2rem] bg-white border border-rose-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <AlertCircle size={250} />
            </div>
            
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-md text-sm font-semibold uppercase tracking-wider mb-6">
                The Core Problem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Disconnected Business Trap</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                Most businesses hit a bottleneck because their tools don't talk to each other. You use one app for billing, a spreadsheet for inventory, and another tool for tasks. This fragmentation causes severe operational issues:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Double Data Entry", desc: "Typing the same client details into three different systems." },
                  { title: "Costly Mistakes", desc: "Selling items that are actually out of stock because data didn't sync." },
                  { title: "Wasted Time", desc: "Spending hours reconciling invoices instead of closing new deals." },
                  { title: "Blind Spots", desc: "No single dashboard shows you exactly how much money you are making." }
                ].map((issue, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2.5" />
                    <div>
                      <h4 className="font-bold text-zinc-900">{issue.title}</h4>
                      <p className="text-zinc-600 text-sm mt-1">{issue.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- 3. STEP-BY-STEP SOLUTION SECTION --- */}
        <section className="mb-24 md:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Aptro Solves This</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">A systematic, step-by-step approach to unifying your daily operations.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 relative"
          >
            {/* Background connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 z-0" />

            {[
              {
                step: "01",
                icon: <Database size={28} />,
                title: "Centralize Data",
                desc: "Input your inventory, services, and client list into Aptro just once. We create a single source of truth for your entire business."
              },
              {
                step: "02",
                icon: <RefreshCw size={28} />,
                title: "Automate Workflows",
                desc: "When you generate an invoice, Aptro automatically deducts the items from your inventory and updates the client's history."
              },
              {
                step: "03",
                icon: <TrendingUp size={28} />,
                title: "Analyze & Grow",
                desc: "With all data connected, Aptro generates real-time reports. See exactly what's selling, who is paying, and where you're profitable."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-blue-50 border-4 border-white rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm relative">
                  {item.icon}
                  <div className="absolute -top-2 -right-2 bg-zinc-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- 4. DEEP DIVE: THE UNIFIED SYSTEM --- */}
        <section className="mb-24 md:mb-32">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="p-10 md:p-14 rounded-[2.5rem] bg-zinc-950 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">One Platform, Complete Control</h2>
              
              <div className="grid md:grid-cols-3 gap-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 mb-6">
                    <Boxes size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Smart Inventory</h3>
                  <ul className="space-y-3">
                    {["Low stock auto-alerts", "Multi-location tracking", "Cost-basis calculation"].map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-blue-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 mb-6">
                    <Receipt size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Seamless Billing</h3>
                  <ul className="space-y-3">
                    {["1-click invoice generation", "Auto-syncs with stock", "Payment tracking & reminders"].map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-blue-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 mb-6">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Client Hub</h3>
                  <ul className="space-y-3">
                    {["Complete purchase history", "Task & follow-up manager", "Direct communication logs"].map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-blue-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- 5. CALL TO ACTION --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-block p-1 rounded-full bg-zinc-200/50 mb-8">
            <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-white text-zinc-900 font-semibold shadow-sm text-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for iOS, Android, and Web
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to unite your business?</h2>
          <p className="text-zinc-600 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of businesses that have replaced their tangled web of apps with Aptro's unified platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full font-bold transition-all hover:bg-zinc-50 flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}