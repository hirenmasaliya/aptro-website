"use client";

import { useState } from "react";
import { 
  Check, 
  HelpCircle, 
  ArrowRight, 
  Zap, 
  User, 
  Building2, 
  ShieldCheck,
  Star,
  Plus
} from "lucide-react";

const pricingData = {
  freelancer: [
    {
      name: "Starter",
      price: { monthly: "$0", yearly: "$0" },
      description: "Essential tools for side-hustlers.",
      features: ["5 Invoices/mo", "Basic PDF Export", "1 User", "Standard Analytics", "Community Support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro Solo",
      price: { monthly: "$12", yearly: "$9" },
      description: "Advanced automation for solopreneurs.",
      features: ["Unlimited Invoices", "Custom Branding", "Expense Tracking", "Auto-Reminders", "Priority Email", "API Access (v1)"],
      cta: "Go Pro Solo",
      popular: true,
    }
  ],
  business: [
    {
      name: "Team",
      price: { monthly: "$49", yearly: "$39" },
      description: "Collaborative power for small agencies.",
      features: ["Everything in Pro Solo", "Up to 10 Users", "Inventory Sync", "Team Permissions", "Advanced Insights", "Audit Logs"],
      cta: "Start Team Trial",
      popular: false,
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "Full-scale controls for large operations.",
      features: ["Unlimited Users", "SSO & SAML", "Dedicated Manager", "Multi-Currency", "SLA Guarantee", "Custom Contracts"],
      cta: "Contact Sales",
      popular: true,
    }
  ]
};

export default function PricingPage() {
  const [role, setRole] = useState<"freelancer" | "business">("freelancer");
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="pt-32 pb-32 bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
            Flexible Licensing
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 italic">
            Pick your <span className="text-blue-500">speed.</span>
          </h1>
          
          {/* Enhanced Role Switcher */}
          <div className="relative inline-flex p-1.5 bg-[#0a0a0a] border border-white/10 rounded-4xl mb-12 shadow-2xl">
            <button 
              onClick={() => setRole("freelancer")}
              className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-3xl text-sm font-bold transition-all duration-500 ${role === "freelancer" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
            >
              <User size={16} /> Freelancer
              {role === "freelancer" && <div className="absolute inset-0 bg-blue-600 rounded-3xl -z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]" />}
            </button>
            <button 
              onClick={() => setRole("business")}
              className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-3xl text-sm font-bold transition-all duration-500 ${role === "business" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
            >
              <Building2 size={16} /> Business
              {role === "business" && <div className="absolute inset-0 bg-blue-600 rounded-3xl -z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]" />}
            </button>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest">
            <span className={!isYearly ? "text-white" : "text-gray-600"}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-white/5 border border-white/10 rounded-full relative p-1 transition-all hover:border-white/20"
            >
              <div className={`w-4 h-4 bg-blue-500 rounded-full transition-transform duration-500 ${isYearly ? "translate-x-7" : "translate-x-0"}`} />
            </button>
            <span className={isYearly ? "text-white" : "text-gray-600"}>
              Yearly <span className="text-emerald-500 ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        {/* --- Pricing Grid --- */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-40">
          {pricingData[role].map((tier) => (
            <div 
              key={tier.name}
              className={`group relative p-1 lg:p-1.5 rounded-[3.5rem] transition-all duration-500 ${
                tier.popular ? "bg-linear-to-b from-blue-500/40 to-transparent" : "bg-white/5"
              }`}
            >
              <div className="relative h-full bg-[#080808] rounded-[3.4rem] p-10 lg:p-12 overflow-hidden">
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute top-8 right-8 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                    <Star size={10} fill="currentColor" /> Best Value
                  </div>
                )}

                <div className="mb-12">
                  <h3 className="text-3xl font-bold mb-3 tracking-tight">{tier.name}</h3>
                  <p className="text-gray-500 text-sm">{tier.description}</p>
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline gap-1">
                    <span className="text-7xl font-black tracking-tighter">
                      {isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    {tier.price.monthly !== "Custom" && (
                      <span className="text-gray-600 font-bold text-xl">/mo</span>
                    )}
                  </div>
                </div>

                <button className={`w-full py-5 rounded-[1.8rem] font-bold transition-all mb-12 flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-95 ${
                  tier.popular 
                    ? "bg-white text-black hover:bg-blue-500 hover:text-white" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}>
                  {tier.cta}
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </button>

                <div className="space-y-5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-700">Capabilities</p>
                  <div className="grid grid-cols-1 gap-4">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-gray-400 group/item">
                        <Plus size={14} className="text-blue-500 group-hover/item:rotate-90 transition-transform" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* --- Social Proof / Trust --- */}
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-12">Powering global commerce</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-20 hover:opacity-50 transition-opacity duration-700">
            <span className="text-2xl font-black italic">TRUSTED</span>
            <span className="text-2xl font-black italic">SECURE</span>
            <span className="text-2xl font-black italic">VERIFIED</span>
            <span className="text-2xl font-black italic">FAST</span>
          </div>
        </div>

      </div>
    </main>
  );
}