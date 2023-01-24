const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
// a ~ b 까지의 합은 {(a + b) * (b - a + 1)} / 2

const sum = ((a + b) * (Math.abs(b - a) + 1)) / 2;

console.log(sum);
