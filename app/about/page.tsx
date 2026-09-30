"use client";

import { 
  Heart, 
  Target, 
  ShieldCheck, 
  Compass, 
  Eye, 
  Trophy,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Smartphone,
  Rocket,
  ArrowRight,
  Globe,
  Database,
  RefreshCw,
  Clock,
  Layers
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

const premiumEasing = [0.22, 1, 0.36, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const problems = [
  {
    title: "Data Fragmentation",
    desc: "Using one app for invoicing, a physical notebook for inventory, and WhatsApp for clients.",
    icon: <Layers size={20} />
  },
  {
    title: "Double Data Entry",
    desc: "Typing the same client info multiple times across platforms, leading to costly human errors.",
    icon: <RefreshCw size={20} />
  },
  {
    title: "Blind Spots",
    desc: "Lacking a single dashboard to show actual profitability, real-time stock, or pending payments.",
    icon: <Eye size={20} />
  },
  {
    title: "Time Drain",
    desc: "Spending 10-15 hours a week simply managing software and paperwork instead of growing.",
    icon: <Clock size={20} />
  }
];

const principles = [
  {
    title: "Keep it Simple",
    desc: "If a feature requires a user manual, it needs to be redesigned. Software should be intuitive from day one.",
    icon: <Heart size={20} />
  },
  {
    title: "Focus on Growth",
    desc: "Every tool we add must directly save our users time or help them generate more revenue.",
    icon: <Target size={20} />
  },
  {
    title: "Absolute Security",
    desc: "A business's data is its most valuable asset, and we protect it with uncompromising privacy standards.",
    icon: <ShieldCheck size={20} />
  }
];

const journeySteps = [
  {
    year: "2024",
    title: "Identifying the Bottleneck",
    desc: "Operating in the vibrant commercial hub of Jetpur, Gujarat, we noticed owners were bogged down by manual administrative work, piecing together 5 to 10 generic apps daily.",
    icon: <MapPin size={24} />
  },
  {
    year: "2025",
    title: "Building the Blueprint",
    desc: "Unable to find a reasonably priced all-in-one solution, we built our own internal tool. Operational errors dropped to zero, and we reclaimed hours of our time each week.",
    icon: <Smartphone size={24} />
  },
  {
    year: "2026",
    title: "Scaling the Solution",
    desc: "Realizing this problem extended globally, we rebuilt the tool from the ground up for public use. Aptro was launched with bank-level security and an intuitive interface.",
    icon: <Rocket size={24} />
  }
];

export default function AboutPage() {
  return (
    <main className={`min-h-screen pt-36 pb-32 text-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative tracking-tight ${jakarta.className}`}>
      
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-slate-50/90 to-slate-50" />
        <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mb-32"
        >
          <motion.div 
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100 mb-8 shadow-sm"
          >
            <Sparkles size={14} className="text-blue-500" /> Our Story
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05] text-zinc-950"
          >
            Running a business is hard enough without <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent italic pr-2 pb-2">
              fighting your software.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl font-medium"
          >
            We are a team of former shop owners, freelancers, and operators based in Jetpur, Gujarat. We grew tired of the administrative chaos that comes with scaling a company, so we built Aptro to be the single, unified operating system for your business.
          </motion.p>
        </motion.div>

        {/* --- The Problem Section --- */}
        <section className="mb-40">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-950">The chaos we experienced first-hand.</h2>
            <p className="text-lg text-zinc-500 font-medium leading-relaxed">
              Before Aptro, business owners were forced to act as human bridges between disconnected apps. This software fragmentation created critical bottlenecks that stifled growth.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {problems.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpItem}
                className="p-8 rounded-[2rem] bg-white border border-rose-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-rose-50 text-rose-600 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-zinc-950">{item.title}</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- The Journey Section --- */}
        <section className="mb-40">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEasing }}
              className="lg:w-1/3 lg:sticky lg:top-40"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-6 leading-tight">
                From local frustration to <br /><span className="text-blue-600 italic">global solution.</span>
              </h2>
              <p className="text-zinc-500 font-medium leading-relaxed text-lg mb-10">
                We couldn't find a reasonably priced, all-in-one solution that didn't require a steep learning curve. So we decided to build it ourselves.
              </p>
            </motion.div>

            <div className="lg:w-2/3 relative">
              <div className="absolute top-0 bottom-0 left-[23px] w-[2px] bg-blue-100 hidden md:block" />
              
              <div className="space-y-12">
                {journeySteps.map((step, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ duration: 0.8, delay: i * 0.1, ease: premiumEasing }}
                    key={i} 
                    className="relative pl-0 md:pl-20"
                  >
                    <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 bg-blue-50 rounded-2xl border border-blue-200 shadow-sm items-center justify-center z-10 text-blue-600 transition-transform duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>
                    
                    <div className="p-8 md:p-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.04)] hover:bg-white hover:border-blue-200 transition-all duration-500 group">
                      <span className="inline-block px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 shadow-sm text-[10px] font-bold uppercase tracking-widest mb-6">
                        {step.year}
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-950 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{step.title}</h3>
                      <p className="text-zinc-500 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Philosophy & Vision Section --- */}
        <section className="py-24 border-t border-zinc-200/80 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-950">Our Guiding Principles</h2>
              <p className="text-zinc-500 font-medium leading-relaxed text-lg">
                We believe software should work for you, not the other way around. By 2028, our goal is to empower one million business owners to transition from managing administrative chaos to actively growing their enterprises.
              </p>
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {principles.map((v, i) => (
              <motion.div 
                key={i}
                variants={fadeUpItem}
                className="group p-8 lg:p-10 rounded-[2rem] bg-white/70 backdrop-blur-md border border-zinc-200/60 shadow-sm hover:bg-white hover:shadow-[0_8px_30px_rgba(37,99,235,0.04)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="mb-6 w-14 h-14 bg-blue-50 rounded-2xl shadow-sm border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEasing }}
            className="relative px-8 py-20 lg:p-24 rounded-[3rem] overflow-hidden bg-zinc-950 text-center shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)] ring-1 ring-white/10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/30 via-indigo-600/10 to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-8 text-white shadow-inner backdrop-blur-md">
                <Globe size={28} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
                Ready to reclaim <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200 italic font-medium pr-2">your time?</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 leading-relaxed font-medium max-w-lg">
                Stop acting as a human bridge between your apps. Join the network of business owners scaling with Aptro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-100 flex items-center justify-center gap-2 group shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
                >
                  Start For Free
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 text-blue-600" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[0.98] flex items-center justify-center backdrop-blur-md"
                >
                  Talk to Founders
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        
      </div>
    </main>
  );
}