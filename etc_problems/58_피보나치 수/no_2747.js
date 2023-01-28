const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = Number(fs.readFileSync(filePath).toString().trim());

const memo = [0, 1, 1];

for (let i = 3; i <= input; i++) {
  memo[i] = memo[i - 1] + memo[i - 2];
}

console.log(memo[input]);
