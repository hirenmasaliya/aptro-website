"use client";

import Features from "./components/Features";
import Hero from "./components/Hero";
import { ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react";
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } },
};

export default function Home() {
  return (
    <main className={`relative min-h-screen bg-[#FAFAFA] text-zinc-950 selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden ${jakarta.className}`}>
      
      {/* --- Premium Minimal Background --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 flex justify-center">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `radial-gradient(circle at center, #18181b 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="relative z-10 pt-20">
        <Hero />

        <div className="flex flex-col gap-y-32 pb-32">
          <Features />

          {/* --- THE EXECUTIVE CTA SECTION (Dark Mode Anchor) --- */}
          <section className="max-w-6xl mx-auto px-6 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: premiumEasing }}
              className="relative px-8 py-20 lg:p-24 rounded-[3rem] overflow-hidden bg-zinc-950 text-center shadow-2xl"
            >
              {/* Subtle Dark Glow Layer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent blur-[80px] pointer-events-none" />

              <motion.div 
                className="relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Status Badge */}
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-semibold uppercase tracking-widest mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Priority Onboarding Active
                  </div>
                </motion.div>

                {/* Hero Title */}
                <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-white leading-tight">
                  Scale with absolute <br />
                  <span className="text-zinc-400 italic font-medium">precision.</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p variants={itemVariants} className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                  Aptro is the operating system for the modern entrepreneur. 
                  Join the founders architecting their future.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/download"
                    className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[0.98] flex items-center justify-center gap-2 group"
                  >
                    Launch Dashboard
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-zinc-900 hover:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Book a Demo
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-zinc-800/50 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium tracking-wide">
                    <ShieldCheck size={16} /> SOC2 Compliant
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium tracking-wide">
                    <Zap size={16} /> 99.99% Uptime
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium tracking-wide">
                    <Lock size={16} /> End-to-End Encryption
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