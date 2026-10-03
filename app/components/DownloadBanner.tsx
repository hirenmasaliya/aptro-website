"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Easing } from "framer-motion";

// Material Design standard easing
const materialEasing: Easing = [0.2, 0, 0, 1];

export default function DownloadBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Slight delay on mount makes the entrance feel intentional
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 md:bottom-6 pointer-events-none">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: materialEasing,
            }}
            className="w-full max-w-[400px] pointer-events-auto flex items-center justify-between gap-3 bg-white p-3 border border-[#DADCE0] rounded-[16px] shadow-md"
          >
            
            <div className="flex items-center gap-3 overflow-hidden">
              {/* Google Style App Icon */}
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-[8px] border border-[#DADCE0] bg-white">
                <img 
                  src="/favicon.ico" 
                  alt="Aptro Logo" 
                  className="h-full w-full object-cover" 
                />
              </div>
              
              {/* Simple Typography */}
              <div className="flex flex-col truncate">
                <span className="text-[15px] font-medium text-[#1F1F1F] truncate">
                  Aptro
                </span>
                <span className="text-[13px] text-[#5F6368] truncate">
                  GST Billing & Inventory
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Primary Material Action Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1A73E8] px-5 py-2 text-[14px] font-medium text-white hover:bg-[#1557B0] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2"
              >
                Get App
              </a>
              
              {/* Simple Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="rounded-full p-2 text-[#5F6368] hover:bg-[#F1F3F4] hover:text-[#1F1F1F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
                aria-label="Close banner"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}