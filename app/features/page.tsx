"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck, Smartphone, Layers, Users,
  ArrowRight, CheckCircle2, User, Building2, Briefcase, Globe, Zap,
  BarChart3, Lock, Package, Calculator, ClipboardList,
  Wallet, Receipt, CheckSquare, Sparkles
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Smooth continuous easing
const appleEase = [0.16, 1, 0.3, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: appleEase } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

// Simplified, easy-to-understand text & Mobile Image Paths
const roleContent = {
  freelancer: {
    badge: "Solo Worker",
    title: "Perfect for independent workers.",
    desc: "Everything you need to run your daily work easily, so you can spend less time on paperwork and more time earning.",
    spotlight: [
      {
        title: "Easy Dashboard",
        desc: "See your whole business at a glance. Manage your clients and track your ongoing projects without getting confused.",
        icon: <BarChart3 className="w-5 h-5" />,
        details: ["Live Daily Updates", "Track Project Progress", "Client Contact List"],
        image: "/images/dashboard.png", // Replace with your portrait mobile screenshot
      },
      {
        title: "Quick Bills & Quotes",
        desc: "Create professional bills for your customers in seconds. Send them quickly to get paid faster.",
        icon: <Receipt className="w-5 h-5" />,
        details: ["Make Quotes Instantly", "One-Click PDF Bills", "Easy Tax Setup"],
        image: "/images/invoice.png", // Replace with your portrait mobile screenshot
      },
      {
        title: "Track Your Money",
        desc: "Keep a clear record of who paid you and who still owes you money, so nothing slips through the cracks.",
        icon: <Wallet className="w-5 h-5" />,
        details: ["Payment History", "Add Money In/Out", "See Total Balance"],
        image: "/images/payments.png", // Replace with your portrait mobile screenshot
      },
      {
        title: "To-Do Lists & Notes",
        desc: "Write down important notes and manage your daily tasks in one simple place on your phone.",
        icon: <CheckSquare className="w-5 h-5" />,
        details: ["Daily Task List", "Save Important Notes"],
        image: "/images/tasks.png", // Replace with your portrait mobile screenshot
      }
    ]
  },
  business: {
    badge: "Growing Business",
    title: "Manage your entire shop or business.",
    desc: "A complete mobile system to track your stock, manage your staff's salary, and automatically calculate your taxes.",
    spotlight: [
      {
        title: "Live Stock Tracking",
        desc: "Always know what's in your shop. Get a quick alert on your phone when an item is running low so you never run out of stock.",
        icon: <Package className="w-5 h-5" />,
        details: ["Live Item Count", "Low Stock Alerts", "Easy Add/Remove"],
        image: "/images/stock.png", // Replace with your portrait mobile screenshot
      },
      {
        title: "Customer & Supplier List",
        desc: "Keep all your customer and supplier phone numbers and details safely in one place, backed up automatically.",
        icon: <Users className="w-5 h-5" />,
        details: ["Separate Buyers & Sellers", "Full History Backup"],
        image: "/images/customer.png", // Replace with your portrait mobile screenshot
      },
      {
        title: "Easy Tax & GST Reports",
        desc: "Automatically calculate your taxes and generate GST-ready reports without the math headache.",
        icon: <Calculator className="w-5 h-5" />,
        details: ["Ready for GST", "Automatic Monthly Reports"],
        image: "/images/gst.png", // Replace with your portrait mobile screenshot
      },
      {
        title: "Staff Attendance & Salary",
        desc: "Track your staff's daily attendance easily and let the app calculate their monthly salary automatically.",
        icon: <ClipboardList className="w-5 h-5" />,
        details: ["Daily Present/Absent", "Automatic Salary Math"],
        image: "/images/payroll.png", // Replace with your portrait mobile screenshot
      }
    ]
  }
};

const commonFeatures = [
  { title: "Safe & Secure", icon: <Lock size={18} />, desc: "Your data is locked with bank-level security so only you can access it." },
  { title: "Works Everywhere", icon: <Smartphone size={18} />, desc: "Use it on your phone, tablet, or computer. Everything updates instantly." },
  { title: "Multi-Currency", icon: <Globe size={18} />, desc: "Accept payments and track bills in different currencies easily." },
  { title: "Easy Connections", icon: <Layers size={18} />, desc: "Connects smoothly with other tools you already use for your business." },
  { title: "Instant Updates", icon: <Zap size={18} />, desc: "If you change something on your phone, it shows up on your computer instantly." },
  { title: "24/7 Support", icon: <Briefcase size={18} />, desc: "Our team is always here to help you if you ever get stuck or need help." },
];

export default function FeaturesPage() {
  const [role, setRole] = useState<"freelancer" | "business">("freelancer");
  const activeContent = roleContent[role];

  return (
    <main className={`min-h-screen pt-36 pb-32 text-zinc-950 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative tracking-tight ${jakarta.className}`}>

      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#FAFAFA]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#FAFAFA]/80 to-[#FAFAFA]" />
        <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-blue-400/5 blur-[140px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Header & Switcher --- */}
        <section className="max-w-4xl mx-auto mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: appleEase }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-blue-600 text-xs font-semibold tracking-wider uppercase border border-zinc-200/80 mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
          >
            <Sparkles size={12} className="text-blue-500" />
            Capabilities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.05 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter mb-8 leading-[1.02] text-zinc-900"
          >
            Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-blue-950 to-blue-600">
              everyday business.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: appleEase, delay: 0.12 }}
            className="inline-flex p-1 bg-zinc-200/60 backdrop-blur-xl rounded-full border border-zinc-200/40 shadow-inner"
          >
            {(["freelancer", "business"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setRole(tab)}
                className={`relative flex items-center gap-2 px-7 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors z-10 ${
                  role === tab ? "text-blue-600" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {role === tab && (
                  <motion.div
                    layoutId="featuresTab"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_3px_12px_rgba(0,0,0,0.06)] border border-zinc-200/50"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab === "freelancer" ? <User size={13} /> : <Building2 size={13} />}
                  {tab === "freelancer" ? "Individual" : "Business"}
                </span>
              </button>
            ))}
          </motion.div>
        </section>

        {/* --- One-by-One Feature Spotlight --- */}
        <section className="mb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: appleEase }}
              className="flex flex-col gap-28 pt-10"
            >
              
              {/* Intro Title */}
              <div className="text-center mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500 block mb-2">{activeContent.badge}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">{activeContent.title}</h2>
                <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium">{activeContent.desc}</p>
              </div>

              {/* Alternating Z-Pattern Layout for Mobile Phones */}
              {activeContent.spotlight.map((feature, i) => {
                const isEven = i % 2 === 0;
                
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: appleEase }}
                    className={`flex flex-col gap-12 lg:gap-20 items-center group ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Text Content Block */}
                    <div className="flex-1 w-full flex flex-col items-start text-left space-y-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        {feature.icon}
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
                        {feature.title}
                      </h3>
                      
                      <p className="text-lg text-zinc-500 leading-relaxed font-medium max-w-xl">
                        {feature.desc}
                      </p>
                      
                      <div className="pt-2 flex flex-col gap-3 w-full">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-zinc-700 font-medium bg-white/50 w-fit px-4 py-2 rounded-lg border border-zinc-100">
                            <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Phone Mockup Block */}
                    <div className="flex-1 w-full flex justify-center items-center py-6 lg:py-0 relative">
                      
                      {/* Ambient Glow behind the phone */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[400px] bg-blue-500/20 blur-[70px] rounded-full pointer-events-none -z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

                      {/* Phone Frame wrapper */}
                      <div className="relative w-[260px] sm:w-[300px] aspect-[9/19.5] rounded-[2.5rem] border-[10px] border-zinc-900 bg-zinc-900 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)] overflow-hidden transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_30px_80px_-20px_rgba(37,99,235,0.5)]">
                        
                        {/* Fake Phone Notch */}
                        {/* <div className="absolute top-0 inset-x-0 h-6 bg-zinc-900 rounded-b-2xl w-[40%] mx-auto z-20" /> */}
                        
                        {/* NEXT.JS IMAGE GOES HERE */}
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

        {/* --- Standard Infrastructure Grid --- */}
        <section className="pt-24 border-t border-zinc-200/80">
          <div className="max-w-2xl mb-16 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900">Why choose Aptro?</h2>
            <p className="text-base text-zinc-500 font-medium leading-relaxed">Built with the latest technology to ensure your data is safe, your app is fast, and your business never stops running.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {commonFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="group relative p-8 bg-white/70 backdrop-blur-xl border border-zinc-200/60 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 inline-flex w-12 h-12 items-center justify-center rounded-xl bg-white border border-zinc-200 text-zinc-500 shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight text-zinc-900">{f.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm font-medium">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="mt-32 w-full pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="relative px-8 py-24 rounded-[3rem] overflow-hidden bg-zinc-950 text-center shadow-2xl shadow-zinc-950/20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-5 tracking-tight text-white leading-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-zinc-200 italic pr-1">grow?</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mb-10 leading-relaxed font-medium">
                Join thousands of independent workers and growing businesses managing their daily tasks on Aptro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white text-zinc-950 rounded-full font-semibold text-sm transition-transform duration-300 hover:scale-[1.02] flex items-center justify-center gap-1.5 group shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]"
                >
                  Download App
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300 text-zinc-900" />
                </Link>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:scale-[0.98] flex items-center justify-center backdrop-blur-md"
                >
                  View Plans
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}