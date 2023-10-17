const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, x, k] = t.split(" ").map(Number);

let answer = x;
for (let el of input) {
  [a, b] = el.split(" ").map(Number);
  if (a === answer) {
    answer = b;
  } else if (b === answer) {
    answer = a;
  }
}

console.log(answer);
