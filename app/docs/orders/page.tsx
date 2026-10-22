"use client";

import { 
  ChevronRight, 
  ShoppingCart, 
  Home, 
  Menu, 
  Info,
  ArrowRight,
  ClipboardEdit,
  Activity,
  Truck
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/orders", active: true },
  { name: "Create Orders", href: "/docs/orders/create", active: false },
  { name: "Track Order Status", href: "/docs/orders/tracking", active: false },
  { name: "Manage Deliveries", href: "/docs/orders/deliveries", active: false },
];

const categoryTopics = [
  {
    title: "Create Orders",
    description: "Log new customer requests and draft B2B/B2C orders before finalizing them into official GST invoices.",
    icon: <ClipboardEdit size={24} className="text-orange-600" />,
    href: "/docs/orders/create"
  },
  {
    title: "Track Order Status",
    description: "Monitor your sales pipeline with real-time statuses: Pending, Processing, Shipped, and Delivered.",
    icon: <Activity size={24} className="text-blue-600" />,
    href: "/docs/orders/tracking"
  },
  {
    title: "Manage Deliveries",
    description: "Coordinate dispatches, generate delivery challans, and track final handoffs to your customers.",
    icon: <Truck size={24} className="text-emerald-600" />,
    href: "/docs/orders/deliveries"
  }
];

export default function OrderManagementLandingPage() {
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
            <span className="text-gray-900">Order Management</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Order Management Pipeline
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Streamline your sales process from the initial customer request to the final delivery. Aptro's order pipeline helps you organize fulfillments, prevent missed shipments, and seamlessly convert completed orders into official GST invoices.
              </p>
            </div>

            {/* Info Callout Box */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-orange-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-orange-900 mb-1">Orders vs. Invoices</h4>
                <p className="text-orange-800 text-sm leading-relaxed">
                  An <strong>Order</strong> is a temporary state representing a customer's request and does not impact your final GST tax liability. Once the goods are ready to be dispatched, you can convert the Order into a legally binding <strong>GST Invoice</strong> with a single click.
                </p>
              </div>
            </div>

            {/* Topic Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Explore topics
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {categoryTopics.map((topic, idx) => (
                  <Link 
                    key={idx}
                    href={topic.href}
                    className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl hover:border-orange-300 hover:shadow-md transition-all group"
                  >
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-orange-50 transition-colors w-fit">
                      {topic.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed mb-4 grow">
                      {topic.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-orange-600 mt-auto">
                      Read article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}