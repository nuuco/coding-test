const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

if (/[dD]2/.test(input)) {
  console.log("D2");
} else {
  console.log("unrated");
}
