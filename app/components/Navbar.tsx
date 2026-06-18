"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { 
    Menu, 
    X, 
    ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Premium smooth easing
const premiumEasing = [0.22, 1, 0.36, 1] as const;

// Cleaned up navigation structure (No Dropdowns)
const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll for mobile menu
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <header 
            className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex justify-center ${
                isScrolled ? "pt-4 px-4 sm:px-6" : "pt-0 px-0"
            } ${jakarta.className}`}
        >
            <nav
                className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isScrolled
                        ? "bg-white/80 backdrop-blur-xl rounded-full py-3 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                        : "bg-transparent py-6 px-6"
                }`}
            >
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 group relative z-50">
                    <span className="font-semibold text-xl tracking-tight text-zinc-950 flex items-center">
                        Aptro<span className="text-zinc-400">.</span>
                    </span>
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-100 text-zinc-500 border border-zinc-200/60 transition-colors duration-300 group-hover:bg-zinc-200 group-hover:text-zinc-900">
                        OS
                    </span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden md:flex items-center bg-zinc-50/80 backdrop-blur-md border border-zinc-200/60 p-1 rounded-full shadow-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 ${
                                pathname === link.href
                                    ? "text-zinc-950"
                                    : "text-zinc-500 hover:text-zinc-950"
                            }`}
                        >
                            {/* Active Indicator */}
                            {pathname === link.href && (
                                <motion.div 
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-zinc-200/60 -z-10"
                                    transition={{ duration: 0.5, ease: premiumEasing }}
                                />
                            )}
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* RIGHT ACTIONS */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="https://aptrooms.web.app/login"
                        target="_blank"
                        className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/download"
                        className="bg-zinc-950 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-zinc-800 transition-all duration-300 active:scale-[0.98] shadow-sm flex items-center gap-2"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center bg-white rounded-full border border-zinc-200 text-zinc-950 hover:bg-zinc-50 transition-colors active:scale-95 shadow-sm"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
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

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: premiumEasing }}
                        className="fixed inset-0 z-[100] bg-[#FAFAFA] flex flex-col md:hidden px-6 pt-32 pb-10 overflow-y-auto"
                    >
                        <div className="flex-1 flex flex-col gap-6 relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: premiumEasing, delay: i * 0.05 }}
                                    className="border-b border-zinc-200/60 pb-6"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-semibold tracking-tight text-zinc-950 flex items-center justify-between"
                                    >
                                        {link.name}
                                        <ArrowRight size={24} className="text-zinc-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* Mobile Actions */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: premiumEasing, delay: 0.2 }}
                            className="mt-12 space-y-3 relative z-10"
                        >
                            <Link 
                                href="https://aptrooms.web.app/login" 
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full py-4 rounded-full text-sm font-medium text-zinc-950 bg-white border border-zinc-200 active:scale-[0.98] transition-all"
                            >
                                Log in
                            </Link>
                            <Link 
                                href="/download" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full py-4 bg-zinc-950 text-white rounded-full text-sm font-medium active:scale-[0.98] transition-all"
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