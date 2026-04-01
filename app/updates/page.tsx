"use client";

import { 
  Rocket, 
  Bug, 
  Zap, 
  ArrowRight, 
  Calendar, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const releases = [
  {
    version: "v1.2.0",
    date: "March 28, 2026",
    title: "The Intelligence Update",
    description: "Introducing AI-powered invoice matching and automated tax localized for 12 new regions.",
    changes: [
      { type: "New", text: "AI Invoice Scanner: Upload a photo to instantly generate an order.", icon: <Sparkles size={14} className="text-purple-400" /> },
      { type: "New", text: "Multi-currency support for EUR, GBP, and JPY.", icon: <Zap size={14} className="text-blue-400" /> },
      { type: "Improved", text: "Dashboard loading speeds increased by 40%.", icon: <Zap size={14} className="text-blue-400" /> },
      { type: "Fixed", text: "Resolved a synchronization lag on Android 14 devices.", icon: <Bug size={14} className="text-emerald-400" /> },
    ],
    isLatest: true
  },
  {
    version: "v1.1.5",
    date: "February 15, 2026",
    title: "Performance & Stability",
    description: "Focused on core engine optimizations and expanding our reporting tools.",
    changes: [
      { type: "Improved", text: "Export to CSV/Excel now includes custom metadata fields.", icon: <Zap size={14} className="text-blue-400" /> },
      { type: "Improved", text: "Search functionality now supports partial matching.", icon: <Zap size={14} className="text-blue-400" /> },
      { type: "Fixed", text: "Corrected rounding errors in high-volume tax calculations.", icon: <Bug size={14} className="text-emerald-400" /> },
    ],
    isLatest: false
  }
];

export default function UpdatesPage() {
  return (
    <main className="pt-32 pb-20 bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Rocket size={12} /> Changelog
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-glow">What&apos;s New</h1>
          <p className="text-gray-400 text-lg">
            Stay up to date with the latest features, improvements, and fixes 
            we&apos;re shipping to help you grow Aptro.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-blue-600/50 before:via-white/5 before:to-transparent">
          
          {releases.map((release, index) => (
            <div key={release.version} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Dot on Timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black text-blue-500 shadow shadow-blue-500/20 absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform">
                {release.isLatest ? <Sparkles size={18} /> : <Calendar size={18} />}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 lg:p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-all ml-16 md:ml-0">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${release.isLatest ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                    {release.version}
                  </span>
                  <time className="text-xs text-gray-500 font-medium">{release.date}</time>
                </div>

                <h2 className="text-2xl font-bold mb-3">{release.title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {release.description}
                </p>

                <div className="space-y-3">
                  {release.changes.map((change, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/2 border border-white/3">
                      <div className="mt-1">{change.icon}</div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-50 mr-2">{change.type}</span>
                        <p className="text-sm text-gray-300">{change.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Footer */}
        <section className="mt-32 p-10 rounded-[2.5rem] bg-white/2 border border-white/5 text-center">
          <h3 className="text-2xl font-bold mb-4">Never miss an update</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Get the latest Aptro news and business tips delivered straight to your inbox once a month.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
              Subscribe
            </button>
          </form>
        </section>

      </div>
    </main>
  );
}