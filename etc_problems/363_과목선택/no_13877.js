const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const a = input.slice(0, 4).sort((a, b) => b - a);
const b = input.slice(4).sort((a, b) => b - a);

const result = a[0] + a[1] + a[2] + b[0];

console.log(result);
