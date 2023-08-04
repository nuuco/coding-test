const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const result = [];

for(let i = 0; i < input.length; i = i + 10) {
  result.push(input.slice(i, i + 10));
}

console.log(result.join('\n'));
