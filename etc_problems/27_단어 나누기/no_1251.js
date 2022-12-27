const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("");

const result = [];
for (let i = 0; i <= input.length - 3; i++) {
  for (let j = i + 1; j <= input.length - 2; j++) {
    // 0 ~ i | i+1 ~ j | j+1 ~ 끝
    const threePart = [];
    threePart[0] = input.slice(0, i + 1);
    threePart[1] = input.slice(i + 1, j + 1);
    threePart[2] = input.slice(j + 1);
    threePart[0].reverse();
    threePart[1].reverse();
    threePart[2].reverse();
    const tmp = threePart[0].concat(threePart[1], threePart[2]).join("");

    result.push(tmp);
  }
}

result.sort();
console.log(result[0]);

//돼지 삼형제 문제랑 똑같네...
