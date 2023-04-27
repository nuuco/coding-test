const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, str] = fs.readFileSync(filePath).toString().trim().split("\n");

const num = t.split(' ').map(Number).sort((a, b) => a - b);

const result = [];
for(let char of str) {
  if(char === 'A') {
    result.push(num[0])
  }
  if(char === 'B') {
    result.push(num[1])
  }
  if(char === 'C') {
    result.push(num[2])
  }
}

console.log(result.join(' '));