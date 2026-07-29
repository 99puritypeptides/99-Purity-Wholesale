const fs = require('fs');

const files = [
  'src/app/[locale]/layout.tsx',
  'src/app/[locale]/about/layout.tsx',
  'src/app/[locale]/blog/page.tsx',
  'src/app/[locale]/contact/layout.tsx',
  'src/app/[locale]/glossary/page.tsx',
  'src/app/[locale]/locations/page.tsx',
  'src/app/[locale]/locations/[slug]/page.tsx',
  'src/app/[locale]/products/page.tsx',
  'src/app/[locale]/products/aminos/page.tsx',
  'src/app/[locale]/products/cellular-health-research/page.tsx',
  'src/app/[locale]/products/cognitive-function/page.tsx',
  'src/app/[locale]/products/essentials/page.tsx',
  'src/app/[locale]/products/growth-factor-research/page.tsx',
  'src/app/[locale]/products/metabolic-research/page.tsx',
  'src/app/[locale]/products/recovery-research/page.tsx',
  'src/app/[locale]/products/sleep-cycle-investigation/page.tsx',
  'src/app/[locale]/products/[category]/page.tsx',
  'src/app/[locale]/wholesale-application/page.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('alternates:')) {
    console.log(`Skipping ${file}, already has alternates`);
    return;
  }
  
  let canonicalUrl = '';
  if (file === 'src/app/[locale]/layout.tsx') {
    canonicalUrl = `\`/\${locale === 'en' ? '' : locale}\``;
  } else if (file === 'src/app/[locale]/locations/[slug]/page.tsx') {
    canonicalUrl = `\`/\${locale === 'en' ? '' : locale}/locations/\${params.slug}\``;
  } else if (file === 'src/app/[locale]/products/[category]/page.tsx') {
    canonicalUrl = `\`/\${locale === 'en' ? '' : locale}/products/\${params.category}\``;
  } else {
    let segment = file.replace('src/app/[locale]/', '').replace('/layout.tsx', '').replace('/page.tsx', '').replace('.tsx', '');
    if (segment === '') {
      canonicalUrl = `\`/\${locale === 'en' ? '' : locale}\``;
    } else {
      canonicalUrl = `\`/\${locale === 'en' ? '' : locale}/${segment}\``;
    }
  }

  const metaMatch = content.match(/generateMetadata[\s\S]*?return\s*\{([\s\S]*?)\};/);
  if (metaMatch) {
    const replacement = `\n    alternates: { canonical: ${canonicalUrl} },\n  };`;
    content = content.replace(metaMatch[0], metaMatch[0].replace(/};\s*$/, replacement));
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
