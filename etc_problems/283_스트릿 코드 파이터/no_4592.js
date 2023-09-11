const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [scoreStr, t, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let max = 0;
const [a, b, c] = scoreStr.split(" ").map(Number);

for (let i = 0; i < input.length; i = i + 3) {
  let teamScore = 0;
  for (let j = 0; j < 3; j++) {
    const [countA, countB, countC] = input[i + j].split(" ").map(Number);
    const score = a * countA + b * countB + c * countC;
    teamScore += score;
  }
  if (teamScore > max) {
    max = teamScore;
  }
}

console.log(max);
