"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import { 
  LayoutDashboard, 
  ShoppingCart,
  Receipt,
  Package,
  Layers,
  Store,
  CreditCard,
  Wallet,
  BarChart3,
  Users,
  Contact,
  Clock,
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu,
  X
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

// Grouped navigation items for a cleaner OS-like sidebar
const navGroups = [
  {
    title: "Workspace",
    items: [
      { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
      { name: "Orders", icon: ShoppingCart, href: "/dashboard/orders" },
      { name: "Invoices", icon: Receipt, href: "/dashboard/invoices" },
    ]
  },
  {
    title: "Inventory & Vendors",
    items: [
      { name: "Products", icon: Package, href: "/dashboard/products" },
      { name: "Stocks", icon: Layers, href: "/dashboard/stocks" },
      { name: "Vendors", icon: Store, href: "/dashboard/vendors" },
    ]
  },
  {
    title: "Finance",
    items: [
      { name: "Payments", icon: CreditCard, href: "/dashboard/payments" },
      { name: "Payroll", icon: Wallet, href: "/dashboard/payroll" },
      { name: "Reports", icon: BarChart3, href: "/dashboard/reports" },
    ]
  },
  {
    title: "Team & CRM",
    items: [
      { name: "Customers", icon: Contact, href: "/dashboard/customers" },
      { name: "Users", icon: Users, href: "/dashboard/users" },
      { name: "Attendance", icon: Clock, href: "/dashboard/attendance" },
    ]
  },
  {
    title: "System",
    items: [
      { name: "Settings", icon: Settings, href: "/dashboard/settings" },
    ]
  }
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  // Helper to find current page name for header
  const currentRouteName = navGroups
    .flatMap(group => group.items)
    .find(item => item.href === pathname)?.name || "Dashboard";

  return (
    <div className={`min-h-screen bg-[#F8F9FA] flex ${jakarta.className}`}>
      
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:flex w-[260px] flex-col bg-white border-r border-[#DADCE0] fixed h-full z-20">
        <div className="h-16 flex items-center px-6 border-b border-[#DADCE0] shrink-0">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white border border-[#DADCE0] rounded-lg flex items-center justify-center shadow-sm">
              <Image src="/aptro_logo.png" alt="Aptro Logo" width={20} height={20} />
            </div>
            <span className="text-[18px] font-semibold text-[#1F1F1F] tracking-tight">Aptro OS</span>
          </Link>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 py-6 px-4 overflow-y-auto custom-scrollbar">
          {navGroups.map((group, idx) => (
            <div key={group.title} className={idx !== 0 ? "mt-6" : ""}>
              <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-[#80868B] mb-2">
                {group.title}
              </p>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                        isActive 
                          ? "bg-[#E8F0FE] text-[#1A73E8]" 
                          : "text-[#444746] hover:bg-[#F1F3F4] hover:text-[#1F1F1F]"
                      }`}
                    >
                      <Icon size={18} className={isActive ? "text-[#1A73E8]" : "text-[#5F6368]"} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-[#DADCE0] shrink-0">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#444746] hover:bg-[#FCE8E6] hover:text-[#D93025] transition-colors group">
            <LogOut size={18} className="text-[#5F6368] group-hover:text-[#D93025]" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ================= MOBILE SIDEBAR ================= */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileSidebarOpen(false)} />
          <aside className="absolute top-0 left-0 w-[260px] h-full bg-white border-r border-[#DADCE0] flex flex-col shadow-2xl">
            <div className="h-16 flex items-center justify-between px-6 border-b border-[#DADCE0] shrink-0">
              <div className="flex items-center gap-2.5">
                <Image src="/aptro_logo.png" alt="Aptro Logo" width={24} height={24} />
                <span className="text-[18px] font-semibold text-[#1F1F1F]">Aptro OS</span>
              </div>
              <button onClick={() => setIsMobileSidebarOpen(false)} className="p-2 text-[#5F6368]">
                <X size={20} />
              </button>
            </div>
            
            {/* Scrollable Navigation Area (Mobile) */}
            <div className="flex-1 py-6 px-4 overflow-y-auto">
              {navGroups.map((group, idx) => (
                <div key={group.title} className={idx !== 0 ? "mt-6" : ""}>
                  <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-[#80868B] mb-2">
                    {group.title}
                  </p>
                  <div className="space-y-0.5">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                            isActive 
                              ? "bg-[#E8F0FE] text-[#1A73E8]" 
                              : "text-[#444746] hover:bg-[#F1F3F4] hover:text-[#1F1F1F]"
                          }`}
                        >
                          <Icon size={18} className={isActive ? "text-[#1A73E8]" : "text-[#5F6368]"} />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-[#DADCE0] shrink-0">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#444746] hover:bg-[#FCE8E6] hover:text-[#D93025] transition-colors group">
                <LogOut size={18} className="text-[#5F6368] group-hover:text-[#D93025]" />
                Sign Out
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="flex-1 lg:ml-[260px] flex flex-col min-h-screen">
        
        {/* Persistent Top Header */}
        <header className="h-16 bg-white border-b border-[#DADCE0] flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 -ml-2 text-[#5F6368] hover:bg-[#F1F3F4] rounded-lg"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <h1 className="text-[18px] font-semibold text-[#1F1F1F] hidden sm:block">
              {currentRouteName}
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative hidden md:block w-[300px]">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6368]" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-9 pr-4 py-2 bg-[#F1F3F4] border-none rounded-full text-[13px] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/30 transition-all"
              />
            </div>
            
            <button className="relative p-2 text-[#5F6368] hover:bg-[#F1F3F4] rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#D93025] rounded-full border border-white"></span>
            </button>
            
            <div className="w-8 h-8 rounded-full bg-[#1A73E8] text-white flex items-center justify-center text-[13px] font-medium cursor-pointer shadow-sm">
              JD
            </div>
          </div>
        </header>

        {/* Inject Page Content Here */}
        <main className="flex-1 p-4 sm:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* Global Style for scrollbar if you want it extra clean */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #DADCE0;
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #BDC1C6;
        }
      `}} />
    </div>
  );
}