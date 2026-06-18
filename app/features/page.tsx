"use client";

import { useState } from "react";
import { 
  FileText, ShieldCheck, Smartphone, Layers, Users, 
  ArrowRight, CheckCircle2, User, Building2, Briefcase, Globe, Zap,
  Sparkles, BarChart3, Lock, Package, Bell, Calculator, ClipboardList,
  Wallet, Receipt, Box, LineChart, CheckSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Tailwind-safe color mapping for the abstract UI mockups
const themes = {
  blue: { text: "text-blue-600", textLight: "text-blue-500", bgLight: "bg-blue-100", bgMuted: "bg-blue-50/50", barBg: "bg-blue-200", blurBg: "bg-blue-300" },
  indigo: { text: "text-indigo-600", textLight: "text-indigo-500", bgLight: "bg-indigo-100", bgMuted: "bg-indigo-50/50", barBg: "bg-indigo-200", blurBg: "bg-indigo-300" },
  purple: { text: "text-purple-600", textLight: "text-purple-500", bgLight: "bg-purple-100", bgMuted: "bg-purple-50/50", barBg: "bg-purple-200", blurBg: "bg-purple-300" },
  emerald: { text: "text-emerald-600", textLight: "text-emerald-500", bgLight: "bg-emerald-100", bgMuted: "bg-emerald-50/50", barBg: "bg-emerald-200", blurBg: "bg-emerald-300" },
  amber: { text: "text-amber-600", textLight: "text-amber-500", bgLight: "bg-amber-100", bgMuted: "bg-amber-50/50", barBg: "bg-amber-200", blurBg: "bg-amber-300" },
};

type ThemeKey = keyof typeof themes;

const roleContent = {
  freelancer: {
    badge: "Solo Architect",
    title: "Refined for the individual.",
    desc: "A smart suite of tools designed to organize your projects, automate administrative tasks, and keep your finances clear.",
    spotlight: [
      {
        title: "Smart Dashboard & Project Hub",
        desc: "Your entire freelance business at a glance. Manage clients, track specific project details (like call-in app tasks), and monitor your operational health in real-time.",
        icon: <BarChart3 className="w-6 h-6" />,
        details: ["Live Dashboard Insights", "Project & Work Information Tracking", "Client Directory Management"],
        theme: "blue" as ThemeKey
      },
      {
        title: "Comprehensive Payment Tracking",
        desc: "Keep meticulous records of your cash flow. Easily check complete payment histories, add new payment details manually, and track outstanding project dues.",
        icon: <Wallet className="w-6 h-6" />,
        details: ["Payment History Logs", "Manual Payment Entry", "Outstanding Balance Tracking"],
        theme: "emerald" as ThemeKey
      },
      {
        title: "Daily Task Engine & Notes",
        desc: "A dedicated workspace for your day-to-day. Write detailed project notes, manage a separate daily task list, and stay focused on execution.",
        icon: <CheckSquare className="w-6 h-6" />,
        details: ["Separate Daily Task Page", "Rich Text Project Notes", "Task Prioritization"],
        theme: "indigo" as ThemeKey
      },
      {
        title: "Automated Reminders & Notifications",
        desc: "Never miss a follow-up or deadline. Get intelligent push notifications and reminders for pending tasks, project milestones, and overdue payments.",
        icon: <Bell className="w-6 h-6" />,
        details: ["Customizable Reminders", "Push Notifications", "Deadline Tracking"],
        theme: "amber" as ThemeKey
      },
      {
        title: "Billing & Quotations",
        desc: "Win more work and get paid faster. Generate professional quotations instantly and convert them into final bills with a single click.",
        icon: <Receipt className="w-6 h-6" />,
        details: ["Instant Quotation Generation", "One-Click Invoicing", "PDF Export Capabilities"],
        theme: "purple" as ThemeKey
      }
    ]
  },
  business: {
    badge: "Enterprise Infrastructure",
    title: "Orchestrate your growth.",
    desc: "Advanced architecture designed for managing complex inventory, robust GST billing, dual-sided ledgers, and your entire workforce.",
    spotlight: [
      {
        title: "Dual-Sided CRM (Clients & Customers)",
        desc: "Manage your complete business network. Add, update, and segment both B2B clients (vendors/suppliers) and B2C customers in one unified database.",
        icon: <Users className="w-6 h-6" />,
        details: ["B2B & B2C Segmentation", "Unified Contact Directory", "Interaction History"],
        theme: "blue" as ThemeKey
      },
      {
        title: "Comprehensive Inventory Control",
        desc: "Total visibility over your stock. Add new products, update existing SKUs, track real-time stock summaries, and receive automated low-stock alerts.",
        icon: <Package className="w-6 h-6" />,
        details: ["Live Stock Summaries", "Automated Low Stock Alerts", "Product Update Logs"],
        theme: "indigo" as ThemeKey
      },
      {
        title: "Order Processing (Buy & Sell)",
        desc: "Streamline your trade operations. Create detailed purchase orders for suppliers and sales orders for customers within the same intuitive interface.",
        icon: <Box className="w-6 h-6" />,
        details: ["Purchase Order Creation", "Sales Order Management", "Order Status Tracking"],
        theme: "amber" as ThemeKey
      },
      {
        title: "Full-Spectrum Payment Ledgers",
        desc: "Track money in and money out. Record dual-sided payment entries for both client receivables and supplier payables to maintain perfect cash flow clarity.",
        icon: <Wallet className="w-6 h-6" />,
        details: ["Supplier Payable Entries", "Customer Receivable Entries", "Cash Flow Balancing"],
        theme: "emerald" as ThemeKey
      },
      {
        title: "GST Billing & Advanced Reports",
        desc: "Tax season made simple. Generate robust, GST-compliant invoices and automatically compile detailed financial, operational, and sales reports.",
        icon: <Calculator className="w-6 h-6" />,
        details: ["GST Compliant Invoicing", "Detailed Sales Reports", "Automated Tax Calculation"],
        theme: "purple" as ThemeKey
      },
      {
        title: "Workforce & HR Management",
        desc: "Scale your team effortlessly. Track daily staff attendance and automate monthly payroll processing directly from your administrative dashboard.",
        icon: <ClipboardList className="w-6 h-6" />,
        details: ["Daily Attendance Tracking", "Automated Payroll Processing", "Staff Management"],
        theme: "blue" as ThemeKey
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
    <main className="min-h-screen pt-36 pb-32 bg-zinc-50 text-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      
      {/* Soft Background Dynamics */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/40 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-50/60 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-200"
          >
            <Sparkles size={14} /> Core Capabilities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-12 text-zinc-900"
          >
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">your scale.</span>
          </motion.h1>

          {/* Role Switcher */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex p-1.5 bg-zinc-200/60 backdrop-blur-sm rounded-full border border-zinc-200 shadow-inner"
          >
            {(["freelancer", "business"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setRole(tab)}
                className={`relative flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold transition-colors z-10 ${
                  role === tab ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                {role === tab && (
                  <motion.div
                    layoutId="featuresTab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-zinc-200/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab === "freelancer" ? <User size={16} /> : <Building2 size={16} />}
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
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="space-y-24 mb-32"
            >
              {/* Introduction Text for Selected Role */}
              <div className="mb-12 border-b border-zinc-200/80 pb-12">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4">{activeContent.badge}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">{activeContent.title}</h2>
                <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-3xl leading-relaxed">{activeContent.desc}</p>
              </div>

              {/* Dynamic Feature Sections */}
              {activeContent.spotlight.map((feature, i) => {
                const t = themes[feature.theme]; 
                return (
                  <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                      <div className={`w-14 h-14 rounded-[1rem] bg-white border border-zinc-200 shadow-sm flex items-center justify-center ${t.text}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-zinc-900">{feature.title}</h3>
                        <p className="text-base md:text-lg text-zinc-500 leading-relaxed font-medium">{feature.desc}</p>
                      </div>
                      
                      <div className="space-y-3 pt-2">
                        {feature.details.map((detail, idx) => (
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }} viewport={{ once: true, margin: "-50px" }}
                            key={detail} 
                            className="flex items-center gap-3 text-sm font-bold text-zinc-700"
                          >
                            <div className={`p-1 rounded-full ${t.bgLight} ${t.text}`}>
                              <CheckCircle2 size={14} strokeWidth={3} /> 
                            </div>
                            {detail}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Abstract UI Preview Mockup */}
                    <div className="flex-1 w-full relative">
                      <div className={`absolute -inset-2 opacity-40 blur-[60px] -z-10 rounded-full ${t.blurBg}`} />
                      <div className="relative aspect-video md:aspect-[4/3] rounded-[2rem] border border-zinc-200/80 bg-white/60 backdrop-blur-xl shadow-xl flex items-center justify-center overflow-hidden p-6 group">
                        
                        {/* Abstract Dashboard Elements */}
                        <div className="w-full h-full bg-zinc-50 rounded-xl border border-zinc-100 shadow-inner flex flex-col p-3 gap-3 relative overflow-hidden">
                          {/* Top bar */}
                          <div className="w-full h-6 flex justify-between items-center mb-1">
                            <div className="w-20 h-3 bg-zinc-200 rounded-full" />
                            <div className="flex gap-1.5">
                                <div className="w-5 h-5 bg-zinc-200 rounded-full" />
                                <div className="w-5 h-5 bg-zinc-200 rounded-full" />
                            </div>
                          </div>
                          
                          {/* Layout */}
                          <div className="flex flex-1 gap-3">
                            {/* Sidebar */}
                            <div className="w-1/4 h-full bg-zinc-200/40 rounded-lg hidden sm:flex flex-col gap-2 p-2">
                              <div className="w-full h-2 bg-zinc-300 rounded-full mb-2" />
                              <div className="w-3/4 h-1.5 bg-zinc-300/50 rounded-full" />
                              <div className="w-full h-1.5 bg-zinc-300/50 rounded-full" />
                              <div className="w-2/3 h-1.5 bg-zinc-300/50 rounded-full" />
                            </div>
                            
                            {/* Main Content */}
                            <div className="flex-1 h-full flex flex-col gap-3">
                              <div className={`w-full h-24 rounded-lg border border-zinc-200 shadow-sm p-3 flex flex-col justify-end relative overflow-hidden ${t.bgMuted}`}>
                                <LineChart className={`absolute top-2 right-2 opacity-20 w-16 h-16 ${t.textLight}`} />
                                <div className="w-1/3 h-2 bg-zinc-300 rounded-full mb-1.5" />
                                <div className={`w-1/2 h-4 rounded-full ${t.barBg}`} />
                              </div>
                              
                              <div className="flex-1 flex gap-3">
                                <div className="flex-1 bg-white rounded-lg border border-zinc-200 shadow-sm p-2 flex flex-col justify-center gap-2">
                                    <div className="w-full h-1.5 bg-zinc-200 rounded-full" />
                                    <div className="w-4/5 h-1.5 bg-zinc-200 rounded-full" />
                                    <div className="w-2/3 h-1.5 bg-zinc-200 rounded-full" />
                                </div>
                                <div className="flex-1 bg-white rounded-lg border border-zinc-200 shadow-sm p-2 flex flex-col justify-center gap-2">
                                    <div className="w-full h-1.5 bg-zinc-200 rounded-full" />
                                    <div className="w-3/4 h-1.5 bg-zinc-200 rounded-full" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Floating Decorative Icon */}
                          <motion.div 
                            animate={{ y: [0, -8, 0] }} 
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -right-2 -bottom-2 w-24 h-24 bg-white rounded-xl shadow-lg border border-zinc-100 flex items-center justify-center"
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center opacity-90 ${t.bgLight} ${t.text}`}>
                              {feature.icon}
                            </div>
                          </motion.div>
                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Standard Infrastructure Grid --- */}
        <section className="pt-24 border-t border-zinc-200/80">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4"
              >
                Universal Baseline
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900">The Aptro Standard</h2>
              <p className="text-lg text-zinc-500 font-medium">Foundational protocols built into every workspace, ensuring absolute security, speed, and connectivity regardless of your plan.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonFeatures.map((f, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                key={i} 
                className="group p-8 md:p-10 rounded-[2.5rem] bg-white border border-zinc-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-8 w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="mt-32 rounded-[3rem] md:rounded-[4rem] bg-zinc-950 text-white p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-zinc-900">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight">Ready to scale?</h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-12 font-medium">
              Join thousands of {role === "freelancer" ? "independent professionals" : "growing enterprises"} managing their operations on Aptro.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/download" className="px-10 py-4 bg-white text-zinc-950 rounded-full font-bold text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                Download App <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="px-10 py-4 bg-zinc-800 text-white rounded-full font-bold text-sm hover:bg-zinc-700 transition-all flex items-center justify-center">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}