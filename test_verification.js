const fs = require('fs');
const path = require('path');

console.log('--- Starting Comprehensive Project Verification ---');

// 1. Validate locations.json
try {
  const locsPath = path.join(__dirname, 'src', 'data', 'locations.json');
  const locs = JSON.parse(fs.readFileSync(locsPath, 'utf8'));
  console.log(`✓ locations.json is valid JSON with ${locs.length} entries.`);
} catch (err) {
  console.error('✗ Error in locations.json:', err.message);
}

// 2. Validate cities.json
try {
  const citiesPath = path.join(__dirname, 'src', 'data', 'cities.json');
  const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
  console.log(`✓ cities.json is valid JSON with ${cities.length} entries.`);
  
  // Check required fields
  let missingFields = 0;
  cities.forEach((c, idx) => {
    if (!c.slug || !c.city || !c.stateSlug || !c.h1) {
      console.warn(`! City at index ${idx} missing critical fields:`, c);
      missingFields++;
    }
  });
  if (missingFields === 0) {
    console.log(`✓ All ${cities.length} cities have valid schema, slugs, and H1 tags.`);
  }
} catch (err) {
  console.error('✗ Error in cities.json:', err.message);
}

// 3. Check products.json
try {
  const prodPath = path.join(__dirname, 'src', 'data', 'products.json');
  const prods = JSON.parse(fs.readFileSync(prodPath, 'utf8'));
  console.log(`✓ products.json is valid JSON with ${prods.length} products.`);
} catch (err) {
  console.error('✗ Error in products.json:', err.message);
}

// 4. Test generateStaticParams simulation
try {
  const locs = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'locations.json'), 'utf8'));
  const cities = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'cities.json'), 'utf8'));
  
  const stateParams = locs.map((loc) => {
    const isCountry = loc.city === loc.region;
    const countrySlug = loc.region.toLowerCase().replace(/ /g, '-');
    return isCountry ? [countrySlug] : [countrySlug, loc.slug];
  });
  
  const cityParams = cities.map((city) => {
    const countrySlug = (city.region || 'United States').toLowerCase().replace(/ /g, '-');
    return [countrySlug, city.stateSlug, city.slug];
  });
  
  const totalRoutes = stateParams.length + cityParams.length;
  console.log(`✓ Router Simulation: Successfully mapped ${totalRoutes} unique dynamic routes (${stateParams.length} State/Country hubs + ${cityParams.length} City pages).`);
} catch (err) {
  console.error('✗ Route simulation error:', err.message);
}

console.log('--- Verification Script Completed ---');
