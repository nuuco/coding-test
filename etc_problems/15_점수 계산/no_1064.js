const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const nums = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const quiz = [];

for (let i = 1; i <= nums.length; i++) {
  quiz.push([nums[i - 1], i]);
}

quiz.sort((a, b) => b[0] - a[0]);

let sum = 0;
const result = [];
for (let i = 0; i < 5; i++) {
  sum += quiz[i][0];
  result.push(quiz[i][1]);
}

result.sort((a, b) => a - b);

console.log(sum);
console.log(result.join(" "));
