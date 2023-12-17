const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

const max = parseInt(Math.sqrt(n));
let answer = 1;
for (let i = 1; i <= max; i++) {
  let tmp = 1 + i + i ** 2;
  if (tmp === n) {
    answer = i;
    break;
  }
}

console.log(answer);
