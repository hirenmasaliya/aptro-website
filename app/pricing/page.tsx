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
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";

// Material Design standard easing
const materialEasing: Easing = [0.2, 0, 0, 1];

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
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
    <main className="min-h-screen pt-24 pb-32 bg-[#F8F9FA] text-[#202124] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] relative">
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC] mb-6"
          >
            <Sparkles size={14} className="text-[#1A73E8]" />
            Transparent Pricing
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-6 leading-[1.1] text-[#1F1F1F]"
          >
            Invest in your <span className="text-[#1A73E8]">workflow.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-[16px] md:text-[18px] text-[#5F6368] max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Choose the perfect plan for your scale. Always simple, clear, and without hidden fees.
          </motion.p>

          {/* --- CONTROLS --- */}
          <motion.div 
            variants={fadeUpItem}
            className="flex flex-col items-center gap-8"
          >
            {/* Google Style Segmented Button for Role */}
            <div className="inline-flex p-1 bg-[#E1E3E1]/60 rounded-full border border-[#DADCE0]">
              {(["freelancers", "business"] as const).map((tab) => {
                const isSelected = role === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setRole(tab)}
                    className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-medium transition-colors z-10 ${
                      isSelected ? "text-[#041E49]" : "text-[#444746] hover:text-[#1F1F1F]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeRoleTabPricing"
                        className="absolute inset-0 bg-[#D3E3FD] rounded-full shadow-sm"
                        transition={{ duration: 0.3, ease: materialEasing }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {tab === "freelancers" ? <User size={16} /> : <Building2 size={16} />}
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Region & Billing Controls - Clean Material Card */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 bg-white px-6 py-3 rounded-full border border-[#DADCE0] shadow-sm">
              
              {/* Region Toggle */}
              <div className="flex items-center gap-3 text-[14px] font-medium">
                <span className={`flex items-center gap-1.5 transition-colors ${region === "IN" ? "text-[#1F1F1F]" : "text-[#5F6368]"}`}>
                  <MapPin size={18} /> India
                </span>
                <button
                  onClick={() => setRegion(region === "IN" ? "US" : "IN")}
                  className={`relative w-11 h-6 rounded-full p-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] ${
                    region === "US" ? "bg-[#1A73E8]" : "bg-[#DADCE0]"
                  }`}
                  aria-label="Toggle region"
                >
                  <motion.div
                    animate={{ x: region === "US" ? 20 : 0 }}
                    transition={{ duration: 0.3, ease: materialEasing }}
                    className="relative w-4 h-4 bg-white rounded-full shadow-sm"
                  />
                </button>
                <span className={`flex items-center gap-1.5 transition-colors ${region === "US" ? "text-[#1F1F1F]" : "text-[#5F6368]"}`}>
                  <Globe2 size={18} /> Global
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-6 bg-[#DADCE0]" />

              {/* Billing Toggle */}
              <div className="flex items-center gap-3 text-[14px] font-medium">
                <span className={`transition-colors ${!isYearly ? "text-[#1F1F1F]" : "text-[#5F6368]"}`}>Monthly</span>
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className={`relative w-11 h-6 rounded-full p-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] ${
                    isYearly ? "bg-[#1A73E8]" : "bg-[#DADCE0]"
                  }`}
                  aria-label="Toggle yearly billing"
                >
                  <motion.div
                    animate={{ x: isYearly ? 20 : 0 }}
                    transition={{ duration: 0.3, ease: materialEasing }}
                    className="relative w-4 h-4 bg-white rounded-full shadow-sm"
                  />
                </button>
                <span className="flex items-center gap-2">
                  <span className={`transition-colors ${isYearly ? "text-[#1F1F1F]" : "text-[#5F6368]"}`}>Yearly</span>
                  <span className="bg-[#E6F4EA] text-[#0D652D] border border-[#CEEAD6] text-[11px] font-medium px-2 py-0.5 rounded-full">
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
            // MD3 SKELETON LOADERS
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-8 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm animate-pulse h-[520px] flex flex-col">
                  <div className="w-24 h-5 bg-[#F1F3F4] rounded-full mb-8" />
                  <div className="w-40 h-10 bg-[#F1F3F4] rounded-[8px] mb-4" />
                  <div className="w-full h-px bg-[#DADCE0] my-8" />
                  <div className="space-y-5 flex-1">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <div key={j} className="w-full h-4 bg-[#F1F3F4] rounded-full" />
                    ))}
                  </div>
                  <div className="w-full h-12 bg-[#F1F3F4] rounded-full mt-8" />
                </div>
              ))}
            </>
          ) : filteredPlans.length === 0 ? (
            // EMPTY STATE
            <div className="col-span-full py-24 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full border border-[#DADCE0] shadow-sm flex items-center justify-center text-[#5F6368] mb-6">
                <Building2 size={28} />
              </div>
              <h3 className="text-2xl font-normal text-[#1F1F1F] mb-2">No Plans Available</h3>
              <p className="text-[#5F6368] text-[15px]">We couldn't find any pricing plans for this category at the moment.</p>
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
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: materialEasing }}
                    className={`relative p-8 rounded-[24px] flex flex-col h-full bg-white transition-shadow duration-300 hover:shadow-md ${
                      isPopular
                        ? "border-2 border-[#1A73E8] shadow-sm"
                        : "border border-[#DADCE0]"
                    }`}
                  >
                    {/* POPULAR BADGE */}
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1A73E8] text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        Most Popular
                      </div>
                    )}

                    {/* SPECIAL OFFER */}
                    {tier.specialOffer && (
                      <span className="inline-flex w-fit text-[11px] font-medium bg-[#E8F0FE] text-[#1A73E8] px-3 py-1 rounded-full mb-6">
                        {tier.specialOffer}
                      </span>
                    )}

                    {/* TITLE */}
                    <h3 className="text-[20px] font-medium mb-4 text-[#1F1F1F]">
                      {tier.name}
                    </h3>

                    {/* PRICE */}
                    <div className="mb-6 flex items-baseline">
                      {isFreePlan ? (
                        <>
                          <span className="text-4xl lg:text-5xl font-normal text-[#1F1F1F]">
                            15 Days
                          </span>
                          <span className="text-[14px] text-[#5F6368] ml-2 font-medium">
                            Free Trial
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-4xl lg:text-5xl font-normal text-[#1F1F1F]">
                            {displayPrice}
                          </span>
                          <span className="text-[14px] text-[#5F6368] ml-2">
                            {isYearly ? "/year" : "/month"}
                          </span>
                        </>
                      )}
                    </div>

                    {/* DIVIDER */}
                    <div className="w-full h-px mb-8 bg-[#DADCE0]" />

                    {/* FEATURES */}
                    <div className="flex-1 space-y-4 mb-10">
                      {tier.features?.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="shrink-0 text-[#1E8E3E]" />
                          <span className="text-[15px] text-[#444746] leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA BUTTON */}
                    <button
                      className={`w-full py-3 rounded-full font-medium text-[15px] flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] ${
                        isPopular
                          ? "bg-[#1A73E8] text-white hover:bg-[#1557B0]"
                          : "bg-white border border-[#DADCE0] text-[#1A73E8] hover:bg-[#F8F9FA] hover:border-[#1A73E8]"
                      }`}
                    >
                      Get Started <ArrowRight size={18} />
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