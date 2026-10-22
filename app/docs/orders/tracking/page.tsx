"use client";

import { 
  ChevronRight, 
  ShoppingCart, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  Activity,
  Clock,
  PackageSearch,
  Truck,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/orders", active: false },
  { name: "Create Orders", href: "/docs/orders/create", active: false },
  { name: "Track Order Status", href: "/docs/orders/tracking", active: true },
  { name: "Manage Deliveries", href: "/docs/orders/deliveries", active: false },
];

export default function TrackOrderStatusPage() {
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
            <span className="text-gray-900">Track Order Status</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Track Order Status & Pipeline
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aptro uses a clear, stage-based pipeline to help you monitor fulfillment. By moving orders through specific statuses, your sales and warehouse teams stay perfectly synchronized without needing constant check-ins.
              </p>
            </div>

            {/* Tip Callout Box */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex gap-4 items-start">
              <Activity className="text-orange-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-orange-900 mb-1">Automated Customer Updates</h4>
                <p className="text-orange-800 text-sm leading-relaxed">
                  Keeping your customers informed is crucial. If enabled in your <strong>Notification Settings</strong>, Aptro will automatically dispatch an email or SMS to your client whenever their order transitions into the "Shipped" or "Delivered" state.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions / Pipeline Stages */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Understanding pipeline stages
              </h2>

              <div className="space-y-8">
                
                {/* Stage 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Pending</h3>
                    <p className="text-gray-600 mb-3">This is the default state for any newly created order.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md border-l-4 border-l-gray-400">
                      <Clock className="text-gray-500 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Awaiting Action</span>
                        <span className="text-xs text-gray-500">The order has been logged but the warehouse has not yet started gathering the items. It is safe to edit quantities or cancel the order at this stage.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Processing</h3>
                    <p className="text-gray-600 mb-3">Indicates active work is happening on the fulfillment floor.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md border-l-4 border-l-blue-500">
                      <PackageSearch className="text-blue-500 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Picking & Packing</span>
                        <span className="text-xs text-gray-500">Your team has acknowledged the order and is currently picking items from inventory and preparing the packaging.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Shipped</h3>
                    <p className="text-gray-600 mb-3">The package has left your facility and is in transit.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md border-l-4 border-l-purple-500">
                      <Truck className="text-purple-500 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Out for Delivery</span>
                        <span className="text-xs text-gray-500">A delivery challan has been generated. At this stage, you should ideally convert the Order into a finalized GST Invoice to formally recognize the sale.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Delivered</h3>
                    <p className="text-gray-600 mb-3">The final state of a successful transaction.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md border-l-4 border-l-emerald-500">
                      <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Completed</span>
                        <span className="text-xs text-gray-500">The customer has received the goods. The order is now locked and archived in your historical pipeline for reporting purposes.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/orders/create" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Create Orders</span>
                </div>
              </Link>

              <Link 
                href="/docs/orders/deliveries" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-orange-600">Manage Deliveries</span>
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