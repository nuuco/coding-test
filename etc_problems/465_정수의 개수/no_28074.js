const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(",");

let count = 0;
for (let el of input) {
  if (!isNaN(Number(el))) {
    count++;
  }
}

console.log(count);
