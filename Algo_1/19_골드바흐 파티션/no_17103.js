const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

//골드바흐의 추측
//에라토스테네스의 체 로 소수 미리 걸러내기
const max = Math.max(...arr);

const primeArr = Array(max + 1).fill(true);
primeArr[0] = false;
primeArr[1] = false;

for (let i = 2; i <= Math.floor(Math.sqrt(max)); i++) {
  if (primeArr[i]) {
    let j = 2;
    while (i * j <= max) {
      primeArr[i * j] = false;
      j++;
    }
  }
}
//각 인덱스 번호의 숫자가 소수인지 여부를 true, false 로 저장하는 배열 완성
/** max가 16일때
[
  false, false, true,  true,
  false, true,  false, true,
  false, false, false, true,
  false, true,  false, false,
  false
]
*/

const result = [];

for (let el of arr) {
  let count = 0;
  let half = parseInt(el / 2);
  while (half > 1) {
    if (primeArr[half] && primeArr[el - half]) {
      count++;
    }
    half--;
  }
  result.push(count);
}

console.log(result.join("\n"));
