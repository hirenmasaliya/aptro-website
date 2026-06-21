"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail } from "lucide-react";
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

export default function PrivacyPolicyPage() {
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
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-zinc-950">
              Privacy Policy
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
                1. Introduction
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  Welcome to Aptro. We understand that your business data is highly sensitive. This Privacy Policy explains how Aptro collects, uses, stores, and protects your information when you use our mobile application, website, and related business management services.
                </p>
                <p>
                  By using the Aptro platform, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  We collect information directly from you when you register, as well as automatically when you use our app:
                </p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Personal Details:</strong> Full Name, Email Address, and Phone Number required for account creation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Business Information:</strong> Business Name, Address, GSTIN/Tax ID, and Business Logo for invoice generation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">App Data:</strong> Inventory lists, customer/vendor records, generated invoices, attendance, and payroll records.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                3. Device Permissions
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  To provide core app functionalities, Aptro may request specific device permissions. You can manage these at any time in your device settings.
                </p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Camera:</strong> Used strictly for scanning product barcodes or taking photos of receipts and logos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Storage:</strong> Required to save downloaded PDF invoices and export reports directly to your local device.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Contacts:</strong> Optional permission to quickly import customers or vendors from your phonebook.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                4. How We Use & Share Your Data
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  We use your data strictly to facilitate order creation, manage inventory, back up your business data to the cloud, and provide customer support.
                </p>
                <p>
                  <strong className="text-zinc-950">Data Sharing:</strong> We do not sell, rent, or trade your business data to any third party. Your data is solely yours. We only share information with trusted cloud service providers (e.g., AWS, Firebase) for hosting, or if legally required by law enforcement to comply with a valid legal process.
                </p>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                5. Data Security & Retention
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  Aptro implements industry-standard security protocols. All data transmitted between your device and our servers is encrypted using standard HTTPS/TLS. Passwords and sensitive tokens are encrypted at rest.
                </p>
                <p>
                  We retain your profile and business data for as long as your Aptro account is active. If you choose to delete your account, your data will be permanently purged from our active databases within 30 days.
                </p>
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                6. Your Privacy Rights
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  As an Aptro user, you have complete control over your data. You have the right to:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  {[
                    "Access and view all your stored data within the app.",
                    "Export and download your invoices, customer lists, and inventory as CSV/PDF files.",
                    "Update and correct any inaccurate business details at any time.",
                    "Request complete account deletion via the Account Settings section in the app."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Section 7 (Contact) */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                7. Contact Us
              </h2>
              <div className="space-y-6 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  We may occasionally update this Privacy Policy to reflect app enhancements or legal requirements. If you have any questions or privacy concerns, our support team is here to help you.
                </p>
                
                <a 
                  href="mailto:support@aptro.app" 
                  className="flex items-center gap-4 p-5 bg-[#FAFAFA] border border-zinc-200/60 rounded-2xl hover:bg-zinc-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center text-zinc-950 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-0.5">Privacy Support</p>
                    <p className="text-sm font-semibold text-zinc-950 group-hover:text-zinc-600 transition-colors">
                      support@aptro.app
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
              <Link href="/terms" className="hover:text-zinc-950 transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-zinc-950 transition-colors">Contact Support</Link>
            </div>
          </motion.footer>

        </motion.div>
      </div>
    </main>
  );
}