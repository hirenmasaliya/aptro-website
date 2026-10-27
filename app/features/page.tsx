
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Smartphone,
  Layers,
  Users,
  ArrowRight,
  CheckCircle2,
  User,
  Building2,
  Globe,
  Zap,
  BarChart3,
  Lock,
  Package,
  Calculator,
  ClipboardList,
  Wallet,
  Receipt,
  CheckSquare,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Easing, Variants } from "framer-motion";

const materialEasing: Easing = [0.2, 0, 0, 1];

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: materialEasing },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const roleContent = {
  business: {
    badge: "For Shop Owners & Small Businesses",
    title: "Simplify your everyday business operations.",
    desc: "Manage GST billing, inventory, customer orders, and business records in one place with Aptro.",
    spotlight: [
      {
        title: "GST Billing & Invoicing",
        desc: "Create professional GST and non-GST invoices, organize billing records, and share invoice documents with your customers.",
        icon: Calculator,
        details: [
          "Create GST and non-GST invoices",
          "Manage invoice records",
          "Share or download invoices",
        ],
        image: "/images/gst.png",
        altText: "Aptro GST billing interface displaying invoice details",
        bgClass: "bg-[#F0F7FF] border-[#D6E6FF]",
      },
      {
        title: "Inventory & Stock Management",
        desc: "Organize your product catalogue, record stock movements, and keep product information easier to manage.",
        icon: Package,
        details: [
          "Manage product information",
          "Track stock movements",
          "Organize inventory records",
        ],
        image: "/images/stock.png",
        altText: "Aptro inventory management interface showing product stock",
        bgClass: "bg-[#F0FDF4] border-[#DCFCE7]",
      },
      {
        title: "Staff Attendance & Payroll",
        desc: "Keep employee information and attendance records organized alongside your daily business operations.",
        icon: ClipboardList,
        details: [
          "Manage staff information",
          "Maintain attendance records",
          "Organize payroll information",
        ],
        image: "/images/payroll.png",
        altText: "Aptro staff management interface showing payroll information",
        bgClass: "bg-[#F5F3FF] border-[#EDE9FE]",
      },
      {
        title: "B2B Orders & Vendor Management",
        desc: "Keep customer and supplier details organized, manage order records, and follow outstanding business payments.",
        icon: Users,
        details: [
          "Organize customer and vendor records",
          "Track pending payments",
          "Manage business orders",
        ],
        image: "/images/customer.png",
        altText: "Aptro customer and vendor management interface",
        bgClass: "bg-[#FFF9F0] border-[#FFEDD5]",
      },
    ],
  },
  freelancer: {
    badge: "For Freelancers & Independent Professionals",
    title: "Keep your freelance work organized.",
    desc: "Manage client billing, payment records, and customer information with practical tools for everyday work.",
    spotlight: [
      {
        title: "Invoice & Estimate Management",
        desc: "Prepare professional invoices and estimates for clients and keep your billing documents organized.",
        icon: Receipt,
        details: [
          "Organize client invoices",
          "Maintain billing records",
          "Share invoice documents",
        ],
        image: "/images/invoice.png",
        altText: "Aptro invoice interface displaying a customer billing document",
        bgClass: "bg-[#F0F7FF] border-[#D6E6FF]",
      },
      {
        title: "Income & Payment Tracking",
        desc: "Record customer payments, review outstanding balances, and keep your financial records organized.",
        icon: Wallet,
        details: [
          "Maintain payment records",
          "Review pending client dues",
          "Organize customer balances",
        ],
        image: "/images/payments.png",
        altText: "Aptro payment management interface showing payment records",
        bgClass: "bg-[#F0FDF4] border-[#DCFCE7]",
      },
      {
        title: "Business Overview",
        desc: "Keep important business information and customer records accessible from your business dashboard.",
        icon: BarChart3,
        details: [
          "Review business records",
          "Organize customer details",
          "Access key information",
        ],
        image: "/images/dashboard.png",
        altText: "Aptro dashboard displaying business information",
        bgClass: "bg-[#F5F3FF] border-[#EDE9FE]",
      },
      {
        title: "Task & Notes Organization",
        desc: "Keep useful notes, customer requirements, and everyday task information organized in your workflow.",
        icon: CheckSquare,
        details: [
          "Organize daily tasks",
          "Keep important notes",
          "Maintain customer information",
        ],
        image: "/images/tasks.png",
        altText: "Aptro task interface displaying organized work information",
        bgClass: "bg-[#FFF9F0] border-[#FFEDD5]",
      },
    ],
  },
};

const commonFeatures = [
  {
    title: "Business Data Access",
    icon: Lock,
    desc: "Use your account to access the business information and records available to you.",
  },
  {
    title: "Mobile & Web Access",
    icon: Smartphone,
    desc: "Access Aptro through its supported mobile and web experiences for your business workflow.",
  },
  {
    title: "Business Reporting",
    icon: BarChart3,
    desc: "Keep sales, inventory, and payment records organized to help review your business activity.",
  },
  {
    title: "Customer & Vendor Records",
    icon: Users,
    desc: "Keep customer and supplier details organized alongside your orders and payment records.",
  },
  {
    title: "Billing & Tax Tools",
    icon: Calculator,
    desc: "Manage supported GST and non-GST billing workflows and maintain invoice records.",
  },
  {
    title: "Business Document Sharing",
    icon: ShieldCheck,
    desc: "Share supported invoice documents with customers to make everyday business communication easier.",
  },
];

const gridCardColors = [
  "bg-[#F8FAFC] border-[#E2E8F0]",
  "bg-[#F0FDFA] border-[#CCFBF1]",
  "bg-[#FFF7ED] border-[#FFEDD4]",
  "bg-[#EFF6FF] border-[#DBEAFE]",
  "bg-[#FDF4FF] border-[#FAE8FF]",
  "bg-[#F0FDF4] border-[#DCFCE7]",
];

export default function FeaturesPage() {
  const [role, setRole] = useState<"business" | "freelancer">("business");
  const shouldReduceMotion = useReducedMotion();
  const activeContent = roleContent[role];

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.5, ease: materialEasing },
      };

  return (
    <main className="relative min-h-screen bg-white pb-24 pt-24 font-sans text-[#202124] selection:bg-[#D3E3FD] selection:text-[#041E49] sm:pb-32">
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-6">
        {/* Page header */}
        <header className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center sm:mb-20">
          <motion.div
            {...(shouldReduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: -8 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.4, ease: materialEasing },
                })}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D2E3FC] bg-[#E8F0FE] px-4 py-2 text-[13px] font-medium text-[#1967D2]"
          >
            <Sparkles size={15} aria-hidden="true" />
            Explore Aptro Features
          </motion.div>

          <motion.h1
            {...reveal}
            className="mb-6 text-4xl font-normal leading-[1.1] tracking-tight text-[#1F1F1F] sm:text-5xl md:text-6xl"
          >
            GST billing & business tools for{" "}
            <span className="text-[#1A73E8]">growing businesses.</span>
          </motion.h1>

          <motion.p
            {...reveal}
            className="mb-8 max-w-2xl text-base leading-7 text-[#5F6368] md:text-lg"
          >
            Discover how Aptro helps organize GST invoices, inventory,
            customer orders, and everyday business records in one app.
          </motion.p>

          {/* Accessible category selector */}
          <div
            role="group"
            aria-label="Choose the type of business"
            className="inline-flex max-w-full rounded-full border border-[#DADCE0] bg-[#F8F9FA] p-1"
          >
            {(["business", "freelancer"] as const).map((tab) => {
              const isSelected = role === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setRole(tab)}
                  aria-pressed={isSelected}
                  className={`relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2 sm:px-6 ${
                    isSelected
                      ? "bg-[#D3E3FD] text-[#041E49] shadow-sm"
                      : "text-[#5F6368] hover:text-[#202124]"
                  }`}
                >
                  {tab === "business" ? (
                    <Building2 size={17} aria-hidden="true" />
                  ) : (
                    <User size={17} aria-hidden="true" />
                  )}
                  {tab === "business" ? "Shop / MSME" : "Freelancer"}
                </button>
              );
            })}
          </div>
        </header>

        {/* Main feature showcase */}
        <section
          aria-labelledby="spotlight-heading"
          className="mb-24 sm:mb-32"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={role}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 12 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.3, ease: materialEasing }
              }
              className="flex flex-col gap-10 sm:gap-12"
            >
              <div className="mx-auto mb-2 max-w-2xl text-center">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-[#1A73E8] sm:text-sm">
                  {activeContent.badge}
                </span>

                <h2
                  id="spotlight-heading"
                  className="mb-4 text-2xl font-normal leading-tight tracking-tight text-[#1F1F1F] sm:text-3xl md:text-4xl"
                >
                  {activeContent.title}
                </h2>

                <p className="text-base leading-7 text-[#5F6368]">
                  {activeContent.desc}
                </p>
              </div>

              <ul className="m-0 flex list-none flex-col gap-8 p-0 sm:gap-10">
                {activeContent.spotlight.map((feature, index) => {
                  const Icon = feature.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.li
                      key={`${role}-${feature.title}`}
                      {...reveal}
                      className={`flex flex-col items-center gap-8 rounded-3xl border p-5 sm:gap-10 sm:p-8 lg:gap-16 lg:p-12 ${
                        feature.bgClass
                      } ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    >
                      {/* Feature description */}
                      <div className="flex w-full flex-1 flex-col items-start">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1A73E8] shadow-sm">
                          <Icon size={24} aria-hidden="true" />
                        </div>

                        <h3 className="mb-4 text-2xl font-normal leading-tight tracking-tight text-[#1F1F1F] sm:text-3xl">
                          {feature.title}
                        </h3>

                        <p className="mb-5 max-w-xl text-[15px] leading-7 text-[#5F6368] sm:text-base">
                          {feature.desc}
                        </p>

                        <ul className="m-0 flex w-full list-none flex-col gap-3 p-0">
                          {feature.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex w-fit max-w-full items-start gap-3 rounded-xl border border-white/80 bg-white/80 px-3 py-3 text-sm leading-6 text-[#303134] sm:px-4"
                            >
                              <CheckCircle2
                                size={18}
                                className="mt-1 shrink-0 text-[#188038]"
                                aria-hidden="true"
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* App screenshot */}
                      <div className="flex w-full flex-1 items-center justify-center py-2">
                        <div className="relative w-[220px] max-w-full overflow-hidden rounded-[39px] border-[5px] border-[#202124] bg-white shadow-xl sm:w-[260px] lg:w-[280px]">
                          <div className="relative aspect-[10/22]">
                            <Image
                              src={feature.image}
                              alt={feature.altText}
                              fill
                              sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Shared benefits */}
        <section aria-labelledby="benefits-heading" className="pt-4 sm:pt-8">
          <motion.div
            {...reveal}
            className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
          >
            <span className="mb-3 block text-sm font-medium text-[#1A73E8]">
              Designed for everyday work
            </span>

            <h2
              id="benefits-heading"
              className="mb-4 text-2xl font-normal tracking-tight text-[#1F1F1F] sm:text-3xl md:text-4xl"
            >
              More ways to manage your business with Aptro
            </h2>

            <p className="text-base leading-7 text-[#5F6368]">
              Keep your billing, customer information, stock records, and
              business workflows organized with tools that support your daily
              operations.
            </p>
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {commonFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.li
                  key={feature.title}
                  variants={shouldReduceMotion ? undefined : fadeUpItem}
                  className={`flex h-full flex-col rounded-3xl border p-6 transition-shadow duration-200 hover:shadow-md sm:p-8 ${
                    gridCardColors[index % gridCardColors.length]
                  }`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1A73E8] shadow-sm">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <h3 className="mb-3 text-lg font-medium text-[#202124]">
                    {feature.title}
                  </h3>

                  <p className="text-[15px] leading-7 text-[#5F6368]">
                    {feature.desc}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>
        </section>

        {/* Final CTA */}
        <section
          aria-labelledby="features-cta-heading"
          className="mt-20 sm:mt-28"
        >
          <div className="rounded-3xl border border-[#DADCE0] bg-[#F8F9FA] px-5 py-12 text-center sm:px-10 sm:py-16">
            <h2
              id="features-cta-heading"
              className="mx-auto mb-4 max-w-2xl text-2xl font-normal tracking-tight text-[#202124] sm:text-3xl md:text-4xl"
            >
              Ready to simplify your business management?
            </h2>

            <p className="mx-auto mb-7 max-w-xl text-base leading-7 text-[#5F6368]">
              Explore Aptro and discover a simpler way to manage your billing,
              inventory, and business orders.
            </p>

            <Link
              href="/download"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1557B0] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#AECBFA]"
            >
              Get Aptro
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
