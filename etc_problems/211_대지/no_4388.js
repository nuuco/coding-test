const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let minX = Number.MAX_SAFE_INTEGER;
let minY = Number.MAX_SAFE_INTEGER;

let maxX = Number.MIN_SAFE_INTEGER;
let maxY = Number.MIN_SAFE_INTEGER;

for(let el of input) {
  const [x, y] = el.split(' ').map(Number);

  if(x < minX) {
    minX = x;
  }

  if(y < minY) {
    minY = y;
  }

  if(x > maxX) {
    maxX = x;
  }

  if(y > maxY) {
    maxY = y;
  }
}

const result = (maxX - minX) * (maxY - minY);

console.log(result);



