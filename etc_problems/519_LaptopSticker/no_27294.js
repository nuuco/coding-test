const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [w, h, sw, sh] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let correct = false;
if (w - 2 >= sw && h - 2 >= sh) {
  correct = true;
}
const answer = correct ? 1 : 0;
console.log(answer);
