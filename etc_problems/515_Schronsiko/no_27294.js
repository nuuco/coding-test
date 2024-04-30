const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

for (let el of input) {
  const [n, m] = el.split(" ").map(Number);
  const mul = n * m;
  const answer = Math.floor(mul / 2);
  result.push(answer);
}

console.log(result.join("\n"));
