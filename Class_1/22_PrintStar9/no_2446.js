const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());
const len = 2 * n -1;
const result = [];
for(let i = 0; i < len; i++) {
  let starLen = len - (2 * i);
  let blankLen = i;
  if(i >= n) {
    starLen = 2 * (i - n + 1) + 1;
    blankLen = len - i - 1;
  }
  const star = "*".repeat(starLen);
  const blank = " ".repeat(blankLen);
  result.push(blank + star);
}

console.log(result.join('\n'));