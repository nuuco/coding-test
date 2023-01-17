const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (arr) => {
  const result = [];

  for (let el of arr) {
    let answer = "";
    const [a, b] = el
      .split(" ")
      .map((el) => el.split("").map(Number).reverse());
    let max;
    let min;

    if (a.length >= b.length) {
      max = a;
      min = b;
    } else {
      max = b;
      min = a;
    }

    let prev = 0;
    for (let i = 0; i < min.length; i++) {
      let tmp = max[i] + min[i];
      if (prev === 1) {
        tmp++;
      }

      if (tmp === 1) {
        prev = 0;
      } else if (tmp === 2) {
        tmp = 0;
        prev = 1;
      } else if (tmp === 3) {
        tmp = 1;
        prev = 1;
      }
      answer = tmp + answer;
    }

    for (let i = min.length; i < max.length; i++) {
      let tmp = max[i] + prev;

      if (tmp === 2) {
        tmp = 0;
        prev = 1;
      } else {
        prev = 0;
      }

      answer = tmp + answer;
    }

    if (prev === 1) {
      answer = prev + answer;
    }

    //앞자리 불필요 0 제거
    let startIdx = answer.length - 1;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === "0") continue;
      else {
        startIdx = i;
        break;
      }
    }

    answer = answer.slice(startIdx);

    result.push(answer);
  }

  return result.join("\n");
};

console.log(solution(arr));
