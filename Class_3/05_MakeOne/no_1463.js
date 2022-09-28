const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let n = Number(fs.readFileSync(filePath).toString().trim());

//DP... 어렵다... 하지만 내 힘으로 풀어냈다ㅏㅏ....!!!
//dp[n][0] = 3으로 나눠질 경우 연산 수, 나눠지지 않을 경우 n
//dp[n][1] = 2으로 나눠질 경우 연산 수, 나눠지지 않을 경우 n
//dp[n][2] = 1을 뺄 경우 연산 수, 나눠지지 않을 경우 n

const dp = [];

for(let i = 0; i <= n; i++) {
    if(i < 2) {
        dp[i] = [0, 0, 0];
        continue;
    }
    dp[i] = new Array(3);
    dp[i][0] = i % 3 === 0 ? Math.min(...dp[i / 3]) + 1 : n;
    dp[i][1] = i % 2 === 0 ? Math.min(...dp[i / 2]) + 1 : n;
    dp[i][2] = Math.min(...dp[i - 1]) + 1;
}

console.log(Math.min(...dp[n]));
/**
 * console.table(dp);
┌─────────┬────┬────┬───┐
│ (index) │ 0  │ 1  │ 2 │
├─────────┼────┼────┼───┤
│    0    │ 0  │ 0  │ 0 │
│    1    │ 0  │ 0  │ 0 │
│    2    │ 10 │ 1  │ 1 │
│    3    │ 1  │ 10 │ 2 │
│    4    │ 10 │ 2  │ 2 │
│    5    │ 10 │ 10 │ 3 │
│    6    │ 2  │ 2  │ 4 │
│    7    │ 10 │ 10 │ 3 │
│    8    │ 10 │ 3  │ 4 │
│    9    │ 2  │ 10 │ 4 │
│   10    │ 10 │ 4  │ 3 │
└─────────┴────┴────┴───┘
 */