"use client";

import { 
  ChevronRight, 
  Users, 
  Home, 
  Menu, 
  ArrowLeft,
  Globe,
  Database,
  ClipboardList,
  AlertOctagon,
  Lightbulb,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/settings", active: false },
  { name: "Manage Staff Access", href: "/docs/settings/staff", active: false },
  { name: "Attendance & Payroll", href: "/docs/settings/payroll", active: false },
  { name: "Subscription Tiers", href: "/docs/settings/subscriptions", active: false },
  { name: "Workspace Settings", href: "/docs/settings/workspace", active: true },
];

export default function WorkspaceSettingsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-purple-100 selection:text-purple-900">
      
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
                <Users size={18} className="text-purple-600" />
                Staff & Settings
             </h3>
          </div>
          <div className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`block px-6 py-2.5 text-[14px] transition-colors rounded-r-full mr-4 ${
                  link.active 
                  ? "bg-[#f3e8fd] text-[#7b1fa2] font-medium" 
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
            <Link href="/docs/settings" className="hover:text-blue-600 transition-colors">Staff & Account Settings</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900">Workspace Settings</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Workspace Settings & Preferences
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Customize how your Aptro environment behaves globally. Configure system-wide localization formats, schedule automated data backups, and review comprehensive audit logs to maintain total visibility over your operations.
              </p>
            </div>

            {/* Tip Callout Box */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 flex gap-4 items-start">
              <Lightbulb className="text-purple-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-purple-900 mb-1">Total Accountability</h4>
                <p className="text-purple-800 text-sm leading-relaxed">
                  The Audit Log acts as a security camera for your data. Every time an invoice is edited, a payment is deleted, or stock is manually adjusted, the system securely logs the exact time, the action performed, and the specific staff member responsible.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Configuring your environment
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Set Global Preferences</h3>
                    <p className="text-gray-600 mb-3">Ensure your dates and currencies match your local standards.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Globe className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Localization Options</span>
                        <span className="text-xs text-gray-500">Navigate to <strong>Settings {">"} Workspace</strong>. Set your Timezone (e.g., Asia/Kolkata), default Currency (₹ INR), and Date Format (DD-MM-YYYY) for all reports and invoices.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Configure Automated Backups</h3>
                    <p className="text-gray-600 mb-3">Protect your financial records from accidental loss.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Database className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Backup Schedule</span>
                        <span className="text-xs text-gray-500">In the <em>Data Management</em> tab, you can schedule daily or weekly automated backups. Aptro will generate a secure `.csv` export of your entire database and email it to the primary administrator.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Review Audit Logs</h3>
                    <p className="text-gray-600 mb-3">Monitor activity across your entire organization.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <ClipboardList className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Activity Tracking</span>
                        <span className="text-xs text-gray-500">Access the <strong>Audit Log</strong> to filter and view system events. You can search by staff member name or event type (e.g., "Deleted Invoice") to quickly investigate discrepancies.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Danger Zone</h3>
                    <p className="text-gray-600 mb-3">Permanent workspace modification options.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <AlertOctagon className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Reset or Delete Account</span>
                        <span className="text-xs text-gray-500">Located at the very bottom of the Workspace settings. Use these tools to perform a "Factory Reset" (wiping all transactions but keeping settings) or to permanently delete your Aptro account.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer - End of Docs */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/settings/subscriptions" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Subscription Tiers</span>
                </div>
              </Link>

              <Link 
                href="/docs" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-right w-full sm:w-auto group"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Finish</span>
                  <span className="text-sm font-medium text-blue-600">Back to Help Center</span>
                </div>
                <CheckCircle className="text-blue-600" size={20} />
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}