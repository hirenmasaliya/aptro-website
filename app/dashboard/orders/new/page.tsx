"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
    ArrowLeft,
    Save,
    Plus,
    Trash2,
    Package,
    User,
    Calendar,
    IndianRupee,
    Loader2,
    FileText,
    Building2
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

// --- TYPES ---
interface DropdownEntity {
    _id?: string;
    id?: string;
    name: string;
}

interface ProductEntity extends DropdownEntity {
    price?: number;
    gst?: number;
}

// --- UTILS ---
const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2,
    }).format(amount || 0);
};

export default function CreateOrderPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingData, setIsFetchingData] = useState(true);
    const [error, setError] = useState("");

    // --- API DATA STATES ---
    const [customers, setCustomers] = useState<DropdownEntity[]>([]);
    const [vendors, setVendors] = useState<DropdownEntity[]>([]);
    const [availableProducts, setAvailableProducts] = useState<ProductEntity[]>([]);

    // --- FORM STATE ---
    const [generalInfo, setGeneralInfo] = useState({
        orderId: `ORD-${Math.floor(Math.random() * 10000)}`, // Only used for Purchase
        orderType: "Sale",
        partyId: "", // Store the selected ID
        partyName: "", // Store the selected Name
        date: new Date().toISOString().split('T')[0],
        status: "pending",
        paymentStatus: "unpaid",
    });

    const [products, setProducts] = useState([
        { id: 1, productId: "", name: "", price: 0, qty: 1, gst: 0, total: 0 }
    ]);

    const [additionalCharges, setAdditionalCharges] = useState({
        shipping: 0,
        discount: 0,
    });

    // --- FETCH DATA FOR DROPDOWNS ---
    // --- FETCH DATA FOR DROPDOWNS ---
    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const uid = localStorage.getItem("aptro_uid");
                const token = localStorage.getItem("aptro_token");
                if (!uid || !token) return;

                const headers = { "Authorization": `Bearer ${token}` };

                // Fetch Customers, Vendors, and Products in parallel
                const [custRes, vendRes, prodRes] = await Promise.all([
                    fetch(`/api/business/${uid}/customers`, { headers }).catch(() => null),
                    fetch(`/api/business/${uid}/clients`, { headers }).catch(() => null),
                    fetch(`/api/business/${uid}/inventory`, { headers }).catch(() => null)
                ]);

                // 1. Parse Customers (from j.customers)
                if (custRes?.ok) {
                    const j = await custRes.json();
                    const customersArr = Array.isArray(j?.data.customers) ? j.data.customers : [];
                    setCustomers(customersArr.map((c: any) => ({
                        ...c,
                        name: c.company || c.name || 'Unknown Customer'
                    })));
                }

                // 2. Parse Vendors (from j.clients)
                if (vendRes?.ok) {
                    const j = await vendRes.json();
                    const vendorsArr = Array.isArray(j?.data.clients) ? j.data.clients : [];
                    setVendors(vendorsArr.map((v: any) => ({
                        ...v,
                        name: v.company || v.name || 'Unknown Vendor'
                    })));
                }

                if (prodRes?.ok) {
                    const j = await prodRes.json();

                    console.log(j);

                    let productsArr: any[] = [];

                    if (j?.data?.products && typeof j.data.products === 'object' && !Array.isArray(j.data.products)) {
                        productsArr = Object.values(j.data.products);
                    } else if (Array.isArray(j?.data?.products)) {
                        productsArr = j.data.products;
                    }

                    console.log(productsArr);

                    setAvailableProducts(productsArr.map((p: any) => ({
                        ...p,
                        id: p.productId || p.kitId || p.id,
                        price: p.sellingPrice || p.price || p.kitDetails.selling_price ||0,
                        name: p.name || p.kitDetails?.kitName ||'Unknown Product'
                    })));
                }
            } catch (err) {
                console.error("Failed to load dropdown data", err);
            } finally {
                setIsFetchingData(false);
            }
        };
        fetchDropdownData();
    }, []);

    // Reset party selection when Order Type changes
    useEffect(() => {
        setGeneralInfo(prev => ({ ...prev, partyId: "", partyName: "" }));
    }, [generalInfo.orderType]);

    // --- DYNAMIC CALCULATIONS ---
    const summary = useMemo(() => {
        let billTotal = 0;
        let gstAmount = 0;

        products.forEach((p) => {
            const baseTotal = p.price * p.qty;
            const productGst = baseTotal * (p.gst / 100);
            billTotal += baseTotal;
            gstAmount += productGst;
        });

        const finalTotal = (billTotal + gstAmount + additionalCharges.shipping) - additionalCharges.discount;

        return { billTotal, gstAmount, finalTotal };
    }, [products, additionalCharges]);

    // --- HANDLERS ---
    const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
    };

    const handlePartyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        const list = generalInfo.orderType === "Sale" ? customers : vendors;
        const selectedEntity = list.find(item => (item._id || item.id) === selectedId);

        setGeneralInfo({
            ...generalInfo,
            partyId: selectedId,
            partyName: selectedEntity?.name || ""
        });
    };

    const handleChargeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdditionalCharges({ ...additionalCharges, [e.target.name]: parseFloat(e.target.value) || 0 });
    };

    // When a product is selected from dropdown, auto-fill price and GST
    const handleProductSelect = (rowId: number, selectedProductId: string) => {
        const selectedProd = availableProducts.find(p => (p._id || p.id) === selectedProductId);

        setProducts(products.map(p => {
            if (p.id === rowId) {
                if (selectedProd) {
                    const price = selectedProd.price || 0;
                    const gst = selectedProd.gst || 0;
                    return {
                        ...p,
                        productId: selectedProductId,
                        name: selectedProd.name,
                        price,
                        gst,
                        total: price * p.qty
                    };
                }
                // If unselected, reset row
                return { ...p, productId: "", name: "", price: 0, gst: 0, total: 0 };
            }
            return p;
        }));
    };

    // Handle manual qty/price adjustments
    const handleProductDetailChange = (id: number, field: string, value: string | number) => {
        setProducts(products.map(p => {
            if (p.id === id) {
                const updated = { ...p, [field]: value };
                updated.total = Number(updated.price) * Number(updated.qty);
                return updated;
            }
            return p;
        }));
    };

    const addProductLine = () => {
        setProducts([...products, { id: Date.now(), productId: "", name: "", price: 0, qty: 1, gst: 0, total: 0 }]);
    };

    const removeProductLine = (id: number) => {
        if (products.length > 1) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!generalInfo.partyId) {
            setError("Please select a Party (Customer/Vendor).");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const uid = localStorage.getItem("aptro_uid");
            const token = localStorage.getItem("aptro_token");

            if (!uid || !token) throw new Error("Authentication missing. Please log in.");

            const payload = {
                // If Sale, orderId is not sent/needed. If Purchase, send the entered ID.
                orderId: generalInfo.orderType === 'Purchase' ? generalInfo.orderId : undefined,
                orderType: generalInfo.orderType,
                customerName: generalInfo.orderType === 'Sale' ? generalInfo.partyName : undefined,
                vendor: generalInfo.orderType === 'Purchase' ? { vendorId: generalInfo.partyId, name: generalInfo.partyName } : undefined,
                date: generalInfo.date,
                status: generalInfo.status,
                paymentStatus: generalInfo.paymentStatus,
                products: products
                    .filter(p => p.productId) // Only submit rows where a product was actually selected
                    .map(p => ({
                        productId: p.productId,
                        name: p.name,
                        price: Number(p.price),
                        quantity: Number(p.qty),
                        gst: Number(p.gst),
                        total: Number(p.total)
                    })),
                summary: {
                    billTotal: summary.billTotal,
                    gstAmount: summary.gstAmount,
                    shipping: additionalCharges.shipping,
                    discount: additionalCharges.discount,
                    finalTotal: summary.finalTotal
                }
            };

            const res = await fetch(`/api/business/${uid}/orders`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error("Failed to create order");

            router.push("/dashboard/orders");
        } catch (err: any) {
            setError(err.message || "An error occurred while creating the order.");
            setIsLoading(false);
        }
    };

    const activeParties = generalInfo.orderType === "Sale" ? customers : vendors;

    return (
        <div className={`fade-in pb-10 ${jakarta.className} max-w-6xl mx-auto`}>

            {/* --- HEADER --- */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard/orders"
                        className="w-10 h-10 bg-white border border-[#DADCE0] rounded-xl flex items-center justify-center text-[#5F6368] hover:bg-[#F1F3F4] transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h2 className="text-[22px] font-semibold text-[#1F1F1F] tracking-tight">Create Order</h2>
                        <p className="text-[13px] text-[#5F6368]">Fill in the details to generate a new order.</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => router.push("/dashboard/orders")}
                        className="h-10 px-5 bg-white border border-[#DADCE0] rounded-xl text-[13.5px] font-medium text-[#1F1F1F] hover:bg-[#F1F3F4] transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading || isFetchingData}
                        className="inline-flex items-center gap-2 h-10 px-5 bg-[#1A73E8] border border-transparent rounded-xl text-[13.5px] font-medium text-white hover:bg-[#1557B0] disabled:opacity-60 transition-colors"
                    >
                        {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                        Save Order
                    </button>
                </div>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-[13.5px] font-medium">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* ================= LEFT COLUMN ================= */}
                <div className="lg:col-span-2 space-y-6">

                    {/* General Information */}
                    <div className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-sm">
                        <h3 className="text-[15px] font-semibold text-[#1F1F1F] mb-5 flex items-center gap-2">
                            <FileText size={18} className="text-[#1A73E8]" />
                            General Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div>
                                <label className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5">Order Type</label>
                                <select
                                    name="orderType"
                                    value={generalInfo.orderType}
                                    onChange={handleGeneralChange}
                                    className="w-full px-4 py-2.5 bg-white border border-[#DADCE0] rounded-xl text-[13.5px] text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30"
                                >
                                    <option value="Sale">Sale (Customer)</option>
                                    <option value="Purchase">Purchase (Vendor)</option>
                                </select>
                            </div>

                            {/* Conditional Party Dropdown */}
                            <div>
                                <label className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5">
                                    {generalInfo.orderType === "Sale" ? "Select Customer" : "Select Vendor"}
                                </label>
                                <div className="relative">
                                    {generalInfo.orderType === "Sale" ? (
                                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5F6368]" />
                                    ) : (
                                        <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5F6368]" />
                                    )}
                                    <select
                                        name="partyId"
                                        value={generalInfo.partyId}
                                        onChange={handlePartyChange}
                                        disabled={isFetchingData}
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DADCE0] rounded-xl text-[13.5px] text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 appearance-none"
                                    >
                                        <option value="" disabled>
                                            {isFetchingData ? "Loading..." : `Choose a ${generalInfo.orderType === "Sale" ? "Customer" : "Vendor"}...`}
                                        </option>
                                        {Array.isArray(activeParties) && activeParties.map(entity => (
                                            <option key={entity._id || entity.id} value={entity._id || entity.id}>
                                                {entity.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5">Order Date</label>
                                <div className="relative">
                                    <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5F6368]" />
                                    <input
                                        type="date"
                                        name="date"
                                        value={generalInfo.date}
                                        onChange={handleGeneralChange}
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DADCE0] rounded-xl text-[13.5px] text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30"
                                    />
                                </div>
                            </div>

                            {/* Conditional Order ID for Purchase ONLY */}
                            {generalInfo.orderType === "Purchase" && (
                                <div>
                                    <label className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5">Vendor Order ID (Bill No)</label>
                                    <input
                                        type="text"
                                        name="orderId"
                                        value={generalInfo.orderId}
                                        onChange={handleGeneralChange}
                                        placeholder="Enter Invoice/Bill number"
                                        className="w-full px-4 py-2.5 bg-white border border-[#DADCE0] rounded-xl text-[13.5px] text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30"
                                    />
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Product List */}
                    <div className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-sm overflow-hidden">
                        <h3 className="text-[15px] font-semibold text-[#1F1F1F] mb-5 flex items-center gap-2">
                            <Package size={18} className="text-[#1A73E8]" />
                            Order Items
                        </h3>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[700px] text-left border-collapse mb-4">
                                <thead>
                                    <tr className="border-b border-[#DADCE0]">
                                        <th className="pb-3 px-2 text-[12px] font-medium text-[#5F6368] w-[40%]">Product</th>
                                        <th className="pb-3 px-2 text-[12px] font-medium text-[#5F6368]">Price</th>
                                        <th className="pb-3 px-2 text-[12px] font-medium text-[#5F6368]">Qty</th>
                                        <th className="pb-3 px-2 text-[12px] font-medium text-[#5F6368]">GST (%)</th>
                                        <th className="pb-3 px-2 text-[12px] font-medium text-[#5F6368]">Total</th>
                                        <th className="pb-3 px-2 text-[12px] font-medium text-[#5F6368]"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#F1F3F4]">
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="py-3 px-2">
                                                {/* Dynamic Product Dropdown */}
                                                <select
                                                    value={product.productId}
                                                    onChange={(e) => handleProductSelect(product.id, e.target.value)}
                                                    disabled={isFetchingData}
                                                    className="w-full px-3 py-2 bg-white border border-[#DADCE0] rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
                                                >
                                                    <option value="">{isFetchingData ? "Loading..." : "Select product..."}</option>
                                                    {Array.isArray(availableProducts) && availableProducts.map(ap => (
                                                        <option key={ap._id || ap.id} value={ap._id || ap.id}>{ap.name}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="py-3 px-2">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={product.price || ''}
                                                    onChange={(e) => handleProductDetailChange(product.id, 'price', e.target.value)}
                                                    className="w-full px-3 py-2 bg-white border border-[#DADCE0] rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
                                                />
                                            </td>
                                            <td className="py-3 px-2">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={product.qty || ''}
                                                    onChange={(e) => handleProductDetailChange(product.id, 'qty', e.target.value)}
                                                    className="w-full px-3 py-2 bg-white border border-[#DADCE0] rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
                                                />
                                            </td>
                                            <td className="py-3 px-2">
                                                <select
                                                    value={product.gst}
                                                    onChange={(e) => handleProductDetailChange(product.id, 'gst', e.target.value)}
                                                    className="w-full px-3 py-2 bg-white border border-[#DADCE0] rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
                                                >
                                                    <option value="0">0%</option>
                                                    <option value="5">5%</option>
                                                    <option value="12">12%</option>
                                                    <option value="18">18%</option>
                                                    <option value="28">28%</option>
                                                </select>
                                            </td>
                                            <td className="py-3 px-2">
                                                <span className="text-[13.5px] font-medium text-[#1F1F1F]">
                                                    {formatCurrency(product.total)}
                                                </span>
                                            </td>
                                            <td className="py-3 px-2 text-right">
                                                <button
                                                    onClick={() => removeProductLine(product.id)}
                                                    className="p-1.5 text-[#5F6368] hover:bg-[#FCE8E6] hover:text-[#D93025] rounded-md transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <button
                            onClick={addProductLine}
                            className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#E8F0FE] text-[#1A73E8] text-[13px] font-medium rounded-lg hover:bg-[#D3E3FD] transition-colors focus:outline-none"
                        >
                            <Plus size={14} /> Add Line Item
                        </button>
                    </div>

                </div>

                {/* ================= RIGHT COLUMN ================= */}
                <div className="space-y-6">

                    {/* Status Settings */}
                    <div className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-sm">
                        <h3 className="text-[15px] font-semibold text-[#1F1F1F] mb-4">Tracking & Status</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5">Fulfillment Status</label>
                                <select
                                    name="status"
                                    value={generalInfo.status}
                                    onChange={handleGeneralChange}
                                    className="w-full px-4 py-2.5 bg-white border border-[#DADCE0] rounded-xl text-[13.5px] text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5">Payment Status</label>
                                <select
                                    name="paymentStatus"
                                    value={generalInfo.paymentStatus}
                                    onChange={handleGeneralChange}
                                    className="w-full px-4 py-2.5 bg-white border border-[#DADCE0] rounded-xl text-[13.5px] text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30"
                                >
                                    <option value="unpaid">Unpaid</option>
                                    <option value="paid">Paid</option>
                                    <option value="refunded">Refunded</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary Calculation */}
                    <div className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-sm">
                        <h3 className="text-[15px] font-semibold text-[#1F1F1F] mb-5 flex items-center gap-2">
                            <IndianRupee size={18} className="text-[#1A73E8]" />
                            Order Summary
                        </h3>

                        <div className="space-y-3 border-b border-[#DADCE0] pb-4 mb-4">
                            <div className="flex justify-between items-center text-[13.5px]">
                                <span className="text-[#5F6368]">Subtotal</span>
                                <span className="font-medium text-[#1F1F1F]">{formatCurrency(summary.billTotal)}</span>
                            </div>

                            <div className="flex justify-between items-center text-[13.5px]">
                                <span className="text-[#5F6368]">GST (Tax)</span>
                                <span className="font-medium text-[#1F1F1F]">{formatCurrency(summary.gstAmount)}</span>
                            </div>

                            <div className="flex justify-between items-center text-[13.5px]">
                                <span className="text-[#5F6368]">Shipping Charges</span>
                                <input
                                    type="number"
                                    name="shipping"
                                    value={additionalCharges.shipping || ''}
                                    onChange={handleChargeChange}
                                    className="w-[100px] px-2 py-1 text-right bg-white border border-[#DADCE0] rounded-md text-[13px] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
                                    placeholder="0.00"
                                />
                            </div>

                            <div className="flex justify-between items-center text-[13.5px]">
                                <span className="text-[#5F6368]">Discount</span>
                                <input
                                    type="number"
                                    name="discount"
                                    value={additionalCharges.discount || ''}
                                    onChange={handleChargeChange}
                                    className="w-[100px] px-2 py-1 text-right bg-white border border-[#DADCE0] rounded-md text-[13px] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-end">
                            <span className="text-[14px] font-semibold text-[#1F1F1F]">Final Total</span>
                            <span className="text-[22px] font-bold text-[#1A73E8] tracking-tight">
                                {formatCurrency(summary.finalTotal)}
                            </span>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={isLoading || products.length === 0 || !products[0].productId || !generalInfo.partyId}
                            className="w-full mt-6 h-11 bg-[#1A73E8] text-white text-[14px] font-medium rounded-xl hover:bg-[#1557B0] disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:ring-offset-2 flex items-center justify-center gap-2"
                        >
                            {isLoading ? <Loader2 size={18} className="animate-spin" /> : "Complete Order"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}