const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const correct = [];

for (let i = 1; i <= 10; i++) {
  correct.push(((i - 1) % 5) + 1);
}

const answer = [];
for (let i = 1; i <= input.length; i++) {
  const arr = input[i - 1].split(" ").map(Number);
  const isPerfectScore = arr.every((el, idx) => el === correct[idx]);
  if (isPerfectScore) answer.push(i);
}
console.log(answer.join("\n"));
