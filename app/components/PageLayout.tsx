
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide Navbar and Footer on exact routes
  const exactHiddenRoutes = ["/privacy", "/terms"];

  // Hide Navbar and Footer on all nested routes
  const hiddenPrefixes = ["/partner", "/business", "/docs", "/tools"];

  const hideNavAndFooter =
    exactHiddenRoutes.includes(pathname) ||
    hiddenPrefixes.some(
      (prefix) =>
        pathname === prefix || pathname.startsWith(`${prefix}/`)
    );

  return (
    <>
      {!hideNavAndFooter && <Navbar />}

      <div className="min-h-[calc(100vh-200px)]">
        {children}
      </div>

      {!hideNavAndFooter && <Footer />}
    </>
  );
}
