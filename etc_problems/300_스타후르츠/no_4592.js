const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, t, c, p] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let count = 0;
for (let i = 1 + t; i <= n; i = i + t) {
  count++;
}

const result = c * count * p;

console.log(result);
