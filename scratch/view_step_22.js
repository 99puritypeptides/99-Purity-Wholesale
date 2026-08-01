const fs = require('fs');
const readline = require('readline');

const logPath = 'C:\\Users\\ADIL RAZA KHAN\\.gemini\\antigravity\\brain\\307a4d36-c066-4c4b-9fc1-0d2dc8e71886\\.system_generated\\logs\\transcript_full.jsonl';

async function view() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const obj = JSON.parse(line);
    if (obj.step_index === 22 || obj.step_index === 23) {
      console.log(`Step ${obj.step_index}, Type: ${obj.type}, Source: ${obj.source}`);
      console.log('Keys:', Object.keys(obj));
      if (obj.content) {
        console.log('Content preview:', obj.content.substring(0, 500));
        console.log('Content length:', obj.content.length);
        if (obj.content.includes('locations.json')) {
          console.log('Contains locations.json!');
        }
      }
    }
  }
}

view().catch(err => console.error(err));
