const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());
const len = 2 * n -1;
const result = [];
for(let i = 1; i <= len; i++) {
  let starLen = i;
  let blankLen = 2 * (n - i);
  if(i > n) {
    starLen = (2 * n) - i;
    blankLen = 2 * (i - n);
  }
  const star = "*".repeat(starLen);
  const blank = " ".repeat(blankLen);
  result.push(star + blank + star);
}

console.log(result.join('\n'));