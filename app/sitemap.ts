import { MetadataRoute } from 'next';
import { articles } from './articles/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pacetospeed.xyz';
  
  const distances = ['5k', '10k', 'half-marathon', 'marathon', '50k', '100k', 'custom'];
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/finish-time`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...distances.map(distance => ({
      url: `${baseUrl}/finish-time/${distance}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
