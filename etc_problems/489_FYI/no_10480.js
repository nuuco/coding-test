const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

if (input.slice(0, 3) === "555") {
  console.log("YES");
} else {
  console.log("NO");
}
