"use client";

import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ChevronRight, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">

      {/* 1. Enhanced Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[140px] rounded-full" />
        {/* Subtle grid overlay for that "Tech/SaaS" texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 pt-20">
        <Hero />

        <div className="flex flex-col gap-y-24 lg:gap-y-32 pb-32">
          <Features />

          {/* 4. The Interactive CTA Section */}
          <section className="max-w-6xl mx-auto px-6 w-full group relative">
            {/* 1. Behind-the-card Ambient Glow (Stronger on Hover) */}
            <div className="absolute -inset-10 bg-blue-600/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

            <div className="relative p-12 lg:p-24 rounded-[4rem] overflow-hidden border border-white/10 bg-[#0a0a0a] text-center transition-all duration-700 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">

              {/* 2. Interior Animated Gradient (The "Spotlight") */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/[0.07] via-transparent to-purple-600/5 pointer-events-none" />

              {/* 3. High-End Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* 4. Content Stack */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Limited Time: Free Onboarding
                </div>

                <h2 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-linear-to-b from-white to-white/50">
                  Scale your business <br />
                  <span className="italic font-serif text-blue-500">without the stress.</span>
                </h2>

                <p className="text-gray-400 text-lg lg:text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
                  Aptro is the operating system for the modern entrepreneur.
                  Join 10k+ founders and <span className="text-white">reclaim 15+ hours</span> of your week.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link
                    href="/download"
                    className="w-full sm:w-auto px-12 py-5 bg-white text-black rounded-full font-black text-sm hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] active:scale-95 group/btn"
                  >
                    Launch Dashboard
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-black text-sm hover:bg-white/10 transition-all text-white flex items-center gap-2 group/demo"
                  >
                    Book a Demo
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                  </Link>
                </div>

                {/* 5. Refined Trust Indicators */}
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                  <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] hover:text-gray-300 transition-colors cursor-default">
                    <ShieldCheck size={14} className="text-emerald-500" /> SOC2 COMPLIANT
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-white/10 rounded-full" />
                  <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] hover:text-gray-300 transition-colors cursor-default">
                    <Zap size={14} className="text-blue-500" /> 99.99% UPTIME
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-white/10 rounded-full" />
                  <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] hover:text-gray-300 transition-colors cursor-default">
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-blue-600 border border-black" />
                      <div className="w-4 h-4 rounded-full bg-purple-600 border border-black" />
                    </div>
                    ISO 27001 SECURE
                  </div>
                </div>
              </div>

              {/* 6. Border Light Beam Effect (The "A-Tier" Finish) */}
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent group-hover:via-blue-400 transition-all duration-1000" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

// Reusable Metric Card Sub-component
function MetricCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all group">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}