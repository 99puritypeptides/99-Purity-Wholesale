const fs = require('fs');
const path = require('path');

const domain = 'https://99puritywholesale.com';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check if line sets canonical and doesn't already have the domain
    if (line.match(/canonical\s*:/) && !line.includes('https://99puritywholesale.com') && !line.includes('baseUrl')) {
      const match = line.match(/(canonical\s*:\s*)([^,]+)(,?.*)/);
      if (match) {
        let value = match[2].trim();
        
        // If it's just '/', change to '' so we don't get double slashes, though Next.js handles it ok.
        // Actually wrapping it:
        const newValue = `\`${domain}\${${value}}\``;
        
        // Only modify if we are sure it's an expression returning a path starting with '/'
        // In our codebase, practically all of them do.
        lines[i] = line.replace(match[2], newValue);
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log('Updated:', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walk('./src/app');
