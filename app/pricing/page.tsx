"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  User,
  Building2,
  CheckCircle2,
  Globe2,
  MapPin,
  Sparkles,
  HelpCircle,
  Check
} from "lucide-react";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";

// Material Design standard easing for buttery smooth transitions
const materialEasing: Easing = [0.2, 0, 0, 1];

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
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
  seoDescription?: string; 
}

export default function PricingPage() {
  const [role, setRole] = useState<"business" | "freelancers">("business");
  const [isYearly, setIsYearly] = useState(true); // Default to yearly to show savings
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
    <main className="min-h-screen pt-24 pb-32 bg-[#FFFFFF] text-[#202124] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] relative">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HERO HEADER --- */}
        <motion.header 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-semibold tracking-wide border border-[#D2E3FC] mb-8"
          >
            <Sparkles size={14} aria-hidden="true" className="text-[#1A73E8]" />
            SIMPLE, TRANSPARENT PRICING
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-[1.15] text-[#1F1F1F]"
          >
            Invest in your <span className="text-[#1A73E8]">business growth.</span>
          </motion.h1>
          
          <motion.h2 
            variants={fadeUpItem}
            className="text-[17px] md:text-[19px] text-[#5F6368] max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
          >
            Choose the perfect plan for your MSME or freelance operations. Always simple, clear, and without hidden fees. Access GST billing, inventory, and payroll tools today.
          </motion.h2>

          {/* --- 2. PREMIUM TOGGLE CONTROLS --- */}
          <motion.nav 
            aria-label="Pricing plan toggle"
            variants={fadeUpItem}
            className="flex flex-col items-center gap-8"
          >
            {/* Segmented Role Button */}
            <div className="inline-flex p-1.5 bg-white rounded-full border border-[#DADCE0] shadow-sm">
              {(["business", "freelancers"] as const).map((tab) => {
                const isSelected = role === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setRole(tab)}
                    aria-pressed={isSelected}
                    className={`relative flex items-center gap-2.5 px-8 py-3 rounded-full text-[15px] font-medium transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] ${
                      isSelected ? "text-[#041E49]" : "text-[#5F6368] hover:text-[#1F1F1F]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeRoleTabPricing"
                        className="absolute inset-0 bg-[#E8F0FE] rounded-full"
                        transition={{ duration: 0.4, ease: materialEasing }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {tab === "business" ? <Building2 size={18} aria-hidden="true" /> : <User size={18} aria-hidden="true" />}
                      {tab === "business" ? "Shop / MSME" : "Solo Worker"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Region & Billing Controls - Premium iOS-style Card */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 bg-white px-8 py-4 rounded-[20px] border border-[#DADCE0] shadow-sm">
              
              {/* Region Toggle */}
              <div className="flex items-center gap-3 text-[15px] font-medium">
                <span className={`flex items-center gap-1.5 transition-colors ${region === "IN" ? "text-[#1F1F1F]" : "text-[#80868B]"}`}>
                  <MapPin size={18} aria-hidden="true" /> India
                </span>
                <button
                  onClick={() => setRegion(region === "IN" ? "US" : "IN")}
                  className={`relative w-12 h-7 rounded-full p-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] ${
                    region === "US" ? "bg-[#1A73E8]" : "bg-[#DADCE0]"
                  }`}
                  aria-label={`Toggle region to ${region === "IN" ? "Global" : "India"}`}
                >
                  <motion.div
                    animate={{ x: region === "US" ? 20 : 0 }}
                    transition={{ duration: 0.4, ease: materialEasing }}
                    className="relative w-5 h-5 bg-white rounded-full shadow-sm"
                  />
                </button>
                <span className={`flex items-center gap-1.5 transition-colors ${region === "US" ? "text-[#1F1F1F]" : "text-[#80868B]"}`}>
                  <Globe2 size={18} aria-hidden="true" /> Global
                </span>
              </div>

              {/* Elegant Divider */}
              <div className="hidden sm:block w-[2px] h-8 bg-[#F1F3F4]" aria-hidden="true" />

              {/* Billing Toggle */}
              <div className="flex items-center gap-3 text-[15px] font-medium">
                <span className={`transition-colors ${!isYearly ? "text-[#1F1F1F]" : "text-[#80868B]"}`}>Monthly</span>
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className={`relative w-12 h-7 rounded-full p-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] ${
                    isYearly ? "bg-[#1E8E3E]" : "bg-[#DADCE0]"
                  }`}
                  aria-label={`Toggle billing cycle to ${isYearly ? "Monthly" : "Yearly"}`}
                >
                  <motion.div
                    animate={{ x: isYearly ? 20 : 0 }}
                    transition={{ duration: 0.4, ease: materialEasing }}
                    className="relative w-5 h-5 bg-white rounded-full shadow-sm"
                  />
                </button>
                <span className="flex items-center gap-2.5">
                  <span className={`transition-colors ${isYearly ? "text-[#1F1F1F]" : "text-[#80868B]"}`}>Yearly</span>
                  <span className="bg-[#E6F4EA] text-[#0D652D] text-[12px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Save 20%
                  </span>
                </span>
              </div>

            </div>
          </motion.nav>
        </motion.header>

        {/* --- 3. PRICING GRID --- */}
        <section aria-labelledby="pricing-plans-heading" className="mb-32">
          <h2 id="pricing-plans-heading" className="sr-only">Available Pricing Plans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-6 items-center justify-center min-h-[500px]">
            {isLoading ? (
              // Enhanced Skeleton Loaders
              <>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-10 rounded-[32px] bg-white border border-[#F1F3F4] shadow-sm animate-pulse h-[600px] flex flex-col" aria-hidden="true">
                    <div className="w-28 h-6 bg-[#F8F9FA] rounded-full mb-10" />
                    <div className="w-48 h-12 bg-[#F8F9FA] rounded-[12px] mb-6" />
                    <div className="w-full h-[2px] bg-[#F8F9FA] my-8" />
                    <div className="space-y-6 flex-1">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <div key={j} className="flex items-center gap-4">
                          <div className="w-6 h-6 rounded-full bg-[#F8F9FA] shrink-0" />
                          <div className="w-full h-4 bg-[#F8F9FA] rounded-full" />
                        </div>
                      ))}
                    </div>
                    <div className="w-full h-14 bg-[#F8F9FA] rounded-full mt-8" />
                  </div>
                ))}
              </>
            ) : filteredPlans.length === 0 ? (
              // EMPTY STATE
              <div className="col-span-full py-32 text-center flex flex-col items-center bg-white rounded-[32px] border border-[#DADCE0]">
                <div className="w-20 h-20 bg-[#F8F9FA] rounded-full border border-[#DADCE0] flex items-center justify-center text-[#5F6368] mb-6">
                  <Building2 size={32} />
                </div>
                <h3 className="text-2xl font-medium text-[#1F1F1F] mb-3">No Plans Available</h3>
                <p className="text-[#5F6368] text-[16px]">We couldn't find any pricing plans for this category right now.</p>
              </div>
            ) : (
              // PLAN CARDS
              <AnimatePresence mode="popLayout">
                {filteredPlans.map((tier, i) => {
                  const isPopular = tier.isPopular;
                  
                  // Price Parsing
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
                    <motion.article
                      key={tier.id}
                      layout
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: materialEasing }}
                      // UX Enhancement: The Popular card scales up and has deeper shadows
                      className={`relative p-8 lg:p-10 rounded-[32px] flex flex-col h-full bg-white transition-all duration-300 group hover:-translate-y-2 ${
                        isPopular
                          ? "border-[3px] border-[#1A73E8] shadow-[0_20px_40px_-15px_rgba(26,115,232,0.15)] lg:scale-105 z-10"
                          : "border border-[#DADCE0] shadow-sm hover:shadow-xl"
                      }`}
                    >
                      {/* POPULAR BADGE */}
                      {isPopular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1A73E8] text-white text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                          Most Popular
                        </div>
                      )}

                      {/* SPECIAL OFFER */}
                      {tier.specialOffer && (
                        <span className="inline-flex w-fit text-[12px] font-bold uppercase tracking-wider bg-[#FCE8E6] text-[#C5221F] px-3 py-1 rounded-full mb-6">
                          {tier.specialOffer}
                        </span>
                      )}

                      {/* TITLE */}
                      <h3 className={`text-[22px] font-semibold mb-4 ${isPopular ? "text-[#1A73E8]" : "text-[#1F1F1F]"}`}>
                        {tier.name}
                      </h3>

                      {/* PRICE */}
                      <div className="mb-8 flex items-baseline">
                        {isFreePlan ? (
                          <>
                            <span className="text-4xl lg:text-5xl font-medium text-[#1F1F1F] tracking-tight">
                              15 Days
                            </span>
                            <span className="text-[15px] text-[#5F6368] ml-2 font-medium">
                              Free Trial
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-4xl lg:text-5xl font-medium text-[#1F1F1F] tracking-tight">
                              {displayPrice}
                            </span>
                            <span className="text-[15px] text-[#5F6368] ml-2 font-medium">
                              {isYearly ? "/year" : "/month"}
                            </span>
                          </>
                        )}
                      </div>

                      <button
                        className={`w-full py-3.5 rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 mb-10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] ${
                          isPopular
                            ? "bg-[#1A73E8] text-white hover:bg-[#1557B0] hover:shadow-lg"
                            : "bg-[#F8F9FA] border border-[#DADCE0] text-[#1F1F1F] hover:bg-white hover:border-[#1F1F1F]"
                        }`}
                        aria-label={`Get started with the ${tier.name} plan`}
                      >
                        Start Free Trial <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                      </button>

                      {/* DIVIDER */}
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#DADCE0] to-transparent mb-8" aria-hidden="true" />

                      {/* FEATURES */}
                      <ul className="flex-1 space-y-5 list-none p-0 m-0">
                        {tier.features?.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isPopular ? "bg-[#E8F0FE] text-[#1A73E8]" : "bg-[#F1F3F4] text-[#5F6368]"}`}>
                              <Check size={12} strokeWidth={3} aria-hidden="true" />
                            </div>
                            <span className="text-[15px] text-[#444746] leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            )}
          </div>
        </section>

        {/* --- 4. PRICING DEEP DIVE / FAQ SECTION --- */}
        <section aria-labelledby="pricing-details-heading" className="pt-20 border-t border-[#DADCE0]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center">
                <HelpCircle size={24} className="text-[#1A73E8]" aria-hidden="true" />
              </div>
              <h2 id="pricing-details-heading" className="text-3xl font-medium text-[#1F1F1F]">
                Understanding Our Software Pricing
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              <article className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-[19px] font-medium text-[#1F1F1F] mb-4">Why choose the Business Plan?</h3>
                <p className="text-[#5F6368] text-[15px] leading-relaxed">
                  Our core Business Plan is designed specifically for MSMEs, retailers, and wholesalers who need a unified system. While basic billing apps only handle invoices, the Aptro Business Plan unlocks full <strong>inventory management, staff attendance tracking, and automated digital khata syncing</strong>. It replaces multiple costly subscriptions with one affordable yearly fee.
                </p>
              </article>

              <article className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-[19px] font-medium text-[#1F1F1F] mb-4">Are there any hidden setup fees?</h3>
                <p className="text-[#5F6368] text-[15px] leading-relaxed">
                  No. We believe in 100% transparent pricing for small businesses. There are zero setup fees, zero hidden installation charges, and your cloud data backup is included in the base cost. Whether you use the Android app, iOS, or Web Desktop, your subscription covers access across all devices simultaneously.
                </p>
              </article>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}