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
  Smartphone,
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
  hidden: { opacity: 0, y: 30 },
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
    title: "Keep it Simple",
    desc: "Software shouldn't be hard to use. We make sure our app is easy to understand, so you can work faster without needing a manual.",
    icon: <Heart size={20} />
  },
  {
    title: "Focused on Your Growth",
    desc: "We only succeed when you do. We build tools that solve your real daily problems, like tracking stock and managing bills easily.",
    icon: <Target size={20} />
  },
  {
    title: "100% Safe & Secure",
    desc: "Your data belongs to you. We use bank-level security to keep your business records and customer details totally safe.",
    icon: <ShieldCheck size={20} />
  }
];

const strategy = [
  {
    label: "Our Mission",
    title: "Make Work Easy",
    desc: "To help business owners save time and money by giving them tools that are incredibly easy to use and manage every day.",
    icon: <Compass size={24} />
  },
  {
    label: "Our Vision",
    title: "Business for Everyone",
    desc: "To become the go-to app where managing a shop or business is smooth, affordable, and stress-free for anyone.",
    icon: <Eye size={24} />
  },
  {
    label: "Our Goal",
    title: "Help 1 Million Owners",
    desc: "By 2028, we want to help 1 million people run their businesses better, helping them grow and succeed with our simple app.",
    icon: <Trophy size={24} />
  }
];

const journeySteps = [
  {
    year: "2024",
    title: "The Problem in Jetpur",
    desc: "Running a business in Jetpur, Gujarat, our founders saw a big problem: shop owners had to use 10 different apps for bills, stock, and notes. It wasted hours every single day.",
    icon: <MapPin size={24} />
  },
  {
    year: "2025",
    title: "Building the Solution",
    desc: "We couldn't find a simple app that did everything, so we built it ourselves. We made an easy tool to handle our own billing and stock, and it worked like magic.",
    icon: <Smartphone size={24} />
  },
  {
    year: "2026",
    title: "Sharing with the World",
    desc: "We realized thousands of other shop owners and freelancers needed the same help. So we turned our tool into Aptro: one easy app to run your entire business from your phone.",
    icon: <Rocket size={24} />
  }
];

export default function AboutPage() {
  return (
    <main className={`min-h-screen pt-36 pb-32 text-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative tracking-tight ${jakarta.className}`}>
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-slate-50/90 to-slate-50" />
        <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full mix-blend-multiply" />
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100 mb-8 shadow-sm"
          >
            <Sparkles size={14} className="text-blue-500" /> Established 2024
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter mb-6 leading-[1.05] text-zinc-950"
          >
            The simple way to <br />
            <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent italic pr-2 pb-2">run your business.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Aptro was built on a simple idea: You should spend your time growing your business, not doing paperwork. We made the app that makes this possible.
          </motion.p>
        </motion.div>

        {/* --- The Aptro Journey (Narrative Section) --- */}
        <section className="mb-40">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Story Hook */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEasing }}
              className="lg:w-1/3 lg:sticky lg:top-40"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-6 leading-tight">
                Born in Jetpur, <br />built for <span className="text-blue-600 italic">everyone.</span>
              </h2>
              <p className="text-zinc-500 font-medium leading-relaxed text-lg mb-10">
                Great apps aren't just made in big cities. They are built by people who face real daily problems and decide to fix them.
              </p>
              
              <div className="flex gap-10 pt-10 border-t border-zinc-200/80">
                <div>
                  <p className="text-3xl font-bold text-zinc-950 tracking-tight">100%</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-2">Safe & Secure</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-zinc-950 tracking-tight">24/7</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-2">Help & Support</p>
                </div>
              </div>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="lg:w-2/3 relative">
              <div className="absolute top-0 bottom-0 left-[23px] w-[2px] bg-blue-100 hidden md:block" />
              
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
                    <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 bg-blue-50 rounded-2xl border border-blue-200 shadow-sm items-center justify-center z-10 text-blue-600 transition-transform duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>
                    
                    <div className="p-8 md:p-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.04)] hover:bg-white hover:border-blue-200 transition-all duration-500 group">
                      <span className="inline-block px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 shadow-sm text-[10px] font-bold uppercase tracking-widest mb-6 transition-colors">
                        Phase 0{i + 1} • {step.year}
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-950 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{step.title}</h3>
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-950">Where we are going</h2>
            <p className="text-lg text-zinc-500 font-medium">Our big goals and what guides us every single day to make the app better for you.</p>
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
                className="p-8 lg:p-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.04)] hover:bg-white hover:border-blue-200 hover:-translate-y-1 transition-all duration-500 flex flex-col h-full group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-blue-50 border border-blue-100 shadow-sm text-blue-600 transition-transform group-hover:scale-110 duration-500">
                  {item.icon}
                </div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3 group-hover:text-blue-500 transition-colors">{item.label}</span>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- Philosophy Section --- */}
        <section className="py-24 border-t border-zinc-200/80 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-950">Our Promise</h2>
              <p className="text-zinc-500 font-medium leading-relaxed text-lg">The basic rules we follow to make sure our app is always helpful, safe, and easy for you to use.</p>
            </div>
            <Link href="/careers" className="text-sm font-bold text-zinc-950 flex items-center gap-2 group hover:text-blue-600 transition-colors">
              Join our team <ArrowUpRight size={18} className="text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 transition-all" />
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
                className="group p-8 lg:p-10 rounded-[2rem] bg-white/70 backdrop-blur-md border border-zinc-200/60 shadow-sm hover:bg-white hover:shadow-[0_8px_30px_rgba(37,99,235,0.04)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="mb-6 w-12 h-12 bg-blue-50 rounded-2xl shadow-sm border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEasing }}
            className="relative px-8 py-20 lg:p-24 rounded-[3rem] overflow-hidden bg-zinc-950 text-center shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)] ring-1 ring-white/10"
          >
            {/* Immersive Dark Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/30 via-indigo-600/10 to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-8 text-white shadow-inner backdrop-blur-md">
                <Globe size={28} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
                Ready to grow <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200 italic font-medium pr-2">your business?</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 leading-relaxed font-medium max-w-lg">
                Stop worrying about paperwork and messy apps. Join thousands of owners running their business easily on Aptro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto">
                <Link
                  href="/download"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-100 flex items-center justify-center gap-2 group shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
                >
                  Get Started Free
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 text-blue-600" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[0.98] flex items-center justify-center backdrop-blur-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
        
      </div>
    </main>
  );
}