"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Copy,
    LogOut,
    Store,
    Wallet,
    TrendingUp,
    ArrowRight,
    MapPin,
    CheckCircle2,
    Clock,
    User,
    Plus,
    Building2,
    Bell,
    Award,
    Share2,
    Download,
    FileText,
    BarChart3
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || "https://aptro-admin.vercel.app";

// Easing for smooth Apple-like animations
const ease = [0.16, 1, 0.3, 1] as const;

// --- TypeScript Interfaces ---
interface Shop {
    id: string | number;
    name: string;
    location: string;
    date: string;
    status: "Active" | "Pending";
}

interface PartnerData {
    name: string;
    partnerId: string;
    earnings: string;
    monthlyGrowth: string; // e.g., "+12.5%"
    activeShops: number;
    pendingShops: number;
    totalReferrals: number;
    tier: "Bronze" | "Silver" | "Gold" | "Platinum";
    nextTierProgress: number; // 0-100 percentage
    recentShops: Shop[];
}

export default function PartnerDashboard() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [partnerData, setPartnerData] = useState<PartnerData | null>(null);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    // Dynamic Greeting based on time of day
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const res = await fetch(`${BASE_URL}/api/partner/dashboard/me`, { credentials: "include" });
                if (!res.ok) throw new Error("Not authorized");
                const data = await res.json();

                await new Promise(resolve => setTimeout(resolve, 1200));

                setPartnerData(data);
            } catch (err) {
                console.error(err);
                router.push("/partner/login");
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, [router]);

    const handleCopyId = () => {
        if (!partnerData?.partnerId) return;
        navigator.clipboard.writeText(partnerData.partnerId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleLogout = async () => {
        try {
            await fetch(`${BASE_URL}/api/partner/auth/logout`, {
                method: "POST",
                credentials: "include"
            });
        } catch (e) {
            console.error(e);
        } finally {
            router.push("/partner/login");
        }
    };

    return (
        <main className={`min-h-screen bg-[#FBFBFD] pb-20 ${jakarta.className} selection:bg-[#0071E3] selection:text-white`}>

            {/* Top Navigation */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-[#E5E5EA] sticky top-0 z-50">
                <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg overflow-hidden shadow-sm">
                            <img
                                src="/aptro_logo.png"
                                alt="Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-bold text-[#1D1D1F] text-[15px] tracking-tight">Partner Portal</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-[#86868B] hover:text-[#1D1D1F] transition-colors relative p-2">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                        </button>
                        <div className="w-px h-5 bg-[#E5E5EA]"></div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-[#86868B] hover:text-red-600 text-[14px] font-semibold transition-colors px-2 py-1.5 rounded-lg hover:bg-red-50"
                        >
                            <LogOut size={16} />
                            <span className="hidden sm:inline">Sign Out</span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-[1200px] mx-auto px-6 pt-10">

                {isLoading ? (
                    <DashboardSkeleton />
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease }}
                        >
                            {/* Header Section */}
                            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <p className="text-[#86868B] font-semibold uppercase tracking-wider text-[12px] flex items-center gap-1.5">
                                            <User size={14} /> Student Partner
                                        </p>
                                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-bold flex items-center gap-1">
                                            <Award size={12} /> {partnerData?.tier} Tier
                                        </span>
                                    </div>
                                    <h1 className="text-[32px] md:text-[40px] font-bold text-[#1D1D1F] tracking-tight leading-tight">
                                        {greeting},<br />{partnerData?.name?.split(' ')[0] || "Partner"}.
                                    </h1>
                                </div>

                                <button 
    onClick={() => setIsRegisterModalOpen(true)} // Added this
    className="bg-[#1D1D1F] text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-[#000000] transition-colors shadow-sm w-full md:w-auto"
>
    <Plus size={18} />
    Register New Business
</button>
                            </header>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                                {/* Left Column (ID Card, Stats, Tier Progress) */}
                                <div className="lg:col-span-1 space-y-6">

                                    {/* ID Card */}
                                    <div className="bg-gradient-to-br from-[#0071E3] to-[#2563EB] rounded-[24px] p-8 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group">
                                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />

                                        <div className="relative z-10">
                                            <p className="text-blue-100 font-semibold text-[13px] uppercase tracking-wider mb-2">Your Partner ID</p>
                                            <div className="text-[32px] font-extrabold font-mono tracking-wide mb-6">
                                                {partnerData?.partnerId || "APT-XXXX"}
                                            </div>
                                            <p className="text-blue-100 text-[14px] leading-relaxed mb-6">
                                                Share this ID with local shop owners during registration to track your referrals.
                                            </p>
                                            <button
                                                onClick={handleCopyId}
                                                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md py-3 rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                                            >
                                                {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                                                {copied ? "Copied to Clipboard!" : "Copy ID"}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Earnings Stat */}
                                    <div className="bg-white border border-[#E5E5EA] p-6 rounded-[24px] shadow-sm hover:border-[#D2D2D7] transition-colors">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                                                <Wallet className="text-emerald-600" size={20} />
                                            </div>
                                            <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-[13px] font-bold">
                                                <TrendingUp size={14} />
                                                {partnerData?.monthlyGrowth}
                                            </div>
                                        </div>
                                        <p className="text-[#86868B] font-bold text-[12px] uppercase tracking-wider mb-1">Total Earnings</p>
                                        <p className="text-[32px] font-bold text-[#1D1D1F]">{partnerData?.earnings || "₹0"}</p>
                                    </div>

                                    {/* Tier Progress */}
                                    <div className="bg-white border border-[#E5E5EA] p-6 rounded-[24px] shadow-sm">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="font-bold text-[#1D1D1F] text-[15px]">Next Tier: Platinum</p>
                                            <span className="text-[#86868B] text-[13px] font-medium">{partnerData?.nextTierProgress}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-[#F5F5F7] rounded-full overflow-hidden mb-3">
                                            <div
                                                className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                                                style={{ width: `${partnerData?.nextTierProgress}%` }}
                                            />
                                        </div>
                                        <p className="text-[#86868B] text-[13px]">Register 5 more businesses to unlock Platinum benefits and higher commissions.</p>
                                    </div>

                                </div>

                                {/* Right Column (Metrics & List) */}
                                <div className="lg:col-span-2 space-y-6">

                                    {/* Metrics Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div className="bg-white border border-[#E5E5EA] p-6 rounded-[24px] shadow-sm hover:border-[#D2D2D7] transition-colors">
                                            <Store className="text-[#0071E3] mb-4" size={24} />
                                            <div className="text-[32px] font-bold text-[#1D1D1F] mb-1">{partnerData?.activeShops || 0}</div>
                                            <p className="text-[#86868B] font-semibold text-[14px]">Active Shops</p>
                                        </div>

                                        <div className="bg-white border border-[#E5E5EA] p-6 rounded-[24px] shadow-sm hover:border-[#D2D2D7] transition-colors">
                                            <Clock className="text-amber-500 mb-4" size={24} />
                                            <div className="text-[32px] font-bold text-[#1D1D1F] mb-1">{partnerData?.pendingShops || 0}</div>
                                            <p className="text-[#86868B] font-semibold text-[14px]">Pending Setups</p>
                                        </div>

                                        <div className="bg-white border border-[#E5E5EA] p-6 rounded-[24px] shadow-sm hover:border-[#D2D2D7] transition-colors">
                                            <BarChart3 className="text-purple-500 mb-4" size={24} />
                                            <div className="text-[32px] font-bold text-[#1D1D1F] mb-1">{partnerData?.totalReferrals || 0}</div>
                                            <p className="text-[#86868B] font-semibold text-[14px]">Total Referrals</p>
                                        </div>
                                    </div>

                                    {/* Quick Actions (New Section) */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <button className="flex items-center gap-3 p-4 bg-white border border-[#E5E5EA] rounded-[16px] hover:border-[#0071E3] hover:shadow-md transition-all text-left group">
                                            <div className="w-10 h-10 bg-blue-50 text-[#0071E3] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <Share2 size={18} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1D1D1F] text-[14px]">Share Link</p>
                                                <p className="text-[#86868B] text-[12px]">Invite merchants</p>
                                            </div>
                                        </button>

                                        <button className="flex items-center gap-3 p-4 bg-white border border-[#E5E5EA] rounded-[16px] hover:border-[#0071E3] hover:shadow-md transition-all text-left group">
                                            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <Download size={18} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1D1D1F] text-[14px]">Get Assets</p>
                                                <p className="text-[#86868B] text-[12px]">Flyers & posters</p>
                                            </div>
                                        </button>

                                        <button className="flex items-center gap-3 p-4 bg-white border border-[#E5E5EA] rounded-[16px] hover:border-[#0071E3] hover:shadow-md transition-all text-left group">
                                            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <FileText size={18} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#1D1D1F] text-[14px]">Partner Guide</p>
                                                <p className="text-[#86868B] text-[12px]">Tips to earn more</p>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Recent Onboardings */}
                                    <div className="bg-white border border-[#E5E5EA] rounded-[24px] shadow-sm overflow-hidden">
                                        <div className="p-6 border-b border-[#E5E5EA] flex items-center justify-between bg-[#FBFBFD]/50">
                                            <h2 className="text-[18px] font-bold text-[#1D1D1F]">Recent Onboardings</h2>
                                            <button className="text-[#0071E3] text-[14px] font-semibold flex items-center gap-1 hover:underline">
                                                View All <ArrowRight size={16} />
                                            </button>
                                        </div>

                                        <div className="divide-y divide-[#E5E5EA]">
                                            {!partnerData?.recentShops || partnerData.recentShops.length === 0 ? (
                                                <div className="p-10 text-center flex flex-col items-center justify-center">
                                                    <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-4">
                                                        <Building2 className="text-[#D2D2D7]" size={32} />
                                                    </div>
                                                    <p className="text-[#1D1D1F] font-semibold text-[16px]">No businesses registered yet</p>
                                                    <p className="text-[#86868B] text-[14px] mt-1 max-w-sm mx-auto">Share your Partner ID with local shops to get started and earn commissions.</p>
                                                </div>
                                            ) : (
                                                partnerData.recentShops.map((shop) => (
                                                    <div key={shop.id} className="p-5 flex items-center justify-between hover:bg-[#F5F5F7]/50 transition-colors">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center shrink-0">
                                                                <Store className="text-[#86868B]" size={20} />
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-[#1D1D1F] text-[15px]">{shop.name}</p>
                                                                <div className="flex items-center gap-3 text-[13px] text-[#86868B] mt-0.5">
                                                                    <span className="flex items-center gap-1"><MapPin size={12} /> {shop.location}</span>
                                                                    <span className="w-1 h-1 bg-[#D2D2D7] rounded-full" />
                                                                    <span>{shop.date}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={`px-3 py-1.5 rounded-lg text-[12px] font-bold flex items-center gap-1.5 ${shop.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                                                            }`}>
                                                            {shop.status === 'Active' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                                                            {shop.status}
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>

            {/* Registration Modal */}
<AnimatePresence>
    {isRegisterModalOpen && (
        <>
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsRegisterModalOpen(false)}
                className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
            />
            {/* Modal Content */}
            <motion.div 
    initial={{ opacity: 0, scale: 0.95 }} 
    animate={{ opacity: 1, scale: 1 }} 
    exit={{ opacity: 0, scale: 0.95 }}
    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-white rounded-[32px] p-8 z-[101] shadow-2xl border border-[#E5E5EA]"
>
    <div className="flex justify-between items-start mb-6">
        <div>
            <h2 className="text-2xl font-bold text-[#1D1D1F]">Register Business</h2>
            <p className="text-[#86868B] text-[14px] mt-1">Provide shop details to initiate onboarding.</p>
        </div>
        <button 
            onClick={() => setIsRegisterModalOpen(false)}
            className="p-2 hover:bg-[#F5F5F7] rounded-full transition-colors text-[#86868B]"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
    </div>

    <form className="space-y-4">
        {/* Shop Name */}
        <div>
            <label className="block text-[12px] font-bold text-[#86868B] uppercase tracking-wider mb-1.5 ml-1">Shop Name</label>
            <input 
                type="text" 
                placeholder="e.g. Spice Route Cafe"
                className="w-full bg-[#F5F5F7] border border-transparent focus:border-[#0071E3] focus:bg-white outline-none rounded-xl px-4 py-3 text-[15px] transition-all"
            />
        </div>

        {/* Business Category */}
        <div>
            <label className="block text-[12px] font-bold text-[#86868B] uppercase tracking-wider mb-1.5 ml-1">Category</label>
            <select className="w-full bg-[#F5F5F7] border border-transparent focus:border-[#0071E3] focus:bg-white outline-none rounded-xl px-4 py-3 text-[15px] transition-all text-[#1D1D1F]">
                <option>Retail & Grocery</option>
                <option>Restaurant & Cafe</option>
                <option>Fashion & Apparel</option>
                <option>Other</option>
            </select>
        </div>

        {/* Contact Phone */}
        <div>
            <label className="block text-[12px] font-bold text-[#86868B] uppercase tracking-wider mb-1.5 ml-1">Owner Phone Number</label>
            <input 
                type="tel" 
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-[#F5F5F7] border border-transparent focus:border-[#0071E3] focus:bg-white outline-none rounded-xl px-4 py-3 text-[15px] transition-all"
            />
        </div>

        <button 
            type="submit"
            className="w-full bg-[#0071E3] hover:bg-[#0077ED] text-white py-3.5 rounded-xl font-semibold text-[15px] mt-4 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all"
        >
            Register Business
        </button>
    </form>
</motion.div>
        </>
    )}
</AnimatePresence>
        </main>
    );
}

// --- Skeleton Loading State Component ---
function DashboardSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <div className="h-4 bg-[#E5E5EA] rounded w-32 mb-4" />
                    <div className="h-10 bg-[#E5E5EA] rounded w-64 mb-2" />
                    <div className="h-10 bg-[#E5E5EA] rounded w-48" />
                </div>
                <div className="h-12 bg-[#E5E5EA] rounded-xl w-full md:w-56" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <div className="h-64 bg-[#E5E5EA] rounded-[24px]" />
                    <div className="h-32 bg-[#E5E5EA] rounded-[24px]" />
                    <div className="h-32 bg-[#E5E5EA] rounded-[24px]" />
                </div>
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="h-36 bg-[#E5E5EA] rounded-[24px]" />
                        <div className="h-36 bg-[#E5E5EA] rounded-[24px]" />
                        <div className="h-36 bg-[#E5E5EA] rounded-[24px]" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="h-20 bg-[#E5E5EA] rounded-[16px]" />
                        <div className="h-20 bg-[#E5E5EA] rounded-[16px]" />
                        <div className="h-20 bg-[#E5E5EA] rounded-[16px]" />
                    </div>
                    <div className="h-80 bg-[#E5E5EA] rounded-[24px]" />
                </div>
            </div>
        </div>
    );
}