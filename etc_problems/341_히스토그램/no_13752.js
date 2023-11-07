const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const result = [];
for (let n of input) {
  result.push("=".repeat(n));
}

console.log(result.join("\n"));
