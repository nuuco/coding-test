const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const result = [];

for(let el of input) {
  if(el === 1) {
    result.push("#")
    continue;
  }

  if(el === 2) {
    result.push("##\n##");
    continue;
  }

  const answer = [];
  answer.push("#".repeat(el));
  for(let i = 0; i < el - 2; i++) {
    answer.push(`#${"J".repeat(el - 2)}#`);
  }
  answer.push("#".repeat(el));

  result.push(answer.join('\n'));
}

console.log(result.join('\n\n'));
