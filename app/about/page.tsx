"use client";

import { 
  Heart, 
  Target, 
  ShieldCheck, 
  Compass, 
  Eye, 
  Trophy,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Code2,
  Rocket,
  ArrowRight,
  Globe
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  {
    title: "Simplicity First",
    desc: "Software should get out of your way. We obsess over every pixel to ensure your workflow remains silent, intuitive, and highly efficient.",
    icon: <Heart size={20} className="text-rose-500" />
  },
  {
    title: "Rooted in Growth",
    desc: "Our success is a lag-measure of yours. We build features that solve real operational bottlenecks, not just vanity metrics.",
    icon: <Target size={20} className="text-blue-600" />
  },
  {
    title: "Sovereign Security",
    desc: "Privacy is our absolute foundation. We implement enterprise-grade encryption across every layer of your commercial data.",
    icon: <ShieldCheck size={20} className="text-indigo-600" />
  }
];

const strategy = [
  {
    label: "Our Mission",
    title: "Automate the Mundane",
    desc: "To eliminate the administrative burden on independent business owners, giving them back 20 hours a week to focus entirely on their craft.",
    icon: <Compass size={24} className="text-blue-600" />,
    theme: "blue"
  },
  {
    label: "Our Vision",
    title: "The Standard for Commerce",
    desc: "To become the global operating system for modern entrepreneurship, where managing a brand is as seamless as sending a text message.",
    icon: <Eye size={24} className="text-indigo-600" />,
    theme: "indigo"
  },
  {
    label: "Our Goal",
    title: "Empower 1M Founders",
    desc: "By 2028, we aim to have facilitated over $10B in commerce for independent founders through our streamlined, unified tools.",
    icon: <Trophy size={24} className="text-emerald-600" />,
    theme: "emerald"
  }
];

const journeySteps = [
  {
    year: "2024",
    title: "The Friction in Jetpur",
    desc: "Operating out of Jetpur, Gujarat, our founders faced a universal problem: running a business required juggling 10 different apps. Invoices here, inventory there, client notes everywhere. The 'integration tax' was stealing hours of focus every single day.",
    icon: <MapPin size={20} className="text-zinc-500" />
  },
  {
    year: "2025",
    title: "Building the Engine",
    desc: "Unable to find a tool that combined B2B ledgers, task management, and CRM elegantly, we built it ourselves. What started as an internal, localized script to automate our own billing and inventory quickly proved to be a lifesaver.",
    icon: <Code2 size={20} className="text-zinc-500" />
  },
  {
    year: "2026",
    title: "Scaling the Architecture",
    desc: "We realized thousands of other freelancers and agencies were drowning in the same administrative chaos. We rebuilt our internal tool into Aptro: a unified, sovereign operating system designed to automate commerce at scale.",
    icon: <Rocket size={20} className="text-zinc-500" />
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-36 pb-32 bg-zinc-50 text-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative">
      
      {/* Soft Background Dynamics */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-50/60 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <div className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-zinc-800 text-xs font-bold uppercase tracking-widest mb-8 border border-zinc-200 shadow-sm"
          >
            <Sparkles size={14} className="text-blue-600" /> Established 2024
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9] text-zinc-900"
          >
            The architecture <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">of commerce.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Aptro was founded on a simple premise: Founders should spend their time creating, not filing. We build the invisible infrastructure that makes that possible.
          </motion.p>
        </div>

        {/* --- The Aptro Journey (Narrative Section) --- */}
        <section className="mb-40">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Story Hook */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:w-1/3 lg:sticky lg:top-40"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
                Born in Jetpur, <br />Built for the <span className="text-blue-600">world.</span>
              </h2>
              <p className="text-zinc-500 font-medium leading-relaxed text-lg mb-8">
                Great software isn't built in a boardroom. It's built by people who felt the friction of running a business and decided to fix it.
              </p>
              
              <div className="flex gap-8 pt-8 border-t border-zinc-200/80">
                <div>
                  <p className="text-3xl font-black text-zinc-900 tracking-tight">99.9%</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-1">Reliability</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-zinc-900 tracking-tight">24/7</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-1">Support</p>
                </div>
              </div>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="lg:w-2/3 relative">
              <div className="absolute top-0 bottom-0 left-6 w-px bg-zinc-200/80 hidden md:block" />
              
              <div className="space-y-12">
                {journeySteps.map((step, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                    key={i} 
                    className="relative pl-0 md:pl-20"
                  >
                    {/* Timeline Node */}
                    <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 bg-white rounded-2xl border border-zinc-200 shadow-sm items-center justify-center z-10">
                      {step.icon}
                    </div>
                    
                    <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-zinc-200/80 shadow-sm hover:shadow-lg transition-shadow group">
                      <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                        Phase {i + 1} • {step.year}
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                      <p className="text-zinc-500 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Strategy Grid (Bento Box) --- */}
        <section className="mb-40">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-zinc-900">Our Strategic Horizon</h2>
            <p className="text-lg text-zinc-500 font-medium">Where we are going, and what drives our daily engineering decisions.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {strategy.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-zinc-200/80 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-110 duration-500
                  ${item.theme === 'blue' ? 'bg-blue-50 border-blue-100 text-blue-600' : 
                    item.theme === 'indigo' ? 'bg-indigo-50 border-indigo-100 text-indigo-600' : 
                    'bg-emerald-50 border-emerald-100 text-emerald-600'}`
                }>
                  {item.icon}
                </div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{item.label}</span>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-zinc-900">{item.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Philosophy Section --- */}
        <section className="py-24 border-t border-zinc-200/80 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-zinc-900">The Aptro Philosophy</h2>
              <p className="text-zinc-500 font-medium leading-relaxed text-lg">Fundamental principles that strictly guide our technical architecture and product design.</p>
            </div>
            <Link href="/careers" className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2 group hover:text-blue-700 transition-colors">
              Join the Mission <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-zinc-100/50 border border-zinc-200/50 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="mb-6 p-3 bg-white rounded-xl shadow-sm border border-zinc-100 w-fit">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3 tracking-tight">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Final CTA --- */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
          className="relative p-12 md:p-24 lg:p-32 rounded-[3rem] md:rounded-[4rem] bg-zinc-950 text-white overflow-hidden text-center shadow-2xl border border-zinc-900"
        >
          {/* Abstract Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)] pointer-events-none" />
          
          <Globe className="mx-auto text-blue-500/50 mb-8 w-20 h-20" strokeWidth={1} />
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 relative z-10 leading-tight">
            Scale your business with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">confidence.</span>
          </h2>
          
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto text-lg font-medium">
            Stop letting administrative chaos hold back your growth. Join the operators building their future on Aptro.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="/download" className="w-full sm:w-auto px-10 py-4 bg-white text-zinc-950 rounded-full font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl flex items-center justify-center gap-2">
              Initialize Platform <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-zinc-800 text-white rounded-full font-bold text-sm hover:bg-zinc-700 transition-all flex items-center justify-center">
              Talk to Sales
            </Link>
          </div>
        </motion.div>
        
      </div>
    </main>
  );
}