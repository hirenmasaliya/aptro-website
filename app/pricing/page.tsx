"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  User,
  Building2,
  CheckCircle2,
  Globe2,
  MapPin,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Premium smooth easing
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

interface PriceDetails {
  monthly: number;
  yearly: number;
  textMonthly: string;
  textYearly: string;
}

interface Plan {
  id: string;
  name: string;
  type: "freelancers" | "business";
  isPopular: boolean;
  features: string[];
  prices: {
    IN: PriceDetails;
    US?: PriceDetails;
  };
  specialOffer?: string;
}

export default function PricingPage() {
  const [role, setRole] = useState<"freelancers" | "business">("freelancers");
  const [isYearly, setIsYearly] = useState(false);
  const [region, setRegion] = useState<"IN" | "US">("IN");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("/api/plans");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json();
        if (json.success) setPlans(json.data || []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const filteredPlans = plans.filter((plan) => plan.type === role);

  return (
    <main className={`min-h-screen pt-36 pb-32 text-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative tracking-tight ${jakarta.className}`}>
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-slate-50/90 to-slate-50" />
        <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest border border-blue-100 mb-8 shadow-sm"
          >
            <Sparkles size={12} className="text-blue-500" />
            Transparent Pricing
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter mb-6 leading-[1.05] text-zinc-950"
          >
            Invest in your <br />
            <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent italic pr-2 pb-2">
              workflow.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-lg md:text-xl text-zinc-500 font-medium max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Choose the perfect plan for your scale. Always simple, clear, and without hidden fees.
          </motion.p>

          {/* --- CONTROLS --- */}
          <motion.div 
            variants={fadeUpItem}
            className="flex flex-col items-center gap-8"
          >
            {/* Elegant Role Switcher */}
            <div className="inline-flex p-1.5 bg-zinc-200/50 backdrop-blur-xl rounded-full border border-zinc-200/40 shadow-inner">
              {(["freelancers", "business"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setRole(tab)}
                  className={`relative flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors z-10 ${
                    role === tab ? "text-blue-600" : "text-zinc-500 hover:text-zinc-950"
                  }`}
                >
                  {role === tab && (
                    <motion.div
                      layoutId="activeRoleTabPricing"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_3px_12px_rgba(0,0,0,0.06)] border border-zinc-200/50"
                      transition={{ duration: 0.5, ease: premiumEasing }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab === "freelancers" ? <User size={14} /> : <Building2 size={14} />}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </span>
                </button>
              ))}
            </div>

            {/* Region & Billing Controls */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 bg-white/70 backdrop-blur-xl px-6 py-3 rounded-full border border-zinc-200/60 shadow-sm">
              
              {/* Region Toggle */}
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span className={`flex items-center gap-1.5 transition-colors ${region === "IN" ? "text-zinc-950" : "text-zinc-400"}`}>
                  <MapPin size={16} /> India
                </span>
                <button
                  onClick={() => setRegion(region === "IN" ? "US" : "IN")}
                  className="relative w-12 h-6 bg-zinc-200 rounded-full p-1 transition-colors hover:bg-zinc-300 focus:outline-none"
                  aria-label="Toggle region"
                >
                  <div className={`absolute inset-0 rounded-full transition-colors duration-500 ${region === "US" ? "bg-blue-600" : "bg-blue-600"}`} />
                  <motion.div
                    animate={{ x: region === "US" ? 24 : 0 }}
                    transition={{ duration: 0.5, ease: premiumEasing }}
                    className="relative w-4 h-4 bg-white rounded-full shadow-md"
                  />
                </button>
                <span className={`flex items-center gap-1.5 transition-colors ${region === "US" ? "text-zinc-950" : "text-zinc-400"}`}>
                  <Globe2 size={16} /> Global
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-5 bg-zinc-200" />

              {/* Billing Toggle */}
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span className={`transition-colors ${!isYearly ? "text-zinc-950" : "text-zinc-400"}`}>Monthly</span>
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className="relative w-12 h-6 bg-zinc-200 rounded-full p-1 transition-colors hover:bg-zinc-300 focus:outline-none"
                  aria-label="Toggle yearly billing"
                >
                  <div className={`absolute inset-0 rounded-full transition-colors duration-500 ${isYearly ? "bg-zinc-950" : "bg-zinc-300"}`} />
                  <motion.div
                    animate={{ x: isYearly ? 24 : 0 }}
                    transition={{ duration: 0.5, ease: premiumEasing }}
                    className="relative w-4 h-4 bg-white rounded-full shadow-md"
                  />
                </button>
                <span className="flex items-center gap-2">
                  <span className={`transition-colors ${isYearly ? "text-zinc-950" : "text-zinc-400"}`}>Yearly</span>
                  <span className="bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm">
                    Save 20%
                  </span>
                </span>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* --- PRICING GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start justify-center min-h-[400px]">
          {isLoading ? (
            // ELEGANT SKELETON LOADERS
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm animate-pulse h-[520px] flex flex-col">
                  <div className="w-24 h-5 bg-zinc-200/50 rounded-full mb-8" />
                  <div className="w-40 h-10 bg-zinc-200/50 rounded-xl mb-4" />
                  <div className="w-full h-px bg-zinc-200/50 my-8" />
                  <div className="space-y-5 flex-1">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <div key={j} className="w-full h-3 bg-zinc-200/50 rounded-full" />
                    ))}
                  </div>
                  <div className="w-full h-12 bg-zinc-200/50 rounded-full mt-8" />
                </div>
              ))}
            </>
          ) : filteredPlans.length === 0 ? (
            // EMPTY STATE
            <div className="col-span-full py-24 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl border border-zinc-200/80 shadow-sm flex items-center justify-center text-zinc-400 mb-6">
                <Building2 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950 mb-2">No Plans Available</h3>
              <p className="text-zinc-500 font-medium">We couldn't find any pricing plans for this category at the moment.</p>
            </div>
          ) : (
            // PLAN CARDS
            <AnimatePresence mode="popLayout">
              {filteredPlans.map((tier, i) => {
                const isPopular = tier.isPopular;
                
                // --- Price Parsing Logic ---
                const activePriceData = tier.prices?.[region];
                let displayPrice = "N/A";
                let isFreePlan = false;
                
                if (activePriceData) {
                  if (activePriceData.monthly === 0 || activePriceData.textMonthly === "₹0" || activePriceData.textMonthly === "$0") {
                    isFreePlan = true;
                  }

                  if (isYearly) {
                    displayPrice = activePriceData.textYearly || (region === "IN" ? `₹${activePriceData.yearly}` : `$${activePriceData.yearly}`);
                  } else {
                    displayPrice = activePriceData.textMonthly || (region === "IN" ? `₹${activePriceData.monthly}` : `$${activePriceData.monthly}`);
                  }
                }

                return (
                  <motion.div
                    key={tier.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: premiumEasing }}
                    className={`relative p-8 lg:p-10 rounded-[2rem] flex flex-col h-full transition-all duration-500 group ${
                      isPopular
                        ? "bg-zinc-950 text-white shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)] border-[8px] border-zinc-950 hover:-translate-y-1"
                        : "bg-white/70 backdrop-blur-xl text-zinc-900 border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-zinc-300 hover:bg-white hover:-translate-y-1"
                    }`}
                  >
                    {/* Dark Mode Background Glow for Popular Plan */}
                    {isPopular && (
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent opacity-50 rounded-[1.5rem] pointer-events-none" />
                    )}

                    {/* POPULAR BADGE */}
                    {isPopular && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm border border-blue-500/20 backdrop-blur-md">
                        Most Popular
                      </div>
                    )}

                    {/* SPECIAL OFFER */}
                    {tier.specialOffer && (
                      <span className={`inline-flex w-fit text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-6 ${isPopular ? 'bg-zinc-800 text-zinc-300' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                        {tier.specialOffer}
                      </span>
                    )}

                    {/* TITLE */}
                    <h3 className={`text-xl font-bold mb-6 tracking-tight relative z-10 ${isPopular ? "text-white" : "text-zinc-950"}`}>
                      {tier.name}
                    </h3>

                    {/* PRICE */}
                    <div className="mb-6 flex items-baseline relative z-10">
                      {isFreePlan ? (
                        <>
                          <span className="text-4xl lg:text-5xl font-bold tracking-tighter">
                            15 Days
                          </span>
                          <span className={`text-sm font-semibold ml-2 uppercase tracking-wide ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>
                            Free Trial
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-4xl lg:text-5xl font-bold tracking-tighter">
                            {displayPrice}
                          </span>
                          <span className={`text-sm font-medium ml-2 ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>
                            {isYearly ? "/year" : "/month"}
                          </span>
                        </>
                      )}
                    </div>

                    {/* DIVIDER */}
                    <div className={`w-full h-px mb-8 relative z-10 ${isPopular ? "bg-white/10" : "bg-zinc-200/80"}`} />

                    {/* FEATURES */}
                    <div className="flex-1 space-y-4 mb-10 relative z-10">
                      {tier.features?.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${isPopular ? "text-blue-400" : "text-blue-500"}`} />
                          <span className={`text-sm font-medium leading-relaxed ${isPopular ? "text-zinc-300" : "text-zinc-600"}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA BUTTON */}
                    <button
                      className={`w-full py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] relative z-10 ${
                        isPopular
                          ? "bg-white text-zinc-950 hover:bg-zinc-100 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                          : "bg-transparent border border-zinc-200 text-zinc-950 hover:bg-zinc-100 hover:border-zinc-300"
                      }`}
                    >
                      Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>
      </div>
    </main>
  );
}