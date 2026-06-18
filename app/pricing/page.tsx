"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  User,
  Building2,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Plan {
  id: string;
  name: string;
  type: "freelancers" | "business";
  isPopular: boolean;
  features: string[];
  prices: {
    IN: {
      monthly: number;
      yearly: number;
      textMonthly: string;
      textYearly: string;
    };
  };
  specialOffer?: string;
}

export default function PricingPage() {
  const [role, setRole] = useState<"freelancers" | "business">("freelancers");
  const [isYearly, setIsYearly] = useState(false);
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
    <main className="pt-32 pb-32 bg-zinc-50 text-zinc-950 overflow-x-hidden min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Soft Background Blur */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200"
          >
            <Sparkles size={14} />
            Transparent Pricing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-zinc-900"
          >
            Invest in your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">workflow.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-500 font-medium max-w-xl mx-auto mb-10"
          >
            Choose the perfect plan for your needs. Always simple, clear, and without hidden fees.
          </motion.p>

          {/* --- CONTROLS (ROLE & BILLING) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            {/* ROLE SWITCHER */}
            <div className="relative flex p-1.5 bg-zinc-200/60 backdrop-blur-sm rounded-full border border-zinc-200/80 shadow-inner">
              {(["freelancers", "business"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setRole(tab)}
                  className={`relative flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-colors z-10 ${
                    role === tab ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
                  }`}
                >
                  {role === tab && (
                    <motion.div
                      layoutId="activeRoleTab"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-zinc-200/50"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab === "freelancers" ? <User size={16} /> : <Building2 size={16} />}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </span>
                </button>
              ))}
            </div>

            {/* BILLING TOGGLE */}
            <div className="flex items-center gap-4 text-sm font-bold">
              <span className={!isYearly ? "text-zinc-900" : "text-zinc-400"}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-14 h-8 bg-zinc-200 rounded-full p-1 transition-colors hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Toggle yearly billing"
              >
                <div className={`absolute inset-0 rounded-full transition-colors ${isYearly ? "bg-blue-600" : "bg-zinc-300"}`} />
                <motion.div
                  animate={{ x: isYearly ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="relative w-6 h-6 bg-white rounded-full shadow-md"
                />
              </button>
              <span className="flex items-center gap-2">
                <span className={isYearly ? "text-zinc-900" : "text-zinc-400"}>Yearly</span>
                <span className="bg-green-100 text-green-700 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-black">
                  Save ~20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* --- PRICING GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto min-h-[400px]">
          {isLoading ? (
            // SKELETON LOADERS
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-zinc-100 shadow-sm animate-pulse h-[520px] flex flex-col">
                  <div className="w-24 h-6 bg-zinc-200 rounded-full mb-8" />
                  <div className="w-48 h-12 bg-zinc-200 rounded-xl mb-4" />
                  <div className="w-full h-px bg-zinc-100 my-6" />
                  <div className="space-y-4 flex-1">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <div key={j} className="w-full h-4 bg-zinc-100 rounded-full" />
                    ))}
                  </div>
                  <div className="w-full h-12 bg-zinc-200 rounded-full mt-8" />
                </div>
              ))}
            </>
          ) : filteredPlans.length === 0 ? (
            // EMPTY STATE
            <div className="col-span-full py-20 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">No Plans Found</h3>
              <p className="text-zinc-500">We couldn't find any pricing plans for this category.</p>
            </div>
          ) : (
            // PLAN CARDS
            <AnimatePresence mode="popLayout">
              {filteredPlans.map((tier, i) => {
                const isPopular = tier.isPopular;

                return (
                  <motion.div
                    key={tier.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`relative p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full transition-shadow hover:shadow-xl ${
                      isPopular
                        ? "bg-zinc-950 text-white shadow-2xl scale-100 lg:scale-105 z-10"
                        : "bg-white text-zinc-900 border border-zinc-200 shadow-sm"
                    }`}
                  >
                    {/* POPULAR BADGE */}
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <Star size={12} className="fill-white" /> Most Popular
                      </div>
                    )}

                    {/* SPECIAL OFFER */}
                    {tier.specialOffer && (
                      <span className={`inline-block w-fit text-xs font-bold px-2 py-1 rounded-md mb-4 ${isPopular ? 'bg-zinc-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                        {tier.specialOffer}
                      </span>
                    )}

                    {/* TITLE */}
                    <h3 className={`text-xl font-bold mb-4 ${isPopular ? "text-zinc-100" : "text-zinc-900"}`}>
                      {tier.name}
                    </h3>

                    {/* PRICE */}
                    <div className="mb-6">
                      <span className="text-4xl md:text-5xl font-black tracking-tight">
                        {isYearly ? tier.prices.IN.textYearly : tier.prices.IN.textMonthly}
                      </span>
                      <span className={`text-sm font-medium ml-2 ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>
                        {isYearly ? "/year" : "/month"}
                      </span>
                    </div>

                    {/* DIVIDER */}
                    <div className={`w-full h-px mb-8 ${isPopular ? "bg-zinc-800" : "bg-zinc-100"}`} />

                    {/* FEATURES */}
                    <div className="flex-1 space-y-4 mb-8">
                      {tier.features?.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${isPopular ? "text-blue-400" : "text-blue-600"}`} />
                          <span className={`text-sm leading-snug font-medium ${isPopular ? "text-zinc-300" : "text-zinc-600"}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA BUTTON */}
                    <button
                      className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                        isPopular
                          ? "bg-white text-zinc-900 hover:bg-zinc-200"
                          : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                      }`}
                    >
                      Get Started <ArrowRight size={16} />
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