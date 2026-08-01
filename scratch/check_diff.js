const fs = require('fs');
const diff = fs.readFileSync('scratch/diff_output_11.txt', 'utf8');

console.log('Diff length:', diff.length);
console.log('First 500 chars of diff:');
console.log(diff.substring(0, 500));
console.log('Last 500 chars of diff:');
console.log(diff.substring(diff.length - 500));
