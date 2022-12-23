const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, f] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const tmp = n % 100;

let num = n - tmp;
while (num % f !== 0) {
  num++;
}
const strNum = num.toString();
console.log(strNum.slice(strNum.length - 2));
