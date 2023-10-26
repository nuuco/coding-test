const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, m, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const o = m;
const x = n - m;

const newO = k;
const newX = n - k;

const result = Math.min(o, newO) + Math.min(x, newX);

console.log(result);
