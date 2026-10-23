"use client";
import { useEffect, useState } from "react";

// 1. Product Interface
interface Product {
    id: string | number;
    image?: string;
    title: string;
    price: number | string;
}

export default function ProductPage() {
    // 2. State management
    const [isMounted, setIsMounted] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // 3. Hydration Fix
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // 4. Fetch logic
    const loadProducts = async () => {
    try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("aptro_token");
        const uid = localStorage.getItem("aptro_uid");

        if (!token || !uid) {
            throw new Error("Authentication missing. Please log in again.");
        }

        const res = await fetch(`/api/business/${uid}/inventory`, {
            method: "GET",
            headers: { 
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}` 
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch products (Status: ${res.status})`);
        }

        const data = await res.json();

        const products = data.data.products;
        
        const normalizedArray = Object.keys(products).map((key) => {
            const item = products[key];
            
            // Check if this item is a Kit
            if (item.type === "Kit" && item.kitDetails) {
                return {
                    id: key, // Use the object key as the ID
                    title: item.kitDetails.kitName,
                    price: Number(item.kitDetails.selling_price),
                    stock: item.stock,
                    type: "Kit"
                };
            }
            
            // Otherwise, treat it as a Standard Product
            return {
                id: key, // Use the object key as the ID
                title: item.name,
                price: item.sellingPrice,
                stock: item.stock,
                type: "Product"
            };
        });

        // 2. Set the newly formatted array into state
        setProducts(normalizedArray);

    } catch (err: any) {
        console.error("Fetch Error:", err);
        setError(err.message || "An unexpected error occurred.");
    } finally {
        setLoading(false);
    }
};

    useEffect(() => {
        if (isMounted) {
            loadProducts();
        }
    }, [isMounted]);

    if (!isMounted) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
                <div style={{ fontSize: '18px', color: '#555' }}>Initializing...</div>
            </div>
        );
    }

    if (loading) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
                <div style={{ fontSize: '18px', color: '#555' }}>Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
                <div style={{ padding: '20px', backgroundColor: '#fee2e2', border: '1px solid #f87171', borderRadius: '8px' }}>
                    <h3 style={{ color: '#b91c1c', margin: '0 0 10px 0' }}>Something went wrong</h3>
                    <p style={{ color: '#dc2626', margin: '0 0 15px 0' }}>{error}</p>
                    <button 
                        onClick={loadProducts}
                        style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    // 5. Admin Table UI
    return (
        <div style={{ padding: '30px', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <div>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#111827' }}>
                        Products
                    </h1>
                    <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
                        Manage your store's product catalog.
                    </p>
                </div>
                
                <button style={{
                    backgroundColor: '#000', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '14px'
                }}>
                    + Add Product
                </button>
            </div>

            <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    
                    <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                        <tr>
                            <th style={{ padding: '12px 20px', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Image</th>
                            <th style={{ padding: '12px 20px', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product Name</th>
                            <th style={{ padding: '12px 20px', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price</th>
                            <th style={{ padding: '12px 20px', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {/* SAFEGUARD: Also verify that products is an array before checking length or mapping */}
                        {!Array.isArray(products) || products.length === 0 ? (
                            <tr>
                                <td colSpan={4} style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
                                    No products found.
                                </td>
                            </tr>
                        ) : (
                            products.map((product) => (
                                <tr key={product.id} style={{ borderBottom: '1px solid #e5e7eb', transition: 'background-color 0.15s' }}>
                                    <td style={{ padding: '12px 20px', width: '80px' }}>
                                        <div style={{ width: '50px', height: '50px', backgroundColor: '#f3f4f6', borderRadius: '6px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={product.image || 'https://via.placeholder.com/50'}
                                                alt={product.title} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </td>
                                    <td style={{ padding: '12px 20px' }}>
                                        <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>{product.title}</div>
                                        <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>ID: {product.id}</div>
                                    </td>
                                    <td style={{ padding: '12px 20px' }}>
                                        <span style={{ display: 'inline-block', padding: '4px 8px', backgroundColor: '#ecfdf5', color: '#059669', borderRadius: '9999px', fontSize: '13px', fontWeight: '600' }}>
                                            ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                                        </span>
                                    </td>
                                    <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                                        <button style={{ background: 'none', border: 'none', color: '#4f46e5', cursor: 'pointer', fontSize: '14px', fontWeight: '500', marginRight: '10px' }}>Edit</button>
                                        <button style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}