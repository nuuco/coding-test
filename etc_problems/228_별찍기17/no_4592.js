const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim();

input = Number(input);

const result = [];

for(let i = 1; i < input; i++) {
  let line = " ".repeat(input - i);
  line += "*";
  if(i > 1) {
    line += " ".repeat(2 * (i - 1) - 1);
    line += "*";
  }

  result.push(line);
}

result.push("*".repeat(input * 2 - 1));

console.log(result.join('\n'));

