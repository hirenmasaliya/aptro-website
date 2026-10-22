"use client";

import { 
  ChevronRight, 
  CreditCard, 
  Home, 
  Menu, 
  Info,
  ArrowRight,
  Wallet,
  Scale,
  PieChart
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/payments", active: true },
  { name: "Record Payments", href: "/docs/payments/record", active: false },
  { name: "Outstanding Balances", href: "/docs/payments/outstanding", active: false },
  { name: "Business Reports", href: "/docs/payments/reports", active: false },
];

const categoryTopics = [
  {
    title: "Record Payments",
    description: "Log incoming cash, bank transfers, or UPI payments and allocate them against specific GST invoices.",
    icon: <Wallet size={24} className="text-teal-600" />,
    href: "/docs/payments/record"
  },
  {
    title: "Outstanding Balances",
    description: "Monitor customer ledgers, view unpaid bills, and generate account statements to follow up on pending dues.",
    icon: <Scale size={24} className="text-blue-600" />,
    href: "/docs/payments/outstanding"
  },
  {
    title: "Business Reports",
    description: "Generate and export comprehensive sales summaries, stock movement logs, and GST compliance reports.",
    icon: <PieChart size={24} className="text-indigo-600" />,
    href: "/docs/payments/reports"
  }
];

export default function PaymentsLandingPage() {
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
            <span className="text-gray-900">Payments & Reports</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Payments & Reports
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Keep a real-time pulse on your business's financial health. Aptro makes it simple to record customer payments, monitor outstanding ledgers, and export the exact reports you need for your tax filing.
              </p>
            </div>

            {/* Info Callout Box */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-teal-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-teal-900 mb-1">Automated Ledger Matching</h4>
                <p className="text-teal-800 text-sm leading-relaxed">
                  When you record a payment receipt in Aptro, you can allocate that amount directly against specific open invoices. The system will automatically update the invoice status from "Unpaid" to "Partial" or "Paid" and instantly reflect the new balance in the customer's ledger.
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
                    className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl hover:border-teal-300 hover:shadow-md transition-all group"
                  >
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-teal-50 transition-colors w-fit">
                      {topic.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed mb-4 grow">
                      {topic.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-teal-600 mt-auto">
                      Read article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-12 pb-20 border-t border-gray-200 mt-12 flex items-center justify-between">
              <div />
              <Link 
                href="/docs/payments/record" 
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all group"
              >
                <div className="text-right">
                  <span className="text-[12px] font-medium text-gray-500 uppercase tracking-wider block mb-1">Start Guide</span>
                  <span className="text-base font-medium text-teal-600">Record Payments</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </div>
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}