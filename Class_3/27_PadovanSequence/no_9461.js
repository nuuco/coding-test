const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const memo = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
const result = [];

const max = Math.max(...arr);
for(let i = 11; i <= max; i++) {
  memo[i] = memo[i - 1] + memo[i - 5];
}

for(let el of arr) {
  result.push(memo[el]);
}

console.log(result.join('\n'));
