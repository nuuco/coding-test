const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  const result = [];
  for (let el of input) {
    if (el.length >= 6 && el.length <= 9) {
      result.push("yes");
    } else {
      result.push("no");
    }
  }

  return result.join("\n");
};

console.log(solution(input));
