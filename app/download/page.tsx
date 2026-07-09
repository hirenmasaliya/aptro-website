"use client";

import { 
  Smartphone, 
  Download, 
  QrCode, 
  CheckCircle2,
  ShieldCheck,
  Server,
  Info,
  Apple,
  AppWindow,
  ArrowRight
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

const platforms = [
  {
    name: "Android App",
    version: "v1.7.1 Stable",
    size: "24.5 MB",
    icon: <Smartphone size={24} />,
    cta: "Download APK",
    href: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
    featured: true,
    tag: "Primary Platform"
  },
  {
    name: "iOS iPhone / iPad",
    version: "v1.7.0 Stable",
    size: "31.2 MB",
    icon: <Apple size={24} />,
    cta: "App Store",
    href: "#",
    featured: false,
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
    tag: "For Administrative Desks"
  }
];

export default function DownloadPage() {
  return (
    // Removed bg-[#FAFAFA] so the background image is visible
    <main className={`min-h-screen pt-36 pb-32 text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden relative ${jakarta.className}`}>
      
      {/* --- Server-side Background Image Layer --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-[0.20]"
        />
        {/* Overlay gradient to blend the image smoothly into the page and keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-[#FAFAFA]/90 to-[#FAFAFA]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl mb-24 md:mb-32"
        >
          <motion.div 
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-zinc-600 text-xs font-medium border border-zinc-200/60 mb-8 shadow-sm"
          >
            Universal Deployment
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold tracking-tight mb-6 leading-[1.05] text-zinc-950"
          >
            Aptro <br />
            <span className="text-zinc-400 italic">everywhere.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            Seamlessly bridge your office to your pocket. Our multi-platform architecture ensures your business intelligence is synchronized across every touchpoint.
          </motion.p>
        </motion.div>

        {/* --- Platform Grid --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32"
        >
          {platforms.map((platform, i) => (
            <motion.div 
              key={platform.name}
              variants={fadeUpItem}
              className={`relative p-10 rounded-[2rem] transition-all duration-500 flex flex-col group ${
                platform.featured 
                ? 'bg-zinc-950 text-white shadow-2xl border border-zinc-900' 
                : 'bg-white/70 backdrop-blur-xl text-zinc-900 border border-zinc-200/60 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-zinc-300 hover:bg-white'
              }`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-500 shadow-sm ${
                  platform.featured 
                    ? 'bg-zinc-900 text-zinc-100 border border-zinc-800' 
                    : 'bg-white text-zinc-600 border border-zinc-200/80 group-hover:bg-zinc-50 group-hover:text-zinc-950'
                }`}>
                  {platform.icon}
                </div>
                <div className="text-right">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm border ${platform.featured ? 'bg-zinc-900 text-zinc-300 border-zinc-800' : 'bg-white text-zinc-600 border-zinc-200/60'}`}>
                    {platform.version}
                  </span>
                </div>
              </div>

              <h3 className={`text-2xl font-semibold mb-2 tracking-tight ${platform.featured ? 'text-white' : 'text-zinc-950'}`}>
                {platform.name}
              </h3>
              <p className={`text-sm font-medium mb-10 ${platform.featured ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {platform.size} • {platform.tag}
              </p>

              <div className="mt-auto pt-4">
                <Link 
                  href={platform.href}
                  className={`w-full py-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] ${
                    platform.featured 
                    ? 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                    : 'bg-white/50 border border-zinc-200 text-zinc-950 hover:bg-white shadow-sm'
                  }`}
                >
                  <Download size={16} /> {platform.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Hybrid QR & Trust Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEasing }}
          className="grid lg:grid-cols-12 gap-6 mb-32 items-stretch"
        >
          {/* Scan Card */}
          <div className="lg:col-span-7 relative p-10 md:p-14 rounded-[2.5rem] bg-zinc-950 text-white overflow-hidden group flex flex-col md:flex-row items-center gap-12 shadow-2xl border border-zinc-900">
            {/* Subtle Dark Glow */}
            <div className="absolute top-0 left-0 w-[80%] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent blur-[80px] pointer-events-none" />
            
            <div className="relative p-5 bg-white rounded-[2rem] shadow-xl rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shrink-0">
              <QrCode size={140} className="text-zinc-950" strokeWidth={1} />
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight leading-tight">Scan to <br />Synchronize.</h2>
              <p className="text-zinc-400 text-base font-medium mb-8 leading-relaxed max-w-sm">
                Point your lens to install and bridge your workspace instantly. Enterprise verification included.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-semibold uppercase tracking-widest text-zinc-400 shadow-sm">v14.0+ Ready</div>
                <div className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-semibold uppercase tracking-widest text-zinc-400 shadow-sm">E2E Encrypted</div>
              </div>
            </div>
          </div>

          {/* Infrastructure Card */}
          <div className="lg:col-span-5 p-10 md:p-14 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 flex flex-col justify-center relative overflow-hidden group shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:scale-105 transition-transform duration-700">
              <ShieldCheck size={180} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-zinc-900 border border-zinc-200/60 mb-8">
                <Server size={24} />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight mb-4 text-zinc-950">Sovereign Security</h2>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium mb-8">
                Built on AES-256 standards with hourly redundant cloud backups and strict biometric verification across all devices.
              </p>
              <div className="space-y-4">
                {["SOC2 Type II Compliant", "CCPA/GDPR Governance", "ISO 27001 Protocol"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-zinc-600">
                    <CheckCircle2 size={16} className="text-zinc-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- System Requirements --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEasing }}
          className="max-w-4xl pt-24 border-t border-zinc-200/60"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4">Device Specifications</h2>
              <p className="text-zinc-500 font-medium text-lg">Aptro is optimized for low-latency performance on modern hardware ecosystems.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-zinc-200/60 shadow-sm">
              <Info size={14} /> Spec v2.0
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200/60 bg-white/70 backdrop-blur-xl shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-50/50 border-b border-zinc-200/60">
                  <tr>
                    <th className="px-8 py-5 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Environment</th>
                    <th className="px-8 py-5 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Base Build</th>
                    <th className="px-8 py-5 text-xs font-semibold text-zinc-900 uppercase tracking-wider">Recommended</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {[
                    { p: "Android Ecosystem", m: "OS 9.0 (API 28)", r: "OS 14.0+ (API 34)" },
                    { p: "iOS / iPadOS", m: "Version 15.0", r: "Version 17.4+" },
                    { p: "Windows Desktop", m: "Win 10 (Build 19041)", r: "Windows 11 Pro" }
                  ].map((row) => (
                    <tr key={row.p} className="hover:bg-white transition-colors duration-300">
                      <td className="px-8 py-6 font-semibold text-zinc-950 text-sm whitespace-nowrap">{row.p}</td>
                      <td className="px-8 py-6 text-zinc-500 text-sm font-medium whitespace-nowrap">{row.m}</td>
                      <td className="px-8 py-6 text-zinc-950 text-sm font-semibold whitespace-nowrap">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}