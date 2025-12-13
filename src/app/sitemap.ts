import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shramik-kalyan-samiti.vercel.app';
  
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
