const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const memo = [0];

for(let i = 1; i <= b; i++) {
  for(let j = 1; j <= i; j++) {
    memo.push(i);
  }
  if(memo.length > b) break;
}

let sum = 0;
for(let i = a; i <= b; i++) {
  sum += memo[i];
}

console.log(sum);