"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { 
    ChevronDown, 
    Menu, 
    X, 
    Smartphone, 
    Globe, 
    Shield, 
    ArrowRight, 
    ArrowUpRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions", hasDropdown: true },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Handle scroll effect for dynamic floating navbar
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <header 
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex justify-center ${
                isScrolled ? "pt-4 px-4 sm:px-6" : "pt-0 px-0"
            } ${jakarta.className}`}
        >
            <nav
                className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isScrolled
                        ? "bg-white/80 backdrop-blur-xl border border-zinc-200/60 rounded-[2rem] py-3 px-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]"
                        : "bg-transparent py-6 px-6"
                }`}
            >
                {/* 1. PROFESSIONAL LOGO SECTION */}
                <Link href="/" className="flex items-center gap-2.5 group relative z-50">
                    <span className="font-black text-2xl tracking-tighter text-zinc-950 flex items-center">
                        APTRO<span className="text-blue-600">.</span>
                    </span>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-[0.2em] bg-zinc-100/80 text-zinc-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300 border border-zinc-200/50">
                        OS
                    </span>
                </Link>

                {/* 2. DESKTOP NAVIGATION (Glassmorphic Pill) */}
                <div className="hidden md:flex items-center bg-zinc-50/50 backdrop-blur-md border border-zinc-200/50 p-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    {navLinks.map((link) => (
                        <div 
                            key={link.name} 
                            className="relative"
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={`relative z-10 px-6 py-2.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest transition-colors duration-300 flex items-center gap-1.5 ${
                                    pathname === link.href
                                        ? "text-zinc-950"
                                        : "text-zinc-500 hover:text-zinc-950"
                                }`}
                            >
                                {/* Active Background Pill */}
                                {pathname === link.href && (
                                    <motion.div 
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-zinc-200/40 -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                
                                {link.name}
                                
                                {link.hasDropdown && (
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-blue-600' : 'opacity-50'}`} />
                                )}
                            </Link>

                            {/* Dropdown Menu (Framer Motion) */}
                            {link.hasDropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.2 } }}
                                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                            className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[320px] p-3 bg-white/90 backdrop-blur-xl border border-zinc-200/80 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] z-50"
                                        >
                                            <DropdownItem icon={<Smartphone size={18} />} title="Mobile POS" desc="Take payments from anywhere instantly." href="/solutions/pos" />
                                            <DropdownItem icon={<Globe size={18} />} title="Global Commerce" desc="Sync orders across borders and taxes." href="/solutions/ecom" />
                                            <DropdownItem icon={<Shield size={18} />} title="Enterprise Security" desc="Advanced infrastructure layers." href="/solutions/enterprise" />

                                            <div className="mt-2 p-4 bg-zinc-50/80 rounded-2xl border border-zinc-100 group/all hover:bg-blue-50/50 transition-colors">
                                                <Link href="/solutions" className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 flex items-center justify-between">
                                                    View All Capabilities 
                                                    <ArrowRight size={14} className="group-hover/all:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                {/* 3. RIGHT ACTIONS */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="https://aptrooms.web.app/login"
                        target="_blank"
                        className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors flex items-center gap-1.5 group"
                    >
                        Log in
                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-blue-600" />
                    </Link>
                    <Link
                        href="/download"
                        className="bg-zinc-950 text-white px-8 py-3.5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden relative z-[110] w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-full border border-zinc-200 text-zinc-950 hover:bg-zinc-100 transition-colors active:scale-95"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                                <X size={20} strokeWidth={2.5} />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                                <Menu size={20} strokeWidth={2.5} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </nav>

            {/* 4. MOBILE MENU OVERLAY (Cinematic Glassmorphism) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-2xl flex flex-col md:hidden px-6 pt-32 pb-10"
                    >
                        {/* Top Gradient Fade for Depth */}
                        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

                        <div className="flex-1 flex flex-col gap-6 relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.05 }}
                                    className="border-b border-zinc-200/50 pb-6"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-black tracking-tight text-zinc-950 flex items-center justify-between hover:text-blue-600 transition-colors"
                                    >
                                        {link.name}
                                        <ArrowRight size={28} className="text-zinc-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* Mobile Actions */}
                        <motion.div 
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-auto space-y-4 relative z-10"
                        >
                            <Link 
                                href="https://aptrooms.web.app/login" 
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full p-5 rounded-full text-xs font-extrabold uppercase tracking-widest text-zinc-950 bg-zinc-100 border border-zinc-200/80 active:scale-95 transition-transform"
                            >
                                Log in to Dashboard
                            </Link>
                            <Link 
                                href="/download" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full p-5 bg-blue-600 text-white rounded-full text-xs font-extrabold uppercase tracking-widest shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] active:scale-95 transition-transform"
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

// Reusable Dropdown Item Component with enhanced hover states
function DropdownItem({ icon, title, desc, href }: { icon: React.ReactNode, title: string, desc: string, href: string }) {
    return (
        <Link href={href} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-all duration-300 group/item">
            <div className="mt-0.5 w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-zinc-200/60 shadow-sm text-zinc-500 group-hover/item:text-blue-600 group-hover/item:border-blue-200 group-hover/item:bg-blue-50 transition-all duration-300 group-hover/item:scale-105">
                {icon}
            </div>
            <div className="flex-1">
                <div className="text-[13px] font-extrabold text-zinc-950 mb-1 group-hover/item:text-blue-950 transition-colors flex items-center justify-between">
                    {title}
                </div>
                <div className="text-[11px] text-zinc-500 leading-relaxed font-medium">
                    {desc}
                </div>
            </div>
        </Link>
    );
}