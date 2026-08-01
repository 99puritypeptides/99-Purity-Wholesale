const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '..', 'src', 'data', 'locations.json');
const locations = JSON.parse(fs.readFileSync(locationsPath, 'utf8'));

const regionMap = {
  "alabama": "Southeast",
  "alaska": "West Coast",
  "arizona": "Southwest",
  "arkansas": "Southeast",
  "california": "West Coast",
  "colorado": "Mountain",
  "connecticut": "Northeast",
  "delaware": "Southeast",
  "florida": "Southeast",
  "georgia": "Southeast",
  "hawaii": "West Coast",
  "idaho": "Mountain",
  "illinois": "Midwest",
  "indiana": "Midwest",
  "iowa": "Midwest",
  "kansas": "Midwest",
  "kentucky": "Southeast",
  "louisiana": "Southeast",
  "maine": "Northeast",
  "maryland": "Southeast",
  "massachusetts": "Northeast",
  "michigan": "Midwest",
  "minnesota": "Midwest",
  "mississippi": "Southeast",
  "missouri": "Midwest",
  "montana": "Mountain",
  "nebraska": "Midwest",
  "nevada": "Mountain",
  "new-hampshire": "Northeast",
  "new-jersey": "Northeast",
  "new-mexico": "Southwest",
  "new-york": "Northeast",
  "north-carolina": "Southeast",
  "north-dakota": "Midwest",
  "ohio": "Midwest",
  "oklahoma": "Southwest",
  "oregon": "West Coast",
  "pennsylvania": "Northeast",
  "rhode-island": "Northeast",
  "south-carolina": "Southeast",
  "south-dakota": "Midwest",
  "tennessee": "Southeast",
  "texas": "Southwest",
  "utah": "Mountain",
  "vermont": "Northeast",
  "virginia": "Southeast",
  "washington": "West Coast",
  "west-virginia": "Southeast",
  "wisconsin": "Midwest",
  "wyoming": "Mountain",
  "united-states": "United States"
};

let updatedCount = 0;
locations.forEach(loc => {
  const targetRegion = regionMap[loc.slug];
  if (targetRegion) {
    if (loc.region !== targetRegion) {
      loc.region = targetRegion;
      updatedCount++;
    }
  } else {
    console.warn(`No region mapping found for slug: ${loc.slug}`);
  }
});

fs.writeFileSync(locationsPath, JSON.stringify(locations, null, 2), 'utf8');
console.log(`Successfully updated regions for ${updatedCount} locations in locations.json`);
