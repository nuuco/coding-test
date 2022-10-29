const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const arr = Array(n + 1).fill(true);
arr[0] = false; //0번째는 더미데이터

let pointer = 0;
let count = 0;
let outCount = 0;

const result = [];
while(outCount < n) {
  pointer++;
  if(pointer >= n + 1) {
    pointer = 1;
  }
  while(!arr[pointer]) {
    pointer++;
    if(pointer >= n + 1) {
      pointer -= n;
    }
  }
  count++;
  if(count === k) {
    count = 0;
    result.push(pointer);
    arr[pointer] = false;
    outCount++;
    pointer--;
  }
}

console.log('<' + result.join(', ') + '>');