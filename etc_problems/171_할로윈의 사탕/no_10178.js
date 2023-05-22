const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of input) {
  const [candy, children] = el.split(' ').map(Number);
  const share = Math.floor(candy / children);
  const rest = candy % children;
  result.push(`You get ${share} piece(s) and your dad gets ${rest} piece(s).`);
}

console.log(result.join('\n'));