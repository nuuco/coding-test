const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = "";

for(let el of input) {
  if(input.includes(el.split('').reverse().join(''))) {
    answer = el;
    break;
  }
}

console.log(answer.length + ' ' + answer[Math.floor(answer.length / 2)]);
