"use client";

import { useState } from "react";
import { 
  Rocket, 
  Bug, 
  Zap, 
  ArrowRight, 
  Calendar, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Mail
} from "lucide-react";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Google Material Design Standard Easing
const materialEasing: Easing = [0.2, 0, 0, 1];

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
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
    description: "A focused update improving multi-device synchronization speed, data safety with updated encryption, and clearer reports for business ledgers.",
    badge: "Latest Release",
    changes: [
      { type: "Feature", text: "Advanced Ledger Export: Download easy-to-read CSV and PDF reports with custom dates and multi-currency formats." },
      { type: "Improvement", text: "Faster Cloud Sync: Redesigned the sync engine to update data 65% faster across all your phones and computers." },
      { type: "Security", text: "Enhanced Data Protection: Upgraded login sessions and sensitive business data to industry-leading AES-256 encryption." },
      { type: "Fix", text: "Fixed an issue where the app slowed down when running in the background on battery saver mode." }
    ],
    isLatest: true
  },
  {
    version: "v1.6.4",
    build: "Build 18",
    date: "May 02, 2026",
    title: "Supply Chain & Stock Intelligence",
    description: "Simpler stock management, bulk item editing, and automated reminders before popular items run out.",
    badge: "Feature Release",
    changes: [
      { type: "Feature", text: "Low Stock Predictions: Helpful notifications that forecast when items will run out based on your recent sales." },
      { type: "Improvement", text: "Bulk Item Updates: Edit prices and quantities for thousands of products at once with no screen freezing." },
      { type: "Fix", text: "Fixed a display issue where negative stock counts did not highlight in red on dark mode." }
    ],
    isLatest: false
  },
  {
    version: "v1.5.0",
    build: "Build 12",
    date: "March 10, 2026",
    title: "The Global Ledger Expansion",
    description: "Added automatic camera scanning for bills, support for international currencies, and general performance enhancements.",
    badge: "Major Release",
    changes: [
      { type: "Feature", text: "Bill Photo Scanner: Take a photo of an invoice to automatically convert items and amounts into digital records." },
      { type: "Feature", text: "Global Currencies: Added native billing and conversions for EUR, GBP, and JPY alongside INR." },
      { type: "Improvement", text: "App Speed Boost: Accelerated overall screen transitions and invoice PDF creation by 40%." },
      { type: "Security", text: "Upgraded network connection protocols to secure TLS 1.3 standards." }
    ],
    isLatest: false
  }
];

// Helper to provide Google Material 3 tonal badges
const getTagBadge = (type: string) => {
  switch (type) {
    case "Feature":
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium bg-[#E8F0FE] text-[#1967D2] border border-[#D2E3FC]">
          <Sparkles size={13} className="text-[#1A73E8]" /> New Feature
        </span>
      );
    case "Improvement":
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium bg-[#E6F4EA] text-[#0D652D] border border-[#CEEAD6]">
          <Cpu size={13} className="text-[#1E8E3E]" /> Improvement
        </span>
      );
    case "Fix":
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3]">
          <Bug size={13} className="text-[#E37400]" /> Bug Fix
        </span>
      );
    case "Security":
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium bg-[#FCE8E6] text-[#C5221F] border border-[#FAD2CF]">
          <ShieldCheck size={13} className="text-[#D93025]" /> Security
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium bg-[#F1F3F4] text-[#444746]">
          <Zap size={13} /> Update
        </span>
      );
  }
};

export default function UpdatesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredReleases = releases.map(release => {
    if (activeFilter === "All") return release;
    const items = release.changes.filter(item => item.type === activeFilter);
    if (items.length === 0) return null;
    return { ...release, changes: items };
  }).filter(Boolean) as Release[];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className={`min-h-screen pt-24 pb-32 bg-[#F8F9FA] text-[#202124] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] relative ${jakarta.className}`}>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl mb-12 mt-4"
        >
          <motion.div 
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC] mb-6"
          >
            <Rocket size={16} className="text-[#1A73E8]" /> What&apos;s New in Aptro
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4 leading-[1.15] text-[#1F1F1F]"
          >
            Release notes &amp; <br />
            <span className="text-[#1A73E8]">system updates.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-[16px] md:text-[18px] text-[#5F6368] leading-relaxed max-w-2xl"
          >
            A clear timeline of improvements, new tools, and security upgrades added to Aptro to keep your business running smoothly.
          </motion.p>
        </motion.div>

        {/* --- Material 3 Filter Chips (Horizontal Scannable) --- */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <span className="text-[13px] font-medium text-[#5F6368] mr-2 shrink-0">Filter by:</span>
          {["All", "Feature", "Improvement", "Fix", "Security"].map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#D3E3FD] text-[#041E49] shadow-xs"
                    : "bg-white text-[#444746] border border-[#DADCE0] hover:bg-[#F1F3F4] hover:text-[#1F1F1F]"
                }`}
              >
                {filter === "All" ? "All Updates" : `${filter}s`}
              </button>
            );
          })}
        </div>

        {/* --- Core Content Grid Layout --- */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Version Jump (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-4">
            <div className="p-6 rounded-[24px] bg-white border border-[#DADCE0] shadow-xs">
              <h3 className="text-[13px] font-medium uppercase tracking-wider text-[#5F6368] mb-4">
                Release Timeline
              </h3>
              
              <nav className="flex flex-col gap-1">
                {releases.map((r) => (
                  <a
                    key={r.version}
                    href={`#${r.version}`}
                    className="flex flex-col py-2 px-3 rounded-[12px] hover:bg-[#F1F3F4] transition-colors group"
                  >
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="font-medium text-[#1F1F1F] group-hover:text-[#1A73E8] transition-colors">
                        {r.version}
                      </span>
                      {r.isLatest && (
                        <span className="text-[11px] font-medium text-[#1967D2] bg-[#E8F0FE] px-2 py-0.5 rounded-full">
                          Latest
                        </span>
                      )}
                    </div>
                    <span className="text-[12px] text-[#5F6368] mt-0.5">{r.date}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-9 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredReleases.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: materialEasing }}
                  className="p-12 text-center border border-[#DADCE0] rounded-[24px] bg-white"
                >
                  <p className="text-[15px] text-[#5F6368]">No release notes matched your filter choice.</p>
                  <button 
                    onClick={() => setActiveFilter("All")}
                    className="mt-4 px-5 py-2 text-[14px] font-medium text-[#1A73E8] bg-[#E8F0FE] rounded-full hover:bg-[#D2E3FC] transition-colors"
                  >
                    Show all updates
                  </button>
                </motion.div>
              ) : (
                filteredReleases.map((release) => (
                  <motion.article
                    layout
                    id={release.version}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: materialEasing }}
                    key={release.version}
                    className={`p-6 sm:p-8 md:p-10 rounded-[24px] bg-white border transition-shadow duration-300 hover:shadow-md scroll-mt-28 ${
                      release.isLatest ? "border-[#1A73E8] shadow-xs" : "border-[#DADCE0]"
                    }`}
                  >
                    {/* Header Details */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DADCE0] pb-5 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-[15px] font-medium bg-[#E8F0FE] text-[#1967D2] px-3.5 py-1 rounded-full">
                          {release.version}
                        </span>
                        <span className="text-[13px] text-[#5F6368]">
                          {release.build}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-[13px] text-[#5F6368]">
                        <Calendar size={15} />
                        <span>{release.date}</span>
                      </div>
                    </div>

                    {/* Title & Overview */}
                    <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-3">
                      {release.title}
                    </h2>
                    <p className="text-[15px] md:text-[16px] text-[#444746] leading-relaxed mb-8 max-w-3xl">
                      {release.description}
                    </p>

                    {/* Change Items List */}
                    <div className="space-y-3">
                      {release.changes.map((change, i) => (
                        <div 
                          key={i} 
                          className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-[16px] bg-[#F8F9FA] border border-[#DADCE0] hover:border-[#BDC1C6] transition-colors"
                        >
                          <div className="shrink-0 mt-0.5">
                            {getTagBadge(change.type)}
                          </div>
                          <p className="text-[14px] text-[#202124] leading-relaxed">
                            {change.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- Clean Google-Style Newsletter / Notice Section --- */}
        <section className="mt-20 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: materialEasing }}
            className="p-8 md:p-12 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <div className="w-12 h-12 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center mb-4">
                <Mail size={22} />
              </div>
              <h3 className="text-2xl font-normal text-[#1F1F1F] mb-2">
                Stay updated on new features
              </h3>
              <p className="text-[15px] text-[#5F6368] leading-relaxed">
                Receive release notes directly in your inbox when important improvements and new tools are published.
              </p>
            </div>
            
            <div className="w-full md:w-auto min-w-[320px] max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-full bg-[#E6F4EA] text-[#0D652D] text-[14px] font-medium border border-[#CEEAD6]">
                  <CheckCircle2 size={20} className="text-[#1E8E3E] shrink-0" />
                  <span>You&apos;re subscribed to product updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 rounded-full bg-white border border-[#DADCE0] text-[14px] text-[#202124] placeholder:text-[#5F6368] focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all"
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full font-medium text-[14px] transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2 shrink-0"
                  >
                    Subscribe 
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}