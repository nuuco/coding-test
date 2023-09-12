const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const w = input.splice(0, 10).sort((a, b) => b - a);
const k = input.sort((a, b) => b - a);

const scoreW = w[0] + w[1] + w[2];
const scoreK = k[0] + k[1] + k[2];

console.log(scoreW + " " + scoreK);
