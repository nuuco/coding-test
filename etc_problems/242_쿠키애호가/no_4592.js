const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of input) {
  const [n, c] = el.split(' ').map(Number);
  result.push(Math.ceil(n / c));
}

console.log(result.join('\n'));

