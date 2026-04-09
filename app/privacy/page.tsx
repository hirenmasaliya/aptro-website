"use client";

import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Globe, 
  UserCheck, 
  ArrowRight,
  Database,
  Info
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "introduction", title: "Introduction", icon: <Eye size={14} /> },
  { id: "data-collection", title: "Data Collection", icon: <Database size={14} /> },
  { id: "how-we-use", title: "How We Use Data", icon: <FileText size={14} /> },
  { id: "security", title: "Security Measures", icon: <Lock size={14} /> },
  { id: "your-rights", title: "Your Rights", icon: <UserCheck size={14} /> },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-40 pb-20 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Soft Background Dynamics */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Header --- */}
        <div className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            Governance & Compliance
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-zinc-950"
          >
            Privacy <br /><span className="text-zinc-400 italic">&</span> Standards.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Trust is the primary asset we manage. Our protocols are designed to be 
            legally rigorous yet entirely transparent for modern operators.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- Sticky Sidebar --- */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-40 h-fit">
            <div className="space-y-1 border-l-2 border-zinc-100 pl-6">
              <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] mb-8 ml-2">Protocols</p>
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center gap-4 px-2 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                    activeSection === section.id 
                      ? "text-blue-600 translate-x-1" 
                      : "text-zinc-400 hover:text-zinc-950"
                  }`}
                >
                  <span className={`w-1 h-1 rounded-full ${activeSection === section.id ? "bg-blue-600" : "bg-transparent"}`} />
                  {section.title}
                </a>
              ))}
            </div>
            
            <div className="mt-20 p-8 rounded-[2.5rem] bg-zinc-950 text-white shadow-2xl">
              <h4 className="text-xs font-black uppercase tracking-widest mb-3">Legal Counsel</h4>
              <p className="text-zinc-500 text-[11px] font-medium leading-relaxed mb-8 uppercase tracking-tight">Need specific clarifications on data governance?</p>
              <Link href="/contact" className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2 group border-b border-white/20 pb-1 w-fit">
                Consult Legal <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </aside>

          {/* --- Detailed Content --- */}
          <div className="lg:col-span-9 space-y-40">
            
            <section id="introduction" className="scroll-mt-40">
              <div className="p-10 lg:p-20 rounded-[4rem] bg-zinc-50 border border-zinc-100 shadow-sm">
                <h2 className="text-4xl font-black mb-8 tracking-tighter">01. Introduction</h2>
                <div className="max-w-none text-zinc-500 leading-relaxed space-y-6 text-lg font-medium">
                  <p>
                    Privacy is not an add-on; it is the starting point. Every line of code at Aptro 
                    is architected with the understanding that your business data is sovereign.
                  </p>
                  <p>
                    By interacting with the Aptro ecosystem, you entrust us with your metadata. 
                    This policy serves as a binding commitment to the security and portability of that data.
                  </p>
                </div>
              </div>
            </section>

            <section id="data-collection" className="scroll-mt-40 space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-zinc-50 rounded-2xl text-blue-600 shadow-sm border border-zinc-100"><Database size={24}/></div>
                <h2 className="text-4xl font-black tracking-tighter">Data Collection</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <DataCard 
                  title="Collected Parameters" 
                  items={["Operational metadata", "Inventory snapshots", "Customer ledger data", "Access logs"]} 
                />
                <DataCard 
                  title="Excluded Data" 
                  items={["Raw payment credentials", "Third-party login tokens", "External device tracking"]} 
                  isNegative
                />
              </div>
            </section>

            <section id="security" className="scroll-mt-40">
              <div className="p-12 lg:p-24 rounded-[4rem] bg-zinc-950 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Lock size={300} strokeWidth={1} />
                </div>
                
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Defense Protocol</span>
                <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Security Infrastructure.</h2>
                <p className="text-zinc-400 mb-16 max-w-xl text-lg font-light leading-relaxed">
                  We implement enterprise-grade sovereign security. Your business intelligence is shielded 
                  by multiple layers of encryption and hourly redundant cloud snapshots.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
                  <SecurityMetric title="AES-256" desc="Encryption at Rest" />
                  <SecurityMetric title="TLS 1.3" desc="Transport Security" />
                  <SecurityMetric title="99.999%" desc="System Durability" />
                </div>
              </div>
            </section>

            <section id="your-rights" className="scroll-mt-40">
              <div className="flex justify-between items-end mb-16">
                <h2 className="text-4xl font-black tracking-tighter">Sovereign Control</h2>
                <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">User Rights</p>
              </div>
              <div className="grid grid-cols-1 gap-px bg-zinc-100 border border-zinc-100 rounded-[3rem] overflow-hidden">
                <RightRow title="Data Portability" desc="Request full ecosystem exports in CSV or JSON at any time." />
                <RightRow title="Right to Erasure" desc="Permanent ledger wiping with a 48-hour propagation guarantee." />
                <RightRow title="Audit Access" desc="Review a complete list of metadata stored under your profile." />
              </div>
            </section>

            {/* --- Footer Compliance Note --- */}
            <footer className="pt-20 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4 text-zinc-400">
                <Info size={16} />
                <p className="text-[10px] font-bold uppercase tracking-widest">Version 1.2.0 • Effective April 2026</p>
              </div>
              <Link href="/terms" className="text-xs font-black uppercase tracking-widest text-zinc-950 hover:text-blue-600 flex items-center gap-3 transition-colors">
                Read Terms of Service <ArrowRight size={14} />
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- Specialized Sub-components ---

function DataCard({ title, items, isNegative }: { title: string, items: string[], isNegative?: boolean }) {
  return (
    <div className="p-12 rounded-[3rem] bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all">
      <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-8 ${isNegative ? 'text-zinc-300' : 'text-blue-600'}`}>
        {title}
      </h4>
      <ul className="space-y-6">
        {items.map(item => (
          <li key={item} className="flex items-center gap-4 text-sm font-bold text-zinc-500 uppercase tracking-tight">
             <div className={`w-1.5 h-1.5 rounded-full ${isNegative ? 'bg-zinc-100' : 'bg-blue-600 shadow-sm shadow-blue-200'}`} />
             {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SecurityMetric({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <p className="text-3xl font-black text-white mb-2 tracking-tighter">{title}</p>
      <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold leading-none">{desc}</p>
    </div>
  );
}

function RightRow({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group flex items-center justify-between p-10 bg-white hover:bg-zinc-50 transition-all cursor-default">
      <div>
        <h4 className="text-xl font-black text-zinc-950 mb-2 tracking-tight">{title}</h4>
        <p className="text-sm text-zinc-500 font-medium">{desc}</p>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
        <ArrowRight size={24} className="text-blue-600" />
      </div>
    </div>
  );
}