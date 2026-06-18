"use client";

import { 
  Store, 
  Laptop, 
  BarChart, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  PieChart,
  Users2,
  Target,
  LayoutGrid,
  TrendingUp,
  Briefcase,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-36 pb-32 bg-zinc-50 text-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      
      {/* Soft Background Dynamics */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-50/60 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200"
          >
            <Target size={14} /> Who We Help
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9] text-zinc-900"
          >
            Solving operational <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">chaos.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Running a business usually means juggling 10 different apps. Aptro consolidates your tools into one unified platform, built specifically for the way you work.
          </motion.p>
        </div>

        {/* --- The Problem vs The Solution --- */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            {/* The Problem */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-red-100 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5"><AlertCircle size={120} className="text-red-500" /></div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
                The Problem
              </div>
              <h3 className="text-3xl font-black mb-4 text-zinc-900">Fragmented Workflows</h3>
              <p className="text-zinc-500 font-medium leading-relaxed mb-8">
                You are spending more time managing your business than actually growing it. Invoices are in one app, clients in another, inventory in a spreadsheet, and payroll on paper. Data gets lost, and deadlines are missed.
              </p>
              <ul className="space-y-3">
                {["Missed follow-ups and lost invoices", "Manual data entry leading to errors", "No clear view of your actual profits"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-bold text-zinc-600">
                    <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Solution */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5"><Zap size={120} className="text-blue-500" /></div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
                The Aptro Solution
              </div>
              <h3 className="text-3xl font-black mb-4">The Unified Hub</h3>
              <p className="text-zinc-400 font-medium leading-relaxed mb-8">
                Aptro centralizes everything. We connect your daily tasks, client management, inventory, and billing into a single, seamless ecosystem. Enter data once, and watch it sync everywhere automatically.
              </p>
              <ul className="space-y-3">
                {["Automated reminders & one-click billing", "Real-time stock & cash flow sync", "Crystal clear business analytics"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-bold text-zinc-300">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* --- Who We Serve (Target Audiences) --- */}
        <section className="mb-32 pt-16 border-t border-zinc-200/80">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900">Who is Aptro for?</h2>
            <p className="text-lg text-zinc-500 font-medium">We built distinct environments tailored to the exact needs of solo professionals and growing retail/service businesses.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Freelancer Profile */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-zinc-200/80 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 border border-blue-100">
                <Laptop size={24} />
              </div>
              <h3 className="text-2xl font-black mb-3 text-zinc-900">Independent Freelancers</h3>
              <p className="text-zinc-500 font-medium leading-relaxed mb-8 h-20">
                For the solo architect, designer, developer, or consultant who needs to look professional without hiring an assistant.
              </p>
              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">How it helps you:</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                    <CheckCircle2 size={18} className="text-blue-600" /> Replaces scattered sticky notes with a Smart Daily Task Board.
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                    <CheckCircle2 size={18} className="text-blue-600" /> Manages client project details and call notes in one place.
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                    <CheckCircle2 size={18} className="text-blue-600" /> Turns project completion into an instant PDF Quotation/Bill.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Business Profile */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-zinc-200/80 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 border border-indigo-100">
                <Store size={24} />
              </div>
              <h3 className="text-2xl font-black mb-3 text-zinc-900">Growing Businesses</h3>
              <p className="text-zinc-500 font-medium leading-relaxed mb-8 h-20">
                For retail stores, agencies, and product sellers who need strict control over inventory, staff, and complex accounting.
              </p>
              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">How it helps you:</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                    <CheckCircle2 size={18} className="text-indigo-600" /> Dual-sided ledgers to track both Supplier Buys and Customer Sells.
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                    <CheckCircle2 size={18} className="text-indigo-600" /> Live inventory tracking with automated low-stock push alerts.
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                    <CheckCircle2 size={18} className="text-indigo-600" /> Built-in HR: Manage staff attendance, payroll, and GST billing.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Transformation (Bento Card) --- */}
        <section className="relative p-8 md:p-16 rounded-[3rem] bg-white border border-zinc-200/80 overflow-hidden shadow-xl shadow-zinc-200/20 mb-32">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.05),transparent_50%)] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="space-y-8">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-100">
                Efficiency Audit
              </span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-tight">
                Consolidate your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">entire software stack.</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed text-lg font-medium">
                The average founder uses 5+ disparate applications to manage what Aptro delivers in a single environment. We eliminate the "Integration Tax" to ensure your business data remains unified, secure, and actionable.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <PieChart className="text-blue-600 mb-3" size={24} />
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Throughput</p>
                  <p className="text-3xl font-black text-zinc-900">+45%</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <Users2 className="text-indigo-600 mb-3" size={24} />
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Time Saved</p>
                  <p className="text-3xl font-black text-zinc-900">12h/wk</p>
                </div>
              </div>
            </div>

            {/* Visual Abstract */}
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] bg-zinc-50 rounded-[2rem] border border-zinc-200 flex items-center justify-center group shadow-inner overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/50 blur-[80px] rounded-full" />
               
               {/* Abstract Grid Graphic */}
               <div className="relative z-10 grid grid-cols-2 gap-4 p-8 group-hover:scale-105 transition-transform duration-700">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-md border border-zinc-100 flex items-center justify-center text-blue-500"><Briefcase size={32} /></div>
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-md border border-zinc-100 flex items-center justify-center text-indigo-500"><LayoutGrid size={32} /></div>
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-md border border-zinc-100 flex items-center justify-center text-emerald-500"><TrendingUp size={32} /></div>
                  <div className="w-24 h-24 bg-blue-600 rounded-2xl shadow-xl flex items-center justify-center text-white"><Zap size={32} /></div>
               </div>

               <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-white text-zinc-900 text-[10px] font-black uppercase tracking-widest shadow-md border border-zinc-100">
                  All-in-One Hub
               </div>
            </div>
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="rounded-[3rem] bg-zinc-950 text-white p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Stop managing tools. <br />Start managing business.</h2>
            <p className="text-zinc-400 mb-10 text-lg font-medium">
              Join the growing network of freelancers and businesses simplifying their operations with Aptro.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/download" className="px-10 py-4 bg-white text-zinc-950 rounded-full font-bold text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                Download Aptro <ArrowRight size={16} />
              </Link>
              <Link href="/features" className="px-10 py-4 bg-zinc-800 text-white rounded-full font-bold text-sm hover:bg-zinc-700 transition-all flex items-center justify-center">
                See All Features
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}