"use client";

import { 
  Store, 
  Laptop, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  PieChart,
  Users2,
  LayoutGrid,
  TrendingUp,
  Briefcase,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Premium smooth easing (Matching Home & Features)
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function SolutionsPage() {
  return (
    <main className={`min-h-screen pt-36 pb-32 bg-[#FAFAFA] text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden relative ${jakarta.className}`}>
      
      {/* --- Premium Minimal Background (Matching Home) --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 flex justify-center">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `radial-gradient(circle at center, #18181b 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-5xl mb-24 md:mb-32"
        >
          <motion.div 
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium border border-zinc-200/60 mb-8"
          >
            Who We Help
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold tracking-tight mb-6 leading-[1.05] text-zinc-950"
          >
            Solving operational <br />
            <span className="text-zinc-400 italic font-medium">chaos.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Running a business usually means juggling multiple disparate applications. Aptro consolidates your tools into one unified platform, built specifically for the way you work.
          </motion.p>
        </motion.div>

        {/* --- The Problem vs The Solution (Clean Bento Grid) --- */}
        <section className="mb-32">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 rounded-[2rem] overflow-hidden"
          >
            {/* The Problem */}
            <motion.div 
              variants={fadeUpItem}
              className="p-10 md:p-14 bg-[#FAFAFA] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-10 opacity-[0.03]"><AlertCircle size={120} /></div>
              <div className="inline-flex items-center gap-2 text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-8">
                The Old Way
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-zinc-950 tracking-tight">Fragmented Workflows</h3>
              <p className="text-zinc-500 font-medium leading-relaxed mb-10 max-w-sm">
                You spend more time managing tools than growing your business. Data is scattered, errors multiply, and critical deadlines slip through the cracks.
              </p>
              <ul className="space-y-4">
                {["Scattered client data across apps", "Manual accounting errors", "Lost invoices and missed payments"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Solution */}
            <motion.div 
              variants={fadeUpItem}
              className="p-10 md:p-14 bg-zinc-950 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5"><Zap size={120} /></div>
              <div className="inline-flex items-center gap-2 text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-8">
                The Aptro Way
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-white tracking-tight">The Unified Hub</h3>
              <p className="text-zinc-400 font-medium leading-relaxed mb-10 max-w-sm">
                A beautifully centralized ecosystem. Tasks, inventory, and billing sync automatically. Enter data once, and watch it flow flawlessly everywhere.
              </p>
              <ul className="space-y-4">
                {["Automated one-click billing", "Real-time stock & cash flow sync", "Crystal clear business analytics"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                    <CheckCircle2 size={16} className="text-zinc-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Architected For You --- */}
        <section className="mb-32 pt-16 border-t border-zinc-200/80">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-950">Architected for you.</h2>
            <p className="text-lg text-zinc-500">We built distinct environments tailored to the exact needs of solo professionals and growing enterprises.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-6"
          >
            {/* Freelancer Profile */}
            <motion.div 
              variants={fadeUpItem}
              className="p-10 md:p-12 rounded-[2rem] bg-white border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-900 flex items-center justify-center mb-8">
                <Laptop size={20} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-zinc-950 tracking-tight">Independent Professionals</h3>
              <p className="text-zinc-500 font-medium leading-relaxed mb-10">
                For the solo architect, designer, developer, or consultant who demands flawless execution without an assistant.
              </p>
              <div className="bg-[#FAFAFA] rounded-xl p-6 border border-zinc-100">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-5">Capabilities</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <CheckCircle2 size={16} className="text-zinc-400" /> Smart Daily Task Board
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <CheckCircle2 size={16} className="text-zinc-400" /> CRM & Call Note Management
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <CheckCircle2 size={16} className="text-zinc-400" /> Instant PDF Quotations & Billing
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Business Profile */}
            <motion.div 
              variants={fadeUpItem}
              className="p-10 md:p-12 rounded-[2rem] bg-white border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-900 flex items-center justify-center mb-8">
                <Store size={20} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-zinc-950 tracking-tight">Growing Businesses</h3>
              <p className="text-zinc-500 font-medium leading-relaxed mb-10">
                For retail stores, agencies, and product sellers who require strict control over inventory, staff, and complex accounting.
              </p>
              <div className="bg-[#FAFAFA] rounded-xl p-6 border border-zinc-100">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-5">Capabilities</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <CheckCircle2 size={16} className="text-zinc-400" /> Dual-sided Ledgers (Buys & Sells)
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <CheckCircle2 size={16} className="text-zinc-400" /> Live Inventory & Stock Alerts
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <CheckCircle2 size={16} className="text-zinc-400" /> Automated Payroll Processing
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Transformation Section (Abstract UI Box) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEasing }}
          className="relative p-10 md:p-16 rounded-[3rem] bg-white border border-zinc-200/60 shadow-sm mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
                Consolidate your <br /> <span className="text-zinc-400 italic">software stack.</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed text-lg">
                We eliminate the "Integration Tax". By uniting your entire workflow into a single environment, Aptro creates measurable impacts on your daily operations and bottom line.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-100">
                  <PieChart className="text-zinc-900 mb-4" size={20} />
                  <p className="text-xs font-medium text-zinc-500 mb-1">Throughput</p>
                  <p className="text-3xl font-semibold text-zinc-950">+45%</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-100">
                  <Users2 className="text-zinc-900 mb-4" size={20} />
                  <p className="text-xs font-medium text-zinc-500 mb-1">Time Saved</p>
                  <p className="text-3xl font-semibold text-zinc-950">12h/wk</p>
                </div>
              </div>
            </div>

            {/* Clean Visual Abstract */}
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] bg-[#FAFAFA] rounded-[2rem] border border-zinc-100 flex items-center justify-center group">
               {/* Abstract Grid Graphic */}
               <div className="relative z-10 grid grid-cols-2 gap-4 p-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-zinc-200/60 flex items-center justify-center text-zinc-400"><Briefcase size={28} /></div>
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-zinc-200/60 flex items-center justify-center text-zinc-400"><LayoutGrid size={28} /></div>
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-zinc-200/60 flex items-center justify-center text-zinc-400"><TrendingUp size={28} /></div>
                  <div className="w-24 h-24 bg-zinc-950 rounded-2xl shadow-md flex items-center justify-center text-white"><Zap size={28} /></div>
               </div>
            </div>
          </div>
        </motion.section>

        {/* --- THE EXECUTIVE CTA SECTION (Dark Mode Anchor) --- */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEasing }}
            className="relative px-8 py-20 lg:p-24 rounded-[3rem] overflow-hidden bg-zinc-950 text-center shadow-2xl"
          >
            {/* Subtle Dark Glow Layer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-white leading-tight">
                Stop managing tools. <br />
                <span className="text-zinc-400 italic font-medium">Start managing business.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Join the network of independent professionals and growing enterprises simplifying their operations with Aptro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  Download App
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/features"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-zinc-900 hover:scale-[0.98] flex items-center justify-center"
                >
                  See All Features
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}