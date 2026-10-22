"use client";

import { 
  ChevronRight, 
  Users, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  UserPlus,
  Shield,
  MailCheck,
  UserX,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/settings", active: false },
  { name: "Manage Staff Access", href: "/docs/settings/staff", active: true },
  { name: "Attendance & Payroll", href: "/docs/settings/payroll", active: false },
  { name: "Subscription Tiers", href: "/docs/settings/subscriptions", active: false },
  { name: "Workspace Settings", href: "/docs/settings/workspace", active: false },
];

export default function ManageStaffAccessPage() {
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
            <span className="text-gray-900">Manage Staff Access</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Manage Staff Access & Roles
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                As your business grows, you'll need to delegate tasks. Aptro allows you to invite employees to your workspace and restrict their access using strict Role-Based Access Control (RBAC), ensuring sensitive financial data remains secure.
              </p>
            </div>

            {/* Tip Callout Box */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 flex gap-4 items-start">
              <Lightbulb className="text-purple-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-purple-900 mb-1">Understanding Roles</h4>
                <p className="text-purple-800 text-sm leading-relaxed">
                  <strong>Cashier:</strong> Can only create invoices and view daily sales.<br />
                  <strong>Inventory Manager:</strong> Can manage stock, POs, and returns, but cannot view financial reports.<br />
                  <strong>Accountant:</strong> Can record payments, view ledgers, and export tax reports.<br />
                  <strong>Admin:</strong> Full unrestricted access, including subscription management.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Adding and managing team members
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Invite a New User</h3>
                    <p className="text-gray-600 mb-3">Navigate to <strong>Settings {">"} Staff Management</strong> and click <span className="inline-block px-2 py-0.5 bg-purple-600 text-white rounded text-xs font-medium">+ Invite Staff</span>.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <UserPlus className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Enter Details</span>
                        <span className="text-xs text-gray-500">Provide their full name and official email address. This email will act as their unique login ID.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Assign Permissions</h3>
                    <p className="text-gray-600 mb-3">Select the appropriate access level before sending the invite.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Shield className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Select a Role</span>
                        <span className="text-xs text-gray-500">Choose from the dropdown menu (e.g., Cashier, Inventory Manager). The system will automatically lock them out of unauthorized modules.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">User Acceptance</h3>
                    <p className="text-gray-600 mb-3">The employee must securely accept the invitation.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <MailCheck className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Email Verification</span>
                        <span className="text-xs text-gray-500">The staff member will receive an email link to join your workspace. They will be prompted to set their own secure password.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Revoke or Edit Access</h3>
                    <p className="text-gray-600 mb-3">You retain full control over active accounts.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <UserX className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Suspend Users</span>
                        <span className="text-xs text-gray-500">If an employee leaves, simply click <strong>Revoke Access</strong> next to their name. They will be instantly logged out and barred from logging back in.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/settings" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Staff & Settings Overview</span>
                </div>
              </Link>

              <Link 
                href="/docs/settings/payroll" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-purple-600">Attendance & Payroll</span>
                </div>
                <ArrowRight size={20} className="text-purple-600" />
              </Link>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}