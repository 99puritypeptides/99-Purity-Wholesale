const fs = require('fs');

const map = JSON.parse(fs.readFileSync('final_image_mapping.json', 'utf8'));

// 1. Update ProductDirectory.tsx
let pdMapStr = 'const productImagesMap: Record<string, string> = {\n';
Object.entries(map).forEach(([slug, img]) => {
  pdMapStr += `  "${slug}": "${img}",\n`;
});
pdMapStr += '};';

const pdPath = 'src/components/products/ProductDirectory.tsx';
let pdContent = fs.readFileSync(pdPath, 'utf8');

const pdRegex = /const productImagesMap(?:\s*:\s*Record<string,\s*string>)?\s*=\s*{[\s\S]*?};/m;
if (pdRegex.test(pdContent)) {
  pdContent = pdContent.replace(pdRegex, pdMapStr);
  fs.writeFileSync(pdPath, pdContent);
  console.log('Updated ProductDirectory.tsx');
} else {
  console.log('Failed to find productImagesMap in ProductDirectory.tsx');
}

// 2. Update page.tsx (productSpecImagesMap)
let psMapStr = 'const productSpecImagesMap: Record<string, Record<string, string>> = {\n';
Object.entries(map).forEach(([slug, img]) => {
  psMapStr += `  "${slug}": {\n    "10mg": "${img}"\n  },\n`;
});
psMapStr += '};';

const psPath = 'src/app/[locale]/products/[slug]/page.tsx';
let psContent = fs.readFileSync(psPath, 'utf8');

const psRegex = /const productSpecImagesMap(?:\s*:\s*Record<string,\s*Record<string,\s*string>>)?\s*=\s*{[\s\S]*?};/m;
if (psRegex.test(psContent)) {
  psContent = psContent.replace(psRegex, psMapStr);
  fs.writeFileSync(psPath, psContent);
  console.log('Updated page.tsx');
} else {
  console.log('Failed to find productSpecImagesMap in page.tsx');
}
