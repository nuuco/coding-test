const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [k, n, m] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const left = k * n - m;
let answer = 0;
if(left > 0) {
  answer = left;
}

console.log(answer);