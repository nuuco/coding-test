const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());
const result = [];
for(let i = 1; i <= n; i++) {
  const tmp = ' '.repeat(n - i) + '*'.repeat(i);
  result.push(tmp);
}
for(let i = n - 1; i >= 1; i--) {
  const tmp = ' '.repeat(n - i) + '*'.repeat(i);
  result.push(tmp);
}

console.log(result.join('\n'));