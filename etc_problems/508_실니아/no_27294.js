const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const n = Number(input);

if (n === 0) {
  console.log(1);
} else if (n >= 5) {
  console.log(0);
} else {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  const answer = String(result);
  console.log(answer[answer.length - 1]);
}
