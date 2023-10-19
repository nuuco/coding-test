const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = t.split(" ").map(Number);

let min = Math.abs(a - b);

for (let el of input) {
  const tmp = Math.abs(Number(el) - b);

  if (min > tmp + 1) {
    min = tmp + 1;
  }
}

console.log(min);
