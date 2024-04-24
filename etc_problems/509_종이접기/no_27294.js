const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = 0;
for (let el of input) {
  const item = el
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  sum += item;
}

console.log(sum);
