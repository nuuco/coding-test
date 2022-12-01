const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, b] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (n, b) => {
  let num = n;
  let result = "";

  if (num === 0) return "0";

  while (num > 0) {
    let tmp = num % b;

    if (tmp >= 10) {
      tmp = String.fromCharCode(55 + tmp); //65 = A, 90 = Z => 10 = A, 35 = Z
    }

    result = tmp + result;
    num = parseInt(num / b);
  }

  if (num >= 10) {
    num = String.fromCharCode(55 + num); //65 = A, 90 = Z => 10 = A, 35 = Z
  }

  return result;
};

console.log(solution(n, b));
