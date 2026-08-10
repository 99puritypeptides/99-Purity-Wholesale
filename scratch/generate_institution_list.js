const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '../src/data/locations.json');
const citiesPath = path.join(__dirname, '../src/data/cities.json');

const locationsData = JSON.parse(fs.readFileSync(locationsPath, 'utf-8'));
const citiesData = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

const keywords = ['University', 'Institute', 'College', 'Hospital', 'Medical Center', 'Research Center', 'Clinic', 'School of Medicine'];
const ignoreList = ['The University', 'State University', 'Research Institutions', 'Independent Institute'];

let mdContent = "# List of Specific Organizations in Locations and Cities\n\n";

function getMatches(text) {
  if (!text) return [];
  const matches = [];
  keywords.forEach(kw => {
    // Regex for capitalized words before or after the keyword
    const regex = new RegExp(`(?:[A-Z][A-Za-z]+\\s+){1,4}${kw}|${kw}(?:\\s+of)?(?:\\s+[A-Z][A-Za-z]+){1,4}`, 'g');
    let match;
    while ((match = regex.exec(text)) !== null) {
      const cleanMatch = match[0].trim();
      if (!ignoreList.includes(cleanMatch)) {
        matches.push(cleanMatch);
      }
    }
  });
  return [...new Set(matches)]; // Unique
}

mdContent += "## State Pages\n\n";
locationsData.forEach(loc => {
  const fields = ['bodyP1', 'bodyP2', 'bodyP3', 'institutionsServed', 'researchInstitutions', 'universities', 'biotechOverview', 'industriesWeSupply'];
  let stateMatches = [];
  
  fields.forEach(field => {
    stateMatches.push(...getMatches(loc[field]));
  });
  if (loc.localFaqs) {
    loc.localFaqs.forEach((faq) => {
      stateMatches.push(...getMatches(faq.a));
    });
  }
  
  stateMatches = [...new Set(stateMatches)];
  if (stateMatches.length > 0) {
    mdContent += `### ${loc.city || loc.slug}\n`;
    stateMatches.forEach(m => {
      mdContent += `- ${m}\n`;
    });
    mdContent += "\n";
  }
});

mdContent += "## City Pages\n\n";
citiesData.forEach(city => {
  const fields = ['bodyP1', 'bodyP2', 'bodyP3', 'institutionsServed', 'researchInstitutions', 'universities', 'biotechOverview', 'industriesWeSupply'];
  let cityMatches = [];
  
  fields.forEach(field => {
    cityMatches.push(...getMatches(city[field]));
  });
  if (city.localFaqs) {
    city.localFaqs.forEach((faq) => {
      cityMatches.push(...getMatches(faq.a));
    });
  }
  
  cityMatches = [...new Set(cityMatches)];
  if (cityMatches.length > 0) {
    mdContent += `### ${city.city} (${city.stateSlug})\n`;
    cityMatches.forEach(m => {
      mdContent += `- ${m}\n`;
    });
    mdContent += "\n";
  }
});

// Write to artifact directory
const artifactPath = "C:\\Users\\ADIL RAZA KHAN\\.gemini\\antigravity-ide\\brain\\0e5dea7d-0b84-4634-8094-f704e22bb7bb\\institution_list.md";
fs.writeFileSync(artifactPath, mdContent);
console.log('Successfully wrote institution_list.md');
