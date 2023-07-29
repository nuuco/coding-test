const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, c, d, p] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const xCost = p * a;
let rest = p - c > 0 ? p - c : 0;
const yCost = b + (rest * d);

console.log(xCost > yCost ? yCost : xCost);