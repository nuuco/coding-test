const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let [a, b, c] = t.split(" ").map(Number);
b *= 2;
c *= 3;

let min = 100;
let max = 0;
const truck = [];
for (let el of input) {
  const [start, end] = el.split(" ").map(Number);
  truck.push([start, end]);
  if (start < min) min = start;
  if (end > max) max = end;
}

const arr = new Array(max + 1).fill(0);

for (let el of truck) {
  for (let i = el[0]; i < el[1]; i++) {
    arr[i]++;
  }
}

let sum = 0;
for (let i = min; i < arr.length; i++) {
  if (arr[i] === 1) sum += a;
  if (arr[i] === 2) sum += b;
  if (arr[i] === 3) sum += c;
}
console.log(sum);
