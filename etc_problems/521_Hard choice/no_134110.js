const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [x, y] = fs.readFileSync(filePath).toString().trim().split("\n");

const [c1, b1, p1] = x.split(" ").map(Number);
const [c2, b2, p2] = y.split(" ").map(Number);

let sum = 0;
if (c1 < c2) {
  sum += c2 - c1;
}
if (b1 < b2) {
  sum += b2 - b1;
}
if (p1 < p2) {
  sum += p2 - p1;
}

console.log(sum);
