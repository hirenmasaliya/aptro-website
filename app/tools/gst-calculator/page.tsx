"use client";

import { useState } from "react";
import { 
  Calculator, 
  ArrowLeft, 
  Sparkles, 
  HelpCircle,
  Percent,
  IndianRupee,
  TrendingUp,
  Info
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

export default function GSTCalculatorPage() {
  const [costPrice, setCostPrice] = useState<string>("1000");
  const [gstRate, setGstRate] = useState<number>(18);
  const [margin, setMargin] = useState<string>("20");
  const [calcType, setCalcType] = useState<"exclusive" | "inclusive">("exclusive");

  // Calculations
  const cp = parseFloat(costPrice) || 0;
  const markupPercent = parseFloat(margin) || 0;
  
  // Profit amount based on cost
  const profitAmount = cp * (markupPercent / 100);
  const baseSellingPrice = cp + profitAmount;
  
  // GST amount
  const gstAmount = calcType === "exclusive" 
    ? baseSellingPrice * (gstRate / 100)
    : cp * (gstRate / (100 + gstRate)); // Reverse calc if inclusive

  const finalPrice = calcType === "exclusive" 
    ? baseSellingPrice + gstAmount 
    : baseSellingPrice;

  const actualBasePrice = calcType === "exclusive" ? baseSellingPrice : finalPrice - gstAmount;
  const netProfit = actualBasePrice - cp;

  return (
    <main className={`min-h-screen pt-20 pb-32 text-gray-900 font-sans bg-[#FDFDFD] selection:bg-blue-100 selection:text-blue-900 ${jakarta.className}`}>
      
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} /> Back to Resources & Tools
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[13px] font-semibold tracking-wide border border-blue-100 mb-4">
            <Calculator size={14} /> Free Business Tool
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            GST Margin Calculator
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Quickly calculate your item selling prices, tax breakdowns, and net profit margins under Indian GST regulations.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-white p-8 rounded-[28px] border border-gray-200 shadow-sm space-y-6">
            
            {/* Calculation Mode Toggle */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Pricing Mode</label>
              <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-50 rounded-2xl border border-gray-200">
                <button
                  onClick={() => setCalcType("exclusive")}
                  className={`py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    calcType === "exclusive" 
                    ? "bg-white text-blue-600 shadow-sm border border-gray-200/60" 
                    : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  GST Exclusive (Add Tax)
                </button>
                <button
                  onClick={() => setCalcType("inclusive")}
                  className={`py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    calcType === "inclusive" 
                    ? "bg-white text-blue-600 shadow-sm border border-gray-200/60" 
                    : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  GST Inclusive (Extract Tax)
                </button>
              </div>
            </div>

            {/* Cost Price */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Base Cost Price (₹)</label>
              <div className="relative">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="number" 
                  value={costPrice}
                  onChange={(e) => setCostPrice(e.target.value)}
                  className="w-full bg-gray-50/50 border border-gray-200 focus:border-blue-600 focus:bg-white rounded-2xl py-3.5 pl-12 pr-4 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Target Profit Margin */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Target Profit Margin (%)</label>
              <div className="relative">
                <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="number" 
                  value={margin}
                  onChange={(e) => setMargin(e.target.value)}
                  className="w-full bg-gray-50/50 border border-gray-200 focus:border-blue-600 focus:bg-white rounded-2xl py-3.5 pl-12 pr-4 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all"
                  placeholder="0"
                />
              </div>
            </div>

            {/* GST Rate Slabs */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Applicable GST Slab</label>
              <div className="grid grid-cols-5 gap-2.5">
                {[0, 5, 12, 18, 28].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setGstRate(rate)}
                    className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                      gstRate === rate 
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Section */}
          <div className="lg:col-span-5 bg-gray-900 text-white p-8 rounded-[28px] shadow-xl relative overflow-hidden">
            
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="text-lg font-semibold text-gray-200 mb-6 pb-4 border-b border-gray-800">
              Calculation Breakdown
            </h3>

            <div className="space-y-6">
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Base Selling Price</span>
                <span className="text-lg font-semibold text-white">₹ {actualBasePrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Net Profit ({markupPercent}%)</span>
                <span className="text-lg font-semibold text-emerald-400">+ ₹ {netProfit.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">GST ({gstRate}%)</span>
                <span className="text-lg font-semibold text-blue-400">+ ₹ {gstAmount.toFixed(2)}</span>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Final Customer Price</span>
                <div className="text-4xl font-bold tracking-tight text-white">
                  ₹ {finalPrice.toFixed(2)}
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-gray-800 flex items-start gap-3 text-xs text-gray-400">
              <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <span>Calculated automatically based on standard Indian B2B/B2C tax formulas. Ready to apply to your Aptro product catalog.</span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}