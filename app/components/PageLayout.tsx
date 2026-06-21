"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define the routes where you want to hide the Navbar and Footer
  const hiddenRoutes = ["/privacy", "/terms"];
  
  // Check if the current pathname is in the hiddenRoutes array
  const hideNavAndFooter = hiddenRoutes.includes(pathname);

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