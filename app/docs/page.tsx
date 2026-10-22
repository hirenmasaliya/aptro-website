"use client";

import { 
  Search, 
  PlayCircle, 
  FileText, 
  Package, 
  ShoppingCart, 
  CreditCard, 
  Users, 
  ExternalLink,
  Globe,
  Compass,
  Shield,
  FileCheck,
  Smartphone,
  X,
  ArrowRight,
  LifeBuoy,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

const popularSearches = ["GST setup", "Add new product", "Reset password", "E-way bill", "User roles"];

const helpSections = [
  {
    title: "Getting Started",
    description: "Create an account, set up your business profile, and configure business details.",
    icon: <PlayCircle size={24} className="text-blue-600" />,
    color: "blue",
    href: "/docs/getting-started"
  },
  {
    title: "GST Billing & Invoices",
    description: "Add products, create invoices, configure GST, download PDFs, and share bills.",
    icon: <FileText size={24} className="text-indigo-600" />,
    color: "indigo",
    href: "/docs/invoices"
  },
  {
    title: "Inventory & Products",
    description: "Manage product details, stock quantities, purchases, returns, and stock adjustments.",
    icon: <Package size={24} className="text-emerald-600" />,
    color: "emerald",
    href: "/docs/inventory"
  },
  {
    title: "Order Management",
    description: "Create orders, track order status, and manage deliveries.",
    icon: <ShoppingCart size={24} className="text-orange-600" />,
    color: "orange",
    href: "/docs/orders"
  },
  {
    title: "Payments & Reports",
    description: "Record payments, manage outstanding balances, and review business reports.",
    icon: <CreditCard size={24} className="text-teal-600" />,
    color: "teal",
    href: "/docs/payments"
  },
  {
    title: "Staff & Account Settings",
    description: "Manage staff access, attendance, payroll, subscriptions, and account settings.",
    icon: <Users size={24} className="text-purple-600" />,
    color: "purple",
    href: "/docs/settings"
  }
];

const helpfulLinks = [
  { name: "Official Aptro website", icon: <Globe size={18} />, href: "https://aptro.vercel.app" },
  { name: "Explore features", icon: <Compass size={18} />, href: "/features" },
  { name: "Privacy policy", icon: <Shield size={18} />, href: "/privacy" },
  { name: "Terms of service", icon: <FileCheck size={18} />, href: "/terms" },
  { name: "Download Aptro for Android", icon: <Smartphone size={18} />, href: "/download" },
];

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900 pb-24">
      
      {/* Top App Bar */}
      <header className="sticky top-0 w-full h-16 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl z-50 flex items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <Link href="/docs" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
              <LifeBuoy className="text-white" size={18} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-semibold tracking-tight text-gray-900 hidden sm:block">Aptro Support</span>
          </Link>
        </div>
        
        <Link 
          href="/" 
          className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2 bg-gray-100/50 hover:bg-gray-100 px-4 py-2 rounded-full transition-all border border-gray-200/50"
          title="Return to Application"
        >
          <X size={16} className="text-gray-500" />
          Close Support
        </Link>
      </header>

      {/* Hero Search Section with Subtle Radial Gradient */}
      <section className="relative overflow-hidden bg-white border-b border-gray-200/80 pt-24 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            How can we help you today?
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            Search our knowledge base or browse categories below to find what you need.
          </p>
          
          <div className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={22} />
            <input 
              type="text" 
              placeholder="Search for articles, guides, or features..." 
              className="w-full bg-white border border-gray-200 hover:border-gray-300 focus:border-blue-500 rounded-2xl py-4 pl-14 pr-16 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-[4px] focus:ring-blue-500/10 transition-all shadow-sm"
            />
            {/* Keyboard Shortcut Hint */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs font-sans text-gray-500 font-medium">⌘</kbd>
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs font-sans text-gray-500 font-medium">K</kbd>
            </div>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-gray-500 mr-2 font-medium">Popular:</span>
            {popularSearches.map((term, idx) => (
              <button 
                key={idx}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Documentation Categories (Takes up 8 columns on large screens) */}
        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Browse Categories</h2>
          
          <div className="grid sm:grid-cols-2 gap-5">
            {helpSections.map((section, idx) => (
              <Link 
                key={idx}
                href={section.href}
                className="group flex flex-col p-6 bg-white border border-gray-200 rounded-2xl hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`mb-5 inline-flex p-3.5 rounded-xl bg-${section.color}-50 group-hover:bg-${section.color}-100 transition-colors w-fit`}>
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-6 grow">
                  {section.description}
                </p>
                <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-blue-600 transition-colors mt-auto">
                  View articles <ArrowRight size={16} className="ml-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Helpful Links & Support Widget (Takes up 4 columns on large screens) */}
        <div className="lg:col-span-4 space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Helpful Resources</h2>
          
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <nav className="flex flex-col divide-y divide-gray-100">
              {helpfulLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  className="flex items-center justify-between p-4 text-[14px] text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 group-hover:text-blue-500 transition-colors">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </div>
                  <ExternalLink size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Support Widget */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <MessageSquare size={100} />
            </div>
            <div className="relative z-10">
              <div className="inline-flex p-2 bg-white/20 rounded-lg mb-4 backdrop-blur-sm">
                <MessageSquare size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Still need help?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Can't find the answer you're looking for? Our dedicated support team is ready to assist you with your workspace.
              </p>
              <button className="w-full py-2.5 px-4 bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm rounded-xl transition-colors shadow-sm">
                Contact Support
              </button>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}