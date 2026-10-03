"use client";

import { useRef } from "react";
import { 
  ShoppingCart, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  Smartphone, 
  Globe
} from "lucide-react";
import { Easing, motion, Variants, useScroll, useTransform } from "framer-motion";

// Material Design standard easing
const materialEasing: Easing = [0.2, 0, 0, 1];

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEasing } }
};

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of the horizontal container
  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });

  // Map the scroll progress to the width of the progress bar
  const progressBarWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  // Features rewritten in very simple English
  const features = [
    {
      title: "Track Every Order",
      desc: "See exactly where your customer's order is. From buying to delivery, you will never lose a sale record.",
      icon: <ShoppingCart size={24} />,
    },
    {
      title: "Make Quick Bills",
      desc: "Make clean bills in seconds. Send them to your customers quickly and get paid faster without any confusion.",
      icon: <FileText size={24} />,
    },
    {
      title: "See Your Profits",
      desc: "Check how much money you are making today, this month, or this year with simple charts that are easy to read.",
      icon: <BarChart3 size={24} />,
    },
    {
      title: "Safe and Secure",
      desc: "Your data is locked and safe. We save your work automatically so you never lose your numbers or bills.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Works on Phone & PC",
      desc: "Use the app on your mobile phone or computer. Everything updates fast, even if your internet is slow.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "Grow Your Shop",
      desc: "Add different taxes easily and sell your items to anyone, anywhere without doing hard math.",
      icon: <Globe size={24} />,
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-[#F8F9FA] overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12 text-left max-w-2xl"
        >
          <motion.h2 variants={fadeUpItem} className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4 text-[#1F1F1F]">
            Easy tools for your <span className="text-[#1A73E8]">daily work.</span>
          </motion.h2>
          
          <motion.p variants={fadeUpItem} className="text-[16px] md:text-[18px] text-[#444746] leading-relaxed">
            Aptro gives you simple tools to run your shop. Spend less time writing on paper and more time with your customers.
          </motion.p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Section */}
      <div className="relative w-full">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Invisible spacer to align the first item with the container grid */}
          <div className="w-[max(0px,calc((100vw-1280px)/2))] shrink-0 hidden xl:block" />

          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: materialEasing }}
              className="relative w-[85vw] sm:w-[320px] md:w-[360px] shrink-0 snap-center p-8 bg-white border border-[#DADCE0] rounded-[24px] overflow-hidden transition-shadow duration-300 hover:shadow-md flex flex-col min-h-[280px]"
            >
              {/* Icon Container - Google Style Circular Container */}
              <div className="mb-6 inline-flex w-14 h-14 items-center justify-center rounded-full bg-[#E8F0FE] text-[#1A73E8]">
                {f.icon}
              </div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-[20px] font-medium mb-3 text-[#1F1F1F]">
                  {f.title}
                </h3>
                
                <p className="text-[#444746] leading-relaxed text-[15px]">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Invisible spacer for padding at the end of the scroll */}
          <div className="w-6 shrink-0 xl:w-[max(0px,calc((100vw-1280px)/2))] block" />
        </div>

        {/* Scroll Progress Bar Indicator - Flat Google Style */}
        <div className="max-w-[1280px] mx-auto px-6 mt-2">
          <div className="w-full h-1.5 bg-[#E1E3E1] rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#1A73E8] rounded-full"
              style={{ width: progressBarWidth }}
            />
          </div>
        </div>
        
      </div>
      
      {/* Global styles to hide the default scrollbar but keep functionality */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}