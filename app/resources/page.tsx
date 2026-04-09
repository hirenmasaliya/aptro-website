"use client";

import { 
  BookOpen, 
  PlayCircle, 
  Search, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  HelpCircle,
  FileText,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { 
    title: "Onboarding", 
    icon: <Zap size={20} strokeWidth={1.5} />, 
    count: "12 Guides",
    links: ["Account Initialization", "The First Invoice", "Data Migration"]
  },
  { 
    title: "Workflow Logic", 
    icon: <BookOpen size={20} strokeWidth={1.5} />, 
    count: "08 Guides",
    links: ["Status Automation", "Batch Operations", "Logistics Tracking"]
  },
  { 
    title: "Governance", 
    icon: <ShieldCheck size={20} strokeWidth={1.5} />, 
    count: "05 Guides",
    links: ["Sovereign Encryption", "SSO Configuration", "Compliance Standards"]
  },
];

const featuredGuides = [
  {
    title: "Architecting Freelance Scale",
    desc: "A strategic roadmap for transitioning from solo practice to high-output agency models.",
    tag: "Strategy",
    readTime: "08 Min"
  },
  {
    title: "Automated Ledger Systems",
    desc: "Implementing recurring billing cycles that eliminate manual administrative debt.",
    tag: "Technical",
    readTime: "05 Min"
  }
];

export default function ResourcesPage() {
  return (
    <main className="pt-40 pb-32 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Background Soft Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero / Search Section --- */}
        <div className="text-left md:text-center max-w-5xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            System Knowledge
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.85] text-zinc-950"
          >
            Resources & <br /><span className="text-blue-600 italic">Insights.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="relative group max-w-2xl mx-auto mt-4"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search the infrastructure documentation..." 
              className="w-full bg-white border border-zinc-100 rounded-full py-6 pl-16 pr-8 focus:outline-none focus:border-blue-600 focus:ring-4 ring-blue-50 transition-all text-sm font-medium shadow-2xl shadow-zinc-200"
            />
          </motion.div>
        </div>

        {/* --- Category Grid --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-48">
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white border border-zinc-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl group"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 bg-zinc-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {cat.icon}
                </div>
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{cat.count}</span>
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tighter">{cat.title}</h3>
              <ul className="space-y-4 mb-10">
                {cat.links.map(link => (
                  <li key={link}>
                    <Link href="#" className="text-xs font-bold text-zinc-400 hover:text-blue-600 flex items-center gap-3 transition-colors uppercase tracking-tight">
                      <ArrowRight size={14} className="text-blue-600" /> {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-[10px] font-black text-zinc-950 uppercase tracking-widest flex items-center gap-2 hover:text-blue-600 transition-colors">
                View Documentation <ExternalLink size={12} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* --- Video Walkthroughs (Professional Grid) --- */}
        <section className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black tracking-tighter mb-4 text-zinc-950">Video Walkthroughs</h2>
              <p className="text-zinc-500 font-medium leading-relaxed">High-fidelity visual guides for orchestrating your Aptro environment.</p>
            </div>
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-zinc-950 hover:border-zinc-950 transition-all">
              YouTube Repository
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((v) => (
              <div key={v} className="group cursor-pointer">
                <div className="aspect-video rounded-[2.5rem] bg-zinc-50 border border-zinc-100 mb-6 flex items-center justify-center relative overflow-hidden shadow-sm group-hover:shadow-xl transition-all">
                  <PlayCircle size={48} className="text-zinc-200 group-hover:text-blue-600 group-hover:scale-110 transition-all z-10" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-lg font-black text-zinc-950 group-hover:text-blue-600 transition-colors tracking-tight">Aptro Ledger Walkthrough (v2.0)</h4>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-2">12:40 • System Integration</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Featured Guides (Editorial Layout) --- */}
        <div className="grid lg:grid-cols-2 gap-10 mb-48">
          {featuredGuides.map((guide, i) => (
            <div key={i} className="relative p-12 rounded-[4rem] bg-zinc-50 border border-zinc-100 hover:border-blue-100 hover:bg-white transition-all flex flex-col justify-between group shadow-sm hover:shadow-2xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8">
                  {guide.tag}
                </span>
                <h3 className="text-4xl font-black mb-6 leading-tight tracking-tighter text-zinc-950">{guide.title}</h3>
                <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-10">{guide.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-8 border-t border-zinc-200">
                <span className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">{guide.readTime} Analysis</span>
                <Link href="#" className="w-14 h-14 bg-zinc-950 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-xl shadow-zinc-200">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- Help Sovereign Section --- */}
        <section className="p-12 lg:p-24 rounded-[4rem] bg-zinc-950 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <HelpCircle size={300} strokeWidth={1} />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">Still seeking <br /> <span className="text-zinc-500 italic">clarity?</span></h2>
            <p className="text-zinc-400 mb-12 max-w-xl mx-auto text-xl font-light">
              Our engineering support team is available 24/7 to ensure your infrastructure operates without friction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="px-12 py-5 bg-white text-zinc-950 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                Consult Support
              </Link>
              <Link href="/contact" className="px-12 py-5 bg-transparent border border-white/20 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}