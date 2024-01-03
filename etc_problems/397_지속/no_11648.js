const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = fs.readFileSync(filePath).toString().trim();

let numberStr = String(n);
let count = 0;

while (numberStr.length > 1) {
  count++;
  let result = Number(numberStr[0]);
  for (let i = 1; i < numberStr.length; i++) {
    const num = Number(numberStr[i]);
    result *= num;
  }

  numberStr = String(result);
}

console.log(count);
