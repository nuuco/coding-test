const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

let i = 0;
for(let el of input) {
  i++;
  const caseNum = "Case #" + i + ": ";
  let answer = "";
  const [a, b, c] = el.split(' ').map(Number).sort((a, b) => a - b);

  if(a + b <= c) {
    answer = "invalid!";
    result.push(caseNum + answer);
    continue;
  }

  if(a === b) {
    if(b === c) {
      answer = "equilateral";
    } else {
      answer = "isosceles";
    }
  } else if(b === c) {
    answer = "isosceles";
  } else {
    answer = "scalene";
  }

  result.push(caseNum + answer);
}

console.log(result.join('\n'));


