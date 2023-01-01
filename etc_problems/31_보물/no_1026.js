const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, aStr, bStr] = fs.readFileSync(filePath).toString().trim().split("\n");
const a = aStr
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a); //내림차순
const b = bStr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); //오름차순

let result = 0;
for (let i = 0; i < a.length; i++) {
  result += a[i] * b[i];
}

console.log(result);
