const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

/**
 * 참고 자료 : https://chanhuiseok.github.io/posts/baek-10/
 * 43 = (43 - 2²) + 2² = …
      = (43 - 3²) + 3² = …
      = (43 - 4²) + 4² = …
      = (43 - 5²) + 5² = 18 + 5² -> 18은 3² + 3² = 2개의 최소 항으로 표시 -> 총 항의 갯수 3개
      43 = 18 + 5² = 3² + 3²+5² (3개)
      = (43 - 6²) + 6² = 7 + 6² -> 7은 1² + 1² + 1² + 2² = 4개의 최소 항으로 표시 -> 총 항의 갯수 5개
      43 = 7 + 6² = 1² + 1² + 1² + 2²+6² (5개)
 * 
 * 
 * 1. dp[n] =  어떤 자연수 n을 제곱수의 합으로 나타낼 때 항의 최소 개수
 * 2. dp[n] = n 으로 초기화
 * 3. 어떤 자연수 N에 대해, N=1부터 시작하면서 n보다 작은 제곱수를 가장 작은 것부터 뺀다.
 * 4. 빼서 나온 그 수(n - 제곱수)를 제곱수들의 합으로 나타낼 때의 항의 최소 개수는 dp[N - 제곱수]이며,
 *    여기에 제곱수 1개 항을 추가로 붙여줬을 때 총 항의 갯수는 dp[n - 제곱수] + 1 이다.
 *    (예) 11에서 3²을 뺐을 때 dp[11 - 3²] = dp[2] 이며, 여기에 제곱수 1개인 3²을 추가로 더해주는 것.
 *    dp[N] = min(dp[N], dp[N - 제곱수] + 1)
 */

const solution = (input) => {
  dp = [0];

  for (let i = 1; i <= input; i++) {
    dp[i] = i;
    //i 보다 작으면서 가장 큰 제곱수 찾기
    const sqrt = Math.floor(Math.sqrt(i));
    for (let j = 1; j <= sqrt; j++) {
      dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
    }
  }

  return dp[input];
};

console.log(solution(input));
