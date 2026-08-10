const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '../src/data/locations.json');
const citiesPath = path.join(__dirname, '../src/data/cities.json');

const locationsData = JSON.parse(fs.readFileSync(locationsPath, 'utf-8'));
const citiesData = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

const keywords = ['University', 'Institute', 'College', 'Hospital', 'Medical Center', 'Research Center', 'Clinic'];
const ignoreList = ['The University', 'State University', 'Research Institutions']; // common generic terms

function checkText(text, sourceName) {
  if (!text) return;
  const matches = [];
  
  keywords.forEach(kw => {
    // Look for phrases like "University of [Something]" or "[Something] University"
    // Very basic regex to catch Capitalized words around keywords
    const regex = new RegExp(`(?:[A-Z][a-z]+\\s+){1,3}${kw}|${kw}(?:\\s+of)?(?:\\s+[A-Z][a-z]+){1,3}`, 'g');
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (!ignoreList.includes(match[0])) {
        matches.push(match[0]);
      }
    }
  });
  
  if (matches.length > 0) {
    // Unique matches
    const uniqueMatches = [...new Set(matches)];
    console.log(`[${sourceName}] possible specific names:`, uniqueMatches.join(', '));
  }
}

console.log('--- LOCATIONS ---');
locationsData.forEach(loc => {
  ['bodyP1', 'bodyP2', 'bodyP3', 'institutionsServed', 'researchInstitutions', 'universities', 'biotechOverview', 'industriesWeSupply'].forEach(field => {
    checkText(loc[field], `State: ${loc.slug} - ${field}`);
  });
  if (loc.localFaqs) {
    loc.localFaqs.forEach((faq, i) => {
      checkText(faq.a, `State: ${loc.slug} - FAQ ${i}`);
    });
  }
});

console.log('\n--- CITIES ---');
citiesData.forEach(city => {
  ['bodyP1', 'bodyP2', 'bodyP3', 'institutionsServed', 'researchInstitutions', 'universities', 'biotechOverview', 'industriesWeSupply'].forEach(field => {
    checkText(city[field], `City: ${city.slug} - ${field}`);
  });
  if (city.localFaqs) {
    city.localFaqs.forEach((faq, i) => {
      checkText(faq.a, `City: ${city.slug} - FAQ ${i}`);
    });
  }
});
