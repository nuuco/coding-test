const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [k, d, a] = fs.readFileSync(filePath).toString().trim().split("/").map(Number);

if (k + a < d || d === 0) {
  console.log("hasu");
} else {
  console.log("gosu");
}
