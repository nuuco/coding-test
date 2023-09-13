const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split("\n");

if (a.length >= b.length) {
  console.log("go");
} else {
  console.log("no");
}
