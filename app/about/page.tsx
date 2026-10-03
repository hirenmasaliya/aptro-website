"use client";

import { 
  Heart, 
  Target, 
  ShieldCheck, 
  Eye, 
  Sparkles,
  MapPin,
  Smartphone,
  Rocket,
  ArrowRight,
  Globe,
  RefreshCw,
  Clock,
  Layers
} from "lucide-react";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Material Design Standard Easing
const materialEasing: Easing = [0.2, 0, 0, 1];

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const problems = [
  {
    title: "Data Fragmentation",
    desc: "Using one app for invoicing, a physical notebook for inventory, and WhatsApp for clients.",
    icon: <Layers size={24} />
  },
  {
    title: "Double Data Entry",
    desc: "Typing the same client info multiple times across platforms, leading to costly human errors.",
    icon: <RefreshCw size={24} />
  },
  {
    title: "Blind Spots",
    desc: "Lacking a single dashboard to show actual profitability, real-time stock, or pending payments.",
    icon: <Eye size={24} />
  },
  {
    title: "Time Drain",
    desc: "Spending 10-15 hours a week simply managing software and paperwork instead of growing.",
    icon: <Clock size={24} />
  }
];

const principles = [
  {
    title: "Keep it Simple",
    desc: "If a feature requires a user manual, it needs to be redesigned. Software should be intuitive from day one.",
    icon: <Heart size={24} />
  },
  {
    title: "Focus on Growth",
    desc: "Every tool we add must directly save our users time or help them generate more revenue.",
    icon: <Target size={24} />
  },
  {
    title: "Absolute Security",
    desc: "A business's data is its most valuable asset, and we protect it with uncompromising privacy standards.",
    icon: <ShieldCheck size={24} />
  }
];

const journeySteps = [
  {
    year: "2024",
    title: "Identifying the Bottleneck",
    desc: "Operating in the vibrant commercial hub of Jetpur, Gujarat, we noticed owners were bogged down by manual administrative work, piecing together 5 to 10 generic apps daily.",
    icon: <MapPin size={24} />
  },
  {
    year: "2025",
    title: "Building the Blueprint",
    desc: "Unable to find a reasonably priced all-in-one solution, we built our own internal tool. Operational errors dropped to zero, and we reclaimed hours of our time each week.",
    icon: <Smartphone size={24} />
  },
  {
    year: "2026",
    title: "Scaling the Solution",
    desc: "Realizing this problem extended globally, we rebuilt the tool from the ground up for public use. Aptro was launched with bank-level security and an intuitive interface.",
    icon: <Rocket size={24} />
  }
];

export default function AboutPage() {
  return (
    <main className={`min-h-screen pt-24 pb-32 text-[#202124] font-sans bg-[#F8F9FA] selection:bg-[#D3E3FD] selection:text-[#041E49] overflow-x-hidden relative ${jakarta.className}`}>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mb-24 md:mb-32 mt-8"
        >
          <motion.div 
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC] mb-6"
          >
            <Sparkles size={16} className="text-[#1A73E8]" /> Our Story
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-6 leading-[1.15] text-[#1F1F1F]"
          >
            Running a business is hard enough without <br className="hidden md:block" />
            <span className="text-[#1A73E8]">
              fighting your software.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-[16px] md:text-[18px] text-[#5F6368] leading-relaxed max-w-3xl"
          >
            We are a team of former shop owners, freelancers, and operators based in Jetpur, Gujarat. We grew tired of the administrative chaos that comes with scaling a company, so we built Aptro to be the single, unified operating system for your business.
          </motion.p>
        </motion.div>

        {/* --- The Problem Section --- */}
        <section className="mb-24 md:mb-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-[#1F1F1F]">The chaos we experienced first-hand.</h2>
            <p className="text-[16px] text-[#5F6368] leading-relaxed">
              Before Aptro, business owners were forced to act as human bridges between disconnected apps. This software fragmentation created critical bottlenecks that stifled growth.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {problems.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpItem}
                className="p-8 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-[#FCE8E6] text-[#D93025]">
                  {item.icon}
                </div>
                <h3 className="text-[18px] font-medium mb-3 text-[#1F1F1F]">{item.title}</h3>
                <p className="text-[#5F6368] text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- The Journey Section --- */}
        <section className="mb-24 md:mb-32">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -24 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: materialEasing }}
              className="lg:w-1/3 lg:sticky lg:top-32"
            >
              <h2 className="text-3xl md:text-4xl font-normal text-[#1F1F1F] mb-4 leading-tight">
                From local frustration to <br /><span className="text-[#1A73E8]">global solution.</span>
              </h2>
              <p className="text-[#5F6368] leading-relaxed text-[16px] mb-8">
                We couldn't find a reasonably priced, all-in-one solution that didn't require a steep learning curve. So we decided to build it ourselves.
              </p>
            </motion.div>

            <div className="lg:w-2/3 relative">
              {/* Google Style Timeline Line */}
              <div className="absolute top-0 bottom-0 left-[23px] w-[2px] bg-[#DADCE0] hidden md:block" />
              
              <div className="space-y-8">
                {journeySteps.map((step, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 24 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, margin: "-50px" }} 
                    transition={{ duration: 0.5, delay: i * 0.1, ease: materialEasing }}
                    key={i} 
                    className="relative pl-0 md:pl-20"
                  >
                    {/* Timeline Node */}
                    <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 bg-white rounded-full border-2 border-[#1A73E8] items-center justify-center z-10 text-[#1A73E8]">
                      {step.icon}
                    </div>
                    
                    <div className="p-8 md:p-10 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow group">
                      <span className="inline-block px-3 py-1 bg-[#E8F0FE] text-[#1967D2] rounded-full text-[12px] font-medium uppercase tracking-wider mb-5">
                        {step.year}
                      </span>
                      <h3 className="text-[22px] font-medium text-[#1F1F1F] mb-3 group-hover:text-[#1A73E8] transition-colors">{step.title}</h3>
                      <p className="text-[#444746] leading-relaxed text-[15px]">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Philosophy & Vision Section --- */}
        <section className="py-20 border-t border-[#DADCE0] mb-24 md:mb-32">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-normal mb-4 text-[#1F1F1F]">Our Guiding Principles</h2>
            <p className="text-[#5F6368] leading-relaxed text-[16px]">
              We believe software should work for you, not the other way around. By 2028, our goal is to empower one million business owners to transition from managing administrative chaos to actively growing their enterprises.
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {principles.map((v, i) => (
              <motion.div 
                key={i}
                variants={fadeUpItem}
                className="p-8 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6 w-14 h-14 bg-[#E8F0FE] rounded-full flex items-center justify-center text-[#1A73E8]">
                  {v.icon}
                </div>
                <h3 className="text-[20px] font-medium text-[#1F1F1F] mb-3">{v.title}</h3>
                <p className="text-[#444746] text-[15px] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- CTA SECTION (Material Card) --- */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: materialEasing }}
            className="relative px-8 py-16 lg:p-20 rounded-[32px] bg-white border border-[#DADCE0] text-center shadow-sm"
          >
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-[#E8F0FE] rounded-full flex items-center justify-center mb-6 text-[#1A73E8]">
                <Globe size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-normal mb-4 text-[#1F1F1F]">
                Ready to reclaim <span className="text-[#1A73E8]">your time?</span>
              </h2>
              <p className="text-[#5F6368] text-[16px] mb-10 leading-relaxed max-w-lg">
                Stop acting as a human bridge between your apps. Join the network of business owners scaling with Aptro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1A73E8] text-white rounded-full font-medium text-[15px] transition-colors hover:bg-[#1557B0] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
                >
                  Start For Free
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#DADCE0] text-[#1A73E8] hover:bg-[#F8F9FA] rounded-full font-medium text-[15px] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
                >
                  Talk to Founders
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        
      </div>
    </main>
  );
}