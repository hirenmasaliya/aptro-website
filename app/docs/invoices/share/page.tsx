"use client";

import { 
  ChevronRight, 
  FileText, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  Download,
  Share2,
  Printer,
  Smartphone
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/invoices", active: false },
  { name: "Add Products & Services", href: "/docs/invoices/add-products", active: false },
  { name: "Create an Invoice", href: "/docs/invoices/create", active: false },
  { name: "Configure GST Rates", href: "/docs/invoices/gst-setup", active: false },
  { name: "Share & Download Bills", href: "/docs/invoices/share", active: true },
];

export default function ShareInvoicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top App Bar */}
      <header className="sticky top-0 w-full h-16 border-b border-gray-200 bg-white/90 backdrop-blur-md z-50 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 lg:hidden text-gray-600">
            <Menu size={24} />
          </button>
          <Link href="/docs" className="flex items-center gap-2">
            <span className="text-xl font-medium tracking-tight text-gray-900">Aptro Help Center</span>
          </Link>
        </div>
        <Link href="/" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full transition-colors">
          <Home size={16} />
          Back to Home
        </Link>
      </header>

      <div className="max-w-[1440px] mx-auto flex">
        
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-gray-200 bg-white h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto py-8">
          <div className="mb-6 px-6">
             <h3 className="text-sm font-bold tracking-wider uppercase text-gray-900 flex items-center gap-2">
                <FileText size={18} className="text-indigo-600" />
                GST Billing
             </h3>
          </div>
          <div className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`block px-6 py-2.5 text-[14px] transition-colors rounded-r-full mr-4 ${
                  link.active 
                  ? "bg-[#e8f0fe] text-[#1a73e8] font-medium" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-normal"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <article className="grow min-w-0 px-6 py-8 lg:px-12 xl:px-16 max-w-4xl">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">Help Center</Link>
            <ChevronRight size={16} />
            <Link href="/docs/invoices" className="hover:text-blue-600 transition-colors">GST Billing</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900">Share & Download Bills</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Share & Download Bills
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Once a GST invoice or ledger allocation is generated, Aptro provides seamless tools to distribute the document to your clients via secure PDF downloads, physical prints, or direct WhatsApp sharing.
              </p>
            </div>

            {/* Feature Callout Box */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex gap-4 items-start">
              <Smartphone className="text-emerald-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-emerald-900 mb-1">Native Mobile Sharing</h4>
                <p className="text-emerald-800 text-sm leading-relaxed">
                  Aptro utilizes the native <strong>Web Share API</strong>. When using Aptro on a mobile device, tapping the "Share" button opens your phone's native sharing sheet, allowing you to instantly send the PDF attachment via WhatsApp, Email, or SMS without saving it to your device first.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Document distribution methods
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Download as PDF</h3>
                    <p className="text-gray-600 mb-3">From the invoice list or ledger view, click the invoice ID to open the dual-mode viewer.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Download className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Offline Archiving</span>
                        <span className="text-xs text-gray-500">Click the <strong>Download PDF</strong> button in the top toolbar. Aptro will generate a lightweight, A4-optimized PDF perfectly formatted for compliance.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Direct Printing</h3>
                    <p className="text-gray-600 mb-3">If you need a physical copy for shipping or local records, you can print instantly.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Printer className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Print Preview</span>
                        <span className="text-xs text-gray-500">Click the <strong>Print</strong> icon from the invoice dashboard. The CSS is strictly formatted so backgrounds and alignments remain precise on standard A4 paper.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Share via WhatsApp</h3>
                    <p className="text-gray-600 mb-3">Instantly send payment receipts and invoices to your customers.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Share2 className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Automated Messages</span>
                        <span className="text-xs text-gray-500">Clicking the <strong>WhatsApp icon</strong> will automatically fetch the PDF in the background, attach it as a file, and pre-fill a greeting message addressing your client by name.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/invoices/gst-setup" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Configure GST Rates</span>
                </div>
              </Link>

              <Link 
                href="/docs/ocr-processing" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next Module</span>
                  <span className="text-sm font-medium text-blue-600">OCR Supplier Extraction</span>
                </div>
                <ArrowRight size={20} className="text-blue-600" />
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}