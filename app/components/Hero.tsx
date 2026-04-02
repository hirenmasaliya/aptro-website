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

export default function Hero() {
  const [appImages, setAppImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // These paths point to your 'public' folder
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

  // Scroll function for the arrows
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; // Card width + gap
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#050505] text-white selection:bg-blue-500/30">
      
      {/* 1. Background Dynamics (Fixed CSS Grid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-200 bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div 
          className="absolute inset-0 opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" 
          style={{ 
            backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* --- Animated Badge --- */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              V2.0 is Live: <span className="text-white">Smart Invoicing Engine</span>
            </span>
          </div>

          {/* --- Main Typography --- */}
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95] bg-clip-text text-transparent bg-linear-to-b from-white via-white to-white/40">
            Automate your <br />
            <span className="text-blue-500 italic">business flow.</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            The all-in-one operating system for freelancers and scaling businesses.
            From instant invoicing to global logistics—Aptro handles the rest.
          </p>

          {/* --- Action Cluster --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <Link
              href="/download"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group"
            >
              Get Started for Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md group">
              <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Play size={14} fill="currentColor" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* --- Trust Banner --- */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-10 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800" />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="currentColor" />)}
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">10k+ Happy Founders</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Zap size={16} className="text-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest">99.9% Uptime</span>
            </div>
          </div>
        </div>

        {/* --- Phone Showcase Row --- */}
        <div className="mt-24 relative group/container">
          
          {/* Scroll Navigation Arrows (Visible on Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between px-4 pointer-events-none">
            <button 
              onClick={() => scroll("left")}
              className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-white pointer-events-auto hover:bg-white/10 hover:border-blue-500/50 transition-all opacity-0 group-hover/container:opacity-100 hidden md:flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-white pointer-events-auto hover:bg-white/10 hover:border-blue-500/50 transition-all opacity-0 group-hover/container:opacity-100 hidden md:flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex flex-nowrap gap-6 overflow-x-auto pb-12 px-4 no-scrollbar snap-x snap-mandatory relative"
          >
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[280px] md:min-w-[320px] aspect-[9/19] rounded-[3rem] bg-white/5 animate-pulse border border-white/10"
                />
              ))
            ) : (
              appImages.map((src, index) => (
                <div
                  key={index}
                  className="min-w-[280px] md:min-w-[320px] snap-center group relative"
                >
                  {/* Phone UI Frame */}
                  <div className="relative aspect-[9/19] rounded-[3rem] overflow-hidden border-[6px] border-white/10 bg-[#080808] transition-all duration-500 group-hover:border-blue-500/50 shadow-2xl">
                    
                    {/* Simulated Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 border border-white/5" />

                    <img
                      src={src}
                      alt={`App Phone Screenshot ${index + 1}`}
                      className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x850/080808/white?text=Img+Not+Found";
                      }}
                    />

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-1">Module 0{index + 1}</p>
                        <p className="text-xs font-bold text-white uppercase tracking-tight">Interface View</p>
                      </div>
                    </div>
                  </div>

                  {/* Glass Reflection Effect */}
                  <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/5 to-transparent opacity-30 rounded-[3rem]" />
                </div>
              ))
            )}
          </div>

          {/* Hiding Scrollbar CSS */}
          <style jsx global>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
        </div>
      </div>
    </section>
  );
}