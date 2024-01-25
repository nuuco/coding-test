const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let sum = 0;

for (let el of input) {
  sum += el;
}

console.log(sum);
