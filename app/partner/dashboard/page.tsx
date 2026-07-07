"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Copy, LogOut, Store, Wallet, TrendingUp,
    CheckCircle2, Clock, User, Bell, Award,
    Download, BarChart3, QrCode, Search,
    CircleDollarSign, Activity, AlertCircle, Building2, X,
    History, Landmark, FileText, ArrowUpRight, ShieldCheck, HelpCircle,
    LayoutDashboard, Receipt, UserCircle2, ArrowRightLeft
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || "https://aptro-admin.vercel.app";

// --- TYPES & INTERFACES ---
interface Shop {
    id: string;
    name: string;
    ownerName: string;
    location: string;
    category: string;
    createdAt: number;
    status: string;
    planName: string;
    commissionEarned: string | number;
}

interface HistoricWithdrawal {
    id: string;
    amount: number;
    status: "Pending" | "Approved" | "Rejected";
    requestDate: number;
    payoutMethod: "UPI" | "Bank Transfer";
    transactionId?: string;
    utrNumber?: string;
    processedAt?: string;
}

interface PartnerData {
    name: string;
    email: string;
    phone: string;
    partnerId: string;
    refCode: string;
    tier: string;
    college?: string;
    nextTierProgress: number;
    earnings: string;
    availableBalance: string;
    activeShops: number;
    pendingShops: number;
    totalReferred: number;
    recentShops: Shop[];
    pastWithdrawals?: HistoricWithdrawal[];
    payoutDetails?: {
        upiId?: string;
        accountNumber?: string;
        ifscCode?: string;
        bankName?: string;
    };
}

export default function PartnerDashboard() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [partnerData, setPartnerData] = useState<PartnerData | null>(null);

    // Global Mobile Page View State: 'overview' | 'commissions' | 'ledger' | 'profile'
    const [currentView, setCurrentView] = useState<"overview" | "commissions" | "ledger" | "profile">("overview");
    const [selectedMonth, setSelectedMonth] = useState("All Time");
    const [searchQuery, setSearchQuery] = useState("");

    // Withdrawal Modal Drawer State
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
    const [withdrawAmount, setWithdrawAmount] = useState("");
    const [payoutMethod, setPayoutMethod] = useState<"UPI" | "Bank Transfer">("UPI");
    const [isSubmittingWithdrawal, setIsSubmittingWithdrawal] = useState(false);
    const [withdrawalError, setWithdrawalError] = useState<string | null>(null);
    const [withdrawalSuccess, setWithdrawalSuccess] = useState(false);

    const fetchDashboardData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/api/partner/dashboard/me`, { credentials: "include" });
            if (!res.ok) throw new Error("Not authorized");
            const data = await res.json();
            setPartnerData(data);
        } catch (err) {
            console.error(err);
            router.push("/partner/login");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const numericBalance = useMemo(() => {
        if (!partnerData?.availableBalance) return 0;
        const clean = partnerData.availableBalance.replace(/[^\d.]/g, "");
        return parseFloat(clean) || 0;
    }, [partnerData]);

    const availableMonths = useMemo(() => {
        if (!partnerData?.recentShops) return ["All Time"];
        const months = new Set(partnerData.recentShops.map(shop =>
            new Date(shop.createdAt).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
        ));
        return ["All Time", ...Array.from(months)];
    }, [partnerData]);

    const filteredShops = useMemo(() => {
        if (!partnerData?.recentShops) return [];
        return partnerData.recentShops.filter(shop => {
            const shopMonth = new Date(shop.createdAt).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
            const matchesMonth = selectedMonth === "All Time" || shopMonth === selectedMonth;
            const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                shop.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesMonth && matchesSearch;
        });
    }, [partnerData, selectedMonth, searchQuery]);

    const handleWithdrawSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setWithdrawalError(null);
        setWithdrawalSuccess(false);

        const amount = parseFloat(withdrawAmount);
        if (isNaN(amount) || amount <= 0 || amount > numericBalance) {
            setWithdrawalError("Please enter a valid balance volume.");
            return;
        }

        setIsSubmittingWithdrawal(true);
        try {
            const res = await fetch(`${BASE_URL}/api/partner/${partnerData?.partnerId}/payouts/withdraw`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, payoutMethod }),
                credentials: "include"
            });
            if (!res.ok) throw new Error();

            setWithdrawalSuccess(true);
            setWithdrawAmount("");
            await fetchDashboardData();
            setTimeout(() => {
                setIsWithdrawModalOpen(false);
                setWithdrawalSuccess(false);
            }, 1400);
        } catch {
            setWithdrawalError("Declined. Secure settlement channels with support.");
        } finally {
            setIsSubmittingWithdrawal(false);
        }
    };

    const handleCopyId = () => {
        if (!partnerData?.partnerId) return;
        navigator.clipboard.writeText(partnerData.partnerId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const formatDate = (timestamp: number) => {
        if (!timestamp) return "—";
        return new Date(timestamp).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
    };

    return (
        <main className={`min-h-screen bg-[#FAFAFA] text-zinc-900 pb-20 sm:pb-8 ${jakarta.className} antialiased`}>

            {/* Global Web Header Bar */}
            <nav className="bg-white border-b border-zinc-100 sticky top-0 z-40">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

                    {/* Left Side: Brand Logo & Partner Metadata ID */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-2.5 group cursor-pointer">
                            {/* Brand Logo Container */}
                            <div className="w-7 h-7 rounded-lg bg-zinc-900 flex items-center justify-center overflow-hidden shadow-xs border border-zinc-800">
                                {/* Swap src with your real branding path e.g., src="/assets/logo.png" */}
                                <img
                                    src="/aptro_logo.png"
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Text fallback if image loading fails
                                        e.currentTarget.style.display = 'none';
                                        const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                                        if (fallback) fallback.classList.remove('hidden');
                                    }}
                                />
                                <span className="logo-fallback hidden text-white font-extrabold text-xs">A</span>
                            </div>
                            <span className="font-bold text-xs tracking-widest text-zinc-900 uppercase">APTRO</span>
                        </div>

                        <div className="h-3 w-px bg-zinc-200 hidden sm:block" />

                        {/* Dynamic Voucher copy pill button */}
                        <button
                            onClick={handleCopyId}
                            className="text-[10px] sm:text-[11px] font-mono bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200/60 text-zinc-500 rounded-md px-2 py-0.5 flex items-center gap-1.5 transition-all active:scale-95"
                        >
                            <span className="truncate max-w-[75px] sm:max-w-none">{partnerData?.partnerId || "APT-XXXX"}</span>
                            <span className="text-[9px] text-zinc-400 opacity-70">{copied ? "Copied" : "Copy"}</span>
                        </button>
                    </div>

                    {/* Right Side: Account Actions, Badges & Profile Avatars */}
                    <div className="flex items-center gap-3 sm:gap-4">

                        {/* User Meta Data context info block */}
                        <div className="flex items-center gap-2.5">
                            <div className="text-right hidden sm:block">
                                <span className="text-xs font-bold text-zinc-800 block leading-tight">{partnerData?.name || "Partner Account"}</span>
                                <span className="text-[9px] font-extrabold tracking-wider uppercase text-zinc-400 bg-zinc-50 border border-zinc-200/50 px-1 py-0.2 rounded-xs mt-0.5 inline-block">
                                    {partnerData?.tier || "BRONZE"}
                                </span>
                            </div>

                            {/* Microscopic App Profile Picture Avatar Icon */}
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 border border-zinc-200 shadow-2xs flex items-center justify-center overflow-hidden shrink-0">
                                <span className="avatar-fallback text-blue-700 font-bold text-xs uppercase tracking-wider">
                                    {(() => {
                                        const names = (partnerData?.name || "").trim().split(/\s+/);
                                        if (names.length >= 2) {
                                            return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`;
                                        }
                                        return names[0] ? names[0].substring(0, 2) : "PA";
                                    })()}
                                </span>
                            </div>
                        </div>

                        {/* Desktop Action Navigation elements */}
                        <div className="h-4 w-px bg-zinc-200 hidden sm:block" />
                        <button
                            onClick={() => router.push("/partner/login")}
                            className="text-zinc-400 hover:text-rose-600 p-1 rounded-lg hover:bg-zinc-50 transition-colors hidden sm:block"
                            title="Sign Out"
                        >
                            <LogOut size={14} />
                        </button>
                    </div>

                </div>
            </nav>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
                {isLoading ? (
                    <div className="flex items-center justify-center py-32 text-xs font-medium text-zinc-400 tracking-wider font-mono">SECURELY SYNCING WORKSPACE CONTEXT...</div>
                ) : (
                    <div className="space-y-6">

                        {/* ========================================================= */}
                        {/* 1. DESKTOP WORKSPACE (Hidden on Phones)                   */}
                        {/* ========================================================= */}
                        <div className="hidden md:block space-y-6">
                            {/* Balance Card Block */}
                            <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 flex justify-between items-center shadow-xs">
                                <div className="flex gap-12">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Available Liquidity</span>
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-3xl font-extrabold tracking-tight text-zinc-900">{partnerData?.availableBalance}</span>
                                            <button
                                                onClick={() => setIsWithdrawModalOpen(true)}
                                                disabled={numericBalance <= 0}
                                                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition-all disabled:opacity-30"
                                            >
                                                Withdraw Funds <ArrowUpRight size={12} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Total Revenue Earned</span>
                                        <span className="text-xl font-bold text-zinc-400 block pt-0.5">{partnerData?.earnings}</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-x-8 text-xs text-right">
                                    <div><span className="text-zinc-400 block font-medium">Active Outlets</span><strong className="text-zinc-900 text-sm font-bold">{partnerData?.activeShops} Units</strong></div>
                                    <div><span className="text-zinc-400 block font-medium">Pipeline Status</span><strong className="text-zinc-500 text-sm font-semibold">{partnerData?.pendingShops} Pending</strong></div>
                                    <div><span className="text-zinc-400 block font-medium">Total Network Referrals</span><strong className="text-zinc-500 text-sm font-semibold">{partnerData?.totalReferred} Logs</strong></div>
                                </div>
                            </div>

                            {/* Dual Panel Data Matrix */}
                            <div className="grid grid-cols-12 gap-6 items-start">
                                <div className="col-span-8 bg-white border border-zinc-200/80 rounded-2xl p-6 space-y-4">
                                    <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Merchant Registry Ledger</h3>
                                        <div className="flex gap-2">
                                            <input
                                                type="text" placeholder="Search accounts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                                                className="pl-3 pr-3 py-1 text-[11px] bg-zinc-50 border border-zinc-200 rounded-md focus:outline-none w-[150px]"
                                            />
                                            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="py-1 px-2 text-[11px] bg-zinc-50 border border-zinc-200 rounded-md">
                                                {availableMonths.map(m => <option key={m} value={m}>{m}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <ShopTableBody filteredShops={filteredShops} formatDate={formatDate} />
                                </div>

                                <div className="col-span-4 space-y-6">
                                    <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 space-y-4">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Withdrawal Registry</h3>
                                        <WithdrawalListBody partnerData={partnerData} />
                                    </div>
                                    <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 space-y-4">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Settlement Coordinates</h3>
                                        <ProfileChannelBody partnerData={partnerData} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========================================================= */}
                        {/* 2. PREMIUM NATIVE MOBILE LAYOUT (Active on Phones)        */}
                        {/* ========================================================= */}
                        <div className="block md:hidden space-y-5">

                            {/* --- MOBILE VIEW 1: HOME/OVERVIEW --- */}
                            {currentView === "overview" && (
                                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                                    {/* Financial Passbook Header Tile */}
                                    <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-white rounded-2xl p-5 shadow-md relative overflow-hidden">
                                        <div className="space-y-1">
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest block">Available Balance</span>
                                            <h2 className="text-3xl font-extrabold tracking-tight">{partnerData?.availableBalance}</h2>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 mt-6 pt-4 text-xs">
                                            <div>
                                                <span className="text-zinc-500 block text-[10px]">Lifetime Settlements</span>
                                                <span className="font-bold text-zinc-200 text-sm">{partnerData?.earnings}</span>
                                            </div>
                                            <div className="text-right">
                                                <button
                                                    onClick={() => setIsWithdrawModalOpen(true)}
                                                    disabled={numericBalance <= 0}
                                                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white text-zinc-950 font-bold rounded-xl text-[11px] shadow-sm transition-all"
                                                >
                                                    Payout Request <ArrowUpRight size={13} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* High-Density Row Counters */}
                                    <div className="bg-white border border-zinc-200/60 rounded-xl p-4 divide-y divide-zinc-100 text-xs">
                                        <div className="flex justify-between py-2.5">
                                            <span className="text-zinc-500 flex items-center gap-2"><Store size={14} className="text-zinc-400" /> Active Network Shops</span>
                                            <strong className="text-zinc-900 font-bold text-sm">{partnerData?.activeShops} Units</strong>
                                        </div>
                                        <div className="flex justify-between py-2.5">
                                            <span className="text-zinc-500 flex items-center gap-2"><Clock size={14} className="text-zinc-400" /> Administrative Pipeline</span>
                                            <strong className="text-zinc-500 font-semibold">{partnerData?.pendingShops} Pending</strong>
                                        </div>
                                        <div className="flex justify-between py-2.5">
                                            <span className="text-zinc-500 flex items-center gap-2"><BarChart3 size={14} className="text-zinc-400" /> Global Logged Referrals</span>
                                            <strong className="text-zinc-500 font-semibold">{partnerData?.totalReferred} Submissions</strong>
                                        </div>
                                    </div>

                                    {/* Micro-feed preview row */}
                                    <div className="space-y-2.5">
                                        <div className="flex justify-between items-center px-1">
                                            <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Recent Onboardings</h3>
                                            <button onClick={() => setCurrentView("commissions")} className="text-xs font-bold text-[#0071E3]">View All</button>
                                        </div>
                                        <div className="bg-white border border-zinc-200/60 rounded-xl p-2 divide-y divide-zinc-50">
                                            {filteredShops.slice(0, 3).map(shop => (
                                                <div key={shop.id} className="p-3 flex justify-between items-center text-xs">
                                                    <div>
                                                        <strong className="text-zinc-900 font-bold block">{shop.name}</strong>
                                                        <span className="text-zinc-400 text-[11px]">{shop.category}</span>
                                                    </div>
                                                    <span className="font-mono font-bold text-zinc-900">₹{shop.commissionEarned}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* --- MOBILE VIEW 2: COMMISSIONS LIST --- */}
                            {currentView === "commissions" && (
                                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-lg font-extrabold text-zinc-900 tracking-tight px-1">Commissions registry</h2>
                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400" size={13} />
                                                <input
                                                    type="text" placeholder="Search micro-registry..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-zinc-200 rounded-xl outline-none"
                                                />
                                            </div>
                                            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="py-2 px-2 text-xs bg-white border border-zinc-200 rounded-xl">
                                                {availableMonths.map(m => <option key={m} value={m}>{m}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-zinc-200/60 rounded-xl p-2">
                                        <ShopTableBody filteredShops={filteredShops} formatDate={formatDate} isMobile />
                                    </div>
                                </motion.div>
                            )}

                            {/* --- MOBILE VIEW 3: PAYOUTS HISTORY --- */}
                            {currentView === "ledger" && (
                                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                                    <h2 className="text-lg font-extrabold text-zinc-900 tracking-tight px-1">Disbursal Vouchers</h2>
                                    <div className="bg-white border border-zinc-200/60 rounded-xl p-4">
                                        <WithdrawalListBody partnerData={partnerData} />
                                    </div>
                                </motion.div>
                            )}

                            {/* --- MOBILE VIEW 4: SECURITY SETTINGS & PROFILE --- */}
                            {currentView === "profile" && (
                                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                                    <h2 className="text-lg font-extrabold text-zinc-900 tracking-tight px-1">Identity & Clearing Configuration</h2>
                                    <div className="bg-white border border-zinc-200/60 rounded-xl p-4 space-y-5">
                                        <ProfileChannelBody partnerData={partnerData} />
                                        <button
                                            onClick={() => router.push("/partner/login")}
                                            className="w-full py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 border border-rose-100"
                                        >
                                            <LogOut size={14} /> Terminate Current Session
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                        </div>
                    </div>
                )}
            </div>

            {/* ========================================================= */}
            {/* 3. CORE MOBILE BOTTOM APP MENU BAR (Fixed Dock)            */}
            {/* ========================================================= */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-zinc-200/80 h-16 px-4 flex items-center justify-around z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
                <button
                    onClick={() => setCurrentView("overview")}
                    className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all ${currentView === "overview" ? "text-zinc-900 scale-105 font-bold" : "text-zinc-400 font-medium"}`}
                >
                    <LayoutDashboard size={18} strokeWidth={currentView === "overview" ? 2.5 : 2} />
                    <span className="text-[10px]">Overview</span>
                </button>
                <button
                    onClick={() => setCurrentView("commissions")}
                    className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all ${currentView === "commissions" ? "text-zinc-900 scale-105 font-bold" : "text-zinc-400 font-medium"}`}
                >
                    <Receipt size={18} strokeWidth={currentView === "commissions" ? 2.5 : 2} />
                    <span className="text-[10px]">Shops</span>
                </button>
                <button
                    onClick={() => setIsWithdrawModalOpen(true)}
                    className="flex flex-col items-center justify-center bg-zinc-900 text-white rounded-full w-10 h-10 shadow-md mb-5 active:scale-95 transition-transform"
                >
                    <ArrowUpRight size={20} />
                </button>
                <button
                    onClick={() => setCurrentView("ledger")}
                    className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all ${currentView === "ledger" ? "text-zinc-900 scale-105 font-bold" : "text-zinc-400 font-medium"}`}
                >
                    <ArrowRightLeft size={18} strokeWidth={currentView === "ledger" ? 2.5 : 2} />
                    <span className="text-[10px]">Ledger</span>
                </button>
                <button
                    onClick={() => setCurrentView("profile")}
                    className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all ${currentView === "profile" ? "text-zinc-900 scale-105 font-bold" : "text-zinc-400 font-medium"}`}
                >
                    <UserCircle2 size={18} strokeWidth={currentView === "profile" ? 2.5 : 2} />
                    <span className="text-[10px]">Profile</span>
                </button>
            </div>

            {/* --- Outward Withdrawal Sidebar Overlay Slider --- */}
            <AnimatePresence>
                {isWithdrawModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => !isSubmittingWithdrawal && setIsWithdrawModalOpen(false)}
                            className="fixed inset-0 bg-zinc-900/10 z-[100] backdrop-blur-xs"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 250 }}
                            className="fixed top-0 right-0 bottom-0 w-full sm:max-w-[390px] bg-white z-[101] shadow-2xl border-l border-zinc-200/80 p-6 sm:p-8 flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b pb-4 border-zinc-100">
                                    <div>
                                        <h2 className="text-sm font-extrabold text-zinc-900 tracking-tight">Initiate Outward Settlement</h2>
                                        <p className="text-[11px] text-zinc-400 font-medium">Liquid Pool Volume: {partnerData?.availableBalance}</p>
                                    </div>
                                    <button onClick={() => setIsWithdrawModalOpen(false)} className="text-zinc-400 hover:text-zinc-900 p-1.5 hover:bg-zinc-50 rounded-lg transition-colors">
                                        <X size={15} />
                                    </button>
                                </div>

                                {withdrawalSuccess ? (
                                    <div className="py-12 text-center space-y-3 animate-in fade-in">
                                        <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto text-xs font-bold font-mono">✓</div>
                                        <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Disbursal Pipeline Posted</h3>
                                        <p className="text-zinc-400 text-[11px] max-w-xs mx-auto">Reconciliation voucher committed successfully. Pending automated audit clearance.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleWithdrawSubmit} className="space-y-5 text-xs font-medium text-zinc-600">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Clearing Modality Route</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {(["UPI", "Bank Transfer"] as const).map(method => (
                                                    <button
                                                        key={method} type="button" onClick={() => setPayoutMethod(method)}
                                                        className={`py-2 rounded-lg font-bold border text-center transition-all ${payoutMethod === method ? "bg-zinc-900 text-white border-zinc-900 shadow-sm" : "bg-zinc-50/60 text-zinc-800 border-zinc-200 hover:bg-zinc-100/60"
                                                            }`}
                                                    >
                                                        {method === "UPI" ? "VPA ID / UPI" : "Bank Channel IMPS"}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Outward Target Value (INR)</label>
                                            <div className="relative">
                                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-zinc-400 font-mono">₹</span>
                                                <input
                                                    type="number" required min="1" step="any" placeholder="0.00"
                                                    value={withdrawAmount}
                                                    onChange={(e) => setWithdrawAmount(e.target.value)}
                                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-7 pr-16 py-2.5 font-mono font-bold text-zinc-900 outline-none focus:border-zinc-900 focus:bg-white transition-all text-sm"
                                                />
                                                <button
                                                    type="button" onClick={() => setWithdrawAmount(numericBalance.toString())}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-white border border-zinc-200 text-[10px] font-bold text-zinc-500 hover:text-zinc-900 rounded shadow-2xs"
                                                >
                                                    MAX
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            type="submit" disabled={isSubmittingWithdrawal || !withdrawAmount}
                                            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3 rounded-xl font-bold transition-all disabled:opacity-30 tracking-wide uppercase text-[10px] shadow-sm"
                                        >
                                            {isSubmittingWithdrawal ? "Validating Channel Token..." : "Post Outward Disbursal Execution"}
                                        </button>

                                        {withdrawalError && (
                                            <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 text-rose-700 text-[11px] flex gap-2">
                                                <AlertCircle size={13} className="shrink-0 mt-0.5" />
                                                <span>{withdrawalError}</span>
                                            </div>
                                        )}
                                    </form>
                                )}
                            </div>

                            <div className="text-[10px] text-zinc-400 text-center flex items-center justify-center gap-1 font-medium">
                                <ShieldCheck size={12} className="text-zinc-300" /> <span>Subject to secure clearing protocols.</span>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}

// =========================================================
// SUB-LAYOUT COMPONENTS FOR ADAPTIVE WRAPPING RENDER       
// =========================================================
function ShopTableBody({ filteredShops, formatDate, isMobile = false }: { filteredShops: Shop[], formatDate: Function, isMobile?: boolean }) {
    if (filteredShops.length === 0) {
        return <EmptyStateMessage title="Registry Index Empty" subtitle="No transactional records found matching parameters." />;
    }

    if (isMobile) {
        return (
            <div className="divide-y divide-zinc-100 text-xs">
                {filteredShops.map((shop) => (
                    <div key={shop.id} className="py-3 flex flex-col gap-1.5">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="font-bold text-zinc-900 text-[13px] block">{shop.name}</span>
                                <span className="text-[11px] text-zinc-400">{shop.category} &middot; {shop.planName}</span>
                            </div>
                            <span className="font-bold text-zinc-950 font-mono">₹{shop.commissionEarned}</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-medium">
                            <span>{shop.location} &middot; {formatDate(shop.createdAt)}</span>
                            <span className={`inline-block px-1.5 py-0.2 rounded text-[8px] font-bold tracking-widest uppercase border ${shop.status.toLowerCase() === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-zinc-50 text-zinc-500 border-zinc-200'
                                }`}>{shop.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <table className="w-full text-left border-collapse text-xs">
            <thead>
                <tr className="text-zinc-400 border-b border-zinc-100 font-bold text-[9px] uppercase tracking-widest">
                    <th className="pb-3 font-semibold">Business Unit Account</th>
                    <th className="pb-3 font-semibold">Geographic Anchor</th>
                    <th className="pb-3 font-semibold">Committed</th>
                    <th className="pb-3 font-semibold text-right">Yield Volume</th>
                    <th className="pb-3 font-semibold text-right">Audit Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-medium text-zinc-700">
                {filteredShops.map((shop) => (
                    <tr key={shop.id} className="hover:bg-zinc-50/50 transition-colors">
                        <td className="py-3">
                            <span className="font-bold text-zinc-900 block">{shop.name}</span>
                            <span className="text-[11px] text-zinc-400 font-normal">{shop.category} &middot; {shop.planName}</span>
                        </td>
                        <td className="py-3 text-zinc-500 font-normal">{shop.location}</td>
                        <td className="py-3 text-zinc-400 font-mono text-[11px]">{formatDate(shop.createdAt)}</td>
                        <td className="py-3 text-right font-bold text-zinc-900">₹{shop.commissionEarned}</td>
                        <td className="py-3 text-right">
                            <span className={`inline-block px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold tracking-widest uppercase border ${shop.status.toLowerCase() === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-zinc-50 text-zinc-500 border-zinc-200'
                                }`}>{shop.status}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function WithdrawalListBody({ partnerData }: { partnerData: PartnerData | null }) {
    if (!partnerData?.pastWithdrawals || partnerData.pastWithdrawals.length === 0) {
        return <EmptyStateMessage title="Index Empty" subtitle="Outbound corporate accounting settlements will show here." />;
    }

    return (
        <div className="space-y-3">
            {partnerData.pastWithdrawals.map((w) => (
                <div key={w.id} className="border-b border-zinc-100 pb-3 last:border-0 last:pb-0 text-xs space-y-1">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-zinc-900 text-[13px]">₹{w.amount.toLocaleString("en-IN")}</span>
                        <span className={`px-1 rounded text-[8px] font-bold uppercase tracking-wider border ${w.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'
                            }`}>{w.status}</span>
                    </div>
                    <p className="text-[10px] text-zinc-400 font-mono">
                        {new Date(w.requestDate).toLocaleDateString("en-IN", { month: "short", day: "numeric" })} &middot; ID: {w.id.substring(0, 8)}
                    </p>
                    {w.utrNumber && (
                        <p className="text-[9px] font-mono text-zinc-500 bg-zinc-50 p-1 rounded border border-zinc-100 select-all">UTR: {w.utrNumber}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

function ProfileChannelBody({ partnerData }: { partnerData: PartnerData | null }) {
    return (
        <div className="space-y-4 text-xs font-medium">
            <div className="space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 block">Personal Profile</span>
                <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3 space-y-2">
                    <div><span className="text-zinc-400 block text-[9px]">Full Corporate Entity</span><span className="font-bold text-zinc-900">{partnerData?.name}</span></div>
                    <div><span className="text-zinc-400 block text-[9px]">Routing Anchor Email</span><span className="text-zinc-700 font-mono break-all">{partnerData?.email}</span></div>
                    <div><span className="text-zinc-400 block text-[9px]">Mobile Line</span><span className="text-zinc-700">{partnerData?.phone}</span></div>
                </div>
            </div>

            <div className="space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 block">Settlement Destination</span>
                <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3">
                    {partnerData?.payoutDetails?.upiId ? (
                        <div><span className="text-zinc-400 block text-[9px]">Configured UPI Address (VPA)</span><span className="font-mono font-bold text-zinc-900 select-all break-all">{partnerData.payoutDetails.upiId}</span></div>
                    ) : partnerData?.payoutDetails?.accountNumber ? (
                        <div className="space-y-2">
                            <div><span className="text-zinc-400 block text-[9px]">Bank Corporate Name</span><span className="font-bold text-zinc-900">{partnerData.payoutDetails.bankName}</span></div>
                            <div className="grid grid-cols-2 gap-2 border-t border-zinc-200/40 pt-1.5">
                                <div><span className="text-zinc-400 block text-[9px]">Account Index</span><span className="font-mono font-bold text-zinc-900 select-all">{partnerData.payoutDetails.accountNumber}</span></div>
                                <div><span className="text-zinc-400 block text-[9px]">IFS Financial Routing Code</span><span className="font-mono font-bold text-zinc-900 uppercase select-all">{partnerData.payoutDetails.ifscCode}</span></div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-2.5 bg-zinc-100 rounded-lg text-zinc-500 font-normal border border-zinc-200/60 text-[11px]">
                            No bound destinations verified. Connect with operations backend support.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function EmptyStateMessage({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="py-12 text-center text-xs space-y-0.5">
            <p className="text-zinc-800 font-bold tracking-tight">{title}</p>
            <p className="text-zinc-400 font-medium">{subtitle}</p>
        </div>
    );
}