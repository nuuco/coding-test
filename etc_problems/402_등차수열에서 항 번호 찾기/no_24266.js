const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, d, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const n = (k - a) / d + 1;

if (d === 0 || isNaN(n) || Math.floor(n) !== n || n <= 0) {
  console.log("X");
} else {
  console.log(n);
}
