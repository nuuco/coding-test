const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const solution = (a, b, c) => {
  const answer = 91 + a + b * 3 + c;

  return `The 1-3-sum is ${answer}`;
};

console.log(solution(a, b, c));
