const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const halfA = Math.floor(a / 2);
const halfB = Math.floor(b / 2);

if (halfA === a / 2 || halfB === b / 2) {
  console.log(0);
} else {
  console.log(Math.min(a, b));
}
