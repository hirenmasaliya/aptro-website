"use client";

import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Globe, 
  Bell, 
  UserCheck, 
  ArrowRight,
  Database
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "introduction", title: "Introduction", icon: <Eye size={16} /> },
  { id: "data-collection", title: "Data Collection", icon: <Database size={16} /> },
  { id: "how-we-use", title: "How We Use Data", icon: <FileText size={16} /> },
  { id: "security", title: "Security Measures", icon: <Lock size={16} /> },
  { id: "your-rights", title: "Your Rights", icon: <UserCheck size={16} /> },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  // Simple Scroll-spy logic
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
    <main className="pt-32 pb-20 bg-[#050505] text-white selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Header --- */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
            Privacy First Architecture
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-4">
            Privacy <span className="text-gray-500">&</span> Terms
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            We value the trust you place in Aptro. Our policies are designed to be 
            transparent, readable, and focused on protecting your business assets.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- Sticky Navigation Sidebar --- */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <div className="space-y-1 border-l border-white/5 pl-4">
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 ml-4">Contents</p>
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center gap-3 px-4 py-2 text-sm rounded-full transition-all ${
                    activeSection === section.id 
                      ? "text-blue-400 bg-blue-400/10 font-medium" 
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {section.icon}
                  {section.title}
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-3xl bg-linear-to-br from-blue-600/10 to-transparent border border-white/10">
              <h4 className="text-sm font-bold mb-2">Have questions?</h4>
              <p className="text-xs text-gray-500 mb-4">Our legal team is here to clarify any concerns.</p>
              <a href="/contact" className="text-xs font-bold text-blue-400 flex items-center gap-1 group">
                Contact Legal <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </aside>

          {/* --- Detailed Content --- */}
          <div className="lg:col-span-9 space-y-24">
            
            <section id="introduction" className="scroll-mt-32">
              <div className="p-8 lg:p-12 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5">
                <h2 className="text-3xl font-bold mb-6">Introduction</h2>
                <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4 text-lg">
                  <p>
                    Your privacy is not just a policy; it is a fundamental pillar of how we build Aptro. 
                    This document outlines how we collect, process, and safeguard the data of thousands 
                    of businesses worldwide.
                  </p>
                  <p>
                    By using the Aptro App or Website, you agree to the practices described in this 
                    policy. We encourage you to read this carefully to understand your rights.
                  </p>
                </div>
              </div>
            </section>

            <section id="data-collection" className="scroll-mt-32 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-2xl text-blue-500"><Database size={24}/></div>
                <h2 className="text-3xl font-bold">Data Collection</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <DataCard 
                  title="What we collect" 
                  items={["Account credentials", "Business metadata", "Inventory snapshots", "Customer contact lists"]} 
                />
                <DataCard 
                  title="What we don't collect" 
                  items={["Personal browsing history", "Credit card numbers (Raw)", "Third-party login passwords"]} 
                  isNegative
                />
              </div>
            </section>

            <section id="security" className="scroll-mt-32">
              <div className="p-10 lg:p-16 rounded-[3rem] bg-linear-to-b from-white/3 to-transparent border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <Lock size={200} />
                </div>
                
                <h2 className="text-3xl font-bold mb-8">Security Standards</h2>
                <p className="text-gray-400 mb-10 max-w-xl">
                  We treat your business data like our own. Aptro implements several layers of security 
                  to ensure your data remains accessible only to you.
                </p>

                <div className="grid sm:grid-cols-3 gap-8">
                  <SecurityMetric title="AES-256" desc="Encryption at rest" />
                  <SecurityMetric title="TLS 1.3" desc="Encryption in transit" />
                  <SecurityMetric title="99.99%" desc="Data Durability" />
                </div>
              </div>
            </section>

            <section id="your-rights" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-10">Control your data</h2>
              <div className="space-y-4">
                <RightRow title="Data Portability" desc="Export your entire business history in JSON or CSV format at any time." />
                <RightRow title="Right to Erasure" desc="Permanent account deletion with 72-hour data wiping guarantee." />
                <RightRow title="Access Requests" desc="Review every piece of metadata we hold on your business profile." />
              </div>
            </section>

            {/* --- Footer Note --- */}
            <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-gray-500 italic">Version 1.2.0 • Last modified April 1, 2026</p>
              <Link href="/terms" className="text-sm font-bold text-white hover:text-blue-400 flex items-center gap-2">
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
    <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 h-full">
      <h4 className={`text-sm font-bold uppercase tracking-widest mb-6 ${isNegative ? 'text-red-400' : 'text-emerald-400'}`}>
        {title}
      </h4>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item} className="flex items-center gap-3 text-sm text-gray-400">
             <div className={`w-1 h-1 rounded-full ${isNegative ? 'bg-red-900' : 'bg-emerald-500'}`} />
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
      <p className="text-2xl font-bold text-white mb-1">{title}</p>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{desc}</p>
    </div>
  );
}

function RightRow({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group flex items-center justify-between p-6 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 transition-all">
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight size={18} className="text-blue-500" />
      </div>
    </div>
  );
}