"use client";

import { 
  ShoppingCart, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ArrowUpRight 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Order Management",
      desc: "Real-time visibility into your entire sales pipeline. From 'Pending' to 'Delivered', never lose track of a customer again.",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "text-blue-500",
      border: "hover:border-blue-500/50",
      glow: "group-hover:bg-blue-500/5",
    },
    {
      title: "Invoice Generator",
      desc: "Generate professional, brand-aligned invoices in seconds. Compliant with global tax standards and ready for PDF export.",
      icon: <FileText className="w-6 h-6" />,
      color: "text-purple-500",
      border: "hover:border-purple-500/50",
      glow: "group-hover:bg-purple-500/5",
    },
    {
      title: "Business Insights",
      desc: "Deep-dive into your sales data with automated charts and monthly projections sent directly to your inbox.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-emerald-500",
      border: "hover:border-emerald-500/50",
      glow: "group-hover:bg-emerald-500/5",
    },
    {
      title: "Secure Data",
      desc: "Your business intelligence is protected by AES-256 bank-grade encryption and daily redundant cloud backups.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "text-red-500",
      border: "hover:border-red-500/50",
      glow: "group-hover:bg-red-500/5",
    },
    {
      title: "Instant Sync",
      desc: "Manage your business across iOS, Android, and Web with zero-latency cloud reconciliation and offline mode.",
      icon: <Zap className="w-6 h-6" />,
      color: "text-yellow-500",
      border: "hover:border-yellow-500/50",
      glow: "group-hover:bg-yellow-500/5",
    },
    {
      title: "Global Commerce",
      desc: "Support for 100+ currencies and localized tax zones to help you scale your business to any corner of the globe.",
      icon: <Globe className="w-6 h-6" />,
      color: "text-cyan-500",
      border: "hover:border-cyan-500/50",
      glow: "group-hover:bg-cyan-500/5",
    },
  ];

  return (
    <section id="features" className="py-32 bg-[#050505] text-white overflow-hidden selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* --- Background Ambient Glow --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* --- Header Section --- */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-8">
            The Engine of Growth
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
            Precision built <br />
            for <span className="text-white">operators.</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Aptro provides a comprehensive suite of tools designed to help you 
            eliminate administrative friction and focus on building your brand.
          </p>
        </div>

        {/* --- Feature Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`group relative p-10 rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] transition-all duration-500 ${f.border} overflow-hidden`}
            >
              {/* Radial Mouse-Follow Glow (Simulated with group hover) */}
              <div className={`absolute inset-0 opacity-0 ${f.glow} transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className={`mb-8 inline-flex p-4 rounded-2xl bg-white/5 ${f.color} group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500 border border-white/5`}>
                  {f.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight flex items-center justify-between">
                  {f.title}
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-gray-600" />
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                  {f.desc}
                </p>
                
                {/* Visual Accent Line */}
                <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}