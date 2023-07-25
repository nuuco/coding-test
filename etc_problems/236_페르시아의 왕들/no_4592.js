const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [...input] = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

const result = [];

for(let el of input) {
  const [a, b, c, d] = el.split(' ').map(Number);
  result.push(`${c - b} ${d - a}`);
}
console.log(result.join('\n'));