const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = 0;

if (a < b + 1) {
  answer = a + a - 1;
} else {
  answer = b + b + 1;
}

console.log(answer);
