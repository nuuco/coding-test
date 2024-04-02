const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...numbers] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const result = [];

for (let el of numbers) {
  if (el % 2 === 0) {
    result.push(`${el} is even`);
  } else {
    result.push(`${el} is odd`);
  }
}

console.log(result.join("\n"));
