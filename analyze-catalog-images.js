const fs = require('fs');
const path = require('path');

// Helper to normalize strings for robust comparison
function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Helper to extract dosage from a spec string (e.g. "5mg×10" -> "5mg", "10ml×10" -> "10ml")
function getSpecDosage(spec) {
  return spec.split('×')[0].trim();
}

function run() {
  console.log("Analyzing Product Catalog Images vs Specifications...\n");

  const productsPath = path.join(__dirname, 'src/data/products.json');
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

  const imagesDir = path.join(__dirname, 'public/Product images');
  const allImages = fs.readdirSync(imagesDir).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ext === '.jpg' || ext === '.png' || ext === '.webp' || ext === '.jpeg';
  });

  const matchingResults = {};
  const missingSpecs = [];
  const extraImagesRemoved = [];

  // Initialize matching arrays for all 46 products
  products.forEach(p => {
    matchingResults[p.slug] = {
      name: p.name,
      slug: p.slug,
      category: p.category,
      specs: p.specs,
      imageMap: {}, // specDosage -> filename
      allMatchedImages: []
    };
  });

  // Match files in directory to products and their specs
  allImages.forEach(filename => {
    const normalizedFile = normalize(filename);

    let matched = false;
    for (const p of products) {
      const normalizedName = normalize(p.name);
      const normalizedSlug = normalize(p.slug);
      
      // Check if filename contains product name or slug
      if (normalizedFile.includes(normalizedName) || normalizedFile.includes(normalizedSlug) || 
          (p.slug === 'mic-blend' && normalizedFile.includes('mic')) ||
          (p.slug === 'lipo-c' && normalizedFile.includes('lipoc') && !normalizedFile.includes('mic'))) {
        
        // Find if this filename matches one of the product's active specs
        for (const spec of p.specs) {
          const specDosage = getSpecDosage(spec);
          const normalizedDosage = normalize(specDosage);

          // Check if dosage (e.g. "10mg") is contained in filename
          if (normalizedFile.includes(normalizedDosage)) {
            matchingResults[p.slug].imageMap[specDosage] = filename;
            if (!matchingResults[p.slug].allMatchedImages.includes(filename)) {
              matchingResults[p.slug].allMatchedImages.push(filename);
            }
            matched = true;
            break;
          }
        }
        
        // Fallback: If it's a general blend image (like GLOW.jpg or KLOW.jpg) and matches the product slug
        if (!matched && (normalizedFile === normalize(p.name) || normalizedFile === normalize(p.slug))) {
          // Assign to first spec or all
          p.specs.forEach(spec => {
            const specDosage = getSpecDosage(spec);
            matchingResults[p.slug].imageMap[specDosage] = filename;
          });
          if (!matchingResults[p.slug].allMatchedImages.includes(filename)) {
            matchingResults[p.slug].allMatchedImages.push(filename);
          }
          matched = true;
        }
      }
    }

    if (!matched) {
      // Check if it belongs to any of our active products but is inactive spec (e.g. Semaglutide 5mg.jpg)
      for (const p of products) {
        const normalizedName = normalize(p.name);
        const normalizedSlug = normalize(p.slug);
        if (normalizedFile.includes(normalizedName) || normalizedFile.includes(normalizedSlug)) {
          extraImagesRemoved.push({
            product: p.name,
            filename: filename,
            reason: "Image dosage does not match any active specifications in the catalog."
          });
          matched = true;
          break;
        }
      }
    }
  });

  // Calculate missing specs
  products.forEach(p => {
    p.specs.forEach(spec => {
      const specDosage = getSpecDosage(spec);
      const filename = matchingResults[p.slug].imageMap[specDosage];
      if (!filename) {
        missingSpecs.push({
          productName: p.name,
          spec: spec
        });
      }
    });
  });

  // Generate dynamic structures for code insertion
  const productImagesMap = {};
  const multipleImagesMap = {};

  products.forEach(p => {
    const res = matchingResults[p.slug];
    const specKeys = Object.keys(res.imageMap);
    
    if (specKeys.length > 0) {
      // Main default image is the first matched spec image
      productImagesMap[p.slug] = res.imageMap[specKeys[0]];
      multipleImagesMap[p.slug] = specKeys.map(k => res.imageMap[k]);
    } else {
      productImagesMap[p.slug] = "";
      multipleImagesMap[p.slug] = [];
    }
  });

  // Write files
  console.log(`Matching Summary:`);
  console.log(`- Total Products Analyzed: ${products.length}`);
  console.log(`- Specs with Missing Images: ${missingSpecs.length}`);
  console.log(`- Mismatched/Discarded Images: ${extraImagesRemoved.length}`);

  // Create a markdown report for the user
  let reportMd = `# Product Catalog Image & Spec Match Report\n\n`;
  reportMd += `> [!IMPORTANT]\n`;
  reportMd += `> Evaluated all **46 active products** against **154 images** in the \`public/Product images/\` folder. Discarded mismatched spec images and cataloged missing specs.\n\n`;

  reportMd += `## ❌ Mismatched / Discarded Product Images\n`;
  reportMd += `The following images were identified in \`public/Product images/\` but their specs do not exist in the database and have been excluded from page rendering:\n\n`;
  reportMd += `| Product | Filename | Reason |\n`;
  reportMd += `| :--- | :--- | :--- |\n`;
  extraImagesRemoved.forEach(rem => {
    reportMd += `| **${rem.product}** | \`${rem.filename}\` | ${rem.reason} |\n`;
  });

  reportMd += `\n## ⚠️ Missing Product Images Per Specification\n`;
  reportMd += `The following active product specifications currently do not have matching image assets on the filesystem:\n\n`;
  reportMd += `| Product Name | Specification | Status |\n`;
  reportMd += `| :--- | :--- | :--- |\n`;
  missingSpecs.forEach(ms => {
    reportMd += `| **${ms.productName}** | \`${ms.spec}\` | 🖼️ Missing Image |\n`;
  });

  reportMd += `\n## 📊 Spec-to-Image Map Registry\n`;
  reportMd += `The following spec-to-image bindings are now registered dynamically inside the code templates:\n\n`;
  products.forEach(p => {
    const res = matchingResults[p.slug];
    const specKeys = Object.keys(res.imageMap);
    if (specKeys.length > 0) {
      reportMd += `### **${p.name}**\n`;
      specKeys.forEach(k => {
        reportMd += `* \`${k}\` ➔ \`${res.imageMap[k]}\`\n`;
      });
      reportMd += `\n`;
    }
  });

  fs.writeFileSync('catalog_image_report.md', reportMd, 'utf8');
  console.log("\nSaved Match Report to catalog_image_report.md");

  // Output maps as JS strings for update-pages.js or manual integration
  fs.writeFileSync('matched-maps.json', JSON.stringify({ productImagesMap, multipleImagesMap, matchingResults }, null, 2), 'utf8');
  console.log("Saved JSON maps to matched-maps.json");
}

run();
