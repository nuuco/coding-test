const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [x, y] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let max = 0;
for (let i = 1; i <= y; i++) {
  const tmp = String(x * i);
  const revert = tmp.split("").reverse().join("");
  const revertNum = Number(revert);
  if (max < revertNum) {
    max = revertNum;
  }
}

console.log(max);
