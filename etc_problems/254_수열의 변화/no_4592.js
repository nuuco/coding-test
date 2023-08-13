const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, k] = t.split(' ').map(Number);
let arr = input.split(',').map(Number);
for(let i = 0; i < k; i++) {
  const nums = arr.map(Number);
  let tmpArr = [];
  for(let j = 0; j < arr.length - 1; j++) {
    tmpArr.push(nums[j + 1] - nums[j]);
  }
  arr = tmpArr;
}

console.log(arr.join(','));


