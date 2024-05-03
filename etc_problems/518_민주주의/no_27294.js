const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = t.split(" ").map(Number);
let count = 0;
const halfNum = Math.ceil(m / 2);

for (let el of input) {
  let agreeCount = 0;
  for (let char of el) {
    if (char === "O") {
      agreeCount++;
    }

    if (agreeCount >= halfNum) {
      count++;
      break;
    }
  }
}

console.log(count);
