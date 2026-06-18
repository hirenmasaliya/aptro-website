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
import { motion, AnimatePresence, Variants } from "framer-motion";
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

// Helper to determine clean monochromatic iconography
const getTagIcon = (type: string) => {
  switch (type) {
    case "Feature": return <Sparkles size={14} className="text-zinc-950" />;
    case "Improvement": return <Cpu size={14} className="text-zinc-600" />;
    case "Fix": return <Bug size={14} className="text-zinc-500" />;
    case "Security": return <ShieldCheck size={14} className="text-zinc-800" />;
    default: return <Zap size={14} className="text-zinc-400" />;
  }
};

export default function UpdatesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredReleases = releases.map(release => {
    if (activeFilter === "All") return release;
    const items = release.changes.filter(item => item.type === activeFilter);
    if (items.length === 0) return null;
    return { ...release, changes: items };
  }).filter(Boolean) as Release[];

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
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="border-b border-zinc-200/60 pb-16 mb-16"
        >
          <div className="max-w-3xl">
            <motion.div 
              variants={fadeUpItem}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium border border-zinc-200/60 mb-8"
            >
              <Rocket size={14} className="text-zinc-500" /> Platform Deployment Log
            </motion.div>
            
            <motion.h1 
              variants={fadeUpItem}
              className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.05] text-zinc-950"
            >
              System changes & <br />
              <span className="text-zinc-400 italic">feature deployments.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUpItem}
              className="text-lg md:text-xl text-zinc-500 font-medium max-w-2xl leading-relaxed"
            >
              An automated, chronological ledger detailing all optimizations, security modifications, and architecture updates deployed to the Aptro environment.
            </motion.p>
          </div>
        </motion.div>

        {/* --- Core Content Grid Layout --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Filter Sidebar Controller */}
          <div className="lg:col-span-3 lg:sticky lg:top-36 space-y-6">
            <div className="p-6 rounded-[2rem] bg-white border border-zinc-200/60 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
                <SlidersHorizontal size={14} /> Filter Log
              </h3>
              
              <div className="flex flex-wrap lg:flex-col gap-2">
                {["All", "Feature", "Improvement", "Fix", "Security"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                      activeFilter === filter 
                        ? 'bg-zinc-950 text-white shadow-md' 
                        : 'bg-[#FAFAFA] text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 border border-zinc-100'
                    }`}
                  >
                    <span>{filter === "All" ? "All Deployments" : `${filter}s`}</span>
                    {activeFilter === filter && <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Micro Quick Jump Navigation Module */}
            <div className="hidden lg:block p-6 rounded-[2rem] border border-zinc-200/60 bg-[#FAFAFA]">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-5">Version History</h4>
              <ul className="space-y-4">
                {releases.map((r) => (
                  <li key={r.version} className="flex flex-col gap-1 hover:text-zinc-950 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 transition-all duration-300" />
                      <span className="text-zinc-900 font-semibold text-sm">{r.version}</span>
                      <span className="text-[10px] text-zinc-400 uppercase font-semibold ml-auto">{r.build}</span>
                    </div>
                    <span className="text-xs text-zinc-500 font-medium pl-6">{r.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Log Timeline Feed */}
          <div className="lg:col-span-9 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredReleases.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: premiumEasing }}
                  className="p-16 text-center border border-dashed border-zinc-300 rounded-[2rem] bg-[#FAFAFA]"
                >
                  <p className="text-sm font-medium text-zinc-500">No deployment components matched this filter criterion.</p>
                </motion.div>
              ) : (
                filteredReleases.map((release) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: premiumEasing }}
                    key={release.version}
                    className="p-8 md:p-12 rounded-[2rem] bg-white border border-zinc-200/60 shadow-sm relative group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all duration-500"
                  >
                    {/* Visual Anchor Indicator */}
                    {release.isLatest && (
                      <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 rounded-full bg-zinc-950 text-white text-[10px] font-semibold uppercase tracking-widest shadow-sm border border-zinc-800">
                        Live Environment
                      </div>
                    )}

                    {/* Metadata Header Segment */}
                    <div className="flex flex-wrap items-center gap-4 border-b border-zinc-100 pb-6 mb-8">
                      <span className="text-sm font-semibold tracking-tight bg-zinc-100 text-zinc-950 px-3 py-1 rounded-md">
                        {release.version}
                      </span>
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Cpu size={14} className="text-zinc-400" /> {release.build}
                      </span>
                      <div className="w-1 h-1 bg-zinc-300 rounded-full hidden sm:block" />
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Calendar size={14} className="text-zinc-400" /> {release.date}
                      </span>
                    </div>

                    {/* Core Description Area */}
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-950 mb-4 transition-colors">
                      {release.title}
                    </h2>
                    <p className="text-base text-zinc-500 font-medium leading-relaxed mb-10 max-w-3xl">
                      {release.description}
                    </p>

                    {/* Changes Engine Breakdown Grid */}
                    <div className="space-y-4">
                      {release.changes.map((change, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-4 p-5 rounded-xl bg-[#FAFAFA] border border-zinc-100 transition-colors"
                        >
                          <div className="mt-0.5 w-8 h-8 rounded-lg bg-white border border-zinc-200/60 flex items-center justify-center shrink-0 shadow-sm">
                            {getTagIcon(change.type)}
                          </div>
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                              {change.type}
                            </div>
                            <p className="text-sm font-medium text-zinc-700 leading-relaxed">
                              {change.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- Unified Enterprise Newsletter Canvas --- */}
        <section className="mt-32 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEasing }}
            className="relative px-8 py-20 lg:p-24 rounded-[3rem] overflow-hidden bg-zinc-950 shadow-2xl"
          >
            {/* Subtle Dark Glow Layer */}
            <div className="absolute top-0 left-0 w-[80%] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent blur-[80px] pointer-events-none" />
            
            <div className="max-w-2xl relative z-10 text-left mx-auto lg:mx-0">
              <h3 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white">
                Synchronize <span className="text-zinc-400 italic">releases.</span>
              </h3>
              <p className="text-zinc-400 mb-10 text-lg font-medium leading-relaxed max-w-xl">
                Subscribe to standard delivery vectors for high-priority technical environment notices and change scopes.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <input 
                  type="email" 
                  required
                  placeholder="developer@company.com" 
                  className="flex-1 px-6 py-4 rounded-full bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-zinc-500 transition-all text-sm font-medium placeholder:text-zinc-600 text-white shadow-inner"
                />
                <button type="submit" className="px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-sm transition-all duration-300 hover:bg-zinc-200 hover:scale-[0.98] shadow-sm flex items-center justify-center gap-2 group">
                  Subscribe 
                  <ArrowRight size={16} className="text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </form>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}