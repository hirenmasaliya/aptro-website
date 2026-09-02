"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

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

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information", title: "2. Information We Collect" },
  { id: "permissions", title: "3. Device Permissions" },
  { id: "usage", title: "4. How We Use & Share Data" },
  { id: "security", title: "5. Data Security & Retention" },
  { id: "rights", title: "6. Your Privacy Rights" },
  { id: "contact", title: "7. Contact Us" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  // Scroll Tracking for Table of Contents
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    const sectionElements = document.querySelectorAll("section[id]");
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-32 bg-[#FAFAFA] text-zinc-950 font-sans selection:bg-blue-100 selection:text-blue-900 relative">
      
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
        {/* Subtle Brand Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-50/50 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: premiumEasing }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-zinc-500 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Return to Home
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Sticky Table of Contents (Desktop) */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: premiumEasing, delay: 0.2 }}
            className="hidden lg:block w-64 shrink-0"
          >
            <div className="sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Contents</h3>
              <nav className="flex flex-col gap-1 relative border-l border-zinc-200/60 ml-2 pl-4">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`text-[13px] font-medium py-2 transition-all relative ${
                        isActive ? "text-blue-600" : "text-zinc-500 hover:text-zinc-900"
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-0.5 h-full bg-blue-600 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {section.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Document Container */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex-1 bg-white p-8 md:p-14 lg:p-16 rounded-[2.5rem] border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-zinc-950/5"
          >
            
            {/* Header */}
            <motion.header variants={fadeUpItem} className="mb-16 border-b border-zinc-100 pb-12">
              <div className="w-14 h-14 bg-blue-50/50 border border-blue-100/50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <ShieldCheck size={26} strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-zinc-950">
                Privacy Policy
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-[13px] font-semibold text-zinc-500">
                <span className="bg-zinc-100 px-3 py-1 rounded-full text-zinc-700">Effective Date: June 21, 2026</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span>Version 1.7.2</span>
              </div>
            </motion.header>

            {/* Document Content */}
            <article className="space-y-16 prose prose-zinc prose-headings:font-bold prose-headings:tracking-tight max-w-none">
              
              <motion.section id="introduction" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">01</span> Introduction
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    Welcome to Aptro. We understand that your business data is highly sensitive. This Privacy Policy explains how Aptro collects, uses, stores, and protects your information when you use our mobile application, website, and related business management services.
                  </p>
                  <p>
                    By using the Aptro platform, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>
              </motion.section>

              <motion.section id="information" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">02</span> Information We Collect
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    We collect information directly from you when you register, as well as automatically when you use our app:
                  </p>
                  <ul className="list-none space-y-4 mt-6 pl-0">
                    <li className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50/80 border border-zinc-100">
                      <ChevronRight size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span><strong className="text-zinc-900">Personal Details:</strong> Full Name, Email Address, and Phone Number required for account creation.</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50/80 border border-zinc-100">
                      <ChevronRight size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span><strong className="text-zinc-900">Business Information:</strong> Business Name, Address, GSTIN/Tax ID, and Business Logo for invoice generation.</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50/80 border border-zinc-100">
                      <ChevronRight size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span><strong className="text-zinc-900">App Data:</strong> Inventory lists, customer/vendor records, generated invoices, attendance, and payroll records.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="permissions" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">03</span> Device Permissions
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    To provide core app functionalities, Aptro may request specific device permissions. You can manage these at any time in your device settings.
                  </p>
                  <ul className="list-none space-y-3 mt-4 pl-0">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                      <span><strong className="text-zinc-900">Camera:</strong> Used strictly for scanning product barcodes or taking photos of receipts and logos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                      <span><strong className="text-zinc-900">Storage:</strong> Required to save downloaded PDF invoices and export reports directly to your local device.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                      <span><strong className="text-zinc-900">Contacts:</strong> Optional permission to quickly import customers or vendors from your phonebook.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="usage" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">04</span> How We Use & Share Your Data
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    We use your data strictly to facilitate order creation, manage inventory, back up your business data to the cloud, and provide customer support.
                  </p>
                  <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 text-blue-900 text-sm">
                    <strong className="font-bold">Data Sharing Policy:</strong> We do not sell, rent, or trade your business data to any third party. Your data is solely yours. We only share information with trusted cloud service providers (e.g., AWS, Firebase) for hosting, or if legally required by law enforcement to comply with a valid legal process.
                  </div>
                </div>
              </motion.section>

              <motion.section id="security" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">05</span> Data Security & Retention
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    Aptro implements industry-standard security protocols. All data transmitted between your device and our servers is encrypted using standard HTTPS/TLS. Passwords and sensitive tokens are encrypted at rest.
                  </p>
                  <p>
                    We retain your profile and business data for as long as your Aptro account is active. If you choose to delete your account, your data will be permanently purged from our active databases within 30 days.
                  </p>
                </div>
              </motion.section>

              <motion.section id="rights" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">06</span> Your Privacy Rights
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    As an Aptro user, you have complete control over your data. You have the right to:
                  </p>
                  <ul className="list-none space-y-3 mt-4 pl-0">
                    {[
                      "Access and view all your stored data within the app.",
                      "Export and download your invoices, customer lists, and inventory as CSV/PDF files.",
                      "Update and correct any inaccurate business details at any time.",
                      "Request complete account deletion via the Account Settings section in the app."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              <motion.section id="contact" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">07</span> Contact Us
                </h2>
                <div className="space-y-6 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    We may occasionally update this Privacy Policy to reflect app enhancements or legal requirements. If you have any questions or privacy concerns, our support team is here to help you.
                  </p>
                  
                  <a 
                    href="mailto:aptrosuppor@gmail.com" 
                    className="flex items-center gap-4 p-5 bg-zinc-50 border border-zinc-200/60 rounded-2xl hover:bg-white hover:shadow-md hover:border-zinc-300 transition-all duration-300 group max-w-sm"
                  >
                    <div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-600 group-hover:text-blue-600 group-hover:scale-105 transition-all shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">Privacy Support</p>
                      <p className="text-[15px] font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                        aptrosuppor@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </motion.section>

            </article>
            
            {/* Footer */}
            <motion.footer 
              variants={fadeUpItem}
              className="mt-20 pt-8 border-t border-zinc-100 text-[13px] font-medium text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <p>© {new Date().getFullYear()} Aptro App. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</Link>
                <Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact Support</Link>
              </div>
            </motion.footer>

          </motion.div>
        </div>
      </div>
    </main>
  );
}