"use client";

import { 
  ChevronRight, 
  CreditCard, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  PieChart,
  BarChart3,
  FileSpreadsheet,
  Download,
  Info,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/payments", active: false },
  { name: "Record Payments", href: "/docs/payments/record", active: false },
  { name: "Outstanding Balances", href: "/docs/payments/outstanding", active: false },
  { name: "Business Reports", href: "/docs/payments/reports", active: true },
];

export default function BusinessReportsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      
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
                <CreditCard size={18} className="text-teal-600" />
                Payments & Reports
             </h3>
          </div>
          <div className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`block px-6 py-2.5 text-[14px] transition-colors rounded-r-full mr-4 ${
                  link.active 
                  ? "bg-[#e0f2f1] text-[#00695c] font-medium" 
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
            <Link href="/docs/payments" className="hover:text-blue-600 transition-colors">Payments & Reports</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900">Business Reports</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Business Reports & GST Exports
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive reporting is the backbone of your business's compliance. Aptro automatically compiles your daily transactions into ready-to-file GST reports, sales summaries, and detailed financial logs.
              </p>
            </div>

            {/* Tip Callout Box */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-teal-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-teal-900 mb-1">One-Click Tax Filing preparation</h4>
                <p className="text-teal-800 text-sm leading-relaxed">
                  Aptro formats your sales data exactly as required by the government portal. You can export your GSTR-1 and GSTR-3B summary reports directly to Excel or CSV, saving hours of manual data entry during tax season.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Generating and exporting reports
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Access the Reports Hub</h3>
                    <p className="text-gray-600 mb-3">Navigate to <strong>Reports</strong> from the main dashboard sidebar.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <BarChart3 className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Date Filters</span>
                        <span className="text-xs text-gray-500">Use the date picker at the top to filter data by <em>This Month</em>, <em>Last Quarter</em>, or the entire <em>Financial Year</em> before generating any specific report.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Review Sales & Revenue</h3>
                    <p className="text-gray-600 mb-3">Analyze your business performance at a glance.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <TrendingUp className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Sales Summaries</span>
                        <span className="text-xs text-gray-500">View your overall revenue, top-selling products, and daily sales graphs. This section helps you understand cash flow trends outside of strict tax compliance.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Generate GST Reports</h3>
                    <p className="text-gray-600 mb-3">Pull specific reports required by your accountant.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <FileSpreadsheet className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">GSTR-1 & GSTR-2</span>
                        <span className="text-xs text-gray-500">Select the <strong>GSTR-1</strong> module for outward supplies (Sales). Aptro automatically separates your B2B invoices, B2C sales, and HSN summaries into distinct, compliant tables.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Download & Export</h3>
                    <p className="text-gray-600 mb-3">Save the data locally or share it directly.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Download className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Export Formats</span>
                        <span className="text-xs text-gray-500">Click the <strong>Export</strong> button on any report. Choose <em>PDF</em> for stakeholder meetings or visual records, and select <em>Excel/CSV</em> to send to your CA for tax filing.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/payments/outstanding" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Outstanding Balances</span>
                </div>
              </Link>

              {/* Linking to the next major module: Staff & Account Settings (Purple theme) */}
              <Link 
                href="/docs/settings" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all text-right w-full sm:w-auto group"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next Module</span>
                  <span className="text-sm font-medium text-purple-600">Staff & Account Settings</span>
                </div>
                <ArrowRight size={20} className="text-purple-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}