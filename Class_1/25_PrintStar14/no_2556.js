const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());
const result = [];
for(let i = 1; i <= n; i++) {
  result.push('*'.repeat(n));
}

console.log(result.join('\n'));