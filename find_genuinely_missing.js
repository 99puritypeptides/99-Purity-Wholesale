const fs = require('fs');

const retail = JSON.parse(fs.readFileSync('C:/Users/aquib/OneDrive/Desktop/99 Purity Peptides NextJS/parsed_retail_products_v2.json', 'utf8'));
const wholesale = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));

// Normalize names for comparison
const normalize = (name) => {
  if (!name) return '';
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
};

const wNames = new Set(wholesale.map(w => normalize(w.name)));
const wSlugs = new Set(wholesale.map(w => w.slug));

// Hardcoded map of known differences (retail slug -> wholesale slug)
const slugMap = {
  'bac-water-bacteriostatic-water': 'bac-water',
  'bpc-tb-500-research-peptide-blend': 'bpc-5mg-tb-5mg'
};

const genuinelyMissing = [];

for (const rp of retail) {
  const normName = normalize(rp.name);
  const mappedSlug = slugMap[rp.slug] || rp.slug;
  
  if (wNames.has(normName) || wSlugs.has(mappedSlug)) {
    // Already exists
    continue;
  }
  
  genuinelyMissing.push(rp);
}

fs.writeFileSync('genuinely_missing.json', JSON.stringify(genuinelyMissing, null, 2));
console.log(`Found ${genuinelyMissing.length} genuinely missing products.`);
