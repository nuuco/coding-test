const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
while(input.length > 0) {
  input.shift();
  const nums = input[0].split(' ').map(Number).sort((a, b) => a - b);
  input.shift();
  result.push(nums[0] + " " + nums[nums.length - 1]);
}

console.log(result.join('\n'));

