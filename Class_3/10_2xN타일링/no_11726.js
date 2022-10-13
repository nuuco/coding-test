const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

const memo = [1, 1, 2];

const tiling = (n) => {
  for(let i = 3; i <= n; i++) {
    memo[i] = (memo[i - 2] + memo[i - 1]) % 10007; //수가 너무 커지지 않게 10007로 나눠줌
  }
  return memo[n];
}

console.log(tiling(n));
