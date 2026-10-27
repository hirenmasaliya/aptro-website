"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Rocket, 
  Bug, 
  Zap, 
  ArrowRight, 
  Calendar, 
  Sparkles,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Mail,
  Link as LinkIcon,
  Check
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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

// --- Types & Schema Definition ---
type ChangeType = "Feature" | "Improvement" | "Fix" | "Security";

interface ChangeItem {
  type: ChangeType;
  text: string;
}

interface Release {
  version: string;
  build: string;
  date: string;
  title: string;
  description: string;
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
    changes: [
      { type: "Feature", text: "Bill Photo Scanner: Take a photo of an invoice to automatically convert items and amounts into digital records." },
      { type: "Feature", text: "Global Currencies: Added native billing and conversions for EUR, GBP, and JPY alongside INR." },
      { type: "Improvement", text: "App Speed Boost: Accelerated overall screen transitions and invoice PDF creation by 40%." },
      { type: "Security", text: "Upgraded network connection protocols to secure TLS 1.3 standards." }
    ],
    isLatest: false
  }
];

// Helper for Material 3 tonal badges
const BadgeIcon = ({ type, size = 13 }: { type: ChangeType, size?: number }) => {
  switch (type) {
    case "Feature": return <Sparkles size={size} className="text-[#1A73E8]" />;
    case "Improvement": return <Cpu size={size} className="text-[#1E8E3E]" />;
    case "Fix": return <Bug size={size} className="text-[#E37400]" />;
    case "Security": return <ShieldCheck size={size} className="text-[#D93025]" />;
    default: return <Zap size={size} className="text-[#444746]" />;
  }
};

const getTagBadge = (type: ChangeType) => {
  const styles = {
    Feature: "bg-[#E8F0FE] text-[#1967D2] border-[#D2E3FC]",
    Improvement: "bg-[#E6F4EA] text-[#0D652D] border-[#CEEAD6]",
    Fix: "bg-[#FEF7E0] text-[#B06000] border-[#FEEFC3]",
    Security: "bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]"
  }[type] || "bg-[#F1F3F4] text-[#444746] border-[#DADCE0]";

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium border ${styles}`}>
      <BadgeIcon type={type} /> {type === "Fix" ? "Bug Fix" : type}
    </span>
  );
};

export default function UpdatesPage() {
  const [activeFilter, setActiveFilter] = useState<ChangeType | "All">("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(releases[0].version);
  const [copiedVersion, setCopiedVersion] = useState<string | null>(null);

  // Filter functionality
  const filteredReleases = useMemo(() => {
    return releases.map(release => {
      if (activeFilter === "All") return release;
      const filteredChanges = release.changes.filter(item => item.type === activeFilter);
      return filteredChanges.length > 0 ? { ...release, changes: filteredChanges } : null;
    }).filter(Boolean) as Release[];
  }, [activeFilter]);

  // Count occurrences for filter chips
  const filterCounts = useMemo(() => {
    const counts = { All: releases.length, Feature: 0, Improvement: 0, Fix: 0, Security: 0 };
    releases.forEach(r => {
      r.changes.forEach(c => {
        if (counts[c.type] !== undefined) counts[c.type]++;
      });
    });
    return counts;
  }, []);

  // Scroll Spy for sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" } // Trigger when element hits top 20% of viewport
    );

    const elements = document.querySelectorAll('article[data-release-card]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredReleases]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const copyLink = (version: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${version}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedVersion(version);
      setTimeout(() => setCopiedVersion(null), 2000);
    });
  };

  const filters: ("All" | ChangeType)[] = ["All", "Feature", "Improvement", "Fix", "Security"];

  return (
    <main className={`min-h-screen pt-20 pb-32 bg-[#F8F9FA] text-[#202124] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] relative overflow-hidden ${jakarta.className}`}>
      
      {/* Background Graphic element */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#E8F0FE]/50 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 right-0 h-full w-full bg-[radial-gradient(#DADCE0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none -z-10" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl mb-14 mt-8"
        >
          <motion.div 
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#1967D2] text-[13px] font-semibold border border-[#D2E3FC] shadow-sm mb-6"
          >
            <Rocket size={16} className="text-[#1A73E8]" /> Aptro Changelog
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-5 leading-[1.15] text-[#1F1F1F]"
          >
            Release notes &amp; <br />
            <span className="text-[#1A73E8]">system updates.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-[17px] md:text-[18px] text-[#5F6368] leading-relaxed max-w-2xl"
          >
            A transparent timeline of feature expansions, UX improvements, and security upgrades added to Aptro to keep your business running smoothly.
          </motion.p>
        </motion.div>

        {/* --- Interactive Filter Chips --- */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none sticky top-[72px] bg-[#F8F9FA]/90 backdrop-blur-md z-20 pt-4 -mt-4 border-b border-[#DADCE0]/50 lg:border-none lg:static lg:bg-transparent lg:backdrop-blur-none lg:pt-0 lg:mt-0">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-[#5F6368] mr-2 shrink-0">Filter:</span>
          {filters.map((filter) => {
            const isSelected = activeFilter === filter;
            const count = filterCounts[filter];
            
            // Don't render filter if no items exist (except All)
            if (filter !== "All" && count === 0) return null;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#041E49] text-white shadow-md shadow-blue-900/10"
                    : "bg-white text-[#444746] border border-[#DADCE0] hover:bg-[#F1F3F4] hover:text-[#1F1F1F]"
                }`}
              >
                {filter === "All" ? "All Updates" : filter}
                <span className={`text-[12px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-[#F1F3F4] text-[#5F6368]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- Core Content Grid Layout --- */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Version Jump (Sticky) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32">
            <div className="p-6 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#5F6368] mb-4 pl-3">
                Timeline
              </h3>
              <nav className="flex flex-col relative">
                {/* Timeline vertical line indicator */}
                <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-[#F1F3F4] -z-10" />
                
                {releases.map((r) => {
                  const isActive = activeSection === r.version;
                  return (
                    <a
                      key={r.version}
                      href={`#${r.version}`}
                      onClick={() => setActiveSection(r.version)}
                      className={`flex items-start gap-4 py-3 px-3 rounded-[12px] transition-all group ${
                        isActive ? "bg-[#E8F0FE]" : "hover:bg-[#F8F9FA]"
                      }`}
                    >
                      <div className={`mt-1.5 w-2 h-2 rounded-full ring-4 shrink-0 transition-colors ${
                        isActive ? "bg-[#1A73E8] ring-[#D3E3FD]" : "bg-[#DADCE0] ring-white group-hover:bg-[#BDC1C6]"
                      }`} />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className={`text-[14px] font-semibold transition-colors ${
                            isActive ? "text-[#174EA6]" : "text-[#3C4043] group-hover:text-[#1A73E8]"
                          }`}>
                            {r.version}
                          </span>
                          {r.isLatest && (
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#1967D2] bg-[#D3E3FD] px-1.5 py-0.5 rounded-sm">
                              Latest
                            </span>
                          )}
                        </div>
                        <span className={`text-[12px] mt-0.5 ${isActive ? "text-[#1967D2]/80" : "text-[#5F6368]"}`}>
                          {r.date}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-9 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredReleases.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: materialEasing }}
                  className="p-16 text-center border border-[#DADCE0] rounded-[24px] bg-white flex flex-col items-center shadow-sm"
                >
                  <div className="w-16 h-16 bg-[#F1F3F4] text-[#80868B] rounded-full flex items-center justify-center mb-4">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-[#1F1F1F] mb-2">No matching updates</h3>
                  <p className="text-[15px] text-[#5F6368] mb-6">We haven't released any updates matching this specific filter yet.</p>
                  <button 
                    onClick={() => setActiveFilter("All")}
                    className="px-6 py-2.5 text-[14px] font-medium text-white bg-[#1A73E8] rounded-full hover:bg-[#1557B0] transition-colors shadow-sm"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              ) : (
                filteredReleases.map((release) => (
                  <motion.article
                    layout
                    id={release.version}
                    data-release-card
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: materialEasing }}
                    key={release.version}
                    className={`p-6 sm:p-8 md:p-10 rounded-[24px] bg-white border transition-all duration-300 scroll-mt-32 relative group overflow-hidden ${
                      release.isLatest 
                        ? "border-[#1A73E8]/30 shadow-md shadow-blue-900/5 ring-1 ring-[#1A73E8]/10" 
                        : "border-[#DADCE0] hover:border-[#BDC1C6] hover:shadow-md"
                    }`}
                  >
                    {/* Latest Release Subtle Background Gradient */}
                    {release.isLatest && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E8F0FE] to-transparent opacity-50 pointer-events-none rounded-bl-full" />
                    )}

                    {/* Header Details */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8EAED] pb-6 mb-6 relative">
                      <div className="flex items-center gap-3">
                        <span className={`text-[15px] font-semibold px-4 py-1.5 rounded-full ${
                          release.isLatest ? "bg-[#1A73E8] text-white" : "bg-[#F1F3F4] text-[#1F1F1F]"
                        }`}>
                          {release.version}
                        </span>
                        <span className="text-[14px] text-[#5F6368] font-mono bg-[#F8F9FA] px-2 py-1 rounded-md border border-[#E8EAED]">
                          {release.build}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[14px] text-[#5F6368] font-medium">
                          <Calendar size={16} className="text-[#80868B]" />
                          <time dateTime={new Date(release.date).toISOString()}>{release.date}</time>
                        </div>
                        {/* Copy Link Button */}
                        <button 
                          onClick={() => copyLink(release.version)}
                          className="p-2 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#1A73E8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
                          aria-label={`Copy link to version ${release.version}`}
                          title="Copy direct link"
                        >
                          {copiedVersion === release.version ? <Check size={18} className="text-[#1E8E3E]" /> : <LinkIcon size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* Title & Overview */}
                    <div className="relative">
                      <h2 className="text-2xl md:text-3xl font-medium text-[#1F1F1F] mb-3">
                        {release.title}
                      </h2>
                      <p className="text-[16px] text-[#444746] leading-relaxed mb-8 max-w-3xl">
                        {release.description}
                      </p>

                      {/* Change Items List */}
                      <div className="space-y-3">
                        {release.changes.map((change, i) => (
                          <div 
                            key={i} 
                            className="flex items-start gap-4 p-4 rounded-[16px] bg-[#F8F9FA] border border-transparent hover:border-[#DADCE0] hover:bg-white transition-all group/item"
                          >
                            <div className="shrink-0 mt-0.5">
                              {getTagBadge(change.type)}
                            </div>
                            <p className="text-[15px] text-[#202124] leading-relaxed pt-0.5">
                              {/* Split text to bold the prefix if it has a colon */}
                              {change.text.includes(":") ? (
                                <>
                                  <span className="font-semibold text-[#1F1F1F]">
                                    {change.text.split(":")[0]}:
                                  </span>
                                  {change.text.substring(change.text.indexOf(":") + 1)}
                                </>
                              ) : (
                                change.text
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- Clean Google-Style Newsletter / Notice Section --- */}
        <section className="mt-24 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: materialEasing }}
            className="p-8 md:p-12 rounded-[24px] bg-[#041E49] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            {/* Background design elements for footer */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-20 -ml-10 -mb-10 pointer-events-none" />

            <div className="max-w-xl relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 text-blue-200 flex items-center justify-center mb-5 backdrop-blur-sm border border-white/10">
                <Mail size={22} />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
                Stay updated on new features
              </h3>
              <p className="text-[16px] text-blue-100/80 leading-relaxed">
                Receive release notes directly in your inbox when important improvements, bug fixes, and new tools are published.
              </p>
            </div>
            
            <div className="w-full md:w-auto min-w-[320px] max-w-md relative z-10">
              {subscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-5 rounded-[16px] bg-[#1E8E3E]/20 text-[#81C995] text-[15px] font-medium border border-[#1E8E3E]/30 backdrop-blur-sm"
                >
                  <CheckCircle2 size={24} className="text-[#81C995] shrink-0" />
                  <span>You're officially subscribed to updates!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email" 
                    className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-[15px] text-white placeholder:text-blue-200/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:bg-white/20 transition-all backdrop-blur-sm"
                  />
                  <button 
                    type="submit" 
                    className="px-8 py-3.5 bg-white text-[#041E49] hover:bg-blue-50 rounded-full font-semibold text-[15px] transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#041E49] shrink-0 shadow-lg"
                  >
                    Subscribe 
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
              <p className="text-[12px] text-blue-200/60 text-center sm:text-left mt-4 pl-2">
                We only send emails for major platform releases. No spam.
              </p>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}