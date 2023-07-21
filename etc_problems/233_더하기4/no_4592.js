const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const result = [];

for(let el of input) {
  const sum = el.split(' ').map(Number).reduce((acc, cur) => acc + cur, 0);
  result.push(sum);
}

console.log(result.join('\n'));