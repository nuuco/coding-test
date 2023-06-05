const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const result = [];

for(let el of input) {
  const [chickenCoupon, targetNum] = el.split(' ').map(Number);

  let chickenCnt = chickenCoupon;
  let leftCoupon = chickenCoupon;

  while(leftCoupon / targetNum >= 1) {
    const tmp = Math.floor(leftCoupon / targetNum);
    chickenCnt += tmp;
    leftCoupon = (leftCoupon % targetNum) + tmp; 
  }

  result.push(chickenCnt);
}

console.log(result.join('\n'));
