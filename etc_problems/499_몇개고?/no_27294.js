const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, s] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = 0;

if (s === 1 || t < 12 || t > 16) {
  answer = 280;
} else {
  answer = 320;
}

console.log(answer);
