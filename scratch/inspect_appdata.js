const fs = require('fs');
const path = require('path');

const dirs = [
  'C:\\Users\\ADIL RAZA KHAN\\AppData\\Roaming\\Antigravity',
  'C:\\Users\\ADIL RAZA KHAN\\AppData\\Roaming\\Antigravity IDE'
];

function list(dir, depth = 0) {
  if (depth > 3) return;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      console.log(' '.repeat(depth * 2) + entry.name + (entry.isDirectory() ? '/' : ''));
      if (entry.isDirectory()) {
        list(path.join(dir, entry.name), depth + 1);
      }
    }
  } catch (e) {
    // Ignore
  }
}

dirs.forEach(dir => {
  console.log(`=== Listing ${dir} ===`);
  list(dir);
});
