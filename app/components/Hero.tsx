"use client";

import React from "react";
import { Play, ShieldCheck, Zap, Activity, ArrowRight, TrendingUp } from "lucide-react";
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

const floatAnimation: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden text-zinc-950 flex flex-col items-center justify-center">
      {/* Ambient Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-indigo-50/50 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* --- Hero Text & CTAs --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center"
        >
          {/* Refined Status Badge */}
          <motion.div variants={fadeUpItem} className="mb-8 flex justify-center">
            <span className="px-3 py-1.5 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100 uppercase tracking-widest flex items-center gap-2 shadow-sm transition-colors hover:bg-indigo-100/80 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Aptro v2.0 Live
            </span>
          </motion.div>

          {/* Typography Enhancement with Gradient Emphasis */}
          <motion.h1 variants={fadeUpItem} className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter mb-6 leading-[1.05] text-zinc-950 text-center mx-auto">
            Streamline your <br />
            <span className="text-zinc-400 italic pr-2">
              operations.
            </span>
          </motion.h1>

          <motion.p variants={fadeUpItem} className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl mb-10 font-medium text-center mx-auto">
            A precise operating system for high-growth founders.
            From rapid invoicing to automated treasury, orchestrated in one secure place.
          </motion.p>

          {/* Upgraded Action Cluster (Tactile & Accessible) */}
          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16 z-20 mx-auto">
            <Link
              href="/download"
              className="group relative w-full sm:w-auto px-8 py-4 bg-zinc-950 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(79,70,229,0.3)] overflow-hidden"
              aria-label="Initialize Platform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Initialize Platform
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <a
              href="https://youtu.be/RrvXUZAui9I"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 rounded-full font-medium text-sm text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              aria-label="Watch Architecture Video"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-100 group-hover:bg-indigo-50 flex items-center justify-center transition-colors">
                <Play size={12} className="text-zinc-500 group-hover:text-indigo-600 transition-colors ml-0.5" />
              </div>
              Watch Architecture
            </a>
          </motion.div>

          {/* Social Proof / Trust Indicators */}
          <motion.div variants={fadeUpItem} className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-24 mx-auto">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-zinc-300" /> SOC2 Compliant</span>
            <span className="flex items-center gap-2"><Zap size={16} className="text-zinc-300" /> 99.9% Uptime</span>
            <span className="flex items-center gap-2"><Activity size={16} className="text-zinc-300" /> End-to-End Encrypted</span>
          </motion.div>
        </motion.div>

        {/* --- Abstract System Interface Mockup (Enhanced UI) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEasing }}
          className="relative max-w-5xl mx-auto perspective-1000"
        >
          {/* Decorative Glow Behind Mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

          {/* Main Dashboard Container */}
          <div className="relative aspect-auto md:aspect-[16/10] rounded-[2rem] border border-zinc-200/80 bg-white shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col ring-1 ring-black/5">

            {/* Header Bar */}
            <div className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 rounded-full bg-zinc-100" />
                <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-indigo-200" />
                </div>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="flex flex-1 p-6 gap-6 bg-zinc-50/50">

              {/* Sidebar (Abstracted for Data Management) */}
              <div className="w-1/4 hidden md:flex flex-col gap-6">
                <div className="w-full h-10 rounded-xl bg-white border border-zinc-100 shadow-sm mb-2" />

                <div className="flex flex-col gap-4 pl-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-indigo-100" />
                    <div className="w-3/4 h-2.5 rounded-full bg-zinc-200" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-zinc-200" />
                    <div className="w-1/2 h-2.5 rounded-full bg-zinc-200" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-zinc-200" />
                    <div className="w-2/3 h-2.5 rounded-full bg-zinc-200" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-zinc-200" />
                    <div className="w-5/6 h-2.5 rounded-full bg-zinc-200" />
                  </div>
                </div>

                {/* Abstract Payroll/Order Summary Card */}
                <div className="mt-auto p-5 rounded-2xl border border-indigo-100/50 bg-indigo-50/30">
                  <div className="w-1/2 h-2 rounded-full bg-indigo-200 mb-4" />
                  <div className="w-full h-10 rounded-lg bg-indigo-600 shadow-sm" />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-6">

                {/* Top Metrics Row */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 h-32">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className={`rounded-2xl bg-white border border-zinc-100 shadow-sm p-5 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300 ${item === 3 ? 'hidden lg:flex' : ''}`}>
                      <div className="flex justify-between items-start">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item === 1 ? 'bg-indigo-50' : 'bg-zinc-50'}`}>
                          <Activity size={18} className={item === 1 ? 'text-indigo-500' : 'text-zinc-400'} />
                        </div>
                        {item === 1 && <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md"><TrendingUp size={10} /> +14%</span>}
                      </div>
                      <div>
                        <div className="w-1/3 h-2 rounded-full bg-zinc-200 mb-2.5" />
                        <div className="w-3/4 h-6 rounded-full bg-zinc-900" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Graph/List Area */}
                <div className="flex-1 rounded-2xl bg-white border border-zinc-100 shadow-sm p-6 flex flex-col relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-1/4 h-4 rounded-full bg-zinc-200" />
                    <div className="w-1/6 h-6 rounded-full bg-zinc-100" />
                  </div>

                  {/* Abstract Line/Bar Chart with Focus State */}
                  <div className="flex-1 flex items-end gap-3 z-10">
                    {[30, 50, 40, 70, 55, 85, 100, 60, 75, 45, 80].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05, ease: premiumEasing }}
                        className={`flex-1 rounded-t-md relative group cursor-pointer ${i === 6 ? 'bg-indigo-500 shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)]' : 'bg-zinc-100 hover:bg-zinc-200'}`}
                      >
                        {/* Tooltip abstraction on hover/active */}
                        {i === 6 && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-6 bg-zinc-900 rounded-md flex items-center justify-center">
                            <div className="w-1/2 h-1 rounded-full bg-white/50" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Faint Grid Lines */}
                  <div className="absolute inset-x-6 inset-y-16 flex flex-col justify-between pointer-events-none opacity-20">
                    {[1, 2, 3, 4].map((line) => (
                      <div key={line} className="w-full h-[1px] bg-zinc-300" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notification Element (Animated) */}
            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="absolute bottom-8 right-8 z-20 hidden sm:block"
            >
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: premiumEasing }}
                className="p-4 rounded-2xl bg-zinc-950/95 backdrop-blur-md text-white shadow-2xl flex items-center gap-4 border border-zinc-800/50"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <ShieldCheck size={18} />
                </div>
                <div className="pr-2">
                  <p className="text-sm font-semibold mb-0.5">Ledger Synchronized</p>
                  <p className="text-[11px] text-zinc-400 font-medium">Just now • Secure Network</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}