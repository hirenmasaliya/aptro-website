"use client";

import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 py-16 md:py-24 text-zinc-900 selection:bg-blue-200 selection:text-blue-900">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <header className="mb-14">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <Scale size={24} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                By accessing or using the Aptro platform, applications, and APIs ("Services"), you agree to be bound by these Terms of Service. If you are using the Services on behalf of a business or legal entity, you represent that you have the authority to bind that entity to these Terms.
              </p>
              <p>
                If you do not agree to these Terms, you may not access or use the Services. We reserve the right to update these Terms at any time, and continued use of the platform constitutes acceptance of those changes.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              2. User Accounts & Security
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                To access certain features of Aptro, you must register for an account. You agree to provide accurate, current, and complete information during registration.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-zinc-900 font-medium">Account Security:</strong> You are the sole custodian of your account credentials. The ultimate responsibility for maintaining password integrity and enabling Two-Factor Authentication (2FA) rests with you.</li>
                <li><strong className="text-zinc-900 font-medium">Maturity:</strong> Users must be at least 18 years of age to manage commercial ledgers on our platform.</li>
                <li><strong className="text-zinc-900 font-medium">Uniqueness:</strong> Creating multiple or duplicate free-tier accounts for the same business entity to bypass limits is strictly prohibited and will result in immediate termination.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              3. Billing, Fees & Subscriptions
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                Aptro operates on a transparent, subscription-based licensing model. By upgrading to a paid tier, you agree to pay all applicable fees associated with your usage.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-zinc-900 font-medium">Taxes:</strong> All listed fees are exclusive of statutory taxes (such as VAT or GST) determined by your regional taxing authority. You are responsible for any applicable taxes.</li>
                <li><strong className="text-zinc-900 font-medium">Refund Policy:</strong> We provide a 14-day satisfaction window for new annual subscriptions. Subsequent billing cycles are non-refundable.</li>
                <li><strong className="text-zinc-900 font-medium">Cancellations:</strong> You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing cycle, and you will not be charged further.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              4. Acceptable Use & Conduct
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                You agree to use Aptro only for lawful business purposes. You are strictly prohibited from engaging in any of the following activities:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reverse engineering, decompiling, or disassembling any part of the Aptro platform.</li>
                <li>Using automated data scraping, bots, or undocumented API requests to extract data.</li>
                <li>Utilizing the platform for money laundering, fraudulent transactions, or illegal trade.</li>
                <li>Attempting to breach, bypass, or test the vulnerability of our cloud infrastructure or security systems.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              5. Intellectual Property
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                <strong className="text-zinc-900 font-medium">Your Data:</strong> You retain all ownership rights to the business data, ledgers, and inventory you upload to Aptro. We claim no intellectual property rights over your materials.
              </p>
              <p>
                <strong className="text-zinc-900 font-medium">Our Platform:</strong> Aptro and its original content, features, software, and design are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              6. Limitation of Liability
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                To the maximum extent permitted by law, Aptro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or goodwill, arising out of your access to or inability to access the Services.
              </p>
              <p>
                The platform is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              7. Termination
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                We reserve the right to suspend or terminate your account immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms of Service.
              </p>
              <p>
                Upon termination, your right to use the Services will cease immediately. If you wish to terminate your account, you may simply discontinue using the Services or delete your account from your dashboard.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold mb-4 border-b border-zinc-200 pb-2">
              8. Contact Legal Counsel
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                If you have any questions, disputes, or require specific clarifications regarding these Terms of Service, please reach out to our legal department.
              </p>
              <div className="mt-4 p-4 bg-white border border-zinc-200 rounded-xl">
                <p className="font-medium text-zinc-900">Email us at:</p>
                <a href="mailto:legal@aptro.com" className="text-blue-600 hover:underline">
                  legal@aptro.com
                </a>
              </div>
            </div>
          </section>

        </article>
        
        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-zinc-200 text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Aptro. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact Support</Link>
          </div>
        </footer>

      </div>
    </main>
  );
}