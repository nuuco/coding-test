const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [target, n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let count = 0;

for(let el of input) {
  const tmp = el.repeat(2);
  if(tmp.includes(target)) {
    count++;
  }
}

console.log(count);
