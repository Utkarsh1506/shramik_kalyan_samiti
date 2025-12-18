import { Organization, WithContext, WebSite } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Jharkhand Shramik Kalyan Samiti',
  alternateName: ['JSKS Trust', 'Shramik Kalyan Samiti'],
  url: 'https://jskstrust.org',
  logo: 'https://jskstrust.org/logo.jpg',
  image: 'https://jskstrust.org/logo.jpg',
  description: 'JSKS Trust is a leading NGO in Jharkhand providing mining welfare, CSR programs, worker safety, health camps, and compliance solutions. NGO DARPAN ID: JH/2025/0615181, PAN: AAFTJ0785J',
  foundingDate: '2020',
  slogan: 'Compliance-Driven • Technology-Enabled • Community-Focused',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ranchi',
      addressRegion: 'Jharkhand',
      postalCode: '834001',
      addressCountry: 'IN',
    },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ranchi',
    addressLocality: 'Ranchi',
    addressRegion: 'Jharkhand',
    postalCode: '834001',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Jharkhand, India',
  },
  sameAs: [
    'https://jskstrust.org',
    'https://www.jskstrust.org',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-6206490476',
    email: 'info@jskstrust.org',
    availableLanguage: ['English', 'Hindi'],
  },
  taxID: 'AAFTJ0785J',
  legalName: 'Jharkhand Shramik Kalyan Samiti Trust',
};

export const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'JSKS Trust - Jharkhand Shramik Kalyan Samiti',
  alternateName: 'JSKS Trust',
  url: 'https://jskstrust.org',
  description: 'Official website of JSKS Trust providing mining welfare, CSR programs, and worker safety solutions in Jharkhand',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://jskstrust.org?q={search_term_string}',
    },
  },
};

export function generateStructuredData(type: 'organization' | 'breadcrumb' | 'website', data?: any) {
  if (type === 'organization') {
    return organizationSchema;
  }
  if (type === 'website') {
    return websiteSchema;
  }
  
  // Add more schema types as needed
  return null;
}
