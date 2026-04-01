"use client";

import { 
  Users, 
  Heart, 
  Target, 
  ShieldCheck, 
  Globe, 
  Eye, 
  Compass, 
  Trophy,
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    title: "Simplicity First",
    desc: "Power shouldn't be noisy. We obsess over every pixel to ensure your workflow is effortless and silent.",
    icon: <Heart className="text-pink-500" />
  },
  {
    title: "Rooted in Growth",
    desc: "Our success is a lag-measure of yours. We build features that solve real bottlenecks, not just add fluff.",
    icon: <Target className="text-blue-500" />
  },
  {
    title: "Bank-Grade Security",
    desc: "Privacy isn't a feature; it's the foundation. We implement AES-256 encryption across all business data layers.",
    icon: <ShieldCheck className="text-emerald-500" />
  }
];

const strategy = [
  {
    label: "Our Mission",
    title: "Automate the Mundane",
    desc: "To eliminate the administrative burden on small business owners, giving them back 20 hours a week to focus on innovation and craft.",
    icon: <Compass className="text-blue-400" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    label: "Our Vision",
    title: "The Standard for Commerce",
    desc: "To become the global operating system for modern entrepreneurship, where managing a global brand is as easy as sending a text.",
    icon: <Eye className="text-purple-400" />,
    color: "from-purple-500/20 to-transparent"
  },
  {
    label: "Our Goal",
    title: "Empower 1M Founders",
    desc: "By 2028, we aim to have facilitated over $10B in commerce for independent founders through our streamlined invoicing and logistics tools.",
    icon: <Trophy className="text-amber-400" />,
    color: "from-amber-500/20 to-transparent"
  }
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 bg-[#050505] text-white selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <div className="max-w-4xl mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-8">
            Established 2024
          </div>
          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
            The backbone for <br />
            modern commerce.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            Aptro was built on a simple observation: Small business owners spend 
            too much time on paperwork. We built the digital infrastructure to change that.
          </p>
        </div>

        {/* --- Mission / Vision / Goal Grid --- */}
        <section className="grid lg:grid-cols-3 gap-6 mb-32">
          {strategy.map((item, i) => (
            <div key={i} className={`relative p-8 rounded-4xl border border-white/5 bg-linear-to-br ${item.color} overflow-hidden group`}>
              <div className="relative z-10">
                <div className="mb-6 p-3 w-fit rounded-xl bg-black/40 border border-white/10">
                  {item.icon}
                </div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">{item.label}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* --- Brand Story Section --- */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="relative group">
             {/* Glow Effect */}
            <div className="absolute -inset-4 bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden border border-white/10 bg-[#0a0a0a] flex items-center justify-center">
              <span className="text-white/5 font-black text-6xl uppercase -rotate-12 tracking-widest pointer-events-none">APTRO HQ</span>
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                <p className="text-xs text-gray-400 italic">"We don't just build software; we build time for creators."</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Built by founders, <br/> for founders.</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                What began as a custom invoicing script for a local coffee shop in Jetpur has evolved into 
                a comprehensive management suite used globally. 
              </p>
              <p>
                Whether you are a solo freelancer or a scaling enterprise, Aptro provides the 
                clarity you need to make data-driven decisions. We've removed the complexity of 
                inventory, billing, and logistics so you can focus on your craft.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-8">
              <div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Uptime Reliability</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Expert Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Values --- */}
        <section className="py-24 border-y border-white/5 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">The Aptro Philosophy</h2>
              <p className="text-gray-500">Principles that guide our engineering and design choices every single day.</p>
            </div>
            <Link href="/careers" className="text-sm font-bold text-blue-400 flex items-center gap-2 hover:underline">
              Join the team <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="group">
                <div className="mb-6 inline-block">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Final CTA --- */}
        <div className="relative p-12 lg:p-24 rounded-[4rem] bg-white text-black overflow-hidden text-center">
           {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 relative z-10">
            Ready to reclaim <br /> your time?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="/download" className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">
              Get Started for Free
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-black/10 rounded-full font-bold hover:bg-black/5 transition-colors">
              Talk to Sales
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}