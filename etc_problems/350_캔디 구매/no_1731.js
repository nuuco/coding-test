const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [c, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

if (k === 0) {
  console.log(c);
} else {
  const cost = Math.round(c / 10 ** k) * 10 ** k;
  console.log(cost);
}
