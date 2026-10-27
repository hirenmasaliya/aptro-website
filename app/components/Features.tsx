"use client";

import {
  ShoppingCart,
  FileText,
  BarChart3,
  Package,
  Users,
  Clock,
  Smartphone,
  FileCheck,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing, Variants } from "framer-motion";
import Image from "next/image";

const materialEasing: Easing = [0.2, 0, 0, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: materialEasing },
  },
};

// Grouped data to fit the Tree Diagram hierarchy
const treeData = [
  {
    category: "Finance & Sales",
    icon: BarChart3,
    items: [
      {
        title: "GST Billing",
        desc: "Create GST and non-GST invoices.",
        icon: FileText,
      },
      {
        title: "Invoices & Docs",
        desc: "Organize and share billing documents.",
        icon: FileCheck,
      },
      {
        title: "Sales Ledger",
        desc: "Track payments and outstanding balances.",
        icon: BarChart3,
      },
    ],
  },
  {
    category: "Core Operations",
    icon: Package,
    items: [
      {
        title: "Inventory",
        desc: "Organize products and stock movement.",
        icon: Package,
      },
      {
        title: "B2B Orders",
        desc: "Record and manage customer orders.",
        icon: ShoppingCart,
      },
      {
        title: "Account Access",
        desc: "Manage business records and permissions.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    category: "Management",
    icon: Users,
    items: [
      {
        title: "Staff Attendance",
        desc: "Organize team attendance records.",
        icon: Clock,
      },
      {
        title: "Payroll Records",
        desc: "Manage payroll and salary administration.",
        icon: Users,
      },
      {
        title: "Mobile & Web",
        desc: "Access business workflow on supported devices.",
        icon: Smartphone,
      },
    ],
  },
];

export default function FeaturesTree() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-[#F8F9FA] py-20 sm:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <motion.span
            variants={shouldReduceMotion ? undefined : fadeUpItem}
            className="mb-4 inline-flex rounded-full border border-[#D2E3FC] bg-[#E8F0FE] px-4 py-2 text-sm font-medium text-[#1967D2]"
          >
            Aptro Feature Ecosystem
          </motion.span>

          <motion.h2
            id="features-heading"
            variants={shouldReduceMotion ? undefined : fadeUpItem}
            className="mb-5 text-3xl font-normal leading-tight tracking-tight text-[#1F1F1F] sm:text-4xl lg:text-5xl"
          >
            A unified structure for your{" "}
            <span className="text-[#1A73E8]">business workflows.</span>
          </motion.h2>

          <motion.p
            variants={shouldReduceMotion ? undefined : fadeUpItem}
            className="mx-auto max-w-2xl text-base leading-7 text-[#5F6368] md:text-lg"
          >
            Everything connects seamlessly. Explore the hierarchy of tools Aptro
            brings together to simplify your daily operations and administration.
          </motion.p>
        </motion.div>

        {/* Tree Diagram Section */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="relative mx-auto max-w-5xl"
        >
          {/* Root Node */}
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeUpItem}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-[#AECBFA] bg-white px-8 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#1A73E8] text-white">
                <Image
                  src="/aptro_logo.png"
                  alt="Aptro Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold text-[#202124]">
                Aptro Platform
              </h3>
            </div>
            {/* Trunk down from Root */}
            <div className="hidden h-8 w-px bg-[#D2E3FC] lg:block"></div>
          </motion.div>

          {/* Branches Container */}
          <div className="relative mt-8 flex flex-col gap-12 lg:mt-0 lg:flex-row lg:gap-6 lg:justify-between">

            {/* Horizontal Line across the top of branches (Desktop only) */}
            <div className="absolute top-0 hidden h-px bg-[#D2E3FC] lg:block" style={{ left: '16.66%', right: '16.66%' }}></div>

            {treeData.map((branch, index) => {
              const BranchIcon = branch.icon;

              return (
                <motion.div
                  key={branch.category}
                  variants={shouldReduceMotion ? undefined : fadeUpItem}
                  className="relative flex flex-1 flex-col items-center lg:pt-0"
                >
                  {/* Stem down to category node (Desktop only) */}
                  <div className="hidden h-8 w-px bg-[#D2E3FC] lg:block"></div>

                  {/* Category Node */}
                  <div className="z-10 flex w-full max-w-[280px] items-center justify-center gap-2 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] px-6 py-3 shadow-sm lg:w-auto">
                    <BranchIcon size={18} className="text-[#1A73E8]" />
                    <span className="font-semibold text-[#3C4043]">
                      {branch.category}
                    </span>
                  </div>

                  {/* Sub-items folder-tree layout */}
                  <div className="relative mt-6 flex w-full max-w-[320px] flex-col gap-4 pl-8 lg:mt-8 lg:max-w-none lg:pl-10">
                    {/* Vertical connecting line for sub-items */}
                    <div className="absolute bottom-10 left-4 top-[-24px] w-px bg-[#D2E3FC] lg:left-5 lg:top-[-32px]"></div>

                    {branch.items.map((item) => {
                      const ItemIcon = item.icon;

                      return (
                        <div key={item.title} className="relative group w-full">
                          {/* Horizontal tick mark connecting the vertical line to the card */}
                          <div className="absolute left-[-16px] top-1/2 h-px w-4 -translate-y-1/2 bg-[#D2E3FC] transition-colors duration-300 group-hover:bg-[#1A73E8] lg:left-[-20px] lg:w-5"></div>

                          {/* Feature Card */}
                          <div className="relative flex items-start gap-4 rounded-xl border border-[#DADCE0] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#AECBFA] hover:shadow-md">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F0FE] text-[#1A73E8]">
                              <ItemIcon size={18} strokeWidth={2} />
                            </div>
                            <div>
                              <h4 className="mb-1 text-[15px] font-semibold text-[#202124]">
                                {item.title}
                              </h4>
                              <p className="text-sm leading-relaxed text-[#5F6368]">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}