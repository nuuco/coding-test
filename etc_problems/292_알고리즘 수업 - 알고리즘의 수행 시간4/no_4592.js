const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

let sum = 0;
for(let i = 1; i < n; i++) {
  sum += i;
}

console.log(sum);
console.log(2);

