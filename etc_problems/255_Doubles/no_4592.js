const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

const result = [];

for(let el of input) {
  let tmp = el.split(' ').map(Number);
  tmp.pop();

  let double = tmp.map(el => 2 * el);
  let count = 0;
  for(let el of tmp) {
    if(double.includes(el)) {
      count++;
    }
  }
  result.push(count);
}

console.log(result.join('\n'));
