const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '../src/data/locations.json');
const locationsData = JSON.parse(fs.readFileSync(locationsPath, 'utf-8'));

const alaskaIndex = locationsData.findIndex(loc => loc.slug === 'alaska');

if (alaskaIndex !== -1) {
  const alaska = locationsData[alaskaIndex];
  
  // Rewrite institutionsServed
  alaska.institutionsServed = "Alaska's research base is smaller and more specialized than the Lower 48's, and it's concentrated around leading state university programs in arctic biology and marine science, plus a handful of independent clinical and wellness practices in Anchorage, Fairbanks, and Juneau.";
  
  // Rewrite researchInstitutions
  alaska.researchInstitutions = "Alaska's research base is smaller and more specialized than the Lower 48's, and it's concentrated around leading state university programs in arctic biology and marine science, plus a handful of independent clinical and wellness practices in Anchorage, Fairbanks, and Juneau.";
  
  // Rewrite universities
  alaska.universities = "The state's major public university systems cover arctic biology, marine science, and public health, all fields where interest in peptide-based research keeps growing.";
  
  // Rewrite biotechOverview just to be safe, though it didn't mention specific names, it mentioned "university programs" which is fine.
  
  fs.writeFileSync(locationsPath, JSON.stringify(locationsData, null, 2));
  console.log('Successfully scrubbed specific institution names from Alaska locations.json');
} else {
  console.log('Alaska not found');
}
