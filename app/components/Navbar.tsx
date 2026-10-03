"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Material Design standard easing
const materialEasing = [0.2, 0, 0, 1] as const;

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

  // Border elevation on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scrolling when mobile drawer is open
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? "border-b border-[#DADCE0] shadow-[0_1px_3px_rgba(60,64,67,0.08)]"
          : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto h-16 md:h-18 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* --- LOGO & BRAND NAME --- */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded-lg py-1 pr-2"
            aria-label="Go to Aptro homepage"
          >
            <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/aptro_logo.png"
                alt="Aptro Logo"
                width={32}
                height={32}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            
            <span className="text-[20px] font-medium tracking-tight text-[#1F1F1F]">
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
                  className={`text-[14px] px-3.5 py-2 rounded-full transition-colors font-medium flex items-center ${
                    isActive
                      ? "bg-[#D3E3FD] text-[#041E49]"
                      : "text-[#444746] hover:bg-[#F1F3F4] hover:text-[#1F1F1F]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* --- RIGHT ACTIONS (Desktop) --- */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://aptrooms.web.app/login"
            target="_blank"
            className="text-[14px] font-medium text-[#1A73E8] hover:bg-[#1A73E8]/10 transition-colors rounded-full px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
          >
            Log in
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-[14px] font-medium text-white bg-[#1A73E8] hover:bg-[#1557B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
          >
            Get Started
          </Link>
        </div>

        {/* --- MOBILE MENU TOGGLE --- */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-[#444746] hover:bg-[#F1F3F4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 64px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: materialEasing }}
            className="fixed top-16 left-0 right-0 bg-white border-t border-[#DADCE0] flex flex-col justify-between overflow-y-auto px-6 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-medium uppercase tracking-wider text-[#5F6368] px-4 py-2">
                Navigation
              </span>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-full text-[16px] transition-colors ${
                      isActive
                        ? "bg-[#D3E3FD] text-[#041E49] font-medium"
                        : "text-[#444746] hover:bg-[#F1F3F4] hover:text-[#1F1F1F]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={18} className={isActive ? "text-[#041E49]" : "text-[#747775]"} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-[#DADCE0] flex flex-col gap-3">
              <Link
                href="https://aptrooms.web.app/login"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 text-[14px] font-medium text-[#1A73E8] border border-[#DADCE0] rounded-full hover:bg-[#F8F9FA] transition-colors"
              >
                Log in to Dashboard
              </Link>
              <Link
                href="/download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 text-[14px] font-medium text-white bg-[#1A73E8] hover:bg-[#1557B0] rounded-full transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}