const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = Number(fs.readFileSync(filePath).toString().trim());

let result;
if(input % 2 === 0) { //짝수면
  const half = input / 2;
  result = (half + 1)**2
} else { //홀수면
  const minHalf = Math.floor(input / 2);
  const maxHalf = minHalf + 1;
  result = (minHalf + 1) * (maxHalf + 1);
}

console.log(result);