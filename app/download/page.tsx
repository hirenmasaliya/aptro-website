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
import { motion, Variants, Easing } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Material Design standard easing
const materialEasing: Easing = [0.2, 0, 0, 1];

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const appHighlights = [
  {
    title: "Lightweight & Fast",
    description: "Takes only 24.5 MB of space. Opens quickly and won't slow down your phone.",
    icon: <Zap size={24} className="text-[#1A73E8]" />
  },
  {
    title: "100% Safe & Private",
    description: "Your shop records, bills, and customer phone numbers remain strictly yours.",
    icon: <Lock size={24} className="text-[#1A73E8]" />
  },
  {
    title: "Automatic Cloud Backup",
    description: "Never lose your data. If you change your phone, simply log in to restore everything.",
    icon: <CloudCheck size={24} className="text-[#1A73E8]" />
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
    <main className={`min-h-screen pt-24 pb-32 text-[#202124] font-sans bg-[#F8F9FA] selection:bg-[#D3E3FD] selection:text-[#041E49] overflow-x-hidden relative ${jakarta.className}`}>
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center mb-24 md:mb-32 mt-12 md:mt-16 max-w-3xl mx-auto"
        >
          <motion.div 
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC] mb-6"
          >
            <Sparkles size={14} className="text-[#1A73E8]" />
            Official Android App
          </motion.div>
          
          <motion.h1 
            variants={fadeUpItem}
            className="text-4xl sm:text-5xl lg:text-[4rem] font-normal mb-6 leading-[1.15] text-[#1F1F1F]"
          >
            Run your business <br />
            <span className="text-[#1A73E8]">from your phone.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUpItem}
            className="text-[16px] sm:text-[18px] text-[#5F6368] leading-relaxed mb-10 max-w-2xl"
          >
            Aptro is built exclusively for Android smartphones. Manage customer bills, track stock, and see your daily earnings anywhere, anytime.
          </motion.p>

          {/* Quick Actions */}
          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#1A73E8] text-white rounded-full font-medium text-[15px] transition-colors hover:bg-[#1557B0] flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
            >
              <Download size={20} />
              <span>Get on Google Play</span>
            </Link>

            <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-[#DADCE0] text-[14px] font-medium text-[#444746]">
              <div className="flex text-[#F9AB00]">
                <Star size={16} className="fill-[#F9AB00]" />
                <Star size={16} className="fill-[#F9AB00]" />
                <Star size={16} className="fill-[#F9AB00]" />
                <Star size={16} className="fill-[#F9AB00]" />
                <Star size={16} className="fill-[#F9AB00]" />
              </div>
              <span>4.9 Rating</span>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={fadeUpItem} className="flex flex-wrap items-center justify-center gap-4 text-[13px] font-medium text-[#5F6368]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#1E8E3E]" /> Free to Install
            </span>
            <span className="text-[#DADCE0] hidden sm:block">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#1E8E3E]" /> 24.5 MB Only
            </span>
            <span className="text-[#DADCE0] hidden sm:block">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#1E8E3E]" /> Safe & Verified
            </span>
          </motion.div>
        </motion.div>

        {/* --- Main Android Card & QR Scan --- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: materialEasing }}
          className="mb-24 md:mb-32"
        >
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Download Details Box */}
            <div className="lg:col-span-7 p-8 md:p-12 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm flex flex-col justify-between">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8]">
                    <Smartphone size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F1F3F4] text-[12px] font-medium text-[#5F6368]">
                    v1.7.1 Stable
                  </span>
                </div>

                <h2 className="text-3xl font-normal mb-4 text-[#1F1F1F]">
                  Download Aptro for Android
                </h2>
                <p className="text-[#5F6368] text-[16px] leading-relaxed mb-8 max-w-md">
                  Simple to understand, even if you are not used to complex computers. Made for store owners, traders, and freelancers.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="p-4 rounded-[16px] bg-[#F8F9FA] border border-[#DADCE0]">
                    <p className="text-[12px] text-[#5F6368] font-medium uppercase tracking-wider mb-1">App Size</p>
                    <p className="text-[18px] font-medium text-[#1F1F1F]">24.5 MB</p>
                  </div>
                  <div className="p-4 rounded-[16px] bg-[#F8F9FA] border border-[#DADCE0]">
                    <p className="text-[12px] text-[#5F6368] font-medium uppercase tracking-wider mb-1">Supported Phones</p>
                    <p className="text-[18px] font-medium text-[#1F1F1F]">All Android 9.0+</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1A73E8] text-white rounded-full font-medium text-[15px] flex items-center justify-center gap-2 transition-colors hover:bg-[#1557B0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
                >
                  <Download size={20} />
                  <span>Download from Google Play</span>
                </Link>
              </div>
            </div>

            {/* QR Code Scanner Box */}
            <div className="lg:col-span-5 p-8 md:p-12 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm flex flex-col justify-between items-center text-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F4EA] text-[#0D652D] border border-[#CEEAD6] text-[12px] font-medium mb-6">
                  <QrCode size={14} /> Quick Scan
                </div>
                <h3 className="text-2xl font-normal text-[#1F1F1F] mb-3">Scan with Phone Camera</h3>
                <p className="text-[15px] text-[#5F6368] max-w-xs mx-auto leading-relaxed">
                  Open your mobile camera or Google Lens to download the app directly onto your phone.
                </p>
              </div>

              {/* QR Code Container */}
              <div className="my-8 p-6 bg-[#F8F9FA] border border-[#DADCE0] rounded-[24px]">
                <QrCode size={140} className="text-[#202124]" strokeWidth={1.5} />
              </div>

              <p className="text-[13px] font-medium text-[#5F6368]">
                Direct link to Google Play Store
              </p>
            </div>

          </div>
        </motion.section>

        {/* --- Why Business Owners Love the App --- */}
        <section className="mb-24 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-4">
              Designed for your peace of mind
            </h2>
            <p className="text-[#5F6368] text-[16px]">
              You do not need an IT expert or computer degree to run your business smoothly.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {appHighlights.map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUpItem}
                className="p-8 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8F0FE] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-2">{item.title}</h3>
                <p className="text-[#5F6368] text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- How to Get Started (3 Simple Steps) --- */}
        <section className="mb-24 md:mb-32 p-8 md:p-12 rounded-[32px] bg-white border border-[#DADCE0] shadow-sm">
          <div className="max-w-2xl mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-3">
              How to start in 3 simple steps
            </h2>
            <p className="text-[#5F6368] text-[16px]">
              Setting up takes less than 2 minutes on any Android device.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {simpleSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-start bg-[#F8F9FA] p-6 rounded-[24px] border border-[#DADCE0]">
                <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] font-medium text-[16px] flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h4 className="text-[18px] font-medium text-[#1F1F1F] mb-2">{step.title}</h4>
                <p className="text-[#5F6368] text-[14px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Simple Phone Requirements --- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: materialEasing }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#F1F3F4] flex items-center justify-center text-[#5F6368]">
                <HelpCircle size={24} />
              </div>
              <div>
                <h3 className="text-[22px] font-normal text-[#1F1F1F]">Will it work on your phone?</h3>
                <p className="text-[13px] text-[#5F6368] font-medium mt-1">Clear device details for everyone</p>
              </div>
            </div>

            <div className="space-y-4 divide-y divide-[#DADCE0]">
              <div className="pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-[15px]">
                <span className="text-[#5F6368]">Supported Devices</span>
                <span className="font-medium text-[#1F1F1F] text-left sm:text-right">Any Android Phone (Samsung, Xiaomi, Vivo, Oppo, etc.)</span>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-[15px]">
                <span className="text-[#5F6368]">Android Version</span>
                <span className="font-medium text-[#1F1F1F] text-left sm:text-right">Android 9.0 or newer (Phones bought after 2018)</span>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-[15px]">
                <span className="text-[#5F6368]">Storage Required</span>
                <span className="font-medium text-[#1F1F1F] text-left sm:text-right">At least 30 MB free space</span>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-[15px]">
                <span className="text-[#5F6368]">Internet Needed</span>
                <span className="font-medium text-[#1F1F1F] text-left sm:text-right">Works with basic 4G / 5G / Wi-Fi</span>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}