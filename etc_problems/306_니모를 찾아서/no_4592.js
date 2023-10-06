const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const result = [];

for (let el of input) {
  const check = /nemo/i.test(el);
  if (check) {
    result.push("Found");
  } else {
    result.push("Missing");
  }
}

console.log(result.join("\n"));
