"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DownloadBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Slight delay on mount makes the entrance feel intentional and smooth
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        // Wrapper handles fixed positioning and centering without conflicting with motion transforms
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 md:bottom-6 pointer-events-none">
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ 
              type: "spring", 
              bounce: 0.4, 
              duration: 0.8 
            }}
            className="w-full max-w-[420px] pointer-events-auto flex items-center justify-between gap-3 bg-white/85 p-3 backdrop-blur-xl border border-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.04]"
          >
            
            <div className="flex items-center gap-3 overflow-hidden">
              {/* Refined Icon with subtle border and shadow */}
              <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 shadow-sm bg-white">
                <img 
                  src="/favicon.ico" 
                  alt="Aptro Logo" 
                  className="h-full w-full object-cover" 
                />
              </div>
              
              {/* Typography optimized for light background */}
              <div className="flex flex-col truncate">
                <span className="text-[15px] font-semibold tracking-tight text-gray-900 truncate">
                  Aptro
                </span>
                <span className="text-[13px] font-medium text-gray-500 truncate">
                  GST Billing & Inventory
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Premium Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center"
              >
                Get App
              </a>
              
              {/* Refined Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                aria-label="Close banner"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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