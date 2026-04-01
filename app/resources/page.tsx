"use client";

import { 
  BookOpen, 
  PlayCircle, 
  FileText, 
  Search, 
  ArrowRight, 
  Lightbulb, 
  ShieldCheck,
  Zap,
  HelpCircle
} from "lucide-react";
import Link from "next/link";

const categories = [
  { 
    title: "Getting Started", 
    icon: <Zap className="text-yellow-500" />, 
    count: "12 Articles",
    links: ["Account Setup", "First Invoice", "Importing Data"]
  },
  { 
    title: "Order Management", 
    icon: <BookOpen className="text-blue-500" />, 
    count: "8 Articles",
    links: ["Status Workflow", "Batch Actions", "Tracking Links"]
  },
  { 
    title: "Security & Privacy", 
    icon: <ShieldCheck className="text-emerald-500" />, 
    count: "5 Articles",
    links: ["2FA Setup", "Data Encryption", "GDPR Compliance"]
  },
];

const featuredGuides = [
  {
    title: "Scaling your Freelance Business",
    desc: "A 10-step guide to moving from solo projects to a full-scale agency.",
    tag: "Business",
    readTime: "8 min read"
  },
  {
    title: "Mastering Automated Invoicing",
    desc: "How to set up recurring billing cycles that save you 10+ hours a month.",
    tag: "Tutorial",
    readTime: "5 min read"
  }
];

export default function ResourcesPage() {
  return (
    <main className="pt-32 pb-20 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero / Search Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-8">
            Knowledge <span className="text-blue-500 text-glow">Hub.</span>
          </h1>
          <div className="relative group max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search for guides, features, or tutorials..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all text-sm shadow-2xl"
            />
          </div>
        </div>

        {/* --- Category Grid --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{cat.count}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-3 mb-8">
                {cat.links.map(link => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-500 hover:text-blue-400 flex items-center gap-2 transition-colors">
                      <ArrowRight size={12} /> {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-xs font-bold text-white uppercase tracking-widest hover:text-blue-500 transition-colors">
                View All
              </Link>
            </div>
          ))}
        </div>

        {/* --- Video Tutorials Section --- */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Video Tutorials</h2>
              <p className="text-gray-500 text-sm">Visual walkthroughs for every Aptro feature.</p>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-blue-400 hover:underline">
              Browse YouTube <PlayCircle size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((v) => (
              <div key={v} className="group cursor-pointer">
                <div className="aspect-video rounded-3xl bg-white/5 border border-white/10 mb-4 flex items-center justify-center relative overflow-hidden">
                  <PlayCircle size={48} className="text-white/20 group-hover:text-blue-500 group-hover:scale-110 transition-all z-10" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-bold text-gray-200 group-hover:text-white transition-colors">Aptro Dashboard Walkthrough (2026)</h4>
                <p className="text-xs text-gray-500 mt-1">12:40 • Advanced Workflow</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Featured Guides (The Editorial Look) --- */}
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredGuides.map((guide, i) => (
            <div key={i} className="relative p-10 rounded-[3rem] bg-linear-to-br from-white/3 to-transparent border border-white/5 hover:border-blue-500/20 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  {guide.tag}
                </span>
                <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-blue-400 transition-colors">{guide.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">{guide.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-xs text-gray-600 font-medium">{guide.readTime}</span>
                <Link href="#" className="p-3 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- Help Banner --- */}
        <section className="mt-32 p-12 lg:p-20 rounded-[4rem] bg-[#0a0a0a] border border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <HelpCircle size={200} strokeWidth={1} />
          </div>
          <h2 className="text-4xl font-bold mb-6">Still need help?</h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Our support team is available 24/7 to help you with any issue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
              Talk to Support
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
              Contact Sales
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}