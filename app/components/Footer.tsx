import Link from "next/link";
import { 
  X, 
  Mail, 
  Globe, 
  MessageCircle, 
  ShieldCheck 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-gray-400 border-t border-white/5 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xs text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                A
              </div>
              <span className="text-white font-bold text-2xl tracking-tighter italic">APTRO</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Next-generation business management. Streamline your invoicing, orders, and growth from one unified dashboard.
            </p>
          </div>

          {/* Links: Product */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link href="/download" className="hover:text-blue-400 transition-colors">Download App</Link></li>
              <li><Link href="/updates" className="hover:text-blue-400 transition-colors">Release Notes</Link></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Links: Connect & Social */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col space-y-4">
              <a href="mailto:support@aptro.app" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                <Mail size={16} className="text-blue-500" />
                <span className="text-sm font-medium">support@aptro.app</span>
              </a>
              
              <div className="flex gap-3 pt-2">
                {/* Social Icons using standard Lucide icons for stability */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl hover:bg-white/10 hover:text-white transition-all border border-white/5">
                  <X size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl hover:bg-white/10 hover:text-white transition-all border border-white/5">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium text-gray-500 uppercase tracking-widest">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© {currentYear} Aptro Technologies Inc.</p>
            <div className="flex items-center gap-4">
               <Link href="/security" className="hover:text-white flex items-center gap-1">
                <ShieldCheck size={12} /> Secure System
               </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <Globe size={12} />
              Region: Global (EN)
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 tracking-widest text-blue-500/80">v1.2.0 Stable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}