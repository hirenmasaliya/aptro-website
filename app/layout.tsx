
import type { Metadata } from "next";
import "./globals.css";
import PageLayout from "./components/PageLayout";

const SITE_URL = "https://aptro.vercel.app";
const APP_URL =
  "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro";

const APP_DESCRIPTION =
  "Looking for the best GST billing app? Aptro helps small businesses create GST invoices, manage inventory, track orders and monitor payments in one simple app.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: "Aptro",

  verification: {
    google: "ujepGveDMXYuesLNDXExdHvx6bJVO6a9MODRvUAt4kg",
  },

  title: {
    default: "Best GST Billing App for Small Businesses | Aptro",
    template: "%s | Aptro",
  },

  description: APP_DESCRIPTION,

  keywords: [
    "best GST billing app",
    "GST billing app for small business",
    "GST invoice maker app",
    "GST billing software India",
    "billing and inventory management app",
    "wholesale order management app",
    "Aptro",
  ],

  authors: [
    {
      name: "Hiren Masaliya",
      url: "https://hirenmasaliya.vercel.app/",
    },
  ],

  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },

  appLinks: {
    android: {
      package: "com.hirenmasaliya.aptro",
      app_name: "Aptro",
    },
    web: {
      url: SITE_URL,
      should_fallback: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Aptro",
    title: "Best GST Billing App for Small Businesses | Aptro",
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aptro GST Billing, Inventory and Order Management App",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best GST Billing App for Small Businesses | Aptro",
    description: APP_DESCRIPTION,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Aptro",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  description: APP_DESCRIPTION,
  url: SITE_URL,
  downloadUrl: APP_URL,
  installUrl: APP_URL,
  author: {
    "@type": "Person",
    name: "Hiren Masaliya",
    url: "https://hirenmasaliya.vercel.app/",
  },
  featureList: [
    "GST and non-GST invoicing",
    "Inventory and stock management",
    "Order management",
    "Customer and vendor management",
    "Payment and outstanding tracking",
  ],
  sameAs: [
    APP_URL,
    "https://www.instagram.com/aptroapp",
    "https://www.facebook.com/aptroapp",
    "https://twitter.com/aptro_app",
    "https://www.linkedin.com/company/aptro",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body className="bg-[#050505] text-white selection:bg-blue-500/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
