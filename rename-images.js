const fs = require('fs');
const path = require('path');
const glob = require('glob');

const oldDir = path.join('public', 'Product images');
const newDir = path.join('public', 'product-images');

if (fs.existsSync(oldDir)) {
  fs.renameSync(oldDir, newDir);
  console.log(`Renamed directory to ${newDir}`);
}

const images = fs.readdirSync(newDir);
const renameMap = {};

images.forEach(img => {
  // Special overrides
  let newName = img;
  if (img === 'GLOW.jpg') newName = 'glow-hair-skin-nail-blend.jpg';
  else if (img === 'KLOW.jpg') newName = 'klow-custom-peptide-kit.jpg';
  else if (img === 'MIC BLEND.png') newName = 'mic-blend-lipo-c-b12.png';
  else {
    // General kebab case rule:
    // "Semaglutide 10mg.jpg" -> "semaglutide-10mg.jpg"
    // "BPC-157.TB-500 10.10mg.jpg" -> "bpc-157-tb-500-10-10mg.jpg"
    const ext = path.extname(img);
    const base = path.basename(img, ext);
    newName = base
      .toLowerCase()
      .replace(/[\s\.\+]+/g, '-') // replace spaces, dots, pluses with dashes
      .replace(/-+/g, '-') // collapse multiple dashes
      .replace(/[^a-z0-9\-]/g, '') // remove special chars
      + ext.toLowerCase();
  }
  
  if (img !== newName) {
    fs.renameSync(path.join(newDir, img), path.join(newDir, newName));
    renameMap[img] = newName;
  }
});

console.log('Renamed files:', Object.keys(renameMap).length);

// Update all src/ files
const srcFiles = glob.sync('src/**/*.{ts,tsx,json}');
let updatedFiles = 0;

srcFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let originalContent = content;

  // Replace folder path
  content = content.replace(/\/Product images\//g, '/product-images/');
  content = content.replace(/\/Product%20images\//g, '/product-images/');
  
  // Replace filenames
  for (const [oldName, newName] of Object.entries(renameMap)) {
    // Some filenames might be explicitly written in strings
    const escapedOldName = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedOldName, 'g');
    content = content.replace(regex, newName);
  }

  if (content !== originalContent) {
    fs.writeFileSync(f, content);
    updatedFiles++;
  }
});

console.log(`Updated ${updatedFiles} files in src/`);
