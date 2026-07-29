const fs = require('fs');
const https = require('https');
const path = require('path');

const retail = JSON.parse(fs.readFileSync('genuinely_missing.json', 'utf8'));
const wholesalePath = 'src/data/products.json';
const wholesale = JSON.parse(fs.readFileSync(wholesalePath, 'utf8'));

// Format slug to Title Case
function formatName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Iu', 'IU')
    .replace('Mg', 'mg');
}

const newProducts = [];
const downloadTasks = [];

retail.forEach(p => {
  const name = formatName(p.slug);
  
  // Extract variants (e.g. from 10mg -> 10mgx10)
  let specs = [];
  if (p.variants && p.variants.length > 0) {
    p.variants.forEach(v => {
      // Very basic parsing. Default to '10mg×10 Vials' if we can't parse SKU
      // The SKU might look like KPV-SPRAY-K10 or HCG-5000-K10
      let size = "10mg";
      if (v.sku && v.sku.match(/(\d+(mg|iu))/i)) {
        size = v.sku.match(/(\d+(mg|iu))/i)[1].toLowerCase();
      } else if (p.slug.match(/(\d+(mg|iu|mcg))/i)) {
        size = p.slug.match(/(\d+(mg|iu|mcg))/i)[1].toLowerCase();
      }
      
      let count = 10;
      if (v.sku && v.sku.match(/K(\d+)/)) count = parseInt(v.sku.match(/K(\d+)/)[1]);
      
      const specString = `${size}×${count}`;
      if (!specs.includes(specString)) specs.push(specString);
    });
  }
  
  if (specs.length === 0) {
    // default spec
    specs = ["10mg×10"];
    if (p.slug.includes("spray")) specs = ["15ml×10"];
  }

  const newProduct = {
    name: name,
    slug: p.slug,
    category: "metabolic-research", // default category
    specs: specs,
    cas: "N/A",
    description: `Buy ${name} wholesale. High-quality research compound. Independently tested for >99% purity. Laboratory use only.`
  };
  
  newProducts.push(newProduct);
  wholesale.push(newProduct);
  
  // Image download task
  if (p.image_filename) {
    downloadTasks.push({
      url: `https://pub-82f90d490a8048aa9629f0ae3ea6f567.r2.dev/Product%20Images/${encodeURIComponent(p.image_filename)}`,
      dest: path.join('public', 'product-images', p.image_filename)
    });
  }
});

fs.writeFileSync(wholesalePath, JSON.stringify(wholesale, null, 2));
console.log(`Appended ${newProducts.length} missing products to wholesale data.`);

fs.writeFileSync('download_images.json', JSON.stringify(downloadTasks, null, 2));
