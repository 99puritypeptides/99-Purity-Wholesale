const fs = require('fs');
const path = require('path');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const hasParams = /\{\s*params\s*:\s*\{\s*locale\s*:\s*string\s*\}\s*\}\s*\)/.test(content);
  // Add params to function signature if missing
  if (!hasParams) {
    content = content.replace(/export default async function (\w+)\s*\(\)\s*\{/, 'export default async function $1({ params }: { params: { locale: string } }) {');
  }
  // Replace getTranslations calls
  const regex = /getTranslations\(['"]([^'\"]+)['"]\)/g;
  content = content.replace(regex, (match, ns) => {
    return `getTranslations({ locale: params.locale, namespace: '${ns}' })`;
  });
  fs.writeFileSync(filePath, content);
  console.log('Updated', filePath);
}

const baseDir = path.join(__dirname, 'src', 'app', '[locale]');
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      updateFile(fullPath);
    }
  }
}

walk(baseDir);
console.log('All page.tsx files updated.');
