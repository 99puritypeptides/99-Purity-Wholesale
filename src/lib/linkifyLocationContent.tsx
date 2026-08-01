import React from 'react';
import { Link } from '@/i18n/routing';
import productsData from '@/data/products.json';
import locationsData from '@/data/locations.json';
import citiesData from '@/data/cities.json';

interface LinkEntity {
  term: string;
  href: string;
}

// States (exclude the country hub record itself)
const stateEntities: LinkEntity[] = locationsData
  .filter((l) => l.slug !== 'united-states')
  .map((l) => ({
    term: l.city,
    href: `/locations/united-states/${l.slug}`,
  }));

// Cities
const cityEntities: LinkEntity[] = citiesData.map((c) => ({
  term: c.city,
  href: `/locations/${c.region.toLowerCase().replace(/ /g, '-')}/${c.stateSlug}/${c.slug}`,
}));

// Products
const productEntities: LinkEntity[] = (productsData as { name: string; slug: string }[]).map((p) => ({
  term: p.name,
  href: `/products/${p.slug}`,
}));

// Longest term first so more specific names win over shorter overlapping ones
// (e.g. a city named the same as part of a longer product/place name).
const allEntities: LinkEntity[] = [...cityEntities, ...stateEntities, ...productEntities].sort(
  (a, b) => b.term.length - a.term.length
);

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

interface LinkifyOptions {
  /** Entity names to never link (e.g. the current page's own city/state name). */
  excludeTerms?: string[];
  /** Max number of links to insert into this block of text. */
  maxLinks?: number;
  /**
   * Hrefs already linked elsewhere on this page (product cards, "Cities We Serve"
   * grid, "Nearby Areas" grid, an earlier paragraph, etc). Shared and mutated across
   * every linkifyText call for a given page render so the same target is never
   * linked twice on one page.
   */
  usedHrefs?: Set<string>;
}

/**
 * Scans a paragraph of location copy for known product/city/state names and turns
 * the first mention of each into a real internal link, capped at maxLinks so the
 * result stays natural instead of reading as keyword-stuffed. Skips any target
 * already linked elsewhere on the page (via usedHrefs) to avoid duplicate on-page links.
 */
export function linkifyText(text: string, opts: LinkifyOptions = {}): React.ReactNode {
  const { excludeTerms = [], maxLinks = 5, usedHrefs } = opts;
  if (!text) return text;

  const excludeSet = new Set(excludeTerms.filter(Boolean).map((t) => t.toLowerCase()));

  type Match = { start: number; end: number; term: string; href: string };
  const matches: Match[] = [];
  const usedTerms = new Set<string>();

  for (const entity of allEntities) {
    if (matches.length >= maxLinks) break;
    const key = entity.term.toLowerCase();
    if (entity.term.length < 4) continue;
    if (excludeSet.has(key) || usedTerms.has(key)) continue;
    if (usedHrefs?.has(entity.href)) continue;

    const regex = new RegExp(`\\b${escapeRegExp(entity.term)}\\b`);
    const m = regex.exec(text);
    if (!m) continue;

    const start = m.index;
    const end = start + m[0].length;
    const overlaps = matches.some((mm) => start < mm.end && end > mm.start);
    if (overlaps) continue;

    matches.push({ start, end, term: m[0], href: entity.href });
    usedTerms.add(key);
    usedHrefs?.add(entity.href);
  }

  if (matches.length === 0) return text;

  matches.sort((a, b) => a.start - b.start);

  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  matches.forEach((m, i) => {
    if (m.start > cursor) nodes.push(text.slice(cursor, m.start));
    nodes.push(
      <Link key={`${m.href}-${i}`} href={m.href} className="text-[#13a7b7] hover:underline font-semibold">
        {m.term}
      </Link>
    );
    cursor = m.end;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));

  return nodes;
}
