const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = Number(fs.readFileSync(filePath).toString().trim());
let sum = 0;

if (input >= 9) {
  sum += 9;
} else {
  sum += input;
}

let max = 100;
while (max / 10 - 1 < input) {
  const start = max / 10 - 1;
  let end = input <= max - 1 ? input : max - 1;

  const count = (end - start) * (max.toString().length - 1);
  sum += count;
  max *= 10;
}

console.log(sum);

/**
 * 1. 1 ~ 9까지는 1씩 증가 (9)
 * 2. 10 ~ 99까지는 2씩 증가 (90)
 * 3. 100 ~ 999 까지는 3씩 증가 (900)
 * ...
 * 4. 단순 for 문으로는 시간이 너무 오래 걸림다.
 * 5. input 이 1의 자리인 경우
 *    만약 4라면 +4
 *    1 ~ 9까지 +9
 * 6. input 이 2의 자리인 경우
 *    만약 24라면 +(11 ~ 24까지 14) * 2
 *    11 ~ 99까지 +90 * 2
 * ...
 * 7. 1 ~ 9 까지 몇개를 가지고 있는지 * 1
 * 8. 11 ~ 99 까지 몇개를 가지고 있는지 * 2
 */
