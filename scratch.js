const fs = require('fs');

const files = [
  'glp1-metabolic-peptides',
  'growth-hormone',
  'healing-recovery-peptides',
  'cognitive-nootropic',
  'anti-aging-longevity',
  'cosmetic-aesthetic',
  'ancillaries'
];

files.forEach(category => {
  const file = `f:/Belk Digital Projects/99-Purity-Wholesale/src/app/[locale]/products/${category}/page.tsx`;
  let content = fs.readFileSync(file, 'utf8');

  // 1. Add import
  if (!content.includes('import productsData')) {
    content = content.replace("import { Link } from '@/i18n/routing';", "import { Link } from '@/i18n/routing';\nimport productsData from '@/data/products.json';");
  }

  // 2. Replace const products = [ ... ]; with productsData
  const regex = /const products = \[\s*\{[\s\S]*?\];/;
  content = content.replace(regex, `const products = productsData.filter(p => p.category === '${category}');`);

  // 3. Add View Product Details button
  const linkHtml = `<Link href={\`/products/\${product.category}/\${product.slug}\`} className="w-full bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent/10 font-bold py-3 rounded-md transition-colors font-rajdhani uppercase tracking-wider flex items-center justify-center gap-2">
                    View Product Details
                  </Link>`;
  if (!content.includes('View Product Details')) {
    content = content.replace('<div className="flex flex-col gap-3">', `<div className="flex flex-col gap-3">\n                  ${linkHtml}`);
  }

  fs.writeFileSync(file, content);
});
console.log('Done');
