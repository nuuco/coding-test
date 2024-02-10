const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [n] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let count = 0;
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    count += i;
  }
}

const answer = count * 5 - 24;
console.log(answer);
