const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, max] = t.split(' ').map(Number);
const nums = input.split(' ').map(Number);

let cnt = 0;
let sum = 0;

for(let el of nums) {
  if(sum + el <= max) {
    cnt++;
    sum += el;
  } else {
    break;
  }
}

console.log(cnt);