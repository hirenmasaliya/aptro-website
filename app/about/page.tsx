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
import { motion, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Premium smooth easing
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

const values = [
  {
    title: "Simplicity First",
    desc: "Software should get out of your way. We obsess over every pixel to ensure your workflow remains silent, intuitive, and highly efficient.",
    icon: <Heart size={18} />
  },
  {
    title: "Rooted in Growth",
    desc: "Our success is a lag-measure of yours. We build features that solve real operational bottlenecks, not just vanity metrics.",
    icon: <Target size={18} />
  },
  {
    title: "Sovereign Security",
    desc: "Privacy is our absolute foundation. We implement enterprise-grade encryption across every layer of your commercial data.",
    icon: <ShieldCheck size={18} />
  }
];

const strategy = [
  {
    label: "Our Mission",
    title: "Automate the Mundane",
    desc: "To eliminate the administrative burden on independent business owners, giving them back 20 hours a week to focus entirely on their craft.",
    icon: <Compass size={22} />
  },
  {
    label: "Our Vision",
    title: "The Standard for Commerce",
    desc: "To become the global operating system for modern entrepreneurship, where managing a brand is as seamless as sending a text message.",
    icon: <Eye size={22} />
  },
  {
    label: "Our Goal",
    title: "Empower 1M Founders",
    desc: "By 2028, we aim to have facilitated over $10B in commerce for independent founders through our streamlined, unified tools.",
    icon: <Trophy size={22} />
  }
];

const journeySteps = [
  {
    year: "2024",
    title: "The Friction in Jetpur",
    desc: "Operating out of Jetpur, Gujarat, our founders faced a universal problem: running a business required juggling 10 different apps. Invoices here, inventory there, client notes everywhere. The 'integration tax' was stealing hours of focus every single day.",
    icon: <MapPin size={20} />
  },
  {
    year: "2025",
    title: "Building the Engine",
    desc: "Unable to find a tool that combined B2B ledgers, task management, and CRM elegantly, we built it ourselves. What started as an internal, localized script to automate our own billing and inventory quickly proved to be a lifesaver.",
    icon: <Code2 size={20} />
  },
  {
    year: "2026",
    title: "Scaling the Architecture",
    desc: "We realized thousands of other freelancers and agencies were drowning in the same administrative chaos. We rebuilt our internal tool into Aptro: a unified, sovereign operating system designed to automate commerce at scale.",
    icon: <Rocket size={20} />
  }
];

export default function AboutPage() {
  return (
    <main className={`min-h-screen pt-36 pb-32 bg-[#FAFAFA] text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden relative ${jakarta.className}`}>
      
      {/* Premium Minimal Background */}
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
          className="max-w-3xl mb-32"
        >
          <motion.div 
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium border border-zinc-200/60 mb-8"
          >
            <Sparkles size={14} className="text-zinc-400" /> Established 2024
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold tracking-tight mb-6 leading-[1.05] text-zinc-950"
          >
            The architecture <br />
            <span className="text-zinc-400 italic">of commerce.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Aptro was founded on a simple premise: Founders should spend their time creating, not filing. We build the invisible infrastructure that makes that possible.
          </motion.p>
        </motion.div>

        {/* --- The Aptro Journey (Narrative Section) --- */}
        <section className="mb-40">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Story Hook */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEasing }}
              className="lg:w-1/3 lg:sticky lg:top-40"
            >
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-950 mb-6 leading-tight">
                Born in Jetpur, <br />built for the <span className="text-zinc-400 italic">world.</span>
              </h2>
              <p className="text-zinc-500 font-medium leading-relaxed text-lg mb-10">
                Great software isn't built in a vacuum. It's built by people who felt the friction of running a business and decided to architect a solution.
              </p>
              
              <div className="flex gap-10 pt-10 border-t border-zinc-200/60">
                <div>
                  <p className="text-3xl font-semibold text-zinc-950 tracking-tight">99.9%</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mt-2">Reliability</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-zinc-950 tracking-tight">24/7</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mt-2">Support SLA</p>
                </div>
              </div>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="lg:w-2/3 relative">
              <div className="absolute top-0 bottom-0 left-6 w-px bg-zinc-200/60 hidden md:block" />
              
              <div className="space-y-12">
                {journeySteps.map((step, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ duration: 0.8, delay: i * 0.1, ease: premiumEasing }}
                    key={i} 
                    className="relative pl-0 md:pl-20"
                  >
                    {/* Timeline Node */}
                    <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 bg-[#FAFAFA] rounded-xl border border-zinc-200/80 shadow-sm items-center justify-center z-10 text-zinc-600">
                      {step.icon}
                    </div>
                    
                    <div className="p-10 rounded-[2rem] bg-white border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all duration-500 group">
                      <span className="inline-block px-3 py-1.5 bg-zinc-100 text-zinc-500 rounded-md text-[10px] font-semibold uppercase tracking-widest mb-6">
                        Phase 0{i + 1} • {step.year}
                      </span>
                      <h3 className="text-2xl font-semibold text-zinc-950 mb-4 tracking-tight">{step.title}</h3>
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
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-950">Strategic Horizon</h2>
            <p className="text-lg text-zinc-500 font-medium">Where we are going, and what strictly guides our daily engineering decisions.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {strategy.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpItem}
                className="p-10 rounded-[2rem] bg-white border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all duration-500 flex flex-col h-full group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 bg-[#FAFAFA] border border-zinc-100 text-zinc-950 transition-transform group-hover:-translate-y-1 duration-500">
                  {item.icon}
                </div>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-3">{item.label}</span>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight text-zinc-950">{item.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- Philosophy Section --- */}
        <section className="py-24 border-t border-zinc-200/60 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-zinc-950">The Philosophy</h2>
              <p className="text-zinc-500 font-medium leading-relaxed text-lg">Fundamental principles that strictly dictate our technical architecture and product design.</p>
            </div>
            <Link href="/careers" className="text-xs font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-2 group hover:text-zinc-950 transition-colors">
              Join the Mission <ArrowUpRight size={16} className="text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {values.map((v, i) => (
              <motion.div 
                key={i}
                variants={fadeUpItem}
                className="group p-10 rounded-[2rem] bg-[#FAFAFA] border border-zinc-100 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-zinc-200/60 transition-all duration-500"
              >
                <div className="mb-8 p-3 bg-white rounded-xl shadow-sm border border-zinc-100 w-fit text-zinc-950">
                  {v.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3 tracking-tight">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- Dark Mode Anchor CTA --- */}
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

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mb-8 text-white">
                <Globe size={24} />
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-white leading-tight">
                Scale your business <br />
                <span className="text-zinc-400 italic font-medium">with confidence.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Stop letting administrative chaos dictate your growth. Join the operators building their future on Aptro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  Initialize Platform
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 text-zinc-400" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-zinc-900 hover:scale-[0.98] flex items-center justify-center"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        
      </div>
    </main>
  );
}