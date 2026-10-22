"use client";

import { 
  ChevronRight, 
  Package, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  Truck,
  FilePlus,
  Send,
  PackageCheck,
  ListChecks,
  Info
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/inventory", active: false },
  { name: "Manage Stock Quantities", href: "/docs/inventory/stock-management", active: false },
  { name: "Purchase Orders", href: "/docs/inventory/purchase-orders", active: true },
  { name: "Supplier Returns", href: "/docs/inventory/returns", active: false },
  { name: "Low Stock Alerts", href: "/docs/inventory/alerts", active: false },
];

export default function PurchaseOrdersPage() {
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
            <span className="text-gray-900">Purchase Orders</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Purchase Orders & Restocks
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Streamline your procurement process. Aptro allows you to generate official Purchase Orders (POs) for your suppliers, track incoming shipments, and automatically update your warehouse inventory once goods are received.
              </p>
            </div>

            {/* Info Callout Box */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-emerald-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-emerald-900 mb-1">Automated Ledger & Stock Sync</h4>
                <p className="text-emerald-800 text-sm leading-relaxed">
                  Generating a PO does not affect your inventory. However, the moment you mark a PO as <strong>"Received"</strong>, Aptro instantly increases your stock quantities and updates the supplier's payable ledger account with the total bill amount.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Processing a restock
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Create the Purchase Order</h3>
                    <p className="text-gray-600 mb-3">Navigate to <strong>Inventory {">"} Purchase Orders</strong> and click <span className="inline-block px-2 py-0.5 bg-emerald-600 text-white rounded text-xs font-medium">+ New PO</span>.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <FilePlus className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Select Supplier & Items</span>
                        <span className="text-xs text-gray-500">Choose your vendor from the Contacts list, add the products you wish to order, and confirm the expected purchase rates and tax slabs.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Send to Supplier</h3>
                    <p className="text-gray-600 mb-3">Once saved, the PO is generated in a "Pending" status.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Send className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Share the PDF</span>
                        <span className="text-xs text-gray-500">Use the built-in share options to send the official PDF document to your supplier via WhatsApp or Email directly from the dashboard.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Mark as Received</h3>
                    <p className="text-gray-600 mb-3">When the physical goods arrive at your warehouse, you must process the receipt.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <PackageCheck className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Update Inventory</span>
                        <span className="text-xs text-gray-500">Open the Pending PO and click <strong>Mark as Received</strong>. The system will automatically add the items to your available stock.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced: Partial Fulfillment</h3>
                    <p className="text-gray-600 mb-3">If a supplier only delivers half of your order, Aptro can handle it.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <ListChecks className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Receive Partial Quantities</span>
                        <span className="text-xs text-gray-500">During the receiving step, adjust the quantity numbers to match what actually arrived. The PO will transition to a <em>Partially Received</em> status until the rest arrives.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/inventory/stock-management" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Manage Stock Quantities</span>
                </div>
              </Link>

              <Link 
                href="/docs/inventory/returns" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-emerald-600">Supplier Returns</span>
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