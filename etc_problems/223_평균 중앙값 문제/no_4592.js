const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();

const result = [];

for(let el of input) {
  const [a, b] = el.split(' ').map(Number);
  const answer = 3 * a - a - b;
  result.push(answer);
}

console.log(result.join('\n'));
