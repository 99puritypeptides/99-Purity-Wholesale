const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = 'C:\\Users\\ADIL RAZA KHAN\\.gemini\\antigravity\\brain\\307a4d36-c066-4c4b-9fc1-0d2dc8e71886\\.system_generated\\logs\\transcript_full.jsonl';

async function recover() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let stepNum = 0;
  for await (const line of rl) {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      obj.tool_calls.forEach(tc => {
        if (tc.name === 'run_command' && tc.args && tc.args.CommandLine && tc.args.CommandLine.includes('git diff')) {
          console.log(`Step ${obj.step_index}: CommandLine = ${tc.args.CommandLine}`);
          if (obj.content && obj.content.output) {
            console.log(`Output length: ${obj.content.output.length}`);
            fs.writeFileSync(`scratch/diff_output_${obj.step_index}.txt`, obj.content.output);
          }
        }
      });
    }
  }
}

recover().catch(err => console.error(err));
