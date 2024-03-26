const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, p] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const solution = (n, p) => {
  let maxDiscount = 0;

  if (n >= 5) {
    maxDiscount = maxDiscount < 500 ? 500 : maxDiscount;
  }
  if (n >= 10) {
    maxDiscount = maxDiscount < p * 0.1 ? p * 0.1 : maxDiscount;
  }
  if (n >= 15) {
    maxDiscount = maxDiscount < 2000 ? 2000 : maxDiscount;
  }
  if (n >= 20) {
    maxDiscount = maxDiscount < p * 0.25 ? p * 0.25 : maxDiscount;
  }
  return p - maxDiscount < 0 ? 0 : p - maxDiscount;
};

console.log(solution(n, p));
