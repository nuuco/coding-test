const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const num = Number(fs.readFileSync(filePath).toString().trim());

//dp
//dp[n][0] = 세로 n 칸일 때, 마지막 줄에 사자가 한 마리도 없는 경우의 수
//dp[n][1] = 세로 n 칸일 때, 마지막 줄에 사자가 첫번째 칸에 있는 경우의 수
//dp[n][2] = 세로 n 칸일 때, 마지막 줄에 사자가 두번째 칸에 있는 경우의 수

//dp[n][0] = dp[n - 1][0] + dp[n -1][1] + dp[n - 1][2]
//dp[n][1] = dp[n - 1][0] + dp[n - 1][2]
//dp[n][2] = dp[n - 1][0] + dp[n - 1][1]

//구해야하는 건 dp[n][0] + dp[n][1] + dp[n][2]

//값이 커지므로 답을 9901로 나눈 나머지를 넣어주어야한다.

const solution = (num) => {
  const dp = [
    [0, 0, 0],
    [1, 1, 1],
  ];

  for (let i = 2; i <= num; i++) {
    dp[i] = [];
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
  }
  return (dp[num][0] + dp[num][1] + dp[num][2]) % 9901;
};

console.log(solution(num));
