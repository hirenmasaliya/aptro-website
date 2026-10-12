import type { Metadata } from "next";
import "./globals.css";
import PageLayout from "./components/PageLayout";
import DownloadBanner from "./components/DownloadBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://aptro.vercel.app"),

  // MOVED FROM <head> TO METADATA API
  applicationName: "Aptro",
  verification: {
    google: "ujepGveDMXYuesLNDXExdHvx6bJVO6a9MODRvUAt4kg",
  },

  title: {
    default: "Aptro | GST Billing, Inventory & Business Management App",
    template: "%s | Aptro",
  },

  description:
    "Grow your business with Aptro. Easily generate GST invoices, track inventory, manage orders, and handle payroll in one app. Built for Indian SMEs.",

  keywords: [
    "Aptro",
    "Aptro app",
    "business management app",
    "business management software India",
    "GST billing app",
    "GST invoice generator",
    "order management app India",
    "payroll management app India",
    "create GST bills online",
    "best billing app India"
  ],

  authors: [{ name: "Hiren Masaliya", url: "https://hirenmasaliya.vercel.app/" }],

  alternates: {
    canonical: "https://aptro.vercel.app",
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
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"], 
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
      <body className="bg-[#050505] text-white selection:bg-blue-500/30 pb-20">
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
              author: {
                "@type": "Person",
                name: "Hiren Masaliya",
                url: "https://hirenmasaliya.vercel.app/"
              },
              sameAs: [
                "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
                "https://www.instagram.com/aptroapp",
                "https://www.facebook.com/aptroapp", 
                "https://twitter.com/aptro_app",      
                "https://www.linkedin.com/company/aptro"
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "124"
              },
              offers: {
                "@type": "Offer",
                price: "99/Month",
                priceCurrency: "INR"
              }
            }),
          }}
        />

        <PageLayout>{children}</PageLayout>
        
        <DownloadBanner />
      </body>
    </html>
  );
}