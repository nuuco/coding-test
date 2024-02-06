const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];
let i = 1;
while (input[0] !== "0 0") {
  let [o, w] = input.shift().split(" ").map(Number);
  let isDead = false;
  while (input[0] !== "# 0") {
    if (isDead) {
      input.shift();
      continue;
    }
    const [operator, num] = input.shift().split(" ");
    if (operator === "F") {
      w += Number(num);
    } else if (operator === "E") {
      w -= Number(num);
    }
    if (w <= 0) {
      isDead = true;
    }
  }
  input.shift(); //# 0 제거
  let answer;
  if (isDead) {
    answer = "RIP";
  } else if (w > o / 2 && w < o * 2) {
    answer = ":-)";
  } else {
    answer = ":-(";
  }
  result.push(i + " " + answer);
  i++;
}

console.log(result.join("\n"));
