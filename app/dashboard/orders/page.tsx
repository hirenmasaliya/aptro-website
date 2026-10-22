"use client";

import { useState, useEffect, useMemo } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
    Search,
    Filter,
    Download,
    Plus,
    MoreVertical,
    Eye,
    Loader2,
    AlertCircle,
    ShoppingCart,
    IndianRupee,
    Clock,
    CheckCircle2,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

// --- TYPES ---
interface OrderSummary {
    billTotal?: number;
    gstAmount?: number;
    discount?: number;
    shipping?: number;
    finalTotal?: number;
}

interface Order {
    orderKey: string;
    orderId: string | number;
    date?: string;
    time?: string;
    createdAt?: string;
    status: string;
    paymentStatus?: string;
    orderType?: string;
    summary?: OrderSummary;
    vendor?: { name?: string; company?: string; };
    customer?: { name?: string; company?: string; };
}

const ITEMS_PER_PAGE = 10;

// --- UTILS ---
const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount || 0);
};

const formatDate = (dateStr?: string, createdAt?: string) => {
    if (dateStr) return dateStr;
    if (createdAt) {
        const d = new Date(createdAt);
        if (!isNaN(d.getTime())) {
            return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
        }
    }
    return "N/A";
};

const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
        pending: "bg-orange-50 text-orange-700 border-orange-200",
        processing: "bg-blue-50 text-blue-700 border-blue-200",
        shipped: "bg-indigo-50 text-indigo-700 border-indigo-200",
        delivered: "bg-green-50 text-green-700 border-green-200",
        cancelled: "bg-red-50 text-red-700 border-red-200",
    };
    const normalized = status?.toLowerCase() || "";
    const appliedStyle = styles[normalized] || "bg-gray-50 text-gray-700 border-gray-200";
    return (
        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${appliedStyle}`}>
            {status ? status.charAt(0).toUpperCase() + status.slice(1) : "Unknown"}
        </span>
    );
};

const getPaymentBadge = (status: string) => {
    const normalized = status?.toLowerCase() || "";
    if (normalized === "paid") {
        return <span className="text-[11px] font-bold text-[#188038] bg-[#E6F4EA] px-2 py-0.5 rounded border border-[#CEEAD6]">PAID</span>;
    }
    if (normalized === "unpaid" || normalized === "pending") {
        return <span className="text-[11px] font-bold text-[#D93025] bg-[#FCE8E6] px-2 py-0.5 rounded border border-[#FAD2CF]">UNPAID</span>;
    }
    return <span className="text-[11px] font-bold text-[#5F6368] bg-[#F1F3F4] px-2 py-0.5 rounded border border-[#DADCE0]">{status || "N/A"}</span>;
};

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // Filtering & Pagination States
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch Data
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("aptro_token");
                const uid = localStorage.getItem("aptro_uid");
                if (!token || !uid) { window.location.href = "/login"; return; }

                const res = await fetch(`/api/business/${uid}/orders`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                });

                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem("aptro_token");
                    localStorage.removeItem("aptro_uid");
                    window.location.href = "/login";
                    return;
                }

                const json = await res.json();
                if (!res.ok || !json?.success) throw new Error(json?.message || "Failed to fetch orders");
                setOrders(json.data || []);
            } catch (err: any) {
                setError("Could not load orders. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchOrders();
    }, []);

    // Calculate Dashboard Metrics
    const metrics = useMemo(() => {
        let totalRevenue = 0;
        let pendingCount = 0;
        let deliveredCount = 0;

        orders.forEach(order => {
            totalRevenue += (order.summary?.finalTotal || order.summary?.billTotal || 0);
            if (order.status?.toLowerCase() === 'pending') pendingCount++;
            if (order.status?.toLowerCase() === 'delivered') deliveredCount++;
        });

        return { totalOrders: orders.length, totalRevenue, pendingCount, deliveredCount };
    }, [orders]);

    // Filter Logic
    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const entityName = order.vendor?.name || order.customer?.name || "";
            const orderIdStr = String(order.orderId || "");
            const matchesSearch = orderIdStr.toLowerCase().includes(searchTerm.toLowerCase()) || entityName.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === "all" || order.status?.toLowerCase() === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [orders, searchTerm, statusFilter]);

    // Reset page to 1 when filters change
    useEffect(() => { setCurrentPage(1); }, [searchTerm, statusFilter]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
    const paginatedOrders = filteredOrders.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        // Used flex-col and h-[calc(100vh-100px)] to prevent full page scroll, keeping UI compact
        <div className={`fade-in flex flex-col h-[calc(100vh-110px)] ${jakarta.className}`}>

            {/* --- HEADER --- */}
            <div className="mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0">
                <div>
                    <h2 className="text-[22px] font-semibold text-[#1F1F1F] tracking-tight">Orders</h2>
                </div>
                <div className="flex items-center gap-2">
                    <button className="inline-flex items-center gap-1.5 h-8 px-3 bg-white border border-[#DADCE0] rounded-lg text-[12.5px] font-medium text-[#1F1F1F] hover:bg-[#F1F3F4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]">
                        <Download size={14} className="text-[#5F6368]" />
                        Export
                    </button>
                    <Link
                        href="/dashboard/orders/new"
                        className="inline-flex items-center gap-1.5 h-8 px-3 bg-[#1A73E8] border border-transparent rounded-lg text-[12.5px] font-medium text-white hover:bg-[#1557B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
                    >
                        <Plus size={14} />
                        Create Order
                    </Link>
                </div>
            </div>

            {/* --- COMPACT DASHBOARD CARDS --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 shrink-0">
                <div className="bg-white border border-[#DADCE0] rounded-xl p-3.5 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E8F0FE] flex items-center justify-center shrink-0"><ShoppingCart size={18} className="text-[#1A73E8]" /></div>
                    <div>
                        <p className="text-[12px] font-medium text-[#5F6368]">Total Orders</p>
                        <p className="text-[18px] font-bold text-[#1F1F1F] leading-tight">{metrics.totalOrders}</p>
                    </div>
                </div>
                <div className="bg-white border border-[#DADCE0] rounded-xl p-3.5 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E6F4EA] flex items-center justify-center shrink-0"><IndianRupee size={18} className="text-[#188038]" /></div>
                    <div>
                        <p className="text-[12px] font-medium text-[#5F6368]">Total Revenue</p>
                        <p className="text-[18px] font-bold text-[#1F1F1F] leading-tight">{formatCurrency(metrics.totalRevenue)}</p>
                    </div>
                </div>
                <div className="bg-white border border-[#DADCE0] rounded-xl p-3.5 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0"><Clock size={18} className="text-orange-600" /></div>
                    <div>
                        <p className="text-[12px] font-medium text-[#5F6368]">Pending</p>
                        <p className="text-[18px] font-bold text-[#1F1F1F] leading-tight">{metrics.pendingCount}</p>
                    </div>
                </div>
                <div className="bg-white border border-[#DADCE0] rounded-xl p-3.5 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0"><CheckCircle2 size={18} className="text-green-600" /></div>
                    <div>
                        <p className="text-[12px] font-medium text-[#5F6368]">Delivered</p>
                        <p className="text-[18px] font-bold text-[#1F1F1F] leading-tight">{metrics.deliveredCount}</p>
                    </div>
                </div>
            </div>

            {/* --- MAIN TABLE AREA (FLEX GROW TO FILL SPACE) --- */}
            <div className="flex-1 flex flex-col min-h-0 bg-white border border-[#DADCE0] rounded-xl shadow-sm overflow-hidden">

                {/* Toolbar */}
                <div className="p-3 border-b border-[#DADCE0] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 bg-white">
                    <div className="relative w-full sm:w-[280px]">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#80868B]" />
                        <input
                            type="text"
                            placeholder="Search ID or name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 bg-[#F8F9FA] border border-[#DADCE0] rounded-md text-[12.5px] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#1A73E8] transition-all"
                        />
                    </div>
                    <div className="relative w-full sm:w-[140px]">
                        <Filter size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6368] pointer-events-none" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 bg-white border border-[#DADCE0] rounded-md text-[12.5px] font-medium text-[#444746] focus:outline-none focus:ring-1 focus:ring-[#1A73E8] appearance-none cursor-pointer"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>

                {/* Scrollable Table Body */}
                <div className="flex-1 overflow-auto">
                    {isLoading ? (
                        <div className="h-full flex flex-col items-center justify-center">
                            <Loader2 size={24} className="animate-spin text-[#1A73E8] mb-2" />
                            <p className="text-[#5F6368] text-[12.5px]">Loading orders...</p>
                        </div>
                    ) : error ? (
                        <div className="h-full flex flex-col items-center justify-center text-center px-4">
                            <AlertCircle size={28} className="text-[#D93025] mb-2" />
                            <p className="text-[#1F1F1F] font-semibold text-[14px]">Failed to load orders</p>
                        </div>
                    ) : filteredOrders.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center px-4">
                            <ShoppingCart size={24} className="text-[#80868B] mb-2" />
                            <p className="text-[#1F1F1F] font-medium text-[13.5px]">No orders found</p>
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse min-w-[800px] relative">
                            <thead className="sticky top-0 bg-[#F8F9FA] shadow-[0_1px_0_#DADCE0] z-10">
                                <tr>
                                    <th className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#5F6368]">Order ID</th>
                                    <th className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#5F6368]">Type</th>
                                    <th className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#5F6368]">Party Name</th>
                                    <th className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#5F6368]">Date</th>
                                    <th className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#5F6368]">Total</th>
                                    <th className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#5F6368]">Payment</th>
                                    <th className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#5F6368]">Status</th>
                                    <th className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-[#5F6368] text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E8EAED]">
                                {paginatedOrders.map((order, index) => {
                                    const uniqueKey = order.orderKey || `order-${index}`;
                                    const partyName = order.vendor?.name || order.customer?.name || "Unknown";
                                    const totalAmount = order.summary?.finalTotal || order.summary?.billTotal || 0;

                                    return (
                                        <tr key={uniqueKey} className="hover:bg-[#F8F9FA] transition-colors">
                                            <td className="py-2.5 px-4 text-[12.5px] font-semibold text-[#1A73E8]">#{order.orderId || 'N/A'}</td>
                                            <td className="py-2.5 px-4 text-[12.5px] text-[#444746]">{order.orderType || '-'}</td>
                                            <td className="py-2.5 px-4 text-[12.5px] font-medium text-[#1F1F1F] truncate max-w-[150px]">{partyName}</td>
                                            <td className="py-2.5 px-4 text-[12.5px] text-[#5F6368]">{formatDate(order.date, order.createdAt)}</td>
                                            <td className="py-2.5 px-4 text-[12.5px] font-semibold text-[#1F1F1F]">{formatCurrency(totalAmount)}</td>
                                            <td className="py-2.5 px-4">{getPaymentBadge(order.paymentStatus || "")}</td>
                                            <td className="py-2.5 px-4">{getStatusBadge(order.status)}</td>
                                            <td className="py-2.5 px-4 text-right">
                                                <div className="flex items-center justify-end gap-1">
                                                    <button className="p-1.5 rounded-md text-[#5F6368] hover:bg-[#E8F0FE] hover:text-[#1A73E8]"><Eye size={15} /></button>
                                                    <button className="p-1.5 rounded-md text-[#5F6368] hover:bg-[#F1F3F4]"><MoreVertical size={15} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* --- PAGINATION FOOTER --- */}
                {!isLoading && !error && filteredOrders.length > 0 && (
                    <div className="p-3 border-t border-[#DADCE0] flex items-center justify-between bg-[#F8F9FA] shrink-0">
                        <span className="text-[12px] text-[#5F6368]">
                            Showing <span className="font-semibold text-[#1F1F1F]">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to <span className="font-semibold text-[#1F1F1F]">{Math.min(currentPage * ITEMS_PER_PAGE, filteredOrders.length)}</span> of <span className="font-semibold text-[#1F1F1F]">{filteredOrders.length}</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-1 border border-[#DADCE0] bg-white rounded flex items-center justify-center text-[#5F6368] hover:bg-[#F1F3F4] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <span className="text-[12px] font-medium text-[#1F1F1F] px-2">Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="p-1 border border-[#DADCE0] bg-white rounded flex items-center justify-center text-[#5F6368] hover:bg-[#F1F3F4] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}