const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);

console.log(sum);