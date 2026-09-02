"use client";

import Features from "./components/Features";
import Hero from "./components/Hero";
import { ArrowRight, ShieldCheck, Zap, Lock, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Easing, motion, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

const premiumEasing: Easing = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } },
};

const floatingAnimation: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
} as const;

export default function Home() {
  return (
    <main className={`relative min-h-screen bg-slate-50 text-zinc-950 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden ${jakarta.className}`}>
      
      {/* Background Ambient Layer */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_100%)]"></div>
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-blue-300/20 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-300/20 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-10 pt-20">
        <Hero />

        <div className="flex flex-col gap-y-24 pb-32">
          <Features />

          {/* --- PRODUCT SHOWCASE SECTION --- */}
          <section className="max-w-7xl mx-auto px-6 w-full py-12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEasing }}
              className="flex flex-col items-center text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-950">
                Everything you need, <span className="text-blue-600">in one view.</span>
              </h2>
              <p className="text-zinc-500 max-w-2xl text-lg font-medium">
                Stop jumping between tabs. Aptro consolidates your payroll, revenue metrics, and order fulfillment into a single, elegant interface.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: premiumEasing }}
                className="relative rounded-[2rem] overflow-hidden aspect-[4/3] flex items-center justify-center"
              >
                <Image 
                  src="/images/everything.png" 
                  alt="Aptro App Interface" 
                  fill 
                  className="object-cover duration-500" 
                />
              </motion.div>

              {/* Contextual Features */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                {[
                  { title: "Real-time Revenue", desc: "Track incoming payments and historical growth directly from your home screen." },
                  { title: "Automated Payroll", desc: "Review and approve team disbursements with a single tap, zero spreadsheet required." },
                  { title: "Order Orchestration", desc: "Monitor active deliveries, stock levels, and fulfillment timelines automatically." }
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                      <CheckCircle2 size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-zinc-950">{feature.title}</h3>
                      <p className="text-zinc-500 leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* --- UPGRADED EXECUTIVE CTA SECTION --- */}
          <section className="max-w-[85rem] mx-auto px-4 sm:px-6 w-full pt-12 pb-24">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: premiumEasing }}
              className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-visible group"
            >
              {/* Refined Deep Background with Mesh Glow - Updated to zinc-950 */}
              <div className="absolute inset-0 bg-zinc-950 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)] overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/30 via-indigo-600/10 to-transparent blur-[80px] pointer-events-none" />
                
                {/* Subtle Grid Overlay for Tech Vibe */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 mask-image-radial-gradient"></div>
              </div>

              {/* Floating Widget 1 - Left */}
              <motion.div 
                variants={floatingAnimation}
                animate="animate"
                className="hidden xl:flex absolute -left-10 top-20 z-20 items-center gap-4 p-4 pr-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-300 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                  <TrendingUp size={20} className="text-zinc-950" />
                </div>
                <div>
                  <p className="text-[11px] text-blue-200/70 font-semibold uppercase tracking-widest mb-0.5">Revenue Growth</p>
                  <p className="text-base font-bold text-white">+14.2% <span className="text-white/50 text-xs font-medium ml-1">this month</span></p>
                </div>
              </motion.div>

              {/* Floating Widget 2 - Right */}
              <motion.div 
                variants={floatingAnimation}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="hidden xl:flex absolute -right-8 bottom-32 z-20 items-center gap-4 p-4 pr-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-300 flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.3)]">
                  <Users size={20} className="text-zinc-950" />
                </div>
                <div>
                  <p className="text-[11px] text-blue-200/70 font-semibold uppercase tracking-widest mb-0.5">Team Payroll</p>
                  <p className="text-base font-bold text-white">Cleared <span className="text-emerald-400 text-xs font-medium ml-1">✓ Processed</span></p>
                </div>
              </motion.div>

              <motion.div 
                className="relative z-10 px-6 py-20 md:py-28 lg:px-24 text-center flex flex-col items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Elevated Status Badge */}
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest mb-10 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors cursor-default">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                    </span>
                    Now Available on iOS & Android
                  </div>
                </motion.div>

                {/* Typography Refinement for Max Readability */}
                <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.1] max-w-4xl">
                  Scale your business with <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200 italic font-medium pr-2">
                    absolute precision.
                  </span>
                </motion.h2>

                <motion.p variants={itemVariants} className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-medium">
                  Aptro is the operating system for the modern entrepreneur. 
                  Join the founders who are actively architecting their future.
                </motion.p>

                {/* UX Optimized Button Group */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto">
                  
                  {/* Primary CTA: High Contrast, clear action */}
                  <Link
                    href="/download"
                    className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-100 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2 group"
                  >
                    Download the App
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 text-blue-600" />
                  </Link>
                  
                  {/* Secondary CTA: Glassmorphic, less dominant but clickable */}
                  <Link
                    href="/demo"
                    className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[0.98] flex items-center justify-center gap-2 backdrop-blur-md"
                  >
                    Watch Overview
                  </Link>
                  
                </motion.div>

                {/* Cleaned Up Trust Indicators */}
                <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-12 w-full max-w-3xl">
                  <div className="flex items-center gap-2.5 text-sm text-white/50 font-medium tracking-wide">
                    <ShieldCheck size={18} className="text-white/80" /> SOC2 Compliant
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                  <div className="flex items-center gap-2.5 text-sm text-white/50 font-medium tracking-wide">
                    <Zap size={18} className="text-white/80" /> 99.99% Uptime
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                  <div className="flex items-center gap-2.5 text-sm text-white/50 font-medium tracking-wide">
                    <Lock size={18} className="text-white/80" /> E2E Encryption
                  </div>
                </motion.div>
                
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  );
}