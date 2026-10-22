"use client";

import { 
  ChevronRight, 
  CreditCard, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  Scale,
  ListFilter,
  FileText,
  Send,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/payments", active: false },
  { name: "Record Payments", href: "/docs/payments/record", active: false },
  { name: "Outstanding Balances", href: "/docs/payments/outstanding", active: true },
  { name: "Business Reports", href: "/docs/payments/reports", active: false },
];

export default function OutstandingBalancesPage() {
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
            <span className="text-gray-900">Outstanding Balances</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Outstanding Balances & Ledgers
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Keeping track of your receivables is vital for healthy cash flow. Aptro consolidates all unpaid invoices into actionable dashboards, allowing you to view detailed customer ledgers and dispatch payment reminders effortlessly.
              </p>
            </div>

            {/* Tip Callout Box */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 flex gap-4 items-start">
              <Lightbulb className="text-teal-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-teal-900 mb-1">Aging Analysis</h4>
                <p className="text-teal-800 text-sm leading-relaxed">
                  Use the <strong>Aging Filters</strong> to categorize unpaid invoices by 30, 60, or 90+ days overdue. This helps your collections team prioritize follow-ups on the oldest and most critical pending accounts.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Managing receivables
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">View the Outstanding Dashboard</h3>
                    <p className="text-gray-600 mb-3">Navigate to <strong>Payments {">"} Outstanding Dues</strong> to see a high-level summary of all pending accounts.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <ListFilter className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Filter by Customer</span>
                        <span className="text-xs text-gray-500">The dashboard lists total receivables sorted by amount. Click on any customer's name to drill down into the specific invoices making up that balance.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Inspect the Customer Ledger</h3>
                    <p className="text-gray-600 mb-3">Review the historical flow of transactions.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Scale className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Debits vs. Credits</span>
                        <span className="text-xs text-gray-500">The Customer Ledger provides a chronological view of every GST invoice generated (debit) and every payment receipt allocated (credit), arriving at the exact closing balance.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Generate an Account Statement</h3>
                    <p className="text-gray-600 mb-3">Provide transparency to your clients regarding their dues.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <FileText className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Export PDF Statement</span>
                        <span className="text-xs text-gray-500">Select a date range and click <strong>Generate Statement</strong>. This creates a formal, printable PDF document summarizing all pending bills and recent payments.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Send Payment Reminders</h3>
                    <p className="text-gray-600 mb-3">Follow up with customers directly from the dashboard.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Send className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">One-Click Reminders</span>
                        <span className="text-xs text-gray-500">Click the <strong>WhatsApp</strong> or <strong>Email</strong> icon next to an outstanding invoice. Aptro will pre-fill a polite reminder message containing the pending amount and the PDF statement link.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/payments/record" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Record Payments</span>
                </div>
              </Link>

              <Link 
                href="/docs/payments/reports" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-teal-600">Business Reports</span>
                </div>
                <ArrowRight size={20} className="text-teal-600" />
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}