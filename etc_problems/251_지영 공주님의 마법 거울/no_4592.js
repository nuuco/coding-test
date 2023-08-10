const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const k = Number(input.pop());

if(k === 1) {
  console.log(input.join('\n'));
} else if(k === 2) {
  const result = [];
  for(let el of input) {
    result.push(el.split('').reverse().join(''));
  }
  console.log(result.join('\n'));
}  else {
  const result = input.reverse();
  console.log(result.join('\n'));
}






