"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Premium smooth easing
const premiumEasing = [0.22, 1, 0.36, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 bg-[#FAFAFA] text-zinc-950 font-sans selection:bg-zinc-200 selection:text-zinc-900 relative">
      
      {/* Premium Minimal Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 flex justify-center">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `radial-gradient(circle at center, #18181b 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: premiumEasing }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Return to Home
          </Link>
        </motion.div>

        {/* Document Container */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="bg-white p-8 md:p-16 rounded-[2rem] border border-zinc-200/60 shadow-sm"
        >
          
          {/* Header */}
          <motion.header variants={fadeUpItem} className="mb-16">
            <div className="w-14 h-14 bg-[#FAFAFA] border border-zinc-100 text-zinc-950 rounded-xl flex items-center justify-center mb-8 shadow-sm">
              <Scale size={24} strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-zinc-950">
              Terms of Service
            </h1>
            <div className="flex items-center gap-3 text-sm font-medium text-zinc-500">
              <span>Effective Date: June 21, 2026</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span>Version 1.7.2</span>
            </div>
          </motion.header>

          {/* Document Content */}
          <article className="space-y-16">
            
            {/* Section 1 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  By downloading, accessing, or using the Aptro Business Management & Invoice App ("Services"), you agree to be bound by these Terms of Service. Aptro is a B2B platform designed to help small and medium businesses (SMBs) manage invoices, inventory, orders, and payroll.
                </p>
                <p>
                  If you are using the Services on behalf of a registered business, shop, or legal entity, you represent that you have the authority to bind that entity to these Terms.
                </p>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                2. Nature of Services & Tax Disclaimer
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  Aptro provides digital tools to format and generate invoices, track inventory, and manage business ledgers. <strong className="text-zinc-950">However, Aptro is not a financial advisor, tax consultant, or Chartered Accountant (CA).</strong>
                </p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">GST & Tax Compliance:</strong> While we provide GST-ready invoice templates, you are solely responsible for ensuring the correct GST rates, HSN/SAC codes, and tax calculations are applied to your products.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Filing Returns:</strong> Generating an invoice on Aptro does not automatically file your taxes. You remain entirely responsible for filing your local, state, or federal tax returns (including GST returns in India).</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                3. User Accounts & Business Verification
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  To manage a business profile on Aptro, you must register for an account. You agree to provide accurate business details, including your valid GSTIN (if applicable), business address, and contact information.
                </p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Data Accuracy:</strong> You are responsible for all data entered into the app, including customer balances, vendor ledgers, and inventory counts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Account Security:</strong> You are the sole custodian of your account credentials. Aptro is not liable for data loss or manipulation resulting from unauthorized access to your device or account.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                4. Premium Subscriptions & Billing
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  Aptro offers both a free tier and premium subscription plans (e.g., to remove the Aptro watermark on invoices, access premium templates, or enable multi-staff login).
                </p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Payments & Taxes:</strong> All subscription fees are billed in advance. Prices displayed are exclusive of GST unless stated otherwise.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Non-Refundable:</strong> Due to the nature of digital software, premium subscription fees are non-refundable once billed, except where legally mandated.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                5. Acceptable Use & Conduct
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  You agree to use Aptro only for lawful commercial purposes. Your account will be immediately terminated if you engage in:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  {[
                    "Generating fraudulent invoices to evade taxes, claim false Input Tax Credit (ITC), or deceive authorities.",
                    "Using the app to manage inventory for illegal goods, narcotics, or restricted firearms.",
                    "Reverse engineering, decompiling, or attempting to extract the app's source code.",
                    "Harassing your customers using the automated payment reminder feature."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                6. Data Backup & Ownership
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  <strong className="text-zinc-950">Your Business Data:</strong> You retain full ownership of the business data, customer details, digital signatures, and inventory you upload. Aptro acts merely as a processor.
                </p>
                <p>
                  <strong className="text-zinc-950">Cloud Sync:</strong> While Aptro provides cloud synchronization to keep your data safe, we highly recommend periodically exporting your ledgers and invoices as PDF or CSV files. Aptro is not liable for data loss due to internet outages, device failures, or user error.
                </p>
              </div>
            </motion.section>

            {/* Section 7 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                7. Limitation of Liability
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  To the maximum extent permitted by Indian law, Aptro shall not be liable for any indirect, incidental, special, or punitive damages. This includes, but is not limited to, loss of profits, tax penalties, audit liabilities, or business interruptions arising from your use of the app.
                </p>
                <p>
                  The platform is provided on an "AS IS" basis. We do not guarantee that the app will be completely free of bugs, downtime, or network errors.
                </p>
              </div>
            </motion.section>

            {/* Section 8 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                8. Termination
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  We reserve the right to suspend or permanently ban your business profile without prior notice if we detect suspicious activity, a violation of these Terms, or requests from law enforcement agencies. 
                </p>
                <p>
                  You may terminate your account at any time by utilizing the "Delete Account" option within the app settings. Upon deletion, your business data will be purged according to our Privacy Policy protocols.
                </p>
              </div>
            </motion.section>

            {/* Section 9 (Contact) */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                9. Contact & Legal Disputes
              </h2>
              <div className="space-y-6 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Gujarat, India.
                </p>
                
                <a 
                  href="mailto:legal@aptro.app" 
                  className="flex items-center gap-4 p-5 bg-[#FAFAFA] border border-zinc-200/60 rounded-2xl hover:bg-zinc-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center text-zinc-950 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-0.5">Legal & Compliance</p>
                    <p className="text-sm font-semibold text-zinc-950 group-hover:text-zinc-600 transition-colors">
                      legal@aptro.app
                    </p>
                  </div>
                </a>
              </div>
            </motion.section>

          </article>
          
          {/* Footer */}
          <motion.footer 
            variants={fadeUpItem}
            className="mt-20 pt-8 border-t border-zinc-100 text-xs font-medium text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p>© {new Date().getFullYear()} Aptro App. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-zinc-950 transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-zinc-950 transition-colors">Contact Support</Link>
            </div>
          </motion.footer>

        </motion.div>
      </div>
    </main>
  );
}