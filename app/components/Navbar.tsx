"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

// Base font for UI
const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
});

// Premium smooth easing for organic animations
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Partner with us", href: "/join" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Dynamic scroll threshold for floating pill effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll lock for mobile menu
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };

        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleEscape);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-out flex justify-center ${
                isScrolled ? "pt-4 px-4 sm:px-6" : "pt-6 px-6 lg:px-8"
            } ${jakarta.className}`}
        >
            <nav
                className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isScrolled
                        ? "w-full max-w-5xl bg-white/70 backdrop-blur-xl rounded-full py-2.5 px-4 sm:px-6 border border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                        : "w-full max-w-7xl bg-transparent py-2 px-2"
                }`}
            >
                {/* --- LOGO & BRAND NAME --- */}
                <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 group relative z-[120] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl px-1"
                    aria-label="Go to Aptro homepage"
                >
                    <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-105 group-active:scale-95">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-zinc-500/0 group-hover:from-blue-100 group-hover:to-zinc-100 blur-xl rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
                        <Image
                            src="/aptro_logo.png"
                            alt="Aptro Logo"
                            width={44}
                            height={44}
                            className="object-contain w-full h-full relative z-10 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                            priority
                        />
                    </div>
                    
                    {/* Website Font Text */}
                    <span 
                        className="text-xl font-bold tracking-tight text-zinc-900 transition-all duration-300 group-hover:text-blue-600"
                    >
                        Aptro
                    </span>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                                    isActive
                                        ? "text-zinc-950"
                                        : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100/50"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="desktop-nav-pill"
                                        className="absolute inset-0 bg-white rounded-full border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] -z-10"
                                        transition={{ duration: 0.5, ease: premiumEasing }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* --- RIGHT ACTIONS (Desktop) --- */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="https://aptrooms.web.app/login"
                        target="_blank"
                        className="text-sm font-semibold text-zinc-500 hover:text-zinc-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-3 py-2"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/download"
                        className="group relative px-6 py-2.5 rounded-full font-semibold text-sm text-white overflow-hidden transition-all duration-300 active:scale-[0.98] flex items-center gap-2 shadow-md shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <span className="relative z-10 flex items-center gap-2">
                            <Sparkles size={14} className="text-white" />
                            Get Started
                        </span>
                    </Link>
                </div>

                {/* --- MOBILE MENU TOGGLE --- */}
                <button
                    className="lg:hidden relative z-[120] w-11 h-11 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full border border-zinc-200/80 text-zinc-900 shadow-sm transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                                <X size={20} />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                                <Menu size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </nav>

            {/* --- MOBILE MENU OVERLAY --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.5, ease: premiumEasing }}
                        className="fixed inset-0 z-[110] bg-white/95 backdrop-blur-2xl flex flex-col lg:hidden px-6 pt-32 pb-10 h-[100dvh] overflow-y-auto"
                    >
                        {/* Subtle ambient glows for mobile background */}
                        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute bottom-20 right-10 w-64 h-64 bg-zinc-100/50 rounded-full blur-[80px] pointer-events-none" />

                        <div className="flex-1 flex flex-col gap-2 relative z-10">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, ease: premiumEasing, delay: i * 0.05 }}
                                        className="border-b border-zinc-100/80 last:border-0"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`py-5 text-3xl font-semibold tracking-tight flex items-center justify-between group transition-colors ${
                                                isActive ? "text-blue-600" : "text-zinc-900 hover:text-blue-600"
                                            }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                {link.name}
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="mobile-active-dot"
                                                        className="w-2 h-2 rounded-full bg-blue-600"
                                                    />
                                                )}
                                            </span>
                                            <ArrowRight size={24} className={`${isActive ? "text-blue-400" : "text-zinc-200"} group-hover:text-blue-500 transition-colors group-hover:translate-x-1 duration-300`} />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Mobile Actions */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: premiumEasing, delay: 0.2 }}
                            className="mt-8 space-y-4 relative z-10 shrink-0"
                        >
                            <Link
                                href="https://aptrooms.web.app/login"
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full py-4 rounded-full text-sm font-semibold text-zinc-900 bg-zinc-50 border border-zinc-200/80 shadow-sm active:scale-[0.98] hover:bg-zinc-100 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                                Log in to Dashboard
                            </Link>
                            <Link
                                href="/download"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] rounded-full text-sm font-bold active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                                Get Started Free
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}