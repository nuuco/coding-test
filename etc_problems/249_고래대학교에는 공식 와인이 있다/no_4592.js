const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [c, k, p] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let result = 0;

for(let i = 1; i <= c; i++) {
  result += (k * i) + (p * (i ** 2));
}

console.log(result);
