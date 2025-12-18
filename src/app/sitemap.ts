import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jskstrust.org';
  
  // Priority pages for better SEO
  const pages = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/about', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/programs', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/impact', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/team', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/certifications', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/gallery', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/technology', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/compliance', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { route: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
