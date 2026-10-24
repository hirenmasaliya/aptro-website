"use client";

import React, { useEffect, useMemo, useState } from "react";

// Change this if your customers endpoint is different
const buildCustomersUrl = (businessId: string) => `/api/business/${businessId}/customers`;

interface Customer {
    id: string;
    company?: string;
    name?: string;
    email?: string;
    phone?: string;
    customerType?: string;
    clientType?: string;
    bannerUrl?: string;
    createdAt?: string;
    address?: Record<string, any> | string | null;
    [key: string]: any;
}

interface GlobalMetrics {
    overduePaymentsCount: number;
    pendingPaymentsCount: number;
    totalPendingAmount: number;
}

const formatAddress = (address: Customer["address"]) => {
    if (!address) return "—";
    if (typeof address === "string") return address;
    const text = Object.values(address)
        .filter((v) => typeof v === "string" || typeof v === "number")
        .filter(Boolean)
        .join(", ");
    return text || "—";
};

const formatDate = (iso?: string) => {
    if (!iso) return "—";
    const d = new Date(iso);
    return isNaN(d.getTime())
        ? "—"
        : d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const formatINR = (n?: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(n ?? 0);

export default function CustomerPage() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [metrics, setMetrics] = useState<GlobalMetrics | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");

    useEffect(() => {
        // localStorage only exists in the browser, so read it inside useEffect
        const token = localStorage.getItem("aptro_token");
        const businessId = localStorage.getItem("aptro_uid");

        if (!businessId) {
            setIsLoading(false);
            setError("Business ID not found. Please log in again.");
            return;
        }

        const fetchCustomers = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch(buildCustomersUrl(businessId), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch customers: ${response.statusText}`);
                }

                const json = await response.json();
                console.log(json);

                // Works whether the API returns `customers` or `clients`
                const list: Customer[] = json?.data?.customers ?? json?.data?.clients ?? [];
                setCustomers(list);
                setMetrics(json?.data?.globalMetrics ?? null);
            } catch (err: any) {
                setError(err.message || "Something went wrong while fetching customers.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    const typeOptions = useMemo(() => {
        const set = new Set<string>();
        customers.forEach((c) => {
            if (c.customerType) set.add(c.customerType);
        });
        return Array.from(set);
    }, [customers]);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return customers.filter((c) => {
            const matchesType = typeFilter === "all" || c.customerType === typeFilter;
            const matchesSearch =
                !q ||
                [c.company, c.name, c.email, c.phone]
                    .filter(Boolean)
                    .some((v) => String(v).toLowerCase().includes(q));
            return matchesType && matchesSearch;
        });
    }, [customers, search, typeFilter]);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-slate-800" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="mx-auto max-w-4xl p-8">
                <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-800">
                    <p className="font-semibold">Couldn&apos;t load customers</p>
                    <p className="text-sm">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl p-6 md:p-8">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-1">
                <h1 className="text-2xl font-semibold text-slate-900">Customers</h1>
                <p className="text-sm text-slate-500">
                    {customers.length} {customers.length === 1 ? "customer" : "customers"} linked to your business
                </p>
            </div>

            {/* Metrics */}
            {metrics && (
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-slate-200 bg-white p-5">
                        <p className="text-sm text-slate-500">Total pending amount</p>
                        <p className="mt-1 text-2xl font-semibold text-slate-900">
                            {formatINR(metrics.totalPendingAmount)}
                        </p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-5">
                        <p className="text-sm text-slate-500">Pending payments</p>
                        <p className="mt-1 text-2xl font-semibold text-amber-600">
                            {metrics.pendingPaymentsCount}
                        </p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-5">
                        <p className="text-sm text-slate-500">Overdue payments</p>
                        <p
                            className={`mt-1 text-2xl font-semibold ${
                                metrics.overduePaymentsCount > 0 ? "text-red-600" : "text-slate-900"
                            }`}
                        >
                            {metrics.overduePaymentsCount}
                        </p>
                    </div>
                </div>
            )}

            {/* Toolbar */}
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by company, email or phone"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 sm:max-w-sm"
                />
                <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
                >
                    <option value="all">All customer types</option>
                    {typeOptions.map((t) => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600">
                        <tr>
                            <th className="px-4 py-3 font-medium">Customer</th>
                            <th className="px-4 py-3 font-medium">Type</th>
                            <th className="px-4 py-3 font-medium">Contact</th>
                            <th className="px-4 py-3 font-medium">Address</th>
                            <th className="px-4 py-3 font-medium">Added on</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-4 py-12 text-center text-slate-500">
                                    No matching customers. Try a different search or filter.
                                </td>
                            </tr>
                        ) : (
                            filtered.map((c) => {
                                const title = c.company || c.name || "Unnamed";
                                return (
                                    <tr key={c.id} className="hover:bg-slate-50">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                {c.bannerUrl ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        src={c.bannerUrl}
                                                        alt=""
                                                        className="h-10 w-10 rounded-md border border-slate-200 object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 font-semibold text-slate-600">
                                                        {title.charAt(0).toUpperCase()}
                                                    </div>
                                                )}
                                                <div className="min-w-0">
                                                    <p className="truncate font-medium text-slate-900">{title}</p>
                                                    {c.name && c.company && (
                                                        <p className="truncate text-xs text-slate-500">{c.name}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            {c.customerType ? (
                                                <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                                                    {c.customerType}
                                                </span>
                                            ) : (
                                                "—"
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-slate-600">
                                            <p>{c.email || "—"}</p>
                                            <p className="text-xs text-slate-500">{c.phone || ""}</p>
                                        </td>
                                        <td className="max-w-xs px-4 py-3 text-slate-600">
                                            <p className="line-clamp-2">{formatAddress(c.address)}</p>
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-3 text-slate-600">
                                            {formatDate(c.createdAt)}
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}