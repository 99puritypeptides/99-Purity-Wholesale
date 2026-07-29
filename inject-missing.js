const fs = require('fs');
const path = require('path');

const clientPages = [
  'src/app/[locale]/compliance',
  'src/app/[locale]/privacy',
  'src/app/[locale]/refund-policy',
  'src/app/[locale]/terms'
];

clientPages.forEach(dir => {
  const segment = path.basename(dir);
  const layoutPath = path.join(dir, 'layout.tsx');
  const title = segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = `import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Layout' });
  // Fallback to title string since some namespaces might not have nav fields for legal
  return {
    title: \`${title} | 99 Purity Wholesale\`,
    description: \`Review our ${title} policies.\`,
    alternates: { canonical: \`/\${locale === 'en' ? '' : locale}/${segment}\` }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
  fs.writeFileSync(layoutPath, content);
  console.log('Created layout for', dir);
});

const serverPages = [
  'src/app/[locale]/legal/disclaimer/page.tsx',
  'src/app/[locale]/legal/privacy/page.tsx',
  'src/app/[locale]/legal/terms/page.tsx'
];

serverPages.forEach(file => {
  const dirName = path.basename(path.dirname(file));
  const title = dirName.charAt(0).toUpperCase() + dirName.slice(1);
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('generateMetadata')) return;
  
  const imports = `import { getTranslations } from "next-intl/server";\n`;
  const metadataBlock = `
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: \`${title} | 99 Purity Wholesale\`,
    description: \`Review our ${title} policies.\`,
    alternates: { canonical: \`/\${locale === 'en' ? '' : locale}/legal/${dirName}\` }
  };
}
`;

  const lines = content.split('\n');
  let lastImportIndex = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIndex = i;
  }
  
  lines.splice(lastImportIndex + 1, 0, imports + metadataBlock);
  fs.writeFileSync(file, lines.join('\n'));
  console.log('Injected metadata into', file);
});

const researchPage = 'src/app/[locale]/products/[category]/[slug]/research/page.tsx';
let researchContent = fs.readFileSync(researchPage, 'utf8');
if (!researchContent.includes('generateMetadata')) {
  const researchMetadata = `
export async function generateMetadata({ params }: { params: { locale: string, category: string, slug: string } }) {
  const titleStr = params.slug.replace(/-/g, ' ').toUpperCase();
  return {
    title: \`Research: \${titleStr} | 99 Purity Wholesale\`,
    description: \`Research data and clinical trials for \${titleStr}.\`,
    alternates: { canonical: \`/\${params.locale === 'en' ? '' : params.locale}/products/\${params.category}/\${params.slug}/research\` }
  };
}
`;
  const lines = researchContent.split('\n');
  let lastImportIndex = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIndex = i;
  }
  lines.splice(lastImportIndex + 1, 0, researchMetadata);
  fs.writeFileSync(researchPage, lines.join('\n'));
  console.log('Injected metadata into', researchPage);
}
