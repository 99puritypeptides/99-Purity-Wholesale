const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = 'C:\\Users\\ADIL RAZA KHAN\\.gemini\\antigravity\\brain\\307a4d36-c066-4c4b-9fc1-0d2dc8e71886\\.system_generated\\logs\\transcript_full.jsonl';

async function inspect() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      obj.tool_calls.forEach(tc => {
        if (tc.name === 'run_command' && tc.args && tc.args.CommandLine && tc.args.CommandLine.includes('git diff')) {
          console.log(`Step ${obj.step_index}: CommandLine = ${tc.args.CommandLine}`);
          console.log('Keys of step object:', Object.keys(obj));
          if (obj.status) console.log('Status:', obj.status);
          if (obj.content) {
            console.log('Content type:', typeof obj.content);
            console.log('Content keys:', Object.keys(obj.content));
            if (typeof obj.content.output === 'string') {
              console.log(`Content.output length: ${obj.content.output.length}`);
            } else {
              console.log('Content.output is not a string:', typeof obj.content.output);
            }
          }
        }
      });
    }
  }
}

inspect().catch(err => console.error(err));
