const fs = require('fs');
const readline = require('readline');

const logPath = 'C:\\Users\\ADIL RAZA KHAN\\.gemini\\antigravity\\brain\\307a4d36-c066-4c4b-9fc1-0d2dc8e71886\\.system_generated\\logs\\transcript_full.jsonl';

async function find() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const obj = JSON.parse(line);
    if (obj.content && obj.content.includes) {
      const idx = obj.content.indexOf('diff --git a/src/data/locations.json');
      if (idx !== -1) {
        console.log(`Found locations.json diff on step_index: ${obj.step_index}, type: ${obj.type}`);
        console.log(`Length of content: ${obj.content.length}`);
        fs.writeFileSync(`scratch/recovered_diff_${obj.step_index}.txt`, obj.content);
      }
    }
  }
}

find().catch(err => console.error(err));
