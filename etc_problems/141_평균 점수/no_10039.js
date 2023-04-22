const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let sum = 0;

input.forEach(el => {
  if(el < 40) {
    sum += 40;
  } else {
    sum += el;
  }
});

const avg = sum / input.length;

console.log(avg);

