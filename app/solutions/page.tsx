"use client";

import { 
  AlertCircle,
  CheckCircle2,
  Zap,
  ArrowRight,
  Database,
  RefreshCw,
  TrendingUp,
  Boxes,
  Receipt,
  Users
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Material Design Standard Easing
const materialEasing = [0.2, 0, 0, 1] as const;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

export default function DetailedSolutionsPage() {
  return (
    <main className="min-h-screen pt-20 pb-32 text-[#202124] font-sans bg-[#F8F9FA] overflow-hidden selection:bg-[#D3E3FD] selection:text-[#041E49]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* --- 1. HERO SECTION --- */}
        <motion.section 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28 mt-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium mb-6 border border-[#D2E3FC]">
            <Zap size={16} className="text-[#1A73E8]" /> Transform Your Workflow
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-normal tracking-tight mb-6 leading-[1.2] text-[#1F1F1F]">
            Stop Managing Software. <br />
            <span className="text-[#1A73E8]">Start Managing Your Business.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[16px] md:text-[18px] text-[#5F6368] leading-relaxed">
            Aptro eliminates app fatigue by combining inventory, invoicing, and client management into one intelligent, step-by-step system.
          </motion.p>
        </motion.section>

        {/* --- 2. THE PROBLEM SECTION --- */}
        <section className="mb-20 md:mb-28">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="p-8 md:p-12 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-[#FCE8E6] pointer-events-none">
              <AlertCircle size={200} strokeWidth={1} />
            </div>
            
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 text-[#C5221F] bg-[#FCE8E6] border border-[#FAD2CF] px-3 py-1.5 rounded-full text-[13px] font-medium mb-6">
                The Core Problem
              </div>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-4">The Disconnected Business Trap</h2>
              <p className="text-[#444746] text-[16px] mb-10 leading-relaxed">
                Most businesses hit a bottleneck because their tools don't talk to each other. You use one app for billing, a spreadsheet for inventory, and another tool for tasks. This fragmentation causes severe operational issues:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Double Data Entry", desc: "Typing the same client details into three different systems." },
                  { title: "Costly Mistakes", desc: "Selling items that are actually out of stock because data didn't sync." },
                  { title: "Wasted Time", desc: "Spending hours reconciling invoices instead of closing new deals." },
                  { title: "Blind Spots", desc: "No single dashboard shows you exactly how much money you are making." }
                ].map((issue, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D93025] shrink-0 mt-2.5" />
                    <div>
                      <h4 className="font-medium text-[#1F1F1F]">{issue.title}</h4>
                      <p className="text-[#5F6368] text-[14px] mt-1.5 leading-relaxed">{issue.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- 3. STEP-BY-STEP SOLUTION SECTION --- */}
        <section className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-4">How Aptro Solves This</h2>
            <p className="text-[#5F6368] text-[16px] max-w-2xl mx-auto">A systematic, step-by-step approach to unifying your daily operations.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 relative"
          >
            {[
              {
                step: "1",
                icon: <Database size={24} />,
                title: "Centralize Data",
                desc: "Input your inventory, services, and client list into Aptro just once. We create a single source of truth for your entire business."
              },
              {
                step: "2",
                icon: <RefreshCw size={24} />,
                title: "Automate Workflows",
                desc: "When you generate an invoice, Aptro automatically deducts the items from your inventory and updates the client's history."
              },
              {
                step: "3",
                icon: <TrendingUp size={24} />,
                title: "Analyze & Grow",
                desc: "With all data connected, Aptro generates real-time reports. See exactly what's selling, who is paying, and where you're profitable."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-start p-8 bg-white rounded-[24px] border border-[#DADCE0] hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center text-[#1A73E8]">
                    {item.icon}
                  </div>
                  <div className="text-[#1A73E8] bg-[#E8F0FE] text-[13px] font-medium w-6 h-6 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-2">{item.title}</h3>
                <p className="text-[#5F6368] text-[14px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- 4. DEEP DIVE: THE UNIFIED SYSTEM --- */}
        <section className="mb-20 md:mb-28">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="p-8 md:p-12 rounded-[24px] bg-[#F1F3F4] border border-[#DADCE0] relative"
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-normal mb-10 text-center text-[#1F1F1F]">One Platform, Complete Control</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Inventory Card */}
                <div className="bg-white p-6 rounded-[16px] border border-[#DADCE0] shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#E6F4EA] flex items-center justify-center text-[#1E8E3E] mb-5">
                    <Boxes size={20} />
                  </div>
                  <h3 className="text-[16px] font-medium text-[#1F1F1F] mb-4">Smart Inventory</h3>
                  <ul className="space-y-3">
                    {["Low stock auto-alerts", "Multi-location tracking", "Cost-basis calculation"].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#444746]">
                        <CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Billing Card */}
                <div className="bg-white p-6 rounded-[16px] border border-[#DADCE0] shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#FEF7E0] flex items-center justify-center text-[#F9AB00] mb-5">
                    <Receipt size={20} />
                  </div>
                  <h3 className="text-[16px] font-medium text-[#1F1F1F] mb-4">Seamless Billing</h3>
                  <ul className="space-y-3">
                    {["1-click invoice generation", "Auto-syncs with stock", "Payment tracking & reminders"].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#444746]">
                        <CheckCircle2 size={18} className="text-[#F9AB00] shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Card */}
                <div className="bg-white p-6 rounded-[16px] border border-[#DADCE0] shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#FCE8E6] flex items-center justify-center text-[#D93025] mb-5">
                    <Users size={20} />
                  </div>
                  <h3 className="text-[16px] font-medium text-[#1F1F1F] mb-4">Client Hub</h3>
                  <ul className="space-y-3">
                    {["Complete purchase history", "Task & follow-up manager", "Direct communication logs"].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#444746]">
                        <CheckCircle2 size={18} className="text-[#D93025] shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>
        </section>

        {/* --- 5. CALL TO ACTION --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center bg-white p-10 md:p-16 rounded-[24px] border border-[#DADCE0] shadow-sm"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F4EA] text-[#0D652D] font-medium text-[13px] mb-6 border border-[#CEEAD6]">
            <span className="w-2 h-2 rounded-full bg-[#1E8E3E]"></span>
            Available for iOS, Android, and Web
          </div>
          
          <h2 className="text-3xl md:text-4xl font-normal text-[#1F1F1F] mb-4">Ready to unite your business?</h2>
          <p className="text-[#5F6368] text-[16px] mb-10 max-w-2xl mx-auto">
            Join thousands of businesses that have replaced their tangled web of apps with Aptro's unified platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/download"
              className="px-6 py-3 bg-[#1A73E8] text-white rounded-full font-medium text-[15px] transition-colors hover:bg-[#1557B0] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
            >
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 bg-white border border-[#DADCE0] text-[#1A73E8] rounded-full font-medium text-[15px] transition-colors hover:bg-[#F8F9FA] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
            >
              View Pricing
            </Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}