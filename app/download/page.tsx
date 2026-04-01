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
  Zap
} from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    name: "Android",
    version: "v1.2.0",
    size: "24MB",
    icon: <Smartphone className="w-6 h-6" />,
    cta: "Get it on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
    isPrimary: true,
    rating: "4.9",
    reviews: "2k+"
  },
  {
    name: "iOS",
    version: "v1.1.8",
    size: "31MB",
    icon: <Smartphone className="w-6 h-6" />,
    cta: "Download on App Store",
    href: "https://apps.apple.com/app/your-app-id",
    isPrimary: true,
    rating: "4.8",
    reviews: "1.5k+"
  },
  {
    name: "Windows Desktop",
    version: "v1.0.2 (Beta)",
    size: "115MB",
    icon: <Monitor className="w-6 h-6" />,
    cta: "Download .EXE",
    href: "/files/aptro-setup.exe",
    isPrimary: false,
    rating: null,
    reviews: null
  }
];

export default function DownloadPage() {
  return (
    <main className="pt-32 pb-32 bg-[#050505] text-white selection:bg-blue-500/30">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-8 animate-fade-in">
            <Zap size={12} fill="currentColor" /> Multi-Platform Sync
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 italic bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500">
            Aptro <span className="text-blue-500">Everywhere.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Experience the full power of Aptro on any device. Your business data 
            stays in perfect sync, whether you're in the office or on the move.
          </p>
        </div>

        {/* --- Main Download Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {platforms.map((platform) => (
            <div 
              key={platform.name}
              className={`relative p-1 rounded-[3rem] transition-all duration-500 ${
                platform.isPrimary 
                  ? 'bg-linear-to-b from-blue-500/40 to-transparent hover:from-blue-500/60' 
                  : 'bg-white/5 hover:bg-white/10'
              } group`}
            >
              <div className="bg-[#080808] rounded-[2.9rem] p-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-white/5 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform duration-500 border border-white/5">
                    {platform.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Stable Build</span>
                    <span className="text-xs font-mono px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">{platform.version}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-2 tracking-tight">{platform.name}</h3>
                <p className="text-sm text-gray-500 mb-8 font-medium">Approx. {platform.size}</p>

                {/* Rating Info */}
                {platform.rating && (
                  <div className="flex items-center gap-4 mb-10 pb-8 border-b border-white/5">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-bold text-white">{platform.rating}</span>
                    </div>
                    <span className="text-xs text-gray-600 font-bold uppercase tracking-widest">{platform.reviews} Reviews</span>
                  </div>
                )}

                <div className="mt-auto">
                  <a 
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 ${
                      platform.isPrimary 
                        ? 'bg-white text-black hover:bg-blue-500 hover:text-white shadow-xl shadow-white/5' 
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <Download size={18} />
                    {platform.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- QR Code & Security --- */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-32">
          {/* QR Card */}
          <div className="relative p-12 rounded-[4rem] bg-linear-to-br from-blue-600 to-indigo-800 overflow-hidden flex flex-col md:flex-row items-center gap-12 group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            <div className="relative p-5 bg-white rounded-[2.5rem] shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <QrCode size={160} className="text-black" />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full border-4 border-white">
                <Smartphone size={20} />
              </div>
            </div>
            <div className="relative text-center md:text-left z-10">
              <h2 className="text-4xl font-bold mb-6 tracking-tighter">Scan to install.</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed opacity-90">
                Point your camera at the code to instantly bridge your business to mobile.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold border border-white/10">
                <CheckCircle2 size={16} className="text-blue-200" /> Google & Apple Verified
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="p-12 rounded-[4rem] bg-[#0a0a0a] border border-white/5 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
              <ShieldCheck size={200} />
            </div>
            <div className="flex items-center gap-5 mb-8 relative z-10">
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <ShieldCheck className="text-emerald-400 w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold tracking-tighter">Bank-Grade <br/> Security</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 relative z-10">
              Your business intelligence is protected by AES-256 encryption and scanned hourly for threats.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {["No Ads / Trackers", "CCPA Compliant", "Biometric Lock", "Encrypted Cloud"].map((text) => (
                <div key={text} className="flex items-center gap-3 text-sm font-semibold text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Requirements --- */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Device Compatibility</h2>
            <p className="text-gray-500">Aptro is optimized for the latest hardware ecosystems.</p>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] backdrop-blur-md">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/2 text-gray-500 uppercase text-[10px] font-black tracking-[0.2em]">
                <tr>
                  <th className="px-8 py-6">Platform</th>
                  <th className="px-8 py-6">Minimum</th>
                  <th className="px-8 py-6">Best Experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { p: "Android", m: "OS 9.0 (Pie)", r: "OS 14.0+" },
                  { p: "iOS / iPadOS", m: "iOS 15.0", r: "iOS 17.0+" },
                  { p: "Windows", m: "Win 10 (64-bit)", r: "Win 11" }
                ].map((row) => (
                  <tr key={row.p} className="hover:bg-white/1 transition-colors">
                    <td className="px-8 py-6 font-bold text-white">{row.p}</td>
                    <td className="px-8 py-6 text-gray-500">{row.m}</td>
                    <td className="px-8 py-6 text-blue-400 font-medium">{row.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}