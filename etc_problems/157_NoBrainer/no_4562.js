const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of input) {
  const [a, b] = el.split(' ').map(Number);
  if(a >= b) {
    result.push('MMM BRAINS');
  } else {
    result.push('NO BRAINS');
  }
}

console.log(result.join('\n'));