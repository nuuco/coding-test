const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [base, length, nums] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [a, b] = base.split(" ").map(Number);
const numArr = nums.split(" ").map(Number);

let dec = 0;
let i = 0;
while (numArr.length > 0) {
  dec += numArr.pop() * a ** i;
  i++;
}

const result = [];
while (dec > 0) {
  result.push(dec % b);
  dec = parseInt(dec / b);
}

result.reverse();

console.log(result.join(" "));
