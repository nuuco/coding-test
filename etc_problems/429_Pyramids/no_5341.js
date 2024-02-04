const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
input.pop();

const result = [];
for (let el of input) {
  let sum = 0;
  for (let i = 1; i <= el; i++) {
    sum += i;
  }
  result.push(sum);
}

console.log(result.join("\n"));
