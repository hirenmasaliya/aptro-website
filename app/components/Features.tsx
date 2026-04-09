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
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Order Management",
      desc: "Real-time visibility into your entire sales pipeline. From 'Pending' to 'Delivered', never lose track of a client.",
      icon: <ShoppingCart strokeWidth={1.5} />,
    },
    {
      title: "Invoice Generator",
      desc: "Generate professional, brand-aligned invoices in seconds. Fully compliant with global tax standards.",
      icon: <FileText strokeWidth={1.5} />,
    },
    {
      title: "Business Insights",
      desc: "Deep-dive into your sales data with automated charts and monthly projections sent directly to you.",
      icon: <BarChart3 strokeWidth={1.5} />,
    },
    {
      title: "Secure Data",
      desc: "Protected by AES-256 bank-grade encryption and daily redundant cloud backups for absolute peace of mind.",
      icon: <ShieldCheck strokeWidth={1.5} />,
    },
    {
      title: "Instant Sync",
      desc: "Manage your business across Mobile and Web with zero-latency cloud reconciliation and offline mode.",
      icon: <Zap strokeWidth={1.5} />,
    },
    {
      title: "Global Commerce",
      desc: "Support for 100+ currencies and localized tax zones to help you scale your brand to any corner of the globe.",
      icon: <Globe strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="features" className="py-32 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* --- Header Section --- */}
        <div className="mb-24 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            Capabilities
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-zinc-950"
          >
            Engineering <br />
            for <span className="text-blue-600 italic">Operations.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Aptro provides a comprehensive infrastructure designed to eliminate administrative 
            overhead and focus purely on your brand's growth.
          </motion.p>
        </div>

        {/* --- Feature Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100 rounded-[3rem] overflow-hidden">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-12 bg-white hover:bg-zinc-50 transition-colors duration-500 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-10 inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-950 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {f.icon}
              </div>
              
              {/* Title & Arrow */}
              <h3 className="text-2xl font-black mb-4 tracking-tighter flex items-center justify-between group-hover:text-blue-600 transition-colors">
                {f.title}
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-zinc-300" />
              </h3>
              
              {/* Description */}
              <p className="text-zinc-500 leading-relaxed text-sm font-medium flex-1">
                {f.desc}
              </p>
              
              {/* Corner Tag (Subtle Index) */}
              <div className="mt-8 text-[10px] font-bold text-zinc-200 uppercase tracking-widest">
                Mod—0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}