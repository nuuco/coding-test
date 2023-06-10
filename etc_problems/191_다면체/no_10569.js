const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

const result = [];
for(let el of input) {
  const [v, e] = el.split(' ').map(Number);
  const face = 2 - v + e;
  result.push(face);
}

console.log(result.join('\n'));