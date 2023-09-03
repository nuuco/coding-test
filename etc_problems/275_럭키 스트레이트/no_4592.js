const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("").map(Number);

const half = input.length / 2;

const sumA = input.splice(half).reduce((acc, cur) => acc + cur);
const sumB = input.reduce((acc, cur) => acc + cur);

if (sumA === sumB) {
  console.log("LUCKY");
} else {
  console.log("READY");
}
