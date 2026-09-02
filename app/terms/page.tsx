"use client";

import Link from "next/link";
import { ArrowLeft, Scale, Mail, ChevronRight } from "lucide-react";
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
                <Scale size={26} strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-zinc-950">
                Terms of Service
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-[13px] font-semibold text-zinc-500">
                <span className="bg-zinc-100 px-3 py-1 rounded-full text-zinc-700">Effective Date: June 21, 2026</span>
              </div>
            </motion.header>

            {/* Document Content */}
            <article className="space-y-16 prose prose-zinc prose-headings:font-bold prose-headings:tracking-tight max-w-none">
              
              <motion.section id="acceptance" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">01</span> Agreeing to the Rules
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    When you download or use the Aptro app, you are agreeing to these rules. Aptro is built to help small and medium businesses manage their bills, stock, orders, and staff. 
                  </p>
                  <p>
                    If you are using this app for a shop or company, you must have the owner's permission to agree to these rules on their behalf.
                  </p>
                </div>
              </motion.section>

              <motion.section id="nature" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">02</span> We Are Not Tax Advisors
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    Aptro gives you tools to make bills, track items, and manage your business records. <strong className="text-zinc-900">However, we are not accountants or tax experts.</strong>
                  </p>
                  <ul className="list-none space-y-4 mt-6 pl-0">
                    <li className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50/80 border border-zinc-100">
                      <ChevronRight size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span><strong className="text-zinc-900">Taxes & GST:</strong> We give you the format for GST bills, but you must make sure you enter the correct tax rates and product codes. It is your job to charge the right tax.</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50/80 border border-zinc-100">
                      <ChevronRight size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span><strong className="text-zinc-900">Filing Taxes:</strong> Making a bill on our app does not automatically pay or file your taxes. You still have to file your GST and other taxes with the government yourself.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="accounts" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">03</span> Your Account & Details
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    To use Aptro, you need to create an account. You promise to give us true details about your business, like your shop's address, phone number, and GST number (if you have one).
                  </p>
                  <ul className="list-none space-y-3 mt-4 pl-0">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                      <span><strong className="text-zinc-900">Correct Information:</strong> You are responsible for making sure the numbers you type in (like customer dues, stock amounts, and bills) are correct.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                      <span><strong className="text-zinc-900">Keep Your Password Safe:</strong> Do not share your login details or OTP with anyone. If someone else gets into your phone or account, we are not responsible for what happens to your data.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="billing" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">04</span> Paid Features (Premium)
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    Aptro has a free version and a paid (Premium) version. The paid version gives you extra features, like removing the Aptro logo from your bills or adding your staff to the app.
                  </p>
                  <ul className="list-none space-y-3 mt-4 pl-0">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                      <span><strong className="text-zinc-900">Payments:</strong> You pay for the premium features before you use them. The prices shown do not include GST unless we specifically say so.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                      <span><strong className="text-zinc-900">No Refunds:</strong> Because this is a digital app, once you pay for a subscription, we cannot give you your money back.</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section id="conduct" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">05</span> Honest Use
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
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
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              <motion.section id="backup" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">06</span> Your Data & Backups
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    <strong className="text-zinc-900">Your Data Belongs to You:</strong> You own all the customer details, bills, and stock records you put into the app. We just store it for you.
                  </p>
                  <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 text-blue-900 text-sm">
                    <strong className="font-bold">Keep a Backup:</strong> We save your data online to keep it safe, but you should also download your bills and reports regularly just to be sure. If your internet breaks or your phone gets lost, we are not responsible for lost data.
                  </div>
                </div>
              </motion.section>

              <motion.section id="liability" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">07</span> Our Responsibility
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    We built this app to help you, but sometimes technology has problems (like bugs or servers going down). 
                  </p>
                  <p>
                    If the app stops working or makes an error, we are not responsible for any money you lose, tax fines, or business delays. You are using the app "as it is," meaning we do not promise it will be perfect 100% of the time.
                  </p>
                </div>
              </motion.section>

              <motion.section id="termination" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">08</span> Closing Your Account
                </h2>
                <div className="space-y-4 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    If we see you doing something illegal or breaking these rules, we can block or delete your account without warning.
                  </p>
                  <p>
                    If you want to stop using Aptro, you can go to the app settings and click "Delete Account" at any time. This will permanently erase your data from our systems.
                  </p>
                </div>
              </motion.section>

              <motion.section id="legal" variants={fadeUpItem} className="scroll-mt-32">
                <h2 className="text-xl text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="text-blue-600/50 text-sm">09</span> Legal Disputes
                </h2>
                <div className="space-y-6 text-[15px] text-zinc-600 font-medium leading-loose">
                  <p>
                    These rules follow the laws of India. If there is ever a legal argument or problem between us, it must be settled in the courts of Gujarat, India.
                  </p>
                  
                  <a 
                    href="mailto:aptrosuppor@gmail.com" 
                    className="flex items-center gap-4 p-5 bg-zinc-50 border border-zinc-200/60 rounded-2xl hover:bg-white hover:shadow-md hover:border-zinc-300 transition-all duration-300 group max-w-sm"
                  >
                    <div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-600 group-hover:text-blue-600 group-hover:scale-105 transition-all shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">Legal & Compliance</p>
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
                <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
                <Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact Support</Link>
              </div>
            </motion.footer>

          </motion.div>
        </div>
      </div>
    </main>
  );
}