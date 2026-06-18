"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 py-16 md:py-24 text-zinc-900 selection:bg-blue-200 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-6">
      

        {/* Header */}
        <header className="mb-14">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <Shield size={24} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Aptro Privacy Policy
          </h1>
          <p className="text-zinc-500">
            Effective Date: June 18, 2026 • Version 1.7.1
          </p>
        </header>

        {/* Document Content */}
        <article className="space-y-12">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              1. Introduction
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                Privacy is fundamentally built into the Aptro ecosystem. This Privacy Policy explains how we collect, use, and protect your data when you use our platform, APIs, order management, and payroll services.
              </p>
              <p>
                By using Aptro, you entrust us with your operational intelligence. We are committed to maintaining the security and portability of your data and strictly adhere to industry-standard privacy frameworks.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              2. Information We Collect
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>We only collect data that is strictly necessary to run your business operations smoothly. We do not sell or rent your data.</p>
              
              <h3 className="font-medium text-zinc-900 mt-6 mb-2">Data we collect:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account and administrative data (Name, Email, Business Details).</li>
                <li>Operational metadata, billing details, and configuration settings.</li>
                <li>Inventory snapshots, attendance records, and supply chain logs.</li>
                <li>System access and audit logs for security monitoring.</li>
              </ul>

              <h3 className="font-medium text-zinc-900 mt-6 mb-2">Data we strictly exclude:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Raw payment credentials (we use secure third-party processors).</li>
                <li>External cross-site tracking cookies.</li>
                <li>Personal employee browsing history outside the Aptro app.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              3. How We Use Your Data
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-zinc-900 font-medium">Service Provisioning:</strong> To operate, maintain, and deliver core features like real-time ledger synchronization, billing, and inventory management.
                </li>
                <li>
                  <strong className="text-zinc-900 font-medium">System Analytics:</strong> To monitor system performance, troubleshoot bugs, and optimize database queries based on usage patterns.
                </li>
                <li>
                  <strong className="text-zinc-900 font-medium">Security & Compliance:</strong> To enforce our Terms of Service, prevent fraud, and ensure the integrity of your ledger data.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              4. Security Measures
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                Your business intelligence is shielded by enterprise-grade security. We implement multiple layers of cryptographic protection, including AES-256 encryption at rest and TLS 1.3 for data in transit. 
              </p>
              <p>
                Aptro performs automated vulnerability scanning and maintains redundant hourly cloud backups to ensure 99.99% system durability and prevent data loss.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              5. Your Data Rights
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>You maintain full ownership of your data. As an Aptro user, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-zinc-900 font-medium">Data Portability:</strong> Export your full ecosystem data (ledgers, payroll, inventory) in CSV or JSON formats at any time.</li>
                <li><strong className="text-zinc-900 font-medium">Right to Erasure:</strong> Request permanent deletion of your data, guaranteed to propagate across our servers within 48 hours.</li>
                <li><strong className="text-zinc-900 font-medium">Audit Access:</strong> Review access logs stored under your organization's profile.</li>
                <li><strong className="text-zinc-900 font-medium">Right to Rectification:</strong> Instantly update inaccurate administrative information directly from your settings dashboard.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              6. Contact Us
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                If you have questions regarding this Privacy Policy, data processing agreements, or need to exercise your data rights, please contact our support team.
              </p>
              <div className="mt-4 p-4 bg-white border border-zinc-200 rounded-xl">
                <p className="font-medium text-zinc-900">Email us at:</p>
                <a href="mailto:privacy@aptro.com" className="text-blue-600 hover:underline">
                  privacy@aptro.com
                </a>
              </div>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}