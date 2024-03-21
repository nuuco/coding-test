const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, a, b, c, d] = fs.readFileSync(filePath).toString().split(" ").map(Number);

const solution = (n, a, b, c, d) => {
  let aCost = Math.ceil(n / a) * b;
  let bCost = Math.ceil(n / c) * d;

  return aCost > bCost ? bCost : aCost;
};

console.log(solution(n, a, b, c, d));
