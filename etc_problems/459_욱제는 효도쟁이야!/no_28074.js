const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let sum = 0;
for (let i = 1; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
