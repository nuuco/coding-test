const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

let count = 0;
for (let i = 1; i <= n; i++) {
  const arr = String(i).match(/([369])/g);
  if (arr) {
    count += arr.length;
  }
}

console.log(count);
