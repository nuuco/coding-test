const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [r, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

//공식을 풀어보면
//l * w = r + b && l + w = 2 + (r / 2) 를 만족하는 l, w를 찾으면 된다.

const mul = r + b;
const sum = 2 + (r / 2);
let l = Math.ceil(sum / 2);
let w = sum - l;
while(l * w !== mul) {
  l++;
  w--;
}

console.log(`${l} ${w}`)

