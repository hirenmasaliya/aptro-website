"use client";

import { 
  ShoppingCart, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Globe 
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

export default function Features() {
  const features = [
    {
      title: "Order Management",
      desc: "Real-time visibility into your entire sales pipeline. From 'Pending' to 'Delivered', never lose track of a client.",
      icon: <ShoppingCart size={20} />,
    },
    {
      title: "Invoice Generator",
      desc: "Generate professional, brand-aligned invoices in seconds. Fully compliant with global tax standards.",
      icon: <FileText size={20} />,
    },
    {
      title: "Business Insights",
      desc: "Deep-dive into your sales data with automated charts and monthly projections sent directly to you.",
      icon: <BarChart3 size={20} />,
    },
    {
      title: "Secure Data",
      desc: "Protected by AES-256 bank-grade encryption and daily redundant cloud backups for absolute peace of mind.",
      icon: <ShieldCheck size={20} />,
    },
    {
      title: "Instant Sync",
      desc: "Manage your business across Mobile and Web with zero-latency cloud reconciliation and offline mode.",
      icon: <Zap size={20} />,
    },
    {
      title: "Global Commerce",
      desc: "Support for 100+ currencies and localized tax zones to help you scale your brand to any corner of the globe.",
      icon: <Globe size={20} />,
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-left max-w-2xl"
        >
          <motion.h2 variants={fadeUpItem} className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-950">
            Engineering for <br/> 
            <span className="text-zinc-400">operations.</span>
          </motion.h2>
          
          <motion.p variants={fadeUpItem} className="text-lg text-zinc-500 leading-relaxed">
            Aptro provides a comprehensive infrastructure designed to eliminate administrative 
            overhead and focus purely on your brand's growth.
          </motion.p>
        </motion.div>

        {/* Clean Bento Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 rounded-[2rem] overflow-hidden"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={fadeUpItem}
              className="group relative p-10 bg-[#FAFAFA] hover:bg-white transition-colors duration-500 flex flex-col"
            >
              {/* Subtle Icon Container */}
              <div className="mb-8 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-white border border-zinc-100 text-zinc-600 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
                {f.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-3 tracking-tight text-zinc-950">
                {f.title}
              </h3>
              
              <p className="text-zinc-500 leading-relaxed text-sm flex-1">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}