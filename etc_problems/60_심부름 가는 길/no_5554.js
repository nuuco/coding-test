const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);

const x = parseInt(sum / 60);
const y = sum % 60;

console.log(x);
console.log(y);
