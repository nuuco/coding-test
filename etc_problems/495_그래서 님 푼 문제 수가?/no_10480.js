const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, m, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let min = n - m * k;
if (min < 0) min = 0;
let max = n - m * k + (m - 1);
if (max < 0) max = 0;

console.log(`${min} ${max}`);
