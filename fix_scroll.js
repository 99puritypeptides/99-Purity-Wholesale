const fs = require('fs');

const pdPath = 'src/components/products/ProductDirectory.tsx';
let content = fs.readFileSync(pdPath, 'utf8');

// 1. Remove the import
content = content.replace(/import { useNestedSmoothScroll } from '@\/hooks\/useNestedSmoothScroll';\n/, '');

// 2. Remove the ref declaration
content = content.replace(/const categoryScrollRef = useNestedSmoothScroll<HTMLDivElement>\({ orientation: 'horizontal' }\);\n/g, '');

// 3. Remove the ref assignment from the div
content = content.replace(/ref={categoryScrollRef} /g, '');

fs.writeFileSync(pdPath, content);
console.log('Fixed horizontal scroll issue safely.');
