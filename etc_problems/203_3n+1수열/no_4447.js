const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let n = Number(fs.readFileSync(filePath).toString().trim());
let cnt = 1;

while(n !== 1) {
  if(n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  // console.log(n)
  cnt++;
}

console.log(cnt);