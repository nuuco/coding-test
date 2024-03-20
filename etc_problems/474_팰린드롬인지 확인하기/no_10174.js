const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const solution = (input) => {
  let answer = 1;
  const len = input.length;
  const half = Math.floor(len / 2);
  for (let i = 0; i < half; i++) {
    if (input[i] !== input[len - 1 - i]) {
      answer = 0;
      break;
    }
  }

  return answer;
};

console.log(solution(input));
