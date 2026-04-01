"use client";

import { 
  ArrowRight, 
  Truck, 
  Play, 
  Star, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  ShoppingCart, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#050505] text-white selection:bg-blue-500/30">
      
      {/* 1. Layered Background Dynamics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-200 bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* --- Animated Badge --- */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              V2.0 is Live: <span className="text-white">Smart Invoicing Engine</span>
            </span>
            <ChevronRight size={12} className="text-gray-600" />
          </div>

          {/* --- High-Impact Typography --- */}
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95] bg-clip-text text-transparent bg-linear-to-b from-white via-white to-white/40">
            Automate your <br />
            <span className="text-blue-500 italic">business flow.</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            The all-in-one operating system for freelancers and scaling businesses.
            From instant invoicing to global logistics—Aptro handles the rest.
          </p>

          {/* --- Action Cluster --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <Link
              href="/download"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group"
            >
              Get Started for Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md group">
              <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Play size={14} fill="currentColor" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* --- Multi-Proof Banner --- */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-10 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800 overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="currentColor" />)}
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">10k+ Happy Founders</p>
              </div>
            </div>

            <div className="h-6 w-px bg-white/10 hidden md:block" />

            <div className="flex items-center gap-2 text-gray-500">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Bank-Grade Security</span>
            </div>

            <div className="h-6 w-px bg-white/10 hidden md:block" />

            <div className="flex items-center gap-2 text-gray-500">
              <Zap size={16} className="text-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest">99.9% Uptime</span>
            </div>
          </div>
        </div>

        {/* --- High-Fidelity App Preview --- */}
        <div className="mt-24 relative group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10 group-hover:bg-blue-600/20 transition-all duration-1000" />

          <div className="relative p-2.5 rounded-[3rem] bg-linear-to-b from-white/10 to-transparent border border-white/5 shadow-2xl backdrop-blur-sm">
            <div className="rounded-[2.7rem] overflow-hidden bg-[#080808] border border-white/5 shadow-2xl relative">

              {/* Simulated Browser Top Bar */}
              <div className="h-10 w-full bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="w-48 h-5 mx-auto bg-white/5 rounded-full text-[10px] text-gray-700 font-medium flex items-center justify-center">
                  aptro.app/dashboard
                </div>
              </div>

              {/* --- Main Dashboard Content --- */}
              <div className="aspect-16/10 bg-[#050505] p-6 lg:p-10 relative grid lg:grid-cols-3 gap-6">

                {/* Module 1: Revenue Performance */}
                <div className="lg:col-span-2 p-8 rounded-3xl bg-white/1 border border-white/5 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 p-8 text-blue-500 opacity-5 -rotate-12">
                    <BarChart3 size={150} strokeWidth={1} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                      <Zap size={14} className="text-blue-500" /> Revenue Pipeline
                    </div>
                    <div className="text-4xl font-black text-white mb-2 tracking-tighter">
                      $142,500.<span className="text-xl text-gray-600">00</span>
                    </div>
                    <p className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                      <ArrowUpRight size={14} /> +24.5% vs Last Month
                    </p>
                  </div>

                  <div className="relative h-12 w-full mt-6 bg-blue-600/5 rounded-lg border border-blue-500/10 flex items-center p-2 gap-0.5">
                    <div className="w-full h-1 bg-white/5 rounded-full relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 w-[70%] bg-blue-500 rounded-full" />
                    </div>
                    <span className="text-xs font-mono text-blue-300">Q3</span>
                  </div>
                </div>

                {/* Module 2: Order Pipeline */}
                <div className="grid grid-cols-2 gap-4">
                  <DashboardStat value="142" label="Pending" icon={<ShoppingCart size={16} />} />
                  <DashboardStat value="45" label="In Transit" icon={<Truck size={16} />} />
                  <DashboardStat value="89" label="Delivered" icon={<CheckCircle2 size={16} />} />
                  <DashboardStat value="$15k" label="At Risk" icon={<ShieldCheck size={16} />} isWarning />
                </div>

                {/* Module 3: Active Inventory */}
                <div className="lg:col-span-3 p-6 rounded-3xl bg-white/1 border border-white/5 space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">Latest Movements</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <InventoryRow name="Aptro Pods Pro" sku="APP-2026" qty="-14" status="Shipped" />
                    <InventoryRow name="MagSafe Charger" sku="MSG-2026" qty="+50" status="Received" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating UI Notification */}
              <div className="absolute top-24 right-10 p-4 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl hidden lg:block animate-in fade-in slide-in-from-right-10 duration-1000 delay-500 group-hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">New Order: #14280</div>
                </div>
                <div className="text-xl font-black text-white tracking-tighter mb-1">+$1,240.00</div>
                <p className="text-xs text-gray-600 font-medium">customer: j.doe@aptro.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Components ---

function DashboardStat({ value, label, icon, isWarning }: { value: string; label: string; icon: any; isWarning?: boolean }) {
  return (
    <div className={`p-5 rounded-2xl border ${isWarning ? 'border-orange-500/20 bg-orange-500/5' : 'border-white/5 bg-white/1'}`}>
      <div className={`mb-3 text-blue-500 ${isWarning ? 'text-orange-400' : ''}`}>
        {icon}
      </div>
      <div className={`text-2xl font-black text-white tracking-tight ${isWarning ? 'text-orange-400' : ''}`}>{value}</div>
      <p className="text-xs text-gray-600 font-medium">{label}</p>
    </div>
  );
}

function InventoryRow({ name, sku, qty, status }: { name: string; sku: string; qty: string; status: string }) {
  const isNegative = qty.startsWith("-");
  return (
    <div className="p-4 rounded-xl bg-black border border-white/5 flex items-center justify-between text-sm hover:bg-white/2 transition-colors">
      <div>
        <div className="font-bold text-white">{name}</div>
        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest">{sku}</div>
      </div>
      <div className="text-right">
        <div className={`font-black ${isNegative ? 'text-red-400' : 'text-emerald-400'}`}>{qty}</div>
        <div className="text-[10px] font-medium text-gray-500">{status}</div>
      </div>
    </div>
  );
}

function ChevronRight({ size, className }: { size: number, className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}