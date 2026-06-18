"use client";

import Features from "./components/Features";
import Hero from "./components/Hero";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion, Variants, Transition } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

// 1. Initialize Single Premium Font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Premium Spring Animation Configs
const springTransition: Transition = { 
  type: "spring", 
  stiffness: 100, 
  damping: 20, 
  mass: 1 
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

export default function Home() {
  return (
    // 2. Apply Font Globally to Main
    <main className={`relative min-h-screen bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden ${jakarta.className}`}>
      
      {/* --- Background Texture --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-50/60 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-100/80 blur-[100px] rounded-full mix-blend-multiply" />
        
        <div 
          className="absolute inset-0 z-0 opacity-70" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)'
          }}
        />
      </div>

      <div className="relative z-10 pt-20">
        <Hero />

        <div className="flex flex-col gap-y-24 lg:gap-y-40 pb-40">
          <Features />

          {/* --- THE EXECUTIVE CTA SECTION --- */}
          <section className="max-w-7xl mx-auto px-6 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springTransition}
              className="group relative p-12 lg:p-28 rounded-[4rem] overflow-hidden bg-zinc-50/30 text-center transition-all duration-700 shadow-[0_0_0_1px_rgba(0,0,0,0.03)_inset,0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_0_1px_rgba(37,99,235,0.1)_inset,0_40px_80px_-20px_rgba(37,99,235,0.15)]"
            >
              {/* Glassmorphism Inner Layer */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl -z-10" />
              
              {/* Subtle Light Glare on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none" />

              <motion.div 
                className="relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Status Badge */}
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/80 text-zinc-600 text-[11px] font-extrabold uppercase tracking-[0.25em] mb-12 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] cursor-default">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    Q2 Priority: Free Onboarding
                  </div>
                </motion.div>

                {/* Hero Title - Removed Serif, Kept Italic Gradient */}
                <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[7rem] font-black mb-8 tracking-tighter leading-[0.88] text-zinc-950">
                  Scale with <br />
                  <span className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 bg-clip-text text-transparent italic pr-4">
                    Precision.
                  </span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p variants={itemVariants} className="text-zinc-500 text-lg md:text-xl lg:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
                  Aptro is the operating system for the modern entrepreneur. 
                  Join <span className="text-zinc-950 font-bold">10k+ founders</span> architecting their future.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <Link
                    href="/download"
                    className="w-full sm:w-auto px-12 py-5 bg-zinc-950 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 active:scale-[0.98] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-1 group/btn flex items-center justify-center gap-3 border border-zinc-800 hover:border-blue-500"
                  >
                    Launch Dashboard
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform duration-300 ease-out" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-12 py-5 bg-white/50 backdrop-blur-md border border-zinc-200/80 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white hover:border-zinc-300 transition-all duration-300 text-zinc-950 flex items-center justify-center gap-2 active:scale-[0.98] shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    Book a Demo
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div variants={itemVariants} className="mt-24 pt-12 border-t border-zinc-200/60 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest hover:text-zinc-600 transition-colors cursor-default">
                    <ShieldCheck size={16} className="text-blue-500" /> SOC2 Compliant
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest hover:text-zinc-600 transition-colors cursor-default">
                    <Zap size={16} className="text-amber-500" /> 99.99% Uptime
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest hover:text-zinc-600 transition-colors cursor-default">
                    <div className="flex -space-x-1.5 mr-1">
                      <div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-white" />
                      <div className="w-4 h-4 rounded-full bg-zinc-400 border-2 border-white" />
                    </div>
                    ISO 27001 Secure
                  </div>
                </motion.div>
              </motion.div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent transition-all duration-1000 group-hover:via-blue-400 opacity-50" />
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  );
}

// Reusable Metric Card (Upgraded with better visual hierarchy & hover effects)
export function MetricCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-white border border-zinc-100/80 hover:border-blue-200/60 transition-all duration-500 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.05)] group hover:bg-gradient-to-br hover:from-white hover:to-blue-50/10 cursor-default">
      <div className="w-16 h-16 bg-zinc-50 text-zinc-900 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] border border-zinc-100 group-hover:border-blue-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black tracking-tight text-zinc-950 mb-3 group-hover:text-blue-950 transition-colors">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}