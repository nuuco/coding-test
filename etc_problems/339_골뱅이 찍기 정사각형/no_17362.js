const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

const result = [];
for (let i = 1; i <= n + 2; i++) {
  if (i === 1 || i === n + 2) {
    result.push("@".repeat(n + 2));
  } else {
    result.push("@" + " ".repeat(n) + "@");
  }
}

console.log(result.join("\n"));
