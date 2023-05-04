const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const arr = new Array(a + b + c + 1).fill(0);

for(let i = 1; i <= a; i++) {
  for(let j = 1; j <= b; j++) {
    for(let k = 1; k <= c; k++) {
      const sum = i + j + k;
      arr[sum]++;
    }
  }
}

let max = -1;
let answer = -1;

arr.forEach((el, idx) => {
  if(el > max) {
    max = el;
    answer = idx;
  }
})

console.log(answer);