const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let el of arr) {
  const [a, b] = el.split(' ').map(Number);
  if(a === 0 && b === 0) break;
  result.push(a > b ? "Yes" : "No");
}

console.log(result.join('\n'));