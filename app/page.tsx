"use client";

import Features from "./components/Features";
import Hero from "./components/Hero";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">

      {/* 1. Subtle Background Texture */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Soft atmospheric gradient */}
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-blue-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-zinc-50/80 blur-[100px] rounded-full" />
        
        {/* Minimalist Grid - Ensure you have this SVG or use a standard pattern */}
        <div className="absolute inset-0 bg-[url('/grid-light.svg')] opacity-[0.03] bg-center" />
      </div>

      <div className="relative z-10 pt-20">
        <Hero />

        <div className="flex flex-col gap-y-24 lg:gap-y-40 pb-40">
          <Features />

          {/* 4. THE EXECUTIVE CTA SECTION */}
          <section className="max-w-7xl mx-auto px-6 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-12 lg:p-28 rounded-[4rem] overflow-hidden border border-zinc-100 bg-zinc-50/50 text-center transition-all duration-700 hover:shadow-2xl hover:shadow-zinc-200"
            >
              {/* Glassmorphism Inner Layer */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl -z-10" />

              <div className="relative z-10">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  Q2 Priority: Free Onboarding
                </div>

                {/* Hero Title */}
                <h2 className="text-6xl lg:text-9xl font-black mb-10 tracking-tighter leading-[0.85] text-zinc-950">
                  Scale with <br />
                  <span className="text-blue-600 italic font-serif">Precision.</span>
                </h2>

                <p className="text-zinc-500 text-xl lg:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
                  Aptro is the operating system for the modern entrepreneur. 
                  Join <span className="text-zinc-950">10k+ founders</span> architecting their future.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/download"
                    className="w-full sm:w-auto px-14 py-6 bg-zinc-950 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-zinc-300 active:scale-95 group/btn flex items-center justify-center gap-3"
                  >
                    Launch Dashboard
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-14 py-6 bg-white border border-zinc-200 rounded-full font-black text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all text-zinc-950 flex items-center justify-center gap-2"
                  >
                    Book a Demo
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-24 pt-12 border-t border-zinc-200/60 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-blue-600" /> SOC2 Compliant
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    <Zap size={14} className="text-zinc-950" /> 99.99% Uptime
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    <div className="flex -space-x-1">
                      <div className="w-3 h-3 rounded-full bg-zinc-200 border border-white" />
                      <div className="w-3 h-3 rounded-full bg-zinc-400 border border-white" />
                    </div>
                    ISO 27001 Secure
                  </div>
                </div>
              </div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent transition-all duration-1000 group-hover:via-blue-300" />
            </motion.div>
          </section>
        </div>
      </div>

      <footer className="py-20 text-center">
        <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} Aptro Platform — Engineered by Hiren Masaliya
        </p>
      </footer>
    </main>
  );
}

// Reusable Metric Card (White Theme)
function MetricCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-10 rounded-[3rem] bg-white border border-zinc-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl group">
      <div className="w-14 h-14 bg-zinc-50 text-zinc-950 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>
      <h3 className="text-2xl font-black tracking-tight text-zinc-950 mb-4">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}