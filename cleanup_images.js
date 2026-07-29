const fs = require('fs');
const path = require('path');

const imgDir = 'public/product-images';
const pdPath = 'src/components/products/ProductDirectory.tsx';
const psPath = 'src/app/[locale]/products/[slug]/page.tsx';

// Collect all used images
const usedImages = new Set();

const pdContent = fs.readFileSync(pdPath, 'utf8');
const pdRegex = /const productImagesMap(?:[\s\S]*?)({[\s\S]*?});/m;
const pdMatch = pdContent.match(pdRegex);
if (pdMatch) {
  try {
    const pdObj = new Function(`return ${pdMatch[1]}`)();
    Object.values(pdObj).forEach(img => usedImages.add(img));
  } catch(e) {}
}

const psContent = fs.readFileSync(psPath, 'utf8');
const psRegex = /const productSpecImagesMap(?:[\s\S]*?)({[\s\S]*?});/m;
const psMatch = psContent.match(psRegex);
if (psMatch) {
  try {
    const psObj = new Function(`return ${psMatch[1]}`)();
    Object.values(psObj).forEach(specs => {
      Object.values(specs).forEach(img => usedImages.add(img));
    });
  } catch(e) {}
}

console.log(`Found ${usedImages.size} active image references in code.`);

const files = fs.readdirSync(imgDir);
let deletedCount = 0;

files.forEach(file => {
  // skip hidden files
  if (file.startsWith('.')) return;
  
  if (!usedImages.has(file)) {
    console.log(`Deleting unused image: ${file}`);
    fs.unlinkSync(path.join(imgDir, file));
    deletedCount++;
  }
});

console.log(`Successfully deleted ${deletedCount} unused old images.`);
