const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const result = [];
for(let i = 0; i < input.length - 1; i += 2) {
  const a = input[i];
  const b = input[i + 1];
  let count = 0;
  for(let j = 0; j < a.length; j++) {
    if(a[j] !== b[j]) {
      count++;
    }
  }
  result.push(`Hamming distance is ${count}.`);
}

console.log(result.join('\n'));