const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of input) {
  const arr = el.split(' ');
  const two = arr.splice(0, 2);
  const answer = [...arr, ...two].join(' ');
  result.push(answer);
}

console.log(result.join('\n'));
