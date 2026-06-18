"use client";

import React from "react";
import { Play, ShieldCheck, Zap, Activity } from "lucide-react";
import Link from "next/link";
import { Easing, motion, Variants } from "framer-motion";

const premiumEasing: Easing = [0.22, 1, 0.36, 1];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Text & CTAs --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Subtle Version Tag */}
          <motion.div variants={fadeUpItem} className="mb-8">
            <span className="px-3 py-1.5 text-xs font-semibold bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200/60 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse" />
              Aptro v2.0 Live
            </span>
          </motion.div>

          {/* Pure Typography Hero */}
          <motion.h1 variants={fadeUpItem} className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tight mb-6 leading-[1.05] text-zinc-950">
            Design your <br />
            <span className="text-zinc-400 italic">financial flow.</span>
          </motion.h1>

          <motion.p variants={fadeUpItem} className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl mb-10 font-medium">
            A precise operating system for high-growth founders.
            From rapid invoicing to automated treasury, orchestrated in one secure place.
          </motion.p>

          {/* Elegant Action Cluster */}
          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16 z-20">
            <Link
              href="/download"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-950 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-zinc-950/20"
            >
              Initialize Platform
            </Link>

            <a
              href="https://youtu.be/RrvXUZAui9I"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200/80 rounded-full font-medium text-sm text-zinc-900 hover:bg-[#FAFAFA] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm"
            >
              <Play size={16} className="text-zinc-400" />
              Watch Architecture
            </a>
          </motion.div>

          {/* Social Proof / Trust Indicators */}
          <motion.div variants={fadeUpItem} className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-20">
            <span className="flex items-center gap-2"><ShieldCheck size={16} /> SOC2 Compliant</span>
            <span className="flex items-center gap-2"><Zap size={16} /> 99.9% Uptime</span>
            <span className="flex items-center gap-2"><Activity size={16} /> End-to-End Encrypted</span>
          </motion.div>
        </motion.div>

        {/* --- Abstract System Interface Mockup --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEasing }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Decorative Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-200/50 blur-[100px] rounded-full pointer-events-none -z-10" />

          {/* Main Dashboard Container */}
          <div className="relative aspect-auto md:aspect-[16/10] rounded-[2rem] border border-zinc-200/60 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
            
            {/* Header Bar */}
            <div className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 bg-[#FAFAFA]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-200" />
                <div className="w-3 h-3 rounded-full bg-zinc-200" />
                <div className="w-3 h-3 rounded-full bg-zinc-200" />
              </div>
              <div className="w-32 h-2 rounded-full bg-zinc-200" />
            </div>

            {/* Dashboard Body */}
            <div className="flex flex-1 p-6 gap-6 bg-zinc-50/30">
              
              {/* Sidebar (Hidden on mobile) */}
              <div className="w-1/4 hidden md:flex flex-col gap-4">
                <div className="w-full h-10 rounded-xl bg-zinc-100/80 mb-4" />
                <div className="w-3/4 h-3 rounded-full bg-zinc-200" />
                <div className="w-full h-3 rounded-full bg-zinc-200" />
                <div className="w-5/6 h-3 rounded-full bg-zinc-200" />
                <div className="w-2/3 h-3 rounded-full bg-zinc-200" />
                
                <div className="mt-auto p-4 rounded-xl border border-zinc-200/60 bg-white">
                  <div className="w-1/2 h-2 rounded-full bg-zinc-200 mb-3" />
                  <div className="w-full h-8 rounded-lg bg-zinc-950" />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-6">
                
                {/* Top Metrics Row */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 h-32">
                  <div className="rounded-2xl bg-white border border-zinc-200/60 shadow-sm p-5 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100" />
                    <div>
                      <div className="w-1/2 h-2 rounded-full bg-zinc-200 mb-2" />
                      <div className="w-3/4 h-5 rounded-full bg-zinc-950" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white border border-zinc-200/60 shadow-sm p-5 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100" />
                    <div>
                      <div className="w-1/2 h-2 rounded-full bg-zinc-200 mb-2" />
                      <div className="w-3/4 h-5 rounded-full bg-zinc-950" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white border border-zinc-200/60 shadow-sm p-5 hidden lg:flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100" />
                    <div>
                      <div className="w-1/2 h-2 rounded-full bg-zinc-200 mb-2" />
                      <div className="w-3/4 h-5 rounded-full bg-zinc-950" />
                    </div>
                  </div>
                </div>

                {/* Main Graph/List Area */}
                <div className="flex-1 rounded-2xl bg-white border border-zinc-200/60 shadow-sm p-6 flex flex-col">
                  <div className="w-1/4 h-4 rounded-full bg-zinc-200 mb-8" />
                  
                  {/* Abstract Line Chart */}
                  <div className="flex-1 flex items-end gap-2">
                    {[40, 70, 45, 90, 65, 85, 100, 60, 75, 50, 80].map((height, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05, ease: premiumEasing }}
                        className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-zinc-950' : 'bg-zinc-100'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notification Element */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: premiumEasing }}
              className="absolute bottom-10 right-10 p-4 rounded-2xl bg-zinc-950 text-white shadow-xl flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                <ShieldCheck size={14} />
              </div>
              <div>
                <p className="text-xs font-semibold mb-0.5">Ledger Synchronized</p>
                <p className="text-[10px] text-zinc-400 font-medium">Just now • Secure Network</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}