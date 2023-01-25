const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

let sum = 5;

for (let i = 2; i <= input; i++) {
  sum += 5 * i - (2 * i - 1);
  sum %= 45678;
}

console.log(sum);
