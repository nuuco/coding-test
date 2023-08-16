const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = t.split(' ').map(Number);

const result = new Array(n + 1).fill(0);

for(let el of input) {
  const [i, j, k] = el.split(' ').map(Number);
  for(let num = i; num <= j; num++) {
    result[num] = k;
  }
}

result.shift();

console.log(result.join(' '));
