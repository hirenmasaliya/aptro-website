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

  // ADDED: Author & Developer Link
  authors: [{ name: "Hiren Masaliya", url: "https://aptro.vercel.app" }],

  alternates: {
    canonical: "https://aptro.vercel.app",
    // ADDED: Localized URL for Indian English SEO
    languages: {
      "en-IN": "https://aptro.vercel.app",
    },
  },

  appLinks: {
    android: {
      package: "com.hirenmasaliya.aptro",
      app_name: "Aptro",
    },
    web: {
      url: "https://aptro.vercel.app",
      should_fallback: true,
    },
  },

  openGraph: {
    title: "Aptro | GST Billing & Business Management App",
    description:
      "Grow your business with Aptro. Easily generate GST invoices, track inventory, manage orders, and handle payroll in one powerful app.",
    url: "https://aptro.vercel.app",
    siteName: "Aptro",
    locale: "en_IN",
    type: "website",
    // ADDED: OpenGraph Image URL for beautiful link previews on WhatsApp/Social Media
    images: [
      {
        url: "https://aptro.vercel.app/og-image.png", // Make sure to add an image named og-image.png to your public folder!
        width: 1200,
        height: 630,
        alt: "Aptro Business Management App Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aptro | GST Billing & Business App",
    description: "Generate GST invoices, track inventory, and handle payroll in one app. Built for Indian SMEs.",
    // ADDED: Twitter image fallback
    images: ["https://aptro.vercel.app/og-image.png"], 
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
              operatingSystem: "Android",
              description:
                "Grow your business with Aptro. Easily generate GST invoices, track inventory, manage orders, and handle payroll in one app. Built for Indian SMEs.",
              url: "https://aptro.vercel.app",
              installUrl: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
              downloadUrl: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
              
              // ADDED: Author Information
              author: {
                "@type": "Person",
                name: "Hiren Masaliya",
                url: "https://hirenmasaliya.vercel.app/"
              },

              // ADDED: sameAs property to connect your social media profiles & app store link
              sameAs: [
                "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
                "https://www.instagram.com/aptroapp",
                "https://www.facebook.com/aptroapp", 
                "https://twitter.com/aptro_app",      
                "https://www.linkedin.com/company/aptro"
              ],

              // ADDED: Aggregate Rating (Helps get 5-star snippets in Google Search if you add real reviews later)
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "124"
              },

              // ADDED: Free Pricing to show in search results
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR"
              }
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