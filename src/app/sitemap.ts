import { MetadataRoute } from 'next';
import productsData from '@/data/products.json';
import locationsData from '@/data/locations.json';
import citiesData from '@/data/cities.json';
import { getAllPosts } from '@/utils/mdx';
import servicesRegistry from '@/data/services-content/index';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://99puritywholesale.com';
const locales = ['en', 'es'];

type RouteOptions = {
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
  lastModified?: Date;
};

// Pushes one sitemap entry per locale for a given path, with each entry
// cross-referencing the other locale's URL via alternates.languages (hreflang).
function addRoute(entries: MetadataRoute.Sitemap, path: string, opts: RouteOptions) {
  const enUrl = `${baseUrl}${path}`;
  const esUrl = `${baseUrl}/es${path}`;
  for (const locale of locales) {
    entries.push({
      url: locale === 'en' ? enUrl : esUrl,
      changeFrequency: opts.changeFrequency,
      priority: opts.priority,
      ...(opts.lastModified ? { lastModified: opts.lastModified } : {}),
      alternates: {
        languages: { 'en-US': enUrl, es: esUrl, 'x-default': enUrl },
      },
    });
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base static routes. Note: /legal/disclaimer, /legal/privacy, /legal/terms are
  // intentionally excluded — they are redirect stubs to /compliance, /privacy, /terms.
  const staticRoutes = [
    '',
    '/about',
    '/peptide-calculator',
    '/certificates-of-analysis',
    '/compliance',
    '/contact',
    '/glossary',
    '/locations',
    '/products',
    '/refund-policy',
    '/services',
    '/wholesale-application',
    '/blog',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    addRoute(sitemapEntries, route, {
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    });
  }

  // Category pages
  const categories = Array.from(new Set(productsData.map(p => p.category)));
  for (const category of categories) {
    addRoute(sitemapEntries, `/products/${category}`, { changeFrequency: 'weekly', priority: 0.8 });
  }

  // Service pages
  for (const service of Object.keys(servicesRegistry)) {
    addRoute(sitemapEntries, `/services/${service}`, { changeFrequency: 'monthly', priority: 0.8 });
  }

  // Products (+ research pages)
  for (const product of productsData) {
    addRoute(sitemapEntries, `/products/${product.slug}`, { changeFrequency: 'weekly', priority: 0.9 });
    addRoute(sitemapEntries, `/products/${product.slug}/research`, { changeFrequency: 'monthly', priority: 0.7 });
  }

  // Locations (country + states)
  for (const loc of locationsData) {
    const isCountry = loc.city === loc.region;
    const countrySlug = loc.region.toLowerCase().replace(/ /g, '-');
    const path = isCountry ? `/locations/${countrySlug}` : `/locations/${countrySlug}/${loc.slug}`;
    addRoute(sitemapEntries, path, { changeFrequency: 'monthly', priority: 0.7 });
  }

  // Locations (cities)
  for (const city of citiesData) {
    const countrySlug = city.region.toLowerCase().replace(/ /g, '-');
    const path = `/locations/${countrySlug}/${city.stateSlug}/${city.slug}`;
    addRoute(sitemapEntries, path, { changeFrequency: 'monthly', priority: 0.6 });
  }

  // Blog posts — real per-post lastModified from content frontmatter
  try {
    const posts = await getAllPosts();
    for (const post of posts) {
      addRoute(sitemapEntries, `/blog/${post.slug}`, {
        changeFrequency: 'monthly',
        priority: 0.6,
        lastModified: post.meta?.date ? new Date(post.meta.date) : undefined,
      });
    }
  } catch (error) {
    console.error('Error loading blog posts for sitemap', error);
  }

  return sitemapEntries;
}
