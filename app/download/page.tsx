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
  Cloud
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "Android",
    version: "v1.2.0 Stable",
    size: "24.5 MB",
    icon: <Smartphone strokeWidth={1.5} />,
    cta: "Google Play Store",
    href: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
    featured: true,
    stats: { rating: "4.9", count: "2k+" }
  },
  {
    name: "iOS",
    version: "v1.1.8 Stable",
    size: "31.2 MB",
    icon: <Smartphone strokeWidth={1.5} />,
    cta: "Apple App Store",
    href: "#",
    featured: true,
    stats: { rating: "4.8", count: "1.5k+" }
  },
  {
    name: "Windows Desktop",
    version: "v1.0.2 Beta",
    size: "115.0 MB",
    icon: <Monitor strokeWidth={1.5} />,
    cta: "Download .EXE",
    href: "#",
    featured: false,
    stats: null
  }
];

export default function DownloadPage() {
  return (
    <main className="pt-40 pb-32 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Background Soft Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <div className="max-w-5xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-100"
          >
            Universal Deployment
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-zinc-950"
          >
            Aptro <br /><span className="text-blue-600 italic">Everywhere.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Seamlessly bridge your office to your pocket. Our multi-platform architecture ensures 
            your business intelligence is synchronized across every touchpoint.
          </motion.p>
        </div>

        {/* --- Platform Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {platforms.map((platform, i) => (
            <motion.div 
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${
                platform.featured 
                ? 'bg-blue-50/30 border-blue-100 shadow-2xl shadow-blue-50' 
                : 'bg-white border-zinc-100 shadow-sm hover:shadow-xl'
              }`}
            >
              <div className="flex justify-between items-start mb-14">
                <div className={`p-4 rounded-2xl ${platform.featured ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-zinc-100 text-zinc-900'}`}>
                  {platform.icon}
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-300 mb-2">Build Status</span>
                  <span className="text-[10px] font-bold px-3 py-1 bg-white border border-zinc-100 rounded-full text-zinc-500">{platform.version}</span>
                </div>
              </div>

              <h3 className="text-3xl font-black mb-2 tracking-tighter text-zinc-950">{platform.name}</h3>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-10">{platform.size}</p>

              {platform.stats && (
                <div className="flex items-center gap-6 mb-12 pt-8 border-t border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-blue-600" fill="currentColor" />
                    <span className="text-sm font-black text-zinc-950">{platform.stats.rating}</span>
                  </div>
                  <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{platform.stats.count} Verified Reviews</span>
                </div>
              )}

              <div className="mt-auto">
                <Link 
                  href={platform.href}
                  className={`w-full py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${
                    platform.featured 
                    ? 'bg-zinc-950 text-white hover:bg-blue-600 shadow-2xl shadow-zinc-200' 
                    : 'bg-white border border-zinc-200 text-zinc-950 hover:bg-zinc-50'
                  }`}
                >
                  <Download size={16} /> {platform.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Hybrid QR & Trust Section --- */}
        <div className="grid lg:grid-cols-12 gap-10 mb-48 items-stretch">
          {/* Scan Card */}
          <div className="lg:col-span-7 relative p-12 lg:p-20 rounded-[4rem] bg-zinc-950 text-white overflow-hidden group flex flex-col md:flex-row items-center gap-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)]" />
            
            <div className="relative p-6 bg-white rounded-[3rem] shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700">
              <QrCode size={180} className="text-zinc-950" />
              <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-3 rounded-full border-8 border-zinc-950">
                <CheckCircle2 size={24} />
              </div>
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none">Scan to <br />Synchronize.</h2>
              <p className="text-zinc-400 text-xl font-light mb-10 leading-relaxed">
                Point your lens to bridge your workspace instantly. Enterprise verification included.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">v14.0+ Ready</div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">E2E Encrypted</div>
              </div>
            </div>
          </div>

          {/* Infrastructure Card */}
          <div className="lg:col-span-5 p-12 lg:p-16 rounded-[4rem] bg-zinc-50 border border-zinc-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Server size={250} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-zinc-100 mb-8">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-4xl font-black tracking-tighter mb-6 text-zinc-950">Sovereign <br /> Security</h2>
              <p className="text-zinc-500 text-lg leading-relaxed font-medium mb-10">
                Built on AES-256 standards with hourly redundant cloud backups and biometric verification.
              </p>
              <div className="space-y-4">
                {["SOC2 Type II Compliant", "CCPA/GDPR Governance", "ISO 27001 Protocol"].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- System Requirements --- */}
        <div className="max-w-4xl mx-auto py-24 border-t border-zinc-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black tracking-tighter text-zinc-950 mb-4">Device Specifications</h2>
              <p className="text-zinc-500 font-medium">Aptro is optimized for low-latency performance on modern hardware ecosystems.</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-300">
              <Info size={14} /> Requirement v2.0
            </div>
          </div>

          <div className="overflow-hidden rounded-[3rem] border border-zinc-100 bg-white">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 border-b border-zinc-100">
                <tr>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Environment</th>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Base Build</th>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {[
                  { p: "Android Ecosystem", m: "OS 9.0 (API 28)", r: "OS 14.0 (API 34)" },
                  { p: "iOS / iPadOS", m: "Version 15.0", r: "Version 17.4+" },
                  { p: "Windows Desktop", m: "Win 10 (Build 19041)", r: "Windows 11 Pro" }
                ].map((row) => (
                  <tr key={row.p} className="hover:bg-zinc-50 transition-colors group">
                    <td className="px-10 py-8 font-black text-zinc-950 text-sm">{row.p}</td>
                    <td className="px-10 py-8 text-zinc-400 text-xs font-bold">{row.m}</td>
                    <td className="px-10 py-8 text-blue-600 text-xs font-bold tracking-widest">{row.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- Infrastructure Partners --- */}
        <div className="mt-40 text-center pb-20 border-t border-zinc-100 pt-20">
          <p className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.5em] mb-12">Global Settlement Nodes</p>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-125">
             <div className="flex items-center gap-2 font-black text-xl italic tracking-widest text-zinc-950"><Cloud size={20}/> CLOUD</div>
             <div className="flex items-center gap-2 font-black text-xl italic tracking-widest text-zinc-950"><ShieldCheck size={20}/> SECURE</div>
             <div className="flex items-center gap-2 font-black text-xl italic tracking-widest text-zinc-950"><Zap size={20}/> INSTANT</div>
          </div>
        </div>

      </div>
    </main>
  );
}