"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  User,
  Building2,
  Star,
  Plus,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Correct Interface (FIXED)
interface Plan {
  id: string;
  name: string;
  type: "freelancer" | "business";
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
  const [role, setRole] = useState<"freelancer" | "business">("freelancer");
  const [isYearly, setIsYearly] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Fetch API
  useEffect(() => {
    const fetchPlans = async () => {
      try {

        const response = await fetch("/api/plans");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        console.log("Plans:", json.data); // ✅ Debug

        if (json.success) {
          setPlans(json.data || []);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // ✅ Filter Plans
  const filteredPlans = plans.filter((plan) => plan.type === role);

  return (
    <main className="pt-40 pb-32 bg-white text-zinc-950 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-50/50 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-10"
          >
            Pick your <span className="text-blue-600 italic">plan</span>
          </motion.h1>

          {/* ROLE SWITCH */}
          <div className="flex justify-center mb-10">
            <div className="flex p-1 bg-zinc-100 rounded-full">
              <button
                onClick={() => setRole("freelancer")}
                className={`px-6 py-2 rounded-full text-xs font-bold ${
                  role === "freelancer"
                    ? "bg-white shadow"
                    : "text-zinc-400"
                }`}
              >
                <User size={14} className="inline mr-2" />
                Freelancer
              </button>

              <button
                onClick={() => setRole("business")}
                className={`px-6 py-2 rounded-full text-xs font-bold ${
                  role === "business"
                    ? "bg-white shadow"
                    : "text-zinc-400"
                }`}
              >
                <Building2 size={14} className="inline mr-2" />
                Business
              </button>
            </div>
          </div>

          {/* BILLING TOGGLE */}
          <div className="flex justify-center items-center gap-4 text-sm font-bold">
            <span className={!isYearly ? "text-black" : "text-gray-400"}>
              Monthly
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-12 h-6 bg-gray-200 rounded-full p-1"
            >
              <motion.div
                animate={{ x: isYearly ? 24 : 0 }}
                className="w-4 h-4 bg-blue-600 rounded-full"
              />
            </button>

            <span className={isYearly ? "text-black" : "text-gray-400"}>
              Yearly
            </span>
          </div>
        </div>

        {/* PRICING GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">

          {/* LOADING */}
          {isLoading ? (
            <div className="col-span-full flex justify-center">
              <Loader2 className="animate-spin text-blue-600" size={40} />
            </div>
          ) : filteredPlans.length === 0 ? (

            /* EMPTY STATE */
            <div className="col-span-full text-center text-gray-400">
              No plans available
            </div>

          ) : (
            <AnimatePresence>
              {filteredPlans.map((tier, i) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-3xl border flex flex-col justify-between ${
                    tier.isPopular
                      ? "bg-blue-50 border-blue-200 shadow-xl"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {/* POPULAR TAG */}
                  {tier.isPopular && (
                    <div className="mb-4 text-xs font-bold text-blue-600 flex items-center gap-2">
                      <Star size={12} /> Recommended
                    </div>
                  )}

                  {/* TITLE */}
                  <div>
                    <h3 className="text-2xl font-black mb-2">
                      {tier.name}
                    </h3>

                    {/* PRICE */}
                    <div className="text-4xl font-black mb-6">
                      {isYearly
                        ? tier.prices.IN.textYearly
                        : tier.prices.IN.textMonthly}
                      <span className="text-sm text-gray-400 ml-2">
                        {isYearly ? "/yr" : "/mo"}
                      </span>
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-3 mb-6">
                      {tier.features?.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Plus size={14} className="text-blue-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    className={`w-full py-3 rounded-full font-bold flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? "bg-black text-white hover:bg-blue-600"
                        : "border border-gray-300"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </main>
  );
}