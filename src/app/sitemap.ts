import { MetadataRoute } from 'next';
import productsData from '@/data/products.json';
import locationsData from '@/data/locations.json';
import { getAllPosts } from '@/utils/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
  const locales = ['en', 'es'];
  
  // Base static routes
  const staticRoutes = [
    '',
    '/about',
    '/peptide-calculator',
    '/certificates-of-analysis',
    '/compliance',
    '/contact',
    '/glossary',
    '/locations',
    '/legal/disclaimer',
    '/legal/privacy',
    '/legal/terms',
    '/products',
    '/refund-policy',
    '/services',
    '/wholesale-application',
    '/blog'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add static routes
  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : `/${locale}`;
    for (const route of staticRoutes) {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  // Add products
  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : `/${locale}`;
    for (const product of productsData) {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
      // also add research pages
      sitemapEntries.push({
        url: `${baseUrl}${prefix}/products/${product.slug}/research`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  // Add locations
  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : `/${locale}`;
    for (const loc of locationsData) {
      sitemapEntries.push({
        url: `${baseUrl}${prefix}/locations/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  // Add blog posts
  try {
    const posts = await getAllPosts();
    for (const locale of locales) {
      const prefix = locale === 'en' ? '' : `/${locale}`;
      for (const post of posts) {
        sitemapEntries.push({
          url: `${baseUrl}${prefix}/blog/${post.slug}`,
          lastModified: new Date(post.meta?.date || new Date()),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      }
    }
  } catch (error) {
    console.error('Error loading blog posts for sitemap', error);
  }

  return sitemapEntries;
}
