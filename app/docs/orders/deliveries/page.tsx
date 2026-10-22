"use client";

import { 
  ChevronRight, 
  ShoppingCart, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  Info,
  Truck,
  FileText,
  Printer,
  Receipt
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/orders", active: false },
  { name: "Create Orders", href: "/docs/orders/create", active: false },
  { name: "Track Order Status", href: "/docs/orders/tracking", active: false },
  { name: "Manage Deliveries", href: "/docs/orders/deliveries", active: true },
];

export default function ManageDeliveriesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-orange-100 selection:text-orange-900">
      
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
                <ShoppingCart size={18} className="text-orange-600" />
                Order Management
             </h3>
          </div>
          <div className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`block px-6 py-2.5 text-[14px] transition-colors rounded-r-full mr-4 ${
                  link.active 
                  ? "bg-[#fff3e0] text-[#e65100] font-medium" 
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
            <Link href="/docs/orders" className="hover:text-blue-600 transition-colors">Order Management</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900">Manage Deliveries</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Manage Deliveries & Dispatch
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Coordinate your dispatch operations smoothly. Learn how to generate official delivery challans, assign transport details, and successfully hand over goods to your customers while staying compliant with transit rules.
              </p>
            </div>

            {/* Info Callout Box */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-orange-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-orange-900 mb-1">Delivery Challan vs. Invoice</h4>
                <p className="text-orange-800 text-sm leading-relaxed">
                  A <strong>Delivery Challan</strong> acts as formal proof of dispatch and transport but is not a tax invoice. It must travel with the goods to comply with transport regulations (like e-way bills) before the final GST invoice is formally issued.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Dispatch workflow
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Generate the Delivery Challan</h3>
                    <p className="text-gray-600 mb-3">Once an order is ready for dispatch, create the transport document.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <FileText className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Create Challan</span>
                        <span className="text-xs text-gray-500">Open the order from your pipeline and click <strong>Create Delivery Challan</strong>. The system will automatically pull the customer's shipping address and item details from the order.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Enter Dispatch Details</h3>
                    <p className="text-gray-600 mb-3">Provide the logistics information required for transit compliance.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Truck className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Transport Information</span>
                        <span className="text-xs text-gray-500">Enter the Transport Mode (Road, Air, Rail), Vehicle Number, and Courier/Driver details. This information is printed on the challan and is vital if your goods require an e-way bill.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Print and Attach</h3>
                    <p className="text-gray-600 mb-3">Physical copies must accompany the shipment.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Printer className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Print Copies</span>
                        <span className="text-xs text-gray-500">Click <strong>Print Challan</strong>. Usually, three copies are printed: one for your records, one for the transporter, and one to be signed by the customer upon receipt.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Finalize & Invoice</h3>
                    <p className="text-gray-600 mb-3">Once the delivery is confirmed, finalize the transaction.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Receipt className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Convert to Tax Invoice</span>
                        <span className="text-xs text-gray-500">After successful delivery, open the order and click <strong>Convert to Invoice</strong>. This officially deducts the items from your inventory and posts the transaction to your GST ledger.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/orders/tracking" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Track Order Status</span>
                </div>
              </Link>

              {/* Linking to the next major module: Payments & Reports (Teal theme) */}
              <Link 
                href="/docs/payments" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all text-right w-full sm:w-auto group"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next Module</span>
                  <span className="text-sm font-medium text-teal-600">Payments & Reports</span>
                </div>
                <ArrowRight size={20} className="text-teal-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}