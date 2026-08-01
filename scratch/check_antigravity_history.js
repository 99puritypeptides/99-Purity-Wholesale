const fs = require('fs');
const path = require('path');

const target = 'C:\\Users\\ADIL RAZA KHAN\\AppData\\Roaming\\Antigravity IDE\\User\\History';
try {
  const folders = fs.readdirSync(target);
  console.log(`History has ${folders.length} subfolders:`);
  console.log(folders.slice(0, 10));
} catch (e) {
  console.error('Error reading Antigravity IDE history:', e.message);
}
