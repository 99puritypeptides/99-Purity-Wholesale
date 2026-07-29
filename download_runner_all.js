const fs = require('fs');
const https = require('https');

const tasks = JSON.parse(fs.readFileSync('download_all_images.json', 'utf8'));

let completed = 0;

function download(url, dest) {
  return new Promise((resolve, reject) => {
    // Check if file exists to avoid re-downloading
    if (fs.existsSync(dest)) {
      completed++;
      return resolve();
    }
    
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      if (response.statusCode !== 200) {
        fs.unlink(dest, () => {});
        return resolve(`Failed to download ${url}: ${response.statusCode}`);
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          completed++;
          console.log(`Downloaded ${completed}/${tasks.length}: ${dest}`);
          resolve();
        });
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      resolve(`Error: ${err.message}`);
    });
  });
}

async function run() {
  console.log(`Starting download of ${tasks.length} images...`);
  // Process in small batches to avoid connection issues
  for (let i = 0; i < tasks.length; i += 5) {
    const batch = tasks.slice(i, i + 5);
    await Promise.all(batch.map(t => download(t.url, t.dest)));
  }
  console.log('All downloads finished.');
}

run();
