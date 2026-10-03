"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight,
  Download
} from "lucide-react"; 
import { Plus_Jakarta_Sans } from "next/font/google";

// 1. Font Initialized
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Custom SVG Icons
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
    <footer className={`bg-[#F8F9FA] text-[#444746] pt-16 pb-8 border-t border-[#DADCE0] ${jakarta.className}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column (Wider) */}
          <div className="col-span-1 lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded-lg pr-2">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/aptro_logo.png"
                  alt="Aptro Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-medium text-[20px] tracking-tight text-[#1F1F1F]">
                Aptro
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#E8F0FE] text-[#1967D2] ml-1">
                OS
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed text-[#5F6368] mb-6 max-w-sm">
              Next-generation business architecture. Precision-engineered to streamline global operations and empower modern entrepreneurs.
            </p>
            
            {/* Primary CTA in Footer */}
            <Link 
              href="/download" 
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A73E8] text-white text-[14px] font-medium rounded-full hover:bg-[#1557B0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
            >
              <Download size={18} />
              Download App
            </Link>
          </div>

          {/* Links: Product */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-medium text-[#1F1F1F] mb-5">Infrastructure</h4>
            <ul className="space-y-4 text-[14px]">
              <li><Link href="/features" className="hover:text-[#1A73E8] transition-colors block">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-[#1A73E8] transition-colors block">Pricing</Link></li>
              <li>
                <Link href="/download" className="hover:text-[#1A73E8] transition-colors flex items-center gap-1.5 group w-fit">
                  App Store 
                  <ArrowUpRight size={16} className="text-[#5F6368] group-hover:text-[#1A73E8] transition-colors" />
                </Link>
              </li>
              <li><Link href="/updates" className="hover:text-[#1A73E8] transition-colors block">Releases</Link></li>
            </ul>
          </div>

          {/* Links: Corporate */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-medium text-[#1F1F1F] mb-5">Corporate</h4>
            <ul className="space-y-4 text-[14px]">
              <li><Link href="/about" className="hover:text-[#1A73E8] transition-colors block">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#1A73E8] transition-colors block">Support</Link></li>
              <li><Link href="/privacy" className="hover:text-[#1A73E8] transition-colors block">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#1A73E8] transition-colors block">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Links: Connect */}
          <div className="flex flex-col lg:col-span-2 lg:pl-8">
            <h4 className="text-[14px] font-medium text-[#1F1F1F] mb-5">Network</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[13px] text-[#5F6368] mb-1">Email us at</p>
                <a href="mailto:aptrosuppor@gmail.com" className="block text-[14px] font-medium text-[#1A73E8] hover:underline hover:text-[#1557B0] transition-colors w-fit">
                  aptrosuppor@gmail.com
                </a>
              </div>
              
              <div>
                <p className="text-[13px] text-[#5F6368] mb-3">Follow our journey</p>
                <div className="flex gap-3">
                  <a href="https://x.com/aptro_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white border border-[#DADCE0] rounded-full text-[#5F6368] hover:bg-[#F1F3F4] hover:text-[#1F1F1F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]">
                    <XIcon size={18} />
                  </a>
                  <a href="https://instagram.com/aptroapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white border border-[#DADCE0] rounded-full text-[#5F6368] hover:bg-[#FCE8E6] hover:text-[#D93025] hover:border-[#FAD2CF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]">
                    <InstagramIcon size={18} />
                  </a>
                  <a href="https://linkedin.com/company/aptro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white border border-[#DADCE0] rounded-full text-[#5F6368] hover:bg-[#E8F0FE] hover:text-[#1A73E8] hover:border-[#D2E3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]">
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-6 border-t border-[#DADCE0] flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#5F6368]">
          <div className="flex items-center gap-4">
            <p>© {currentYear} Aptro Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}