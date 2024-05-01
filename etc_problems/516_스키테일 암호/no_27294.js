const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(n);
const result = [];

for (let i = 0; i < input.length; i++) {
  if (i % num === 0) {
    result.push(input[i]);
  }
}

console.log(result.join(""));
