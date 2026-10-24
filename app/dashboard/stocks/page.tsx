"use client";

import React, { useEffect, useMemo, useState } from "react";

/* ---------- Types (match your API response) ---------- */

interface StockItem {
    id: string;
    productId: string;
    name: string;
    category?: string;
    supplier?: string;
    type?: string; // "Kit" | "Product"
    unit?: string;
    price: number;
    gst?: number;
    stock: number;
}

interface ChartPoint {
    date: string; // "2026-10-W1"
    displayDate: string; // "W1"
    salesQuantity: number;
    salesRevenue: number;
    purchaseQuantity: number;
    [key: string]: any; // any extra fields your API sends (e.g. purchase cost)
}

interface StockSummary {
    lowStockItemsCount: number;
    totalInventoryValue: number;
    totalItems: number;
    totalKits: number;
    totalProducts: number;
}

interface StockData {
    chartData: ChartPoint[];
    stockList: StockItem[];
    summary: StockSummary;
}

/* ---------- Helpers ---------- */

// Items with stock at or below this number are shown as "Low stock".
// Change it to match the rule your backend uses for lowStockItemsCount.
const LOW_STOCK_THRESHOLD = 10;
const PAGE_SIZE = 10;

type StockState = "out" | "low" | "in";

const stockState = (qty: number): StockState =>
    qty <= 0 ? "out" : qty <= LOW_STOCK_THRESHOLD ? "low" : "in";

const stateLabel: Record<StockState, string> = {
    in: "In stock",
    low: "Low stock",
    out: "Out of stock",
};

const stateStyle: Record<StockState, string> = {
    in: "bg-emerald-50 text-emerald-700",
    low: "bg-amber-50 text-amber-700",
    out: "bg-red-50 text-red-700",
};

const inr = (n?: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(n ?? 0);

const num = (n?: number) => new Intl.NumberFormat("en-IN").format(n ?? 0);

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

function MovementChart({ data }: { data: ChartPoint[] }) {
    const max = Math.max(1, ...data.flatMap((d) => [d.salesQuantity, d.purchaseQuantity]));
    const H = 160;
    const totalSold = data.reduce((t, d) => t + d.salesQuantity, 0);
    const totalBought = data.reduce((t, d) => t + d.purchaseQuantity, 0);
    const totalRevenue = data.reduce((t, d) => t + d.salesRevenue, 0);

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                    <h3 className="font-semibold text-slate-900">Stock movement by week</h3>
                    <p className="text-sm text-slate-500">
                        {num(totalSold)} sold · {num(totalBought)} purchased · {inr(totalRevenue)} sales revenue
                    </p>
                </div>
                <div className="flex gap-4 text-xs text-slate-600">
                    <span className="flex items-center gap-1.5">
                        <i className="inline-block h-2.5 w-2.5 rounded-sm bg-emerald-500" /> Sold
                    </span>
                    <span className="flex items-center gap-1.5">
                        <i className="inline-block h-2.5 w-2.5 rounded-sm bg-indigo-500" /> Purchased
                    </span>
                </div>
            </div>

            <div className="flex gap-3">
                <div className="flex flex-col justify-between pb-6 text-xs text-slate-400" style={{ height: H + 24 }}>
                    <span>{num(max)}</span>
                    <span>{num(Math.round(max / 2))}</span>
                    <span>0</span>
                </div>
                <div className="flex flex-1 items-end justify-around gap-2 overflow-x-auto" style={{ height: H + 24 }}>
                    {data.map((d) => (
                        <div
                            key={d.date}
                            className="flex min-w-[56px] flex-col items-center"
                            title={`${d.date}\nSold: ${num(d.salesQuantity)} (${inr(d.salesRevenue)})\nPurchased: ${num(
                                d.purchaseQuantity
                            )}`}
                        >
                            <div className="flex items-end gap-1" style={{ height: H }}>
                                <div
                                    className="w-5 rounded-t-sm bg-emerald-500"
                                    style={{ height: (d.salesQuantity / max) * H }}
                                />
                                <div
                                    className="w-5 rounded-t-sm bg-indigo-500"
                                    style={{ height: (d.purchaseQuantity / max) * H }}
                                />
                            </div>
                            <span className="mt-1.5 h-4 text-xs text-slate-500">{d.displayDate}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ---------- Page ---------- */

export default function StockPage() {
    const [data, setData] = useState<StockData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [category, setCategory] = useState("all");
    const [stockFilter, setStockFilter] = useState("all");
    const [sortBy, setSortBy] = useState("name");
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

                const res = await fetch(`/api/business/${businessId}/stock`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) throw new Error(`Failed to fetch stock: ${res.statusText}`);

                const json = await res.json();
                setData(json.data as StockData);
            } catch (err: any) {
                setError(err.message || "Something went wrong while fetching stock.");
            } finally {
                setIsLoading(false);
            }
        };

        load();
    }, []);

    useEffect(() => {
        setPage(1);
    }, [search, typeFilter, category, stockFilter, sortBy]);

    const items = data?.stockList ?? [];

    const typeOptions = useMemo(
        () => Array.from(new Set(items.map((i) => i.type).filter(Boolean) as string[])),
        [items]
    );
    const categoryOptions = useMemo(
        () => Array.from(new Set(items.map((i) => i.category).filter(Boolean) as string[])),
        [items]
    );

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        const list = items.filter((i) => {
            if (typeFilter !== "all" && i.type !== typeFilter) return false;
            if (category !== "all" && i.category !== category) return false;
            if (stockFilter !== "all" && stockState(i.stock) !== stockFilter) return false;
            if (q && ![i.name, i.category, i.supplier].join(" ").toLowerCase().includes(q)) return false;
            return true;
        });

        return list.sort((a, b) => {
            switch (sortBy) {
                case "stock-asc":
                    return a.stock - b.stock;
                case "stock-desc":
                    return b.stock - a.stock;
                case "value-desc":
                    return b.price * b.stock - a.price * a.stock;
                default:
                    return a.name.localeCompare(b.name);
            }
        });
    }, [items, search, typeFilter, category, stockFilter, sortBy]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const hasFilters = search || typeFilter !== "all" || category !== "all" || stockFilter !== "all";
    const resetFilters = () => {
        setSearch("");
        setTypeFilter("all");
        setCategory("all");
        setStockFilter("all");
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
                    <p className="font-semibold">Couldn&apos;t load stock</p>
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
                <h1 className="text-2xl font-semibold text-slate-900">Stock</h1>
                <p className="text-sm text-slate-500">
                    {summary.totalItems} {summary.totalItems === 1 ? "item" : "items"} in your inventory
                </p>
            </div>

            {/* Summary */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Total inventory value" value={inr(summary.totalInventoryValue)} />
                <StatCard
                    label="Total items"
                    value={num(summary.totalItems)}
                    hint={`${summary.totalProducts} products · ${summary.totalKits} kits`}
                />
                <StatCard label="Products" value={num(summary.totalProducts)} />
                <StatCard
                    label="Low stock items"
                    value={num(summary.lowStockItemsCount)}
                    tone={summary.lowStockItemsCount > 0 ? "text-amber-600" : "text-slate-900"}
                    hint={summary.lowStockItemsCount === 0 ? "Everything is well stocked" : "Needs restocking"}
                />
            </div>

            {/* Chart */}
            {chartData?.length > 0 && (
                <div className="mb-8">
                    <MovementChart data={chartData} />
                </div>
            )}

            {/* Filters */}
            <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search name, category, supplier"
                    className={`${inputCls} col-span-2`}
                />
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={inputCls}>
                    <option value="all">All types</option>
                    {typeOptions.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputCls}>
                    <option value="all">All categories</option>
                    {categoryOptions.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
                <select value={stockFilter} onChange={(e) => setStockFilter(e.target.value)} className={inputCls}>
                    <option value="all">All stock levels</option>
                    <option value="in">In stock</option>
                    <option value="low">Low stock</option>
                    <option value="out">Out of stock</option>
                </select>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={inputCls}>
                    <option value="name">Sort by name</option>
                    <option value="stock-asc">Stock: low to high</option>
                    <option value="stock-desc">Stock: high to low</option>
                    <option value="value-desc">Value: high to low</option>
                </select>
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
                            <th className="px-4 py-3 font-medium">Item</th>
                            <th className="px-4 py-3 font-medium">Type</th>
                            <th className="px-4 py-3 font-medium">Category</th>
                            <th className="px-4 py-3 font-medium">Supplier</th>
                            <th className="px-4 py-3 text-right font-medium">Price</th>
                            <th className="px-4 py-3 text-right font-medium">GST</th>
                            <th className="px-4 py-3 text-right font-medium">In stock</th>
                            <th className="px-4 py-3 text-right font-medium">Stock value</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {pageRows.length === 0 ? (
                            <tr>
                                <td colSpan={9} className="px-4 py-12 text-center text-slate-500">
                                    No items match these filters.
                                </td>
                            </tr>
                        ) : (
                            pageRows.map((i) => {
                                const state = stockState(i.stock);
                                return (
                                    <tr key={i.id} className="hover:bg-slate-50">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-100 font-semibold text-slate-600">
                                                    {i.name.charAt(0).toUpperCase()}
                                                </div>
                                                <p className="font-medium text-slate-900">{i.name}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            {i.type ? (
                                                <span
                                                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                        i.type === "Kit"
                                                            ? "bg-indigo-50 text-indigo-700"
                                                            : "bg-slate-100 text-slate-700"
                                                    }`}
                                                >
                                                    {i.type}
                                                </span>
                                            ) : (
                                                "—"
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-slate-600">{i.category || "—"}</td>
                                        <td className="px-4 py-3 text-slate-600">{i.supplier || "—"}</td>
                                        <td className="whitespace-nowrap px-4 py-3 text-right text-slate-900">
                                            {inr(i.price)}
                                        </td>
                                        <td className="px-4 py-3 text-right text-slate-600">
                                            {i.gst != null ? `${i.gst}%` : "—"}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-3 text-right font-medium text-slate-900">
                                            {num(i.stock)}
                                            {i.unit && <span className="ml-1 text-xs font-normal text-slate-500">{i.unit}</span>}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-3 text-right text-slate-900">
                                            {inr(i.price * i.stock)}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ${stateStyle[state]}`}
                                            >
                                                {stateLabel[state]}
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