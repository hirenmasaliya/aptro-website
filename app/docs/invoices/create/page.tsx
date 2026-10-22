"use client";

import { 
  ChevronRight, 
  FileText, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  UserPlus,
  ShoppingCart,
  Calculator,
  Save
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/invoices", active: false },
  { name: "Add Products & Services", href: "/docs/invoices/add-products", active: false },
  { name: "Create an Invoice", href: "/docs/invoices/create", active: true },
  { name: "Configure GST Rates", href: "/docs/invoices/gst-setup", active: false },
  { name: "Share & Download Bills", href: "/docs/invoices/share", active: false },
];

export default function CreateInvoicePage() {
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
            <span className="text-gray-900">Create an Invoice</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Create a GST Invoice
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aptro makes generating tax-compliant invoices fast and error-free. The system automatically calculates CGST, SGST, or IGST based on the customer's state code compared to your business profile.
              </p>
            </div>

            {/* Tip Callout Box */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4 items-start">
              <Lightbulb className="text-amber-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-amber-900 mb-1">Pro Tip: Pre-add your products</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  While you can add custom items on the fly, billing is much faster if you've already added your catalog in the <strong>Inventory & Products</strong> tab. HSN codes and tax rates will auto-fill!
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Generating your bill
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Select the Customer</h3>
                    <p className="text-gray-600 mb-3">Navigate to <strong>Sales {">"} Invoices</strong> and click the <span className="inline-block px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-medium">+ New Invoice</span> button. Start by choosing who you are billing.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <UserPlus className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Search or Add New</span>
                        <span className="text-xs text-gray-500">Search existing customers by name/phone, or click "Quick Add" for a new walk-in client. Make sure their state is correct for accurate IGST/CGST rules.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Add Items to the Bill</h3>
                    <p className="text-gray-600 mb-3">In the item grid, search for your products or scan a barcode.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <ShoppingCart className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Quantities & Rates</span>
                        <span className="text-xs text-gray-500">Adjust the quantity. The system will automatically calculate the taxable value and apply the designated GST slab for that specific item.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Apply Discounts & Extra Charges</h3>
                    <p className="text-gray-600 mb-3">Scroll to the bottom of the invoice grid to add any final adjustments.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Calculator className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Subtotal Adjustments</span>
                        <span className="text-xs text-gray-500">You can apply a flat discount, percentage discount, or add shipping/packaging charges before the final tax computation.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Save & Generate</h3>
                    <p className="text-gray-600 mb-3">Review the "Tax Summary" section to ensure HSN totals are correct. Click <strong className="text-blue-600">Save & Print</strong> to lock the invoice and generate the B2B/B2C PDF receipt.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/invoices/add-products" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Add Products & Services</span>
                </div>
              </Link>

              <Link 
                href="/docs/invoices/gst-setup" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-blue-600">Configure GST Rates</span>
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