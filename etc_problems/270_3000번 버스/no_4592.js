const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = [];
const memo = [0, 1, 3, 7];
for (let el of input) {
  if (memo[el]) {
    result.push(memo[el]);
    continue;
  }

  for (let i = 4; i <= el; i++) {
    memo[i] = memo[i - 1] * 2 + 1;
  }

  result.push(memo[el]);
}

console.log(result.join("\n"));
