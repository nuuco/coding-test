const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

let sum = 0;

for (let i = 1; i <= n; i++) {
  let count = 0;
  for(let j = 1; j <= i; j++) {
    if(i / j === Math.ceil(i / j)) {
      count++;
    }
  }
  sum += Math.ceil(count / 2);
}

console.log(sum);
