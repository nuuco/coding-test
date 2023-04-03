const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (l, p , v) => {
  const share = Math.floor(v / p);
  const rest = Math.min(v % p, l);
  return share * l + rest;
}

let result = [];
for(let i = 0; i < input.length - 1; i++) {
  const answer = solution(...input[i].split(' ').map(Number));
  result.push(`Case ${i + 1}: ${answer}`);
}

console.log(result.join('\n'));
