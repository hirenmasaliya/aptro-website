"use client";

import { useState } from "react";
import { 
  Rocket, 
  Bug, 
  Zap, 
  ArrowRight, 
  Calendar, 
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types & Schema Definition ---
interface ChangeItem {
  type: "Feature" | "Improvement" | "Fix" | "Security";
  text: string;
}

interface Release {
  version: string;
  build: string;
  date: string;
  title: string;
  description: string;
  badge: string;
  changes: ChangeItem[];
  isLatest: boolean;
}

// --- Live Deployment Data ---
const releases: Release[] = [
  {
    version: "v1.7.1",
    build: "Build 21",
    date: "June 18, 2026",
    title: "The Sync & Security Update",
    description: "A critical deployment focusing on cross-platform synchronization fidelity, enhanced encryption protocols, and expanded B2B ledger capabilities.",
    badge: "Latest Release",
    changes: [
      { type: "Feature", text: "Advanced Ledger Export: Generate comprehensive CSV and PDF financial reports with custom date ranges and multi-currency formatting." },
      { type: "Improvement", text: "Real-time Synchronization Engine: Rewrote the data pipeline, reducing ledger sync latency by 65% across distributed multi-tenant environments." },
      { type: "Security", text: "Zero-Knowledge Architecture Prep: Migrated core authentication tokens to AES-256 encrypted local secure enclaves." },
      { type: "Fix", text: "Resolved an edge-case memory leak affecting extended background sessions on low-power devices." }
    ],
    isLatest: true
  },
  {
    version: "v1.6.4",
    build: "Build 18",
    date: "May 02, 2026",
    title: "Supply Chain Intelligence",
    description: "Major improvements to inventory forecasting, bulk data manipulation, and automated reordering workflows.",
    badge: "Feature Release",
    changes: [
      { type: "Feature", text: "Predictive Stock Alerts: AI-driven notifications for inventory depletion based on 90-day sales velocity and seasonal trends." },
      { type: "Improvement", text: "Batch Processing Engine: Handle up to 10,000 SKU updates simultaneously via the new Bulk Edit interface without UI freezing." },
      { type: "Fix", text: "Addressed a visual anomaly where negative inventory balances failed to render warning states in the dark mode theme." }
    ],
    isLatest: false
  },
  {
    version: "v1.5.0",
    build: "Build 12",
    date: "March 10, 2026",
    title: "The Global Ledger Expansion",
    description: "Introducing automated engine operations and localized processing systems architecture for global operations.",
    badge: "Major Release",
    changes: [
      { type: "Feature", text: "AI Invoice Scanner: Fully automated order generation directly from uploaded documentation and system imagery." },
      { type: "Feature", text: "Multi-currency settlement mechanisms expanded for global transactions across EUR, GBP, and JPY." },
      { type: "Improvement", text: "Engine optimization phase completed, driving overall operational pipeline latency down by 40%." },
      { type: "Security", text: "Upgraded encryption protocols across payload delivery channels to TLS 1.3 standards." }
    ],
    isLatest: false
  }
];

// Helper to determine change item badges and iconography layout
const getTagStyles = (type: string) => {
  switch (type) {
    case "Feature":
      return { bg: "bg-blue-50 text-blue-700 border-blue-100", icon: <Sparkles size={12} /> };
    case "Improvement":
      return { bg: "bg-emerald-50 text-emerald-700 border-emerald-100", icon: <Cpu size={12} /> };
    case "Fix":
      return { bg: "bg-amber-50 text-amber-700 border-amber-100", icon: <Bug size={12} /> };
    case "Security":
      return { bg: "bg-purple-50 text-purple-700 border-purple-100", icon: <ShieldCheck size={12} /> };
    default:
      return { bg: "bg-zinc-50 text-zinc-700 border-zinc-100", icon: <Zap size={12} /> };
  }
};

export default function UpdatesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Filtering Logic based on nested items
  const filteredReleases = releases.map(release => {
    if (activeFilter === "All") return release;
    const items = release.changes.filter(item => item.type === activeFilter);
    if (items.length === 0) return null;
    return { ...release, changes: items };
  }).filter(Boolean) as Release[];

  return (
    <main className="min-h-screen pt-36 pb-32 bg-zinc-50 text-zinc-950 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
      
      {/* Premium Tech Background Canvas Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none -z-10" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-indigo-200/0 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="border-b border-zinc-200/80 pb-16 mb-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-zinc-800 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-zinc-200/80 shadow-xs"
            >
              <Rocket size={12} className="text-blue-600" /> Platform Deployment Log
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight"
            >
              System Changes & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-zinc-950">Feature Deployments.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              className="text-base md:text-lg text-zinc-500 font-medium max-w-2xl leading-relaxed"
            >
              An automated, chronological ledger detailing all optimizations, security modifications, and architecture updates deployed to the Aptro environment.
            </motion.p>
          </div>
        </div>

        {/* --- Core Content Grid Layout --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Filter Sidebar Controller */}
          <div className="lg:col-span-3 lg:sticky lg:top-36 space-y-8">
            <div className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-xs">
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <SlidersHorizontal size={12} /> Filter Engine
              </h3>
              
              <div className="flex flex-wrap lg:flex-col gap-1.5">
                {["All", "Feature", "Improvement", "Fix", "Security"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      activeFilter === filter 
                        ? 'bg-zinc-950 text-white shadow-md shadow-zinc-950/10' 
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'
                    }`}
                  >
                    <span>{filter === "All" ? "All Shipments" : `${filter}s`}</span>
                    {activeFilter === filter && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Micro Quick Jump Navigation Module */}
            <div className="hidden lg:block p-6 rounded-3xl border border-zinc-200/40 bg-zinc-100/50">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Versions History</h4>
              <ul className="space-y-3 text-xs font-semibold text-zinc-500">
                {releases.map((r) => (
                  <li key={r.version} className="flex flex-col gap-0.5 hover:text-zinc-950 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <ChevronRight size={12} className="text-zinc-400 group-hover:text-blue-500 transition-colors" />
                      <span className="text-zinc-900 font-bold">{r.version}</span>
                      <span className="text-[9px] text-zinc-400 uppercase font-bold ml-auto">{r.build}</span>
                    </div>
                    <span className="text-[10px] text-zinc-400 pl-5">{r.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Log Timeline Feed */}
          <div className="lg:col-span-9 space-y-10">
            <AnimatePresence mode="popLayout">
              {filteredReleases.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="p-16 text-center border border-dashed border-zinc-300 rounded-[2rem] bg-white"
                >
                  <p className="text-sm font-bold text-zinc-400">No deployment components matched this filter criterion.</p>
                </motion.div>
              ) : (
                filteredReleases.map((release) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    key={release.version}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-zinc-200/80 shadow-xs relative group hover:shadow-md transition-shadow"
                  >
                    {/* Visual Anchor Indicator */}
                    {release.isLatest && (
                      <div className="absolute top-0 right-12 -translate-y-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest shadow-md shadow-blue-600/20">
                        Live Lifecycle
                      </div>
                    )}

                    {/* Metadata Header Segment */}
                    <div className="flex flex-wrap items-center gap-4 border-b border-zinc-100 pb-6 mb-6">
                      <span className="text-xs font-black tracking-wider bg-zinc-100 text-zinc-900 px-3 py-1 rounded-lg uppercase">
                        {release.version}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-lg">
                        <Cpu size={12} /> {release.build}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 ml-auto sm:ml-0">
                        <Calendar size={12} /> {release.date}
                      </span>
                      <div className="w-1 h-1 bg-zinc-300 rounded-full hidden sm:block" />
                      <span className="text-xs font-bold text-blue-600 italic hidden sm:block">{release.badge}</span>
                    </div>

                    {/* Core Description Area */}
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {release.title}
                    </h2>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-8 max-w-3xl">
                      {release.description}
                    </p>

                    {/* Changes Engine Breakdown Grid */}
                    <div className="space-y-3">
                      {release.changes.map((change, i) => {
                        const tag = getTagStyles(change.type);
                        return (
                          <div 
                            key={i} 
                            className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50/50 border border-zinc-100 hover:bg-zinc-50 transition-colors"
                          >
                            <div className={`mt-0.5 px-2 py-1 rounded-md border text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5 shrink-0 w-24 justify-center ${tag.bg}`}>
                              {tag.icon}
                              <span>{change.type}</span>
                            </div>
                            <p className="text-xs font-semibold text-zinc-700 leading-relaxed pt-0.5">
                              {change.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* --- Unified Enterprise Newsletter Canvas --- */}
        <section className="mt-32 p-8 md:p-16 rounded-[3rem] bg-zinc-950 text-white relative overflow-hidden shadow-xl border border-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.15),transparent_60%)]" />
          
          <div className="max-w-xl relative z-10 text-left">
            <h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tight">Synchronize releases.</h3>
            <p className="text-zinc-400 mb-8 text-sm md:text-base font-medium leading-relaxed">
              Subscribe to standard delivery vectors for high-priority technical environment notices and change scopes.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                required
                placeholder="developer@company.com" 
                className="flex-1 px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-xs font-bold placeholder:text-zinc-600 text-white"
              />
              <button type="submit" className="px-6 py-3.5 bg-white text-zinc-950 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-md shrink-0 flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </section>

      </div>
    </main>
  );
}