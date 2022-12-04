const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
arr = arr.split(" ").map(Number);
arr.unshift(0);

// const dp = new Array(n + 1).fill(0);

// for (let i = 1; i < arr.length; i++) {
//   for (let x = 1; x <= n; x++) {
//     const share = parseInt(x / i) * arr[i];
//     const rest = dp[x % i];
//     dp[x] = dp[x] < share + rest ? share + rest : dp[x];
//   }
// }

// console.log(dp[n]);

//반례
/**
10
1 100 160 1 1 1 1 1 1 1
답) 520 내값) 500
 */

//https://www.youtube.com/watch?v=zHnM0R5at8s 참고

const dp = new Array(n + 1).fill(0);

//dp[i] = i 개 사는 최댓값

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    const tmp = dp[i - j] + arr[j];
    if (tmp > dp[i]) {
      dp[i] = tmp;
    }
  }
}

console.log(dp[n]);
