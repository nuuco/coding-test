const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [sum, diff] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const x = (sum + diff) / 2;
const y = (sum - diff) / 2;

if (isNaN(x) || isNaN(y) || Math.ceil(x) !== x || Math.ceil(y) !== y) {
  console.log(-1);
} else if (x < 0 || y < 0) {
  console.log(-1);
} else if (x > y) {
  console.log(x + " " + y);
} else {
  console.log(y + " " + x);
}
