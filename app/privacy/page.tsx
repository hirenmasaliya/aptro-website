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

export default function PrivacyPage() {
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
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-zinc-950">
              Privacy Protocol
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
                1. Introduction
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  Privacy is fundamentally built into the Aptro ecosystem. This Privacy Policy explains how we collect, use, and protect your data when you use our platform, APIs, order management, and payroll services.
                </p>
                <p>
                  By using Aptro, you entrust us with your operational intelligence. We are committed to maintaining the security and portability of your data and strictly adhere to industry-standard privacy frameworks.
                </p>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>We only collect data that is strictly necessary to run your business operations smoothly. We do not sell or rent your data.</p>
                
                <h3 className="font-semibold text-zinc-950 mt-8 mb-3">Data we collect:</h3>
                <ul className="list-none space-y-3">
                  {[
                    "Account and administrative data (Name, Email, Business Details).",
                    "Operational metadata, billing details, and configuration settings.",
                    "Inventory snapshots, attendance records, and supply chain logs.",
                    "System access and audit logs for security monitoring."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-zinc-950 mt-8 mb-3">Data we strictly exclude:</h3>
                <ul className="list-none space-y-3">
                  {[
                    "Raw payment credentials (we use secure third-party processors).",
                    "External cross-site tracking cookies.",
                    "Personal employee browsing history outside the Aptro app."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                3. How We Use Your Data
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <ul className="list-none space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Service Provisioning:</strong> To operate, maintain, and deliver core features like real-time ledger synchronization, billing, and inventory management.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">System Analytics:</strong> To monitor system performance, troubleshoot bugs, and optimize database queries based on usage patterns.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Security & Compliance:</strong> To enforce our Terms of Service, prevent fraud, and ensure the integrity of your ledger data.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                4. Security Measures
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  Your business intelligence is shielded by enterprise-grade security. We implement multiple layers of cryptographic protection, including AES-256 encryption at rest and TLS 1.3 for data in transit. 
                </p>
                <p>
                  Aptro performs automated vulnerability scanning and maintains redundant hourly cloud backups to ensure 99.99% system durability and prevent data loss.
                </p>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                5. Your Data Rights
              </h2>
              <div className="space-y-4 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>You maintain full ownership of your data. As an Aptro user, you have the right to:</p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Data Portability:</strong> Export your full ecosystem data (ledgers, payroll, inventory) in CSV or JSON formats at any time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Right to Erasure:</strong> Request permanent deletion of your data, guaranteed to propagate across our servers within 48 hours.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Audit Access:</strong> Review access logs stored under your organization's profile.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2" />
                    <span><strong className="text-zinc-950">Right to Rectification:</strong> Instantly update inaccurate administrative information directly from your settings dashboard.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 6 (Contact) */}
            <motion.section variants={fadeUpItem}>
              <h2 className="text-lg font-semibold mb-6 border-b border-zinc-100 pb-4 text-zinc-950">
                6. Contact Compliance
              </h2>
              <div className="space-y-6 text-sm text-zinc-600 font-medium leading-relaxed">
                <p>
                  If you have questions regarding this Privacy Policy, data processing agreements, or need to exercise your data rights, please contact our compliance and support team.
                </p>
                
                <a 
                  href="mailto:privacy@aptro.app" 
                  className="flex items-center gap-4 p-5 bg-[#FAFAFA] border border-zinc-200/60 rounded-2xl hover:bg-zinc-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center text-zinc-950 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-0.5">Privacy Officer</p>
                    <p className="text-sm font-semibold text-zinc-950 group-hover:text-zinc-600 transition-colors">
                      privacy@aptro.app
                    </p>
                  </div>
                </a>
              </div>
            </motion.section>

          </article>
        </motion.div>
      </div>
    </main>
  );
}