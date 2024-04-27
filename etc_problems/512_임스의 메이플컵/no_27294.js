const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, u, l] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
if (n >= 1000 && (u >= 8000 || l >= 260)) {
  console.log("Very Good");
} else if (n >= 1000) {
  console.log("Good");
} else {
  console.log("Bad");
}
