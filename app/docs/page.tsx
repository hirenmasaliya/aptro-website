"use client";

import { useState } from "react";
import { 
  Terminal, 
  Code2, 
  Copy, 
  Check, 
  Search, 
  ChevronRight, 
  BookOpen, 
  Settings, 
  Box, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const docNavigation = [
  {
    group: "Getting Started",
    links: [
      { name: "Introduction", href: "/docs/intro" },
      { name: "Quickstart Guide", href: "/docs/quickstart" },
      { name: "Core Architecture", href: "/docs/architecture" },
    ],
  },
  {
    group: "Feature Guides",
    links: [
      { name: "Smart Invoicing", href: "/docs/invoicing" },
      { name: "Order Pipelines", href: "/docs/orders" },
      { name: "Inventory Sync", href: "/docs/inventory" },
      { name: "Analytics API", href: "/docs/analytics" },
    ],
  },
  {
    group: "Deployment",
    links: [
      { name: "Self-Hosting", href: "/docs/self-host" },
      { name: "Cloud Integration", href: "/docs/cloud" },
      { name: "Security Protocols", href: "/docs/security" },
    ],
  },
];

export default function DocsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* --- Breadcrumb Header --- */}
      <div className="fixed top-18 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl z-40 py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            Docs <ChevronRight size={10} /> Getting Started <ChevronRight size={10} /> <span className="text-blue-400">Introduction</span>
          </div>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={14} />
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="w-64 bg-white/5 border border-white/10 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 flex gap-16">
        
        {/* --- Left Sidebar: Navigation --- */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-40 h-[calc(100vh-10rem)] overflow-y-auto pr-4 custom-scrollbar">
          <div className="space-y-10 pb-10">
            {docNavigation.map((section) => (
              <div key={section.group}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-4 px-4">{section.group}</h4>
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className={`block px-4 py-2 text-sm rounded-xl transition-all ${
                        link.name === "Introduction" 
                        ? "bg-blue-500/10 text-blue-400 font-bold" 
                        : "text-gray-500 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* --- Main Content --- */}
        <article className="grow max-w-3xl">
          <div className="space-y-12">
            
            {/* Page Title */}
            <div>
              <div className="flex items-center gap-2 text-blue-400 mb-4">
                <BookOpen size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Documentation</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">Introduction</h1>
              <p className="text-xl text-gray-400 leading-relaxed font-medium">
                Aptro is a high-performance operating system for businesses, providing 
                automated invoicing, order pipelines, and real-time intelligence.
              </p>
            </div>

            {/* Quickstart Code Block */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Terminal size={20} className="text-blue-500" /> Quick Installation
              </h3>
              <p className="text-gray-400 text-sm">
                To begin using the Aptro Core SDK, run the following command in your project terminal:
              </p>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 font-mono text-sm leading-relaxed flex items-center justify-between group">
                  <code className="text-blue-100/80">npm install @aptro/core-sdk</code>
                  <button 
                    onClick={() => handleCopy("npm install @aptro/core-sdk")}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-gray-500" />}
                  </button>
                </div>
              </div>
            </section>

            {/* Feature Cards Grid */}
            <section className="grid md:grid-cols-2 gap-6 pt-8">
              <DocFeatureCard 
                icon={<Settings size={20} />} 
                title="Configuration" 
                desc="Set up your environment variables and webhook secrets."
              />
              <DocFeatureCard 
                icon={<Box size={20} />} 
                title="SDK Reference" 
                desc="Full documentation for our Flutter and Next.js libraries."
              />
              <DocFeatureCard 
                icon={<ShieldCheck size={20} />} 
                title="Authentication" 
                desc="Manage JWT tokens and enterprise SSO integration."
              />
              <DocFeatureCard 
                icon={<Code2 size={20} />} 
                title="API Endpoints" 
                desc="Direct REST access for custom business workflows."
              />
            </section>

            {/* Navigation Footer */}
            <div className="pt-20 border-t border-white/5 flex items-center justify-between">
              <div />
              <Link href="/docs/quickstart" className="flex flex-col items-end group">
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-1">Next Step</span>
                <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  Quickstart Guide <ArrowRight size={18} />
                </span>
              </Link>
            </div>

          </div>
        </article>

        {/* --- Right Sidebar: On This Page --- */}
        <aside className="hidden xl:block w-48 shrink-0 sticky top-40 h-fit">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-6 px-2">On this page</p>
          <nav className="space-y-4 border-l border-white/5 pl-4">
            <a href="#introduction" className="block text-xs font-bold text-blue-400">Introduction</a>
            <a href="#installation" className="block text-xs font-bold text-gray-500 hover:text-white transition-colors">Installation</a>
            <a href="#architecture" className="block text-xs font-bold text-gray-500 hover:text-white transition-colors">Core Concepts</a>
            <a href="#community" className="block text-xs font-bold text-gray-500 hover:text-white transition-colors">Community</a>
          </nav>
        </aside>

      </div>
    </main>
  );
}

// --- Sub-Components ---

function DocFeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Link href="#" className="p-8 rounded-4xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden">
      <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-blue-500/5 transition-colors">
        {icon}
      </div>
      <div className="mb-6 inline-block p-3 rounded-xl bg-white/5 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </Link>
  );
}