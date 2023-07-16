const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim();

input = Number(input);

const result = [];

for(let i = 1; i <= input; i++) {
  let line = " ".repeat(input - i);
  line += "*";
  if(i > 1) {
    line += ' ';
    if(i > 2) line += "* ".repeat(i - 2);
    line += "*";
  }

  result.push(line);
}

console.log(result.join('\n'));

