"use client";

import { 
  Scale, 
  ShieldAlert, 
  CreditCard, 
  Ban, 
  Gavel, 
  FileCheck,
  ArrowRight,
  Info,
  Download
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  { id: "acceptance", title: "Acceptance", icon: <FileCheck size={14} /> },
  { id: "accounts", title: "User Accounts", icon: <Scale size={14} /> },
  { id: "billing", title: "Billing & Fees", icon: <CreditCard size={14} /> },
  { id: "restrictions", title: "Conduct", icon: <Ban size={14} /> },
  { id: "termination", title: "Termination", icon: <ShieldAlert size={14} /> },
];

export default function TermsPage() {
  return (
    <main className="pt-40 pb-20 bg-white text-zinc-950 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* Subtle Background Dynamics */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-600 mb-10"
          >
            <Gavel size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sovereign Framework</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-zinc-950"
          >
            Terms of <br /><span className="text-zinc-400 italic">Service.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
          >
            These protocols define the relationship between Aptro and your business. 
            We have architected these rules to be as transparent and fair as possible.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- Sticky Sidebar Navigation --- */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-40 h-fit">
            <div className="space-y-1 border-l-2 border-zinc-100 pl-6">
              <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] mb-8 ml-2">Governance</p>
              {sections.map((s) => (
                <a 
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-4 px-2 py-3 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-all hover:translate-x-1"
                >
                  {s.title}
                </a>
              ))}
            </div>
            
            <div className="mt-20 p-8 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest mb-3 text-zinc-950">Record Keeping</h4>
              <p className="text-zinc-400 text-[11px] font-medium leading-relaxed mb-8 uppercase tracking-tight">Need an offline copy for your legal archives?</p>
              <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 group border-b border-blue-100 pb-1 w-fit">
                Download PDF <Download size={12} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </aside>

          {/* --- Main Content Area --- */}
          <div className="lg:col-span-9 space-y-32">
            
            <section id="acceptance" className="scroll-mt-40">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-zinc-50 rounded-2xl text-blue-600 shadow-sm border border-zinc-100"><FileCheck size={24}/></div>
                <h2 className="text-4xl font-black tracking-tighter">Acceptance of Protocol</h2>
              </div>
              <div className="text-zinc-500 leading-relaxed space-y-6 text-lg font-medium">
                <p>
                  By initializing an account within the Aptro ecosystem, you execute a binding agreement to these Terms. 
                  If you operate on behalf of a legal entity, you represent that you have the authority to bind that entity.
                </p>
                <div className="flex gap-6 p-8 rounded-[2.5rem] bg-zinc-950 text-white shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10"><Info size={80} strokeWidth={1}/></div>
                   <div className="relative z-10 flex gap-4">
                     <Info size={20} className="text-blue-500 shrink-0" />
                     <p className="text-sm font-light leading-relaxed">
                       <strong className="text-white font-bold block mb-1 uppercase tracking-widest text-[10px]">Executive Summary:</strong> 
                       Use of this platform constitutes full legal consent to our governing rules.
                     </p>
                   </div>
                </div>
              </div>
            </section>

            <section id="accounts" className="scroll-mt-40">
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-4xl font-black tracking-tighter">01. Identity & Security</h2>
                <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">User Governance</p>
              </div>
              <div className="space-y-10">
                <p className="text-zinc-500 text-lg font-medium leading-relaxed">
                  You are the sole custodian of your account credentials. Aptro facilitates secure access, 
                  but the ultimate responsibility for maintaining password integrity and 2FA remains with you.
                </p>
                <div className="grid sm:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100 rounded-[3rem] overflow-hidden">
                  <div className="p-10 bg-white">
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest block mb-4">Maturity</span>
                    <p className="text-sm font-bold text-zinc-950 uppercase tracking-tight">Users must be 18+ years of age to manage commercial ledgers.</p>
                  </div>
                  <div className="p-10 bg-white">
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest block mb-4">Uniqueness</span>
                    <p className="text-sm font-bold text-zinc-950 uppercase tracking-tight">Duplicate free-tier accounts for the same entity are strictly prohibited.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="billing" className="scroll-mt-40">
              <div className="p-12 lg:p-20 rounded-[4rem] bg-zinc-50 border border-zinc-100 shadow-sm">
                <h2 className="text-4xl font-black mb-10 tracking-tighter flex items-center gap-4">
                  <CreditCard className="text-blue-600" /> Billing Infrastructure
                </h2>
                <div className="space-y-8 text-zinc-500 text-lg font-medium leading-relaxed">
                  <p>
                    Aptro operates on a transparent licensing model. All listed fees are exclusive of statutory taxes 
                    determined by your regional taxing authority.
                  </p>
                  <div className="pt-8 border-t border-zinc-200">
                    <p className="font-black text-zinc-950 uppercase tracking-widest text-xs mb-4">Liquidation & Refunds</p>
                    <p className="text-sm">
                      We provide a <span className="text-zinc-950 font-bold">14-day satisfaction window</span> for new subscriptions. 
                      Subsequent billing cycles are non-refundable but can be terminated instantly to cease future liability.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="restrictions" className="scroll-mt-40">
              <h2 className="text-4xl font-black mb-12 tracking-tighter">02. Negative Covenants</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Reverse engineering system logic.",
                  "Unauthorized automated data scraping.",
                  "Engagement in sovereign money laundering.",
                  "Breach of cloud infrastructure integrity."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-5 p-8 rounded-[2rem] bg-white border border-zinc-100 hover:border-blue-200 transition-all group">
                    <Ban size={18} className="text-zinc-200 group-hover:text-blue-600 transition-colors" />
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-tight group-hover:text-zinc-950">{text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* --- Footer Note --- */}
            <footer className="pt-24 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-center md:text-left">
                <p className="text-[10px] font-black text-zinc-950 uppercase tracking-widest mb-2">Legal Queries</p>
                <p className="text-xs text-zinc-400 font-medium">legal@aptro.app</p>
              </div>
              <Link href="/contact" className="px-10 py-4 bg-zinc-950 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 shadow-xl shadow-zinc-200 transition-all">
                Contact Legal Counsel
              </Link>
            </footer>

            <div className="pt-10 text-center md:text-left">
               <p className="text-[10px] text-zinc-300 font-black uppercase tracking-[0.4em]">
                System Release 1.2.0 • Last Revised: April 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}