"use client";

import {
    ChevronRight,
    Home,
    Menu,
    ArrowRight,
    ArrowLeft,
    Mail,
    Smartphone,
    ShieldCheck,
    BellRing
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
    { name: "Overview", href: "/docs/getting-started", active: false },
    { name: "Create an account", href: "/docs/getting-started/create-account", active: false },
    { name: "Set up business profile", href: "/docs/getting-started/business-profile", active: false },
    { name: "Configure business details", href: "/docs/getting-started/business-details", active: false },
    { name: "Verify email and phone", href: "/docs/getting-started/verification", active: true },
];

export default function VerifyContactPage() {
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
                                className={`block px-6 py-2.5 text-[14px] transition-colors rounded-r-full mr-4 ${link.active
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
                        <span className="text-gray-900">Verify email and phone</span>
                    </nav>

                    <div className="space-y-10">

                        {/* Header */}
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-normal tracking-tight text-gray-900 mb-4">
                                Verify email and phone
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Secure your Aptro workspace and enable automated role-based notifications by verifying your contact information. This ensures you never miss critical alerts regarding orders, subscriptions, or compliance deadlines.
                            </p>
                        </div>

                        {/* Info Callout Box (Material Style) */}
                        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex gap-4 items-start">
                            <ShieldCheck className="text-emerald-600 shrink-0 mt-0.5" size={24} />
                            <div>
                                <h4 className="font-medium text-emerald-900 mb-1">Security & Notifications</h4>
                                <p className="text-emerald-800 text-sm leading-relaxed">
                                    Verification serves a dual purpose: it protects your admin account from unauthorized access and activates your notification pipelines. Invoices and supplier alerts cannot be routed to unverified channels.
                                </p>
                            </div>
                        </div>

                        {/* Step-by-Step Instructions */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-medium text-gray-900 border-b border-gray-200 pb-2">
                                Verification process
                            </h2>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Navigate to Security Settings</h3>
                                        <p className="text-gray-600 mb-4">Click your profile avatar in the top right corner of the dashboard, select <strong>Account Settings</strong>, and open the <strong>Security & Contact</strong> tab.</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Verify Contact Channels</h3>
                                        <p className="text-gray-600 mb-4">You will need access to your inbox and mobile device for this step.</p>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50">
                                                <Mail className="text-gray-400 shrink-0" size={20} />
                                                <div>
                                                    <span className="block font-medium text-gray-900 text-sm mb-1">Email Verification</span>
                                                    <span className="text-xs text-gray-500">Click <em>Send Link</em>. Open the email from Aptro and click the secure verification button.</span>
                                                </div>
                                            </div>
                                            <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50">
                                                <Smartphone className="text-gray-400 shrink-0" size={20} />
                                                <div>
                                                    <span className="block font-medium text-gray-900 text-sm mb-1">Mobile OTP</span>
                                                    <span className="text-xs text-gray-500">Enter your mobile number, click <em>Send OTP</em>, and input the 6-digit code you receive via SMS.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Configure Notification Roles</h3>
                                        <p className="text-gray-600 mb-4">Once verified, you can toggle which alerts are routed to these channels.</p>

                                        <div className="border border-gray-200 rounded-xl p-4 flex gap-3 bg-gray-50 max-w-md">
                                            <BellRing className="text-gray-400 shrink-0" size={20} />
                                            <div>
                                                <span className="block font-medium text-gray-900 text-sm mb-1">Notification Preferences</span>
                                                <span className="text-xs text-gray-500">Scroll down to the <em>Alert Routing</em> section. You can toggle SMS and Email notifications on/off for specific events like New Orders, Low Inventory, and Subscription Renewals.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Pagination Footer */}
                        <div className="pt-8 mt-12 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link
                                href="/docs/getting-started/business-details"
                                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto"
                            >
                                <ArrowLeft size={20} className="text-gray-400" />
                                <div>
                                    <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Previous</span>
                                    <span className="text-sm font-medium text-gray-900">Configure business details</span>
                                </div>
                            </Link>

                            <Link
                                href="/docs/invoices"
                                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all text-right w-full sm:w-auto group"
                            >
                                <div>
                                    <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block mb-0.5">Next Module</span>
                                    <span className="text-sm font-medium text-indigo-600">GST Billing & Invoices</span>
                                </div>
                                <ArrowRight size={20} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </article>
            </div>
        </main>
    );
}