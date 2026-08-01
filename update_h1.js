const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'cities.json');
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

data = data.map(cityObj => {
  if (cityObj.h1 && cityObj.h1.startsWith('Wholesale Peptides in ')) {
    // Keep Anchorage as is if it's already correct, but this will overwrite it safely
    cityObj.h1 = `Research-Grade Peptides Wholesale in ${cityObj.city}`;
  }
  return cityObj;
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated all H1 tags in cities.json!');
