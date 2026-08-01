const fs = require('fs');
const path = require('path');

const dirs = [
  'C:\\Users\\ADIL RAZA KHAN\\AppData\\Roaming\\Antigravity\\User\\History',
  'C:\\Users\\ADIL RAZA KHAN\\AppData\\Roaming\\Antigravity IDE\\User\\History'
];

let count = 0;

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
          if (content.toLowerCase().includes('wyoming') && content.toLowerCase().includes('semaglutide')) {
            console.log(`FOUND FILE IN ANTIGRAVITY HISTORY: ${fullPath} (Size: ${stat.size} bytes, Modified: ${stat.mtime})`);
            fs.writeFileSync(`scratch/recovered_locations.json`, content, 'utf8');
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

dirs.forEach(dir => {
  console.log(`Searching directory: ${dir}`);
  searchDir(dir);
});

console.log(`Search complete. Inspected ${count} files.`);
