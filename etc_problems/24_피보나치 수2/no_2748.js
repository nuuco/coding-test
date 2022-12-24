const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const num = Number(fs.readFileSync(filePath).toString().trim());

const memo = [BigInt(0), BigInt(1)];

for (let i = 2; i <= num; i++) {
  memo[i] = memo[i - 1] + memo[i - 2];
}

console.log(memo[num].toString());
