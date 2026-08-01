const fs = require('fs');
const readline = require('readline');

const logPath = 'C:\\Users\\ADIL RAZA KHAN\\.gemini\\antigravity\\brain\\307a4d36-c066-4c4b-9fc1-0d2dc8e71886\\.system_generated\\logs\\transcript_full.jsonl';

async function recover() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const obj = JSON.parse(line);
    if (obj.content && obj.content.includes && obj.content.includes('diff --git a/src/data/locations.json')) {
      console.log(`Found locations.json diff on line step_index: ${obj.step_index}`);
      console.log(`Length of diff output: ${obj.content.length}`);
      fs.writeFileSync('scratch/locations_recovered_diff.txt', obj.content);
    }
  }
}

recover().catch(err => console.error(err));
