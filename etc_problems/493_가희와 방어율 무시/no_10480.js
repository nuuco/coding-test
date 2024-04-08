const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const era = a * ((100 - b) / 100);

if (era >= 100) {
  console.log(0);
} else {
  console.log(1);
}
