"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, ChevronRight, Info } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

// Material Design standard easing
const materialEasing = [0.2, 0, 0, 1] as const;

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
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
    <main className="min-h-screen pt-20 pb-32 bg-[#F8F9FA] text-[#202124] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49]">
      
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Navigation - Google App Bar Style */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#444746] hover:bg-[#E1E3E1]/50 px-4 py-2 rounded-full transition-colors"
          >
            <ArrowLeft size={18} />
            Home
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 relative">
          
          {/* Sticky Table of Contents (Desktop) - Material Drawer Style */}
          <motion.aside 
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: materialEasing }}
            className="hidden lg:block w-72 shrink-0"
          >
            <div className="sticky top-28">
              <h3 className="text-[14px] font-medium text-[#444746] mb-4 px-4">On this page</h3>
              <nav className="flex flex-col gap-1">
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
                      className={`text-[14px] py-2.5 px-4 rounded-full transition-colors relative flex items-center ${
                        isActive 
                          ? "bg-[#D3E3FD] text-[#041E49] font-medium" 
                          : "text-[#444746] hover:bg-[#F1F3F4]"
                      }`}
                    >
                      {section.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Document Container - Material Card */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex-1 bg-white p-8 md:p-12 lg:p-16 rounded-[24px] border border-[#DADCE0] shadow-sm"
          >
            
            {/* Header */}
            <motion.header variants={fadeUpItem} className="mb-14 border-b border-[#DADCE0] pb-10">
              <div className="w-12 h-12 bg-[#E8F0FE] text-[#1A73E8] rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={24} strokeWidth={2} />
              </div>
              <h1 className="text-3xl md:text-4xl font-normal text-[#1F1F1F] mb-4">
                Privacy Policy
              </h1>
              <div className="flex items-center gap-3 text-[14px] text-[#5F6368]">
                <span>Effective Date: June 21, 2026</span>
                <span className="w-1 h-1 rounded-full bg-[#DADCE0]" />
                <span>Version 1.7.2</span>
              </div>
            </motion.header>

            {/* Document Content */}
            <article className="space-y-12">
              
              <motion.section id="introduction" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  1. Introduction
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    Welcome to Aptro. We understand that your business data is highly sensitive. This Privacy Policy explains how Aptro collects, uses, stores, and protects your information when you use our mobile application, website, and related business management services.
                  </p>
                  <p>
                    By using the Aptro platform, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>
              </motion.section>

              <motion.section id="information" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    We collect information directly from you when you register, as well as automatically when you use our app:
                  </p>
                  <ul className="list-none space-y-3 mt-6 pl-0">
                    <li className="flex items-start gap-4 p-4 rounded-[16px] border border-[#DADCE0] bg-[#F8F9FA]">
                      <ChevronRight size={20} className="text-[#1A73E8] shrink-0 mt-0.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Personal Details:</strong> Full Name, Email Address, and Phone Number required for account creation.</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-[16px] border border-[#DADCE0] bg-[#F8F9FA]">
                      <ChevronRight size={20} className="text-[#1A73E8] shrink-0 mt-0.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Business Information:</strong> Business Name, Address, GSTIN/Tax ID, and Business Logo for invoice generation.</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-[16px] border border-[#DADCE0] bg-[#F8F9FA]">
                      <ChevronRight size={20} className="text-[#1A73E8] shrink-0 mt-0.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">App Data:</strong> Inventory lists, customer/vendor records, generated invoices, attendance, and payroll records.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="permissions" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  3. Device Permissions
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    To provide core app functionalities, Aptro may request specific device permissions. You can manage these at any time in your device settings.
                  </p>
                  <ul className="list-none space-y-3 mt-4 pl-0">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Camera:</strong> Used strictly for scanning product barcodes or taking photos of receipts and logos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Storage:</strong> Required to save downloaded PDF invoices and export reports directly to your local device.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Contacts:</strong> Optional permission to quickly import customers or vendors from your phonebook.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="usage" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  4. How We Use & Share Your Data
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    We use your data strictly to facilitate order creation, manage inventory, back up your business data to the cloud, and provide customer support.
                  </p>
                  <div className="p-4 rounded-[16px] bg-[#E8F0FE] text-[#1967D2] text-[15px] flex gap-3 mt-4">
                    <Info size={20} className="shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium block mb-1">Data Sharing Policy</strong>
                      We do not sell, rent, or trade your business data to any third party. Your data is solely yours. We only share information with trusted cloud service providers for hosting, or if required by law enforcement to comply with a valid legal process.
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section id="security" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  5. Data Security & Retention
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    Aptro implements industry-standard security protocols. All data transmitted between your device and our servers is encrypted using standard HTTPS/TLS. Passwords and sensitive tokens are encrypted at rest.
                  </p>
                  <p>
                    We retain your profile and business data for as long as your Aptro account is active. If you choose to delete your account, your data will be permanently purged from our active databases within 30 days.
                  </p>
                </div>
              </motion.section>

              <motion.section id="rights" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  6. Your Privacy Rights
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
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
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              <motion.section id="contact" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  7. Contact Us
                </h2>
                <div className="space-y-6 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    We may occasionally update this Privacy Policy to reflect app enhancements or legal requirements. If you have any questions or privacy concerns, our support team is here to help you.
                  </p>
                  
                  <a 
                    href="mailto:aptrosuppor@gmail.com" 
                    className="inline-flex items-center gap-4 p-4 rounded-full border border-[#DADCE0] hover:bg-[#F8F9FA] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#F1F3F4] text-[#444746] rounded-full flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div className="pr-4">
                      <p className="text-[12px] font-medium text-[#5F6368] mb-0.5">Privacy Support</p>
                      <p className="text-[14px] font-medium text-[#1A73E8]">
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
              className="mt-16 pt-8 border-t border-[#DADCE0] text-[14px] text-[#5F6368] flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <p>© {new Date().getFullYear()} Aptro App. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/terms" className="hover:text-[#1A73E8] transition-colors">Terms of Service</Link>
                <Link href="/contact" className="hover:text-[#1A73E8] transition-colors">Contact Support</Link>
              </div>
            </motion.footer>

          </motion.div>
        </div>
      </div>
    </main>
  );
}