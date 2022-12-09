const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

//dp[n][0] = n자리 이친수 중 0으로 끝나는 수
//dp[n][1] = n자리 이친수 중 1로 끝나는 수
//dp[n][0] = dp[n - 1][0] + dp[n - 1][1]  // 앞이 0 으로 끝나든 1로 끝나든 0만 붙이면 되니까
//dp[n][1] = dp[n - 1][0]  // 앞이 0으로 끝나야 1이 비연속적이니까

//정수 범위를 초과하므로 BigInt로 대체

const solution = (n) => {
  const dp = [
    [BigInt(0), BigInt(0)],
    [BigInt(0), BigInt(1)],
  ];
  for (let i = 2; i <= n; i++) {
    dp[i] = [];
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
    dp[i][1] = dp[i - 1][0];
  }
  return String(dp[n][0] + dp[n][1]);
};

console.log(solution(n));
