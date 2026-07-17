"use client";

import Features from "./components/Features";
import Hero from "./components/Hero";
import { ArrowRight, ShieldCheck, Zap, Lock, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { Easing, motion, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Premium smooth easing
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

// Continuous floating animation for the widgets
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
      
      {/* --- Professional Clean Background Layer --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50">
        {/* Subtle architectural grid pattern for a premium tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Radial gradient overlay to soften the grid towards the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_100%)]"></div>
        
        {/* Subtle ambient gradient orbs in the background */}
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-blue-300/20 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-300/20 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-10 pt-20">
        <Hero />

        <div className="flex flex-col gap-y-32 pb-32">
          <Features />

          {/* --- THE EXECUTIVE CTA SECTION (Advanced Blue Gradient & Widgets) --- */}
          <section className="max-w-[85rem] mx-auto px-4 sm:px-6 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: premiumEasing }}
              className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-visible"
            >
              {/* Background container for the CTA */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-950 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)] overflow-hidden">
                 {/* Vibrant Inner Glow Layer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-300/40 via-blue-500/10 to-transparent blur-[80px] pointer-events-none" />
              </div>

              {/* --- FLOATING SMALL WIDGET 1 (Top Left) --- */}
              <motion.div 
                variants={floatingAnimation}
                animate="animate"
                className="hidden lg:flex absolute -left-8 top-16 z-20 items-center gap-3 p-3 pr-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-emerald-300 flex items-center justify-center shadow-inner">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-blue-100 font-medium uppercase tracking-wider">Performance</p>
                  <p className="text-sm font-bold text-white">+24.8% <span className="text-blue-200 text-xs font-normal">this week</span></p>
                </div>
              </motion.div>

              {/* --- FLOATING SMALL WIDGET 2 (Bottom Right) --- */}
              <motion.div 
                variants={floatingAnimation}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="hidden lg:flex absolute -right-6 bottom-32 z-20 items-center gap-3 p-3 pr-5 rounded-2xl bg-[#0B0A10]/40 backdrop-blur-xl border border-blue-400/20 shadow-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-300 flex items-center justify-center shadow-inner">
                  <Users size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-blue-200 font-medium uppercase tracking-wider">Active Orders</p>
                  <p className="text-sm font-bold text-white">2,845 <span className="text-blue-300 text-xs font-normal">managed</span></p>
                </div>
              </motion.div>

              <motion.div 
                className="relative z-10 px-8 py-20 lg:p-24 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Status Badge */}
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-100 text-[10px] font-semibold uppercase tracking-widest mb-10 backdrop-blur-md shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-200"></span>
                    </span>
                    Priority Onboarding Active
                  </div>
                </motion.div>

                {/* Hero Title with Gradient Text */}
                <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-white leading-tight">
                  Scale with absolute <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 italic font-medium pr-2">
                    precision.
                  </span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p variants={itemVariants} className="text-blue-100 text-lg mb-12 max-w-xl mx-auto leading-relaxed font-light">
                  Aptro is the operating system for the modern entrepreneur. 
                  Join the founders architecting their future.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/download"
                    className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group"
                  >
                    Launch Dashboard
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 text-blue-600" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-blue-900/30 border border-blue-400/20 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-blue-800/50 hover:border-blue-400/40 hover:scale-[0.98] flex items-center justify-center gap-2 backdrop-blur-md"
                  >
                    Book a Demo
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div variants={itemVariants} className="mt-24 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                  <div className="flex items-center gap-2 text-xs text-blue-200/80 font-medium tracking-wide">
                    <ShieldCheck size={16} className="text-blue-300" /> SOC2 Compliant
                  </div>
                  <div className="flex items-center gap-2 text-xs text-blue-200/80 font-medium tracking-wide">
                    <Zap size={16} className="text-blue-300" /> 99.99% Uptime
                  </div>
                  <div className="flex items-center gap-2 text-xs text-blue-200/80 font-medium tracking-wide">
                    <Lock size={16} className="text-blue-300" /> End-to-End Encryption
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