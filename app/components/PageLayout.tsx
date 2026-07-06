"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // 1. Exact routes to hide (e.g., exactly "/privacy")
  const exactHiddenRoutes = ["/privacy", "/terms"];
  
  // 2. Prefixes to hide (e.g., anything starting with "/partner")
  const hiddenPrefixes = ["/partner", '/business'];

  // 3. Check if the current path matches either condition
  const hideNavAndFooter = 
    exactHiddenRoutes.includes(pathname) || 
    hiddenPrefixes.some((prefix) => pathname.startsWith(prefix));

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      
      {/* Keeps footer at bottom */}
      <div className="min-h-[calc(100vh-200px)]">
        {children}
      </div>

      {!hideNavAndFooter && <Footer />}
    </>
  );
}