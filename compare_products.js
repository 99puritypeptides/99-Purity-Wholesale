const fs = require('fs');
const retail = JSON.parse(fs.readFileSync('C:/Users/aquib/OneDrive/Desktop/99 Purity Peptides NextJS/parsed_retail_products.json', 'utf8'));
const wholesale = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'));
const wholesaleSlugs = new Set(wholesale.map(p => p.slug));
const missing = retail.filter(p => !wholesaleSlugs.has(p.slug));
console.log('Found ' + missing.length + ' missing products.');
console.log(missing.map(m => m.slug).join(', '));
fs.writeFileSync('missing_products_to_add.json', JSON.stringify(missing, null, 2));
