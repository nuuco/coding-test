const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, c, d, e, f] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let x, y;

if (b * d - a * e === 0 || b === 0) {
  for (let i = -999; i <= 999; i++) {
    let tmp = e * c - a * e * i - b * f + b * d * i;
    if (tmp === 0) {
      x = i;
      y = b === 0 ? (f - d * x) / e : (c - a * x) / b;
    }
  }
} else {
  x = (b * f - e * c) / (b * d - a * e);
  y = (c - a * x) / b;
}

console.log(x + " " + y);
