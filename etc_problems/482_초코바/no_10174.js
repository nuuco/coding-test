const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, p] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

if (n * 100 >= p) {
  console.log("Yes");
} else {
  console.log("No");
}
