const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number).sort((a, b) => a - b);

const result = [];
for(let i = a + 1; i < b; i++) {
  result.push(i);
}

console.log(result.length);
console.log(result.join(' '));
