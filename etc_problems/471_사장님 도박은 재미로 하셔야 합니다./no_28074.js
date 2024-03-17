const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.pop();

let sum = 0;

for (let num of input) {
  sum += num;
}

console.log(sum);
