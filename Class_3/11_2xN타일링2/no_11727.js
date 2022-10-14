const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());

const memo = [1, 1, 3];

const tiling2 = (n) => {
  for(let i = 3; i <= n; i++) {
    memo[i] = (memo[i - 1] + (2 * memo[i - 2])) % 10007;
  }
  return memo[n];
}

console.log(tiling2(n));