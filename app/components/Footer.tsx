"use client";

import Link from "next/link";
import { 
  X, 
  Mail, 
  Globe, 
  MessageCircle, 
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-zinc-500 border-t border-zinc-100 pt-24 pb-12 font-sans selection:bg-blue-50 selection:text-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-20">
          
          {/* Brand Column (Wider) */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <span className="text-zinc-950 font-black text-2xl tracking-tighter">
                APTRO<span className="text-blue-600">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs font-medium text-zinc-400">
              Next-generation business architecture. Precision-engineered to streamline global operations and empower modern entrepreneurs.
            </p>
          </div>

          {/* Links: Product */}
          <div className="flex flex-col">
            <h4 className="text-zinc-950 font-black mb-6 text-[10px] uppercase tracking-[0.3em]">Infrastructure</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link href="/features" className="hover:text-blue-600 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
              <li><Link href="/download" className="hover:text-blue-600 transition-colors flex items-center gap-1">App Store <ArrowUpRight size={12}/></Link></li>
              <li><Link href="/updates" className="hover:text-blue-600 transition-colors">Releases</Link></li>
            </ul>
          </div>

          {/* Links: Corporate */}
          <div className="flex flex-col">
            <h4 className="text-zinc-950 font-black mb-6 text-[10px] uppercase tracking-[0.3em]">Corporate</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Support</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms</Link></li>
            </ul>
          </div>

          {/* Links: Connect */}
          <div className="flex flex-col">
            <h4 className="text-zinc-950 font-black mb-6 text-[10px] uppercase tracking-[0.3em]">Network</h4>
            <div className="space-y-6">
              <a href="mailto:support@aptro.app" className="block text-zinc-950 hover:text-blue-600 transition-colors text-sm font-bold">
                support@aptro.app
              </a>
              
              <div className="flex gap-4">
                <a href="https://x.com" className="w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-full hover:bg-zinc-950 hover:text-white transition-all border border-zinc-100">
                  <X size={16} />
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-full hover:bg-zinc-950 hover:text-white transition-all border border-zinc-100">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p className="text-zinc-950">© {currentYear} Aptro Technologies Inc.</p>
            <div className="flex items-center gap-6">
               <Link href="/security" className="hover:text-blue-600 flex items-center gap-1.5 transition-colors">
                <ShieldCheck size={14} className="text-blue-600" /> AES-256 Encrypted
               </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-10">
            <span className="flex items-center gap-2 cursor-pointer hover:text-zinc-950 transition-colors">
              <Globe size={14} />
              Region: IN (EN)
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500 font-black">
              System Stable <span className="text-blue-600 ml-1">v1.2.0</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}