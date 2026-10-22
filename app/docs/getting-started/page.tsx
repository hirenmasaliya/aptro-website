"use client";

import { 
  ChevronRight, 
  PlayCircle, 
  UserPlus, 
  Building2, 
  Settings, 
  ShieldCheck, 
  Home, 
  Menu, 
  Info,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Overview", href: "/docs/getting-started", active: true },
  { name: "Create an account", href: "/docs/getting-started/create-account", active: false },
  { name: "Set up business profile", href: "/docs/getting-started/business-profile", active: false },
  { name: "Configure business details", href: "/docs/getting-started/business-details", active: false },
  { name: "Verify email and phone", href: "/docs/getting-started/verification", active: false },
];

const categoryTopics = [
  {
    title: "Create an account",
    description: "Register your primary administrator account to initialize your Aptro workspace.",
    icon: <UserPlus size={24} className="text-blue-600" />,
    href: "/docs/getting-started/create-account"
  },
  {
    title: "Set up business profile",
    description: "Add your legal entity name, GSTIN, and company logo for official tax-compliant invoices.",
    icon: <Building2 size={24} className="text-indigo-600" />,
    href: "/docs/getting-started/business-profile"
  },
  {
    title: "Configure business details",
    description: "Set up your financial year, currency preferences, and default invoice prefixes.",
    icon: <Settings size={24} className="text-purple-600" />,
    href: "/docs/getting-started/business-details"
  },
  {
    title: "Verify email and phone",
    description: "Secure your account and enable critical role-based notifications via SMS and Email.",
    icon: <ShieldCheck size={24} className="text-emerald-600" />,
    href: "/docs/getting-started/verification"
  }
];

export default function GettingStartedLandingPage() {
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
        
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-gray-200 bg-white h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto py-8">
          <div className="mb-6 px-6">
             <h3 className="text-sm font-bold tracking-wider uppercase text-gray-900 flex items-center gap-2">
                <PlayCircle size={18} className="text-blue-600" />
                Getting Started
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
            <span className="text-gray-900">Getting Started</span>
          </nav>

          <div className="space-y-10">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                Getting Started with Aptro
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome aboard! Before you dive into GST billing, automated inventory, and OCR invoice extraction, follow these fundamental steps to properly configure your business workspace.
              </p>
            </div>

            {/* Info Callout Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4 items-start">
              <Info className="text-blue-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Onboarding Checklist</h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  We highly recommend completing all four steps in this section before generating any invoices. Accurate business details ensure that your GST ledgers and tax compliance reports are calculated perfectly from day one.
                </p>
              </div>
            </div>

            {/* Topic Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                Setup guide
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

            {/* Pagination Footer */}
            <div className="pt-12 pb-20 border-t border-gray-200 mt-12 flex items-center justify-between">
              <div />
              <Link 
                href="/docs/getting-started/create-account" 
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <div className="text-right">
                  <span className="text-[12px] font-medium text-gray-500 uppercase tracking-wider block mb-1">Start Step 1</span>
                  <span className="text-base font-medium text-blue-600">Create an account</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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