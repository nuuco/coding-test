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
  while (a[j] >= arr[i]) {
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
 * 풀이
 * arr 의 최장 증가 부분 수열 길이를 구한다고 했을 때,
 * 1. 우선 앞에 0을 삽입해 숫자가 1번 인덱스부터 시작하도록 하자.
 * 2. dp[i] = arr[i] 요소를 마지막으로 가지는 LIS의 길이이다.
 *    dp[0] = 0 이다.
 * 3. a[i] = 길이가 i 인 LIS 의 마지막 값이다. 여러 경우의 수가 있다면 더 작은 값으로 저장한다.
 *    a[0] = 0 이다.
 * 4. arr 배열을 순회한다. 순회하며 5 ~ 10 과정을 처리한다.
 * 5. 각 요소는 a 배열의 마지막 요소부터 0번째 요소와 비교해서 arr[i] 보다 a[j]가 작아지는 j를 찾는다. (while 문)
 * 6. 5번을 찾는 이유는 a[j]가 arr[i]보다 작다면 길이가 j인 LIS 뒤에 i 가 추가로 붙을 수 있다는 것이고,
 *    그 뜻은 d[i] = j + 1; 이 된다는 의미이다.
 * 7. dp[i]의 값(LIS의 길이)을 찾았다면 그 길이 LIS 마지막 값을 업데이트 해줘야한다.
 * 8. 만약 a[dp[i]]의 마지막 값이 아직 정의되어있지 않다면 (그 길이의 LIS 정의가 처음이라면)
 *    a.length 가 정의할 길이 이하라는 것이고 (a 배열 앞에 0을 추가해주었으니까)
 *    이 경우 a[dp[i]] = arr[i] 가 된다.
 * 9. 또한 a[dp[i]] 값이 정의되어 있더라도 그 값이 arr[i] 보다 크다면 더 작은 값인 arr[i]로 갱신해줘야한다.
 *    -> 왜? 더 작은 값으로 바꿔주어야 뒤에 arr[i] 보다 크고 기존 a[dp[i]]보다 작은 수 가 왔을 때도 잘 동작한다.
 *    이 경우에도 a[dp[i]] = arr[i] 가 된다.
 * 10. 아니라면 기존 a[dp[i]]가 더 작으니 패스
 * 11. 순회를 끝내고 난뒤에는 dp와 a 배열이 완성이 되어있다.
 * 12. dp에는 나올 수 있는 모든 증가부분수열 길이들이 작성되어 있으므로 이 길이 중 최대값을 결과값으로 출력한다.
 */
