
"use client";

import React from "react";
import {
  Play,
  TrendingUp,
  Package,
  BarChart3,
  ArrowRight,
  Truck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Easing, type Variants } from "framer-motion";

const materialEasing: Easing = [0.2, 0, 0, 1];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: materialEasing,
    },
  },
};

const floatAnimation: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const features = [
  { label: "GST Invoicing", Icon: TrendingUp },
  { label: "Stock Management", Icon: Package },
  { label: "Staff Payroll", Icon: BarChart3 },
];

export default function Hero() {
  return (
    <header className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#F8F9FA] pb-32 pt-8">
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Hero content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex max-w-2xl flex-col items-start pt-10 text-left lg:pt-0"
          >
            <motion.div
              variants={fadeUpItem}
              className="mb-6 flex justify-start"
            >
              <span className="flex items-center gap-2 rounded-full border border-[#D2E3FC] bg-[#E8F0FE] px-4 py-1.5 text-[13px] font-medium text-[#1967D2]">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#1E8E3E]"
                />
                Aptro App Live for Indian SMEs
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpItem}
              className="mb-6 text-4xl font-normal leading-[1.1] tracking-tight text-[#1F1F1F] sm:text-5xl md:text-6xl"
            >
              Best GST Billing App for{" "}
              <span className="text-[#1A73E8]">
                Small Businesses
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="mb-10 max-w-lg text-[16px] font-normal leading-relaxed text-[#444746] md:text-[18px]"
            >
              Simplify your business with Aptro. Create GST invoices,
              manage inventory, track B2B orders and monitor payments
              from one easy-to-use business management app.
            </motion.p>

            {/* Calls to action */}
            <motion.div
              variants={fadeUpItem}
              className="z-20 mb-14 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
            >
              <Link
                href="/download"
                aria-label="Download the Aptro GST billing and business management app"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-6 py-3 text-[15px] font-medium text-white transition-all hover:bg-[#1557B0] hover:shadow-md sm:w-auto"
              >
                Get the App
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#demo"
                aria-label="See how Aptro simplifies GST billing and inventory management"
                className="group flex w-full items-center justify-center gap-2 rounded-full border border-[#DADCE0] bg-white px-6 py-3 text-[15px] font-medium text-[#1A73E8] transition-all hover:border-[#1A73E8] hover:bg-[#F8F9FA] sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F0FE]"
                >
                  <Play
                    size={12}
                    className="ml-0.5 text-[#1A73E8]"
                    fill="currentColor"
                  />
                </span>
                See How It Works
              </a>
            </motion.div>

            {/* Product features */}
            <motion.ul
              variants={fadeUpItem}
              aria-label="Aptro app features"
              className="m-0 flex list-none flex-wrap items-center gap-6 p-0 text-[13px] font-medium text-[#5F6368]"
            >
              {features.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon
                    size={18}
                    aria-hidden="true"
                    className="text-[#1A73E8]"
                  />
                  {label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* App dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: materialEasing,
              delay: 0.1,
            }}
            className="relative mt-12 flex w-full justify-center lg:mt-0 lg:justify-end"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-[#E8F0FE] lg:left-auto lg:right-4 lg:translate-x-0"
            />

            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="relative"
            >
              <div className="relative aspect-[9/19.5] w-[240px] overflow-hidden rounded-[36px] border-[8px] border-[#202124] bg-[#202124] shadow-lg sm:w-[300px]">
                <Image
                  src="/images/dashboard.png"
                  alt="Aptro app dashboard displaying business revenue, inventory alerts and GST invoicing"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, 300px"
                  className="object-cover"
                />
              </div>

              {/* Order notification */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: materialEasing,
                }}
                className="absolute -bottom-6 -left-6 z-20 flex min-w-[220px] items-center gap-4 rounded-[16px] border border-[#DADCE0] bg-white p-4 text-[#202124] shadow-md sm:-left-12"
              >
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F0FE] text-[#1A73E8]"
                >
                  <Truck size={20} />
                </div>

                <div className="pr-2">
                  <p className="mb-0.5 text-[14px] font-medium text-[#1F1F1F]">
                    B2B Order Shipped
                  </p>
                  <p className="text-[12px] text-[#5F6368]">
                    GST Invoice #18 Generated
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
