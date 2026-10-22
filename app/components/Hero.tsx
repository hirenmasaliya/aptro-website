"use client";

import React from "react";
import { Play, TrendingUp, Package, BarChart3, ArrowRight, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Easing, motion, Variants } from "framer-motion";

// Material Design standard easing (Standard Curve)
const materialEasing: Easing = [0.2, 0, 0, 1];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

const floatAnimation: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    // SEO Fix 1: Changed <section> to <header> for the main page introduction
    <header className="relative pt-8 pb-32 overflow-hidden bg-[#F8F9FA] flex flex-col items-center justify-center min-h-[90vh]">
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
        
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
              <span className="px-4 py-1.5 text-[13px] font-medium bg-[#E8F0FE] text-[#1967D2] rounded-full border border-[#D2E3FC] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1E8E3E]"></span>
                Aptro App Live for Indian SMEs
              </span>
            </motion.div>

            {/* SEO Fix 2: Optimized H1 with primary keywords */}
            <motion.h1 variants={fadeUpItem} className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-6 leading-[1.1] text-[#1F1F1F]">
              Manage your <br />
              <span className="text-[#1A73E8]">
                business & GST billing.
              </span>
            </motion.h1>

            {/* SEO Fix 3: Changed <p> to <h2> to act as a sub-heading for search engines, injecting secondary keywords */}
            <motion.h2 variants={fadeUpItem} className="text-[16px] md:text-[18px] text-[#444746] leading-relaxed max-w-lg mb-10 font-normal">
              Your unified mobile command center. Generate GST invoices, track inventory, oversee staff payroll, and monitor B2B orders—all from one intuitive app.
            </motion.h2>

            {/* Action Buttons */}
            <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14 z-20">
              <Link
                href="/download"
                // SEO Fix 4: Added aria-label for accessibility/SEO
                aria-label="Download the Aptro Business Management App"
                className="group w-full sm:w-auto px-6 py-3 bg-[#1A73E8] text-white rounded-full font-medium text-[15px] hover:bg-[#1557B0] hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                Get the App
                <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <a
                href="#demo"
                // SEO Fix 4: Added aria-label
                aria-label="Watch how Aptro simplifies GST billing and inventory"
                className="group w-full sm:w-auto px-6 py-3 bg-white border border-[#DADCE0] rounded-full font-medium text-[15px] text-[#1A73E8] hover:bg-[#F8F9FA] hover:border-[#1A73E8] transition-all flex items-center justify-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-[#E8F0FE] flex items-center justify-center" aria-hidden="true">
                  <Play size={12} className="text-[#1A73E8] ml-0.5" />
                </div>
                See How It Works
              </a>
            </motion.div>

            {/* Social Proof / App Features */}
            {/* SEO Fix 5: Wrapped feature list in a semantic <ul> list for rich snippets */}
            <motion.ul variants={fadeUpItem} className="flex flex-wrap items-center gap-6 text-[13px] font-medium text-[#5F6368] m-0 p-0 list-none">
              <li className="flex items-center gap-2"><TrendingUp size={18} className="text-[#1A73E8]" aria-hidden="true" /> GST Invoicing</li>
              <li className="flex items-center gap-2"><Package size={18} className="text-[#1A73E8]" aria-hidden="true" /> Stock Management</li>
              <li className="flex items-center gap-2"><BarChart3 size={18} className="text-[#1A73E8]" aria-hidden="true" /> Staff Payroll</li>
            </motion.ul>
          </motion.div>

          {/* --- Right Side: Phone Image Display --- */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: materialEasing, delay: 0.1 }}
            className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-4 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[280px] h-[400px] bg-[#E8F0FE] rounded-[40px] pointer-events-none -z-10" />

            <motion.div variants={floatAnimation} animate="animate" className="relative">
              
              <div className="relative w-[240px] sm:w-[300px] aspect-[9/19.5] rounded-[36px] border-[8px] border-[#202124] bg-[#202124] shadow-lg overflow-hidden">
                <Image
                  src="/images/dashboard.png"
                  alt="Aptro mobile app dashboard showing revenue tracking, inventory alerts, and quick GST invoice generation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Notification Element */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: materialEasing }}
                className="absolute -bottom-6 -left-6 sm:-left-12 z-20 p-4 rounded-[16px] bg-white text-[#202124] shadow-md border border-[#DADCE0] flex items-center gap-4 min-w-[220px]"
              >
                <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center" aria-hidden="true">
                  <Truck size={20} />
                </div>
                <div className="pr-2">
                  <p className="text-[14px] font-medium mb-0.5 text-[#1F1F1F]">B2B Order Shipped</p>
                  <p className="text-[12px] text-[#5F6368]">GST Invoice #18 Generated</p>
                </div>
              </motion.div>
              
            </motion.div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}