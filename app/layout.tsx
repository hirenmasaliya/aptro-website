import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aptro.vercel.app"),

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
    canonical: "https://aptro.vercel.app",
  },

  openGraph: {
    title: "Aptro – Business Management App",
    description:
      "Manage orders, generate invoices, and grow your business with Aptro.",
    url: "https://aptro.vercel.app",
    siteName: "Aptro",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aptro App",
    description:
      "Business management & invoice app for small businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="ujepGveDMXYuesLNDXExdHvx6bJVO6a9MODRvUAt4kg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* App Name */}
        <meta name="application-name" content="Aptro App" />

        {/* Structured Data (SEO BOOST 🔥) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Aptro",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Android",
              description:
                "Aptro is a business management and invoice generator app for small businesses.",
              url: "https://aptro.vercel.app",
            }),
          }}
        />
      </head>

      <body className="bg-[#050505] text-white selection:bg-blue-500/30">
        <Navbar />

        {/* Keeps footer at bottom */}
        <div className="min-h-[calc(100vh-200px)]">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}