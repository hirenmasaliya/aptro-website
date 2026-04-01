import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Aptro – Business Management & Invoice App",
    template: "%s | Aptro App",
  },

  description:
    "Aptro helps you manage orders, create invoices, and grow your business. Best app for small businesses in India.",

  keywords: [
    "Aptro app",
    "business management app",
    "invoice generator app",
    "order management app India",
  ],

  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-white selection:bg-blue-500/30">
        <Navbar />
        {/* Min-height ensures footer stays at bottom on short pages */}
        <div className="min-h-[calc(100vh-200px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}