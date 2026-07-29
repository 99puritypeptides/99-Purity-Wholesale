const fs = require('fs');
const mapping = fs.readFileSync('new_mappings.txt', 'utf8');
const pagePath = 'src/app/[locale]/products/[slug]/page.tsx';
let page = fs.readFileSync(pagePath, 'utf8');

page = page.replace(
  '    "10mg": "vip-10mg.jpg"\n  }\n};',
  '    "10mg": "vip-10mg.jpg"\n  },\n' + mapping + '};'
);

fs.writeFileSync(pagePath, page);
console.log('Appended mappings to page.tsx');
