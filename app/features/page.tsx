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

// SEO-Optimized Content with Unique Background Colors Added
const roleContent = {
  business: {
    badge: "For Shop & MSME Business Owners",
    title: "The complete business management app.",
    desc: "A powerful mobile billing app to manage your stock, track staff attendance, and generate GST invoices effortlessly. Built for Indian SMEs.",
    spotlight: [
      {
        title: "GST Billing & E-Invoicing",
        desc: "Create professional GST bills in seconds. Let the app calculate taxes automatically and generate accurate invoices to share via WhatsApp.",
        icon: <Calculator className="w-6 h-6" aria-hidden="true" />,
        details: ["GST-ready invoice generator", "Monthly tax & profit summary", "Download bills as PDF"],
        image: "/images/gst.png",
        altText: "Aptro GST billing app interface showing automated tax calculation and invoice generation",
        // Soft Blue background
        bgClass: "bg-[#F0F7FF] border-[#D6E6FF]" 
      },
      {
        title: "Inventory & Stock Management",
        desc: "Always know what is on your shelves. Get low-stock alerts directly on your phone before fast-moving items run out.",
        icon: <Package className="w-6 h-6" aria-hidden="true" />,
        details: ["Real-time inventory tracking", "Low stock alerts", "Quick barcode scanning"],
        image: "/images/stock.png",
        altText: "Stock and inventory management dashboard showing real-time item counts",
        // Soft Green background
        bgClass: "bg-[#F0FDF4] border-[#DCFCE7]" 
      },
      {
        title: "Staff Attendance & Payroll",
        desc: "Mark employee check-ins every morning. The app acts as your staff attendance tracker and calculates monthly salary slips automatically.",
        icon: <ClipboardList className="w-6 h-6" aria-hidden="true" />,
        details: ["Daily staff attendance tracker", "Automated payroll management", "Manage employee advances"],
        image: "/images/payroll.png",
        altText: "Payroll management app India interface showing employee attendance and salary slips",
        // Soft Purple background
        bgClass: "bg-[#F5F3FF] border-[#EDE9FE]" 
      },
      {
        title: "B2B Order & Vendor Directory",
        desc: "Keep your customer and supplier ledgers safely in one place. Monitor your B2B order management with automatic cloud backups.",
        icon: <Users className="w-6 h-6" aria-hidden="true" />,
        details: ["Digital khata for buyers & sellers", "Track pending payments", "Secure cloud backup"],
        image: "/images/customer.png",
        altText: "Customer and supplier directory showing pending payments and order management",
        // Soft Orange/Amber background
        bgClass: "bg-[#FFF9F0] border-[#FFEDD5]" 
      }
    ]
  },
  freelancer: {
    badge: "For Solo Workers & Freelancers",
    title: "Made for independent professionals.",
    desc: "Everything you need to manage your daily tasks, send estimates, and track expenses easily. Spend less time on paperwork.",
    spotlight: [
      {
        title: "Freelance Invoice Maker",
        desc: "Create clean bills and quotation estimates for your clients in seconds. Send them instantly to get paid faster.",
        icon: <Receipt className="w-6 h-6" aria-hidden="true" />,
        details: ["Professional estimate generator", "Download invoices as PDF", "Simple tax calculation"],
        image: "/images/invoice.png",
        altText: "Free invoice maker app showing a clean PDF quotation for a freelance client",
        bgClass: "bg-[#F0F7FF] border-[#D6E6FF]" // Soft Blue
      },
      {
        title: "Expense & Income Tracking",
        desc: "Always know who paid you and who still owes money. A simple business ledger app to ensure you never miss a payment.",
        icon: <Wallet className="w-6 h-6" aria-hidden="true" />,
        details: ["Money in and out records", "Check pending client dues", "Total balance overview"],
        image: "/images/payments.png",
        altText: "Digital khata and expense tracking app showing client payments",
        bgClass: "bg-[#F0FDF4] border-[#DCFCE7]" // Soft Green
      },
      {
        title: "Client Project Dashboard",
        desc: "See your entire workload on one screen. Monitor your clients and project updates without messy spreadsheets.",
        icon: <BarChart3 className="w-6 h-6" aria-hidden="true" />,
        details: ["Daily revenue updates", "Track project milestones", "Quick customer directory"],
        image: "/images/dashboard.png",
        altText: "Freelancer dashboard showing daily revenue and project progress",
        bgClass: "bg-[#F5F3FF] border-[#EDE9FE]" // Soft Purple
      },
      {
        title: "Daily Tasks & Notes",
        desc: "Write down your to-do lists, client requirements, and important notes directly on your mobile device.",
        icon: <CheckSquare className="w-6 h-6" aria-hidden="true" />,
        details: ["Simple daily task tracker", "Save quick customer notes"],
        image: "/images/tasks.png",
        altText: "Task management interface showing daily to-do lists and notes",
        bgClass: "bg-[#FFF9F0] border-[#FFEDD5]" // Soft Orange
      }
    ]
  }
};

const commonFeatures = [
  { title: "100% Safe & Private", icon: <Lock size={22} aria-hidden="true" />, desc: "Your accounting data is locked securely. Only you have the key to view your business ledger." },
  { title: "Mobile & PC Sync", icon: <Smartphone size={22} aria-hidden="true" />, desc: "Use the Aptro app on your Android, iOS, or laptop. Everything stays perfectly synced." },
  { title: "Multi-Currency Ready", icon: <Globe size={22} aria-hidden="true" />, desc: "Accept payments and generate bills in different currencies for international clients." },
  { title: "API Integrations", icon: <Layers size={22} aria-hidden="true" />, desc: "Works smoothly with your favorite B2B business tools and payment gateways." },
  { title: "Instant Cloud Backup", icon: <Zap size={22} aria-hidden="true" />, desc: "Update an invoice on your phone and it backs up immediately to our secure cloud." },
  { title: "Priority Support", icon: <Briefcase size={22} aria-hidden="true" />, desc: "Our SME support team is ready whenever you need guidance on GST or payroll setups." },
];

// Array of distinct colors for the benefits grid cards
const gridCardColors = [
  "bg-[#F8FAFC] border-[#E2E8F0]", // Slate Gray
  "bg-[#F0FDFA] border-[#CCFBF1]", // Soft Teal
  "bg-[#FFF7ED] border-[#FFEDD4]", // Soft Orange
  "bg-[#EFF6FF] border-[#DBEAFE]", // Soft Blue
  "bg-[#FDF4FF] border-[#FAE8FF]", // Soft Fuchsia
  "bg-[#F0FDF4] border-[#DCFCE7]", // Soft Green
];

export default function FeaturesPage() {
  const [role, setRole] = useState<"business" | "freelancer">("business");
  const activeContent = roleContent[role];

  return (
    <main className="min-h-screen pt-24 pb-32 bg-white text-[#202124] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] relative">

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* --- Header & Segmented Control --- */}
        <header className="max-w-3xl mx-auto mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, ease: materialEasing }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC] mb-6"
          >
            <Sparkles size={14} className="text-[#1A73E8]" aria-hidden="true" />
            Aptro Features
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: materialEasing, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-6 leading-[1.1] text-[#1F1F1F]"
          >
            Built for <span className="text-[#1A73E8]">growing businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: materialEasing, delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-[#444746] leading-relaxed max-w-xl mb-8"
          >
            Select your business type to see how Aptro automates your billing, inventory, and daily operations.
          </motion.p>

          <motion.nav
            aria-label="Feature categories"
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: materialEasing, delay: 0.15 }}
            className="inline-flex p-1 bg-[#F8F9FA] rounded-full border border-[#DADCE0]"
          >
            {(["business", "freelancer"] as const).map((tab) => {
              const isSelected = role === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setRole(tab)}
                  aria-pressed={isSelected}
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
                    {tab === "business" ? <Building2 size={16} aria-hidden="true" /> : <User size={16} aria-hidden="true" />}
                    {tab === "business" ? "Shop / MSME" : "Solo Worker"}
                  </span>
                </button>
              );
            })}
          </motion.nav>
        </header>

        {/* --- Spotlight Feature List --- */}
        <section aria-labelledby="spotlight-heading" className="mb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: materialEasing }}
              className="flex flex-col gap-12"
            >
              {/* Category Intro */}
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-[13px] font-medium text-[#1A73E8] uppercase tracking-wider block mb-2">
                  {activeContent.badge}
                </span>
                <h2 id="spotlight-heading" className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-3">
                  {activeContent.title}
                </h2>
                <p className="text-[16px] text-[#444746] leading-relaxed">
                  {activeContent.desc}
                </p>
              </div>

              {/* Alternating Feature Cards with Unique Backgrounds */}
              <ul className="flex flex-col gap-12 list-none p-0 m-0">
                {activeContent.spotlight.map((feature, i) => {
                  const isEven = i % 2 === 0;
                  
                  return (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, ease: materialEasing }}
                      // Applied the dynamic background color class to the card wrapper
                      className={`flex flex-col gap-10 lg:gap-16 items-center p-8 lg:p-14 rounded-[32px] border ${feature.bgClass} ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Text Details */}
                      <div className="flex-1 w-full flex flex-col items-start text-left space-y-4">
                        <div className="w-12 h-12 rounded-full bg-white text-[#1A73E8] flex items-center justify-center shadow-sm">
                          {feature.icon}
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-normal tracking-tight text-[#1F1F1F]">
                          {feature.title}
                        </h3>
                        
                        <p className="text-[16px] text-[#444746] leading-relaxed max-w-xl">
                          {feature.desc}
                        </p>
                        
                        <ul className="pt-2 flex flex-col gap-2.5 w-full list-none p-0 m-0">
                          {feature.details.map((detail, idx) => (
                            <li 
                              key={idx} 
                              className="flex items-center gap-3 text-[#1F1F1F] text-[15px] font-medium bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-[12px] border border-white/40 w-fit shadow-xs"
                            >
                              <CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" aria-hidden="true" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Phone Frame */}
                      <div className="flex-1 w-full flex justify-center items-center py-4 relative">
                        <div className="relative w-[240px] sm:w-[280px] aspect-[9/19.5] rounded-[32px] border-[6px] border-[#202124] bg-[#202124] shadow-xl overflow-hidden">
                          <Image
                            src={feature.image}
                            alt={feature.altText}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* --- General Benefits Grid --- */}
        <section aria-labelledby="benefits-heading" className="pt-20">
          <div className="max-w-2xl mb-14 text-center mx-auto">
            <h2 id="benefits-heading" className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-3">
              Why business owners trust Aptro
            </h2>
            <p className="text-[16px] text-[#444746] leading-relaxed">
              Carefully designed so your MSME accounting records remain private, simple to track, and always compliant.
            </p>
          </div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0"
          >
            {commonFeatures.map((f, i) => (
              <motion.li
                key={i}
                variants={fadeUpItem}
                // Cycling through the gridCardColors array for different background tints
                className={`p-8 rounded-[24px] border ${gridCardColors[i % gridCardColors.length]} shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="mb-6 w-12 h-12 rounded-full bg-white text-[#1A73E8] flex items-center justify-center shadow-sm">
                    {f.icon}
                  </div>
                  <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-2">{f.title}</h3>
                  <p className="text-[#444746] leading-relaxed text-[15px]">{f.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </section>

      </div>
    </main>
  );
}