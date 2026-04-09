"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Smartphone, Globe, Shield, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
            className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-md border-b border-zinc-100 py-3 shadow-sm"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                
                {/* 1. PROFESSIONAL LOGO SECTION */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-black text-2xl tracking-tighter text-zinc-950">
                        APTRO<span className="text-blue-600">.</span>
                    </span>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 text-zinc-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        Business OS
                    </span>
                </Link>

                {/* 2. DESKTOP NAVIGATION (Pill Style) */}
                <div className="hidden md:flex items-center bg-zinc-100/50 border border-zinc-200/50 p-1 rounded-full backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group/nav">
                            <Link
                                href={link.href}
                                className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 ${pathname === link.href
                                    ? "text-zinc-950 bg-white shadow-sm"
                                    : "text-zinc-500 hover:text-zinc-950"
                                    }`}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown size={12} className="group-hover/nav:rotate-180 transition-transform duration-300 opacity-40" />
                                )}
                            </Link>

                            {/* Refined White Dropdown Menu */}
                            {link.hasDropdown && (
                                <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-72 p-3 bg-white border border-zinc-100 rounded-[2rem] opacity-0 translate-y-4 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 shadow-2xl shadow-zinc-200">
                                    <DropdownItem icon={<Smartphone size={18} />} title="Mobile POS" desc="Take payments from anywhere." href="/solutions/pos" />
                                    <DropdownItem icon={<Globe size={18} />} title="Global E-com" desc="Sync orders across borders." href="/solutions/ecom" />
                                    <DropdownItem icon={<Shield size={18} />} title="Enterprise" desc="Advanced security layers." href="/solutions/enterprise" />

                                    <div className="mt-2 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                                        <Link href="/solutions" className="text-[10px] font-black uppercase tracking-widest text-blue-600 flex items-center justify-between group/link">
                                            All solutions <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 3. RIGHT ACTIONS */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="https://aptrooms.web.app/login"
                        target="_blank"
                        className="text-[11px] font-black uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors flex items-center gap-1 group"
                    >
                        Log in
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                    <Link
                        href="/download"
                        className="bg-zinc-950 text-white px-8 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-zinc-200 active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-zinc-950 p-2 hover:bg-zinc-100 rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* 4. MOBILE MENU OVERLAY (Full Screen White) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-0 left-0 w-full bg-white z-[90] p-8 flex flex-col md:hidden"
                    >
                        <div className="mt-20 flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-5xl font-black tracking-tighter text-zinc-950 flex items-center justify-between"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-auto mb-10 space-y-4">
                            <Link href="/login" className="block w-full p-5 rounded-2xl text-center font-bold text-zinc-400 border border-zinc-100">Log in</Link>
                            <Link href="/download" className="block w-full p-6 bg-zinc-950 text-white rounded-[2rem] text-center font-black uppercase tracking-widest text-xs">Download App</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function DropdownItem({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
    return (
        <Link href={href} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-all group/item">
            <div className="mt-1 text-zinc-400 group-hover/item:text-blue-600 transition-colors">
                {icon}
            </div>
            <div>
                <div className="text-[13px] font-bold text-zinc-950 mb-0.5">{title}</div>
                <div className="text-[11px] text-zinc-500 leading-relaxed font-medium">{desc}</div>
            </div>
        </Link>
    );
}