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

const solutions = [
  {
    id: "e-commerce",
    title: "E-commerce & Retail",
    desc: "Sync your online store with physical inventory. Manage orders from Shopify, Amazon, and your local shop in one dashboard.",
    icon: <Store className="w-6 h-6" />,
    color: "from-blue-600/20 to-blue-400/5",
    accent: "text-blue-400",
    benefits: ["Real-time Stock Sync", "Omnichannel Orders", "Customer Loyalty Tracking"]
  },
  {
    id: "agencies",
    title: "Agencies & Consultants",
    desc: "Stop chasing payments. Automate professional invoicing and track billable hours directly against client projects.",
    icon: <Laptop className="w-6 h-6" />,
    color: "from-purple-600/20 to-purple-400/5",
    accent: "text-purple-400",
    benefits: ["Project-based Invoicing", "Automatic Late Fees", "Client Approval Portal"]
  },
  {
    id: "logistics",
    title: "Logistics & Distribution",
    desc: "Heavy-duty tools for high-volume movement. Track shipments, manage warehouse staff, and optimize your supply chain.",
    icon: <Truck className="w-6 h-6" />,
    color: "from-emerald-600/20 to-emerald-400/5",
    accent: "text-emerald-400",
    benefits: ["Batch Shipping Labels", "Warehouse Permissons", "Route Optimization"]
  }
];

export default function SolutionsPage() {
  return (
    <main className="pt-32 pb-32 bg-[#050505] text-white selection:bg-blue-500/30">
      
      {/* Background Decorative Element */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-125 h-125 bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-8">
            Tailored Industry Workflows
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
            Built for the way <br />
            you <span className="text-white">work.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            One platform, infinite possibilities. Aptro adapts to your business model, 
            providing the specific tools you need to automate and scale.
          </p>
        </div>

        {/* --- Solutions Grid --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-40">
          {solutions.map((item) => (
            <div 
              key={item.id}
              className="group relative p-1 rounded-[3rem] bg-white/5 hover:bg-linear-to-b hover:from-white/20 hover:to-transparent transition-all duration-500"
            >
              <div className="relative h-full bg-[#080808] rounded-[2.9rem] p-10 flex flex-col">
                <div className={`mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 ${item.accent} group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 grow">
                  {item.desc}
                </p>

                <div className="space-y-4 mb-10">
                  {item.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 text-xs font-bold text-gray-300">
                      <CheckCircle2 size={14} className={item.accent} />
                      {benefit}
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/contact?solution=${item.id}`} 
                  className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black transition-all"
                >
                  Explore Solution <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- Transformation Section (Before/After) --- */}
        <section className="relative p-12 lg:p-24 rounded-[4rem] bg-[#0a0a0a] border border-white/5 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter">
                Replace 5 tools <br /> with <span className="text-blue-500 italic text-glow">one.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                The average business owner uses 5+ apps to manage what Aptro does 
                in a single tab. We eliminate the "Integration Tax" so your data 
                is always accurate and always in sync.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <PieChart className="text-blue-500 mb-3" />
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Efficiency</p>
                  <p className="text-xl font-bold text-white">+45%</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Users2 className="text-emerald-500 mb-3" />
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Admin Time</p>
                  <p className="text-xl font-bold text-white">-12hrs/wk</p>
                </div>
              </div>
            </div>

            {/* Visual Comparison Mockup */}
            <div className="relative aspect-square bg-linear-to-br from-blue-600/20 to-purple-600/10 rounded-[3rem] border border-white/10 flex items-center justify-center group">
               <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity" />
               <Zap size={100} className="text-blue-500 animate-pulse" />
               <div className="absolute top-10 left-10 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                  Integrated Hub
               </div>
            </div>
          </div>
        </section>

        {/* --- Global Infrastructure CTA --- */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-8">Powering 10k+ global operations.</h2>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-30">
            <div className="flex items-center gap-2 font-black italic"><ShieldCheck /> SECURE</div>
            <div className="flex items-center gap-2 font-black italic"><BarChart /> ANALYTIC</div>
            <div className="flex items-center gap-2 font-black italic"><Zap /> INSTANT</div>
          </div>
        </div>

      </div>
    </main>
  );
}