"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck, Smartphone, Layers, Users,
  ArrowRight, CheckCircle2, User, Building2, Briefcase, Globe, Zap,
  BarChart3, Lock, Package, Calculator, ClipboardList,
  Wallet, Receipt, CheckSquare, Sparkles
} from "lucide-react";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";
import Link from "next/link";

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
    transition: { staggerChildren: 0.06, delayChildren: 0.05 }
  }
};

// Simple, clear English text
const roleContent = {
  freelancer: {
    badge: "For Solo Workers",
    title: "Made for independent workers.",
    desc: "Everything you need to manage your daily tasks easily. Spend less time writing bills and more time doing your work.",
    spotlight: [
      {
        title: "Simple Dashboard",
        desc: "See your whole work on one page. Check your clients and project updates without getting confused.",
        icon: <BarChart3 className="w-6 h-6" />,
        details: ["Daily work updates", "Track your project work", "Quick customer list"],
        image: "/images/dashboard.png",
      },
      {
        title: "Fast Bills & Estimates",
        desc: "Create clean bills for your clients in seconds. Send them on WhatsApp or email to get paid on time.",
        icon: <Receipt className="w-6 h-6" />,
        details: ["Make price estimates", "Download bills as PDF", "Simple GST calculation"],
        image: "/images/invoice.png",
      },
      {
        title: "Track Your Money",
        desc: "Always know who paid you and who still owes you money, so you never miss any payment.",
        icon: <Wallet className="w-6 h-6" />,
        details: ["Money in and out records", "Check pending dues", "Total balance overview"],
        image: "/images/payments.png",
      },
      {
        title: "Daily Tasks & Notes",
        desc: "Write down your to-do lists and important customer notes directly in your phone.",
        icon: <CheckSquare className="w-6 h-6" />,
        details: ["Simple daily task list", "Save quick notes"],
        image: "/images/tasks.png",
      }
    ]
  },
  business: {
    badge: "For Shop & Business Owners",
    title: "Manage your entire shop or store.",
    desc: "A complete mobile app to keep count of your stock, track staff work hours, and make tax time stress-free.",
    spotlight: [
      {
        title: "Live Stock Count",
        desc: "Always know what is on your shelves. Get an alert on your phone before items run out.",
        icon: <Package className="w-6 h-6" />,
        details: ["Real-time item count", "Low stock alerts", "Quick add & remove items"],
        image: "/images/stock.png",
      },
      {
        title: "Customer & Supplier Directory",
        desc: "Keep all your customer and vendor contact numbers safely in one place with automatic backup.",
        icon: <Users className="w-6 h-6" />,
        details: ["Separate buyers and sellers", "Automatic data backup"],
        image: "/images/customer.png",
      },
      {
        title: "Easy GST & Tax Bills",
        desc: "Let the app calculate GST and taxes automatically without any difficult math.",
        icon: <Calculator className="w-6 h-6" />,
        details: ["GST-ready bill format", "Monthly profit & tax summary"],
        image: "/images/gst.png",
      },
      {
        title: "Staff Attendance & Pay",
        desc: "Mark staff present or absent every morning and let the app calculate their monthly salary automatically.",
        icon: <ClipboardList className="w-6 h-6" />,
        details: ["Daily staff attendance", "Automatic salary calculation"],
        image: "/images/payroll.png",
      }
    ]
  }
};

const commonFeatures = [
  { title: "Safe & Private", icon: <Lock size={22} />, desc: "Your data is locked securely. Only you have the key to view your shop numbers." },
  { title: "Works on Any Device", icon: <Smartphone size={22} />, desc: "Use Aptro on your phone, tablet, or laptop. Everything stays synced." },
  { title: "Multi-Currency Ready", icon: <Globe size={22} />, desc: "Accept payments and create bills in different currencies with zero fuss." },
  { title: "Easy Integrations", icon: <Layers size={22} />, desc: "Works smoothly with your favorite business tools and payment methods." },
  { title: "Instant Cloud Sync", icon: <Zap size={22} />, desc: "Update a bill on your phone and it appears immediately on your desktop screen." },
  { title: "Friendly Support", icon: <Briefcase size={22} />, desc: "Our helpful support team is ready whenever you have questions or need guidance." },
];

export default function FeaturesPage() {
  const [role, setRole] = useState<"freelancer" | "business">("freelancer");
  const activeContent = roleContent[role];

  return (
    <main className="min-h-screen pt-24 pb-32 bg-[#F8F9FA] text-[#202124] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] relative">

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* --- Header & Segmented Control --- */}
        <section className="max-w-3xl mx-auto mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, ease: materialEasing }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC] mb-6"
          >
            <Sparkles size={14} className="text-[#1A73E8]" />
            What Aptro Does
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: materialEasing, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-6 leading-[1.1] text-[#1F1F1F]"
          >
            Built for <span className="text-[#1A73E8]">everyday business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: materialEasing, delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-[#444746] leading-relaxed max-w-xl mb-8"
          >
            Pick how you work to see how Aptro makes your day-to-day operations straightforward and stress-free.
          </motion.p>

          {/* Google Material 3 Segmented Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: materialEasing, delay: 0.15 }}
            className="inline-flex p-1 bg-[#E1E3E1]/60 rounded-full border border-[#DADCE0]"
          >
            {(["freelancer", "business"] as const).map((tab) => {
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
                      layoutId="materialTabPill"
                      className="absolute inset-0 bg-[#D3E3FD] rounded-full shadow-sm"
                      transition={{ duration: 0.3, ease: materialEasing }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab === "freelancer" ? <User size={16} /> : <Building2 size={16} />}
                    {tab === "freelancer" ? "Solo Worker" : "Shop / Business"}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </section>

        {/* --- Spotlight Feature List --- */}
        <section className="mb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: materialEasing }}
              className="flex flex-col gap-24"
            >
              {/* Category Intro */}
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-[13px] font-medium text-[#1A73E8] uppercase tracking-wider block mb-2">
                  {activeContent.badge}
                </span>
                <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-3">
                  {activeContent.title}
                </h2>
                <p className="text-[16px] text-[#444746] leading-relaxed">
                  {activeContent.desc}
                </p>
              </div>

              {/* Alternating Feature Cards */}
              {activeContent.spotlight.map((feature, i) => {
                const isEven = i % 2 === 0;
                
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: materialEasing }}
                    className={`flex flex-col gap-10 lg:gap-16 items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Text Details */}
                    <div className="flex-1 w-full flex flex-col items-start text-left space-y-4">
                      <div className="w-12 h-12 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                        {feature.icon}
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-normal tracking-tight text-[#1F1F1F]">
                        {feature.title}
                      </h3>
                      
                      <p className="text-[16px] text-[#444746] leading-relaxed max-w-xl">
                        {feature.desc}
                      </p>
                      
                      {/* Sub-points / Chips */}
                      <div className="pt-2 flex flex-col gap-2.5 w-full">
                        {feature.details.map((detail, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-3 text-[#1F1F1F] text-[15px] font-medium bg-white px-4 py-2.5 rounded-[12px] border border-[#DADCE0] w-fit shadow-xs"
                          >
                            <CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Phone Frame - Clean Material Card Display */}
                    <div className="flex-1 w-full flex justify-center items-center py-4 relative">
                      {/* Subtle Google Blue background circle */}
                      <div className="absolute w-[280px] h-[340px] bg-[#E8F0FE] rounded-[36px] -z-10 pointer-events-none" />

                      <div className="relative w-[240px] sm:w-[280px] aspect-[9/19.5] rounded-[32px] border-[6px] border-[#202124] bg-[#202124] shadow-md overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* --- General Benefits Grid (Material Cards) --- */}
        <section className="pt-20 border-t border-[#DADCE0]">
          <div className="max-w-2xl mb-14 text-center mx-auto">
            <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-3">
              Why business owners like Aptro
            </h2>
            <p className="text-[16px] text-[#444746] leading-relaxed">
              Carefully designed so your records remain private, simple to find, and always within reach.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {commonFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="p-8 bg-white border border-[#DADCE0] rounded-[24px] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 w-12 h-12 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                    {f.icon}
                  </div>
                  <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-2">{f.title}</h3>
                  <p className="text-[#444746] leading-relaxed text-[15px]">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- CTA Section (Material Surface Card) --- */}
        <section className="mt-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: materialEasing }}
            className="relative px-8 py-16 md:py-20 rounded-[32px] bg-white border border-[#DADCE0] text-center shadow-sm"
          >
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-normal mb-4 text-[#1F1F1F]">
                Ready to make work <span className="text-[#1A73E8]">easier?</span>
              </h2>
              <p className="text-[#444746] text-[16px] md:text-[17px] mb-8 leading-relaxed">
                Join independent workers and shop owners who manage their billing and stock effortlessly with Aptro.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-7 py-3 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full font-medium text-[15px] transition-colors flex items-center justify-center gap-2 group shadow-xs"
                >
                  Download App Free
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-7 py-3 bg-white border border-[#DADCE0] text-[#1A73E8] hover:bg-[#F8F9FA] rounded-full font-medium text-[15px] transition-colors flex items-center justify-center"
                >
                  See Pricing Plans
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}