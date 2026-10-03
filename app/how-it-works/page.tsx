"use client";

import { motion, Variants, Easing } from "framer-motion";
import { 
    Wallet, 
    RefreshCcw, 
    TrendingUp, 
    CheckCircle2, 
    ShieldCheck, 
    Users,
    Building2,
    CalendarCheck,
    ArrowUpRight,
    Sparkles
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

// Google Material Design Standard Easing
const materialEasing: Easing = [0.2, 0, 0, 1];

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
};

const fadeUpItem: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

// Adapted to Google's Tonal Palettes
const commissionTiers = [
    { plan: "₹99 Plan", activation: "₹50", recurring: "₹10", textBase: "text-[#1967D2]", bgBase: "bg-[#E8F0FE]" },
    { plan: "₹199 Plan", activation: "₹100", recurring: "₹20", textBase: "text-[#0D652D]", bgBase: "bg-[#E6F4EA]" },
    { plan: "₹249 Plan", activation: "₹150", recurring: "₹50", textBase: "text-[#681DA8]", bgBase: "bg-[#F3E8FD]" },
];

const exampleTimeline = [
    { step: "Initial Sale", action: "Business purchases the ₹199 Plan for the first time.", earn: "₹100", icon: Wallet },
    { step: "Month 2", action: "Business renews the ₹199 Plan.", earn: "₹20", icon: RefreshCcw },
    { step: "Month 3", action: "Business renews again.", earn: "₹20", icon: RefreshCcw },
    { step: "Month 4", action: "Business upgrades to the ₹249 Plan.", earn: "₹50", icon: TrendingUp },
];

const terms = [
    "The business must sign up using the student's unique referral code.",
    "One-time activation commission is paid only on the first successful paid subscription.",
    "Recurring commission is paid on eligible future paid plan purchases or renewals made by the referred business.",
    "Commissions are credited only after successful payment verification.",
    "Cancelled, refunded, duplicate, fraudulent, or self-referred accounts are not eligible.",
    "Aptro reserves the right to revise commission amounts or promotional campaigns at any time."
];

export default function HowItWorksPage() {
    return (
        <main className={`min-h-screen bg-[#F8F9FA] pt-24 pb-24 text-[#202124] selection:bg-[#D3E3FD] selection:text-[#041E49] ${jakarta.className}`}>
            
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
                
                {/* --- HERO SECTION --- */}
                <section className="pt-8 md:pt-16 mb-24 md:mb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="max-w-2xl text-left"
                    >
                        <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium border border-[#D2E3FC] mb-6">
                            <Sparkles size={16} className="text-[#1A73E8]" />
                            Student Business Partner Program
                        </motion.div>
                        
                        <motion.h1 variants={fadeUpItem} className="text-4xl sm:text-5xl lg:text-[4rem] font-normal tracking-tight text-[#1F1F1F] mb-6 leading-[1.15]">
                            Final Commission <br />
                            <span className="text-[#1A73E8]">Structure.</span>
                        </motion.h1>
                        
                        <motion.p variants={fadeUpItem} className="text-[16px] md:text-[18px] text-[#5F6368] leading-relaxed max-w-xl">
                            The Aptro Student Business Partner Program rewards students for introducing new businesses to Aptro and encouraging long-term usage.
                        </motion.p>
                    </motion.div>

                    {/* Hero Image - Material Card Style */}
                    <motion.div 
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: materialEasing }}
                        className="relative w-full aspect-[4/3] lg:aspect-square max-h-[480px] rounded-[32px] overflow-hidden bg-white border border-[#DADCE0] shadow-sm"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                            alt="Students and Business Partners collaborating"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </section>

                {/* --- COMMISSION STRUCTURE --- */}
                <section className="mb-24 md:mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-4">How You Earn</h2>
                        <p className="text-[16px] text-[#5F6368] max-w-2xl mx-auto">
                            Earn a one-time activation commission when a business purchases its first paid plan, and continue earning a small recurring commission on future renewals.
                        </p>
                    </div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {commissionTiers.map((tier, idx) => (
                            <motion.div 
                                key={idx}
                                variants={fadeUpItem}
                                className="bg-white rounded-[24px] p-8 border border-[#DADCE0] shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full ${tier.bgBase} ${tier.textBase} text-[13px] font-medium mb-8`}>
                                    {tier.plan}
                                </div>
                                
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-[12px] font-medium text-[#5F6368] uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Wallet size={16} /> One-Time Activation
                                        </p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-normal text-[#1F1F1F]">{tier.activation}</span>
                                            <span className="text-[14px] text-[#5F6368]">/ first sale</span>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-[#DADCE0]" />

                                    <div>
                                        <p className="text-[12px] font-medium text-[#5F6368] uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <RefreshCcw size={16} /> Recurring (Renewals)
                                        </p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-normal text-[#1A73E8]">{tier.recurring}</span>
                                            <span className="text-[14px] text-[#5F6368]">/ renewal</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <div className="mt-8 flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-3 bg-[#F1F3F4] rounded-[12px] border border-[#DADCE0]">
                            <ShieldCheck size={18} className="text-[#5F6368]" /> 
                            <span className="text-[13px] font-medium text-[#444746]">
                                Recurring commission is credited only for payments made by businesses originally referred by you.
                            </span>
                        </div>
                    </div>
                </section>

                {/* --- EARNING EXAMPLE (Timeline) --- */}
                <section className="mb-24 md:mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: materialEasing }}
                        className="bg-white rounded-[32px] p-8 md:p-14 border border-[#DADCE0] shadow-sm"
                    >
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-3">See it in action.</h2>
                            <p className="text-[16px] text-[#5F6368]">
                                A student refers a business using their referral code. Here is how their earnings compound over time.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4">
                            {exampleTimeline.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-[#F8F9FA] rounded-[24px] p-6 border border-[#DADCE0] hover:border-[#BDC1C6] transition-colors group">
                                        <div className="w-12 h-12 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center mb-5">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-[11px] font-medium uppercase tracking-wider text-[#5F6368] block mb-2">{item.step}</span>
                                        <p className="text-[14px] text-[#202124] leading-relaxed mb-6">{item.action}</p>
                                        
                                        <div className="mt-auto pt-4 border-t border-[#DADCE0]">
                                            <p className="text-[12px] text-[#5F6368] mb-1">Student earns</p>
                                            <p className="text-[24px] font-normal text-[#1A73E8]">{item.earn}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        
                        <div className="mt-8 flex items-center gap-3 px-5 py-4 rounded-[16px] bg-[#E8F0FE] border border-[#D2E3FC] text-[14px] font-medium text-[#041E49]">
                            <TrendingUp size={20} className="text-[#1A73E8] shrink-0" />
                            You continue earning as long as the referred business remains active.
                        </div>
                    </motion.div>
                </section>

                {/* --- WHY THIS MODEL WORKS (Bento) --- */}
                <section className="mb-24 md:mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-4">Why This Model Works</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* For Students */}
                        <motion.div 
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: materialEasing }}
                            className="bg-white rounded-[24px] p-8 md:p-12 border border-[#DADCE0] shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-[24px] font-normal text-[#1F1F1F] mb-6">For Students</h3>
                            <ul className="space-y-4">
                                {["High earnings for every new business.", "Recurring income from active customers.", "Motivation to support businesses after onboarding.", "Unlimited earning potential."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#1E8E3E] shrink-0 mt-0.5" />
                                        <span className="text-[15px] text-[#444746] leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* For Aptro - Google Tonal Color Instead of Dark Mode */}
                        <motion.div 
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: materialEasing, delay: 0.1 }}
                            className="bg-[#E8F0FE] rounded-[24px] p-8 md:p-12 border border-[#D2E3FC]"
                        >
                            <div className="w-12 h-12 rounded-full bg-white text-[#1967D2] flex items-center justify-center mb-6">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-[24px] font-normal text-[#041E49] mb-6">For Aptro</h3>
                            <ul className="space-y-4">
                                {["Encourages students to acquire and retain customers.", "Increases customer lifetime value.", "Builds a scalable, performance-based sales network.", "Keeps customer acquisition costs predictable."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#1A73E8] shrink-0 mt-0.5" />
                                        <span className="text-[15px] text-[#041E49] leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* --- TERMS & CONDITIONS --- */}
                <section className="mb-24 md:mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: materialEasing }}
                        className="bg-white rounded-[24px] p-8 md:p-12 border border-[#DADCE0] shadow-sm"
                    >
                        <h2 className="text-[22px] font-medium text-[#1F1F1F] mb-8 flex items-center gap-3">
                            <CalendarCheck size={24} className="text-[#1A73E8]" /> Terms & Conditions
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                            {terms.map((term, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2" />
                                    <p className="text-[14px] text-[#5F6368] leading-relaxed">{term}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* --- CTA SECTION (Material Card) --- */}
                <section className="w-full pb-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: materialEasing }}
                        className="relative px-8 py-16 lg:p-20 rounded-[32px] bg-white border border-[#DADCE0] shadow-sm text-center"
                    >
                        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4 text-[#1F1F1F] leading-tight">
                                Grow Your Network. <br />
                                Support Local Businesses. <br />
                                <span className="text-[#1A73E8]">Earn Every Time They Grow.</span>
                            </h2>
                            
                            <p className="text-[#5F6368] text-[16px] mb-8">
                                Start your journey as an Aptro Student Business Partner today.
                            </p>

                            <Link
                                href="/join"
                                className="px-8 py-3.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full font-medium text-[15px] transition-colors flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
                            >
                                Apply Now
                                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </section>

            </div>
        </main>
    );
}