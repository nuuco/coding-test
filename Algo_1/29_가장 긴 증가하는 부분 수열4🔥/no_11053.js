const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, arrStr] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = arrStr.split(" ").map(Number);
arr.unshift(0);

/** 최장 증가 부분 수열
 * (LIS : Longest Increasing Subsequence)
 * 대표적인 동적 계획법(DP 문제)
 */

/**배열 찾기
 * 참고 : https://cocoon1787.tistory.com/455
 * dp 쵀대값이 5라면 해당 인덱스부터 출발해서 dp 값이 4인 인덱스의 arr[i] 값 넣고,,... 1이 될 때까지 반복
 */

const solution = () => {
  const dp = [0];
  const a = [0];
  for (let i = 1; i < arr.length; i++) {
    let j = a.length - 1;
    while (a[j] >= arr[i]) {
      j--;
    }
    dp[i] = j + 1;

    if (a.length <= dp[i] || a[dp[i]] > arr[i]) {
      a[dp[i]] = arr[i];
    }
  }
  const max = a.length - 1;

  //최댓값을 인덱스 찾기
  let idx = 0;
  dp.some((el, i) => {
    if (el === max) {
      idx = i;
      return true;
    }
    return false;
  });

  //역순으로 dp[i]가 max - 1인 arr[i] 값 넣어주기
  //그 다음 dp[i]가 max - 2인 arr[i] 값 넣어주기
  //... 순서대로 줄어들어야하는게 키 포인트
  const result = [arr[idx]];
  let tmp = max - 1;
  let i = idx - 1;
  while (tmp > 0) {
    if (dp[i] === tmp) {
      result.push(arr[i]);
      tmp--;
    }
    i--;
  }
  result.reverse();

  return [max, result];
};

const [max, result] = solution();
console.log(max);
console.log(result.join(" "));

/** 반례
 * 7
 * 1 6 2 4 5 3 7
 *
 * 정답
 * 5
 * 1 2 4 5 7
 */

/**
 * 8
 * 1 3 4 20 7 8 5 10
 *
 * 정답
 * 6
 * 1 3 4 7 8 10
 */
