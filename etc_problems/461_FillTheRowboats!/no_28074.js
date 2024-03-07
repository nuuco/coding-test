const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

const result = [];

for (let i = 1; i <= num; i++) {
  if (i % 6 === 0 || i === num) {
    result.push(i);
    result.push("Go!");
  } else {
    result.push(i);
  }
}

console.log(result.join(" "));
