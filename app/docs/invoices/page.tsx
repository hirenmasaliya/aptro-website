"use client";

import { 
  ChevronRight, 
  FileText, 
  PackagePlus, 
  Percent, 
  Share2, 
  Home, 
  Menu, 
  Info,
  ArrowRight,
  Receipt
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/invoices", active: true },
  { name: "Add Products & Services", href: "/docs/invoices/add-products", active: false },
  { name: "Create an Invoice", href: "/docs/invoices/create", active: false },
  { name: "Configure GST Rates", href: "/docs/invoices/gst-setup", active: false },
  { name: "Share & Download Bills", href: "/docs/invoices/share", active: false },
];

const categoryTopics = [
  {
    title: "Add Products & Services",
    description: "Build your catalog with HSN/SAC codes, pricing, and default tax rates to speed up billing.",
    icon: <PackagePlus size={24} className="text-emerald-600" />,
    href: "/docs/invoices/add-products"
  },
  {
    title: "Create an Invoice",
    description: "Step-by-step guide to generating a professional, tax-compliant GST invoice for your customers.",
    icon: <Receipt size={24} className="text-blue-600" />,
    href: "/docs/invoices/create"
  },
  {
    title: "Configure GST Rates",
    description: "Set up intra-state (CGST/SGST) and inter-state (IGST) tax rules for your business operations.",
    icon: <Percent size={24} className="text-purple-600" />,
    href: "/docs/invoices/gst-setup"
  },
  {
    title: "Share & Download Bills",
    description: "Learn how to export invoices to PDF, print them, or share them directly via WhatsApp.",
    icon: <Share2 size={24} className="text-orange-600" />,
    href: "/docs/invoices/share"
  }
];

export default function GSTBillingLandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top App Bar */}
      <header className="sticky top-0 w-full h-16 border-b border-gray-200 bg-white/90 backdrop-blur-md z-50 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 lg:hidden text-gray-600">
            <Menu size={24} />
          </button>
          <Link href="/" className="flex items-center gap-2">
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
            <span className="text-gray-900">GST Billing & Invoices</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                GST Billing & Invoices
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Everything you need to know about managing your product catalog, generating tax-compliant GST invoices, and keeping your business records accurate.
              </p>
            </div>

            {/* Info Callout Box */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-indigo-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-indigo-900 mb-1">Compliance Check</h4>
                <p className="text-indigo-800 text-sm leading-relaxed">
                  Before creating your first invoice, ensure your Business Profile contains your correct GSTIN and Billing Address. Aptro uses this to determine if CGST/SGST or IGST should be applied to your transactions.
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
                    className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors w-fit">
                      {topic.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed mb-4 grow">
                      {topic.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-blue-600 mt-auto">
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