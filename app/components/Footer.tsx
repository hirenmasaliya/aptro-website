"use client";

import Link from "next/link";
import { 
  X, 
  Globe, 
  MessageCircle, 
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

// 1. Font Initialized
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // 2. Font Class Applied Here
    <footer className={`bg-[#FAFAFA] text-zinc-500 border-t border-zinc-200/60 pt-24 pb-10 selection:bg-zinc-200 selection:text-zinc-900 ${jakarta.className}`}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          
          {/* Brand Column (Wider) */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <span className="font-semibold text-xl tracking-tight text-zinc-950 flex items-center">
                Aptro<span className="text-zinc-400">.</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white text-zinc-500 border border-zinc-200/60 transition-colors duration-300 group-hover:bg-zinc-200 group-hover:text-zinc-900">
                OS
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm font-medium text-zinc-500">
              Next-generation business architecture. Precision-engineered to streamline global operations and empower modern entrepreneurs.
            </p>
          </div>

          {/* Links: Product */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-zinc-950 mb-6 tracking-tight">Infrastructure</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/features" className="hover:text-zinc-950 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-zinc-950 transition-colors">Pricing</Link></li>
              <li>
                <Link href="/download" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 group w-fit">
                  App Store 
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-zinc-950 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
              <li><Link href="/updates" className="hover:text-zinc-950 transition-colors">Releases</Link></li>
            </ul>
          </div>

          {/* Links: Corporate */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-zinc-950 mb-6 tracking-tight">Corporate</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-zinc-950 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-950 transition-colors">Support</Link></li>
              <li><Link href="/privacy" className="hover:text-zinc-950 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-zinc-950 transition-colors">Terms</Link></li>
            </ul>
          </div>

          {/* Links: Connect */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-zinc-950 mb-6 tracking-tight">Network</h4>
            <div className="space-y-6">
              <a href="mailto:support@aptro.app" className="block text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors">
                support@aptro.app
              </a>
              
              <div className="flex gap-3">
                <a href="https://x.com" className="w-10 h-10 flex items-center justify-center bg-white rounded-xl border border-zinc-200/60 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 hover:border-zinc-300 transition-all shadow-sm">
                  <X size={16} />
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 flex items-center justify-center bg-white rounded-xl border border-zinc-200/60 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 hover:border-zinc-300 transition-all shadow-sm">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 border-t border-zinc-200/60 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-zinc-500">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© {currentYear} Aptro Technologies Inc.</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-300" />
            <Link href="/security" className="hover:text-zinc-950 flex items-center gap-1.5 transition-colors group">
              <ShieldCheck size={14} className="text-zinc-400 group-hover:text-zinc-950 transition-colors" /> 
              AES-256 Encrypted
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-zinc-950 transition-colors">
              <Globe size={14} className="text-zinc-400" />
              Global (EN)
            </span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-300" />
            <span className="flex items-center gap-2 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-30"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
              </span>
              System Stable <span className="text-zinc-400">v2.0</span>
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}