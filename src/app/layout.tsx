import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Jharkhand Shramik Kalyan Samiti - Compliance-Driven Mining Welfare Solutions",
  description:
    "Jharkhand Shramik Kalyan Samiti Trust: Improving mining sector practices with technology-enabled compliance and welfare programs.",
  keywords: [
    "NGO",
    "Mining",
    "Compliance",
    "Welfare",
    "Jharkhand",
    "CSR",
    "Workers"
  ],
  openGraph: {
    title: "Jharkhand Shramik Kalyan Samiti - Building Safer Mining Communities",
    description:
      "Technology-driven compliance and welfare trust for mining sector in Jharkhand, India.",
    type: "website"
  },
  robots: "index, follow",
  authors: [{ name: "Jharkhand Shramik Kalyan Samiti" }],
  creator: "Jharkhand Shramik Kalyan Samiti"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
