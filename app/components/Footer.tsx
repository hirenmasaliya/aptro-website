"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Globe, 
  ShieldCheck,
  ArrowUpRight,
  Download
} from "lucide-react"; // Removed X, Instagram, and Linkedin from here
import { Plus_Jakarta_Sans } from "next/font/google";

// 1. Font Initialized
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Custom SVG Icons to replace the removed Lucide brand icons
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16" />
    <path d="M4 20L20 4" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative bg-white text-zinc-500 pt-20 pb-8 selection:bg-blue-100 selection:text-blue-900 border-t border-zinc-100 shadow-[inset_0_1px_0_0_rgba(0,0,0,0.02)] ${jakarta.className}`}>
      
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-50/50 to-transparent blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column (Wider) */}
          <div className="col-span-1 lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl">
              <div className="relative w-9 h-9 flex-shrink-0 rounded-xl overflow-hidden shadow-sm border border-zinc-100">
                <Image
                  src="/aptro_logo.png"
                  alt="Aptro Logo"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-zinc-900">
                Aptro
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-blue-50 text-blue-600 border border-blue-100/50">
                OS
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed text-zinc-500 mb-8 max-w-sm">
              Next-generation business architecture. Precision-engineered to streamline global operations and empower modern entrepreneurs.
            </p>
            
            {/* Primary CTA in Footer */}
            <Link 
              href="/download" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-colors shadow-sm active:scale-95"
            >
              <Download size={16} />
              Download App
            </Link>
          </div>

          {/* Links: Product */}
          <div className="flex flex-col">
            <h4 className="text-[13px] font-bold text-zinc-900 mb-6 uppercase tracking-wider">Infrastructure</h4>
            <ul className="space-y-3.5 text-[15px] font-medium">
              <li><Link href="/features" className="hover:text-blue-600 transition-colors block">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600 transition-colors block">Pricing</Link></li>
              <li>
                <Link href="/download" className="hover:text-blue-600 transition-colors flex items-center gap-1.5 group w-fit">
                  App Store 
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
              <li><Link href="/updates" className="hover:text-blue-600 transition-colors block">Releases</Link></li>
            </ul>
          </div>

          {/* Links: Corporate */}
          <div className="flex flex-col">
            <h4 className="text-[13px] font-bold text-zinc-900 mb-6 uppercase tracking-wider">Corporate</h4>
            <ul className="space-y-3.5 text-[15px] font-medium">
              <li><Link href="/about" className="hover:text-blue-600 transition-colors block">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors block">Support</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600 transition-colors block">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 transition-colors block">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Links: Connect */}
          <div className="flex flex-col lg:col-span-2 lg:pl-8">
            <h4 className="text-[13px] font-bold text-zinc-900 mb-6 uppercase tracking-wider">Network</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[13px] text-zinc-400 mb-1">Email us at</p>
                <a href="mailto:aptrosuppor@gmail.com" className="block text-[15px] font-semibold text-zinc-700 hover:text-blue-600 transition-colors">
                  aptrosuppor@gmail.com
                </a>
              </div>
              
              <div>
                <p className="text-[13px] text-zinc-400 mb-3">Follow our journey</p>
                <div className="flex gap-3">
                  <a href="https://x.com/aptro_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-full border border-zinc-200/80 text-zinc-600 hover:bg-white hover:text-blue-600 hover:border-blue-200 hover:shadow-sm hover:-translate-y-1 transition-all">
                    <XIcon size={18} />
                  </a>
                  <a href="https://instagram.com/aptroapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-full border border-zinc-200/80 text-zinc-600 hover:bg-white hover:text-pink-600 hover:border-pink-200 hover:shadow-sm hover:-translate-y-1 transition-all">
                    <InstagramIcon size={18} />
                  </a>
                  <a href="https://linkedin.com/company/aptro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-full border border-zinc-200/80 text-zinc-600 hover:bg-white hover:text-blue-700 hover:border-blue-300 hover:shadow-sm hover:-translate-y-1 transition-all">
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-zinc-500">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p>© {currentYear} Aptro Technologies. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}