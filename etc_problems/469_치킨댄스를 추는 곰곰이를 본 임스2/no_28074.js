const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let count = 0;

for (let el of input) {
  const num = Number(el.slice(2));
  if (num <= 90) {
    count++;
  }
}

console.log(count);
