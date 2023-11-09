const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

const result = [];
for (let i = 1; i <= 5 * n; i++) {
  if (i <= n || i > 5 * n - n) {
    result.push("@".repeat(5 * n));
  } else {
    result.push("@".repeat(n));
  }
}

console.log(result.join("\n"));
