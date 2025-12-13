import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jskstrust.org';
  
  // All your website pages
  const routes = [
    '',
    '/about',
    '/programs',
    '/impact',
    '/technology',
    '/team',
    '/certifications',
    '/compliance',
    '/gallery',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route === '/gallery' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/about' || route === '/programs' ? 0.9 : 0.8,
  }));
}
