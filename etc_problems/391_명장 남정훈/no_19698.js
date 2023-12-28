const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [l, r, a] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const max = l < r ? r : l;
const min = l > r ? r : l;
const diff = max - min;
const aDiff = a - diff;

let result = 0;

if (aDiff <= 0) {
  result = (min + a) * 2;
} else {
  const tmp = Math.floor(aDiff / 2);
  result = (max + tmp) * 2;
}

console.log(result);
