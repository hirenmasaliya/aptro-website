"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Play,
  Star,
  ShieldCheck,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { motion, Variants, Transition } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

// Single Font Initialization
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

// Premium Spring Animation Configs - Strictly Typed
const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: springTransition }
};

export default function Hero() {
  const [appImages, setAppImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const localImages = [
      "/images/app1.png",
      "/images/app2.png",
      "/images/app3.png",
      "/images/app4.png",
      "/images/app5.png",
    ];
    setAppImages(localImages);
    setLoading(false);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className={`relative pt-32 pb-24 lg:pt-18 lg:pb-32 overflow-hidden bg-white text-zinc-900 selection:bg-blue-100 selection:text-blue-900 ${jakarta.className}`}>

      {/* --- Background Architecture --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
        {/* Breathing Atmospheric Glow */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/90 via-white/20 to-transparent blur-[120px]"
        />
        <div
          className="absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* --- Refined Status Badge --- */}
          <motion.div variants={fadeUpItem} className="inline-flex items-center gap-3 px-4 py-2 mb-10 rounded-full bg-zinc-50/80 backdrop-blur-xl border border-zinc-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.08)] transition-shadow duration-500 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-zinc-500">
              Aptro v2.0 <span className="text-zinc-300 mx-2">/</span> <span className="text-zinc-900">Intelligent Ledger</span>
            </span>
          </motion.div>

          {/* --- Cinematic Typography --- */}
          <motion.h1 variants={fadeUpItem} className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter mb-8 leading-[0.88] text-zinc-950 flex flex-col items-center">
            <span className="block overflow-hidden pb-2">
              <motion.span className="block" variants={fadeUpItem}>Design your</motion.span>
            </span>
            <span className="block overflow-hidden pb-4">
              <motion.span className="block bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 bg-clip-text text-transparent pr-4 italic" variants={fadeUpItem}>
                Financial Flow.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p variants={fadeUpItem} className="text-lg md:text-xl lg:text-2xl text-zinc-500 leading-relaxed font-medium max-w-2xl mb-12">
            A precise operating system for high-growth founders.
            From rapid invoicing to automated treasury— <span className="text-zinc-900 font-bold">orchestrated in one place.</span>
          </motion.p>

          {/* --- Action Cluster --- */}
          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-20 z-20 relative">
            <Link
              href="/download"
              className="w-full sm:w-auto px-10 py-5 bg-zinc-950 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-blue-600 active:scale-[0.98] transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 group border border-zinc-800 hover:border-blue-500"
            >
              Launch Platform
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </Link>

            <a
              href="https://youtu.be/RrvXUZAui9I?si=Wakogbx4HHUo1mnv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-white/50 backdrop-blur-md border border-zinc-200/80 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white hover:border-zinc-300 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group text-zinc-900 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Watch Demo
              <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <Play size={10} fill="currentColor" className="text-zinc-500 group-hover:text-blue-600" />
              </div>
            </a>
          </motion.div>

          {/* --- Unified Trust Command Bar --- */}
          <motion.div variants={fadeUpItem} className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-4 px-8 rounded-full bg-zinc-50/50 backdrop-blur-xl border border-zinc-100/80 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[8px] font-bold text-zinc-500 uppercase shadow-sm">
                    U{i}
                  </div>
                ))}
              </div>
              <div className="text-left hidden sm:block">
                <div className="flex items-center gap-0.5 text-amber-400 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="currentColor" />)}
                </div>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">10k+ Founders</p>
              </div>
            </div>
            <div className="w-px h-6 bg-zinc-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-zinc-500 group cursor-default">
              <ShieldCheck size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest">SOC2 Certified</span>
            </div>
            <div className="w-px h-6 bg-zinc-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-zinc-500 group cursor-default">
              <Zap size={16} className="text-zinc-900 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest">99.9% Uptime SLA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Product Showcase (Tactile Row) --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springTransition}
          className="mt-32 relative group/carousel max-w-[100vw] -mx-6 px-6 lg:mx-0 lg:px-0"
        >
          {/* Edge Fade Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none hidden md:block" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none hidden md:block" />

          {/* Elegant Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-8 right-8 z-30 flex justify-between pointer-events-none hidden md:flex">
            <button onClick={() => scroll("left")} className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl border border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-zinc-900 pointer-events-auto hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100 duration-500 flex items-center justify-center">
              <ChevronLeft size={24} className="pr-0.5" />
            </button>
            <button onClick={() => scroll("right")} className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl border border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-zinc-900 pointer-events-auto hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100 duration-500 flex items-center justify-center">
              <ChevronRight size={24} className="pl-0.5" />
            </button>
          </div>

          {/* Carousel Track */}
          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-8 overflow-x-auto pb-24 pt-12 px-4 md:px-[20vw] no-scrollbar snap-x snap-mandatory scroll-smooth peer-container"
          >
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[340px] aspect-[9/19.5] rounded-[3rem] bg-zinc-50 animate-pulse border border-zinc-100" />
              ))
            ) : (
              appImages.map((src, index) => (
                <div
                  key={index}
                  className="min-w-[280px] md:min-w-[340px] snap-center relative group/card [transition:all_0.5s_cubic-bezier(0.25,1,0.5,1)] hover:z-10"
                >
                  {/* Outer Device Bezel */}
                  <div className="relative aspect-[9/19.5] rounded-[3.5rem] overflow-hidden bg-zinc-950 p-[10px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(0,0,0,0.05)_inset] transition-all duration-700 group-hover/card:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.3),_0_0_0_1px_rgba(255,255,255,0.1)_inset] group-hover/card:-translate-y-4 border border-zinc-800">

                    {/* Inner Screen Area */}
                    <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden bg-zinc-50 flex items-center justify-center">

                      {/* Simulated iPhone Dynamic Island */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[32%] h-[28px] bg-zinc-950 rounded-full z-30 flex items-center justify-end px-3 shadow-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800/80 mr-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"></div>
                      </div>

                      {/* App Image */}
                      <img
                        src={src}
                        alt={`Aptro Interface ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/400x850/F4F4F5/18181B?text=App+View";
                        }}
                      />

                      {/* Glassmorphic Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 p-8 flex items-end z-20">
                        <div className="translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">Module 0{index + 1}</p>
                          <p className="text-lg font-bold text-white uppercase tracking-tight leading-none">System Interface</p>
                        </div>
                      </div>

                      {/* Dynamic Light Glare (The Apple Effect) */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover/card:opacity-20 group-hover/card:translate-x-full -translate-x-full transition-all duration-1000 ease-in-out z-10 w-[200%]" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <style jsx global>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            
            /* Focus effect: When the container is hovered, dim ALL cards, 
               but keep the explicitly hovered card fully visible */
            .peer-container:hover > div {
               opacity: 0.5;
               transform: scale(0.96);
            }
            .peer-container > div:hover {
               opacity: 1 !important;
               transform: scale(1) !important;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}