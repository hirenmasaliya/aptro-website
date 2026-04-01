"use client";

import { 
  Scale, 
  ShieldAlert, 
  CreditCard, 
  Ban, 
  Gavel, 
  FileCheck,
  ArrowRight,
  Info
} from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms", icon: <FileCheck size={16} /> },
  { id: "accounts", title: "User Accounts", icon: <Scale size={16} /> },
  { id: "billing", title: "Billing & Payments", icon: <CreditCard size={16} /> },
  { id: "restrictions", title: "Prohibited Conduct", icon: <Ban size={16} /> },
  { id: "termination", title: "Termination", icon: <ShieldAlert size={16} /> },
];

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 bg-[#050505] text-white selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="mb-16 border-b border-white/5 pb-12">
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <Gavel size={20} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Legal Framework</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-4">
            Terms of <span className="text-gray-500">Service</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            These terms govern your use of the Aptro platform. By using our services, 
            you agree to these rules. We&apos;ve tried to keep them as clear as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- Sidebar --- */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <div className="space-y-1">
              {sections.map((s) => (
                <a 
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  {s.icon}
                  {s.title}
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-3xl bg-[#0a0a0a] border border-white/5">
              <h4 className="text-sm font-bold mb-2">Need a PDF?</h4>
              <p className="text-xs text-gray-500 mb-4">Download a signed copy for your records.</p>
              <button className="text-xs font-bold text-blue-400 flex items-center gap-1 group">
                Download Terms (PDF) <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </aside>

          {/* --- Content --- */}
          <div className="lg:col-span-9 space-y-20">
            
            <section id="acceptance" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl text-emerald-400"><FileCheck size={24}/></div>
                <h2 className="text-3xl font-bold">Acceptance of Terms</h2>
              </div>
              <div className="prose prose-invert text-gray-400 leading-relaxed space-y-4">
                <p>
                  By accessing or using the Aptro App, you agree to be bound by these Terms and our Privacy Policy. 
                  If you are using Aptro on behalf of a business, that business accepts these terms.
                </p>
                <div className="flex gap-4 p-5 rounded-2xl bg-white/2 border border-white/5 italic text-sm">
                  <Info size={18} className="text-blue-500 shrink-0" />
                  <span><strong>Summary:</strong> Using Aptro means you agree to our rules. If you don&apos;t agree, please don&apos;t use the app.</span>
                </div>
              </div>
            </section>

            <section id="accounts" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-6">1. User Accounts</h2>
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  To use Aptro, you must create an account. You are responsible for maintaining the 
                  security of your account and password. Aptro cannot and will not be liable for any 
                  loss or damage from your failure to comply with this security obligation.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  <li className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a] text-xs text-gray-400">
                    <strong className="text-white block mb-1">Age Requirement</strong>
                    You must be at least 18 years old to use this service.
                  </li>
                  <li className="p-4 rounded-xl border border-white/5 bg-[#0a0a0a] text-xs text-gray-400">
                    <strong className="text-white block mb-1">Account Ownership</strong>
                    One person or legal entity may not maintain more than one free account.
                  </li>
                </ul>
              </div>
            </section>

            <section id="billing" className="scroll-mt-32">
              <div className="p-8 lg:p-12 rounded-[3rem] bg-linear-to-br from-blue-600/10 to-transparent border border-blue-500/20">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <CreditCard className="text-blue-400" /> Billing & Payments
                </h2>
                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <p>
                    Aptro offers both free and paid plans. All fees are exclusive of all taxes, levies, 
                    or duties imposed by taxing authorities. You are responsible for payment of all such 
                    taxes, levies, or duties.
                  </p>
                  <p className="font-bold text-white">Refunds:</p>
                  <p>
                    We offer a 14-day money-back guarantee on all new Pro subscriptions. After 14 days, 
                    payments are non-refundable, but you can cancel at any time to prevent future billing.
                  </p>
                </div>
              </div>
            </section>

            <section id="restrictions" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-6">2. Prohibited Conduct</h2>
              <p className="text-gray-400 mb-8">You agree not to engage in any of the following prohibited activities:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Reverse engineering our software.",
                  "Using the service for any illegal purposes.",
                  "Spamming or automated scraping of data.",
                  "Attempting to breach our security layers."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-sm text-gray-400">
                    <Ban size={14} className="text-red-400" />
                    {text}
                  </div>
                ))}
              </div>
            </section>

            <footer className="pt-20 border-t border-white/5 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-sm font-bold text-white mb-1">Have legal questions?</p>
                  <p className="text-xs text-gray-500">Contact us at legal@aptro.app</p>
                </div>
                <Link href="/contact" className="px-6 py-3 bg-white text-black rounded-full font-bold text-xs hover:bg-blue-500 hover:text-white transition-all">
                  Contact Support
                </Link>
              </div>
              <p className="mt-12 text-[10px] text-gray-600 uppercase tracking-widest">
                © 2026 Aptro Technologies Inc. • Version 1.2.0 • Last Revised: April 1, 2026
              </p>
            </footer>

          </div>
        </div>
      </div>
    </main>
  );
}