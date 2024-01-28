const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, operator, b, , c] = fs.readFileSync(filePath).toString().trim().split(" ");

let result;

switch (operator) {
  case "+":
    result = Number(a) + Number(b) === Number(c);
    break;
  case "-":
    result = Number(a) - Number(b) === Number(c);
    break;
  case "/":
    result = Number(a) / Number(b) === Number(c);
    break;
  case "*":
    result = Number(a) * Number(b) === Number(c);
    break;

  default:
    break;
}

if (result) {
  console.log("YES");
} else {
  console.log("NO");
}
