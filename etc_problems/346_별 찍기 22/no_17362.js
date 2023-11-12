const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

const solution = (n) => {
  if (n === 1) {
    return "*";
  }
  const result = [];
  const length = 4 * (n - 1) + 3;
  const width = length - 2;
  const middleIdx = Math.ceil(length / 2);
  for (let i = 1; i <= length; i++) {
    let str = "";
    if (i === 1 || i === length) {
      str = "*".repeat(width);
    } else if (i < middleIdx) {
      if (i % 2 === 0) {
        const leftCnt = Math.ceil((i - 1) / 2);
        const rightCnt = i - 1 - leftCnt;
        str = "*" + " *".repeat(leftCnt - 1);
        if (rightCnt > 0) {
          str += " ".repeat(width - (2 * (i - 1) - 1)) + " *".repeat(rightCnt);
        }
      } else {
        const leftCnt = Math.ceil((i - 2) / 2);
        const rightCnt = i - 2 - leftCnt;
        str = "* ".repeat(leftCnt);
        str += "*".repeat(width - 2 * (i - 2));
        if (rightCnt > 0) {
          str += " *".repeat(rightCnt);
        }
      }
    } else if (i === middleIdx) {
      str = "*" + " *".repeat(middleIdx - 2);
    } else if (i > middleIdx) {
      const halfCnt = Math.ceil((length - i) / 2);
      str = "* ".repeat(halfCnt);
      if (i % 2 === 0) {
        str += " ".repeat(width - 4 * halfCnt);
      } else {
        str += "*".repeat(width - 4 * halfCnt);
      }
      str += " *".repeat(halfCnt);
    }
    result.push(str);
  }

  return result.join("\n");
};

console.log(solution(n));
