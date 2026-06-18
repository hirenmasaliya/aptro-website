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

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
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
              <span>Effective Date: June 18, 2026</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span>Version 1.7.1</span>
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
                  By accessing or using the Aptro platform, applications, and APIs ("Services"), you agree to be bound by these Terms of Service. If you are using the Services on behalf of a business or legal entity, you represent that you have the authority to bind that entity to these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, you may not access or use the Services. We reserve the right to update these Terms at any time, and continued use of the platform constitutes acceptance of those changes.
                </p>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                2. User Accounts & Security
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  To access certain features of Aptro, you must register for an account. You agree to provide accurate, current, and complete information during registration.
                </p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Account Security:</strong> You are the sole custodian of your account credentials. The ultimate responsibility for maintaining password integrity and enabling Two-Factor Authentication (2FA) rests with you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Maturity:</strong> Users must be at least 18 years of age to manage commercial ledgers on our platform.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Uniqueness:</strong> Creating multiple or duplicate free-tier accounts for the same business entity to bypass limits is strictly prohibited and will result in immediate termination.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                3. Billing, Fees & Subscriptions
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  Aptro operates on a transparent, subscription-based licensing model. By upgrading to a paid tier, you agree to pay all applicable fees associated with your usage.
                </p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Taxes:</strong> All listed fees are exclusive of statutory taxes (such as VAT or GST) determined by your regional taxing authority. You are responsible for any applicable taxes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Refund Policy:</strong> We provide a 14-day satisfaction window for new annual subscriptions. Subsequent billing cycles are non-refundable.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Cancellations:</strong> You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing cycle, and you will not be charged further.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                4. Acceptable Use & Conduct
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  You agree to use Aptro only for lawful business purposes. You are strictly prohibited from engaging in any of the following activities:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  {[
                    "Reverse engineering, decompiling, or disassembling any part of the Aptro platform.",
                    "Using automated data scraping, bots, or undocumented API requests to extract data.",
                    "Utilizing the platform for money laundering, fraudulent transactions, or illegal trade.",
                    "Attempting to breach, bypass, or test the vulnerability of our cloud infrastructure."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                5. Intellectual Property
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  <strong className="text-zinc-950">Your Data:</strong> You retain all ownership rights to the business data, ledgers, and inventory you upload to Aptro. We claim no intellectual property rights over your materials.
                </p>
                <p>
                  <strong className="text-zinc-950">Our Platform:</strong> Aptro and its original content, features, software, and design are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                6. Limitation of Liability
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  To the maximum extent permitted by law, Aptro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or goodwill, arising out of your access to or inability to access the Services.
                </p>
                <p>
                  The platform is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied.
                </p>
              </div>
            </motion.section>

            {/* Section 7 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                7. Termination
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  We reserve the right to suspend or terminate your account immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms of Service.
                </p>
                <p>
                  Upon termination, your right to use the Services will cease immediately. If you wish to terminate your account, you may simply discontinue using the Services or delete your account from your dashboard.
                </p>
              </div>
            </motion.section>

            {/* Section 8 (Contact) */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                8. Contact Legal Counsel
              </h2>
              <div className="space-y-6 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  If you have any questions, disputes, or require specific clarifications regarding these Terms of Service, please reach out to our legal department.
                </p>
                
                <a 
                  href="mailto:legal@aptro.app" 
                  className="flex items-center gap-4 p-5 bg-[#FAFAFA] border border-zinc-200/60 rounded-2xl hover:bg-zinc-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center text-zinc-950 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-0.5">Legal Department</p>
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
            <p>© {new Date().getFullYear()} Aptro Technologies Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-zinc-950 transition-colors">Privacy Protocol</Link>
              <Link href="/contact" className="hover:text-zinc-950 transition-colors">Contact Support</Link>
            </div>
          </motion.footer>

        </motion.div>
      </div>
    </main>
  );
}