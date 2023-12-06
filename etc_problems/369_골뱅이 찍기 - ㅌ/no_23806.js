const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
const n = Number(input);

const result = [];
for (let i = 0; i < 5 * n; i++) {
  if (i < 1 * n || (i >= 2 * n && i < 3 * n) || i >= 4 * n) {
    result.push("@".repeat(5 * n));
  } else {
    result.push("@".repeat(n));
  }
}

console.log(result.join("\n"));
