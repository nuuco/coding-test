const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim();

input = Number(input);

const result = [];

for(let i = 1; i <= input; i++) {
  let line;

  if(i % 2 === 1) {
    line = "* ".repeat(input - 1) + "*";
  } else {
    line = " *".repeat(input);
  }

  result.push(line);
}

console.log(result.join('\n'));

