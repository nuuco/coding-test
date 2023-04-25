const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = Number(fs.readFileSync(filePath).toString().trim());

let sum = 0;
let subSum = 0;
for(let i = 1; i <= input; i++) {
  subSum += i;
  sum += subSum;
  sum += i * (i + 1);
}

console.log(sum);