"use client";

import { 
  ShoppingCart, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  Smartphone, 
  Package,
  Users,
  Clock,
  FileCheck
} from "lucide-react";
import { Easing, motion, Variants } from "framer-motion";

// Material Design standard easing
const materialEasing: Easing = [0.2, 0, 0, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

export default function Features() {
  // Expanded list specifically for Aptro's capabilities
  const features = [
    {
      title: "Generate GST Bills",
      desc: "Create clean GST invoices in seconds. Use our free invoice maker tools to send professional estimates and get paid faster.",
      icon: <FileText size={24} aria-hidden="true" />,
    },
    {
      title: "Stock & Inventory",
      desc: "Simplify your inventory management. Track stock levels in real-time and get alerts before you run out of fast-moving items.",
      icon: <Package size={24} aria-hidden="true" />,
    },
    {
      title: "B2B Order Management",
      desc: "Track every sale from purchase to delivery. The ultimate B2B order management app so you never lose a sales record again.",
      icon: <ShoppingCart size={24} aria-hidden="true" />,
    },
    {
      title: "Staff Attendance Tracker", // NEW APTRO FEATURE
      desc: "Monitor employee check-ins and check-outs effortlessly. Keep a precise digital log of staff attendance across all your shop locations.",
      icon: <Clock size={24} aria-hidden="true" />,
    },
    {
      title: "Payroll Management", // NEW APTRO FEATURE
      desc: "Automate your employee salary calculations. Generate salary slips and manage staff advances seamlessly within the app.",
      icon: <Users size={24} aria-hidden="true" />,
    },
    {
      title: "E-Invoicing Workflows", // NEW APTRO FEATURE
      desc: "Stay fully compliant with government mandates. Generate and push valid e-invoices directly from your mobile device.",
      icon: <FileCheck size={24} aria-hidden="true" />,
    },
    {
      title: "Sales & Digital Khata",
      desc: "Monitor your digital ledger. Check your daily profits, pending payments, and monthly revenue with simple business charts.",
      icon: <BarChart3 size={24} aria-hidden="true" />,
    },
    {
      title: "Mobile & PC Sync",
      desc: "Manage your business from anywhere. Your data syncs instantly between the Android app and the desktop web dashboard.",
      icon: <Smartphone size={24} aria-hidden="true" />,
    },
    {
      title: "Secure Cloud Backup",
      desc: "Your data is locked and safe. We auto-save your inventory and payroll data securely, so your business ledger is never lost.",
      icon: <ShieldCheck size={24} aria-hidden="true" />,
    }
  ];

  return (
    <section 
      id="features" 
      aria-labelledby="features-heading"
      className="relative py-24 bg-[#F8F9FA] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.h2 
            id="features-heading"
            variants={fadeUpItem} 
            className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-6 text-[#1F1F1F]"
          >
            Everything you need to run your <span className="text-[#1A73E8]">growing business.</span>
          </motion.h2>
          
          <motion.p variants={fadeUpItem} className="text-[16px] md:text-[18px] text-[#444746] leading-relaxed">
            Aptro replaces multiple apps with one unified platform. Handle billing, track inventory, and manage your staff without touching a piece of paper.
          </motion.p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none m-0 p-0"
        >
          {features.map((f, i) => (
            <motion.li 
              key={i} 
              variants={fadeUpItem}
              className="group p-8 bg-white border border-[#DADCE0] rounded-[24px] transition-all duration-300 hover:shadow-lg hover:border-transparent flex flex-col"
            >
              <div className="mb-6 inline-flex w-14 h-14 items-center justify-center rounded-full bg-[#E8F0FE] text-[#1A73E8] transition-transform duration-300 group-hover:scale-110">
                {f.icon}
              </div>
              
              <div>
                <h3 className="text-[20px] font-medium mb-3 text-[#1F1F1F]">
                  {f.title}
                </h3>
                
                <p className="text-[#444746] leading-relaxed text-[15px]">
                  {f.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
}