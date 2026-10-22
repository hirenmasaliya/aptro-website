"use client";

import { 
  ChevronRight, 
  Users, 
  Home, 
  Menu, 
  ArrowRight,
  ArrowLeft,
  CalendarClock,
  Clock,
  CalendarRange,
  Banknote,
  FileDown,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/settings", active: false },
  { name: "Manage Staff Access", href: "/docs/settings/staff", active: false },
  { name: "Attendance & Payroll", href: "/docs/settings/payroll", active: true },
  { name: "Subscription Tiers", href: "/docs/settings/subscriptions", active: false },
  { name: "Workspace Settings", href: "/docs/settings/workspace", active: false },
];

export default function AttendancePayrollPage() {
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
            <span className="text-gray-900">Attendance & Payroll</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Attendance & Payroll Management
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aptro provides an integrated HR module to track your employees' daily attendance, monitor working hours, and automatically generate accurate monthly payroll slips based on their logged shifts.
              </p>
            </div>

            {/* Tip Callout Box */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 flex gap-4 items-start">
              <Lightbulb className="text-purple-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-purple-900 mb-1">Automated Wage Calculation</h4>
                <p className="text-purple-800 text-sm leading-relaxed">
                  When you set up an employee profile, you define their base salary or hourly wage. Aptro's payroll engine uses their monthly attendance record to calculate exact pro-rated earnings, automatically adjusting for unpaid leaves or absences.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Managing staff time and pay
              </h2>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">1</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Log Daily Attendance</h3>
                    <p className="text-gray-600 mb-3">Record staff presence every day.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <CalendarRange className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Check-in / Check-out</span>
                        <span className="text-xs text-gray-500">Navigate to <strong>HR {">"} Attendance</strong>. You can manually mark staff as Present, Absent, or on Leave, or allow them to clock in using their own accounts.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">2</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Review Timesheets</h3>
                    <p className="text-gray-600 mb-3">Monitor working hours over the pay period.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Clock className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Monthly Overviews</span>
                        <span className="text-xs text-gray-500">View the Timesheet dashboard to see a calendar grid of all employee attendance, making it easy to spot trends or correct check-in mistakes before payday.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">3</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Process Payroll</h3>
                    <p className="text-gray-600 mb-3">Generate salary data at the end of the month.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <Banknote className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Add Bonuses & Deductions</span>
                        <span className="text-xs text-gray-500">Go to <strong>HR {">"} Payroll</strong>. Review the automatically calculated base pay, and manually add any performance bonuses, overtime, or tax deductions before finalizing.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">4</div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Distribute Payslips</h3>
                    <p className="text-gray-600 mb-3">Provide official documentation to your team.</p>
                    <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                      <FileDown className="text-gray-400 shrink-0" size={20} />
                      <div>
                        <span className="block font-medium text-gray-900 text-sm mb-1">Generate PDFs</span>
                        <span className="text-xs text-gray-500">Click <strong>Generate Payslip</strong> to create a professional PDF salary slip. You can print it or use the share button to email it directly to the employee.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Pagination Footer */}
            <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/docs/settings/staff" 
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="text-gray-400" />
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                  <span className="text-sm font-medium text-gray-900">Manage Staff Access</span>
                </div>
              </Link>

              <Link 
                href="/docs/settings/subscriptions" 
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all text-right w-full sm:w-auto"
              >
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next</span>
                  <span className="text-sm font-medium text-purple-600">Subscription Tiers</span>
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