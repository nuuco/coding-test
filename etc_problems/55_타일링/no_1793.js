const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const max = Math.max(...input);
const result = [];

const memo = [BigInt(1), BigInt(1), BigInt(3)];

for (let i = 3; i <= max; i++) {
  memo[i] = memo[i - 1] + memo[i - 2] * BigInt(2);
}
// console.log(memo);

for (let num of input) {
  result.push(memo[num]);
}

console.log(result.map((el) => String(el)).join("\n"));
