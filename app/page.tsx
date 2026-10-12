"use client";

import Features from "./components/Features";
import Hero from "./components/Hero";
import { ArrowRight, ShieldCheck, Zap, Lock, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Easing, motion, Variants } from "framer-motion";

// Material Design standard easing
const materialEasing: Easing = [0.2, 0, 0, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } },
};

const floatingAnimation: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
} as const;

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F8F9FA] text-[#202124] selection:bg-[#D3E3FD] selection:text-[#041E49] overflow-x-hidden font-sans">
      
      <div className="relative z-10 pt-16">
        <Hero />

        <div className="flex flex-col gap-y-24 pb-32">
          <Features />

          {/* --- PRODUCT SHOWCASE SECTION --- */}
          {/* SEO Fix 1: Added aria-labelledby to connect the section to its heading for screen readers & search bots */}
          <section aria-labelledby="showcase-heading" className="max-w-[1280px] mx-auto px-6 w-full py-12">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: materialEasing }}
              className="flex flex-col items-center text-center mb-16"
            >
              {/* SEO Fix 2: Optimized H2 with high-value keyword "business management software" */}
              <h2 id="showcase-heading" className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4 text-[#1F1F1F]">
                Complete <span className="text-[#1A73E8]">business management software.</span>
              </h2>
              {/* SEO Fix 3: Injected core features into the description paragraph */}
              <p className="text-[#444746] max-w-2xl text-[16px] md:text-[18px]">
                Stop switching between multiple apps. Aptro brings your GST billing, staff payroll, and inventory tracking together on one simple dashboard.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Container - Material Card Style */}
              <motion.div 
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: materialEasing }}
                className="relative rounded-[24px] overflow-hidden aspect-[4/3] flex items-center justify-center bg-white border border-[#DADCE0] shadow-sm"
              >
                <Image 
                  src="/images/everything.png" 
                  // SEO Fix 4: Descriptive Alt Text using target keywords
                  alt="Aptro business management app dashboard showing live sales, GST billing, and inventory tracking" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>

              {/* Contextual Features - Simple English & SEO Optimized */}
              {/* SEO Fix 5: Changed from div to a semantic unordered list (ul) */}
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-8 list-none m-0 p-0"
              >
                {[
                  { 
                    title: "GST Billing & Sales Tracking", 
                    desc: "See daily revenue, pending payments, and generate digital khata entries instantly from the start screen." 
                  },
                  { 
                    title: "Staff Payroll & Attendance", 
                    desc: "Track employee check-ins and process salary payments with a single tap. No complex math required." 
                  },
                  { 
                    title: "B2B Order & Inventory Management", 
                    desc: "Keep an accurate count of your stock, monitor deliveries, and never miss a B2B order update." 
                  }
                ].map((feature, idx) => (
                  // SEO Fix 6: Changed from div to li
                  <motion.li key={idx} variants={itemVariants} className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-[#E8F0FE] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} className="text-[#1A73E8]" aria-hidden="true" />
                    </div>
                    <div>
                      {/* SEO Fix 7: Used H3 for proper document outline under the section's H2 */}
                      <h3 className="text-[18px] font-medium mb-1 text-[#1F1F1F]">{feature.title}</h3>
                      <p className="text-[#444746] leading-relaxed text-[15px]">{feature.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </section>

          {/* --- CTA SECTION (Google Card Style) --- */}
          <section aria-labelledby="cta-heading" className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full pt-12 pb-24">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: materialEasing }}
              className="relative bg-white border border-[#DADCE0] shadow-sm rounded-[32px] overflow-visible group"
            >
              {/* Soft background tint */}
              <div className="absolute inset-0 bg-[#F8F9FA]/50 rounded-[32px] pointer-events-none" />

              {/* Floating Widget 1 - Left */}
              <motion.div 
                variants={floatingAnimation}
                animate="animate"
                className="hidden xl:flex absolute -left-8 top-16 z-20 items-center gap-4 p-4 pr-6 rounded-[16px] bg-white border border-[#DADCE0] shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-[#E6F4EA] flex items-center justify-center text-[#1E8E3E]">
                  <TrendingUp size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[12px] text-[#5F6368] font-medium uppercase tracking-wider mb-0.5">Sales Growth</p>
                  <p className="text-[16px] font-medium text-[#1F1F1F]">+14.2% <span className="text-[#5F6368] text-[13px] font-normal ml-1">this month</span></p>
                </div>
              </motion.div>

              {/* Floating Widget 2 - Right */}
              <motion.div 
                variants={floatingAnimation}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="hidden xl:flex absolute -right-8 bottom-24 z-20 items-center gap-4 p-4 pr-6 rounded-[16px] bg-white border border-[#DADCE0] shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8]">
                  <Users size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[12px] text-[#5F6368] font-medium uppercase tracking-wider mb-0.5">Staff Pay</p>
                  <p className="text-[16px] font-medium text-[#1F1F1F]">Cleared <span className="text-[#1E8E3E] text-[13px] font-normal ml-1">✓ Done</span></p>
                </div>
              </motion.div>

              <motion.div 
                className="relative z-10 px-6 py-20 md:py-24 lg:px-24 text-center flex flex-col items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Status Badge */}
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium mb-8 border border-[#D2E3FC]">
                    <span className="w-2 h-2 rounded-full bg-[#1E8E3E]"></span>
                    The #1 Business App for Android & iOS
                  </div>
                </motion.div>

                {/* SEO Fix 8: Added ID for accessibility and injected 'billing & management app' keyword */}
                <motion.h2 id="cta-heading" variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-normal mb-6 text-[#1F1F1F] leading-[1.1] max-w-3xl">
                  Grow your business with the <br className="hidden md:block" />
                  <span className="text-[#1A73E8]">best management app.</span>
                </motion.h2>

                {/* SEO Fix 9: Injected "SMEs" and "digital khata" into the final pitch */}
                <motion.p variants={itemVariants} className="text-[#444746] text-[16px] md:text-[18px] mb-12 max-w-2xl leading-relaxed">
                  Aptro is the ultimate digital khata and billing tool for Indian SMEs. Join smart business owners who are automating their operations today.
                </motion.p>

                {/* Simple Button Group */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                  
                  {/* Primary Button */}
                  <Link
                    href="/download"
                    aria-label="Download the Aptro app for free"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#1A73E8] text-white rounded-full font-medium text-[15px] transition-colors hover:bg-[#1557B0] hover:shadow-md flex items-center justify-center gap-2 group"
                  >
                    Download the App
                    <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  
                  {/* Secondary Button */}
                  <Link
                    href="/demo"
                    aria-label="Watch a video demo of Aptro features"
                    className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#DADCE0] text-[#1A73E8] rounded-full font-medium text-[15px] transition-colors hover:bg-[#F8F9FA] hover:border-[#1A73E8] flex items-center justify-center gap-2"
                  >
                    Watch a Video
                  </Link>
                  
                </motion.div>

                {/* Plain English Trust Indicators */}
                <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-[#DADCE0] flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 w-full max-w-2xl">
                  <div className="flex items-center gap-2 text-[14px] text-[#5F6368] font-medium">
                    <ShieldCheck size={18} aria-hidden="true" className="text-[#1A73E8]" /> GST Compliant
                  </div>
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#DADCE0]" aria-hidden="true" />
                  <div className="flex items-center gap-2 text-[14px] text-[#5F6368] font-medium">
                    <Zap size={18} aria-hidden="true" className="text-[#1A73E8]" /> Auto Cloud Sync
                  </div>
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#DADCE0]" aria-hidden="true" />
                  <div className="flex items-center gap-2 text-[14px] text-[#5F6368] font-medium">
                    <Lock size={18} aria-hidden="true" className="text-[#1A73E8]" /> 100% Private Data
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