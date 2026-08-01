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
        // Check if the file content contains the target text
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('"slug": "united-states"') && content.includes('"slug": "alabama"')) {
            console.log(`FOUND VSCODE HISTORY FILE: ${fullPath} (Size: ${stat.size} bytes, Modified: ${stat.mtime})`);
            fs.writeFileSync('scratch/recovered_locations.json', content, 'utf8');
          }
        } catch (e) {
          // Ignore read errors
        }
      }
    }
  } catch (e) {
    // Ignore access errors
  }
}

console.log('Searching VS Code history directory...');
searchDir(historyDir);
console.log(`Search complete. Inspected ${count} files.`);
