"use client";

import { motion } from "framer-motion";
import { 
    Wallet, 
    RefreshCcw, 
    TrendingUp, 
    CheckCircle2, 
    ShieldCheck, 
    Users,
    Building2,
    CalendarCheck,
    ArrowUpRight
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

const appleEase = [0.16, 1, 0.3, 1] as const;

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: appleEase } }
};

const commissionTiers = [
    { plan: "₹99 Plan", activation: "₹50", recurring: "₹10", color: "text-blue-600", bg: "bg-blue-50" },
    { plan: "₹199 Plan", activation: "₹100", recurring: "₹20", color: "text-indigo-600", bg: "bg-indigo-50" },
    { plan: "₹249 Plan", activation: "₹150", recurring: "₹50", color: "text-purple-600", bg: "bg-purple-50" },
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
        <main className={`min-h-screen bg-white pt-24 pb-20 selection:bg-[#0071E3] selection:text-white ${jakarta.className}`}>
            
            {/* Background Layer */}
            <div className="fixed inset-0 pointer-events-none -z-10 bg-[#FAFAFA]">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-[#FAFAFA]" />
                <div className="absolute top-0 left-1/4 w-[50%] h-[40%] bg-[#0071E3]/5 blur-[140px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* --- HERO SECTION (Updated with Image) --- */}
                <section className="pt-16 mb-32 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="max-w-2xl text-left"
                    >
                        <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-md text-[#0071E3] text-xs font-semibold tracking-wide uppercase border border-blue-100/60 mb-6 shadow-sm">
                            Student Business Partner Program
                        </motion.div>
                        
                        <motion.h1 variants={fadeUpItem} className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-[#1D1D1F] mb-6 leading-[1.05]">
                            Final Commission <br />
                            <span className="text-[#86868B]">Structure.</span>
                        </motion.h1>
                        
                        <motion.p variants={fadeUpItem} className="text-[19px] md:text-[21px] text-[#1D1D1F] font-medium leading-relaxed max-w-xl">
                            The Aptro Student Business Partner Program rewards students for introducing new businesses to Aptro and encouraging long-term usage.
                        </motion.p>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: appleEase }}
                        className="relative w-full aspect-[4/3] lg:aspect-square max-h-[500px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#D2D2D7]/50"
                    >
                        {/* Using standard img tag with Unsplash for immediate rendering. Replace src with your local image if needed. */}
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                            alt="Students and Business Partners collaborating"
                            className="w-full h-full object-cover"
                        />
                        {/* Subtle inner overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                </section>

                {/* --- COMMISSION STRUCTURE (Unified Cards) --- */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-4">How You Earn</h2>
                        <p className="text-[19px] text-[#86868B] font-medium max-w-2xl mx-auto">
                            Earn a one-time activation commission when a business purchases its first paid plan, and continue earning a small recurring commission on future renewals.
                        </p>
                    </div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {commissionTiers.map((tier, idx) => (
                            <motion.div 
                                key={idx}
                                variants={fadeUpItem}
                                className="bg-white rounded-[24px] p-8 border border-[#D2D2D7]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500"
                            >
                                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-zinc-100 text-[#1D1D1F] font-bold text-sm tracking-wide mb-8">
                                    {tier.plan}
                                </div>
                                
                                <div className="space-y-8">
                                    <div>
                                        <p className="text-[13px] font-semibold text-[#86868B] uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Wallet size={14} /> One-Time Activation
                                        </p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold tracking-tight text-[#1D1D1F]">{tier.activation}</span>
                                            <span className="text-[15px] font-medium text-[#86868B]">/ first sale</span>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-[#D2D2D7]/50" />

                                    <div>
                                        <p className="text-[13px] font-semibold text-[#86868B] uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <RefreshCcw size={14} /> Recurring (Renewals)
                                        </p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold tracking-tight text-[#0071E3]">{tier.recurring}</span>
                                            <span className="text-[15px] font-medium text-[#86868B]">/ renewal</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <p className="text-center text-sm font-medium text-[#86868B] mt-8 flex items-center justify-center gap-2">
                        <ShieldCheck size={16} /> Recurring commission is credited only for payments made by businesses originally referred by you.
                    </p>
                </section>

                {/* --- EARNING EXAMPLE (Timeline) --- */}
                <section className="mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: appleEase }}
                        className="bg-[#F5F5F7] rounded-[32px] p-10 md:p-16 border border-[#D2D2D7]/40"
                    >
                        <div className="max-w-2xl mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-4">See it in action.</h2>
                            <p className="text-[19px] text-[#86868B] font-medium">
                                A student refers a business using their referral code. Here is how their earnings compound over time.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4">
                            {exampleTimeline.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-white rounded-[20px] p-6 border border-[#D2D2D7]/60 shadow-sm relative overflow-hidden group">
                                        <div className="w-10 h-10 rounded-full bg-[#F5F5F7] text-[#1D1D1F] flex items-center justify-center mb-6 group-hover:bg-[#0071E3] group-hover:text-white transition-colors">
                                            <Icon size={18} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#86868B] block mb-2">{item.step}</span>
                                        <p className="text-[15px] text-[#1D1D1F] font-medium mb-6 leading-snug">{item.action}</p>
                                        
                                        <div className="mt-auto pt-4 border-t border-[#D2D2D7]/50">
                                            <p className="text-[13px] text-[#86868B] font-medium mb-1">Student earns</p>
                                            <p className="text-2xl font-bold text-[#0071E3]">{item.earn}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        
                        <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-[#D2D2D7]/60 shadow-sm text-[15px] font-medium text-[#1D1D1F]">
                            <TrendingUp size={18} className="text-[#0071E3]" />
                            You continue earning as long as the referred business remains active.
                        </div>
                    </motion.div>
                </section>

                {/* --- WHY THIS MODEL WORKS (Bento) --- */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-4">Why This Model Works</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* For Students */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: appleEase }}
                            className="bg-white rounded-[32px] p-10 border border-[#D2D2D7]/60 shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0071E3] flex items-center justify-center mb-8">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1D1D1F] mb-6">For Students</h3>
                            <ul className="space-y-4">
                                {["High earnings for every new business.", "Recurring income from active customers.", "Motivation to support businesses after onboarding.", "Unlimited earning potential."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#0071E3] shrink-0 mt-0.5" />
                                        <span className="text-[17px] font-medium text-[#1D1D1F]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* For Aptro */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
                            className="bg-[#1D1D1F] rounded-[32px] p-10 shadow-sm text-white"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">For Aptro</h3>
                            <ul className="space-y-4">
                                {["Encourages students to acquire and retain customers.", "Increases customer lifetime value.", "Builds a scalable, performance-based sales network.", "Keeps customer acquisition costs predictable."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-white/40 shrink-0 mt-0.5" />
                                        <span className="text-[17px] font-medium text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* --- TERMS & CONDITIONS --- */}
                <section className="mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: appleEase }}
                        className="bg-white rounded-[32px] p-10 md:p-16 border border-[#D2D2D7]/60 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F] mb-8 flex items-center gap-3">
                            <CalendarCheck size={24} className="text-[#86868B]" /> Terms & Conditions
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                            {terms.map((term, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0 mt-2.5" />
                                    <p className="text-[15px] text-[#86868B] font-medium leading-relaxed">{term}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* --- CTA SECTION --- */}
                <section className="w-full pb-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: appleEase }}
                        className="relative px-8 py-20 lg:p-24 rounded-[32px] overflow-hidden bg-[#1D1D1F] text-center shadow-2xl"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0071E3]/30 via-transparent to-transparent blur-[80px] pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">
                                Grow Your Network. <br />
                                Support Local Businesses. <br />
                                <span className="text-[#86868B]">Earn Every Time They Grow.</span>
                            </h2>
                            
                            <Link
                                href="/join"
                                className="px-8 py-4 bg-[#0071E3] text-white rounded-full font-medium text-[17px] transition-all duration-300 hover:scale-[0.98] hover:bg-[#0077ED] flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20"
                            >
                                Apply Now
                                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </Link>
                        </div>
                    </motion.div>
                </section>

            </div>
        </main>
    );
}