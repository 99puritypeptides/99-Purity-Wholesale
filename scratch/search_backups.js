const fs = require('fs');
const path = require('path');

const dirs = [
  'C:\\Users\\ADIL RAZA KHAN\\AppData\\Roaming\\Code\\Backups',
  'C:\\Users\\ADIL RAZA KHAN\\AppData\\Roaming\\Antigravity IDE\\Backups'
];

function searchDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        searchDir(fullPath);
      } else {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('united-states') && content.includes('wyoming')) {
            console.log(`FOUND FILE IN BACKUPS: ${fullPath} (Size: ${stat.size} bytes, Modified: ${stat.mtime})`);
            fs.writeFileSync('scratch/recovered_backups.json', content, 'utf8');
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
  console.log(`Searching backups in: ${dir}`);
  searchDir(dir);
});
console.log('Search complete.');
