const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
arr = arr.split(" ").map(Number);
arr.unshift(0);

const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    const tmp = dp[i - j] + arr[j];
    if (tmp < dp[i]) {
      dp[i] = tmp;
    }
  }
}

console.log(dp[n]);
