const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [tc, arrStr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = tc.split(" ").map(Number);
const arr = arrStr.split(" ").map(Number);

//투 포인터 (Two Point)
/*
참고 : https://butter-shower.tistory.com/226
0. sumArr 을 만들어서 합 배열을 만든다. sumArr[i] === i 번째 요소까지 합한 값 
1. 시작점과 끝점이 첫번째 원소의 인덱스를 가리키도록 한다.
2. 현재 부분 합이 M과 같다면 카운트한다. (부분합은 sumArr[end] - sumArr[start - 1])
3. 현재 부분 합이 M보다 작다면 end를 1 증가시킨다.
4. 현재 부분 합이 M보다 크거나 같다면 start를 1 증가시킨다.
5. 모든 경우를 확인할 때까지 2-4번 과정을 반복한다. (start, end 가 배열 끝에 옴)
*/

let start = 0;
let end = 0;
let count = 0;

const sumArr = [];
arr.forEach((el, idx) => {
  if (idx === 0) sumArr[idx] = el;
  else sumArr[idx] = el + sumArr[idx - 1];
});

while (start < arr.length && end < arr.length) {
  const tmp = start === 0 ? sumArr[end] : sumArr[end] - sumArr[start - 1];
  if (tmp === m) count++;

  if (tmp < m) end++;
  else start++;
}

console.log(count);
