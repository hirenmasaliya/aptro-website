"use client";

import { 
  ChevronRight, 
  ShoppingCart, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  UserPlus,
  PlusCircle,
  CalendarDays,
  Save,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/orders", active: false },
  { name: "Create Orders", href: "/docs/orders/create", active: true },
  { name: "Track Order Status", href: "/docs/orders/tracking", active: false },
  { name: "Manage Deliveries", href: "/docs/orders/deliveries", active: false },
];

export default function CreateOrdersPage() {
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
            <span className="text-gray-900">Create Orders</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Create a New Order
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Logging a new order allows you to secure customer requests and plan inventory allocations without immediately generating a formal GST tax invoice. This is perfect for taking advance bookings or B2B bulk requests.
              </p>
            </div>

            {/* Tip Callout Box */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex gap-4 items-start">
              <Lightbulb className="text-orange-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-orange-900 mb-1">Stock & Tax Independence</h4>
                <p className="text-orange-800 text-sm leading-relaxed">
                  Creating an order operates in a "draft" state. It does <strong>not</strong> deduct items from your physical inventory, nor does it create an entry in your GST sales ledger. Those actions only occur when the order is converted to an Invoice during fulfillment.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Drafting the customer order
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Initialize the Order</h3>
                    <p className="text-gray-600 mb-3">Navigate to <strong>Order Management {">"} Orders</strong> and click <span className="inline-block px-2 py-0.5 bg-orange-600 text-white rounded text-xs font-medium">+ New Order</span>.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <UserPlus className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Select the Customer</span>
                        <span className="text-xs text-gray-500">Search your customer database or quickly add a new client. Their default billing and shipping addresses will auto-populate.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Add Requested Items</h3>
                    <p className="text-gray-600 mb-3">Build the list of products or services the customer wishes to purchase.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <PlusCircle className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Product Grid</span>
                        <span className="text-xs text-gray-500">Select items from your catalog and specify the quantities. You can offer provisional discounts here which will carry over to the final invoice.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Set Deadlines</h3>
                    <p className="text-gray-600 mb-3">Establish the fulfillment timeline.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <CalendarDays className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Expected Delivery Date</span>
                        <span className="text-xs text-gray-500">Assign a target delivery date. This helps prioritize your order pipeline and triggers alerts as deadlines approach.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Save as Pending</h3>
                    <p className="text-gray-600 mb-3">Click <strong>Save Order</strong> to log it into the system.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Save className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Order Confirmation</span>
                        <span className="text-xs text-gray-500">The order is now saved in a "Pending" status. You can instantly share the PDF Order Confirmation with the client via WhatsApp or Email.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/orders" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Order Management Overview</span>
                </div>
              </Link>

              <Link 
                href="/docs/orders/tracking" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-orange-600">Track Order Status</span>
                </div>
                <ArrowRight size={20} className="text-orange-600" />
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}