
"use client";

import Features from "./components/Features";
import Hero from "./components/Hero";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Lock,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing, Variants } from "framer-motion";

const materialEasing: Easing = [0.2, 0, 0, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: materialEasing,
    },
  },
};

const floatingAnimation: Variants = {
  animate: {
    y: [0, -7, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const businessFeatures = [
  {
    title: "GST Billing and Sales Tracking",
    description:
      "Create GST and non-GST invoices, manage customer bills, and track sales and outstanding payments in one place.",
  },
  {
    title: "Inventory and Stock Management",
    description:
      "Manage product details, monitor stock levels, and keep your inventory organized as your business grows.",
  },
  {
    title: "B2B Orders and Business Operations",
    description:
      "Organize customer orders, monitor order progress, and keep important business information easier to access.",
  },
  {
    title: "Staff and Attendance Management",
    description:
      "Manage staff information, attendance, and payroll-related tasks alongside your everyday business operations.",
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.55, ease: materialEasing },
      };

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#F8F9FA] font-sans text-[#202124] selection:bg-[#D3E3FD] selection:text-[#041E49]">
      <div className="relative z-10 pt-16">
        {/* Hero: Keep the primary H1 inside the Hero component */}
        <Hero />

        <div className="flex flex-col gap-y-20 pb-24 md:gap-y-28 md:pb-32">
          {/* Core features */}
          <Features />

          {/* Business management showcase */}
          <section
            aria-labelledby="showcase-heading"
            className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-6 md:py-12"
          >
            <motion.div
              {...reveal}
              className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center md:mb-16"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D2E3FC] bg-[#E8F0FE] px-4 py-2 text-sm font-medium text-[#1967D2]">
                <Zap size={16} aria-hidden="true" />
                One app for everyday business tasks
              </span>

              <h2
                id="showcase-heading"
                className="mb-5 text-3xl font-normal leading-tight tracking-tight text-[#1F1F1F] sm:text-4xl lg:text-5xl"
              >
                GST billing and{" "}
                <span className="text-[#1A73E8]">
                  business management
                </span>{" "}
                made simpler.
              </h2>

              <p className="max-w-2xl text-base leading-7 text-[#5F6368] md:text-lg">
                Aptro brings invoicing, inventory, customer orders, and
                business operations together in one app designed for
                Indian small businesses.
              </p>
            </motion.div>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Product image */}
              <motion.div
                {...reveal}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#DADCE0] bg-white shadow-sm"
              >
                <Image
                  src="/images/everything.png"
                  alt="Aptro business management app interface for billing, inventory, and order management"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-3 sm:p-5"
                />
              </motion.div>

              {/* Feature list */}
              <motion.ul
                variants={containerVariants}
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="m-0 flex list-none flex-col gap-7 p-0 md:gap-8"
              >
                {businessFeatures.map((feature) => (
                  <motion.li
                    key={feature.title}
                    variants={shouldReduceMotion ? undefined : itemVariants}
                    className="flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE]">
                      <CheckCircle2
                        size={21}
                        className="text-[#1A73E8]"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="mb-2 text-lg font-medium text-[#202124]">
                        {feature.title}
                      </h3>
                      <p className="text-[15px] leading-7 text-[#5F6368]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </section>

          {/* Conversion CTA */}
          <section
            aria-labelledby="cta-heading"
            className="mx-auto w-full max-w-[1280px] px-4 sm:px-6"
          >
            <motion.div
              {...reveal}
              className="relative isolate overflow-hidden rounded-[28px] border border-[#DADCE0] bg-white shadow-sm sm:rounded-[32px]"
            >
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#E8F0FE]/70 via-white to-[#F8F9FA]"
              />

              {/* Left decorative card */}
              <motion.div
                variants={floatingAnimation}
                animate={shouldReduceMotion ? undefined : "animate"}
                className="absolute -left-3 top-14 hidden items-center gap-3 rounded-2xl border border-[#DADCE0] bg-white p-4 shadow-md xl:flex"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F0FE] text-[#1A73E8]">
                  <TrendingUp size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#202124]">
                    Sales tracking
                  </p>
                  <p className="mt-1 text-xs text-[#5F6368]">
                    Keep sales organized
                  </p>
                </div>
              </motion.div>

              {/* Right decorative card */}
              <motion.div
                variants={floatingAnimation}
                animate={shouldReduceMotion ? undefined : "animate"}
                className="absolute -right-3 bottom-16 hidden items-center gap-3 rounded-2xl border border-[#DADCE0] bg-white p-4 shadow-md xl:flex"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F4EA] text-[#188038]">
                  <ClipboardList size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#202124]">
                    Order management
                  </p>
                  <p className="mt-1 text-xs text-[#5F6368]">
                    Organize business orders
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-16 text-center sm:px-10 sm:py-20 md:py-24 lg:px-20"
              >
                <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
                  <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D2E3FC] bg-[#E8F0FE] px-4 py-2 text-[13px] font-medium text-[#1967D2]">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-[#188038]"
                    />
                    Built for Indian small businesses
                  </span>
                </motion.div>

                <motion.h2
                  id="cta-heading"
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  className="mb-6 text-3xl font-normal leading-tight tracking-tight text-[#202124] sm:text-4xl md:text-5xl lg:text-6xl"
                >
                  Spend less time on paperwork.
                  <span className="mt-2 block text-[#1A73E8]">
                    Focus on growing your business.
                  </span>
                </motion.h2>

                <motion.p
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  className="mb-9 max-w-2xl text-base leading-7 text-[#5F6368] md:text-lg"
                >
                  Simplify GST billing, manage stock, organize orders, and
                  keep your business information accessible with Aptro.
                </motion.p>

                {/* Action buttons */}
                <motion.div
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
                >
                  <Link
                    href="/download"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#1557B0] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#AECBFA] sm:w-auto"
                  >
                    Get Aptro
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/demo"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#DADCE0] bg-white px-7 py-4 text-[15px] font-medium text-[#1967D2] transition-colors hover:border-[#1A73E8] hover:bg-[#F8F9FA] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#AECBFA] sm:w-auto"
                  >
                    Explore the Demo
                  </Link>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  className="mt-12 flex w-full max-w-2xl flex-col items-center justify-center gap-5 border-t border-[#DADCE0] pt-8 sm:flex-row sm:flex-wrap sm:gap-x-8"
                >
                  <div className="flex items-center gap-2 text-sm text-[#5F6368]">
                    <ShieldCheck
                      size={18}
                      className="text-[#1A73E8]"
                      aria-hidden="true"
                    />
                    GST invoicing tools
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#5F6368]">
                    <Zap
                      size={18}
                      className="text-[#1A73E8]"
                      aria-hidden="true"
                    />
                    Business tools in one app
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#5F6368]">
                    <Lock
                      size={18}
                      className="text-[#1A73E8]"
                      aria-hidden="true"
                    />
                    Account-based access
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#5F6368]">
                    <Users
                      size={18}
                      className="text-[#1A73E8]"
                      aria-hidden="true"
                    />
                    For growing businesses
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  );
}
