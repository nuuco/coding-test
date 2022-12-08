const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

//dp
const dp = new Array(n);
//https://ideone.com/n9K9id 참고

//dp[i][j] = (i - 1)개일 때, 끝이 j로 끝나는 경우
//dp[0][0] ~~ [0][9] = 1;
//dp[i][0] = dp[i - 1][1] //끝이 0 일 때
//dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];  //끝이 1 ~ 8 일 때 -> 앞수가 하나 작은 경우 + 앞수가 하나 큰경우
//dp[i][9] = dp[i - 1][8] //끝이 9일 때 -> 앞수가 하나 작은 경우

dp[0] = [0];
for (let i = 1; i <= 9; i++) {
  dp[0][i] = 1;
}

for (let i = 1; i < n; i++) {
  dp[i] = [];
  dp[i][0] = dp[i - 1][1];
  for (let j = 1; j < 9; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
  }
  dp[i][9] = dp[i - 1][8];
}

// console.log(dp);

const result = dp[n - 1].reduce((acc, cur) => (acc + cur) % 1000000000, 0);
console.log(result);
