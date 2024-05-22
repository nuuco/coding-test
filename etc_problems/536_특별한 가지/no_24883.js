const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, m, k] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const answer = (m / n) * k;

console.log(answer);
