const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [x, y] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = 0;

if (y - x < 0) {
  answer = x + y;
} else {
  answer = y - x;
}

console.log(answer);
