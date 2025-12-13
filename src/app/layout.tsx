import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { organizationSchema } from "@/lib/structured-data";
import "@/styles/globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL('https://jskstrust.org'),
  title: {
    default: "Jharkhand Shramik Kalyan Samiti - Compliance-Driven Mining Welfare Solutions",
    template: "%s | Jharkhand Shramik Kalyan Samiti"
  },
  description:
    "Jharkhand Shramik Kalyan Samiti Trust: Improving mining sector practices with technology-enabled compliance and welfare programs. Empowering workers through CSR initiatives.",
  keywords: [
    "NGO Jharkhand",
    "Mining Welfare",
    "Mining Compliance",
    "CSR Programs",
    "Workers Welfare",
    "Jharkhand NGO",
    "Mining Safety",
    "Labour Welfare",
    "MMDR Compliance",
    "Shramik Kalyan",
    "Mining CSR",
    "Worker Rights India"
  ],
  authors: [{ name: "Jharkhand Shramik Kalyan Samiti" }],
  creator: "Jharkhand Shramik Kalyan Samiti",
  publisher: "Jharkhand Shramik Kalyan Samiti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Jharkhand Shramik Kalyan Samiti - Building Safer Mining Communities",
    description:
      "Technology-driven compliance and welfare trust for mining sector in Jharkhand, India. Empowering workers through education, healthcare, and sustainable development.",
    siteName: "Jharkhand Shramik Kalyan Samiti",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jharkhand Shramik Kalyan Samiti - Mining Welfare Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jharkhand Shramik Kalyan Samiti - Mining Welfare Trust",
    description:
      "Technology-driven compliance and welfare programs for mining sector workers in Jharkhand, India.",
    images: ["/twitter-image.jpg"],
    creator: "@jskstrust",
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={manrope.variable}>
        <a href="#main" className="sr-only">
          Skip to main content
        </a>
        <Header />
        <main id="main" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
