const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(t);
const [a, b] = input.split(" ").map(Number);

let max = 0;
max += Math.floor(a / 2);
max += b;
if (n <= max) {
  console.log(n);
} else {
  console.log(max);
}
