const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
let prev = input;
let first = Number(prev[0]);
let numLength = prev.length;

let num = first * numLength;
let result = "NFA";

while (prev.length > 1) {
  if (String(num) === prev) {
    result = "FA";
    break;
  }
  prev = String(num);
  first = Number(prev[0]);
  numLength = prev.length;
  num = first * numLength;
}
if (String(num) === prev) {
  result = "FA";
}
console.log(result);
