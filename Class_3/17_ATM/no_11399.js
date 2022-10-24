const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, tc] = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = tc.split(' ').map(Number).sort((a, b) => a - b);

let time = 0;
let result = 0;

for(let el of arr) {
  time += el;
  result += time;
}

console.log(result);