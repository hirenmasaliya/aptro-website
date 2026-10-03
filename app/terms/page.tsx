"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Mail, ChevronRight, Info } from "lucide-react";
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
  { id: "acceptance", title: "1. Agreeing to the Rules" },
  { id: "nature", title: "2. Not a Tax Advisor" },
  { id: "accounts", title: "3. Your Account & Details" },
  { id: "billing", title: "4. Paid Features (Premium)" },
  { id: "conduct", title: "5. Honest Use" },
  { id: "backup", title: "6. Your Data & Backups" },
  { id: "liability", title: "7. Our Responsibility" },
  { id: "termination", title: "8. Closing Your Account" },
  { id: "legal", title: "9. Legal Disputes" },
];

export default function TermsPage() {
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
                <Scale size={24} strokeWidth={2} />
              </div>
              <h1 className="text-3xl md:text-4xl font-normal text-[#1F1F1F] mb-4">
                Terms of Service
              </h1>
              <div className="flex items-center gap-2 text-[14px] text-[#5F6368]">
                <span>Effective Date: June 21, 2026</span>
              </div>
            </motion.header>

            {/* Document Content */}
            <article className="space-y-12">
              
              <motion.section id="acceptance" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  1. Agreeing to the Rules
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    When you download or use the Aptro app, you are agreeing to these rules. Aptro is built to help small and medium businesses manage their bills, stock, orders, and staff. 
                  </p>
                  <p>
                    If you are using this app for a shop or company, you must have the owner's permission to agree to these rules on their behalf.
                  </p>
                </div>
              </motion.section>

              <motion.section id="nature" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  2. We Are Not Tax Advisors
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    Aptro gives you tools to make bills, track items, and manage your business records. <strong className="text-[#1F1F1F] font-medium">However, we are not accountants or tax experts.</strong>
                  </p>
                  <ul className="list-none space-y-3 mt-6 pl-0">
                    <li className="flex items-start gap-4 p-4 rounded-[16px] border border-[#DADCE0] bg-[#F8F9FA]">
                      <ChevronRight size={20} className="text-[#1A73E8] shrink-0 mt-0.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Taxes & GST:</strong> We give you the format for GST bills, but you must make sure you enter the correct tax rates and product codes. It is your job to charge the right tax.</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-[16px] border border-[#DADCE0] bg-[#F8F9FA]">
                      <ChevronRight size={20} className="text-[#1A73E8] shrink-0 mt-0.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Filing Taxes:</strong> Making a bill on our app does not automatically pay or file your taxes. You still have to file your GST and other taxes with the government yourself.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="accounts" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  3. Your Account & Details
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    To use Aptro, you need to create an account. You promise to give us true details about your business, like your shop's address, phone number, and GST number (if you have one).
                  </p>
                  <ul className="list-none space-y-3 mt-4 pl-0">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Correct Information:</strong> You are responsible for making sure the numbers you type in (like customer dues, stock amounts, and bills) are correct.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Keep Your Password Safe:</strong> Do not share your login details or OTP with anyone. If someone else gets into your phone or account, we are not responsible for what happens to your data.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="billing" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  4. Paid Features (Premium)
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    Aptro has a free version and a paid (Premium) version. The paid version gives you extra features, like removing the Aptro logo from your bills or adding your staff to the app.
                  </p>
                  <ul className="list-none space-y-3 mt-4 pl-0">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">Payments:</strong> You pay for the premium features before you use them. The prices shown do not include GST unless we specifically say so.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2.5" />
                      <span><strong className="text-[#1F1F1F] font-medium">No Refunds:</strong> Because this is a digital app, once you pay for a subscription, we cannot give you your money back.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="conduct" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  5. Honest Use
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    You must only use Aptro for honest, legal business work. We will delete your account immediately without asking if you do any of the following:
                  </p>
                  <ul className="list-none space-y-3 mt-4 pl-0">
                    {[
                      "Make fake bills to cheat on taxes, claim false credits, or fool the government.",
                      "Use the app to sell or track illegal items, drugs, or banned weapons.",
                      "Try to hack, copy, or steal the app’s computer code.",
                      "Use our automatic message feature to harass or bother your customers."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0 mt-2.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              <motion.section id="backup" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  6. Your Data & Backups
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    <strong className="text-[#1F1F1F] font-medium">Your Data Belongs to You:</strong> You own all the customer details, bills, and stock records you put into the app. We just store it for you.
                  </p>
                  <div className="p-4 rounded-[16px] bg-[#E8F0FE] text-[#1967D2] text-[15px] flex gap-3 mt-4">
                    <Info size={20} className="shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium block mb-1">Keep a Backup</strong>
                      We save your data online to keep it safe, but you should also download your bills and reports regularly just to be sure. If your internet breaks or your phone gets lost, we are not responsible for lost data.
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section id="liability" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  7. Our Responsibility
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    We built this app to help you, but sometimes technology has problems (like bugs or servers going down). 
                  </p>
                  <p>
                    If the app stops working or makes an error, we are not responsible for any money you lose, tax fines, or business delays. You are using the app "as it is," meaning we do not promise it will be perfect 100% of the time.
                  </p>
                </div>
              </motion.section>

              <motion.section id="termination" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  8. Closing Your Account
                </h2>
                <div className="space-y-4 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    If we see you doing something illegal or breaking these rules, we can block or delete your account without warning.
                  </p>
                  <p>
                    If you want to stop using Aptro, you can go to the app settings and click "Delete Account" at any time. This will permanently erase your data from our systems.
                  </p>
                </div>
              </motion.section>

              <motion.section id="legal" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-[22px] text-[#1F1F1F] font-medium mb-4">
                  9. Legal Disputes
                </h2>
                <div className="space-y-6 text-[16px] text-[#444746] leading-relaxed">
                  <p>
                    These rules follow the laws of India. If there is ever a legal argument or problem between us, it must be settled in the courts of Gujarat, India.
                  </p>
                  
                  <a 
                    href="mailto:aptrosuppor@gmail.com" 
                    className="inline-flex items-center gap-4 p-4 rounded-full border border-[#DADCE0] hover:bg-[#F8F9FA] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#F1F3F4] text-[#444746] rounded-full flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div className="pr-4">
                      <p className="text-[12px] font-medium text-[#5F6368] mb-0.5">Legal & Compliance</p>
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
                <Link href="/privacy" className="hover:text-[#1A73E8] transition-colors">Privacy Policy</Link>
                <Link href="/contact" className="hover:text-[#1A73E8] transition-colors">Contact Support</Link>
              </div>
            </motion.footer>

          </motion.div>
        </div>
      </div>
    </main>
  );
}