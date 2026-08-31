"use client";

import { 
  Smartphone, 
  Download, 
  QrCode, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Star,
  Zap,
  Lock,
  CloudCheck,
  HelpCircle
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
    <main className={`min-h-screen pt-28 pb-32 text-zinc-950 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative ${jakarta.className}`}>
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#FAFAFA]">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFA]/90 to-zinc-50" />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-zinc-400/5 blur-[120px] rounded-full mix-blend-multiply" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-700 text-xs font-bold tracking-wide border border-zinc-200/80 mb-6 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Official Android App
            </motion.div>
            
            <motion.h1 
              variants={fadeUpItem}
              className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tight mb-6 leading-[1.1] text-zinc-950"
            >
              Run your business <br />
              <span className="text-zinc-400 italic font-semibold">from your phone.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUpItem}
              className="text-base sm:text-lg text-zinc-600 leading-relaxed font-medium mb-8"
            >
              Aptro is built exclusively for Android smartphones. Manage customer bills, track stock, and see your daily earnings anywhere, anytime.
            </motion.p>

            {/* Quick Actions */}
            <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-zinc-950 text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-zinc-800 hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 group"
              >
                <Download size={20} />
                <span>Get on Google Play</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white border border-zinc-200 text-sm font-semibold text-zinc-700 shadow-sm">
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
            <motion.div variants={fadeUpItem} className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-600" /> Free to Install
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-600" /> 24.5 MB Only
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-600" /> Safe & Verified
              </span>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual */}
          <motion.div 
            variants={fadeUpItem}
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-[2.5rem] lg:rounded-[3rem] transform scale-[0.95] blur-2xl transition-all duration-700 group-hover:scale-100" />
            
            <div className="absolute inset-0 border border-zinc-200/90 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden bg-white shadow-xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHEZeVeWzdfveqK62ra6sBXLMaueWPSHAMl7meE3_oHu1Fb8XxSwoGuww&s=10"
                alt="Aptro Android Business App"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2">
                    <Smartphone size={14} /> Android App
                  </div>
                  <p className="text-lg font-semibold">Easy billing & stock management in your pocket.</p>
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
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Download Details Box */}
            <div className="lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] bg-zinc-950 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400">
                    <Smartphone size={28} />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300">
                    v1.7.1 Stable
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
                  Download Aptro for Android
                </h2>
                <p className="text-zinc-400 text-base font-medium leading-relaxed mb-8 max-w-md">
                  Simple to understand, even if you are not used to complex computers. Made for store owners, traders, and freelancers.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">App Size</p>
                    <p className="text-xl font-bold text-white">24.5 MB</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Supported Phones</p>
                    <p className="text-xl font-bold text-white">All Android 9.0+</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-zinc-950 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-[1.01] hover:bg-zinc-100 shadow-lg"
                >
                  <Download size={20} />
                  <span>Download from Google Play</span>
                </Link>
              </div>
            </div>

            {/* QR Code Scanner Box */}
            <div className="lg:col-span-5 p-8 md:p-12 rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm flex flex-col justify-between items-center text-center relative overflow-hidden">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <QrCode size={14} /> Quick Scan
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-2">Scan with Phone Camera</h3>
                <p className="text-sm text-zinc-600 font-medium max-w-xs mx-auto">
                  Open your mobile camera or Google Lens to download the app directly onto your phone.
                </p>
              </div>

              {/* QR Code Container */}
              <div className="my-8 p-5 bg-zinc-50 border border-zinc-200 rounded-3xl shadow-inner">
                <QrCode size={160} className="text-zinc-950" strokeWidth={1.5} />
              </div>

              <p className="text-xs font-semibold text-zinc-400">
                Direct link to Google Play Store
              </p>
            </div>

          </div>
        </motion.section>

        {/* --- Why Business Owners Love the App --- */}
        <section className="mb-24 md:mb-36">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 mb-4">
              Designed for your peace of mind
            </h2>
            <p className="text-zinc-600 text-base md:text-lg font-medium">
              You do not need an IT expert or computer degree to run your business smoothly.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {appHighlights.map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUpItem}
                className="p-8 rounded-[2rem] bg-white border border-zinc-200 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- How to Get Started (3 Simple Steps) --- */}
        <section className="mb-24 md:mb-36 p-8 md:p-14 rounded-[2.5rem] bg-zinc-100/80 border border-zinc-200">
          <div className="max-w-xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-3">
              How to start in 3 simple steps
            </h2>
            <p className="text-zinc-600 font-medium">
              Setting up takes less than 2 minutes on any Android device.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {simpleSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-start bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 text-white font-bold text-lg flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-zinc-950 mb-2">{step.title}</h4>
                <p className="text-zinc-600 text-sm font-medium leading-relaxed">{step.desc}</p>
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
          <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800">
                <HelpCircle size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-950">Will it work on your phone?</h3>
                <p className="text-xs text-zinc-500 font-medium">Clear device details for everyone</p>
              </div>
            </div>

            <div className="space-y-4 divide-y divide-zinc-100">
              <div className="pt-4 flex justify-between items-center text-sm">
                <span className="font-semibold text-zinc-600">Supported Devices</span>
                <span className="font-bold text-zinc-950">Any Android Phone (Samsung, Xiaomi, Vivo, Oppo, Realme, OnePlus, etc.)</span>
              </div>
              <div className="pt-4 flex justify-between items-center text-sm">
                <span className="font-semibold text-zinc-600">Android Version</span>
                <span className="font-bold text-zinc-950">Android 9.0 or newer (Phones bought after 2018)</span>
              </div>
              <div className="pt-4 flex justify-between items-center text-sm">
                <span className="font-semibold text-zinc-600">Storage Required</span>
                <span className="font-bold text-zinc-950">At least 30 MB free space</span>
              </div>
              <div className="pt-4 flex justify-between items-center text-sm">
                <span className="font-semibold text-zinc-600">Internet Needed</span>
                <span className="font-bold text-zinc-950">Works with basic 4G / 5G / Wi-Fi</span>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}