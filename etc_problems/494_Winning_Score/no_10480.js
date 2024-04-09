const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a1, a2, a3, b1, b2, b3] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const aScore = 3 * a1 + 2 * a2 + a3;
const bScore = 3 * b1 + 2 * b2 + b3;
// console.log(aScore, bScore);
if (aScore > bScore) {
  console.log("A");
} else if (aScore < bScore) {
  console.log("B");
} else {
  console.log("T");
}
