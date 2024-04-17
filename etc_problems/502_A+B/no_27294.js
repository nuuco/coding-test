const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split("\n");

let longNum;
let shortNum;
if (a.length < b.length) {
  longNum = b;
  shortNum = a;
} else {
  longNum = a;
  shortNum = b;
}

let result = "";
let up = false;

for (let i = 1; i <= longNum.length; i++) {
  const num1 = Number(longNum[longNum.length - i]);
  const num2 = shortNum.length - i < 0 ? 0 : Number(shortNum[shortNum.length - i]);
  let sum = num1 + num2;
  if (up) {
    sum++;
  }
  if (sum >= 10) {
    sum = sum - 10;
    up = true;
  } else {
    up = false;
  }
  result = String(sum) + result;
}

if (up) {
  result = "1" + result;
}
console.log(result);
