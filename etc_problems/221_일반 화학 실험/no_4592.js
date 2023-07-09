const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

input.pop();
const result = [];

for(let i = 1; i < input.length; i++) {
  const answer = (input[i] * 100) - (input[i - 1] * 100);
  result.push((answer / 100).toFixed(2));
}

console.log(result.join('\n'));
