const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let result = "";
if (m <= 2) {
  result = "NEWBIE!";
} else if (m <= n) {
  result = "OLDBIE!";
} else {
  result = "TLE!";
}

console.log(result);
