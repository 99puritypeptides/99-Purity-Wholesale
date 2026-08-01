const fs = require('fs');
const path = require('path');

const historyDir = 'C:\\Users\\ADIL RAZA KHAN\\AppData\\Roaming\\Code\\User\\History';

let count = 0;
let matchCount = 0;

function searchDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        searchDir(fullPath);
      } else {
        count++;
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          // Search for "united-states" and "wisconsin" to locate the modified locations.json
          if (content.includes('"slug": "united-states"') && content.includes('"slug": "wisconsin"')) {
            matchCount++;
            console.log(`MATCH ${matchCount}: ${fullPath} (Size: ${stat.size} bytes, Modified: ${stat.mtime})`);
            fs.writeFileSync(`scratch/recovered_locations_${matchCount}.json`, content, 'utf8');
          }
        } catch (e) {
          // Ignore
        }
      }
    }
  } catch (e) {
    // Ignore
  }
}

console.log('Searching VS Code history for "united-states" and "wisconsin"...');
searchDir(historyDir);
console.log(`Done. Inspected ${count} files. Found ${matchCount} matches.`);
