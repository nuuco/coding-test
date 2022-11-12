const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const arr = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let sum = 0;
let min = -1;

for(let el of arr) {
  if(el % 2 === 1) {
    sum += el;
    if(min === -1 || min > el) {
      min = el;
    }
  }
}
if(sum > 0) {
  console.log(sum);
}
console.log(min);