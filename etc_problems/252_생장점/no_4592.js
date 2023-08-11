const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

const result = [];

for(let el of input) {
  const [a, ...nums] = el.split(' ').map(Number);

  let branch = 1;

  for(let i = 0; i < nums.length; i = i + 2) {
    branch *= nums[i];
    branch -= nums[i + 1];
  }

  result.push(branch);
}

console.log(result.join('\n'));


