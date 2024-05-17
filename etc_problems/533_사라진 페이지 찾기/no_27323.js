const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();
const result = [];

for (let el of input) {
  const answer = [];
  const [n, p] = el.split(" ").map(Number);
  const half = n / 2;
  let tmp;
  if (p <= half) {
    if (p % 2 === 0) {
      tmp = half + 1 - p / 2;
      answer.push(p - 1);
    } else {
      tmp = half + 1 - (p + 1) / 2;
      answer.push(p + 1);
    }
    answer.push(tmp * 2 - 1);
    answer.push(tmp * 2);
  } else {
    if (p % 2 === 0) {
      tmp = half + 1 - p / 2;
      answer.push(tmp * 2 - 1);
      answer.push(tmp * 2);
      answer.push(p - 1);
    } else {
      tmp = half + 1 - (p + 1) / 2;
      answer.push(tmp * 2 - 1);
      answer.push(tmp * 2);
      answer.push(p + 1);
    }
  }

  result.push(answer.join(" "));
}

console.log(result.join("\n"));
