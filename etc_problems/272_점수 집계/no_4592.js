const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

for(let el of input) {
  const scores = el.split(' ').map(Number).sort((a, b) => a - b);
  scores.shift();
  scores.pop();

  const min = scores[0];
  const max = scores[scores.length - 1];

  let answer = 'KIN';
  if(max - min < 4) {
    answer = scores.reduce((acc, cur) => acc + cur, 0);
  }

  result.push(answer);
}


console.log(result.join("\n"));
