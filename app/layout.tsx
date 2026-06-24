import type { Metadata } from "next";
import "./globals.css";
import PageLayout from "./components/PageLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://aptro.vercel.app"),

  title: {
    default: "Aptro | GST Billing, Inventory & Business Management App",
    template: "%s | Aptro",
  },

  description:
    "Grow your business with Aptro. Easily generate GST invoices, track inventory, manage orders, and handle payroll in one app. Built for Indian SMEs.",

  keywords: [
    // Brand & Core
    "Aptro",
    "Aptro app",
    "business management app",
    "business management software India",
    "best business app 2026",
    "best business app 2027",

    // Invoicing, GST & Billing
    "invoice generator app",
    "free invoice maker",
    "GST billing app",
    "GST invoice generator",
    "billing software for small business",
    "mobile billing app",
    "e-invoicing software India",
    "online invoice creator",
    "quotation maker app",
    "estimate generator",

    // Order & Inventory Management
    "order management app India",
    "order tracking software",
    "sales tracking app",
    "stock and inventory management",
    "B2B order management app",

    // Payroll & Staff Management
    "payroll management app India",
    "staff attendance tracker",
    "employee management software",
    "salary slip generator",
    "attendance and payroll app",

    // Target Audience & Niche (India Specific)
    "billing app for retail shop",
    "kirana store billing app",
    "MSME business app India",
    "freelancer invoice app",
    "SME accounting app",
    "vyapar app alternative",

    // Long-tail & Action-Oriented SEO
    "create GST bills online",
    "send invoice via WhatsApp",
    "business ledger app",
    "expense tracking app for business",
    "best billing app India",
    "digital khata app"
  ],

  alternates: {
    canonical: "https://aptro.vercel.app",
  },

  openGraph: {
    title: "Aptro | GST Billing & Business Management App",
    description:
      "Grow your business with Aptro. Easily generate GST invoices, track inventory, manage orders, and handle payroll in one powerful app.",
    url: "https://aptro.vercel.app",
    siteName: "Aptro",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aptro | GST Billing & Business App",
    description: "Generate GST invoices, track inventory, and handle payroll in one app. Built for Indian SMEs.",
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
        <meta name="application-name" content="Aptro" />

        {/* Structured Data (SEO BOOST 🔥) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Aptro",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Android, Web",
              description:
                "Grow your business with Aptro. Easily generate GST invoices, track inventory, manage orders, and handle payroll in one app. Built for Indian SMEs.",
              url: "https://aptro.vercel.app",
            }),
          }}
        />
      </head>

      <body className="bg-[#050505] text-white selection:bg-blue-500/30">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}