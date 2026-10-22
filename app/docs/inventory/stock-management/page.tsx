"use client";

import { 
  ChevronRight, 
  Package, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Search,
  MessageSquare,
  History,
  PlusCircle
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/inventory", active: false },
  { name: "Manage Stock Quantities", href: "/docs/inventory/stock-management", active: true },
  { name: "Purchase Orders", href: "/docs/inventory/purchase-orders", active: false },
  { name: "Supplier Returns", href: "/docs/inventory/returns", active: false },
  { name: "Low Stock Alerts", href: "/docs/inventory/alerts", active: false },
];

export default function ManageStockPage() {
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
            <span className="text-gray-900">Manage Stock Quantities</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Manage Stock Quantities
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                While Aptro automatically adjusts your inventory when you create invoices or receive purchase orders, you will occasionally need to perform manual adjustments. This is essential for handling breakage, theft, or reconciling physical stock audits.
              </p>
            </div>

            {/* Warning Callout Box */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4 items-start">
              <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-amber-900 mb-1">Strict Audit Trails</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Every manual stock adjustment is permanently logged in the item's ledger. The system records the exact date, the variance amount, the provided reason, and the specific user account that authorized the change to ensure total accountability.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Making a manual adjustment
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Locate the Product</h3>
                    <p className="text-gray-600 mb-3">Navigate to <strong>Inventory & Products</strong> from the main menu.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Search className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Search the Catalog</span>
                        <span className="text-xs text-gray-500">Use the search bar to find the specific item by name or SKU. Click the <strong>Adjust Stock</strong> button next to its current quantity.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Input the Variance</h3>
                    <p className="text-gray-600 mb-3">Define how much the stock is changing, not the final total.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <PlusCircle className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Add or Reduce</span>
                        <span className="text-xs text-gray-500">Select <strong>+ Add</strong> if you found unaccounted stock. Select <strong>- Reduce</strong> if items are damaged or missing. Enter the variance quantity.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Log the Reason</h3>
                    <p className="text-gray-600 mb-3">Provide a clear explanation for the adjustment.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <MessageSquare className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Mandatory Remarks</span>
                        <span className="text-xs text-gray-500">Enter a descriptive note (e.g., "Damaged during warehouse transit" or "Physical audit discrepancy Q3") to justify the change to administrators.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Confirm & Review Ledger</h3>
                    <p className="text-gray-600 mb-3">Click <strong>Save Adjustment</strong>. You can instantly verify the new total.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <History className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">View Stock History</span>
                        <span className="text-xs text-gray-500">Click the product name to view its detailed ledger. You will see your manual adjustment listed alongside regular sales and purchase order movements.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/inventory" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Inventory Overview</span>
                </div>
              </Link>

              <Link 
                href="/docs/inventory/purchase-orders" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-emerald-600">Purchase Orders</span>
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