import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  noIndex = false,
  canonical,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shramik-kalyan-samiti.vercel.app';
  const defaultTitle = 'Jharkhand Shramik Kalyan Samiti';
  const defaultDescription = 'Technology-driven compliance and welfare programs for mining sector workers in Jharkhand, India.';
  
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const pageDescription = description || defaultDescription;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords.length > 0 ? keywords : ['NGO', 'Mining', 'Welfare', 'Jharkhand'],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      locale: 'en_IN',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: canonical ? {
      canonical: `${baseUrl}${canonical}`,
    } : undefined,
  };
}

// Predefined SEO configurations for common pages
export const seoConfig = {
  home: {
    title: 'Mining Welfare & Compliance Solutions',
    description: 'Jharkhand Shramik Kalyan Samiti - Empowering mining sector workers through technology-driven compliance, welfare programs, and CSR initiatives.',
    keywords: ['Mining Welfare NGO', 'Jharkhand CSR', 'Mining Compliance', 'Worker Welfare Programs'],
  },
  about: {
    title: 'About Us',
    description: 'Learn about Jharkhand Shramik Kalyan Samiti\'s mission to improve mining sector practices and worker welfare in Jharkhand.',
    keywords: ['About JSKS', 'Mining NGO Mission', 'Worker Welfare Organization'],
  },
  programs: {
    title: 'Welfare Programs',
    description: 'Comprehensive welfare programs for mining sector workers including education, healthcare, skill development, and community support.',
    keywords: ['Welfare Programs', 'CSR Initiatives', 'Worker Support', 'Mining Community Development'],
  },
  impact: {
    title: 'Our Impact',
    description: 'Measurable impact of our welfare and compliance programs in the mining sector across Jharkhand.',
    keywords: ['Social Impact', 'Mining Welfare Results', 'Community Development Impact'],
  },
  technology: {
    title: 'Technology Solutions',
    description: 'Innovative technology solutions for mining compliance, worker safety, and welfare program management.',
    keywords: ['Mining Technology', 'Compliance Software', 'Welfare Tech', 'Mining Safety Solutions'],
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Jharkhand Shramik Kalyan Samiti for partnership opportunities, support, or inquiries.',
    keywords: ['Contact NGO', 'Mining Welfare Contact', 'CSR Partnership'],
  },
};
