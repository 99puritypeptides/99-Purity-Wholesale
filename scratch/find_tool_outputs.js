const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = 'C:\\Users\\ADIL RAZA KHAN\\.gemini\\antigravity\\brain\\307a4d36-c066-4c4b-9fc1-0d2dc8e71886\\.system_generated\\logs\\transcript_full.jsonl';

async function find() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const obj = JSON.parse(line);
    // Let's print general info about every line to understand the types
    console.log(`Type: ${obj.type}, Source: ${obj.source}, Keys: ${Object.keys(obj)}`);
    if (obj.content && obj.content.includes && obj.content.includes('git diff')) {
      console.log('Found content containing git diff:', obj.content.substring(0, 100));
    }
  }
}

find().catch(err => console.error(err));
