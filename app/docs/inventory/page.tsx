"use client";

import { 
  ChevronRight, 
  Package, 
  Home, 
  Menu, 
  Info,
  ArrowRight,
  Boxes,
  Truck,
  RotateCcw,
  Bell
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/inventory", active: true },
  { name: "Manage Stock Quantities", href: "/docs/inventory/stock-management", active: false },
  { name: "Purchase Orders", href: "/docs/inventory/purchase-orders", active: false },
  { name: "Supplier Returns", href: "/docs/inventory/returns", active: false },
  { name: "Low Stock Alerts", href: "/docs/inventory/alerts", active: false },
];

const categoryTopics = [
  {
    title: "Manage Stock Quantities",
    description: "Track incoming and outgoing items, perform manual stock adjustments, and view complete stock history.",
    icon: <Boxes size={24} className="text-emerald-600" />,
    href: "/docs/inventory/stock-management"
  },
  {
    title: "Purchase Orders",
    description: "Create POs for your suppliers and automatically update your inventory levels upon receiving goods.",
    icon: <Truck size={24} className="text-blue-600" />,
    href: "/docs/inventory/purchase-orders"
  },
  {
    title: "Supplier Returns",
    description: "Process debit notes and accurately record inventory that is sent back to your suppliers.",
    icon: <RotateCcw size={24} className="text-orange-600" />,
    href: "/docs/inventory/returns"
  },
  {
    title: "Low Stock Alerts",
    description: "Set minimum threshold levels and receive role-based notifications when inventory runs low.",
    icon: <Bell size={24} className="text-purple-600" />,
    href: "/docs/inventory/alerts"
  }
];

export default function InventoryLandingPage() {
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
            <Link href="/" className="hover:text-blue-600 transition-colors">Help Center</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900">Inventory & Products</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Inventory & Products
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Take control of your warehouse and stock levels. Aptro's inventory system automatically syncs with your GST billing and purchase orders to ensure you always know exactly what's on your shelves.
              </p>
            </div>

            {/* Info Callout Box */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-emerald-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-emerald-900 mb-1">Automated Stock Sync</h4>
                <p className="text-emerald-800 text-sm leading-relaxed">
                  Whenever you generate a GST invoice, Aptro automatically deducts the sold quantities from your inventory. Similarly, processing a Purchase Order will instantly replenish your stock levels.
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
                    className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl hover:border-emerald-300 hover:shadow-md transition-all group"
                  >
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-emerald-50 transition-colors w-fit">
                      {topic.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed mb-4 grow">
                      {topic.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-emerald-600 mt-auto">
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