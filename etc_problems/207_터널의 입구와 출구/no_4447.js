const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [n, m, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);
m = Number(m);

let count = m;
let max = m;

for(let el of input) {
  const [inNum, outNum] = el.split(' ').map(Number);

  count += inNum;
  count -= outNum;

  if(max < count) {
    max = count;
  }

  if(count < 0) {
    max = 0;
    break;
  }
}

console.log(max);