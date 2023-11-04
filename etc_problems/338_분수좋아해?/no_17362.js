const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

const result = [];

for (let el of input) {
  const [a, b] = el.split(" ").map(Number);
  const quotient = Math.floor(a / b);
  const remainder = a % b;

  result.push(`${quotient} ${remainder} / ${b}`);
}

console.log(result.join("\n"));
