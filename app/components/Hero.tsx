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
import { motion } from "framer-motion";

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
      "/images/app6.png",
      "/images/app7.png",
    ];
    
    setAppImages(localImages);
    setLoading(false);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; 
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-white text-zinc-900 selection:bg-blue-100 selection:text-blue-700">
      
      {/* 1. Background Dynamics (Clean Slate) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-50/50 blur-[140px] rounded-full" />
        {/* Professional Light Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" 
          style={{ 
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
            backgroundSize: '60px 60px' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center md:text-left max-w-6xl mx-auto">

          {/* --- Refined Status Badge --- */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full bg-zinc-50 border border-zinc-100 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              Aptro v2.0 <span className="text-zinc-300 mx-2">|</span> <span className="text-zinc-950">Intelligent Ledger Engine</span>
            </span>
          </motion.div>

          {/* --- Editorial Typography --- */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-zinc-950"
          >
            Design your <br />
            <span className="text-blue-600 italic">Financial Flow.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-end mb-20"
          >
            <p className="text-xl lg:text-2xl text-zinc-500 leading-relaxed font-medium">
              A precise operating system for high-growth founders. 
              From rapid invoicing to automated treasury— <span className="text-zinc-950">orchestrated in one place.</span>
            </p>

            {/* --- Action Cluster --- */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/download"
                className="w-full sm:w-auto px-12 py-5 bg-zinc-950 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-600 active:scale-95 transition-all shadow-xl shadow-zinc-200 flex items-center justify-center gap-3 group"
              >
                Launch Platform
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="w-full sm:w-auto px-12 py-5 bg-white border border-zinc-200 rounded-full font-black text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all flex items-center justify-center gap-3 group">
                Watch Demo
                <Play size={12} fill="currentColor" className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>
          </motion.div>

          {/* --- Trust & Authority --- */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-12 border-t border-zinc-100">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-zinc-100 flex items-center justify-center text-[8px] font-bold text-zinc-400 uppercase">
                    U{i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-blue-600">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="currentColor" />)}
                </div>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1">10k+ Active Licenses</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <ShieldCheck size={18} className="text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest">Enterprise Encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Zap size={18} className="text-zinc-950" />
              <span className="text-[10px] font-black uppercase tracking-widest">99.9% Latency SLA</span>
            </div>
          </div>
        </div>

        {/* --- Product Showcase (Phone Row) --- */}
        <div className="mt-32 relative group/container">
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between px-4 pointer-events-none">
            <button 
              onClick={() => scroll("left")}
              className="p-5 rounded-full bg-white border border-zinc-100 shadow-xl text-zinc-950 pointer-events-auto hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover/container:opacity-100 hidden md:flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-5 rounded-full bg-white border border-zinc-100 shadow-xl text-zinc-950 pointer-events-auto hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover/container:opacity-100 hidden md:flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex flex-nowrap gap-10 overflow-x-auto pb-20 px-4 no-scrollbar snap-x snap-mandatory"
          >
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[300px] md:min-w-[340px] aspect-[9/19] rounded-[3.5rem] bg-zinc-50 animate-pulse border border-zinc-100"
                />
              ))
            ) : (
              appImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-[300px] md:min-w-[340px] snap-center group relative"
                >
                  <div className="relative aspect-[9/19] rounded-[3.5rem] overflow-hidden border-[8px] border-zinc-950 bg-white transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                    
                    {/* Simulated Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-zinc-950 rounded-full z-20" />

                    <img
                      src={src}
                      alt={`Aptro Interface ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x850/F4F4F5/18181B?text=App+View";
                      }}
                    />

                    {/* Minimal Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">Module 0{index + 1}</p>
                        <p className="text-sm font-bold text-zinc-950 uppercase tracking-tighter">System Interface</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          <style jsx global>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
        </div>
      </div>
    </section>
  );
}