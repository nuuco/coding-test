const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const num = Number(fs.readFileSync(filePath).toString().trim());

let max = 0;
let answerNum = null;

for (let i = Math.ceil(num / 2); i <= num; i++) {
  let count = 0;
  let first = num;
  let second = i;
  while (first - second >= 0) {
    count++;
    const tmp = first - second;
    first = second;
    second = tmp;
  }
  if (max < count) {
    max = count;
    answerNum = i;
  }
}

const result = [num, answerNum];
let first = num;
let second = answerNum;
while (first - second >= 0) {
  const tmp = first - second;
  first = second;
  second = tmp;
  result.push(tmp);
}

console.log(result.length);
console.log(result.join(" "));
