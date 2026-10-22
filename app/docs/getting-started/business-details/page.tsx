"use client";

import { 
  ChevronRight, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  Settings,
  Calendar,
  Hash,
  Landmark,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
    { name: "Overview", href: "/docs/getting-started", active: false },
  { name: "Create an account", href: "/docs/getting-started/create-account", active: false },
  { name: "Set up business profile", href: "/docs/getting-started/business-profile", active: false },
  { name: "Configure business details", href: "/docs/getting-started/business-details", active: true },
  { name: "Verify email and phone", href: "/docs/getting-started/verification", active: false },
];

export default function ConfigureBusinessDetailsPage() {
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
        
        {/* Left Sidebar (Category Specific) */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-gray-200 bg-white h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto py-8">
          <div className="mb-6 px-6">
             <h3 className="text-sm font-bold tracking-wider uppercase text-gray-900">Getting Started</h3>
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
            <Link href="/docs/getting-started" className="hover:text-blue-600 transition-colors">Getting Started</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900">Configure business details</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Configure business details
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                While your Business Profile handles your identity, your Business Details govern how Aptro operates financially. Setting up your financial year, invoice prefixes, and bank details ensures your billing runs smoothly and professionally.
              </p>
            </div>

            {/* Info Callout Box (Material Style) */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 flex gap-4 items-start">
              <Lightbulb className="text-purple-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-purple-900 mb-1">Pro Tip: Invoice Numbering Rules</h4>
                <p className="text-purple-800 text-sm leading-relaxed">
                  GST compliance requires invoice numbers to be sequential and unique for a given financial year. Setting a clear prefix (like <strong>INV/26-27/</strong>) helps you avoid duplication and makes auditing much easier.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Financial configuration steps
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Access Financial Settings</h3>
                    <p className="text-gray-600 mb-4">From the left sidebar of your dashboard, click <strong>Settings</strong>, and then navigate to the <strong>Financial Details</strong> tab.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Set Dates and Prefixes</h3>
                    <p className="text-gray-600 mb-4">Configure how Aptro generates numbers and records periods:</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50">
                        <Calendar className="text-gray-400 shrink-0" size={20} />
                        <div>
                          <span className="block font-medium text-gray-900 text-sm mb-1">Financial Year Setup</span>
                          <span className="text-xs text-gray-500">Select your starting month (e.g., April) to automatically generate FY boundaries.</span>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50">
                        <Hash className="text-gray-400 shrink-0" size={20} />
                        <div>
                          <span className="block font-medium text-gray-900 text-sm mb-1">Voucher Prefixes</span>
                          <span className="text-xs text-gray-500">Define default prefixes for Invoices, Receipts, and Purchase Orders.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Add Payment & Bank Details</h3>
                    <p className="text-gray-600 mb-4">Providing these details will automatically append them to the bottom of all your generated PDF invoices, helping you get paid faster.</p>
                    
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Landmark className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Bank Information</span>
                        <span className="text-xs text-gray-500">Enter your Bank Name, Account Number, IFSC Code, and a primary UPI ID or QR code image.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Save Configuration</h3>
                    <p className="text-gray-600">Review your settings and click the <strong>Save Settings</strong> button. Your invoices will now use these formats going forward.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/getting-started/business-profile" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Set up business profile</span>
                </div>
              </Link>

              <Link 
                href="/docs/getting-started/verification" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-blue-600">Verify email and phone</span>
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