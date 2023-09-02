const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

let peak = input.split(' ').map(Number);
const result = [];

for (let i = 0; i < peak.length; i++) {
  let count = 0;
  const target = peak[i];
  for(let j = i + 1; j < peak.length; j++) {
    if(target > peak[j]) {
      count++;
    } else if (target < peak[j]) {
      break;
    }
  }
  result.push(count);
}

const max = Math.max(...result);

console.log(max);