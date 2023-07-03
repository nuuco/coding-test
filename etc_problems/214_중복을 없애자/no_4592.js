const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();

const result = [];

for(let el of input) {
  const [n, ...numArr] = el.split(' ');
  const answer = [];
  let prev = null;
  for(let num of numArr) {
    if(prev !== num) {
      answer.push(num);
    } 
    prev = num;
  }
  answer.push('$');
  result.push(answer.join(' '));
}

console.log(result.join('\n'));