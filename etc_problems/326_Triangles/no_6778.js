const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.pop();

const result = [];

for (let num of input) {
  for (let i = 1; i <= num; i++) {
    result.push("*".repeat(i));
  }
}

console.log(result.join("\n"));
