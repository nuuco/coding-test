const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const result = [];

for(let el of input) {
  let answer = 0;
  for(let i = 1; i <= el; i += 2) {
    answer += i;
  }
  result.push(answer);
}

console.log(result.join('\n'));
