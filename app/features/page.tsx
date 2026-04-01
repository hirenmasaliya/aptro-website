"use client";

import { useState } from "react";
import { 
  BarChart3, FileText, ShoppingCart, Zap, ShieldCheck, 
  Smartphone, Layers, Users, RefreshCw, ArrowUpRight, 
  CheckCircle2, User, Building2, Briefcase, Globe
} from "lucide-react";
import Link from "next/link";

// --- Specialized Data ---
const roleContent = {
  freelancer: {
    badge: "Solo Explorer",
    title: "Tools for the solo founder.",
    desc: "Everything you need to look professional and stay organized without the overhead of a large team.",
    spotlight: [
      {
        title: "Personal Invoicing",
        desc: "Send beautiful, brand-aligned invoices in seconds. Get paid faster with integrated payment links.",
        icon: <FileText className="w-6 h-6" />,
        color: "from-blue-600/20 to-blue-400/5",
        accent: "text-blue-400",
        details: ["Custom branding", "Expense tracking", "Tax-ready exports"]
      },
      {
        title: "Client CRM",
        desc: "Keep a detailed history of every client interaction and order. Build relationships, not just spreadsheets.",
        icon: <Users className="w-6 h-6" />,
        color: "from-emerald-600/20 to-emerald-400/5",
        accent: "text-emerald-400",
        details: ["Client profiles", "Order history", "Automated reminders"]
      }
    ]
  },
  business: {
    badge: "Enterprise Grade",
    title: "Scale your operations.",
    desc: "Advanced infrastructure designed for teams that need to sync inventory, manage staff, and analyze global sales.",
    spotlight: [
      {
        title: "Multi-Location Inventory",
        desc: "Sync stock levels across multiple warehouses and storefronts in real-time. Never oversell again.",
        icon: <RefreshCw className="w-6 h-6" />,
        color: "from-purple-600/20 to-purple-400/5",
        accent: "text-purple-400",
        details: ["Low-stock alerts", "Batch imports", "Warehouse transfer"]
      },
      {
        title: "Team Permissions",
        desc: "Assign roles to staff, accountants, and managers. Control exactly who sees your financial data.",
        icon: <ShieldCheck className="w-6 h-6" />,
        color: "from-orange-600/20 to-orange-400/5",
        accent: "text-orange-400",
        details: ["Audit logs", "Role-based access", "Manager approvals"]
      }
    ]
  }
};

const commonFeatures = [
  { title: "Cloud Security", icon: <ShieldCheck size={20} />, desc: "AES-256 bank-grade encryption." },
  { title: "Mobile App", icon: <Smartphone size={20} />, desc: "Manage business on iOS & Android." },
  { title: "Instant Sync", icon: <Zap size={20} />, desc: "Real-time cloud reconciliation." },
  { title: "API Access", icon: <Layers size={20} />, desc: "Integrate with 2000+ other apps." },
  { title: "Global Ready", icon: <Globe size={20} />, desc: "100+ currencies and tax zones." },
  { title: "24/7 Support", icon: <Briefcase size={20} />, desc: "Expert help whenever you need it." },
];

export default function FeaturesPage() {
  const [role, setRole] = useState<"freelancer" | "business">("freelancer");

  const activeContent = roleContent[role];

  return (
    <main className="pt-32 pb-20 bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
            Platform Capabilities
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-8">
            Tailored for your <br />
            <span className="text-blue-500 italic">growth.</span>
          </h1>

          {/* Role Switcher */}
          <div className="inline-flex p-1 bg-white/5 rounded-2xl border border-white/10 mb-8 backdrop-blur-md">
            <button 
              onClick={() => setRole("freelancer")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${role === "freelancer" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-gray-400 hover:text-white"}`}
            >
              <User size={16} /> Freelancer
            </button>
            <button 
              onClick={() => setRole("business")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${role === "business" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-gray-400 hover:text-white"}`}
            >
              <Building2 size={16} /> Business
            </button>
          </div>
        </div>

        {/* --- Spotlight Features (Dynamic) --- */}
        <div className="space-y-40 mb-40">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold mb-4">{activeContent.title}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">{activeContent.desc}</p>
          </div>

          {activeContent.spotlight.map((feature, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${feature.accent}`}>
                  {feature.icon}
                </div>
                <h3 className="text-4xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed">{feature.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {feature.details.map(detail => (
                    <div key={detail} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={16} className={feature.accent} /> {detail}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 w-full relative group">
                <div className={`absolute -inset-4 bg-linear-to-br ${feature.color} blur-3xl rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="relative aspect-16/10 rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                     <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">{activeContent.badge}</p>
                     <p className="text-2xl font-black text-white/10 italic">Interactive Preview</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Common Infrastructure --- */}
        <section className="pt-32 border-t border-white/5">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Aptro Standard</h2>
            <p className="text-gray-500 leading-relaxed">Universal features included in every plan to ensure your business remains secure and connected.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonFeatures.map((f, i) => (
              <div key={i} className="group p-8 rounded-4xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/20 hover:bg-blue-500/2 transition-all">
                <div className="mb-6 inline-block p-3 rounded-xl bg-white/5 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="mt-40 relative group overflow-hidden rounded-[4rem]">
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px]" />
          <div className="relative p-12 lg:p-24 border border-white/10 bg-black text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tighter">Ready to experience <br />the difference?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/download" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-50 transition-all">
                Download for {role === "freelancer" ? "Mobile" : "Desktop"}
              </Link>
              <Link href="/pricing" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                View All Plans
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}