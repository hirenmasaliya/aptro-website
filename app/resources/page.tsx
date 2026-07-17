"use client";

import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Headphones
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
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

const categories = [
  { 
    title: "Onboarding", 
    icon: <Zap size={20} />, 
    count: "12 Guides",
    links: ["Account Initialization", "The First Invoice", "Data Migration"]
  },
  { 
    title: "Workflow Logic", 
    icon: <BookOpen size={20} />, 
    count: "8 Guides",
    links: ["Status Automation", "Batch Operations", "Logistics Tracking"]
  },
  { 
    title: "Governance", 
    icon: <ShieldCheck size={20} />, 
    count: "5 Guides",
    links: ["Sovereign Encryption", "SSO Configuration", "Compliance Standards"]
  },
];

const featuredGuides = [
  {
    title: "Architecting Freelance Scale",
    desc: "A strategic roadmap for transitioning from solo practice to high-output agency models.",
    tag: "Strategy",
    readTime: "8 min read"
  },
  {
    title: "Automated Ledger Systems",
    desc: "Implementing recurring billing cycles that eliminate manual administrative debt.",
    tag: "Technical",
    readTime: "5 min read"
  }
];

export default function ResourcesPage() {
  return (
    <main className={`min-h-screen pt-36 pb-32 text-zinc-950 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative ${jakarta.className}`}>
      
      {/* --- Server-side Background Image Layer Removed --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#FAFAFA]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#FAFAFA]/80 to-[#FAFAFA]" />
        {/* Abstract glowing orb - Professional Blue */}
        <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-blue-400/5 blur-[140px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- Hero & Search Section --- */}
        <motion.header 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-blue-600 text-xs font-medium border border-zinc-200/60 mb-8 shadow-sm">
            Knowledge Base
          </motion.div>

          <motion.h1 variants={fadeUpItem} className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight mb-6 leading-[1.05] text-zinc-950">
            How can we <span className="text-zinc-400 italic">help?</span>
          </motion.h1>
          
          <motion.p variants={fadeUpItem} className="text-lg md:text-xl text-zinc-500 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Search our documentation, watch technical tutorials, or browse our strategic guides to optimize your workflow.
          </motion.p>

          <motion.div variants={fadeUpItem} className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-blue-500" size={20} />
            <input 
              type="text" 
              placeholder="Search guides, tutorials, or APIs..." 
              className="w-full bg-white/90 backdrop-blur-xl border border-zinc-200/80 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium shadow-[0_8px_30px_rgba(0,0,0,0.04)] placeholder:text-zinc-400 text-zinc-950"
            />
          </motion.div>
        </motion.header>

        {/* --- Categories Grid --- */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpItem}
                className="p-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.04)] hover:bg-white hover:border-blue-200 transition-all duration-500 group flex flex-col"
              >
                <div className="w-12 h-12 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center mb-8 text-zinc-900 group-hover:-translate-y-1 group-hover:text-blue-600 transition-all duration-500 shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-zinc-950 tracking-tight group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                <ul className="space-y-4 mb-8 flex-1">
                  {cat.links.map(link => (
                    <li key={link}>
                      <Link href="#" className="text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="#" className="text-sm font-semibold text-zinc-950 flex items-center gap-1 hover:gap-2 hover:text-blue-600 transition-all">
                  View all {cat.count} <ArrowRight size={16} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- Video Walkthroughs --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEasing }}
          className="mb-32"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-2 text-zinc-950">Video Tutorials</h2>
              <p className="text-zinc-500 font-medium">Step-by-step visual documentation.</p>
            </div>
            <a href="#" className="text-sm font-semibold text-zinc-950 hover:text-blue-600 transition-colors flex items-center gap-2 group">
              YouTube Channel <ArrowRight size={16} className="text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Video */}
            <div className="rounded-[2rem] overflow-hidden bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm group hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:border-blue-200 transition-all duration-500">
              <div className="aspect-video bg-zinc-100 relative flex items-center justify-center overflow-hidden">
                <iframe 
                  className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  src="https://www.youtube.com/embed/RrvXUZAui9I?si=Wakogbx4HHUo1mnv&rel=0" 
                  title="Aptro App Overview" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8 border-t border-zinc-200/60 group-hover:border-blue-100 transition-colors">
                <h4 className="text-lg font-semibold text-zinc-950 mb-1 tracking-tight">The Aptro Masterclass</h4>
                <p className="text-sm font-medium text-zinc-500">Official Guide • 03:45</p>
              </div>
            </div>

            {/* Second Video */}
            <div className="rounded-[2rem] overflow-hidden bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm group hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:border-blue-200 transition-all duration-500">
              <div className="aspect-video bg-zinc-100 relative flex items-center justify-center overflow-hidden">
                <iframe 
                  className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  src="https://www.youtube.com/embed/JidfzxeW8W4?si=sJTZB_jPn0k9kSeR&rel=0" 
                  title="Aptro Ledger Deep Dive" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8 border-t border-zinc-200/60 group-hover:border-blue-100 transition-colors">
                <h4 className="text-lg font-semibold text-zinc-950 mb-1 tracking-tight">Ledger Deep Dive</h4>
                <p className="text-sm font-medium text-zinc-500">Tutorial • 08:22</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Featured Articles --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEasing }}
          className="mb-32"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight mb-2 text-zinc-950">Featured Guides</h2>
            <p className="text-zinc-500 font-medium">Strategic insights for scaling operations.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredGuides.map((guide, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.04)] hover:bg-white hover:border-blue-200 transition-all duration-500 flex flex-col justify-between group">
                <div>
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white text-zinc-600 border border-zinc-200/80 shadow-sm text-xs font-semibold mb-6 tracking-wide group-hover:text-blue-600 transition-colors">
                    {guide.tag}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 text-zinc-950 tracking-tight group-hover:text-blue-600 transition-colors">{guide.title}</h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-10">{guide.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-200/60 group-hover:border-blue-100 transition-colors">
                  <span className="text-sm font-medium text-zinc-400">{guide.readTime}</span>
                  <Link href="#" className="text-sm font-semibold text-zinc-950 flex items-center gap-1 group-hover:gap-2 hover:text-blue-600 transition-all">
                    Read article <ArrowRight size={16} className="text-zinc-400 group-hover:text-blue-500 transition-colors" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- Dark Mode Anchor CTA --- */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEasing }}
            className="relative px-8 py-20 lg:p-24 rounded-[3rem] overflow-hidden bg-zinc-950 text-center shadow-2xl"
          >
            {/* Subtle Dark Glow Layer - Swapped to a deep blue glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mb-8 text-white shadow-inner">
                <Headphones size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white leading-tight">
                Require direct <span className="text-zinc-400 italic">assistance?</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Our technical support engineers are available to help you resolve complex issues or answer specific architectural questions.
              </p>
              
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[0.98] flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
              >
                Contact Support
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 text-zinc-400" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}