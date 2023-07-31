const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let el of input) {
  const [a, b, c] = el.split(' ').map(Number);

  const diff = b - a  - 1 < c - b - 1 ? c - b - 1 : b - a - 1;
  result.push(diff);
}
console.log(result.join('\n'));

