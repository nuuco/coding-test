const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, arrStr] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = arrStr.split(" ").map(Number);
arr.unshift(0);

//어떻게 풀까...? 로직을 모르겠다.
/** 최장 증가 부분 수열
 * (LIS : Longest Increasing Subsequence)
 * 대표적인 동적 계획법(DP 문제)
 */

const dp = [0];
const a = [0];
for (let i = 1; i < arr.length; i++) {
  let j = a.length - 1;
  while (j > 0 && a[j] >= arr[i]) {
    j--;
  }
  dp[i] = j + 1;

  if (a.length <= dp[i] || a[dp[i]] > arr[i]) {
    a[dp[i]] = arr[i];
  }
}

// console.log(dp);
// console.log(a);
console.log(Math.max(...dp));

/**
 * 풀이 방법 기술
 */
