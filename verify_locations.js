const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('./src/data/locations.json', 'utf-8'));
  
  const bodyP2Set = new Set();
  const duplicateP2s = [];
  const bodyP3Set = new Set();
  const duplicateP3s = [];
  
  data.forEach((loc) => {
    if (loc.slug === 'united-states') return;
    
    const state = loc.city;
    
    if (loc.bodyP2 && loc.bodyP2.length > 50) {
      if (bodyP2Set.has(loc.bodyP2)) {
        duplicateP2s.push(state);
      } else {
        bodyP2Set.add(loc.bodyP2);
      }
    }
    
    if (loc.bodyP3 && loc.bodyP3.length > 50) {
      if (bodyP3Set.has(loc.bodyP3)) {
        duplicateP3s.push(state);
      } else {
        bodyP3Set.add(loc.bodyP3);
      }
    }
  });

  console.log(`--- DUPLICATE CHECK P2 ---`);
  if (duplicateP2s.length > 0) {
    console.log(`WARNING: Found duplicate bodyP2 entries for: ${duplicateP2s.join(', ')}`);
  } else {
    console.log(`SUCCESS: All bodyP2 descriptions are unique!`);
  }
  
  console.log(`--- DUPLICATE CHECK P3 ---`);
  if (duplicateP3s.length > 0) {
    console.log(`WARNING: Found duplicate bodyP3 entries for: ${duplicateP3s.join(', ')}`);
  } else {
    console.log(`SUCCESS: All bodyP3 descriptions are unique!`);
  }

} catch (e) {
  console.error(e.message);
}
