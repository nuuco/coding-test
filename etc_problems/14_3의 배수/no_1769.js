const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

let numStr = input;
let count = 0;

while (numStr.length > 1) {
  count++;
  let sum = numStr.split("").reduce((acc, cur) => acc + Number(cur), 0);
  numStr = sum.toString();
}

console.log(count);
console.log(Number(numStr) % 3 === 0 ? "YES" : "NO");
