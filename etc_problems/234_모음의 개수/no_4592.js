const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim();

let result = 0;

for(let el of input) {
  if(/([aeiou])/.test(el)) {
    result++;
  }
}

console.log(result);
