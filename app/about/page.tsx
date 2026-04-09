"use client";

import { 
  Heart, 
  Target, 
  ShieldCheck, 
  Compass, 
  Eye, 
  Trophy,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  {
    title: "Simplicity First",
    desc: "Power shouldn't be noisy. We obsess over every pixel to ensure your workflow remains silent and efficient.",
    icon: <Heart className="text-blue-600" size={24} />
  },
  {
    title: "Rooted in Growth",
    desc: "Our success is a lag-measure of yours. We build features that solve real bottlenecks, not just add fluff.",
    icon: <Target className="text-zinc-950" size={24} />
  },
  {
    title: "Sovereign Security",
    desc: "Privacy is our foundation. We implement AES-256 encryption across every layer of your commercial data.",
    icon: <ShieldCheck className="text-blue-600" size={24} />
  }
];

const strategy = [
  {
    label: "Our Mission",
    title: "Automate the Mundane",
    desc: "To eliminate the administrative burden on small business owners, giving them back 20 hours a week to focus on craft.",
    icon: <Compass className="text-blue-600" />,
    bg: "bg-blue-50/50"
  },
  {
    label: "Our Vision",
    title: "The Standard for Commerce",
    desc: "To become the global operating system for modern entrepreneurship, where managing a brand is as easy as sending a text.",
    icon: <Eye className="text-zinc-950" />,
    bg: "bg-zinc-50"
  },
  {
    label: "Our Goal",
    title: "Empower 1M Founders",
    desc: "By 2028, we aim to have facilitated over $10B in commerce for independent founders through our streamlined tools.",
    icon: <Trophy className="text-blue-600" />,
    bg: "bg-blue-50/50"
  }
];

export default function AboutPage() {
  return (
    <main className="pt-40 pb-32 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Background Soft Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <div className="max-w-5xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            Established 2024
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-zinc-950"
          >
            The architecture <br /><span className="text-blue-600 italic">of commerce.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Aptro was founded on a simple premise: Founders should spend their time 
            creating, not filing. We build the invisible infrastructure that makes that possible.
          </motion.p>
        </div>

        {/* --- Strategy Grid --- */}
        <section className="grid lg:grid-cols-3 gap-8 mb-48">
          {strategy.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[3rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group ${item.bg}`}
            >
              <div className="mb-8 p-4 w-fit rounded-2xl bg-white border border-zinc-100 text-zinc-950 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4">{item.label}</span>
              <h3 className="text-2xl font-black mb-4 tracking-tighter">{item.title}</h3>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </section>

        {/* --- Narrative Section --- */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="relative group">
            <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-zinc-100 bg-zinc-50 shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)]" />
              <Sparkles className="text-zinc-200 group-hover:rotate-12 transition-transform duration-1000" size={120} strokeWidth={1} />
              <div className="absolute bottom-10 left-10 right-10 p-8 rounded-[2.5rem] bg-white border border-zinc-100 shadow-xl">
                <p className="text-xs font-bold text-zinc-950 italic leading-relaxed uppercase tracking-tight">"We solve the problems that steal your focus, so you can solve the problems that change the world."</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em]">Origin Story</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Designed by <br/> founders, for <br/> <span className="text-zinc-400">efficiency.</span></h2>
            <div className="space-y-8 text-zinc-500 text-lg font-medium leading-relaxed">
              <p>
                What began as a custom automation script in <span className="text-zinc-950">Jetpur</span> has evolved into 
                 a comprehensive business engine used by independent brands across the globe.
              </p>
              <p>
                We've removed the complexity of stock ledgers, financial reporting, and shipping logistics. 
                With Aptro, your data is always unified, ensuring you make every decision with 100% clarity.
              </p>
            </div>
            
            <div className="pt-10 border-t border-zinc-100 grid grid-cols-2 gap-12">
              <div>
                <p className="text-4xl font-black text-zinc-950 tracking-tighter">99.99%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300 mt-2">SLA Reliability</p>
              </div>
              <div>
                <p className="text-4xl font-black text-zinc-950 tracking-tighter">24/7</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300 mt-2">Global Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Philosophy Section --- */}
        <section className="py-32 border-y border-zinc-100 mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4 tracking-tighter text-zinc-950">The Aptro Philosophy</h2>
              <p className="text-zinc-500 font-medium leading-relaxed">Fundamental principles that guide our technical architecture and product design.</p>
            </div>
            <Link href="/careers" className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 group border-b-2 border-blue-600 pb-1">
              Join the Mission <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {values.map((v, i) => (
              <div key={i} className="group">
                <div className="mb-8 p-4 bg-zinc-50 rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="text-xl font-black text-zinc-950 mb-4 tracking-tight uppercase tracking-widest text-xs">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Final CTA --- */}
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="relative p-12 lg:p-32 rounded-[4rem] bg-zinc-950 text-white overflow-hidden text-center shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]" />
          
          <h2 className="text-5xl lg:text-8xl font-black tracking-tighter mb-10 relative z-10 leading-none">
            Scale with <br /> <span className="text-zinc-500 italic">Confidence.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link href="/download" className="w-full sm:w-auto px-12 py-5 bg-white text-zinc-950 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl">
              Initialize Platform
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-12 py-5 bg-transparent border border-white/20 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white/5 transition-all">
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}