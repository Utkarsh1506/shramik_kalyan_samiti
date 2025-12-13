import { Organization, WithContext } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Jharkhand Shramik Kalyan Samiti',
  alternateName: 'JSKS Trust',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shramik-kalyan-samiti.vercel.app',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shramik-kalyan-samiti.vercel.app'}/logo.png`,
  description: 'A compliance-driven welfare and technology organization serving mining sector workers in Jharkhand, India.',
  foundingDate: '2020',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ranchi',
      addressRegion: 'Jharkhand',
      addressCountry: 'IN',
    },
  },
  areaServed: {
    '@type': 'Place',
    name: 'Jharkhand, India',
  },
  sameAs: [
    // Add your social media URLs here
    // 'https://www.facebook.com/jskstrust',
    // 'https://twitter.com/jskstrust',
    // 'https://www.linkedin.com/company/jskstrust',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'info@jskstrust.org',
    availableLanguage: ['English', 'Hindi'],
  },
};

export function generateStructuredData(type: 'organization' | 'breadcrumb', data?: any) {
  if (type === 'organization') {
    return organizationSchema;
  }
  
  // Add more schema types as needed
  return null;
}
