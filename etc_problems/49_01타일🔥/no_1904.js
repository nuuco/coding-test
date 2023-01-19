const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());
//참고 : https://junghyeonsu.tistory.com/199
//피보나치 수열이다..!!
/**
길이가 N인 이진 수열의 개수가 왜 피보나치 수열을 가지는지 궁금하시군요.
문제의 상황에서 맨 앞에 올 수 있는 타일은 2가지 뿐입니다.

1. 00 타일과 1 타일
2. 00 타일이 올 경우 00..으로 시작하고

1 타일이 올 경우 1...로 시작하겠지요.
이때 '길이가 N인 이진 수열의 개수'를 f(N)이라고 정의합시다.
그러면 경우 (1)의 가짓수는 f(N-2)가 되고 경우 (2)의 가짓수는 f(N-1)이 될 것입니다.
따라서 전체 경우의 수 f(N) 은 경우 (1) 과 (2)의 가짓수의 합인
f(N) = f(N-1) + f(N-2)가 됩니다.
또한 f(0) = f(1) = 1임을 확인할 수 있습니다.
 */

const memo = new Array(n).fill(0);

memo[1] = 1;
memo[2] = 2;
memo[3] = 3;

for (let i = 4; i <= n; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
}

console.log(memo[n]);
