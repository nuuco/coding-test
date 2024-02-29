const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [target, t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let count = 0;

for (let el of input) {
  if (target === el) {
    count++;
  }
}

console.log(count);
