const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().split("\n");

const result = [];

for (let el of input) {
  let [a, operator, b, equal, answer] = el.split(" ");
  a = BigInt(a);
  b = BigInt(b);
  answer = BigInt(answer);

  let isCorrect = false;
  switch (operator) {
    case "+":
      isCorrect = a + b === answer;
      break;
    case "-":
      isCorrect = a - b === answer;
      break;
    case "*":
      isCorrect = a * b === answer;
      break;
    case "/":
      isCorrect = BigInt(a / b) === answer;
      break;
    default:
      break;
  }

  result.push(isCorrect ? "correct" : "wrong answer");
}

console.log(result.join("\n"));
