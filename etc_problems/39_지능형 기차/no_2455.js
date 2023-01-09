const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = 0;
let max = 0;

for (let el of input) {
  const [minus, plus] = el.split(" ").map(Number);
  sum = sum - minus + plus;
  max = max < sum ? sum : max;
}

console.log(max);
