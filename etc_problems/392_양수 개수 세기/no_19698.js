const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let count = 0;

for (let el of input) {
  if (el > 0) {
    count++;
  }
}
console.log(count);
