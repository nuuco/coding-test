const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().split(" ").map(Number);

let answer;
if (a === b) {
  answer = a;
} else {
  answer = a > b ? a : b;
}

console.log(answer);
