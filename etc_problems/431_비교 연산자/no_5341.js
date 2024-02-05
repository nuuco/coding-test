const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
let i = 1;
for (let el of input) {
  let [a, operator, b] = el.split(" ");
  a = Number(a);
  b = Number(b);
  let answer = false;
  switch (operator) {
    case ">":
      answer = a > b;
      break;
    case ">=":
      answer = a >= b;
      break;
    case "<":
      answer = a < b;
      break;
    case "<=":
      answer = a <= b;
      break;
    case "==":
      answer = a == b;
      break;
    case "!=":
      answer = a != b;
      break;
    case "E":
      answer = 0;
      break;
  }

  if (answer !== 0) {
    result.push(`Case ${i}: ${String(answer)}`);
  }
  i++;
}

console.log(result.join("\n"));
