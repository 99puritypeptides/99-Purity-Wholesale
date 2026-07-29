const fs = require('fs');

const wProducts = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const slugToImg = JSON.parse(fs.readFileSync('slug_to_img.json', 'utf8'));

// Hardcoded map (wholesale slug -> retail slug)
const slugMap = {
  'bac-water': 'bac-water-bacteriostatic-water',
  'bpc-5mg-tb-5mg': 'bpc-tb-500-research-peptide-blend'
};

const finalMapping = {};
const downloads = [];

wProducts.forEach(p => {
  const rSlug = slugMap[p.slug] || p.slug;
  const imgName = slugToImg[rSlug];
  if (imgName) {
    finalMapping[p.slug] = imgName;
    downloads.push({
      slug: p.slug,
      url: `https://pub-82f90d490a8048aa9629f0ae3ea6f567.r2.dev/Product%20Images/${encodeURIComponent(imgName)}`,
      dest: `public/product-images/${imgName}`
    });
  }
});

fs.writeFileSync('final_image_mapping.json', JSON.stringify(finalMapping, null, 2));
fs.writeFileSync('download_all_images.json', JSON.stringify(downloads, null, 2));
console.log(`Matched ${Object.keys(finalMapping).length} / ${wProducts.length} wholesale products to new retail images.`);
