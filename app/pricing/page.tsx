"use client";

import { useState } from "react";
import { 
  Check, 
  ArrowRight, 
  User, 
  Building2, 
  Star, 
  Plus,
  ShieldCheck,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pricingData = {
  freelancer: [
    {
      name: "Starter",
      price: { monthly: "₹0", yearly: "₹0" },
      description: "Foundational tools for solo exploration.",
      features: ["5 Invoices/mo", "Standard PDF Engine", "1 User License", "Standard Analytics", "Community Access"],
      cta: "Initialize",
      popular: false,
    },
    {
      name: "Pro Solo",
      price: { monthly: "₹999", yearly: "₹799" },
      description: "High-performance automation for founders.",
      features: ["Unlimited Invoicing", "Custom Identity Kits", "Automated Ledgering", "Priority Channel", "API Infrastructure"],
      cta: "Go Pro Solo",
      popular: true,
    }
  ],
  business: [
    {
      name: "Team",
      price: { monthly: "₹3,999", yearly: "₹3,199" },
      description: "Collaborative power for growing agencies.",
      features: ["Everything in Pro Solo", "10 Team Licenses", "Inventory Sync", "Governance Logs", "Global Logistics"],
      cta: "Activate Team",
      popular: false,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "Full-scale sovereign controls.",
      features: ["Unlimited Capacity", "SSO & SAML 2.0", "Dedicated Architect", "Custom Tax Zones", "SLA Guarantee"],
      cta: "Inquire Sales",
      popular: true,
    }
  ]
};

export default function PricingPage() {
  const [role, setRole] = useState<"freelancer" | "business">("freelancer");
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="pt-40 pb-32 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Background Soft Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-50/50 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-left md:text-center max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            Licensing Ecosystem
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.85] text-zinc-950"
          >
            Pick your <br /><span className="text-blue-600 italic">velocity.</span>
          </motion.h1>
          
          {/* Executive Switcher */}
          <div className="flex flex-col items-center gap-10">
            <div className="inline-flex p-1.5 bg-zinc-100 border border-zinc-200 rounded-full shadow-inner">
              <button 
                onClick={() => setRole("freelancer")}
                className={`relative px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${role === "freelancer" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-zinc-600"}`}
              >
                <User size={14} className="inline mr-2" /> Freelancer
              </button>
              <button 
                onClick={() => setRole("business")}
                className={`relative px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${role === "business" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-zinc-600"}`}
              >
                <Building2 size={14} className="inline mr-2" /> Business
              </button>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center gap-5 text-[10px] font-black uppercase tracking-[0.2em]">
              <span className={!isYearly ? "text-zinc-950" : "text-zinc-300"}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-12 h-6 bg-zinc-100 border border-zinc-200 rounded-full relative p-1 transition-all"
              >
                <motion.div 
                  animate={{ x: isYearly ? 24 : 0 }}
                  className="w-4 h-4 bg-blue-600 rounded-full shadow-md shadow-blue-200" 
                />
              </button>
              <span className={isYearly ? "text-zinc-950" : "text-zinc-300"}>
                Yearly <span className="text-blue-600 ml-1">(-20%)</span>
              </span>
            </div>
          </div>
        </div>

        {/* --- Pricing Grid --- */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-48">
          <AnimatePresence mode="wait">
            {pricingData[role].map((tier, i) => (
              <motion.div 
                key={`${role}-${tier.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.1 }}
                className={`group relative p-10 lg:p-14 rounded-[3.5rem] transition-all duration-500 border ${
                  tier.popular ? "bg-blue-50/30 border-blue-100 shadow-2xl shadow-blue-50" : "bg-white border-zinc-100 shadow-sm hover:shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-10 right-10 flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950 text-[10px] font-black text-white uppercase tracking-widest">
                    <Star size={10} fill="currentColor" /> Recommended
                  </div>
                )}

                <div className="mb-12">
                  <h3 className="text-3xl font-black mb-3 tracking-tighter text-zinc-950">{tier.name}</h3>
                  <p className="text-zinc-500 text-sm font-medium">{tier.description}</p>
                </div>

                <div className="mb-14">
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl font-black tracking-tighter text-zinc-950">
                      {isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    {tier.price.monthly !== "Custom" && (
                      <span className="text-zinc-300 font-bold text-lg uppercase tracking-widest">/mo</span>
                    )}
                  </div>
                </div>

                <button className={`w-full py-6 rounded-full font-black text-[11px] uppercase tracking-[0.3em] transition-all mb-14 flex items-center justify-center gap-3 shadow-xl ${
                  tier.popular 
                    ? "bg-zinc-950 text-white hover:bg-blue-600 shadow-zinc-200" 
                    : "bg-white text-zinc-950 border border-zinc-200 hover:bg-zinc-50 shadow-zinc-100"
                }`}>
                  {tier.cta}
                  <ArrowRight size={16} />
                </button>

                <div className="space-y-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-6">Standard Capabilities</p>
                  <div className="grid grid-cols-1 gap-5">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-4 text-xs font-bold text-zinc-500 uppercase tracking-tight">
                        <Plus size={14} className="text-blue-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- Global Trust Footer --- */}
        <div className="text-center pb-20">
          <p className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.5em] mb-12">Universal Settlement Protocol</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale contrast-125">
             <div className="flex items-center gap-2 font-black text-xl italic tracking-widest text-zinc-950">SECURE</div>
             <div className="flex items-center gap-2 font-black text-xl italic tracking-widest text-zinc-950">SOVEREIGN</div>
             <div className="flex items-center gap-2 font-black text-xl italic tracking-widest text-zinc-950">SYNCED</div>
          </div>
        </div>

      </div>
    </main>
  );
}