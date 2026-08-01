const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const gitObjectsDir = path.join(__dirname, '..', '.git', 'objects');

function searchDir(dir) {
  try {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // git loose object directories are 2 hex chars
        if (entry.length === 2) {
          searchDir(fullPath);
        }
      } else {
        // it's a loose object file (38 hex chars)
        if (entry.length === 38) {
          try {
            const buffer = fs.readFileSync(fullPath);
            const decompressed = zlib.inflateSync(buffer);
            const content = decompressed.toString('utf8');
            if (content.includes('"slug": "united-states"') && content.includes('"slug": "wisconsin"')) {
              console.log(`FOUND IN GIT LOOSE OBJECT: ${fullPath}`);
              // Git loose object content has a header: "blob <size>\0<content>"
              const nullCharIndex = content.indexOf('\0');
              const jsonContent = nullCharIndex !== -1 ? content.substring(nullCharIndex + 1) : content;
              fs.writeFileSync('scratch/recovered_git_blob.json', jsonContent, 'utf8');
            }
          } catch (e) {
            // Ignore decompression or reading errors
          }
        }
      }
    }
  } catch (e) {
    // Ignore directory access errors
  }
}

console.log('Searching git loose objects for locations.json...');
searchDir(gitObjectsDir);
console.log('Search complete.');
