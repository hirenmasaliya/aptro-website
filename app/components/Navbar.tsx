"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
});

// Premium smooth easing for animations
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Partner with us", href: "/join" }, // Fixed typo and shortened for cleaner UI
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll and handle Escape key when mobile menu is open
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
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-out flex justify-center ${isScrolled ? "pt-4 px-4 sm:px-6" : "pt-6 px-6"
                } ${jakarta.className}`}
        >
            <nav
                className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-out ${isScrolled
                        ? "bg-white/70 backdrop-blur-xl rounded-full py-2.5 px-4 sm:px-6 border border-zinc-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                        : "bg-transparent py-2 px-2"
                    }`}
            >
                {/* --- LOGO SECTION --- */}
                <Link
                    href="/"
                    className="flex items-center group relative z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl transition-opacity hover:opacity-90"
                    aria-label="Go to Aptro homepage"
                >
                    <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 group-active:scale-95">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 to-fuchsia-500/0 group-hover:from-indigo-100 group-hover:to-fuchsia-100 blur-xl rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
                        <Image
                            src="/aptro_logo.png"
                            alt="Aptro Logo"
                            width={44}
                            height={44}
                            className="object-contain w-full h-full relative z-10 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(79,70,229,0.3)]"
                            priority
                        />
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <div className="hidden lg:flex items-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${isActive
                                        ? "text-zinc-900"
                                        : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/30"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="desktop-nav-pill"
                                        className="absolute inset-0 bg-white rounded-full border border-zinc-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] -z-10"
                                        transition={{ duration: 0.4, ease: premiumEasing }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* --- RIGHT ACTIONS (Desktop) --- */}
                <div className="hidden lg:flex items-center gap-5">
                    <Link
                        href="https://aptrooms.web.app/login"
                        target="_blank"
                        className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-2 py-1"
                    >
                        Log in
                    </Link>
                    <Link
    href="/download"
    className="group relative px-6 py-2.5 rounded-full font-medium text-sm text-white overflow-hidden transition-all duration-300 active:scale-[0.98] flex items-center gap-2 shadow-md shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
>
    {/* Unified Gradient Background to match the professional blue theme */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <span className="relative z-10 flex items-center gap-2">
        <Sparkles size={14} className="text-white" />
        Get Started
    </span>
</Link>
                </div>

                {/* --- MOBILE MENU TOGGLE --- */}
                <button
                    className="lg:hidden relative z-[110] w-10 h-10 flex items-center justify-center bg-white rounded-full border border-zinc-200 text-zinc-900 hover:bg-zinc-50 shadow-sm transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
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
                        transition={{ duration: 0.4, ease: premiumEasing }}
                        className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-3xl flex flex-col lg:hidden px-6 pt-32 pb-10 overflow-y-auto"
                    >
                        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-100/50 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute bottom-20 right-10 w-64 h-64 bg-fuchsia-100/50 rounded-full blur-[80px] pointer-events-none" />

                        <div className="flex-1 flex flex-col gap-6 relative z-10">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, ease: premiumEasing, delay: i * 0.05 }}
                                        className="border-b border-zinc-100 pb-6"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`text-3xl font-semibold tracking-tight flex items-center justify-between group ${isActive ? "text-indigo-600" : "text-zinc-900"
                                                }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                {link.name}
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="mobile-active-dot"
                                                        className="w-2 h-2 rounded-full bg-indigo-600"
                                                    />
                                                )}
                                            </span>
                                            <ArrowRight size={24} className={`${isActive ? "text-indigo-400" : "text-zinc-300"} group-hover:text-zinc-900 transition-colors group-hover:translate-x-1 duration-300`} />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Mobile Actions */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, ease: premiumEasing, delay: 0.2 }}
                            className="mt-12 space-y-4 relative z-10"
                        >
                            <Link
                                href="https://aptrooms.web.app/login"
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full py-4 rounded-full text-sm font-medium text-zinc-900 bg-white border border-zinc-200 shadow-sm active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/download"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] rounded-full text-sm font-bold active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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