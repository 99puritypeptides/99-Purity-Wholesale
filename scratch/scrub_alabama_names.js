const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '../src/data/locations.json');
const locationsData = JSON.parse(fs.readFileSync(locationsPath, 'utf-8'));

const alabamaIndex = locationsData.findIndex(loc => loc.slug === 'alabama');

if (alabamaIndex !== -1) {
  const alabama = locationsData[alabamaIndex];
  
  // Rewrite bodyP1 to be generic
  alabama.bodyP1 = "Alabama's research infrastructure splits across two primary centers. In Birmingham, decades of drug discovery and development work have created a robust life sciences ecosystem, bolstered by the city's recent designation as a federal biotech Tech Hub. In Huntsville, major institutional campuses inside Cummings Research Park focus heavily on genomics and genetic research. Between them, and alongside the state's leading academic biomedical programs, these two cities account for most of Alabama's institutional research activity, with additional academic research capacity operating out of Auburn and Tuscaloosa.";
  
  // Rewrite localFaqs to remove specific names
  alabama.localFaqs = alabama.localFaqs.map(faq => {
    if (faq.q.includes('tied to any Alabama research institution')) {
      faq.a = "No. We are an independent B2B wholesale supplier and do not have partnerships, affiliations, or supply agreements with any state universities, major research hospitals, or other Alabama institutions. Any reference to Alabama's research landscape on this site is background context, not a claim of an institutional relationship.";
    }
    return faq;
  });
  
  // Rewrite researchInstitutions
  alabama.researchInstitutions = "While Alabama's applied-research base is anchored by major state-backed research hubs and regional biotechnology institutes, our supply network specifically serves the vital layer of independent contract labs and clinical research operations that support the state's broader medical and pharmaceutical sector.";
  
  // Rewrite universities
  alabama.universities = "Though the state's leading public university systems maintain Alabama's largest academic biomedical footprints, our wholesale distribution focuses on equipping the independent, private-sector testing and life-sciences labs that operate alongside them.";
  
  fs.writeFileSync(locationsPath, JSON.stringify(locationsData, null, 2));
  console.log('Successfully scrubbed specific institution names from Alabama locations.json');
} else {
  console.log('Alabama not found');
}
