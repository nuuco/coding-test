const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//어떻게 풀까?
//참고자료 https://cooling.tistory.com/2
//DP
//dp[n] = dp[n - 1] + dp[n - 2] + dp[n - 3]

//dp[i][j] = i 를 만드는 경우의 수 중 마지막 수가 j 인 것
//dp[n][1] = dp[n - 1][2] + dp[n - 1][3]
//dp[n][2] = dp[n - 2][1] + dp[n - 2][3]
//dp[n][3] = dp[n - 3][1] + dp[n - 3][2]

const solution = (arr) => {
  const max = Math.max(...arr);
  const dp = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
  ];

  for (let i = 4; i <= max; i++) {
    dp[i] = [];
    dp[i][0] = 0;
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % 1000000009;
    dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % 1000000009;
    dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % 1000000009;
  }

  const result = [];
  for (let el of arr) {
    const answer = dp[el].reduce((acc, cur) => acc + cur, 0) % 1000000009;
    result.push(answer);
  }
  return result.join("\n");
};

console.log(solution(arr));
