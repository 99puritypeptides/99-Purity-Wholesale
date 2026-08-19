import React from 'react';

interface FaqSchemaItem {
  q: string;
  a: string;
}

interface FaqSchemaProps {
  items: FaqSchemaItem[];
}

export default function FaqSchema({ items }: FaqSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
