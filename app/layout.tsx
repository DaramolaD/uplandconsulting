import type { Metadata } from "next";
import { DM_Sans, Forum } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { organizationStructuredData } from "@/components/seo/StructuredData";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Upland - Strategic Consulting for High-Stakes Industries",
    template: "%s | Upland"
  },
  description: "Executive-level strategy and technology consultants specializing in oil & gas, utilities, and public sector organizations. Navigate complex challenges with confidence and clarity.",
  keywords: [
    "strategic consulting",
    "oil gas consulting", 
    "utilities consulting",
    "public sector consulting",
    "technology consulting",
    "executive strategy",
    "regulatory compliance",
    "digital transformation",
    "energy consulting",
    "management consulting"
  ],
  authors: [{ name: "Upland Consulting" }],
  creator: "Upland Consulting",
  publisher: "Upland Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://uplandconsulting.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uplandconsulting.com',
    title: 'Upland - Strategic Consulting for High-Stakes Industries',
    description: 'Executive-level strategy and technology consultants specializing in oil & gas, utilities, and public sector organizations.',
    siteName: 'Upland Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Upland Consulting - Strategic Consulting for High-Stakes Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upland - Strategic Consulting for High-Stakes Industries',
    description: 'Executive-level strategy and technology consultants specializing in oil & gas, utilities, and public sector organizations.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData)
          }}
        />
      </head>
      <body className={`${forum.variable} ${dmSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
