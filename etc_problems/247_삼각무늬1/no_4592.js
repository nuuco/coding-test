const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of input) {
  const [a, b] = el.split(' ').map(Number);

  const tmp = Math.ceil(a / b);
  result.push(tmp ** 2);
}

console.log(result.join('\n'));
