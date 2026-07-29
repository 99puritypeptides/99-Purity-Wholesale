const fs = require('fs');

const map = JSON.parse(fs.readFileSync('final_image_mapping.json', 'utf8'));

// 1. Update ProductDirectory.tsx
const pdPath = 'src/components/products/ProductDirectory.tsx';
let pdContent = fs.readFileSync(pdPath, 'utf8');

const pdRegex = /const productImagesMap(?:\s*:\s*Record<string,\s*string>)?\s*=\s*({[\s\S]*?});/m;
const pdMatch = pdContent.match(pdRegex);

if (pdMatch) {
  // Try to parse the JS object
  let pdObjStr = pdMatch[1];
  // Convert JS object to JSON by quoting keys if needed (but they are already quoted here usually)
  let pdObj;
  try {
    // using new Function to evaluate the JS object string
    pdObj = new Function(`return ${pdObjStr}`)();
  } catch(e) {
    console.error('Failed to parse pdObj', e);
  }
  
  if (pdObj) {
    // Merge new map
    Object.assign(pdObj, map);
    
    // Stringify back to JS
    let pdMapStr = 'const productImagesMap = {\n';
    Object.entries(pdObj).forEach(([slug, img]) => {
      pdMapStr += `  "${slug}": "${img}",\n`;
    });
    pdMapStr += '};';
    
    pdContent = pdContent.replace(pdRegex, pdMapStr);
    fs.writeFileSync(pdPath, pdContent);
    console.log('Updated ProductDirectory.tsx successfully.');
  }
}

// 2. Update page.tsx (productSpecImagesMap)
const psPath = 'src/app/[locale]/products/[slug]/page.tsx';
let psContent = fs.readFileSync(psPath, 'utf8');

const psRegex = /const productSpecImagesMap(?:\s*:\s*Record<string,\s*Record<string,\s*string>>)?\s*=\s*({[\s\S]*?});/m;
const psMatch = psContent.match(psRegex);

if (psMatch) {
  let psObjStr = psMatch[1];
  let psObj;
  try {
    psObj = new Function(`return ${psObjStr}`)();
  } catch(e) {
    console.error('Failed to parse psObj', e);
  }
  
  if (psObj) {
    // Merge new map
    Object.entries(map).forEach(([slug, img]) => {
      psObj[slug] = { "10mg": img }; // Assumes default 10mg
    });
    
    // Stringify back to JS
    let psMapStr = 'const productSpecImagesMap = {\n';
    Object.entries(psObj).forEach(([slug, specs]) => {
      psMapStr += `  "${slug}": {\n`;
      Object.entries(specs).forEach(([specKey, specImg]) => {
        psMapStr += `    "${specKey}": "${specImg}",\n`;
      });
      psMapStr += `  },\n`;
    });
    psMapStr += '};';
    
    psContent = psContent.replace(psRegex, psMapStr);
    fs.writeFileSync(psPath, psContent);
    console.log('Updated page.tsx successfully.');
  }
}
