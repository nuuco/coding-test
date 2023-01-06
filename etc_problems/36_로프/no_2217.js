const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//모든 로프를 사용할 필요는 없다.
arr.sort((a, b) => b - a);

let max = 0;
let minRope = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < minRope) {
    minRope = arr[i];
  }
  const tmp = (i + 1) * minRope;
  if (max < tmp) {
    max = tmp;
  }
}

console.log(max);
