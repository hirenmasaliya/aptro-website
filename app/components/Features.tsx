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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

export default function Features() {
  const features = [
    {
      title: "Order Management",
      desc: "Real-time visibility into your entire sales pipeline. From 'Pending' to 'Delivered', never lose track of a client.",
      icon: <ShoppingCart size={20} />,
      className: "md:col-span-2 lg:col-span-2",
      visual: (
        <div className="absolute right-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 hidden sm:block">
          <div className="flex gap-2 bg-white p-3 rounded-xl shadow-lg border border-zinc-100">
            <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-400 animate-pulse" />
            <div>
              <div className="w-20 h-2 bg-zinc-200 rounded-full mb-2" />
              <div className="w-12 h-2 bg-zinc-100 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Invoice Generator",
      desc: "Generate professional, brand-aligned invoices in seconds. Fully compliant with global tax standards.",
      icon: <FileText size={20} />,
      className: "md:col-span-1 lg:col-span-1",
      visual: null
    },
    {
      title: "Business Insights",
      desc: "Deep-dive into your sales data with automated charts and monthly projections sent directly to you.",
      icon: <BarChart3 size={20} />,
      className: "md:col-span-1 lg:col-span-1",
      visual: null
    },
    {
      title: "Secure Data",
      desc: "Protected by AES-256 bank-grade encryption and daily redundant cloud backups for absolute peace of mind.",
      icon: <ShieldCheck size={20} />,
      className: "md:col-span-2 lg:col-span-2",
      visual: (
        <div className="absolute right-8 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 hidden sm:block">
          <div className="w-32 h-24 bg-gradient-to-t from-indigo-50 to-white rounded-t-2xl border border-b-0 border-indigo-100 shadow-sm flex flex-col justify-end p-4">
             <div className="w-full h-8 bg-indigo-100/50 rounded-lg flex items-center justify-center">
                <ShieldCheck size={14} className="text-indigo-500" />
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Instant Sync",
      desc: "Manage your business across Mobile and Web with zero-latency cloud reconciliation and offline mode.",
      icon: <Zap size={20} />,
      className: "md:col-span-2 lg:col-span-2",
      visual: (
        <div className="absolute right-8 top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0 hidden sm:block">
          <div className="flex items-center gap-3 bg-zinc-950 text-white py-2 px-4 rounded-full shadow-xl">
             <Zap size={14} className="text-amber-400" />
             <span className="text-[10px] font-medium tracking-wide">Syncing...</span>
          </div>
        </div>
      )
    },
    {
      title: "Global Commerce",
      desc: "Support for 100+ currencies and localized tax zones to help you scale your brand to any corner of the globe.",
      icon: <Globe size={20} />,
      className: "md:col-span-1 lg:col-span-1",
      visual: null
    },
  ];

  return (
    <section id="features" className="relative py-32 bg-[#FAFAFA] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-indigo-50 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-left max-w-2xl"
        >
          <motion.h2 variants={fadeUpItem} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-zinc-950">
            Engineering for <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 italic pr-2">
              operations.
            </span>
          </motion.h2>
          
          <motion.p variants={fadeUpItem} className="text-lg text-zinc-500 leading-relaxed font-medium">
            Aptro provides a comprehensive infrastructure designed to eliminate administrative 
            overhead and focus purely on your brand's growth.
          </motion.p>
        </motion.div>

        {/* Premium Bento Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={fadeUpItem}
              className={`group relative p-8 md:p-10 bg-white border border-zinc-200/80 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_-4px_rgba(79,70,229,0.08)] hover:border-indigo-200 flex flex-col ${f.className}`}
            >
              {/* Subtle Gradient Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-blue-50/0 group-hover:from-indigo-50/50 group-hover:to-blue-50/50 transition-colors duration-500 -z-10" />
              
              {/* Icon Container */}
              <div className="mb-8 inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-600 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-indigo-500/25 group-hover:border-indigo-500 relative z-10">
                {f.icon}
              </div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold mb-3 tracking-tight text-zinc-950 flex items-center justify-between">
                  {f.title}
                  <ArrowUpRight size={18} className="text-zinc-300 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-indigo-500" />
                </h3>
                
                <p className="text-zinc-500 leading-relaxed text-sm max-w-sm">
                  {f.desc}
                </p>
              </div>

              {/* Abstract Visual Injections */}
              {f.visual}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}