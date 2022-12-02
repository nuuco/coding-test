const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [str, b] = fs.readFileSync(filePath).toString().trim().split(" ");

//B진법의 수를 10진법으로 바꾸기
const solution = (numStr = "", b = 10) => {
  let result = 0;
  for (let i = numStr.length - 1; i >= 0; i--) {
    const factor = numStr.length - 1 - i;
    let num = Number(numStr[i]);

    if (isNaN(num)) {
      num = numStr[i].charCodeAt() - 55;
    }
    result += b ** factor * num;
  }

  return result;
};

console.log(solution(str, b));
