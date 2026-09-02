"use client";

import { 
  Smartphone, 
  Download, 
  QrCode, 
  CheckCircle2, 
  ArrowRight, 
  Star,
  Zap,
  Lock,
  CloudCheck,
  HelpCircle,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Smooth easing for a clean, natural feel
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const appHighlights = [
  {
    title: "Lightweight & Fast",
    description: "Takes only 24.5 MB of space. Opens quickly and won't slow down your phone.",
    icon: <Zap size={24} className="text-blue-600" />
  },
  {
    title: "100% Safe & Private",
    description: "Your shop records, bills, and customer phone numbers remain strictly yours.",
    icon: <Lock size={24} className="text-blue-600" />
  },
  {
    title: "Automatic Cloud Backup",
    description: "Never lose your data. If you change your phone, simply log in to restore everything.",
    icon: <CloudCheck size={24} className="text-blue-600" />
  }
];

const simpleSteps = [
  {
    step: "1",
    title: "Tap Download",
    desc: "Open the Google Play Store link on your phone."
  },
  {
    step: "2",
    title: "Install in 30 Seconds",
    desc: "The app is small and installs in less than a minute."
  },
  {
    step: "3",
    title: "Start Managing",
    desc: "Add your business name and begin creating bills immediately."
  }
];

export default function DownloadPage() {
  return (
    <main className={`min-h-screen pt-28 pb-32 text-zinc-950 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative tracking-tight ${jakarta.className}`}>
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/90 to-slate-50" />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-400/5 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center mb-24 md:mb-36 mt-8 md:mt-16"
        >
          {/* Left Column: Clear Text */}
          <div className="max-w-xl">
            <motion.div 
              variants={fadeUpItem}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100 mb-6 shadow-sm"
            >
              <Sparkles size={12} className="text-blue-500" />
              Official Android App
            </motion.div>
            
            <motion.h1 
              variants={fadeUpItem}
              className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tighter mb-6 leading-[1.05] text-zinc-950"
            >
              Run your business <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent italic pr-2 pb-2">from your phone.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUpItem}
              className="text-base sm:text-lg text-zinc-500 leading-relaxed font-medium mb-8"
            >
              Aptro is built exclusively for Android smartphones. Manage customer bills, track stock, and see your daily earnings anywhere, anytime.
            </motion.p>

            {/* Quick Actions */}
            <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-zinc-950 text-white rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center gap-3 group"
              >
                <Download size={20} />
                <span>Get on Google Play</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-zinc-400 group-hover:text-white" />
              </Link>

              <div className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/70 backdrop-blur-xl border border-zinc-200/60 text-sm font-bold text-zinc-950 shadow-sm">
                <div className="flex text-amber-400">
                  <Star size={16} className="fill-amber-400" />
                  <Star size={16} className="fill-amber-400" />
                  <Star size={16} className="fill-amber-400" />
                  <Star size={16} className="fill-amber-400" />
                  <Star size={16} className="fill-amber-400" />
                </div>
                <span>4.9 Star Rating</span>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeUpItem} className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-blue-600" /> Free to Install
              </span>
              <span className="text-zinc-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-blue-600" /> 24.5 MB Only
              </span>
              <span className="text-zinc-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-blue-600" /> Safe & Verified
              </span>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual */}
          <motion.div 
            variants={fadeUpItem}
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-[2.5rem] lg:rounded-[3rem] transform scale-[0.95] blur-2xl transition-all duration-700 group-hover:scale-100" />
            
            <div className="absolute inset-0 border-[8px] border-zinc-950 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden bg-zinc-950 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHEZeVeWzdfveqK62ra6sBXLMaueWPSHAMl7meE3_oHu1Fb8XxSwoGuww&s=10"
                alt="Aptro Android Business App"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex items-end p-8">
                <div className="text-white relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-3 text-blue-400">
                    <Smartphone size={14} /> Android App
                  </div>
                  <p className="text-lg font-bold tracking-tight text-white leading-snug">Easy billing & stock management in your pocket.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Main Android Card & QR Scan --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEasing }}
          className="mb-24 md:mb-36"
        >
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Download Details Box */}
            <div className="lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] bg-zinc-950 text-white flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent blur-3xl rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-70" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 backdrop-blur-md shadow-inner">
                    <Smartphone size={28} />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-300 backdrop-blur-md">
                    v1.7.1 Stable
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight text-white">
                  Download Aptro for Android
                </h2>
                <p className="text-white/60 text-base font-medium leading-relaxed mb-8 max-w-md">
                  Simple to understand, even if you are not used to complex computers. Made for store owners, traders, and freelancers.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">App Size</p>
                    <p className="text-xl font-bold text-white">24.5 MB</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">Supported Phones</p>
                    <p className="text-xl font-bold text-white">All Android 9.0+</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-zinc-950 rounded-full font-bold text-base flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-[1.02] hover:bg-zinc-100 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] active:scale-[0.98]"
                >
                  <Download size={20} />
                  <span>Download from Google Play</span>
                </Link>
              </div>
            </div>

            {/* QR Code Scanner Box */}
            <div className="lg:col-span-5 p-8 md:p-12 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm flex flex-col justify-between items-center text-center relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all duration-500">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold uppercase tracking-widest mb-6">
                  <QrCode size={14} /> Quick Scan
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-3 tracking-tight">Scan with Phone Camera</h3>
                <p className="text-sm text-zinc-500 font-medium max-w-xs mx-auto leading-relaxed">
                  Open your mobile camera or Google Lens to download the app directly onto your phone.
                </p>
              </div>

              {/* QR Code Container */}
              <div className="my-8 p-6 bg-white border border-zinc-200/80 rounded-[2rem] shadow-sm group-hover:scale-105 transition-transform duration-500">
                <QrCode size={160} className="text-zinc-950" strokeWidth={1.5} />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Direct link to Google Play Store
              </p>
            </div>

          </div>
        </motion.section>

        {/* --- Why Business Owners Love the App --- */}
        <section className="mb-24 md:mb-36">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              Designed for your peace of mind
            </h2>
            <p className="text-zinc-500 text-lg font-medium">
              You do not need an IT expert or computer degree to run your business smoothly.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {appHighlights.map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUpItem}
                className="p-8 lg:p-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm hover:border-zinc-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- How to Get Started (3 Simple Steps) --- */}
        <section className="mb-24 md:mb-36 p-8 md:p-14 rounded-[3rem] bg-white/40 backdrop-blur-md border border-zinc-200/60 shadow-sm">
          <div className="max-w-2xl mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 tracking-tight">
              How to start in 3 simple steps
            </h2>
            <p className="text-zinc-500 font-medium text-lg">
              Setting up takes less than 2 minutes on any Android device.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {simpleSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-start bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] border border-zinc-200/60 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-500 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">{step.title}</h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Simple Phone Requirements --- */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEasing }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                <HelpCircle size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">Will it work on your phone?</h3>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Clear device details for everyone</p>
              </div>
            </div>

            <div className="space-y-4 divide-y divide-zinc-200/60">
              <div className="pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-sm">
                <span className="font-semibold text-zinc-500">Supported Devices</span>
                <span className="font-bold text-zinc-950 text-right">Any Android Phone (Samsung, Xiaomi, Vivo, Oppo, etc.)</span>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-sm">
                <span className="font-semibold text-zinc-500">Android Version</span>
                <span className="font-bold text-zinc-950 text-right">Android 9.0 or newer (Phones bought after 2018)</span>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-sm">
                <span className="font-semibold text-zinc-500">Storage Required</span>
                <span className="font-bold text-zinc-950 text-right">At least 30 MB free space</span>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-sm">
                <span className="font-semibold text-zinc-500">Internet Needed</span>
                <span className="font-bold text-zinc-950 text-right">Works with basic 4G / 5G / Wi-Fi</span>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}