"use client";

import React, { useEffect, useMemo, useState } from "react";

/* ---------- Types (match your API response) ---------- */

interface Payment {
    id: string;
    billTotal: number;
    createdAt: number; // epoch ms
    customerName: string;
    gstAmount: number;
    invoiceNumber: string;
    isGstEnabled: boolean;
    method: string;
    orderId: string;
    orderKey: string;
    paymentAmount: number;
    paymentId: string;
    pendingAmount: number;
    referenceNo: string;
    source: string;
    status: string;
    taxableAmount: number;
    type: string; // "Sales" | "Purchase" | "Salary"
}

interface ChartPoint {
    label: string; // "2026-06-05"
    sales: number;
    purchases: number;
    salaries: number;
    amount: number;
}

interface Summary {
    overall: { netCashFlow: number; totalExpense: number; totalIncome: number };
    purchase: {
        gstPayable: number;
        nonGstPayable: number;
        totalGst: number;
        totalPaid: number;
        totalPayable: number;
        totalPending: number;
    };
    salary: { totalPaid: number };
    sales: {
        gstReceivable: number;
        nonGstReceivable: number;
        totalGst: number;
        totalPending: number;
        totalReceivable: number;
        totalReceived: number;
    };
}

interface PaymentsData {
    chartData: ChartPoint[];
    count: number;
    payments: Payment[];
    summary: Summary;
}

/* ---------- Helpers ---------- */

const PAGE_SIZE = 15;

const inr = (n?: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(n ?? 0);

const compact = (n: number) =>
    new Intl.NumberFormat("en-IN", { notation: "compact", maximumFractionDigits: 1 }).format(n);

const fmtDate = (ms?: number) =>
    ms
        ? new Date(ms).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
        : "—";

const fmtLabel = (label: string) =>
    new Date(label).toLocaleDateString("en-IN", { day: "2-digit", month: "short" });

// The API uses "-" or "" for empty values
const clean = (v?: string) => (v && v.trim() !== "" && v.trim() !== "-" ? v : "");

const typeStyles: Record<string, string> = {
    Sales: "bg-emerald-50 text-emerald-700",
    Purchase: "bg-indigo-50 text-indigo-700",
    Salary: "bg-amber-50 text-amber-700",
};

const statusStyle = (status: string) => {
    const s = status.toLowerCase();
    if (["paid", "completed", "success", "received"].includes(s)) return "bg-emerald-50 text-emerald-700";
    if (s === "pending") return "bg-amber-50 text-amber-700";
    if (s.includes("partial")) return "bg-sky-50 text-sky-700";
    if (s === "overdue" || s === "failed") return "bg-red-50 text-red-700";
    return "bg-slate-100 text-slate-700";
};

const toInputDate = (ms: number) => new Date(ms).toISOString().slice(0, 10);

/* ---------- Small components ---------- */

function StatCard({
    label,
    value,
    tone = "text-slate-900",
    hint,
}: {
    label: string;
    value: string;
    tone?: string;
    hint?: string;
}) {
    return (
        <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">{label}</p>
            <p className={`mt-1 text-2xl font-semibold ${tone}`}>{value}</p>
            {hint && <p className="mt-0.5 text-xs text-slate-500">{hint}</p>}
        </div>
    );
}

function BreakdownCard({
    title,
    rows,
}: {
    title: string;
    rows: { label: string; value: string; tone?: string }[];
}) {
    return (
        <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="mb-3 font-semibold text-slate-900">{title}</h3>
            <dl className="space-y-2 text-sm">
                {rows.map((r) => (
                    <div key={r.label} className="flex items-center justify-between gap-4">
                        <dt className="text-slate-500">{r.label}</dt>
                        <dd className={`font-medium ${r.tone ?? "text-slate-900"}`}>{r.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

function CashFlowChart({ data }: { data: ChartPoint[] }) {
    const max = Math.max(1, ...data.map((d) => d.sales + d.purchases + d.salaries));
    const H = 180;

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-slate-900">Cash flow by date</h3>
                <div className="flex gap-4 text-xs text-slate-600">
                    <span className="flex items-center gap-1.5">
                        <i className="inline-block h-2.5 w-2.5 rounded-sm bg-emerald-500" /> Sales
                    </span>
                    <span className="flex items-center gap-1.5">
                        <i className="inline-block h-2.5 w-2.5 rounded-sm bg-indigo-500" /> Purchases
                    </span>
                    <span className="flex items-center gap-1.5">
                        <i className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-400" /> Salaries
                    </span>
                </div>
            </div>

            <div className="flex gap-3">
                <div className="flex flex-col justify-between pb-6 text-xs text-slate-400" style={{ height: H + 24 }}>
                    <span>₹{compact(max)}</span>
                    <span>₹{compact(max / 2)}</span>
                    <span>0</span>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex items-end gap-2" style={{ height: H + 24 }}>
                        {data.map((d) => {
                            const seg = (v: number) => (v / max) * H;
                            return (
                                <div
                                    key={d.label}
                                    className="flex w-9 flex-col items-center"
                                    title={`${fmtLabel(d.label)}\nSales: ${inr(d.sales)}\nPurchases: ${inr(
                                        d.purchases
                                    )}\nSalaries: ${inr(d.salaries)}`}
                                >
                                    <div className="flex flex-col-reverse" style={{ height: H }}>
                                        <div className="w-6 bg-emerald-500" style={{ height: seg(d.sales) }} />
                                        <div className="w-6 bg-indigo-500" style={{ height: seg(d.purchases) }} />
                                        <div
                                            className="w-6 rounded-t-sm bg-amber-400"
                                            style={{ height: seg(d.salaries) }}
                                        />
                                    </div>
                                    <span className="mt-1.5 h-4 text-[10px] text-slate-500">{fmtLabel(d.label)}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Page ---------- */

export default function PaymentsPage() {
    const [data, setData] = useState<PaymentsData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // filters
    const [typeTab, setTypeTab] = useState("all");
    const [status, setStatus] = useState("all");
    const [method, setMethod] = useState("all");
    const [gst, setGst] = useState("all");
    const [search, setSearch] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        // localStorage only exists in the browser, so read it inside useEffect
        const token = localStorage.getItem("aptro_token");
        const businessId = localStorage.getItem("aptro_uid");

        if (!businessId) {
            setIsLoading(false);
            setError("Business ID not found. Please log in again.");
            return;
        }

        const load = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Change this URL if your payments endpoint is different
                const res = await fetch(`/api/business/${businessId}/payments`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) throw new Error(`Failed to fetch payments: ${res.statusText}`);

                const json = await res.json();
                setData(json.data as PaymentsData);
            } catch (err: any) {
                setError(err.message || "Something went wrong while fetching payments.");
            } finally {
                setIsLoading(false);
            }
        };

        load();
    }, []);

    // reset to first page whenever a filter changes
    useEffect(() => {
        setPage(1);
    }, [typeTab, status, method, gst, search, from, to]);

    const payments = data?.payments ?? [];

    const statusOptions = useMemo(
        () => Array.from(new Set(payments.map((p) => p.status).filter(Boolean))),
        [payments]
    );
    const methodOptions = useMemo(
        () => Array.from(new Set(payments.map((p) => clean(p.method)).filter(Boolean))),
        [payments]
    );

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        const fromMs = from ? new Date(from).getTime() : null;
        const toMs = to ? new Date(to).getTime() + 24 * 60 * 60 * 1000 - 1 : null;

        return payments
            .filter((p) => {
                if (typeTab !== "all" && p.type !== typeTab) return false;
                if (status !== "all" && p.status !== status) return false;
                if (method !== "all" && clean(p.method) !== method) return false;
                if (gst === "gst" && !p.isGstEnabled) return false;
                if (gst === "non-gst" && p.isGstEnabled) return false;
                if (fromMs !== null && p.createdAt < fromMs) return false;
                if (toMs !== null && p.createdAt > toMs) return false;
                if (q) {
                    const hay = [p.customerName, p.orderId, p.invoiceNumber, p.referenceNo]
                        .join(" ")
                        .toLowerCase();
                    if (!hay.includes(q)) return false;
                }
                return true;
            })
            .sort((a, b) => b.createdAt - a.createdAt);
    }, [payments, typeTab, status, method, gst, search, from, to]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const typeCount = (t: string) =>
        t === "all" ? payments.length : payments.filter((p) => p.type === t).length;

    const hasFilters =
        typeTab !== "all" || status !== "all" || method !== "all" || gst !== "all" || search || from || to;

    const resetFilters = () => {
        setTypeTab("all");
        setStatus("all");
        setMethod("all");
        setGst("all");
        setSearch("");
        setFrom("");
        setTo("");
    };

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-slate-800" />
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="mx-auto max-w-4xl p-8">
                <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-800">
                    <p className="font-semibold">Couldn&apos;t load payments</p>
                    <p className="text-sm">{error ?? "No data returned."}</p>
                </div>
            </div>
        );
    }

    const { summary, chartData } = data;

    const inputCls =
        "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800";

    return (
        <div className="mx-auto max-w-7xl p-6 md:p-8">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-slate-900">Payments</h1>
                <p className="text-sm text-slate-500">{data.count} payment records</p>
            </div>

            {/* Overall */}
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <StatCard label="Total income" value={inr(summary.overall.totalIncome)} tone="text-emerald-600" />
                <StatCard label="Total expense" value={inr(summary.overall.totalExpense)} tone="text-red-600" />
                <StatCard
                    label="Net cash flow"
                    value={inr(summary.overall.netCashFlow)}
                    tone={summary.overall.netCashFlow >= 0 ? "text-slate-900" : "text-red-600"}
                    hint="Income minus expense"
                />
            </div>

            {/* Breakdown */}
            <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <BreakdownCard
                    title="Sales"
                    rows={[
                        { label: "Total receivable", value: inr(summary.sales.totalReceivable) },
                        { label: "Received", value: inr(summary.sales.totalReceived), tone: "text-emerald-600" },
                        {
                            label: "Pending",
                            value: inr(summary.sales.totalPending),
                            tone: summary.sales.totalPending > 0 ? "text-amber-600" : undefined,
                        },
                        { label: "GST receivable", value: inr(summary.sales.gstReceivable) },
                        { label: "Non-GST receivable", value: inr(summary.sales.nonGstReceivable) },
                        { label: "Total GST", value: inr(summary.sales.totalGst) },
                    ]}
                />
                <BreakdownCard
                    title="Purchases"
                    rows={[
                        { label: "Total payable", value: inr(summary.purchase.totalPayable) },
                        { label: "Paid", value: inr(summary.purchase.totalPaid), tone: "text-emerald-600" },
                        {
                            label: "Pending",
                            value: inr(summary.purchase.totalPending),
                            tone: summary.purchase.totalPending > 0 ? "text-amber-600" : undefined,
                        },
                        { label: "GST payable", value: inr(summary.purchase.gstPayable) },
                        { label: "Non-GST payable", value: inr(summary.purchase.nonGstPayable) },
                        { label: "Total GST", value: inr(summary.purchase.totalGst) },
                    ]}
                />
                <BreakdownCard
                    title="Salary"
                    rows={[{ label: "Total paid", value: inr(summary.salary.totalPaid), tone: "text-emerald-600" }]}
                />
            </div>

            {/* Chart */}
            {chartData?.length > 0 && (
                <div className="mb-8">
                    <CashFlowChart data={chartData} />
                </div>
            )}

            {/* Type tabs */}
            <div className="mb-3 flex flex-wrap gap-1 self-start rounded-lg border border-slate-200 bg-slate-50 p-1 sm:inline-flex">
                {["all", "Sales", "Purchase", "Salary"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTypeTab(t)}
                        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                            typeTab === t ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
                        }`}
                    >
                        {t === "all" ? "All" : t}
                        <span className="ml-1.5 text-xs text-slate-400">{typeCount(t)}</span>
                    </button>
                ))}
            </div>

            {/* Filters */}
            <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search name, order, invoice"
                    className={`${inputCls} col-span-2`}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)} className={inputCls}>
                    <option value="all">All status</option>
                    {statusOptions.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>
                <select value={method} onChange={(e) => setMethod(e.target.value)} className={inputCls}>
                    <option value="all">All methods</option>
                    {methodOptions.map((m) => (
                        <option key={m} value={m}>
                            {m}
                        </option>
                    ))}
                </select>
                <select value={gst} onChange={(e) => setGst(e.target.value)} className={inputCls}>
                    <option value="all">GST and non-GST</option>
                    <option value="gst">GST only</option>
                    <option value="non-gst">Non-GST only</option>
                </select>
                <input
                    type="date"
                    value={from}
                    max={to || undefined}
                    onChange={(e) => setFrom(e.target.value)}
                    aria-label="From date"
                    className={inputCls}
                />
                <input
                    type="date"
                    value={to}
                    min={from || undefined}
                    onChange={(e) => setTo(e.target.value)}
                    aria-label="To date"
                    className={inputCls}
                />
            </div>

            {hasFilters && (
                <button onClick={resetFilters} className="mb-3 text-sm font-medium text-slate-600 underline">
                    Clear all filters
                </button>
            )}

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600">
                        <tr>
                            <th className="px-4 py-3 font-medium">Date</th>
                            <th className="px-4 py-3 font-medium">Type</th>
                            <th className="px-4 py-3 font-medium">Party</th>
                            <th className="px-4 py-3 font-medium">Order / Invoice</th>
                            <th className="px-4 py-3 font-medium">Method</th>
                            <th className="px-4 py-3 text-right font-medium">Bill total</th>
                            <th className="px-4 py-3 text-right font-medium">Paid</th>
                            <th className="px-4 py-3 text-right font-medium">Pending</th>
                            <th className="px-4 py-3 text-right font-medium">GST</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {pageRows.length === 0 ? (
                            <tr>
                                <td colSpan={10} className="px-4 py-12 text-center text-slate-500">
                                    No payments match these filters.
                                </td>
                            </tr>
                        ) : (
                            pageRows.map((p) => {
                                const ref = clean(p.referenceNo);
                                const inv = clean(p.invoiceNumber);
                                return (
                                    <tr key={p.id} className="hover:bg-slate-50">
                                        <td className="whitespace-nowrap px-4 py-3 text-slate-600">
                                            {fmtDate(p.createdAt)}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                    typeStyles[p.type] ?? "bg-slate-100 text-slate-700"
                                                }`}
                                            >
                                                {p.type}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 font-medium text-slate-900">
                                            {clean(p.customerName) || "—"}
                                        </td>
                                        <td className="px-4 py-3 text-slate-600">
                                            <p>{clean(p.orderId) ? `#${p.orderId}` : "—"}</p>
                                            {(inv || ref) && (
                                                <p className="text-xs text-slate-500">{[inv, ref].filter(Boolean).join(" · ")}</p>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 capitalize text-slate-600">{clean(p.method) || "—"}</td>
                                        <td className="whitespace-nowrap px-4 py-3 text-right text-slate-900">
                                            {inr(p.billTotal)}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-3 text-right font-medium text-emerald-600">
                                            {p.paymentAmount > 0 ? inr(p.paymentAmount) : "—"}
                                        </td>
                                        <td
                                            className={`whitespace-nowrap px-4 py-3 text-right ${
                                                p.pendingAmount > 0 ? "font-medium text-amber-600" : "text-slate-400"
                                            }`}
                                        >
                                            {p.pendingAmount > 0 ? inr(p.pendingAmount) : "—"}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-3 text-right text-slate-600">
                                            {p.isGstEnabled ? inr(p.gstAmount) : "—"}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyle(
                                                    p.status
                                                )}`}
                                            >
                                                {p.status.toLowerCase()}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex flex-col items-center justify-between gap-3 text-sm text-slate-600 sm:flex-row">
                <p>
                    Showing {filtered.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1}–
                    {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
                </p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="rounded-md border border-slate-300 px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Previous
                    </button>
                    <span>
                        Page {page} of {totalPages}
                    </span>
                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="rounded-md border border-slate-300 px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}