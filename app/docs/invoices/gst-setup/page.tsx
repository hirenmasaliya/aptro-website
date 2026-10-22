"use client";

import { 
  ChevronRight, 
  FileText, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  Percent,
  Map,
  Calculator,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/invoices", active: false },
  { name: "Add Products & Services", href: "/docs/invoices/add-products", active: false },
  { name: "Create an Invoice", href: "/docs/invoices/create", active: false },
  { name: "Configure GST Rates", href: "/docs/invoices/gst-setup", active: true },
  { name: "Share & Download Bills", href: "/docs/invoices/share", active: false },
];

export default function GSTSetupPage() {
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
            <span className="text-gray-900">Configure GST Rates</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Configure GST Rates & Rules
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aptro features an automated tax engine. Instead of manually selecting CGST, SGST, or IGST for every bill, you simply set your item tax rates, and the system intelligently applies the correct tax type based on the place of supply.
              </p>
            </div>

            {/* Warning Callout Box */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5 flex gap-4 items-start">
              <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-red-900 mb-1">Critical: Business State Settings</h4>
                <p className="text-red-800 text-sm leading-relaxed">
                  The entire automated tax calculation relies on your <strong>Business Profile</strong>. Ensure your company's registration state (e.g., Gujarat) is correctly selected in the settings, as this is used as the base point for all tax logic.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions / Logic Explanation */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                How automated GST works
              </h2>

              <div className="space-y-8">
                
                {/* Logic 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Item-Level Tax Slabs</h3>
                    <p className="text-gray-600 mb-3">You define the base GST percentage (5%, 12%, 18%, 28%) when adding a product or service. The system stores this as the total applicable tax rate.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Percent className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Global Configuration</span>
                        <span className="text-xs text-gray-500">If you operate under a single uniform GST slab across your entire business, you can set a default fallback rate in <strong>Settings {">"} Tax Preferences</strong>.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logic 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Place of Supply Routing</h3>
                    <p className="text-gray-600 mb-3">When creating an invoice, Aptro compares the Customer's State Code with your Business State Code.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Map className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">State Matching Logic</span>
                        <span className="text-xs text-gray-500">
                          <strong>Same State (Intra-state):</strong> Splits the rate automatically (e.g., 18% becomes 9% CGST + 9% SGST).<br/>
                          <strong>Different State (Inter-state):</strong> Applies the full rate as IGST (e.g., 18% IGST).
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logic 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Inclusive vs. Exclusive Pricing</h3>
                    <p className="text-gray-600 mb-3">You can toggle how taxes are applied to your line items during billing.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Calculator className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Dynamic Calculation</span>
                        <span className="text-xs text-gray-500">
                          <strong>Exclusive:</strong> Tax is added on top of the selling price.<br/>
                          <strong>Inclusive:</strong> The system reverse-calculates the taxable value so the final price matches your selling price exactly.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/invoices/create" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Create an Invoice</span>
                </div>
              </Link>

              <Link 
                href="/docs/invoices/share" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-blue-600">Share & Download Bills</span>
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