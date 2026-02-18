import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CursorFollower from "@/components/CursorFollower";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Enables canonical URLs on every page automatically
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: "Kamala Farms | Sustainable Agriculture & Hydroponics",
    template: "%s | Kamala Farms",
  },
  description:
    "Kamala Farms is a hydroponics company addressing food security, food transparency and accessibility to nutritious food. Turnkey farm setup, training, and management services.",
  keywords: [
    "hydroponics",
    "sustainable agriculture",
    "hydroponic farming India",
    "farm setup",
    "Kamala Farms",
    "Hyderabad",
    "smart farming",
    "turnkey hydroponic setup",
    "contract farming",
    "hydroponic training",
  ],

  // Open Graph — used by Facebook, WhatsApp, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/hero/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Kamala Farms — Sustainable Agriculture & Hydroponics",
      },
    ],
  },

  // Tells search engines this is the primary version of each page
  alternates: {
    canonical: "./",
  },

  // Additional SEO meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for Organization + LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/logo.png`,
  image: `${SITE_CONFIG.url}/images/hero/hero-banner.png`,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  foundingDate: String(SITE_CONFIG.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "IDFC First Bank, Veer Chambers, Co-karma, 4th Floor, 1-10-63/1/1, Chikoti Garden Rd, Old Patigadda",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500016",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4375,
    longitude: 78.4508,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://instagram.com/kamalafarms",
    "https://linkedin.com/company/kamalafarms",
    "https://youtube.com/@kamalafarms",
  ],
  areaServed: [
    { "@type": "State", name: "Telangana" },
    { "@type": "State", name: "Andhra Pradesh" },
    { "@type": "State", name: "Karnataka" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "State", name: "Madhya Pradesh" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <CursorFollower />
      </body>
    </html>
  );
}
