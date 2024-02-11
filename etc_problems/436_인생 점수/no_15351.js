const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

for (let name of input) {
  let count = 0;
  for (let char of name) {
    if (char === " ") continue;
    count += char.charCodeAt(0) - 64;
  }

  if (count === 100) {
    result.push("PERFECT LIFE");
  } else {
    result.push(count);
  }
}

console.log(result.join("\n"));
