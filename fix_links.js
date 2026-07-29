const fs = require('fs');
const glob = require('glob');
const path = require('path');

// Fallback manual replacement files if glob isn't perfect
const files = [
  'src/components/search/GlobalSearch.tsx',
  'src/components/products/ProductDirectory.tsx',
  'src/components/cart/CartItem.tsx',
  'src/app/[locale]/products/_category/page.tsx',
  'src/app/[locale]/products/[slug]/page.tsx',
  'src/app/[locale]/products/[slug]/research/page.tsx',
  'src/app/[locale]/page.tsx'
];

files.forEach(file => {
  const filePath = path.join('f:/Belk Digital Projects/99-Purity-Wholesale', file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Specific replacements based on file context
  if (file.includes('GlobalSearch.tsx')) {
    content = content.replace(/href={`\/products\/`}/g, 'href={`/products/${product.slug}`}');
  } else if (file.includes('ProductDirectory.tsx')) {
    content = content.replace(/href={`\/products\/`}/g, 'href={`/products/${product.slug}`}');
  } else if (file.includes('CartItem.tsx')) {
    content = content.replace(/href={`\/products\/`}/g, 'href={`/products/${item.productId}`}');
  } else if (file.includes('_category/page.tsx')) {
    content = content.replace(/href={`\/products\/`}/g, 'href={`/products/${product.slug}`}');
  } else if (file.includes('products/[slug]/page.tsx')) {
    content = content.replace(/href={`\/products\/`}/g, 'href={`/products/${rp.slug}`}');
  } else if (file.includes('research/page.tsx')) {
    content = content.replace(/href={`\/products\/`}/g, 'href={`/products/${params.slug}`}');
  } else if (file.includes('page.tsx')) {
    content = content.replace(/href={`\/products\/`}/g, 'href={`/products/${product.slug}`}');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed links in ${file}`);
  }
});
