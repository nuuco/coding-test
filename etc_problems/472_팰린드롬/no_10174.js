const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().split("\n");

const solution = (input) => {
  const result = [];

  for (let el of input) {
    const str = el.toLowerCase();
    const len = str.length;
    const half = Math.floor(len / 2);
    let answer = "Yes";
    for (let i = 0; i < half; i++) {
      if (str[i] !== str[len - 1 - i]) {
        answer = "No";
        break;
      }
    }

    result.push(answer);
  }

  return result.join("\n");
};

console.log(solution(input));
