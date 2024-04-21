const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = "N";
const set = new Set([a, b, c]);
if (set.size <= 2) {
  result = "S";
} else if (a + b === c) {
  result = "S";
}

console.log(result);
