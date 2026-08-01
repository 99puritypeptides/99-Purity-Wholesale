const fs = require('fs');
const path = require('path');

const historyDir = 'C:\\Users\\ADIL RAZA KHAN\\AppData\\Roaming\\Code\\User\\History';

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
            console.log(`FOUND FILE: ${fullPath} (Size: ${stat.size} bytes, Modified: ${stat.mtime})`);
            fs.writeFileSync(`scratch/recovered_${path.basename(dir)}_${file}.json`, content, 'utf8');
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

searchDir(historyDir);
console.log(`Done. Inspected ${count} files.`);
