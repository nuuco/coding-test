const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [s, d, i, l, n] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const sum = s + d + i + l;
const target = 4 * n;

if (sum < target) {
  console.log(target - sum);
} else {
  console.log(0);
}
