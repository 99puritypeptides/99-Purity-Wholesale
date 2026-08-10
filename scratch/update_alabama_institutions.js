const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '../src/data/locations.json');
const locationsData = JSON.parse(fs.readFileSync(locationsPath, 'utf-8'));

const alabamaIndex = locationsData.findIndex(loc => loc.slug === 'alabama');

if (alabamaIndex !== -1) {
  const alabama = locationsData[alabamaIndex];
  
  alabama.researchInstitutions = "While Alabama's applied-research base is anchored by major entities like Southern Research and the HudsonAlpha Institute for Biotechnology, our supply network specifically serves the vital layer of independent contract labs and clinical research operations that support the state's broader medical and pharmaceutical sector.";
  
  alabama.universities = "Though the University of Alabama at Birmingham, Auburn University, and the University of Alabama maintain the state's largest academic biomedical footprints, our wholesale distribution focuses on equipping the independent, private-sector testing and life-sciences labs that operate alongside them.";
  
  fs.writeFileSync(locationsPath, JSON.stringify(locationsData, null, 2));
  console.log('Successfully updated Alabama researchInstitutions and universities content in locations.json');
} else {
  console.log('Alabama not found');
}
