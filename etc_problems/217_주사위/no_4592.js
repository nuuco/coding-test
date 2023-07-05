const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  result.push(`Case ${i + 1}: ${a + b}`);
}

console.log(result.join('\n'));