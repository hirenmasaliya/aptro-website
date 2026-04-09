"use client";

import { useState } from "react";
import { 
  FileText, ShieldCheck, Smartphone, Layers, Users, RefreshCw, 
  ArrowRight, CheckCircle2, User, Building2, Briefcase, Globe, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const roleContent = {
  freelancer: {
    badge: "Solo Architect",
    title: "Refined for the individual.",
    desc: "A suite of professional tools designed to eliminate administrative friction for solo founders.",
    spotlight: [
      {
        title: "Precision Invoicing",
        desc: "Issue high-fidelity, brand-aligned invoices. Accelerate revenue with integrated global payments.",
        icon: <FileText className="w-5 h-5" />,
        details: ["Automated Tax Calculations", "Expense Reconciliation", "PDF Export Engine"]
      },
      {
        title: "Relational CRM",
        desc: "Maintain a comprehensive history of client interactions. Build institutional memory for your solo practice.",
        icon: <Users className="w-5 h-5" />,
        details: ["Automated Client Reminders", "Secure File Sharing", "Lead Status Tracking"]
      }
    ]
  },
  business: {
    badge: "Enterprise Infrastructure",
    title: "Orchestrate your growth.",
    desc: "Advanced architecture designed for teams managing complex inventory, staff, and global logistics.",
    spotlight: [
      {
        title: "Omnichannel Inventory",
        desc: "Synchronize stock levels across diverse storefronts and warehouses in real-time.",
        icon: <RefreshCw className="w-5 h-5" />,
        details: ["Predictive Low-Stock Alerts", "Batch Logistics", "Real-Time Rebalancing"]
      },
      {
        title: "Governance & Roles",
        desc: "Define granular permissions for staff and accountants. Maintain strict financial oversight.",
        icon: <ShieldCheck className="w-5 h-5" />,
        details: ["Immutable Audit Logs", "Multi-Level Approvals", "SSO & Identity Management"]
      }
    ]
  }
};

const commonFeatures = [
  { title: "Bank-Grade Encryption", icon: <ShieldCheck size={18} />, desc: "AES-256 standard security." },
  { title: "Cross-Platform", icon: <Smartphone size={18} />, desc: "Native iOS, Android & Web." },
  { title: "Global Settlement", icon: <Globe size={18} />, desc: "Multi-currency reconciliation." },
  { title: "Universal API", icon: <Layers size={18} />, desc: "Connect with 2000+ ecosystems." },
  { title: "Real-Time Sync", icon: <Zap size={18} />, desc: "Zero-latency data propagation." },
  { title: "SLA Support", icon: <Briefcase size={18} />, desc: "Dedicated 24/7 priority help." },
];

export default function FeaturesPage() {
  const [role, setRole] = useState<"freelancer" | "business">("freelancer");
  const activeContent = roleContent[role];

  return (
    <main className="pt-40 pb-20 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            Capabilities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12"
          >
            Engineered for <br />
            <span className="text-blue-600 italic">your scale.</span>
          </motion.h1>

          {/* Role Switcher (Executive Design) */}
          <div className="inline-flex p-1.5 bg-zinc-100 rounded-full border border-zinc-200">
            <button 
              onClick={() => setRole("freelancer")}
              className={`flex items-center gap-2 px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${role === "freelancer" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-zinc-600"}`}
            >
              <User size={14} /> Freelancer
            </button>
            <button 
              onClick={() => setRole("business")}
              className={`flex items-center gap-2 px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${role === "business" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-zinc-600"}`}
            >
              <Building2 size={14} /> Business
            </button>
          </div>
        </div>

        {/* --- Spotlight Content --- */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-48 mb-48"
          >
            {activeContent.spotlight.map((feature, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-blue-600 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter">{feature.title}</h3>
                  <p className="text-xl text-zinc-500 leading-relaxed font-medium">{feature.desc}</p>
                  
                  <div className="grid grid-cols-1 gap-4 pt-4">
                    {feature.details.map(detail => (
                      <div key={detail} className="flex items-center gap-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        <CheckCircle2 size={16} className="text-blue-600" /> {detail}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Visual Preview (Mockup Style) */}
                <div className="flex-1 w-full relative">
                  <div className="absolute -inset-10 bg-blue-50/50 blur-[120px] -z-10 rounded-full" />
                  <div className="relative aspect-video rounded-[3rem] border border-zinc-100 bg-white shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                       <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-4">{activeContent.badge}</p>
                       <div className="h-px w-20 bg-zinc-100 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- Standard Infrastructure Grid --- */}
        <section className="pt-32 border-t border-zinc-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black tracking-tighter mb-4">The Aptro Standard</h2>
              <p className="text-zinc-500 font-medium">Foundational protocols built into every workspace, ensuring absolute security and connectivity.</p>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">Universal Baseline</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100 rounded-[3rem] overflow-hidden">
            {commonFeatures.map((f, i) => (
              <div key={i} className="group p-12 bg-white hover:bg-zinc-50 transition-all">
                <div className="mb-8 inline-block p-3 rounded-xl bg-zinc-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {f.icon}
                </div>
                <h3 className="text-xl font-black mb-4 tracking-tighter uppercase tracking-widest text-xs">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="mt-40 rounded-[4rem] bg-zinc-950 text-white p-12 lg:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-black mb-12 tracking-tighter">Scale with <br /> confidence.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/download" className="px-12 py-5 bg-white text-zinc-950 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                Download for {role === "freelancer" ? "Mobile" : "Desktop"}
              </Link>
              <Link href="/pricing" className="px-12 py-5 bg-transparent border border-white/20 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white/5 transition-all">
                System Overview
              </Link>
            </div>
          </div>
        </section>

      </div>

    </main>
  );
}