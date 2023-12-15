const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, m, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const i = k % m;
const j = Math.floor(k / m);

console.log(j + " " + i);
