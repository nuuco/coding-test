const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

//어렵!!! 다이나믹 프로그래밍
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
n = Number(n);

/**
 * dp[n][0]을 n번째 집을 빨간색으로 칠했을 때 전체 비용의 최솟값 = n의 빨간색 비용 + (n-1)번째까지 비용중 빨강이 아닌 걸로 칠한 것들 중 최소갑
 * dp[n][1]을 n번째 집을 초록색으로 칠했을 때 전체 비용의 최솟값
 * dp[n][2]를 n번째 집을 파란색으로 칠했을 때 전체 비용의 최솟값
 console.table(dp);
┌─────────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │
├─────────┼─────┼─────┼─────┤
│    0    │  0  │  0  │  0  │
│    1    │ 30  │ 19  │  5  │
│    2    │ 69  │ 82  │ 83  │
│    3    │ 97  │ 88  │ 166 │
│    4    │ 92  │ 168 │ 145 │
│    5    │ 235 │ 178 │ 176 │
│    6    │ 269 │ 208 │ 269 │
└─────────┴─────┴─────┴─────┘
 */
const dp = [];
dp[0] = [0, 0, 0];
for(let i = 0; i < arr.length; i++) {
    const tmp = arr[i].split(' ').map(Number);
    let min = Number.MAX_SAFE_INTEGER;
    dp[i + 1] = [];
    dp[i + 1][0] = tmp[0] + Math.min(dp[i][1], dp[i][2]); 
    dp[i + 1][1] = tmp[1] + Math.min(dp[i][0], dp[i][2]); 
    dp[i + 1][2] = tmp[2] + Math.min(dp[i][0], dp[i][1]); 
}

console.table(Math.min(...dp[dp.length - 1]));
