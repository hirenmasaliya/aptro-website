"use client";

import { 
  ChevronRight, 
  Users, 
  Home, 
  Menu, 
  Info,
  ArrowRight,
  UserCog,
  CalendarClock,
  Crown,
  Settings
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/settings", active: true },
  { name: "Manage Staff Access", href: "/docs/settings/staff", active: false },
  { name: "Attendance & Payroll", href: "/docs/settings/payroll", active: false },
  { name: "Subscription Tiers", href: "/docs/settings/subscriptions", active: false },
  { name: "Workspace Settings", href: "/docs/settings/workspace", active: false },
];

const categoryTopics = [
  {
    title: "Manage Staff Access",
    description: "Invite team members and assign role-based access to restrict sensitive financial and inventory data.",
    icon: <UserCog size={24} className="text-purple-600" />,
    href: "/docs/settings/staff"
  },
  {
    title: "Attendance & Payroll",
    description: "Log daily staff attendance, track working hours, and automatically generate monthly payroll slips.",
    icon: <CalendarClock size={24} className="text-blue-600" />,
    href: "/docs/settings/payroll"
  },
  {
    title: "Subscription Tiers",
    description: "Upgrade your Aptro plan, manage billing limits, and unlock advanced multi-tenant features.",
    icon: <Crown size={24} className="text-amber-500" />,
    href: "/docs/settings/subscriptions"
  },
  {
    title: "Workspace Settings",
    description: "Configure system-wide preferences, manage automated backups, and review audit logs.",
    icon: <Settings size={24} className="text-emerald-600" />,
    href: "/docs/settings/workspace"
  }
];

export default function StaffSettingsLandingPage() {
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
            <span className="text-gray-900">Staff & Account Settings</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Staff & Account Settings
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Scale your operations securely. In this section, you will learn how to manage your Aptro subscription, add employees to your workspace, restrict their access permissions, and track daily staff attendance.
              </p>
            </div>

            {/* Info Callout Box */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-purple-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-purple-900 mb-1">Role-Based Access Control (RBAC)</h4>
                <p className="text-purple-800 text-sm leading-relaxed">
                  As the workspace owner, you have full control over what your team can see and do. You can assign a "Cashier" role that can only generate invoices, while reserving "Admin" privileges for accessing financial reports and subscription settings.
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
                    className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-md transition-all group"
                  >
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-purple-50 transition-colors w-fit">
                      {topic.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed mb-4 grow">
                      {topic.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-purple-600 mt-auto">
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
                href="/docs/settings/staff" 
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all group"
              >
                <div className="text-right">
                  <span className="text-[12px] font-medium text-gray-500 uppercase tracking-wider block mb-1">Start Guide</span>
                  <span className="text-base font-medium text-purple-600">Manage Staff Access</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
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