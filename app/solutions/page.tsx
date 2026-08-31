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
  AlertCircle,
  XCircle,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Smooth easing for premium feel
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function SolutionsPage() {
  return (
    <main className={`min-h-screen pt-32 pb-32 text-zinc-950 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative ${jakarta.className}`}>

      {/* --- Background --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#FAFAFA]">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFA]/90 to-zinc-50" />
        <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* --- Hero Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mb-24 md:mb-36 mt-12 md:mt-20"
        >
          <motion.div 
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-600 text-xs font-semibold tracking-wide border border-zinc-200/80 mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Who We Help
          </motion.div>

          <motion.h1 
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tight mb-8 leading-[1.1] text-zinc-950"
          >
            Stop the daily <br />
            <span className="text-zinc-400 italic font-medium relative inline-block group">
              chaos.
              <span className="absolute left-0 top-1/2 w-0 h-[4px] bg-blue-500 transition-all duration-700 ease-out group-hover:w-full -translate-y-1/2 rounded-full" />
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeUpItem}
            className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl font-medium"
          >
            Running a business shouldn't mean jumping between five different apps. Aptro brings all your work into one easy place, built for how you actually run things.
          </motion.p>
        </motion.div>

        {/* --- The Problem vs The Solution --- */}
        <section className="mb-28 md:mb-40">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-6 md:gap-8"
          >
            {/* The Problem */}
            <motion.div 
              variants={fadeUpItem}
              className="p-8 md:p-14 rounded-[2rem] bg-white border border-zinc-200 shadow-sm relative overflow-hidden group hover:border-zinc-300 transition-colors"
            >
              <div className="absolute -top-10 -right-10 p-10 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity"><AlertCircle size={200} /></div>
              
              <div className="inline-flex items-center gap-2 text-rose-500 bg-rose-50 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest mb-10">
                <XCircle size={14} /> The Old Way
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-zinc-900 tracking-tight">Scattered Work</h3>
              <p className="text-zinc-600 font-medium leading-relaxed mb-10 max-w-sm">
                You waste time managing software instead of growing your business. Data gets lost, mistakes happen, and deadlines are missed.
              </p>
              
              <ul className="space-y-5">
                {["Customer info is hard to find", "Typing things twice causes mistakes", "Losing track of bills and payments"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base font-medium text-zinc-600">
                    <div className="w-2 h-2 rounded-full bg-zinc-300 shrink-0 mt-1.5" /> 
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Solution */}
            <motion.div 
              variants={fadeUpItem}
              className="p-8 md:p-14 rounded-[2rem] bg-zinc-950 text-white border border-zinc-800 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -top-10 -right-10 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Workflow size={200} /></div>
              
              <div className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest mb-10">
                <Zap size={14} className="fill-blue-400" /> The Aptro Way
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-white tracking-tight">Everything in One Place</h3>
              <p className="text-zinc-400 font-medium leading-relaxed mb-10 max-w-sm relative z-10">
                One simple system. Your tasks, stock, and billing update automatically. Enter information once, and it shows up everywhere you need it.
              </p>
              
              <ul className="space-y-5 relative z-10">
                {["One-click bills and invoices", "Live updates for stock and money", "Simple, clear business reports"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base font-medium text-zinc-300">
                    <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-0.5" /> 
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Architected For You (Personas) --- */}
        <section className="mb-28 md:mb-40 pt-16 border-t border-zinc-200/80">
          <div className="max-w-2xl mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-zinc-950">Built for your exact needs.</h2>
            <p className="text-lg text-zinc-600 font-medium">We made focused setups tailored exactly to how you work—whether you fly solo or run a full team.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {/* Freelancer Profile */}
            <motion.div 
              variants={fadeUpItem}
              className="group p-8 md:p-12 rounded-[2rem] bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all duration-500">
                <Laptop size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-zinc-950 tracking-tight">Solo Workers</h3>
              <p className="text-zinc-600 font-medium leading-relaxed mb-10 flex-grow">
                For consultants, designers, and freelancers who need things to run smoothly without hiring an assistant.
              </p>
              
              <div className="bg-zinc-50 rounded-2xl p-6 md:p-8 border border-zinc-100 mt-auto">
                <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-5">Top Features</p>
                <ul className="space-y-4 mb-8">
                  {["Simple Daily To-Do Lists", "Easy Client Tracking", "Instant PDF Quotes"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base font-medium text-zinc-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" /> {feat}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  Explore Solo Tools <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Business Profile */}
            <motion.div 
              variants={fadeUpItem}
              className="group p-8 md:p-12 rounded-[2rem] bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all duration-500">
                <Store size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-zinc-950 tracking-tight">Growing Shops & Teams</h3>
              <p className="text-zinc-600 font-medium leading-relaxed mb-10 flex-grow">
                For stores, agencies, and product sellers who need strict control over their stock, staff, and money.
              </p>
              
              <div className="bg-zinc-50 rounded-2xl p-6 md:p-8 border border-zinc-100 mt-auto">
                <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-5">Top Features</p>
                <ul className="space-y-4 mb-8">
                  {["Track Buys & Sells Easily", "Live Stock & Low Item Alerts", "Automatic Staff Payroll"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base font-medium text-zinc-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" /> {feat}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  Explore Team Tools <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Transformation Section (Data Flow Visual) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEasing }}
          className="relative p-8 md:p-14 lg:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-white border border-zinc-200 shadow-sm mb-28 md:mb-40 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10 relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
                Replace your <br className="hidden md:block" /> 
                <span className="text-zinc-400 italic">expensive software.</span>
              </h2>
              <p className="text-zinc-600 leading-relaxed text-lg font-medium">
                Stop paying for multiple apps that don't talk to each other. By bringing your work into one place, Aptro saves you time and cuts your monthly bills.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 md:p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <TrendingUp className="text-blue-600 mb-4" size={28} />
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Work Done</p>
                  <p className="text-3xl md:text-4xl font-semibold text-zinc-950">+45%</p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <Users2 className="text-blue-600 mb-4" size={28} />
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Time Saved</p>
                  <p className="text-3xl md:text-4xl font-semibold text-zinc-950">12<span className="text-xl text-zinc-400 font-medium ml-1">hrs/wk</span></p>
                </div>
              </div>
            </div>

            {/* Storytelling Visual: Flowing Apps into Aptro */}
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] bg-zinc-50/80 rounded-[2.5rem] border border-zinc-100 flex items-center justify-center p-6 md:p-10 group overflow-hidden">
                {/* Connecting Path background */}
                <svg className="absolute inset-0 w-full h-full text-zinc-200 stroke-current opacity-60" fill="none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                   <path d="M 100 120 C 200 120, 200 200, 280 200" strokeWidth="2" strokeDasharray="6 6" />
                   <path d="M 100 280 C 200 280, 200 200, 280 200" strokeWidth="2" strokeDasharray="6 6" />
                </svg>

                <div className="relative z-10 flex items-center gap-8 md:gap-12 w-full max-w-md justify-between">
                  {/* Fragmented Apps */}
                  <div className="flex flex-col gap-8">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:-translate-y-2 transition-transform duration-500">
                      <Briefcase size={28} />
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:translate-y-2 transition-transform duration-500">
                      <PieChart size={28} />
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="text-blue-500/50 animate-pulse">
                    <ArrowRight size={36} />
                  </div>

                  {/* Unified Hub */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full" />
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-zinc-950 rounded-[1.5rem] shadow-xl flex items-center justify-center text-white relative z-10 group-hover:scale-105 transition-transform duration-500 ease-out border border-zinc-800">
                      <Zap size={40} className="fill-blue-500 text-blue-500" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </motion.section>

        {/* --- THE EXECUTIVE CTA SECTION --- */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: premiumEasing }}
            className="relative px-6 py-20 md:py-28 lg:py-32 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-zinc-950 text-center shadow-2xl border border-zinc-800/50"
          >
            {/* Immersive Dark Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] max-w-3xl h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-zinc-900/10 to-transparent blur-[80px] pointer-events-none" />
            
            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight text-white leading-tight">
                Stop managing apps. <br />
                <span className="text-zinc-400 italic font-medium">Start growing your business.</span>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-12 md:mb-16 leading-relaxed max-w-2xl">
                Join the growing network of solo workers and teams simplifying their daily operations with Aptro.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-100 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group"
                >
                  Download App
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/features"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 flex items-center justify-center"
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