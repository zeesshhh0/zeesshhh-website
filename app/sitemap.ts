// sitemap.ts
import { MetadataRoute } from 'next'; // Import MetadataRoute type from 'next'

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://zeesshhh.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl, // Use your baseUrl here
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}