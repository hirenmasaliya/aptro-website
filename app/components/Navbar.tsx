"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Smartphone, Globe, Shield, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "/features" },
        { name: "Solutions", href: "/solutions", hasDropdown: true },
        { name: "Pricing", href: "/pricing" },
        { name: "Resources", href: "/resources" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-100 transition-all duration-500 ${isScrolled
                ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Section */}

                <Link href="/" className="flex items-center gap-3 group">
                    {/* Logo Container */}
                    <div className="relative w-11 h-11 flex items-center justify-center transition-all duration-500 group-hover:scale-110">

                        {/* Ambient Glow (clean + controlled) */}
                        <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                        {/* Main Container */}
                        <div className="relative z-10 w-full h-full rounded-xl bg-[#0b0b0f] border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500 group-hover:border-blue-500/40 group-hover:shadow-blue-500/20">

                            {/* Logo */}
                            <div className="relative w-full h-full p-2 flex items-center justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="Aptro Logo"
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                                    priority
                                />
                            </div>

                            {/* Subtle Shine Sweep */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 pointer-events-none" />

                            {/* Soft Glass Overlay */}
                            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
                        </div>

                        {/* Reflection Shadow */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-blue-500/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-10" />
                    </div>

                    {/* Brand Name */}
                    <span className="font-semibold text-2xl tracking-tight text-white group-hover:text-blue-500 transition-all duration-300">
                        APTRO
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center bg-white/5 border border-white/5 p-1 rounded-full backdrop-blur-md">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group/nav">
                            <Link
                                href={link.href}
                                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all flex items-center gap-1.5 ${pathname === link.href
                                    ? "text-white bg-white/10 shadow-inner"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown size={12} className="group-hover/nav:rotate-180 transition-transform duration-300 opacity-50" />
                                )}
                            </Link>

                            {/* Pro Dropdown Menu */}
                            {link.hasDropdown && (
                                <div className="absolute top-[calc(100%+10px)] left-0 w-72 p-2 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl opacity-0 translate-y-4 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <DropdownItem icon={<Smartphone size={18} />} title="Mobile POS" desc="Take payments from anywhere." href="/solutions/pos" />
                                    <DropdownItem icon={<Globe size={18} />} title="Global E-commerce" desc="Sync orders across borders." href="/solutions/ecom" />
                                    <DropdownItem icon={<Shield size={18} />} title="Enterprise" desc="Advanced security & audit logs." href="/solutions/enterprise" />

                                    <div className="mt-2 p-3 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                                        <Link href="/solutions" className="text-[11px] font-bold text-blue-400 flex items-center justify-between group/link">
                                            View all solutions <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="https://aptrooms.web.app/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                        Log in
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                    <Link
                        href="/download"
                        className="relative px-7 py-3 bg-white text-black rounded-full font-bold text-sm overflow-hidden group/btn hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-linear-to-r from-blue-100 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-18 bg-black/95 backdrop-blur-xl z-90 p-6 flex flex-col md:hidden animate-in fade-in slide-in-from-top-5">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold p-4 hover:text-blue-500 transition-colors flex items-center justify-between"
                            >
                                {link.name} <ChevronDown className="-rotate-90 opacity-20" />
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto space-y-4">
                        <Link href="/login" className="block w-full p-4 rounded-2xl text-center font-bold border border-white/10">Log in</Link>
                        <Link href="/download" className="block w-full p-5 bg-blue-600 text-white rounded-2xl text-center font-bold shadow-lg shadow-blue-600/20">Download App</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

function DropdownItem({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
    return (
        <Link href={href} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group/item">
            <div className="mt-1 text-gray-500 group-hover/item:text-blue-500 transition-colors">
                {icon}
            </div>
            <div>
                <div className="text-sm font-bold text-white mb-0.5">{title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
            </div>
        </Link>
    );
}