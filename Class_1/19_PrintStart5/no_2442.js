const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());
const lastLen = 2 * n -1;
const result = [];
for(let i = 1; i <= n; i++) {
  const star = "*".repeat(2 * i - 1);
  const brank = " ".repeat(parseInt(lastLen - star.length) / 2);
  result.push(brank + star);
}

console.log(result.join('\n'));

