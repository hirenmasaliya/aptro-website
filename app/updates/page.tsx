"use client";

import { 
  Rocket, 
  Bug, 
  Zap, 
  ArrowRight, 
  Calendar, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const releases = [
  {
    version: "v1.2.0",
    date: "March 28, 2026",
    title: "The Intelligence Update",
    description: "Introducing AI-powered invoice matching and automated tax localized for 12 new global regions.",
    changes: [
      { type: "System", text: "AI Invoice Scanner: Automated order generation from imagery.", icon: <Sparkles size={14} className="text-blue-600" /> },
      { type: "Market", text: "Multi-currency settlement for EUR, GBP, and JPY.", icon: <Zap size={14} className="text-zinc-400" /> },
      { type: "Optimization", text: "Dashboard rendering speeds optimized by 40%.", icon: <Zap size={14} className="text-zinc-400" /> },
      { type: "Resolved", text: "Synchronization latency fixed for Android 14 builds.", icon: <Bug size={14} className="text-zinc-300" /> },
    ],
    isLatest: true
  },
  {
    version: "v1.1.5",
    date: "February 15, 2026",
    title: "Engine Performance",
    description: "Focused on core ledger optimizations and expanding our reporting infrastructure.",
    changes: [
      { type: "Improved", text: "Export engine now supports granular custom metadata.", icon: <Zap size={14} className="text-zinc-400" /> },
      { type: "Improved", text: "Global search now utilizes partial string matching.", icon: <Zap size={14} className="text-zinc-400" /> },
      { type: "Resolved", text: "Rounding logic corrected for high-volume tax zones.", icon: <Bug size={14} className="text-zinc-300" /> },
    ],
    isLatest: false
  }
];

export default function UpdatesPage() {
  return (
    <main className="pt-40 pb-32 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Background Dynamics */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="mb-32 text-left md:text-center">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            <Rocket size={12} /> System Changelog
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-zinc-950"
          >
            What we <br /><span className="text-blue-600 italic">shipped.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            A real-time log of our engineering progress. Transparent, detailed, 
            and architected for the future of Aptro.
          </motion.p>
        </div>

        {/* --- Timeline Infrastructure --- */}
        <div className="relative space-y-24 before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-px before:h-full before:w-[1px] before:bg-zinc-100">
          
          {releases.map((release, index) => (
            <motion.div 
              key={release.version}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              
              {/* Timeline Marker */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shadow-xl absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-125 ${release.isLatest ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                {release.isLatest ? <Sparkles size={16} /> : <Calendar size={16} />}
              </div>

              {/* Release Card */}
              <div className="w-[calc(100%-4rem)] md:w-[42%] ml-16 md:ml-0">
                <div className="p-8 lg:p-12 rounded-[3rem] bg-white border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-blue-100">
                  <div className="flex items-center justify-between mb-8">
                    <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${release.isLatest ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-zinc-100 text-zinc-400'}`}>
                      {release.version}
                    </span>
                    <time className="text-[10px] text-zinc-300 font-black uppercase tracking-widest">{release.date}</time>
                  </div>

                  <h2 className="text-3xl font-black mb-4 tracking-tighter text-zinc-950">{release.title}</h2>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-10">
                    {release.description}
                  </p>

                  <div className="space-y-4">
                    {release.changes.map((change, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 group/item transition-colors hover:bg-white">
                        <div className="mt-1">{change.icon}</div>
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-1 block">{change.type}</span>
                          <p className="text-xs font-bold text-zinc-700 leading-snug tracking-tight">{change.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Newsletter Card --- */}
        <section className="mt-48 p-12 lg:p-24 rounded-[4rem] bg-zinc-950 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Stay in sync.</h3>
            <p className="text-zinc-400 mb-12 max-w-md mx-auto text-xl font-light">
              Receive the Monthly Intelligence Briefing—new features and market insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="architect@company.com" 
                className="flex-1 px-8 py-5 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-blue-600 transition-all text-sm font-bold placeholder:text-zinc-600"
              />
              <button className="px-10 py-5 bg-white text-zinc-950 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}