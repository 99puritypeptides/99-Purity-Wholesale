const fs = require('fs');
const locations = JSON.parse(fs.readFileSync('src/data/locations.json', 'utf8'));

console.log('Total locations:', locations.length);

const requiredFields = ['slug', 'city', 'state', 'region', 'h1', 'metaTitle', 'metaDesc', 'intro', 'popularProducts', 'whyUs'];
locations.forEach((loc, idx) => {
  requiredFields.forEach(field => {
    if (!loc[field]) {
      console.log(`Location index ${idx} (${loc.slug || 'no-slug'}) is missing field: ${field}`);
    }
  });
  if (loc.localFaqs) {
    if (!Array.isArray(loc.localFaqs)) {
      console.log(`Location index ${idx} (${loc.slug}) localFaqs is not an array`);
    } else {
      loc.localFaqs.forEach((faq, fIdx) => {
        if (!faq.q || !faq.a) {
          console.log(`Location index ${idx} (${loc.slug}) FAQ index ${fIdx} is missing q or a`);
        }
      });
    }
  }
});
console.log('Validation complete.');
