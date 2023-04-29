const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...nums] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

nums.pop();
const result = [];
for(let num of nums) {
  if(num % t === 0) {
    result.push(`${num} is a multiple of ${t}.`);
  } else {
    result.push(`${num} is NOT a multiple of ${t}.`);
  }
}

console.log(result.join('\n'));