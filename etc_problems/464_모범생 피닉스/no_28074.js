const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const num = Number(t) - 1;
const sum = input
  .split(" ")
  .map(Number)
  .reduce((a, b) => a + b, 0);
const total = sum + 8 * num;

const day = Math.floor(total / 24);
const time = total % 24;

console.log(`${day} ${time}`);
