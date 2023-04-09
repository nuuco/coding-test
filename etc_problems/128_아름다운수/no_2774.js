const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of arr) {
  const count = new Set(el.split('')).size;
  result.push(count);
}

console.log(result.join('\n'));
