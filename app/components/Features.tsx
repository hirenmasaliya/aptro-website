"use client";

import { 
  ShoppingCart, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ArrowUpRight 
} from "lucide-react";
import { motion, Variants, Transition } from "framer-motion";

// Premium Spring Animation Configs
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

export default function Features() {
  const features = [
    {
      title: "Order Management",
      desc: "Real-time visibility into your entire sales pipeline. From 'Pending' to 'Delivered', never lose track of a client.",
      icon: <ShoppingCart size={22} strokeWidth={2} />,
    },
    {
      title: "Invoice Generator",
      desc: "Generate professional, brand-aligned invoices in seconds. Fully compliant with global tax standards.",
      icon: <FileText size={22} strokeWidth={2} />,
    },
    {
      title: "Business Insights",
      desc: "Deep-dive into your sales data with automated charts and monthly projections sent directly to you.",
      icon: <BarChart3 size={22} strokeWidth={2} />,
    },
    {
      title: "Secure Data",
      desc: "Protected by AES-256 bank-grade encryption and daily redundant cloud backups for absolute peace of mind.",
      icon: <ShieldCheck size={22} strokeWidth={2} />,
    },
    {
      title: "Instant Sync",
      desc: "Manage your business across Mobile and Web with zero-latency cloud reconciliation and offline mode.",
      icon: <Zap size={22} strokeWidth={2} />,
    },
    {
      title: "Global Commerce",
      desc: "Support for 100+ currencies and localized tax zones to help you scale your brand to any corner of the globe.",
      icon: <Globe size={22} strokeWidth={2} />,
    },
  ];

  return (
    <section id="features" className="relative py-32 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-50 via-white to-transparent blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 text-left max-w-4xl"
        >
          {/* Frosted Status Badge */}
          <motion.div variants={fadeUpItem} className="inline-flex items-center gap-3 px-4 py-2 mb-10 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/80 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-zinc-500">
              Platform Capabilities
            </span>
          </motion.div>
          
          {/* Cinematic Typography */}
          <motion.h2 variants={fadeUpItem} className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter mb-8 leading-[0.88] text-zinc-950">
            Engineering <br />
            for <span className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 bg-clip-text text-transparent italic pr-4">Operations.</span>
          </motion.h2>
          
          <motion.p variants={fadeUpItem} className="text-lg md:text-xl lg:text-2xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
            Aptro provides a comprehensive infrastructure designed to eliminate administrative 
            overhead and focus purely on your <span className="text-zinc-900 font-bold">brand's growth.</span>
          </motion.p>
        </motion.div>

        {/* --- Feature Grid (Bento Box Layout) --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-zinc-100/80 border border-zinc-200/60 rounded-[3rem] overflow-hidden shadow-sm"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={fadeUpItem}
              className="group relative p-10 lg:p-14 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/20 transition-all duration-500 flex flex-col"
            >
              {/* Icon Container */}
              <div className="mb-10 inline-flex w-16 h-16 items-center justify-center rounded-[1.25rem] bg-zinc-50 border border-zinc-100/80 text-zinc-600 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)]">
                {f.icon}
              </div>
              
              {/* Title & Arrow */}
              <h3 className="text-2xl font-black mb-4 tracking-tight flex items-center justify-between group-hover:text-blue-900 transition-colors duration-300">
                {f.title}
                <ArrowUpRight size={20} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-blue-500" />
              </h3>
              
              {/* Description */}
              <p className="text-zinc-500 leading-relaxed text-sm font-medium flex-1">
                {f.desc}
              </p>
              
              {/* Corner Tag (Subtle Index) */}
              <div className="mt-12 text-[10px] font-extrabold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                <div className="w-4 h-px bg-zinc-200" />
                Mod—0{i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}