const fs = require('fs');
const path = require('path');

const citiesPath = path.join(__dirname, 'src', 'data', 'cities.json');
const locationsPath = path.join(__dirname, 'src', 'data', 'locations.json');

const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
const locations = JSON.parse(fs.readFileSync(locationsPath, 'utf8'));

const baseUrl = 'https://99puritypeptides.com';

const rows = [
  ['Type', 'Region/Country', 'State', 'City', 'Relative URL', 'Full Production URL', 'H1 Title', 'Meta Title']
];

// 1. Add Locations (Country and States)
locations.forEach(loc => {
  const isCountry = loc.city === loc.region;
  const countrySlug = loc.region.toLowerCase().replace(/ /g, '-');
  const relativeUrl = isCountry ? `/locations/${countrySlug}` : `/locations/${countrySlug}/${loc.slug}`;
  
  rows.push([
    isCountry ? 'Country Hub' : 'State Hub',
    loc.region || '',
    isCountry ? '' : loc.city,
    isCountry ? '' : loc.city,
    relativeUrl,
    `${baseUrl}${relativeUrl}`,
    loc.h1 || `Wholesale Peptides in ${loc.city}`,
    loc.metaTitle || ''
  ]);
});

// 2. Add Cities
cities.forEach(city => {
  const countrySlug = (city.region || 'United States').toLowerCase().replace(/ /g, '-');
  const relativeUrl = `/locations/${countrySlug}/${city.stateSlug}/${city.slug}`;
  
  rows.push([
    'City Page',
    city.region || 'United States',
    city.state || '',
    city.city || '',
    relativeUrl,
    `${baseUrl}${relativeUrl}`,
    city.h1 || `Research-Grade Peptides Wholesale in ${city.city}`,
    city.metaTitle || ''
  ]);
});

function escapeCsv(val) {
  if (val === undefined || val === null) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

const csvContent = rows.map(r => r.map(escapeCsv).join(',')).join('\r\n');

// Write to workspace
const workspaceCsvPath = path.join(__dirname, 'new_urls_sitemap.csv');
fs.writeFileSync(workspaceCsvPath, csvContent, 'utf8');

// Write to Downloads folder
const downloadsDir = path.join('C:', 'Users', 'ADIL RAZA KHAN', 'Downloads');
const downloadsCsvPath = path.join(downloadsDir, '99_Purity_All_New_URLs.csv');

try {
  fs.writeFileSync(downloadsCsvPath, csvContent, 'utf8');
  console.log(`Saved successfully to Downloads: ${downloadsCsvPath}`);
} catch (e) {
  console.log(`Could not write to Downloads directly (${e.message}), saved to workspace: ${workspaceCsvPath}`);
}

console.log(`Total URLs exported: ${rows.length - 1} (${locations.length} States/Hubs, ${cities.length} Cities)`);
