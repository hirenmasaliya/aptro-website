"use client";

import { 
  Smartphone, 
  Monitor, 
  Download, 
  ChevronRight, 
  QrCode, 
  CheckCircle2,
  ShieldCheck,
  Star,
  Zap,
  Info,
  Server,
  Cloud,
  Apple,
  AppWindow
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "Android App",
    version: "v1.7.1 Stable",
    size: "24.5 MB",
    icon: <Smartphone size={24} />,
    cta: "Download APK",
    href: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
    featured: true,
    stats: { rating: "4.9", count: "2k+" },
    tag: "Primary Platform"
  },
  {
    name: "iOS iPhone / iPad",
    version: "v1.7.0 Stable",
    size: "31.2 MB",
    icon: <Apple size={24} />,
    cta: "App Store",
    href: "#",
    featured: true,
    stats: { rating: "4.8", count: "1.5k+" },
    tag: "Coming Soon"
  },
  {
    name: "Windows Desktop",
    version: "v1.0.2 Beta",
    size: "115.0 MB",
    icon: <AppWindow size={24} />,
    cta: "Download .EXE",
    href: "#",
    featured: false,
    stats: null,
    tag: "For Administrative Desks"
  }
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen pt-36 pb-32 bg-zinc-50 text-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative">
      
      {/* Soft Background Dynamics */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.3] pointer-events-none -z-10" />
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/40 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-50/60 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-200 shadow-sm"
          >
            <Cloud size={14} /> Universal Deployment
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-zinc-900"
          >
            Aptro <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Everywhere.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Seamlessly bridge your office to your pocket. Our multi-platform architecture ensures your business intelligence is synchronized across every touchpoint.
          </motion.p>
        </div>

        {/* --- Platform Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {platforms.map((platform, i) => (
            <motion.div 
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 md:p-10 rounded-[2.5rem] border transition-all duration-300 flex flex-col group ${
                platform.featured 
                ? 'bg-white border-zinc-200/80 shadow-xl shadow-zinc-200/40 hover:-translate-y-2' 
                : 'bg-zinc-100/50 border-zinc-200/50 shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-1'
              }`}
            >
              {platform.featured && (
                <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                  {platform.tag}
                </div>
              )}
              
              <div className="flex justify-between items-start mb-12">
                <div className={`p-4 rounded-2xl flex items-center justify-center transition-colors ${
                  platform.featured 
                    ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' 
                    : 'bg-zinc-200/50 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white'
                }`}>
                  {platform.icon}
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Build Status</span>
                  <span className="text-xs font-bold text-zinc-900 bg-zinc-100 px-3 py-1 rounded-md">{platform.version}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 tracking-tight text-zinc-900">{platform.name}</h3>
              <p className="text-sm font-semibold text-zinc-500 mb-8">{platform.size}</p>

              {platform.stats && (
                <div className="flex items-center gap-4 mb-10 pt-6 border-t border-zinc-100/80">
                  <div className="flex items-center gap-1.5 bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
                    <Star size={14} className="text-blue-600" fill="currentColor" />
                    <span className="text-sm font-black text-blue-900">{platform.stats.rating}</span>
                  </div>
                  <span className="text-xs font-semibold text-zinc-400">{platform.stats.count} Verified Reviews</span>
                </div>
              )}

              <div className="mt-auto pt-4">
                <Link 
                  href={platform.href}
                  className={`w-full py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                    platform.featured 
                    ? 'bg-zinc-900 text-white hover:bg-blue-600 shadow-md' 
                    : 'bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  <Download size={18} /> {platform.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Hybrid QR & Trust Section --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-40 items-stretch">
          
          {/* Scan Card */}
          <div className="lg:col-span-7 relative p-10 lg:p-16 rounded-[3rem] bg-zinc-950 text-white overflow-hidden group flex flex-col md:flex-row items-center gap-12 shadow-2xl border border-zinc-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_60%)] pointer-events-none" />
            
            <div className="relative p-5 bg-white rounded-3xl shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500 shrink-0">
              <QrCode size={160} className="text-zinc-900" strokeWidth={1.5} />
              <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-2.5 rounded-full border-4 border-zinc-950 shadow-lg">
                <CheckCircle2 size={20} strokeWidth={2.5} />
              </div>
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">Scan to <br />Synchronize.</h2>
              <p className="text-zinc-400 text-base font-medium mb-8 leading-relaxed max-w-sm">
                Point your lens to install and bridge your workspace instantly. Enterprise verification included.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-300">v14.0+ Ready</div>
                <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-300">E2E Encrypted</div>
              </div>
            </div>
          </div>

          {/* Infrastructure Card */}
          <div className="lg:col-span-5 p-10 lg:p-16 rounded-[3rem] bg-white border border-zinc-200/80 flex flex-col justify-center relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck size={200} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100 mb-8">
                <Server size={32} />
              </div>
              <h2 className="text-3xl font-black tracking-tight mb-4 text-zinc-900">Sovereign Security</h2>
              <p className="text-zinc-500 text-base leading-relaxed font-medium mb-8">
                Built on AES-256 standards with hourly redundant cloud backups and biometric verification across all devices.
              </p>
              <div className="space-y-4">
                {["SOC2 Type II Compliant", "CCPA/GDPR Governance", "ISO 27001 Protocol"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                    <div className="p-1 rounded-full bg-blue-100 text-blue-600">
                       <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- System Requirements --- */}
        <div className="max-w-5xl mx-auto pt-24 border-t border-zinc-200/80">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-3">Device Specifications</h2>
              <p className="text-zinc-500 font-medium text-lg">Aptro is optimized for low-latency performance on modern hardware ecosystems.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 bg-zinc-100 px-3 py-1.5 rounded-md">
              <Info size={16} /> Requirement v2.0
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-50 border-b border-zinc-200/80">
                  <tr>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-zinc-500">Environment</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-zinc-500">Base Build</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-blue-600">Recommended</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {[
                    { p: "Android Ecosystem", m: "OS 9.0 (API 28)", r: "OS 14.0+ (API 34)" },
                    { p: "iOS / iPadOS", m: "Version 15.0", r: "Version 17.4+" },
                    { p: "Windows Desktop", m: "Win 10 (Build 19041)", r: "Windows 11 Pro" }
                  ].map((row) => (
                    <tr key={row.p} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-8 py-6 font-bold text-zinc-900 text-sm whitespace-nowrap">{row.p}</td>
                      <td className="px-8 py-6 text-zinc-500 text-sm font-medium whitespace-nowrap">{row.m}</td>
                      <td className="px-8 py-6 text-blue-600 text-sm font-bold whitespace-nowrap">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}