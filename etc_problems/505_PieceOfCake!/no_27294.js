const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, h, v] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const a = h * v;
const b = h * (n - v);
const c = (n - h) * v;
const d = (n - h) * (n - v);

const max = Math.max(a, b, c, d);
console.log(max * 4);
