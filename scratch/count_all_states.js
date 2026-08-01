const http = require('http');
const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '../src/data/locations.json');
const locationsData = JSON.parse(fs.readFileSync(locationsPath, 'utf8'));

// Filter out the national hub ("united-states") to just get state pages
const states = locationsData.filter(loc => loc.slug !== 'united-states' && loc.city !== loc.region);

console.log(`Found ${states.length} state pages. Fetching and counting links... This might take a moment if Next.js needs to compile them.\n`);

async function fetchPageLinks(state) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3000/locations/united-states/${state.slug}`;
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        let inlineLinkCount = 0;
        
        // Find all <p> tags and their contents
        const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
        let pMatch;
        
        while ((pMatch = pRegex.exec(data)) !== null) {
          const pContent = pMatch[1];
          
          // Find all <a> tags inside this specific <p> tag
          const aRegex = /<a[^>]*href=["']([^"']*)["'][^>]*>/gi;
          let aMatch;
          
          while ((aMatch = aRegex.exec(pContent)) !== null) {
            const href = aMatch[1];
            if (href.startsWith('/') || href.startsWith('http://localhost:3000') || href.startsWith('https://99puritywholesale.com')) {
              inlineLinkCount++;
            }
          }
        }
        
        resolve({ state: state.city, count: inlineLinkCount });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  for (const state of states) {
    try {
      const result = await fetchPageLinks(state);
      console.log(`${result.state}: ${result.count} internal links`);
    } catch (err) {
      console.error(`Error fetching ${state.city}: ${err.message}`);
    }
  }
}

run();
