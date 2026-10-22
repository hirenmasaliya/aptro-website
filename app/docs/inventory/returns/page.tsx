"use client";

import { 
  ChevronRight, 
  Package, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Info,
  FileMinus,
  ClipboardList,
  Scale
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/inventory", active: false },
  { name: "Manage Stock Quantities", href: "/docs/inventory/stock-management", active: false },
  { name: "Purchase Orders", href: "/docs/inventory/purchase-orders", active: false },
  { name: "Supplier Returns", href: "/docs/inventory/returns", active: true },
  { name: "Low Stock Alerts", href: "/docs/inventory/alerts", active: false },
];

export default function SupplierReturnsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
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
        <Link href="/docs" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full transition-colors">
          <Home size={16} />
          Back to Home
        </Link>
      </header>

      <div className="max-w-[1440px] mx-auto flex">
        
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-gray-200 bg-white h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto py-8">
          <div className="mb-6 px-6">
             <h3 className="text-sm font-bold tracking-wider uppercase text-gray-900 flex items-center gap-2">
                <Package size={18} className="text-emerald-600" />
                Inventory
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
            <Link href="/docs" className="hover:text-blue-600 transition-colors">Help Center</Link>
            <ChevronRight size={16} />
            <Link href="/docs/inventory" className="hover:text-blue-600 transition-colors">Inventory & Products</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900">Supplier Returns</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Supplier Returns & Debit Notes
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                When you receive defective goods or excess inventory, Aptro helps you manage the return logistics. Process the return to automatically deduct the items from your stock and generate a financial Debit Note to balance your supplier ledgers.
              </p>
            </div>

            {/* Info Callout Box */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-emerald-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-emerald-900 mb-1">What is a Debit Note?</h4>
                <p className="text-emerald-800 text-sm leading-relaxed">
                  A Debit Note is a formal commercial document sent to a supplier notifying them that a debit has been recorded against their account. In Aptro, generating this document legally reduces your outstanding payable balance to that vendor by the value of the returned goods.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Processing a return
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Initiate the Return</h3>
                    <p className="text-gray-600 mb-3">Navigate to <strong>Inventory {">"} Supplier Returns</strong> and click <span className="inline-block px-2 py-0.5 bg-emerald-600 text-white rounded text-xs font-medium">+ New Return</span>.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <RotateCcw className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Select the Vendor</span>
                        <span className="text-xs text-gray-500">Choose the supplier you are returning items to. If linking this to a specific past order, you can optionally reference the original Purchase Order number.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Select Items & Quantities</h3>
                    <p className="text-gray-600 mb-3">Add the specific products being shipped back.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <ClipboardList className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Item Verification</span>
                        <span className="text-xs text-gray-500">Input the exact quantities being returned and ensure the return rate matches the original purchase price. Aptro will verify you have enough current stock to process the return.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Generate the Debit Note</h3>
                    <p className="text-gray-600 mb-3">Save and confirm the return workflow.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <FileMinus className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">PDF Document Creation</span>
                        <span className="text-xs text-gray-500">Click <strong>Generate Debit Note</strong>. The system creates a compliant PDF you can share with your supplier via email or WhatsApp as proof of return.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Automatic Adjustments</h3>
                    <p className="text-gray-600 mb-3">Aptro handles the backend accounting silently.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Scale className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Ledger & Stock Sync</span>
                        <span className="text-xs text-gray-500">The returned quantity is immediately deducted from your physical inventory count, and the supplier's payable balance is reduced by the total value of the Debit Note.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/inventory/purchase-orders" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Purchase Orders</span>
                </div>
              </Link>

              <Link 
                href="/docs/inventory/alerts" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-emerald-600">Low Stock Alerts</span>
                </div>
                <ArrowRight size={20} className="text-emerald-600" />
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}