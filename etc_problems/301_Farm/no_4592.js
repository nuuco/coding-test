const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, n, w] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let result = -1;
if (a !== b) {
  tmp = (w - b * n) / (a - b);
  if (Math.ceil(tmp) !== tmp || tmp === NaN || tmp === 0 || tmp === n) {
    tmp = -1;
  } else {
    result = tmp;
  }
} else {
  if (n === 2 && w === 2 * a) {
    result = 1;
  }
}

if (result !== -1) {
  console.log(`${result} ${n - result}`);
} else {
  console.log(result);
}
