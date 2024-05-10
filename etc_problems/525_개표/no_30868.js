const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const drawStick = (num) => {
  const share = Math.floor(num / 5);
  const remainder = num % 5;

  let answer = "++++ ".repeat(share) + "|".repeat(remainder);
  if (share > 0 && remainder <= 0) {
    answer = answer.slice(0, -1);
  }

  return answer;
};

const result = [];

for (let el of input) {
  result.push(drawStick(el));
}

console.log(result.join("\n"));