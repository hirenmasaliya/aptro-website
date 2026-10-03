"use client";

import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Headphones,
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

// Simplified language for easy understanding
const categories = [
  { 
    title: "Getting Started", 
    icon: <Zap size={22} />, 
    count: "12 Guides",
    links: ["Setting Up Your Account", "Creating Your First Bill", "Moving Your Old Data"]
  },
  { 
    title: "Daily Tasks", 
    icon: <BookOpen size={22} />, 
    count: "8 Guides",
    links: ["Automatic Updates", "Doing Things in Bulk", "Tracking Deliveries"]
  },
  { 
    title: "Security & Settings", 
    icon: <ShieldCheck size={22} />, 
    count: "5 Guides",
    links: ["Keeping Data Safe", "Easy Login Setup", "Privacy Rules"]
  },
];

const featuredGuides = [
  {
    title: "Growing Your Solo Business",
    desc: "Simple steps to go from working alone to running a successful team.",
    tag: "Growth",
    readTime: "8 min read"
  },
  {
    title: "Automatic Billing Setup",
    desc: "Learn how to set up bills that send themselves so you save hours of manual work.",
    tag: "How-To",
    readTime: "5 min read"
  }
];

export default function ResourcesPage() {
  return (
    <main className={`min-h-screen pt-24 pb-32 text-[#202124] font-sans bg-[#F8F9FA] selection:bg-[#D3E3FD] selection:text-[#041E49] relative ${jakarta.className}`}>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* --- Hero & Search Section --- */}
        <motion.header 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center mb-20 mt-8"
        >
          <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC] mb-6">
            <Sparkles size={16} className="text-[#1A73E8]" />
            Help Center
          </motion.div>

          <motion.h1 variants={fadeUpItem} className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 leading-[1.15] text-[#1F1F1F]">
            How can we <span className="text-[#1A73E8]">help?</span>
          </motion.h1>
          
          <motion.p variants={fadeUpItem} className="text-[16px] md:text-[18px] text-[#5F6368] mb-10 max-w-2xl mx-auto leading-relaxed">
            Search our help articles, watch simple videos, or read guides to make your daily work easier.
          </motion.p>

          <motion.div variants={fadeUpItem} className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#5F6368] transition-colors group-focus-within:text-[#1A73E8]" size={20} />
            <input 
              type="text" 
              placeholder="Search for help, guides, or videos..." 
              className="w-full bg-white border border-[#DADCE0] hover:border-[#1F1F1F] rounded-full py-4 pl-14 pr-6 focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] transition-all text-[16px] text-[#1F1F1F] shadow-sm placeholder:text-[#5F6368]"
            />
          </motion.div>
        </motion.header>

        {/* --- Categories Grid --- */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpItem}
                className="p-8 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col group"
              >
                <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center mb-6 text-[#1A73E8]">
                  {cat.icon}
                </div>
                <h3 className="text-[20px] font-medium mb-4 text-[#1F1F1F]">{cat.title}</h3>
                <ul className="space-y-3 mb-8 flex-1">
                  {cat.links.map(link => (
                    <li key={link}>
                      <Link href="#" className="text-[15px] text-[#5F6368] hover:text-[#1A73E8] hover:underline transition-colors block">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="#" className="text-[14px] font-medium text-[#1A73E8] flex items-center gap-1.5 hover:gap-2.5 transition-all w-fit">
                  View all {cat.count} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- Video Walkthroughs --- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: materialEasing }}
          className="mb-24"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-normal mb-2 text-[#1F1F1F]">Video Tutorials</h2>
              <p className="text-[16px] text-[#5F6368]">Easy step-by-step videos to show you how things work.</p>
            </div>
            <a href="#" className="text-[14px] font-medium text-[#1A73E8] hover:bg-[#F1F3F4] px-4 py-2 rounded-full transition-colors flex items-center gap-2">
              YouTube Channel <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Video */}
            <div className="rounded-[24px] overflow-hidden bg-white border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="aspect-video bg-[#F1F3F4] relative flex items-center justify-center overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/RrvXUZAui9I?si=Wakogbx4HHUo1mnv&rel=0" 
                  title="Aptro App Overview" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 border-t border-[#DADCE0]">
                <h4 className="text-[18px] font-medium text-[#1F1F1F] mb-1">Aptro App Overview</h4>
                <p className="text-[14px] text-[#5F6368]">Getting Started • 03:45</p>
              </div>
            </div>

            {/* Second Video */}
            <div className="rounded-[24px] overflow-hidden bg-white border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="aspect-video bg-[#F1F3F4] relative flex items-center justify-center overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JidfzxeW8W4?si=sJTZB_jPn0k9kSeR&rel=0" 
                  title="Aptro Ledger Deep Dive" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 border-t border-[#DADCE0]">
                <h4 className="text-[18px] font-medium text-[#1F1F1F] mb-1">How to Manage Payments</h4>
                <p className="text-[14px] text-[#5F6368]">Tutorial • 08:22</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Featured Articles --- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: materialEasing }}
          className="mb-24"
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-normal mb-2 text-[#1F1F1F]">Featured Guides</h2>
            <p className="text-[16px] text-[#5F6368]">Useful tips to help your business grow faster.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredGuides.map((guide, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group cursor-pointer">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[12px] font-medium uppercase tracking-wider mb-5">
                    {guide.tag}
                  </span>
                  <h3 className="text-[20px] font-medium mb-3 text-[#1F1F1F] group-hover:text-[#1A73E8] transition-colors">{guide.title}</h3>
                  <p className="text-[#444746] text-[15px] leading-relaxed mb-8">{guide.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-[#DADCE0]">
                  <span className="text-[14px] text-[#5F6368]">{guide.readTime}</span>
                  <span className="text-[14px] font-medium text-[#1A73E8] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read guide <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- Support CTA (Material Surface Card) --- */}
        <section className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: materialEasing }}
            className="relative px-6 py-16 lg:p-20 rounded-[32px] bg-white border border-[#DADCE0] shadow-sm text-center flex flex-col items-center"
          >
            {/* Subtle background element */}
            <div className="absolute inset-0 bg-[#F8F9FA]/50 rounded-[32px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-[#E8F0FE] rounded-full flex items-center justify-center mb-6 text-[#1A73E8]">
                <Headphones size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-normal mb-4 text-[#1F1F1F]">
                Need extra <span className="text-[#1A73E8]">help?</span>
              </h2>
              <p className="text-[#444746] text-[16px] md:text-[18px] mb-10 leading-relaxed">
                Our friendly support team is always ready to answer your questions and help you fix any issues quickly.
              </p>
              
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full font-medium text-[15px] transition-colors flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2 group"
              >
                Contact Support
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}