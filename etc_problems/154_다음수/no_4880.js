const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();
const result = [];
for(let el of input) {
  const [a, b, c] = el.split(' ').map(Number);
  if(b - a === c - b) {
    const next = c + (b - a)
    result.push(`AP ${next}`);
  } else {
    const next = c * (b / a);
    result.push(`GP ${next}`);
  }
}

console.log(result.join('\n'));