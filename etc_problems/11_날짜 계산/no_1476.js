const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [e, s, m] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
// (1 ≤ E ≤ 15, 1 ≤ S ≤ 28, 1 ≤ M ≤ 19)

const all = 15 * 28 * 19;
let x = (6916 * e + 4845 * s + 4200 * m) % all;
if (x === 0) x = all;
console.log(x);
//중국인의 나머지 정리
//https://casterian.net/algo/crt.html#sec3-1 참고

//-----

// let year = s;
// let isCorrect = false;

// while (!isCorrect) {
//   if (year % 15 === e % 15) {
//     if (year % 19 === m % 19) {
//       isCorrect = true;
//     }
//   }
//   if (!isCorrect) year += 28;
// }

// console.log(year);
// 왜 메모리 초과...?
