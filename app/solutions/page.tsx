"use client";

import { 
  Store, 
  Truck, 
  Laptop, 
  BarChart, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  PieChart,
  Users2
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    id: "e-commerce",
    title: "Retail & Commerce",
    desc: "Sync physical inventory with global storefronts. Orchestrate orders from Shopify, Amazon, and local POS in one unified hub.",
    icon: <Store strokeWidth={1.5} />,
    benefits: ["Real-time Stock Ledger", "Omnichannel Logic", "Loyalty Architecture"]
  },
  {
    id: "agencies",
    title: "Agencies & Consulting",
    desc: "Automate high-fidelity invoicing and track billable hours directly against client milestones. Eliminate administrative debt.",
    icon: <Laptop strokeWidth={1.5} />,
    benefits: ["Milestone-based Billing", "Automatic Late Fees", "Client Success Portal"]
  },
  {
    id: "logistics",
    title: "Distribution & Fleet",
    desc: "High-volume infrastructure for movement. Track shipments, manage warehouse governance, and optimize logistics.",
    icon: <Truck strokeWidth={1.5} />,
    benefits: ["Batch Shipping Logic", "Warehouse Permissions", "Network Optimization"]
  }
];

export default function SolutionsPage() {
  return (
    <main className="pt-40 pb-32 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Background Dynamics */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <div className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            Vertical Infrastructure
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-zinc-950"
          >
            Architecture for <br />
            <span className="text-blue-600 italic">your sector.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Aptro adapts to your specific business model, providing the specialized 
            infrastructure required to automate and scale at a global level.
          </motion.p>
        </div>

        {/* --- Solutions Grid --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-48">
          {solutions.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[3rem] bg-white border border-zinc-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/20 flex flex-col"
            >
                <div className="mb-10 p-4 w-fit rounded-2xl bg-zinc-50 text-zinc-950 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  {item.icon}
                </div>
                
                <h3 className="text-3xl font-black mb-4 tracking-tighter text-zinc-950">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-10 grow font-medium">
                  {item.desc}
                </p>

                <div className="space-y-4 mb-12">
                  {item.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-4 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                      <CheckCircle2 size={16} className="text-blue-600" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/contact?solution=${item.id}`} 
                  className="w-full py-5 rounded-full bg-zinc-950 text-white font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-zinc-200 active:scale-95"
                >
                  Explore System <ArrowRight size={14} />
                </Link>
            </motion.div>
          ))}
        </div>

        {/* --- Transformation (Bento Card) --- */}
        <section className="relative p-10 lg:p-24 rounded-[4rem] bg-zinc-50 border border-zinc-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="space-y-10">
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em]">Efficiency Audit</span>
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-zinc-950 leading-[0.9]">
                Consolidate your <br /> <span className="text-zinc-400 italic">entire stack.</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed text-xl font-medium">
                The average founder uses 5+ disparate applications to manage what Aptro delivers 
                in a single environment. We eliminate the "Integration Tax" to ensure your 
                data remains unified.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm">
                  <PieChart className="text-blue-600 mb-4" size={24} />
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Throughput</p>
                  <p className="text-3xl font-black text-zinc-950">+45%</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm">
                  <Users2 className="text-blue-600 mb-4" size={24} />
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Time Saved</p>
                  <p className="text-3xl font-black text-zinc-950">12h/wk</p>
                </div>
              </div>
            </div>

            {/* Visual Abstract */}
            <div className="relative aspect-square bg-white rounded-[4rem] border border-zinc-200 flex items-center justify-center group shadow-2xl">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-50 blur-[80px] rounded-full" />
               <Zap size={120} className="text-zinc-950 relative z-10 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
               <div className="absolute top-10 right-10 p-4 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Unified Hub
               </div>
            </div>
          </div>
        </section>

        {/* --- Infrastructure Partners --- */}
        <div className="mt-48 text-center pb-20">
          <p className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.5em] mb-12">Global Infrastructure Partners</p>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-125">
             <div className="flex items-center gap-2 font-black text-xl italic tracking-widest text-zinc-950">SHIELD</div>
             <div className="flex items-center gap-2 font-black text-xl italic tracking-widest text-zinc-950">ANALYTIC</div>
             <div className="flex items-center gap-2 font-black text-xl italic tracking-widest text-zinc-950">STABLE</div>
          </div>
        </div>

      </div>
    </main>
  );
}