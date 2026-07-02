"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  User,
  Building2,
  CheckCircle2,
  Globe2,
  MapPin
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
        console.log(json.data);
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
    <main className={`min-h-screen pt-36 pb-32 bg-[#FAFAFA] text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden relative ${jakarta.className}`}>
      
      {/* Premium Minimal Background */}
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

      <div className="max-w-8xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium border border-zinc-200/60 mb-8"
          >
            Transparent Pricing
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold tracking-tight mb-6 leading-[1.05] text-zinc-950"
          >
            Invest in your <br />
            <span className="text-zinc-400">workflow.</span>
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
            <div className="inline-flex p-1.5 bg-zinc-200/50 backdrop-blur-md rounded-full border border-zinc-200/80">
              {(["freelancers", "business"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setRole(tab)}
                  className={`relative flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-colors z-10 ${
                    role === tab ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {role === tab && (
                    <motion.div
                      layoutId="activeRoleTab"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-zinc-200/60"
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
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 bg-white px-6 py-3 rounded-full border border-zinc-200/80 shadow-sm">
              
              {/* Region Toggle */}
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className={`flex items-center gap-1 ${region === "IN" ? "text-zinc-950" : "text-zinc-400"}`}>
                  <MapPin size={14} /> India
                </span>
                <button
                  onClick={() => setRegion(region === "IN" ? "US" : "IN")}
                  className="relative w-11 h-6 bg-zinc-200 rounded-full p-1 transition-colors hover:bg-zinc-300 focus:outline-none"
                  aria-label="Toggle region"
                >
                  <div className={`absolute inset-0 rounded-full transition-colors duration-500 ${region === "US" ? "bg-zinc-950" : "bg-zinc-200"}`} />
                  <motion.div
                    animate={{ x: region === "US" ? 20 : 0 }}
                    transition={{ duration: 0.5, ease: premiumEasing }}
                    className="relative w-4 h-4 bg-white rounded-full shadow-sm"
                  />
                </button>
                <span className={`flex items-center gap-1 ${region === "US" ? "text-zinc-950" : "text-zinc-400"}`}>
                  <Globe2 size={14} /> Global
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-5 bg-zinc-200" />

              {/* Billing Toggle */}
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className={!isYearly ? "text-zinc-950" : "text-zinc-400"}>Monthly</span>
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className="relative w-11 h-6 bg-zinc-200 rounded-full p-1 transition-colors hover:bg-zinc-300 focus:outline-none"
                  aria-label="Toggle yearly billing"
                >
                  <div className={`absolute inset-0 rounded-full transition-colors duration-500 ${isYearly ? "bg-zinc-950" : "bg-zinc-200"}`} />
                  <motion.div
                    animate={{ x: isYearly ? 20 : 0 }}
                    transition={{ duration: 0.5, ease: premiumEasing }}
                    className="relative w-4 h-4 bg-white rounded-full shadow-sm"
                  />
                </button>
                <span className="flex items-center gap-2">
                  <span className={isYearly ? "text-zinc-950" : "text-zinc-400"}>Yearly</span>
                  <span className="bg-zinc-100 border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                </span>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* --- PRICING GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-start max-w-9xl mx-auto min-h-[400px]">
          {isLoading ? (
            // ELEGANT SKELETON LOADERS
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-10 rounded-[2rem] bg-white border border-zinc-200/60 shadow-sm animate-pulse h-[520px] flex flex-col">
                  <div className="w-24 h-5 bg-zinc-100 rounded-full mb-8" />
                  <div className="w-40 h-10 bg-zinc-100 rounded-xl mb-4" />
                  <div className="w-full h-px bg-zinc-100 my-8" />
                  <div className="space-y-5 flex-1">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <div key={j} className="w-full h-3 bg-zinc-100 rounded-full" />
                    ))}
                  </div>
                  <div className="w-full h-12 bg-zinc-100 rounded-full mt-8" />
                </div>
              ))}
            </>
          ) : filteredPlans.length === 0 ? (
            // EMPTY STATE
            <div className="col-span-full py-24 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-400 mb-6">
                <Building2 size={20} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-950 mb-2">No Plans Available</h3>
              <p className="text-zinc-500">We couldn't find any pricing plans for this category at the moment.</p>
            </div>
          ) : (
            // PLAN CARDS
            <AnimatePresence mode="popLayout">
              {filteredPlans.map((tier, i) => {
                const isPopular = tier.isPopular;
                
                // --- NEW LOGIC: Check for Free Trial ---
                const activePriceData = tier.prices?.[region];
                let displayPrice = "N/A";
                let isFreePlan = false;
                
                if (activePriceData) {
                  // Identify if this is a free plan based on the monthly price being 0
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: premiumEasing }}
                    className={`relative p-10 rounded-[2rem] flex flex-col h-full transition-all duration-500 group ${
                      isPopular
                        ? "bg-zinc-950 text-white shadow-2xl border border-zinc-900"
                        : "bg-white text-zinc-900 border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-zinc-300"
                    }`}
                  >
                    {/* POPULAR BADGE */}
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-zinc-950 text-[10px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm border border-zinc-100">
                        Most Popular
                      </div>
                    )}

                    {/* SPECIAL OFFER */}
                    {tier.specialOffer && (
                      <span className={`inline-flex w-fit text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-6 ${isPopular ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-600'}`}>
                        {tier.specialOffer}
                      </span>
                    )}

                    {/* TITLE */}
                    <h3 className={`text-xl font-semibold mb-6 ${isPopular ? "text-white" : "text-zinc-950"}`}>
                      {tier.name}
                    </h3>

                    {/* PRICE */}
                    <div className="mb-6 flex items-baseline">
                      {isFreePlan ? (
                        <>
                          <span className="text-4xl md:text-5xl font-semibold tracking-tight">
                            15 Days
                          </span>
                          <span className={`text-sm font-medium ml-2 ${isPopular ? "text-zinc-500" : "text-zinc-400"}`}>
                            Free Trial
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-4xl md:text-5xl font-semibold tracking-tight">
                            {displayPrice}
                          </span>
                          <span className={`text-sm font-medium ml-2 ${isPopular ? "text-zinc-500" : "text-zinc-400"}`}>
                            {isYearly ? "/year" : "/month"}
                          </span>
                        </>
                      )}
                    </div>

                    {/* DIVIDER */}
                    <div className={`w-full h-px mb-8 ${isPopular ? "bg-zinc-800" : "bg-zinc-100"}`} />

                    {/* FEATURES */}
                    <div className="flex-1 space-y-4 mb-10">
                      {tier.features?.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${isPopular ? "text-zinc-500" : "text-zinc-400"}`} />
                          <span className={`text-sm font-medium leading-relaxed ${isPopular ? "text-zinc-300" : "text-zinc-600"}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA BUTTON */}
                    <button
                      className={`w-full py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] ${
                        isPopular
                          ? "bg-white text-zinc-950 hover:bg-zinc-200"
                          : "bg-[#FAFAFA] border border-zinc-200 text-zinc-950 hover:bg-zinc-50"
                      }`}
                    >
                      Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )
        }
          </div>
        </div>
    </main>
  );
}