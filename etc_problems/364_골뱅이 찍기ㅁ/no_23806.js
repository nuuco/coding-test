const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);

const result = [];
for (let i = 0; i < 5 * n; i++) {
  if (i < n || i >= 4 * n) {
    result.push("@".repeat(5 * n));
  } else {
    result.push("@".repeat(n) + " ".repeat(3 * n) + "@".repeat(n));
  }
}

console.log(result.join("\n"));
