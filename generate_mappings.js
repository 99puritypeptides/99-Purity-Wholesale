const fs = require('fs');
const dl = JSON.parse(fs.readFileSync('download_images.json', 'utf8'));
let mapping = '';
dl.forEach(d => {
  mapping += `  "${d.slug}": {\n    "10mg": "${d.filename}"\n  },\n`;
});
fs.writeFileSync('new_mappings.txt', mapping);
