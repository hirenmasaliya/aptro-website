"use client";

import React from "react";
import { Play, TrendingUp, Package, BarChart3, ArrowRight, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="relative pt-4 pb-32 overflow-hidden text-zinc-950 flex flex-col items-center justify-center min-h-[90vh]">
      {/* Ambient Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/80 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Grid Layout: Left (Text) & Right (Phone Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- Left Side: Hero Text & CTAs --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start text-left max-w-2xl pt-10 lg:pt-0"
          >
            {/* Status Badge */}
            <motion.div variants={fadeUpItem} className="mb-6 flex justify-start">
              <span className="px-3 py-1.5 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full border border-blue-100 uppercase tracking-widest flex items-center gap-2 shadow-sm transition-colors hover:bg-blue-100/80 cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Aptro App Live
              </span>
            </motion.div>

            {/* Typography */}
            <motion.h1 variants={fadeUpItem} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05] text-zinc-950">
              Manage your <br />
              <span className="text-zinc-400 italic pr-2">
                entire business.
              </span>
            </motion.h1>

            <motion.p variants={fadeUpItem} className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-lg mb-10 font-medium">
              Your unified mobile command center. Track yearly revenue, manage stock, oversee payroll, and monitor upcoming deliveries—all from one intuitive interface.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14 z-20">
              <Link
                href="/download"
                className="group relative w-full sm:w-auto px-8 py-4 bg-zinc-950 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get the App
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              <a
                href="#demo"
                className="group w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 rounded-full font-medium text-sm text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                  <Play size={12} className="text-zinc-500 group-hover:text-blue-600 transition-colors ml-0.5" />
                </div>
                See How It Works
              </a>
            </motion.div>

            {/* Social Proof / App Features */}
            <motion.div variants={fadeUpItem} className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              <span className="flex items-center gap-2"><TrendingUp size={16} className="text-zinc-300" /> Revenue Tracking</span>
              <span className="flex items-center gap-2"><Package size={16} className="text-zinc-300" /> Stock Management</span>
              <span className="flex items-center gap-2"><BarChart3 size={16} className="text-zinc-300" /> Live Reports</span>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Phone Image Display --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: premiumEasing, delay: 0.2 }}
            className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            {/* Background glow behind phone */}
            <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-10 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[200px] h-[300px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none -z-10" />

            <motion.div variants={floatAnimation} animate="animate" className="relative">
              
              {/* Phone Mockup Frame */}
              <div className="relative w-[240px] sm:w-[300px] aspect-[9/19.5] rounded-[2.5rem] border-[8px] border-zinc-900 bg-zinc-900 shadow-[0_20px_80px_-20px_rgba(37,99,235,0.4)] overflow-hidden">
                
                {/* --- IMAGE SOURCED DIRECTLY FROM PUBLIC FOLDER --- */}
                <Image
                  src="/images/dashboard.png"
                  alt="Aptro Dashboard Interface"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Notification Element overlapping the phone (Updated to match dashboard data) */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: premiumEasing }}
                className="absolute -bottom-6 -left-6 sm:-left-12 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-zinc-900 shadow-2xl flex items-center gap-4 border border-zinc-100"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center border border-blue-100">
                  <Truck size={18} />
                </div>
                <div className="pr-2">
                  <p className="text-sm font-bold mb-0.5 text-zinc-900">Order #18 Shipped</p>
                  <p className="text-[11px] text-zinc-500 font-medium">Dwarkesh Creation • ₹472.50</p>
                </div>
              </motion.div>
              
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}