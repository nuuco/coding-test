const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);

const result = [];
for (let i = 0; i < 5 * n; i++) {
  if (i < 1 * n || i >= 4 * n) {
    result.push("@".repeat(n) + " ".repeat(3 * n) + "@".repeat(n));
  } else if (i < 2 * n || i >= 3 * n) {
    result.push("@".repeat(n) + " ".repeat(2 * n) + "@".repeat(n));
  } else {
    result.push("@".repeat(3 * n));
  }
}

console.log(result.join("\n"));
