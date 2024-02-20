const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, m] = fs.readFileSync(filePath).toString().split("\n");
let [a, b] = t.split(" ").map(Number);
let [k, x] = m.split(" ").map(Number);

const min = k - x;
const max = k + x;
let count = 0;

if (a > max || b < min) {
} else {
  for (let i = a; i <= b; i++) {
    if (i >= min && i <= max) {
      count++;
    }
  }
}

if (count > 0) {
  console.log(count);
} else {
  console.log("IMPOSSIBLE");
}
