import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import "@/styles/globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL('https://jskstrust.org'),
  title: {
    default: "JSKS Trust - Jharkhand Shramik Kalyan Samiti | Mining Welfare & CSR Programs",
    template: "%s | JSKS Trust"
  },
  description:
    "Official website of Jharkhand Shramik Kalyan Samiti (JSKS Trust). Leading NGO providing mining welfare, CSR programs, worker safety, and compliance solutions in Jharkhand. NGO DARPAN ID: JH/2025/0615181. Donate now for worker welfare.",
  keywords: [
    "JSKS Trust",
    "Jharkhand Shramik Kalyan Samiti",
    "NGO Jharkhand",
    "Mining Welfare Jharkhand",
    "Mining Compliance India",
    "CSR Programs Mining",
    "Workers Welfare Jharkhand",
    "Donate Mining Workers",
    "Jharkhand NGO Trust",
    "Mining Safety Programs",
    "Labour Welfare India",
    "MMDR Compliance",
    "Shramik Kalyan Samiti",
    "Mining CSR Jharkhand",
    "Worker Rights India",
    "NGO DARPAN JH/2025/0615181",
    "Coal Mining Welfare",
    "Maithan Power Limited CSR",
    "Coal India CSR Partner"
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
    url: "https://jskstrust.org",
    title: "JSKS Trust - Jharkhand Shramik Kalyan Samiti | Donate for Mining Workers Welfare",
    description:
      "Leading mining welfare NGO in Jharkhand. JSKS Trust provides CSR programs, worker safety, health camps, and compliance solutions. NGO DARPAN: JH/2025/0615181. Donate Now!",
    siteName: "JSKS Trust - Jharkhand Shramik Kalyan Samiti",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "JSKS Trust Logo - Jharkhand Shramik Kalyan Samiti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSKS Trust - Mining Welfare NGO Jharkhand | Donate Now",
    description:
      "Leading NGO for mining sector workers welfare in Jharkhand. CSR programs, health camps, worker safety. NGO DARPAN: JH/2025/0615181. Donate Today!",
    images: ["/logo.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <link rel="canonical" href="https://jskstrust.org" />
        <meta name="google-site-verification" content="your-verification-code" />
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
