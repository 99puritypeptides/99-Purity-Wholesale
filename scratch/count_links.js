const http = require('http');

http.get('http://localhost:3000/locations/united-states/california', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const regex = /<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    const internalWords = new Set();
    
    while ((match = regex.exec(data)) !== null) {
      const href = match[1];
      const text = match[2].replace(/<[^>]+>/g, '').trim(); // Remove inner HTML tags (like SVG icons)
      
      if (href.startsWith('/') || href.startsWith('http://localhost:3000') || href.startsWith('https://99puritywholesale.com')) {
        if (text) internalWords.add(text);
      }
    }
    
    console.log("Words/Phrases with internal links:");
    Array.from(internalWords).sort().forEach(word => console.log(`- ${word}`));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
