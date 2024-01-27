const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

if (num % 2 === 0) {
  console.log("I LOVE CBNU");
} else {
  const result = [];
  const half = Math.floor(num / 2);
  result.push("*".repeat(num));
  result.push(" ".repeat(half) + "*");

  for (let i = 1; i <= half; i++) {
    result.push(" ".repeat(half - i) + "*" + " ".repeat(i * 2 - 1) + "*");
  }
  console.log(result.join("\n"));
}
