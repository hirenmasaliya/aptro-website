"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Copy, LogOut, Store, Wallet, TrendingUp,
    CheckCircle2, Clock, User, Bell, Award,
    Download, BarChart3, QrCode, Search,
    CircleDollarSign, Activity, AlertCircle, Building2, X,
    History, Landmark, FileText, ArrowUpRight, ShieldCheck, HelpCircle
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || "https://aptro-admin.vercel.app";

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

    const [activeTab, setActiveTab] = useState<"shops" | "withdrawals" | "profile">("shops");
    const [selectedMonth, setSelectedMonth] = useState("All Time");
    const [searchQuery, setSearchQuery] = useState("");

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
        <main className={`min-h-screen bg-[#FAFAFA] text-zinc-900 ${jakarta.className} antialiased`}>
            {/* Top Navigation */}
            <nav className="bg-white/70 backdrop-blur-md border-b border-zinc-100 sticky top-0 z-40">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <span className="font-bold text-[11px] sm:text-xs tracking-widest text-zinc-900 uppercase whitespace-nowrap">APTRO // CAPITAL</span>
                        <div className="h-3 w-px bg-zinc-200" />
                        <button 
                            onClick={handleCopyId}
                            className="text-[10px] sm:text-[11px] font-mono bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 text-zinc-500 rounded px-2 py-0.5 transition-all flex items-center gap-1"
                        >
                            <span className="truncate max-w-[80px] sm:max-w-none">{partnerData?.partnerId || "APT-XXXX"}</span>
                            <span className="text-[9px] text-zinc-400 hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-zinc-800 hidden sm:inline">{partnerData?.name}</span>
                            <span className="text-[9px] font-extrabold tracking-wider uppercase bg-zinc-900 text-white px-1.5 py-0.5 rounded-xs">{partnerData?.tier}</span>
                        </div>
                        <button onClick={() => router.push("/partner/login")} className="text-zinc-400 hover:text-zinc-900 transition-colors">
                            <LogOut size={14} />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 space-y-4">
                {isLoading ? (
                    <div className="flex items-center justify-center py-32 text-xs font-medium text-zinc-400 tracking-wider font-mono">LOADING LEDGER CONTEXT...</div>
                ) : (
                    <>
                        {/* Responsive FinTech Balance Strip */}
                        <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                            <div className="flex flex-row justify-between md:justify-start w-full md:w-auto gap-8 sm:gap-12">
                                <div className="space-y-0.5">
                                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Available Liquidity</span>
                                    <div className="flex items-baseline gap-2 sm:gap-3">
                                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900">{partnerData?.availableBalance}</span>
                                        <button 
                                            onClick={() => setIsWithdrawModalOpen(true)}
                                            disabled={numericBalance <= 0}
                                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition-all shadow-xs disabled:opacity-30"
                                        >
                                            Withdraw <ArrowUpRight size={11} />
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-0.5 text-right md:text-left">
                                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Total Settled</span>
                                    <span className="text-lg sm:text-xl font-bold text-zinc-400 block pt-0.5">{partnerData?.earnings}</span>
                                </div>
                            </div>

                            {/* High-Density Metric Grid */}
                            <div className="grid grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-1 border-t border-zinc-100 pt-3 md:pt-0 w-full md:w-auto text-xs">
                                <div>
                                    <span className="text-zinc-400 font-medium block text-[11px] sm:text-xs">Active Outlets</span>
                                    <strong className="text-zinc-900 text-xs sm:text-sm font-bold tracking-tight">{partnerData?.activeShops} Units</strong>
                                </div>
                                <div>
                                    <span className="text-zinc-400 font-medium block text-[11px] sm:text-xs">Pipeline</span>
                                    <strong className="text-zinc-500 text-xs sm:text-sm font-semibold tracking-tight">{partnerData?.pendingShops} Pending</strong>
                                </div>
                                <div>
                                    <span className="text-zinc-400 font-medium block text-[11px] sm:text-xs">Total Logged</span>
                                    <strong className="text-zinc-500 text-xs sm:text-sm font-semibold tracking-tight">{partnerData?.totalReferred} Logs</strong>
                                </div>
                            </div>
                        </div>

                        {/* Master Workspace Box */}
                        <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden">
                            {/* Tabs Controller */}
                            <div className="border-b border-zinc-100 bg-white px-4 sm:px-6 pt-3 sm:pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                                <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar whitespace-nowrap">
                                    {(["shops", "withdrawals", "profile"] as const).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`pb-2.5 sm:pb-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider relative transition-colors ${
                                                activeTab === tab ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-900"
                                            }`}
                                        >
                                            {tab === "shops" ? "Commissions" : tab === "withdrawals" ? "Payout Ledger" : "Identity Config"}
                                            {activeTab === tab && <motion.div layoutId="premiumTabBelt" className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-900" />}
                                        </button>
                                    ))}
                                </div>

                                {activeTab === "shops" && (
                                    <div className="flex items-center gap-2 pb-3 sm:pb-0 w-full sm:w-auto">
                                        <div className="relative flex-1 sm:flex-none">
                                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400" size={12} />
                                            <input
                                                type="text"
                                                placeholder="Search identifiers..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="pl-7 pr-3 py-1.5 text-[11px] font-medium bg-zinc-50 border border-zinc-200/60 rounded-md focus:outline-none w-full sm:w-[140px]"
                                            />
                                        </div>
                                        <select
                                            value={selectedMonth}
                                            onChange={(e) => setSelectedMonth(e.target.value)}
                                            className="py-1.5 px-2 text-[11px] font-medium bg-zinc-50 border border-zinc-200/60 rounded-md focus:outline-none cursor-pointer"
                                        >
                                            {availableMonths.map(m => <option key={m} value={m}>{m}</option>)}
                                        </select>
                                    </div>
                                )}
                            </div>

                            {/* Switcher Context Area */}
                            <div className="p-4 sm:p-6">
                                {activeTab === "shops" && (
                                    <div className="w-full">
                                        {filteredShops.length === 0 ? (
                                            <EmptyStateMessage title="Ledger Index Empty" subtitle="No transactional records found matching parameters." />
                                        ) : (
                                            <>
                                                {/* Desktop Table View */}
                                                <div className="hidden md:block overflow-x-auto">
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
                                                                <tr key={shop.id} className="hover:bg-zinc-50/50 transition-colors group">
                                                                    <td className="py-3">
                                                                        <span className="font-bold text-zinc-900 group-hover:text-[#0071E3] transition-colors block">{shop.name}</span>
                                                                        <span className="text-[11px] text-zinc-400 font-normal">{shop.category} &middot; {shop.planName}</span>
                                                                    </td>
                                                                    <td className="py-3 text-zinc-500 font-normal">{shop.location}</td>
                                                                    <td className="py-3 text-zinc-400 font-mono text-[11px]">{formatDate(shop.createdAt)}</td>
                                                                    <td className="py-3 text-right font-bold text-zinc-900">
                                                                        {shop.commissionEarned === "Pending" ? (
                                                                            <span className="text-amber-600 font-semibold tracking-tight text-[11px] bg-amber-50 px-1.5 py-0.5 rounded">Calculating</span>
                                                                        ) : `₹${shop.commissionEarned}`}
                                                                    </td>
                                                                    <td className="py-3 text-right">
                                                                        <span className={`inline-block px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold tracking-widest uppercase border ${
                                                                            shop.status.toLowerCase() === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-zinc-50 text-zinc-500 border-zinc-200'
                                                                }`}>
                                                                            {shop.status}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>

                                                {/* Phone Compact List View Fallback */}
                                                <div className="block md:hidden divide-y divide-zinc-100 text-xs">
                                                    {filteredShops.map((shop) => (
                                                        <div key={shop.id} className="py-3 flex flex-col gap-2">
                                                            <div className="flex justify-between items-start">
                                                                <div>
                                                                    <span className="font-bold text-zinc-900 text-sm block">{shop.name}</span>
                                                                    <span className="text-[11px] text-zinc-400">{shop.category} &middot; {shop.planName}</span>
                                                                </div>
                                                                <span className="font-bold text-zinc-900 text-right">
                                                                    {shop.commissionEarned === "Pending" ? "Pending" : `₹${shop.commissionEarned}`}
                                                                </span>
                                                            </div>
                                                            <div className="flex justify-between items-center text-[11px] text-zinc-400">
                                                                <span>{shop.location} &middot; {formatDate(shop.createdAt)}</span>
                                                                <span className={`px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold tracking-widest uppercase border ${
                                                                    shop.status.toLowerCase() === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-zinc-50 text-zinc-500 border-zinc-200'
                                                                }`}>{shop.status}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}

                                {activeTab === "withdrawals" && (
                                    <div className="space-y-2">
                                        {!partnerData?.pastWithdrawals || partnerData.pastWithdrawals.length === 0 ? (
                                            <EmptyStateMessage title="Disbursal Register Empty" subtitle="Outbound corporate accounting settlements will show here." />
                                        ) : (
                                            <div className="space-y-2">
                                                {partnerData.pastWithdrawals.map((w) => (
                                                    <div key={w.id} className="border border-zinc-100 rounded-xl p-3 sm:p-4 bg-zinc-50/40 text-xs flex flex-col lg:flex-row lg:items-center justify-between gap-3 hover:border-zinc-200 transition-all">
                                                        <div className="space-y-0.5">
                                                            <div className="flex items-center gap-2.5">
                                                                <strong className="text-sm sm:text-base font-extrabold text-zinc-900">₹{w.amount.toLocaleString("en-IN")}</strong>
                                                                <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold tracking-wider uppercase border ${
                                                                    w.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                                                                }`}>{w.status}</span>
                                                            </div>
                                                            <p className="text-[11px] text-zinc-400 font-mono">
                                                                ID: {w.id} &middot; {new Date(w.requestDate).toLocaleDateString("en-IN", { dateStyle: "medium" })}
                                                            </p>
                                                        </div>

                                                        {w.status === "Approved" && (
                                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 text-[10px] bg-white border border-zinc-200/60 px-3 py-2 rounded-lg font-mono text-zinc-500 shadow-2xs w-full lg:w-auto">
                                                                <div><span className="text-zinc-400 block text-[9px] uppercase font-sans font-bold tracking-wider mb-0.5">Channel</span><span className="text-zinc-800 font-semibold">{w.payoutMethod}</span></div>
                                                                <div><span className="text-zinc-400 block text-[9px] uppercase font-sans font-bold tracking-wider mb-0.5">Txn ID</span><span className="text-zinc-800 font-semibold select-all truncate block max-w-[120px]">{w.transactionId || "—"}</span></div>
                                                                <div><span className="text-zinc-400 block text-[9px] uppercase font-sans font-bold tracking-wider mb-0.5">UTR Reference</span><span className="text-zinc-900 font-bold select-all truncate block max-w-[120px]">{w.utrNumber || "—"}</span></div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === "profile" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-1 max-w-3xl text-xs font-medium animate-in fade-in duration-150">
                                        <div className="space-y-3">
                                            <h4 className="font-bold uppercase tracking-widest text-zinc-400 text-[9px]">Identity Ledger Matrix</h4>
                                            <div className="border border-zinc-200/80 rounded-xl p-4 bg-zinc-50/20 space-y-3 shadow-2xs">
                                                <div><span className="text-zinc-400 block text-[10px] font-normal">Legal Corporate Entity</span><span className="font-bold text-zinc-900">{partnerData?.name}</span></div>
                                                <div><span className="text-zinc-400 block text-[10px] font-normal">Secure Routing Email</span><span className="text-zinc-700 font-mono break-all">{partnerData?.email}</span></div>
                                                <div><span className="text-zinc-400 block text-[10px] font-normal">Contact Anchor Line</span><span className="text-zinc-700">{partnerData?.phone}</span></div>
                                                <div><span className="text-zinc-400 block text-[10px] font-normal">Campus Infrastructure Bound</span><span className="text-zinc-700 truncate block">{partnerData?.college || "Corporate Fleet Representative"}</span></div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="font-bold uppercase tracking-widest text-zinc-400 text-[9px]">Clearing Destination Channels</h4>
                                            <div className="border border-zinc-200/80 rounded-xl p-4 bg-zinc-50/20 space-y-3 shadow-2xs">
                                                {partnerData?.payoutDetails?.upiId ? (
                                                    <div><span className="text-zinc-400 block text-[10px] font-normal">Settlement VPA Gateway (UPI)</span><span className="font-mono font-bold text-zinc-900 select-all tracking-wide break-all">{partnerData.payoutDetails.upiId}</span></div>
                                                ) : partnerData?.payoutDetails?.accountNumber ? (
                                                    <div className="space-y-3">
                                                        <div><span className="text-zinc-400 block text-[10px] font-normal">Banking Core Corporate Name</span><span className="font-bold text-zinc-900">{partnerData.payoutDetails.bankName}</span></div>
                                                        <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 pt-2">
                                                            <div><span className="text-zinc-400 block text-[10px] font-normal">Account Index</span><span className="font-mono font-bold text-zinc-900 select-all break-all">{partnerData.payoutDetails.accountNumber}</span></div>
                                                            <div><span className="text-zinc-400 block text-[10px] font-normal">IFS Financial Routing Code</span><span className="font-mono font-bold text-zinc-900 uppercase select-all">{partnerData.payoutDetails.ifscCode}</span></div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="p-3 bg-zinc-100 rounded-lg text-zinc-500 font-normal border border-zinc-200/60 flex gap-2">
                                                        <AlertCircle size={14} className="shrink-0 mt-0.5" />
                                                        <p>No bound destinations active. Sync configurations with administrative backend operators.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Slide Drawer overlay */}
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
                            transition={{ type: "spring", damping: 27, stiffness: 240 }}
                            className="fixed top-0 right-0 bottom-0 w-full sm:max-w-[390px] bg-white z-[101] shadow-[0_0_40px_rgba(0,0,0,0.04)] border-l border-zinc-200/80 p-6 sm:p-8 flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b pb-4 border-zinc-100">
                                    <div>
                                        <h2 className="text-sm font-extrabold text-zinc-900 tracking-tight">Initiate Outward Settlement</h2>
                                        <p className="text-[11px] text-zinc-400 font-medium">Available Cash Balance: {partnerData?.availableBalance}</p>
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
                                                        className={`py-2 rounded-lg font-bold border text-center transition-all ${
                                                            payoutMethod === method ? "bg-zinc-900 text-white border-zinc-900 shadow-sm" : "bg-zinc-50/60 text-zinc-800 border-zinc-200 hover:bg-zinc-100/60"
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
                                <ShieldCheck size={12} className="text-zinc-300" /> <span>Subject to dynamic banking audit clearance loops.</span>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}

function EmptyStateMessage({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="py-16 text-center text-xs space-y-0.5">
            <p className="text-zinc-800 font-bold tracking-tight">{title}</p>
            <p className="text-zinc-400 font-medium">{subtitle}</p>
        </div>
    );
}