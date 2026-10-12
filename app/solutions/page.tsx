"use client";

import { 
  AlertCircle,
  CheckCircle2,
  Zap,
  ArrowRight,
  Database,
  RefreshCw,
  TrendingUp,
  Boxes,
  Receipt,
  Users,
  Store,
  Truck,
  Briefcase,
  XCircle,
  PieChart,
  FileCheck2,
  ClipboardList
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Material Design Standard Easing
const materialEasing = [0.2, 0, 0, 1] as const;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: materialEasing } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function DetailedSolutionsPage() {
  return (
    <main className="min-h-screen pt-20 pb-32 text-[#202124] font-sans bg-white overflow-hidden selection:bg-[#D3E3FD] selection:text-[#041E49]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* --- 1. HERO SECTION --- */}
        <motion.header 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-20 md:mb-28 mt-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[13px] font-medium mb-6 border border-[#D2E3FC]">
            <Zap size={16} aria-hidden="true" className="text-[#1A73E8]" /> The Ultimate SME OS
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 leading-[1.15] text-[#1F1F1F]">
            Stop Fighting Your Software. <br />
            <span className="text-[#1A73E8]">Start Scaling Your Business.</span>
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-[16px] md:text-[18px] text-[#5F6368] leading-relaxed font-normal max-w-3xl mx-auto">
            Aptro is built specifically for Indian MSMEs, wholesalers, and retailers. We eliminate app fatigue by combining inventory management, GST invoicing, B2B client tracking, and staff payroll into one intelligent, unified system.
          </motion.h2>
        </motion.header>

        {/* --- 2. WHO WE SERVE & THEIR SPECIFIC PROBLEMS --- */}
        <section aria-labelledby="audience-heading" className="mb-20 md:mb-32">
          <div className="text-center mb-12">
            <h2 id="audience-heading" className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-4">
              Who is Aptro Built For?
            </h2>
            <p className="text-[#5F6368] text-[16px] max-w-2xl mx-auto">
              Different businesses face different bottlenecks. Aptro is engineered to solve the exact operational nightmares holding you back.
            </p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Persona 1: Wholesalers */}
            <motion.article variants={fadeInUp} className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm flex flex-col h-full">
              <div className="w-12 h-12 bg-[#FCE8E6] text-[#D93025] rounded-full flex items-center justify-center mb-6">
                <Truck size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-[#1F1F1F] mb-4">B2B Wholesalers & Distributors</h3>
              <div className="mb-6 flex-grow">
                <h4 className="text-[14px] font-semibold text-[#D93025] uppercase tracking-wider mb-2">The Problem</h4>
                <p className="text-[#5F6368] text-[15px] leading-relaxed">
                  Managing hundreds of bulk orders on credit (Udhar). Sending manual payment reminders, losing track of pending dispatch, and struggling to reconcile complex GST returns at month-end.
                </p>
              </div>
              <div className="pt-6 border-t border-[#DADCE0]">
                <h4 className="text-[14px] font-semibold text-[#1E8E3E] uppercase tracking-wider mb-2">Aptro's Solution</h4>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="flex gap-2 text-[14px] text-[#444746]"><CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> Automated digital khata limits</li>
                  <li className="flex gap-2 text-[14px] text-[#444746]"><CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> 1-click B2B E-invoicing</li>
                  <li className="flex gap-2 text-[14px] text-[#444746]"><CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> WhatsApp payment reminders</li>
                </ul>
              </div>
            </motion.article>

            {/* Persona 2: Retailers */}
            <motion.article variants={fadeInUp} className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm flex flex-col h-full">
              <div className="w-12 h-12 bg-[#FEF7E0] text-[#F9AB00] rounded-full flex items-center justify-center mb-6">
                <Store size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-[#1F1F1F] mb-4">Retail Stores & Shops</h3>
              <div className="mb-6 flex-grow">
                <h4 className="text-[14px] font-semibold text-[#C5221F] uppercase tracking-wider mb-2">The Problem</h4>
                <p className="text-[#5F6368] text-[15px] leading-relaxed">
                  Long billing queues at the counter, completely losing track of fast-moving inventory, and realizing you are out of stock only when a customer asks for a product.
                </p>
              </div>
              <div className="pt-6 border-t border-[#DADCE0]">
                <h4 className="text-[14px] font-semibold text-[#1E8E3E] uppercase tracking-wider mb-2">Aptro's Solution</h4>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="flex gap-2 text-[14px] text-[#444746]"><CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> Lightning-fast POS billing</li>
                  <li className="flex gap-2 text-[14px] text-[#444746]"><CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> Real-time low stock alerts</li>
                  <li className="flex gap-2 text-[14px] text-[#444746]"><CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> Daily cash drawer matching</li>
                </ul>
              </div>
            </motion.article>

            {/* Persona 3: Service Providers */}
            <motion.article variants={fadeInUp} className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm flex flex-col h-full">
              <div className="w-12 h-12 bg-[#E8F0FE] text-[#1A73E8] rounded-full flex items-center justify-center mb-6">
                <Briefcase size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-[#1F1F1F] mb-4">Service Agencies & Firms</h3>
              <div className="mb-6 flex-grow">
                <h4 className="text-[14px] font-semibold text-[#C5221F] uppercase tracking-wider mb-2">The Problem</h4>
                <p className="text-[#5F6368] text-[15px] leading-relaxed">
                  Tracking employee attendance on paper, manually calculating staff advances at month-end, and sending unprofessional Word-document estimates to high-value clients.
                </p>
              </div>
              <div className="pt-6 border-t border-[#DADCE0]">
                <h4 className="text-[14px] font-semibold text-[#1E8E3E] uppercase tracking-wider mb-2">Aptro's Solution</h4>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="flex gap-2 text-[14px] text-[#444746]"><CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> Professional quotation maker</li>
                  <li className="flex gap-2 text-[14px] text-[#444746]"><CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> Staff attendance tracker</li>
                  <li className="flex gap-2 text-[14px] text-[#444746]"><CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" /> Automated payroll salary slips</li>
                </ul>
              </div>
            </motion.article>
          </motion.div>
        </section>

        {/* --- 3. THE DISCONNECTED TRAP (BEFORE VS AFTER) --- */}
        <section aria-labelledby="problem-heading" className="mb-20 md:mb-32">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="p-8 md:p-12 rounded-[24px] bg-white border border-[#DADCE0] shadow-sm relative overflow-hidden"
          >
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-10">
                <h2 id="problem-heading" className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-4">
                  The Disconnected Business Trap
                </h2>
                <p className="text-[#444746] text-[16px] leading-relaxed">
                  When your billing app, inventory spreadsheet, and attendance register don't talk to each other, you lose money. Here is how Aptro changes the paradigm.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-0 border border-[#DADCE0] rounded-[16px] overflow-hidden">
                {/* The Old Way */}
                <div className="bg-[#F8F9FA] p-8 border-b md:border-b-0 md:border-r border-[#DADCE0]">
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="text-[#D93025]" size={24} />
                    <h3 className="text-lg font-medium text-[#1F1F1F]">The Old Way (Chaos)</h3>
                  </div>
                  <ul className="space-y-4 list-none p-0 m-0">
                    <li className="text-[14px] text-[#5F6368] leading-relaxed"><strong className="text-[#1F1F1F]">Double Data Entry:</strong> You generate a bill, then manually deduct that item from a separate inventory Excel sheet.</li>
                    <li className="text-[14px] text-[#5F6368] leading-relaxed"><strong className="text-[#1F1F1F]">Blind Spots:</strong> You don't know your true daily profit because unpaid Udhar (credit) isn't linked to your sales dashboard.</li>
                    <li className="text-[14px] text-[#5F6368] leading-relaxed"><strong className="text-[#1F1F1F]">Compliance Nightmares:</strong> Handing over messy, unorganized raw data to your CA at the end of the month to file GST.</li>
                  </ul>
                </div>

                {/* The Aptro Way */}
                <div className="bg-[#E6F4EA]/30 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="text-[#1E8E3E]" size={24} />
                    <h3 className="text-lg font-medium text-[#1F1F1F]">The Aptro Way (Sync)</h3>
                  </div>
                  <ul className="space-y-4 list-none p-0 m-0">
                    <li className="text-[14px] text-[#444746] leading-relaxed"><strong className="text-[#1F1F1F]">Zero Data Entry:</strong> Create an invoice on your phone, and inventory stock drops automatically across all devices.</li>
                    <li className="text-[14px] text-[#444746] leading-relaxed"><strong className="text-[#1F1F1F]">Total Visibility:</strong> See daily revenue, pending payments, and net profit live on one single dashboard.</li>
                    <li className="text-[14px] text-[#444746] leading-relaxed"><strong className="text-[#1F1F1F]">CA-Ready Reports:</strong> Generate perfect GSTR-1, 2, and 3B reports instantly with one click.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- 4. STEP-BY-STEP SOLUTION SECTION --- */}
        <section aria-labelledby="solution-heading" className="mb-20 md:mb-32">
          <div className="text-center mb-12">
            <h2 id="solution-heading" className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-4">
              How The Ecosystem Works
            </h2>
            <p className="text-[#5F6368] text-[16px] max-w-2xl mx-auto">
              A four-step approach to automating your daily operations.
            </p>
          </div>

          <motion.ol 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative list-none p-0 m-0"
          >
            {[
              {
                step: "1",
                icon: <Database size={24} aria-hidden="true" />,
                title: "Centralize Data",
                desc: "Input your inventory, services, and B2B client list into Aptro just once."
              },
              {
                step: "2",
                icon: <RefreshCw size={24} aria-hidden="true" />,
                title: "Automate Billing",
                desc: "Generate a GST invoice, and Aptro auto-deducts the stock."
              },
              {
                step: "3",
                icon: <Users size={24} aria-hidden="true" />,
                title: "Manage Staff",
                desc: "Track daily attendance and let Aptro calculate month-end payroll."
              },
              {
                step: "4",
                icon: <TrendingUp size={24} aria-hidden="true" />,
                title: "Track & Grow",
                desc: "View real-time P&L reports and scale your MSME confidently."
              }
            ].map((item, i) => (
              <motion.li key={i} variants={fadeInUp} className="flex flex-col items-start p-6 lg:p-8 bg-white rounded-[24px] border border-[#DADCE0] hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center text-[#1A73E8]">
                    {item.icon}
                  </div>
                  <div className="text-[#1A73E8] bg-[#E8F0FE] text-[13px] font-medium w-6 h-6 rounded-full flex items-center justify-center" aria-hidden="true">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-2">{item.title}</h3>
                <p className="text-[#5F6368] text-[14px] leading-relaxed">{item.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </section>

        {/* --- 5. DEEP DIVE: EXPANDED FEATURES (6 CARDS) --- */}
        <section aria-labelledby="features-heading" className="mb-20 md:mb-32">
          <div className="text-center mb-12">
            <h2 id="features-heading" className="text-2xl md:text-3xl font-normal text-[#1F1F1F] mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-[#5F6368] text-[16px] max-w-2xl mx-auto">
              We replaced 5 different subscriptions with one deeply integrated business suite.
            </p>
          </div>

          <motion.ul 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0"
          >
            {/* Inventory Card */}
            <motion.li variants={fadeInUp} className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#E6F4EA] flex items-center justify-center text-[#1E8E3E] mb-6">
                <Boxes size={24} aria-hidden="true" />
              </div>
              <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-4">Inventory Management</h3>
              <ul className="space-y-3 list-none p-0 m-0 mt-auto">
                {["Low stock push notifications", "Multi-warehouse tracking", "Batch & expiry date tracking"].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#444746]">
                    <CheckCircle2 size={18} className="text-[#1E8E3E] shrink-0" aria-hidden="true" /> {feat}
                  </li>
                ))}
              </ul>
            </motion.li>

            {/* Billing Card */}
            <motion.li variants={fadeInUp} className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#FEF7E0] flex items-center justify-center text-[#F9AB00] mb-6">
                <Receipt size={24} aria-hidden="true" />
              </div>
              <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-4">GST Billing App</h3>
              <ul className="space-y-3 list-none p-0 m-0 mt-auto">
                {["1-click GST invoice generator", "Customizable invoice templates", "Thermal printer support (Bluetooth)"].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#444746]">
                    <CheckCircle2 size={18} className="text-[#F9AB00] shrink-0" aria-hidden="true" /> {feat}
                  </li>
                ))}
              </ul>
            </motion.li>

            {/* Client Card */}
            <motion.li variants={fadeInUp} className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#FCE8E6] flex items-center justify-center text-[#D93025] mb-6">
                <Users size={24} aria-hidden="true" />
              </div>
              <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-4">B2B Digital Khata</h3>
              <ul className="space-y-3 list-none p-0 m-0 mt-auto">
                {["Complete party purchase history", "Track pending udhar (credit)", "Automated payment reminders"].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#444746]">
                    <CheckCircle2 size={18} className="text-[#D93025] shrink-0" aria-hidden="true" /> {feat}
                  </li>
                ))}
              </ul>
            </motion.li>

            {/* NEW: Payroll Card */}
            <motion.li variants={fadeInUp} className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#F3E8FD] flex items-center justify-center text-[#9333EA] mb-6">
                <ClipboardList size={24} aria-hidden="true" />
              </div>
              <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-4">Staff & Payroll</h3>
              <ul className="space-y-3 list-none p-0 m-0 mt-auto">
                {["Daily attendance tracking", "Manage employee advance pays", "Automated salary slips generation"].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#444746]">
                    <CheckCircle2 size={18} className="text-[#9333EA] shrink-0" aria-hidden="true" /> {feat}
                  </li>
                ))}
              </ul>
            </motion.li>

            {/* NEW: E-Invoicing */}
            <motion.li variants={fadeInUp} className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] mb-6">
                <FileCheck2 size={24} aria-hidden="true" />
              </div>
              <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-4">E-Invoicing & Compliance</h3>
              <ul className="space-y-3 list-none p-0 m-0 mt-auto">
                {["Govt-compliant E-invoice push", "E-way bill generation", "Direct GSTR portal integration"].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#444746]">
                    <CheckCircle2 size={18} className="text-[#0284C7] shrink-0" aria-hidden="true" /> {feat}
                  </li>
                ))}
              </ul>
            </motion.li>

            {/* NEW: Analytics */}
            <motion.li variants={fadeInUp} className="bg-white p-8 rounded-[24px] border border-[#DADCE0] shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D] mb-6">
                <PieChart size={24} aria-hidden="true" />
              </div>
              <h3 className="text-[18px] font-medium text-[#1F1F1F] mb-4">Analytics & Reports</h3>
              <ul className="space-y-3 list-none p-0 m-0 mt-auto">
                {["Live Profit & Loss (P&L) dashboard", "Item-wise margin reports", "Downloadable Excel data exports"].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#444746]">
                    <CheckCircle2 size={18} className="text-[#65A30D] shrink-0" aria-hidden="true" /> {feat}
                  </li>
                ))}
              </ul>
            </motion.li>
          </motion.ul>
        </section>

        {/* --- 6. CALL TO ACTION --- */}
        <motion.section 
          aria-label="Call to Action"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center bg-white p-10 md:p-16 rounded-[24px] border border-[#DADCE0] shadow-sm max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F4EA] text-[#0D652D] font-medium text-[13px] mb-6 border border-[#CEEAD6]">
            <span className="w-2 h-2 rounded-full bg-[#1E8E3E]" aria-hidden="true"></span>
            Syncs across Android, iOS, and Web Desktop
          </div>
          
          <h2 className="text-3xl md:text-4xl font-normal text-[#1F1F1F] mb-4">
            Ready to unite your business operations?
          </h2>
          <p className="text-[#5F6368] text-[16px] mb-10 max-w-2xl mx-auto">
            Stop losing hours to data entry and disconnected tools. Join the thousands of Indian business owners scaling profitably with Aptro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/download"
              aria-label="Start your free trial of the Aptro app"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1A73E8] text-white rounded-full font-medium text-[15px] transition-colors hover:bg-[#1557B0] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
            >
              Start Free Trial <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              aria-label="Contact our sales team"
              className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#DADCE0] text-[#1F1F1F] rounded-full font-medium text-[15px] transition-colors hover:bg-[#F8F9FA] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
            >
              Talk to Sales
            </Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}